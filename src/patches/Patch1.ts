import { log } from "../Util";
import { Database } from "../DB.js";
import { DBPatch } from "./DBPatch.js";

/**
* Adds registration_role column to registrations table
* and uses 'Flussufer' as default value for all entries.
*/
export class Patch1 extends DBPatch {
    constructor(db: Database) {
        super(db);
    }

    protected satisfied(): boolean { 
        return this.columnExists("registrations", "registration_role");
    }

    protected checkPreconditions(): boolean { return this.tableExists("registrations"); }

    protected apply(): void {
        this.dbbegin();
        this.connection.pragma("foreign_keys = OFF");
        // adding a column with NOT NULL constraint to an existing
        // table in SQLite requires creating a temporary table of the new format
        // and moving all the data over: https://www.sqlite.org/lang_altertable.html
        this.connection.prepare(`
            CREATE TABLE IF NOT EXISTS new_registrations(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user TEXT NOT NULL,
            guild TEXT NOT NULL,
            api_key TEXT NOT NULL,
            gw2account TEXT NOT NULL,
            registration_role TEXT,
            created TIMESTAMP DEFAULT (datetime('now','localtime')),
            UNIQUE(user, guild) ON CONFLICT REPLACE,
            UNIQUE(guild, api_key)
        )`).run();
        // move the data over
        this.connection.prepare(`
            INSERT INTO new_registrations(id, user, guild, api_key, gw2account, registration_role, created)
            SELECT r.id, r.user, r.guild, r.api_key, r.gw2account, ?, r.created 
            FROM registrations AS r 
        `).run("Flussufer");
        // delete old table and rename new one
        this.connection.prepare(`DROP TABLE registrations`).run();
        this.connection.prepare(`ALTER TABLE new_registrations RENAME TO registrations`).run();
        this.connection.pragma("foreign_keys = ON");
    }

    public revert(): void {
        this.dbbegin();
        this.connection.pragma("foreign_keys = OFF");
        // adding a column with NOT NULL constraint to an existing
        // table in SQLite requires creating a temporary table of the new format
        // and moving all the data over: https://www.sqlite.org/lang_altertable.html
        this.connection.prepare(`
            CREATE TABLE IF NOT EXISTS new_registrations(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user TEXT NOT NULL,
            guild TEXT NOT NULL,
            api_key TEXT NOT NULL,
            gw2account TEXT NOT NULL,
            created TIMESTAMP DEFAULT (datetime('now','localtime')),
            UNIQUE(user, guild) ON CONFLICT REPLACE,
            UNIQUE(guild, api_key)
        )`).run();
        // move the data over
        this.connection.prepare(`
            INSERT INTO new_registrations(id, user, guild, api_key, gw2account, created)
            SELECT r.id, r.user, r.guild, r.api_key, r.gw2account, r.created 
            FROM registrations AS r 
        `).run();
        // delete old table and rename new one
        this.connection.prepare(`DROP TABLE registrations`).run();
        this.connection.prepare(`ALTER TABLE new_registrations RENAME TO registrations`).run();
        this.connection.pragma("foreign_keys = ON");
        this.dbcommit();
    }

    protected commit(): void { this.dbcommit(); }

    protected rollback(): void { this.dbrollback(); }
}