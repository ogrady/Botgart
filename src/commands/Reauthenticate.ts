import * as discord from "discord.js";
import { BotgartClient } from "../BotgartClient";
import { BotgartCommand } from "../BotgartCommand";
import * as L from "../Locale";
import { log } from "../Util";

/**
 Testcases:
 - missing parameters -> error
 - regular use -> reauth success
 - remove a formerly valid API key with user still in guild -> key gets unauthenticated, user gets his auth role removed
 - remove a formerly valid API key with user no longer in guild -> key gets unauthenticated
 - cron: all of the above -> reauth success
 */
export class Reauthenticate extends BotgartCommand {

    constructor() {
        super("reauthenticate", {
                aliases: ["reauthenticate", "reauth", "revalidate"],
                // userPermissions: ['ADMINISTRATOR']
            },
            {
                availableAsDM: true,
                cronable: true
            }
        );
    }

    command(message: discord.Message, responsible: discord.User, sguild: discord.Guild, args) {
        const cl: BotgartClient = this.getBotgartClient();
        cl.revalidationService.revalidateKeys();
        log("info", "Reauthentication started.");
    }

    postExecHook(message, args, result) {
        return message.util.send(L.get("PRUNING_COMPLETE"));
    }
}

module.exports = Reauthenticate;