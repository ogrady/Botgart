import { PermissionTypes } from "../BotgartCommand";
import { AbstractDbRepository } from "./AbstractDbRepository";

export class Permission {
    command_permissions_id: number;
    command: string;
    receiver: string;
    type: PermissionTypes;
    value: number;
    guild: string;
}

export class CommandPermissionRepository extends AbstractDbRepository {
    public getPermissions(guildId: string): Permission[] {
        const execute = this.execute(db => {
            const statement = db.prepare("select command_permissions_id, command, receiver, type, value,guild\nfrom command_permissions\nwhere guild = :guildId\norder by guild, command, type, receiver, value");
            return statement.all({ guildId: guildId }) as Permission[];
        });
        return execute || [];
    }

    public checkPermission(command: string, uid: string, roles: string[], gid?: string): [boolean, number] {
        roles.push(uid);
        const params = "?,".repeat(roles.length).slice(0, -1);
        const permission = this.execute(db =>
            db.prepare(`
                SELECT TOTAL(value) AS permission -- total() returns 0.0 for the sum of [null]
                FROM command_permissions
                WHERE command = ?
                  AND guild = ?
                  AND receiver IN (${params})
                  AND type IN ('user', 'role') -- avoid messups with users named "everyone"
            `).get([command, gid].concat(roles)).permission);
        return [permission > 0, permission];
    }

    public removePermission(permissionId: number, guildId: string): number {
        return this.execute(db => db.prepare(`DELETE
                                              FROM command_permissions
                                              WHERE guild = :guildId
                                                AND command_permissions_id = :permId`)
            .run({ "guildId": guildId, "permId": permissionId }).changes);
    }

    public setPermission(command: string, receiver: string, type: PermissionTypes, value: number, gid?: string): number | undefined {
        return this.execute(db => {
            let perm = undefined;
            db.transaction((_) => {
                db.prepare(`INSERT INTO command_permissions(command, receiver, type, guild, value)
                            VALUES (?, ?, ?, ?, ?)
                            ON CONFLICT(command, receiver) DO UPDATE SET value = ?`).run(command, receiver, type, gid, value, value);
                perm = db.prepare(`
                    SELECT SUM(value) AS perm
                    FROM command_permissions
                    WHERE command = ?
                      AND guild = ?
                      AND receiver = ?`
                ).get(command, gid, receiver).perm;
            })(null);
            return perm;
        });
    }
}