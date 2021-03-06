import { logger } from "../../util/Logging";
import { Database } from "../Database";
import { DBPatch } from "./DBPatch";

const LOG = logger();

export class DatabasePatcher {
    private readonly database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public createPatch<T extends DBPatch>(Type: { new(db: Database): T }, db: Database): T {
        return new Type(db);
    }

    async applyPatch(patchName: typeof DBPatch, revert = false) {
        let patch: DBPatch | undefined = undefined;
        try {
            patch = this.createPatch(patchName, this.database);
            if (patch) {
                if (revert) {
                    LOG.info(`Reverting patch '${patchName.name}'.`);
                    await patch.revert();
                    LOG.info("Patch reversion done.");
                } else {
                    LOG.info(`Applying patch '${patchName.name}'.`);
                    await patch.execute();
                    LOG.info("Patch application done.");
                }
            }
        } finally {
            if (patch !== undefined) {
                patch.close(); // free database after applying/reverting the patch
            }
        }
    }

    async applyPatches(patches: typeof DBPatch[], revert = false) {
        const ps = revert ? patches.reverse() : patches;
        for (const p of ps) {
            await this.applyPatch(p, revert);
        }
    }
}