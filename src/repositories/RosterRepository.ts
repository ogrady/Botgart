import * as discord from "discord.js";
import moment from "moment-timezone";
import { ResetLeader } from "../commands/resetlead/ResetLeader";
import * as ResetUtil from "../commands/resetlead/ResetUtil";
import { Roster } from "../commands/resetlead/Roster";
import { WvwMap } from "../commands/resetlead/WvwMap";
import { logger } from "../util/Logging";
import { AbstractDbRepository } from "./AbstractDbRepository";

const LOG = logger();

type RosterPost = [Roster, discord.TextChannel, discord.Message];

export class RosterRepository extends AbstractDbRepository {
    public getActiveRosters(guild: discord.Guild): Promise<RosterPost>[] {
        return this.execute(db => db.prepare("SELECT rr.week_number AS wn, rr.year FROM reset_rosters AS rr WHERE week_number >= ? AND year >= ? AND guild = ?")
            .all(ResetUtil.currentWeek(), moment().utc().year(), guild.id)
            .map(row => this.getRosterPost(guild, row.wn, row.year)))
            .filter((roster) => roster !== undefined);
    }

    /**
     * Upserts the roster post for a guild. That is:
     * If no roster for that week exists in that guild, the post is stored.
     * Else, the commanders in that post are updated.
     * guild: the guild to upsert the roster post in.
     * roster: the roster to upsert. Uniqueness will be determined by week number and year of the roster.
     * message: the message that represents the roster post.
     */
    public upsertRosterPost(guild: discord.Guild, roster: Roster, message: discord.Message): void {
        return this.execute(db => {
            db.transaction((_) => {
                const current = db.prepare("SELECT reset_roster_id AS rrid FROM reset_rosters WHERE guild = ? AND week_number = ? AND year = ?").get(guild.id, roster.weekNumber, roster.year);
                let rosterId = current ? current.rrid : undefined;
                if (rosterId === undefined) {
                    // completely new roster -> create new roster and store ID
                    rosterId = db.prepare("INSERT INTO reset_rosters(week_number, year, guild, channel, message) VALUES(?,?,?,?,?)")
                        .run(roster.weekNumber, roster.year, guild.id, message.channel.id, message.id)
                        .lastInsertRowid;
                } else {
                    // there is already a roster entry -> drop all leaders and insert the current state
                    db.prepare("DELETE FROM reset_leaders WHERE reset_roster_id = ?").run(rosterId);
                }
                const stmt = db.prepare("INSERT INTO reset_leaders(reset_roster_id, player, map, visible) VALUES(?,?,?,?)");
                roster.getLeaders().forEach(([map, leader]) => stmt.run(rosterId, leader.name, map.name, 0));
            })(null);
        });
    }

    async getRosterPost(guild: discord.Guild, weekNumber: number, year: number): Promise<undefined | RosterPost> {
        let postExists = false;
        const roster = new Roster(weekNumber, year);
        const entries = this.execute(db => db.prepare(`
            SELECT rr.reset_roster_id,
                   rr.week_number,
                   rr.year,
                   rr.guild,
                   rr.channel,
                   rr.message,
                   rl.player,
                   rl.map,
                   rl.visible
            FROM reset_rosters AS rr
                     LEFT JOIN reset_leaders AS rl
                               ON rr.reset_roster_id = rl.reset_roster_id
            WHERE rr.guild = ?
              AND rr.week_number = ?
              AND rr.year = ?`)
            .all(guild.id, weekNumber, year));
        entries.forEach(r => roster.addLead(WvwMap.getMapByName(r.map), new ResetLeader(r.player, r.visible == 1))); // '1' and '0' used in sqlite -> typefree compare

        let channel: discord.TextChannel | undefined = undefined;
        let message: discord.Message | undefined = undefined;
        if (entries.length > 0) {
            channel = guild.channels.cache.find(c => c.id === entries[0].channel) as discord.TextChannel;
            if (channel) {
                try {
                    message = await channel.messages.fetch(entries[0].message);
                    postExists = true;
                } catch (e) {
                    LOG.error(`Could not resolve message with ID ${entries[0].message} from channel ${channel.name} in guild ${guild.name}.`);
                    postExists = false;
                }
            }
            if (!postExists) {
                // there was a roster in the DB to which there is no accessible roster-post left -> delete from db!
                this.execute(db => db.prepare("DELETE FROM reset_leaders WHERE reset_roster_id = ?").run(entries[0].reset_roster_id));
                this.execute(db => db.prepare("DELETE FROM reset_rosters WHERE reset_roster_id = ?").run(entries[0].reset_roster_id));
            }
        }

        return entries && postExists ? [roster as Roster, channel as discord.TextChannel, message as discord.Message] : undefined;
    }
}