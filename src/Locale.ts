//import { WvWMap } from "./commands/resetlead/ResetLead";

export let EN : Object = {
    "INTERNAL_ERROR": "An internal error occured. Please contact an administrator about this.",

    "NOT_PERMITTED": "You do not have the required permissions to execute this command.",
    "PERMISSION_SET_TO": "Permission for `{0}` for command `{1}` set to **{2}**.",
    "WELCOME": "Welcome to the Riverside-Discord. :)\n Much of this server isn't accessible to for guests. Please authenticate using an API-key:\n\n1. Visit https://account.arena.net/applications\n2. Click 'new key'\n3. Post `,auth` followed by your new key per direct message (this window) to me.\n\nEg: `,auth 11111111-1111-1111-1111-11111111111111111111-1111-1111-1111-111111111111`.",
    "NO_SUCH_COMMAND": "I don't know the command '{0}' you gave me.",
    "NOT_AVAILABLE_AS_DM": "This command is not usable as direct message. Please try it again within a server.",
    "NOT_CRONABLE": "This command can not be used in a cronjob.",
    "NO_DEL_PERM": "I could not delete your last message. Please remove it yourself for security reasons.",
    "KEY_INVALID_FORMAT": "Please give me a valid API-key. You can acquire one at https://account.arena.net/.",
    "KEY_ACCEPTED": "Welcome, friend! Please read up on the information in INFOCENTER, to use this Discord properly. :)",
    "KEY_DECLINED": "The account you gave me is not situated on a valid server or the API-key is invalid.",
    "KEY_NOT_UNIQUE": "The API-key you gave me is already in use. Please generate a new key.\nRemove the old key at https://account.arena.net/, if you don't know about it being used.",
    "KEY_INVALIDATED": "Hi!\nThe API-key you gave me is no longer considered valid.\nI thereby remove your access for the internal channels. You can re-register any time with a valid API-key.",
    "CHECKING_KEY": "Checking API-key...",
    "REG_ROLE_NOT_FOUND": "The assigned role does not exist. Please inform an administrator about this.",
    "PRUNING_COMPLETE": "API-keys are now beeing re-validated. This can take a while.",
    "FIND_DUPES_COMPLETE": "Duplicate search complete.",
    "GUILD_LOG_COMPLETE": "Guild log has successfully be retrieved.",
    "PERMANENT_ROLE_ADD_SUCC": "Permanent role has successfully been added.",
    "PERMANENT_ROLE_ADD_FAIL": "Permanent role could not be added. Maybe the role is already permanent for that user.",
    "PERMANENT_ROLE_RM_SUCC": "Permanent role was successfully removed.",
    "PERMANENT_ROLE_RM_FAIL": "Permanent role could not be removed.",
    "WHOIS_EMPTY_RESULT": "No results found.",
    "WHOIS_RESULTS": "The following possible results were found:",
    "DLOG_AUTH": "User {0} with ingame account `{1}` has been authorised with role {2}.",
    "DLOG_UNAUTH": "User {0} with ingame account `{1}` has been de-authorised and lost their role {2}.",

    "CRONJOB_STORED": "Your cronjob has been saved with ID {0}. Next execution: {1}.",
    "CRONJOB_NOT_STORED": "Your cronjob could not be created. Either the command is not available for crons, or the time you gave me is invalid. Please check https://crontab.guru/ in the latter case.",
    "CRONJOB_DELETED": "The cronjob has been deleted.",
    "CRONJOB_NOT_DELETED": "The cronjob could not be deleted.",
    
    "FAQ_STORED": "The FAQ entry has been created.",
    "FAQ_NOT_STORED": "The FAQ-entry could not be created.",
    "FAQ_DELETED": "The FAQ entry for '{0}' has been deleted.",
    "FAQ_NOT_DELETED": "The FAQ entry for '{0}' could not be deleted.",
    "FAQ_NOT_FOUND": "There is no FAQ-entry for the keyword '{0}'.",
    "CIRCULAR_CRON": "Cronjobs can not be recursive for security reasons.",

    "GUILD_LOG_PERMISSION_FAIL": "I need the API-key of a guild leader to retrieve the guild log.",
    
    "HELPTEXT_PERMIT": "Please use the command with the following parameters:\n`\"<name or alias of a command>\" \"<snowflake or name of the player or role (MUST EXIST)>\" <numerical permission value, positive to allow, negative to disallow>`",
    "HELPTEXT_SAY": "Please use the command with the following parameters:\n`<Channel, in which the bot should speak> \"<Text to speak>\"`.",
    "HELPTEXT_ADD_CRON": "Please use the command with the following parameters:\n\"`<Cron-Scheduling-String (UNIX-Format)>`\" \"`<Command to execute>`\" `<Parameters for that command as specified by the help text>`.",
    "HELPTEXT_DEL_CRON": "Please use the command with the following parameter:\n`<ID of the cronjob to delete>`\nIDs of all cronjobs can be found with the `lscrons`-command.",
    "HELPTEXT_POLL": "Please use the command with the following parameters:\n`<Channel to create the poll in> \"<Question for the poll>\" \"<Emotes available for voting>\"`.",
    "HELPTEXT_ADD_FAQ": "Please use the command with the following parameters:\n`\"<Keywords to link to the entry, separated with semicolons (;)>` `\"<FAQ text>\"`.",
    "HELPTEXT_GET_FAQ": "Please use the command with the following parameter:\n`<Keyword>`",
    "HELPTEXT_DEL_FAQ": "Please use the command with the following parameter:\n`<Keyword>`",
    "HELPTEXT_GUILD_LOG": "Please use the command with the following parameters:\n\"`<Name of the guild>`\" `<API-key of the leader>` `<Channel to pipe the log to>`",
    "HELPTEXT_ADD_PERMAROLE": "Please use the command with the following parameters:\n`<@user>` `<@role>`",
    "HELPTEXT_RM_PERMAROLE": "Please use the command with the following parameters:\n`<@user>` `<@role>`",
    "HELPTEXT_WHOIS": "Please use the command with the following parameters:\n`<part of an account- or discord-name (at least three characters!)>`",
    "HELPTEXT_DISCORD_LOG": "Please use the command with the following parameters:\n`<arbitary event type>` `<text channel to which messages of this type should be directed>`",
    "HELPTEXT_PRUNE": "Please use the command with the following parameters:\n`<number of days to be considered inactive (1 <= n <= 30)>` `<text the pruned members should receive as private message>`",
    "HELPTEXT_RESETLEAD": "Please use the command with the following parameters:\n`<Channel, in which the post should be created>` (`<number of week for the roster, default: current week>`) (`year for the roster, default: current year`)",
    "HELPTEXT_ADD_RESETLEAD": "Please use the command with the following parameters:\n`<player to add (any text)>` `<{0}>` `<week number (optional)>` `<year (optional)>`",
    "HELPTEXT_REMOVE_RESETLEAD": "Please use the command with the following parameters:\n`<player to add (any text)>` `<week number (optional)>` `<year (optional)>`",
    "HELPTEXT_SET_TS3_RESET_ROSTER": "",
    "HELPTEXT_GRANT_ACHIEVEMENT": "Please use the command with the following parameters:\n`<player name>` `<achievement name>` `<timestamp dd.mm.yyyy hh:mm (optional, default: now)>`",

    "DESC_PERMIT": "Grants or revokes permissions for a role or user to use a command.",
    "DESC_DEL_CRON": "Deletes the cronjob with the given ID.",
    "DESC_LIST_CRONS": "Lists all cronjobs.",
    "DESC_MAKE_CRON": "Creates a new cronjob for the given timestamp.",
    "DESC_AUTHENTICATE": "Authenticates the user with a GW2-API-key.",
    "DESC_POLL": "Creates a poll with preselected emotes for voting.",
    "DESC_REAUTHENTICATE": "Re-authenticates all GW2-API-keys again.",
    "DESC_SAY": "Speaks the given text in a channel.",
    "DESC_HELP": "This command. Lists all available commands with a short description.",
    "DESC_TS_SYNC": "Syncs all roles with the TS3-Server (_INACTIVE_).",
    "DESC_ADD_FAQ": "Adds a new FAQ entry.",
    "DESC_DEL_FAQ": "Removes an entry from the FAQ.",
    "DESC_GET_FAQ": "Gives the FAQ entry to a keyword.",
    "DESC_LIST_FAQS": "Lists all FAQ entries.",
    "DESC_FIND_DUPES": "Finds all Discord users sharing one GW2 account..",
    "DESC_GUILD_LOG": "Pipes the guild log of a guild to a Discord channel.",
    "DESC_REPAIR_ROLES": "Gives all users the role they have been assigned as per the database.",
    "DESC_ADD_PERMAROLE": "Permanently gives a user a role he will be assigned even if he rejoins the server.",
    "DESC_RM_PERMAROLE": "Removes a permanent role from a user, so that they won't have it assigned again upon rejoining the server.",
    "DESC_WHOIS": "Looks up the pair of Discord name and ingame name.",
    "DESC_DISCORD_LOG": "Sets up the connection between an event-type and a Discord-text-channel.",
    "DESC_PRUNE": "Prunes inactive users without roles.",
    "DESC_RESETLEAD": "Creates a post for commanders to roster.",
    "DESC_ADD_RESETLEAD": "Manually adds a player as reset lead.",
    "DESC_REMOVE_RESETLEAD": "Manually removes a player as reset lead.",
    "DESC_SET_TS3_RESET_ROSTER": "Syncs the current reset roster to TS3.",
    "DESC_ADD_EVENT": "Creates a new event.",
    "DESC_GRANT_ACHIEVEMENT": "Grants a player an achievement.",

    "COMMANDER_TAG_UP": "{0} tagged up in Teamspeak-channel '{1}'! {2}",

    "RED_BORDERLANDS": "Red Borderlands",
    "BLUE_BORDERLANDS": "Blue Borderlands",
    "GREEN_BORDERLANDS": "Green Borderlands",
    "ETERNAL_BATTLEGROUNDS": "Eternal Battlegrounds",
    "RESETLEAD_HEADER": "React with one of these emotes to set yourself as reset lead. React with ❌ to withdraw your lead.",
    "ROSTER_EXISTS": "There is already a roster for that week: {0}",
    "WEEK_NUMBER": "Week Number",
    "ROSTER_LEAD_ADDED": "Player `{0}` has successfully been added as reset lead for the map `{1}` on week {2}. See {3}",
    "ROSTER_LEAD_REMOVED": "Player `{0}` has successfully been removed as reset lead for week {1}. See {2}",

    "MK_EVENT_DATE": "Enter a valid date with time next. E.g. `15.02.2022 16:33`",
    "MK_EVENT_TITLE": "Enter a title for the event now.",
    "MK_EVENT_DESC": "Enter a short description for the event.",
    "MK_EVENT_REMINDER": "If you want to have an automatic reminder posted for your event, enter how many minutes before the event the reminder should be posted. If you do not want to have reminder, enter a negative number instead.",
    "MK_EVENT_TIMEOUT": "The time for input ran out and event creation was canceled. You can start over the event creation.",

    "ACHIEVEMENT_UNLOCKED": "Achievement unlocked",

    "ACHIEVEMENT_NAME_GLIMMER": "Glimmer",
    "ACHIEVEMENT_DESC_GLIMMER": "Tag up for an hour.",
    "ACHIEVEMENT_FLAV_GLIMMER": "Welcome to the bridge, commander!",

    "ACHIEVEMENT_NAME_SUNRAY": "Sunray",
    "ACHIEVEMENT_DESC_SUNRAY": "Tag up for ten hours.",
    "ACHIEVEMENT_FLAV_SUNRAY": "Welcome back, commander!",

    "ACHIEVEMENT_NAME_BLAZINGLIGHT": "Blazing Light",
    "ACHIEVEMENT_DESC_BLAZINGLIGHT": "Tag up for one hundred hours.",
    "ACHIEVEMENT_FLAV_BLAZINGLIGHT": "The troops are counting on you.",

    "ACHIEVEMENT_NAME_SUPERNOVA": "Supernova",
    "ACHIEVEMENT_DESC_SUPERNOVA": "Tag up for one thousand hours.",
    "ACHIEVEMENT_FLAV_SUPERNOVA": "Hosts abide your arrival.",

    "ACHIEVEMENT_NAME_TRAILBLAZER": "Trailblazer",
    "ACHIEVEMENT_DESC_TRAILBLAZER": "Tag up during a reset. For this to count, you need to tag up at before the reset takes place and lead for at least two hours from then.",
    "ACHIEVEMENT_FLAV_TRAILBLAZER": "You are the calm before the storm.",
}

export let DE : Object = {
    "INTERNAL_ERROR": "Ein interner Fehler ist aufgetreten. Bitte benachrichtige einen Administrator, damit dieser sich des Problems annehmen kann.",

    "NOT_PERMITTED": "Du hast nicht die nötigen Berechtigungen um diesen Befehl auszuführen.",
    "PERMISSION_SET_TO": "Berechtigung für `{0}` auf Befehl `{1}` ist jetzt **{2}**.",
    "WELCOME": "Herzlich willkommen auf dem Flussufer-Discord! :)\nEin Großteil des Servers ist für Gäste nicht zugänglich. Bitte authentifiziere dich mittels eines API-Keys:\n\n1. Besuche dazu https://account.arena.net/applications\n2. Klicke auf \"Neuer Schlüssel\"\n3. Poste `,auth ` gefolgt von deinem neuen Schlüssel per Direktnachricht (dieses Fenster) an mich.\n\nZ.B: `,auth 11111111-1111-1111-1111-11111111111111111111-1111-1111-1111-111111111111`.",
    "NO_SUCH_COMMAND": "Den von dir angegebenen Befehl '{0}' kenne ich nicht.",
    "NOT_AVAILABLE_AS_DM": "Dieser Befehl ist per Privatnachricht nicht nutzbar. Bitte versuche es auf einem Server erneut.",
    "NOT_CRONABLE": "Dieser Befehl kann nicht als Teil eines Cronjobs verwendet werden.",
    "NO_DEL_PERM": "Ich kann leider keine Nachrichten löschen. Bitte entferne aus Sicherheitsgründen deine letzte Nachricht manuell.",
    "KEY_INVALID_FORMAT": "Bitte gib mir einen gültigen API-Key. Diesen erhältst du auf https://account.arena.net/.",
    "KEY_ACCEPTED": "Herzlich willkommen, Flussufler! Bitte lies dir die Informationen im INFOCENTER durch, um Discord im vollen Maße nutzen zu können. :)",
    "KEY_DECLINED": "Der von dir angegebene Account ist derzeit nicht auf Flussufer angesiedelt oder ist kein gültiger API-Key.",
    "KEY_NOT_UNIQUE": "Der von dir angegebene API-Key ist leider schon in Benutzung. Bitte generiere einen neuen Key.\nEntferne den alten Key auf https://account.arena.net/, falls dir dessen Nutzung nicht bekannt ist.",
    "KEY_INVALIDATED": "Hallo!\nDer von dir angegebene API-Key ist nicht mehr auf Flussufer angesiedelt.\nDaher müssen wir dir leider die Zugangsrechte für den privaten Bereich entziehen. Du kannst dich gerne jederzeit mit einem neuen API-Key authentifizieren.",
    "CHECKING_KEY": "Prüfe API-Key...",
    "REG_ROLE_NOT_FOUND": "Die eingestellte Rolle existiert nicht auf dem Server. Bitte informiere einen Administrator.",
    "PRUNING_COMPLETE": "API-Keys werden nun re-validiert. Das kann eine Weile dauern.",
    "FIND_DUPES_COMPLETE": "Duplikatsuche abgeschlossen.",
    "GUILD_LOG_COMPLETE": "Gilden-Logbuch erfolgreich abgerufen.",
    "PERMANENT_ROLE_ADD_SUCC": "Die permanente Rolle wurde erfolgreich hinzugefügt.",
    "PERMANENT_ROLE_ADD_FAIL": "Die permanente Rolle konnte nicht hinzugefügt werden. Möglicherweise ist diese Rolle bereits permanent dem Benutzer zugewiesen.",
    "PERMANENT_ROLE_RM_SUCC": "Die permanente Rolle wurde erfolgreich entfernt.",
    "PERMANENT_ROLE_RM_FAIL": "Die permanente Rolle konnte nicht entfernt werden.",
    "WHOIS_EMPTY_RESULT": "Keine Treffer gefunden.",
    "WHOIS_RESULTS": "Die folgenden möglichen Treffer wurden gefunden:",
    "DLOG_AUTH": "Benutzer {0} mit dem Ingame-Account `{1}` wurde mit der Rolle {2} autorisiert.",
    "DLOG_UNAUTH": "Benutzer {0} mit dem Ingame-Account `{1}` wurde ent-autorisiert und hat die Rolle {2} verloren.",

    "CRONJOB_STORED": "Dein Cronjob wurde gespeichert mit der ID {0}. Nächste Ausführung: {1}.",
    "CRONJOB_NOT_STORED": "Dein Cronjob konnte nicht erstellt werden. Entweder, der Befehl ist für Cronjobs nicht verfügbar oder die von dir übergebene Zeitangabe ist ungültig. Du kannst diese auf https://crontab.guru/ überprüfen.",
    "CRONJOB_DELETED": "Der Cronjob wurde gelöscht.",
    "CRONJOB_NOT_DELETED": "Der Cronjob konnte nicht gelöscht werden.",
    
    "FAQ_STORED": "Der FAQ-Eintrag wurde erstellt.",
    "FAQ_NOT_STORED": "Der FAQ-Eintrag konnte nicht erstellt werden.",
    "FAQ_DELETED": "Der FAQ-Eintrag für '{0}' wurde gelöscht.",
    "FAQ_NOT_DELETED": "Der FAQ-Eintrag für '{0}' konnte nicht gelöscht werden.",
    "FAQ_NOT_FOUND": "Es gibt keinen FAQ-Eintrag zu dem Stichwort '{0}'.",
    "CIRCULAR_CRON": "Cronjobs dürfen aus Sicherheitsgründen selbst keine Cronjobs schedulen.",

    "GUILD_LOG_PERMISSION_FAIL": "Für das Abrufen des Gilden-Logbuchs muss ein API-Key des Anführers hinterlegt sein.",
    
    "HELPTEXT_PERMIT": "Bitte benutze den Befehle mit folgenden Parametern:\n`<Name oder Alias des Befehls> <Name des Spielers oder der Rolle oder Snowflake (MUSS EXISTIEREN)> <numerischer Berechtigungs-Wert, positiv um zu erlauben, negativ um zu verbieten>`",
    "HELPTEXT_SAY": "Bitte benutze den Befehl mit folgenden Parametern:\n`<Channel, in dem der Bot sprechen soll> \"<Text, den der Bot abschicken soll>\"`.",
    "HELPTEXT_ADD_CRON": "Bitte benutze den Befehl mit folgenden Parametern:\n\"`<Cron-Scheduling-String (UNIX-Format)>`\" \"`<Befehl, der gescheduled werden soll>`\" `<Parameter für den vorausgehenden Befehl, entsprechend dessen Hilfetext>`.",
    "HELPTEXT_DEL_CRON": "Bitte benutze den Befehl mit folgendem Parameter:\n`<ID des Cronjobs, der gelöscht werden soll>`\nIDs aller Cronjobs kannst du mit dem `lscrons`-Befehl anzeigen lassen.",
    "HELPTEXT_POLL": "Bitte benutze den Befehl mit folgenden Parametern:\n`<Channel, in dem der Poll erstellt werden soll> \"<Frage, um die es im Poll geht>\" \"<Emotes, die zur Reaktion zur Verfügung stehen sollen>\"`.",
    "HELPTEXT_ADD_FAQ": "Bitte benutze den Befehl mit folgenden Parametern:\n`\"<Schüsselwörter, die mit der Antwort verknüpft werden sollen. Werden am Semikolon (;) getrennt>` `\"<Text, der angezeigt werden sollen>\"`.",
    "HELPTEXT_GET_FAQ": "Bitte benutze den Befehl mit folgendem Parameter:\n`<Schüsselwort>`",
    "HELPTEXT_DEL_FAQ": "Bitte benutze den Befehl mit folgendem Parameter:\n`<Schüsselwort>`",
    "HELPTEXT_GUILD_LOG": "Bitte benutze den Befehl mit folgenden Parametern:\n\"`<Name der Gilde>`\" `<API Key des Anführers>` `<Channel, in dem der Log geschrieben werden soll>`",
    "HELPTEXT_ADD_PERMAROLE": "Bitte benutze den Befehl mit folgenden Parametern:\n`<@user>` `<@role>`",
    "HELPTEXT_RM_PERMAROLE": "Bitte benutze den Befehl mit folgenden Parametern:\n`<@user>` `<@role>`",
    "HELPTEXT_WHOIS": "Bitte benutze den Befehl mit folgenden Parametern:\n`<Teilname des Accounts oder Discord-Namens (mindestens drei Buchstaben!)>`",
    "HELPTEXT_DISCORD_LOG": "Bitte benutze den Befehl mit folgenden Parametern:\n`<Eventtyp (beliebig)>` `<Textkanal, in den Nachrichten dieses Typs geleitet werden sollen>`",
    "HELPTEXT_PRUNE": "Bitte benutze den Befehl mit folgenden Parametern:\n`<Anzahl Offline-Tage bis ein Benutzer als inaktiv angesehen wird (1 <= n <= 30)>` `<Text, den entfernte Benutzer als Privatnachricht erhalten>`",
    "HELPTEXT_RESETLEAD": "Bitte benutze den Befehl mit folgenden Parametern:\n`<Channel, in dem der Post erstellt werden soll>` (`Kalenderwoche für den Reset, Standard: aktuelle Woche`) (`Jahr für den Reset, Standard: aktuelles Jahr`)",
    "HELPTEXT_ADD_RESETLEAD": "Bitte benutze den Befehl mit folgenden Parametern:\n`<Spielername (beliebiger Text)>` `<{0}>` `<Kalenderwoche (optional)>`",
    "HELPTEXT_REMOVE_RESETLEAD": "Bitte benutze den Befehl mit folgenden Parametern:\n`<Spielername (beliebiger Text)>` `<Kalenderwoche (optional)>`",
    "HELPTEXT_SET_TS3_RESET_ROSTER": "",
    "HELPTEXT_GRANT_ACHIEVEMENT": "Bitte benutze den Befehl mit folgenden Parametern:\n`<Spieler>` `<Name der Errungenschaft>` `<Zeitstempel dd.mm.yyyy hh:mm (optional, Standard: jetzt)>`",

    "DESC_PERMIT": "Vergibt oder entzieht einer Rolle oder einem Benutzer oder einer Rolle Berechtigungen für Befehle.",
    "DESC_DEL_CRON": "Löscht den Cronjob mit der angegebenen ID.",
    "DESC_LIST_CRONS": "Listet alle offenen Cronjobs auf.",
    "DESC_MAKE_CRON": "Erstellt einen neuen Cronjob auf den angegebenen Zeitpunkt.",
    "DESC_AUTHENTICATE": "Authentifiziert einen Benutzer mittels eines GW2-API-Keys.",
    "DESC_POLL": "Erstellt einen Poll mit vorgegebenen Emotes als Abstimmoptionen.",
    "DESC_REAUTHENTICATE": "Authentifiziert alle vorhandenen GW2-API-Keys erneut.",
    "DESC_SAY": "Spricht den übergebenen Text im übergebenen Channel.",
    "DESC_HELP": "Dieser Befehl. Listet alle verfügbaren Befehle mit einer kurzen Beschreibung auf.",
    "DESC_TS_SYNC": "Synchronisiert die Rollen mit dem Teamspeak3-Server (_NICHT AKTIV_).",
    "DESC_ADD_FAQ": "Fügt den FAQ einen Eintrag hinzu.",
    "DESC_DEL_FAQ": "Entfernt einen Eintrag von den FAQ.",
    "DESC_GET_FAQ": "Gibt die Antwort zu einem Stichwort der FAQ wieder.",
    "DESC_LIST_FAQS": "Listet alle vorhandenen FAQs auf.",
    "DESC_FIND_DUPES": "Findet alle Discord-Benutzer, die sich einen GW2-Account teilen.",
    "DESC_GUILD_LOG": "Schreibt den Guildlog einer Gilde in einen Discord-Channel.",
    "DESC_REPAIR_ROLES": "Gibt allen Benutzern die Rolle, die in der Datenbank für sie hinterlegt ist.",
    "DESC_ADD_PERMAROLE": "Fügt einem Benutzer permanent eine Rolle hinzu, die ihm beim erneuten Betreten des Servers automatisch wieder zugewiesen wird.",
    "DESC_RM_PERMAROLE": "Löst eine permanente Rolle von einem Benutzer, sodass diese ihm beim Betreten des Servers nicht automatisch erneut zugewiesen wird.",
    "DESC_WHOIS": "Ermittelt ein Tupel aus Discord-Name and Ingame-Name.",
    "DESC_DISCORD_LOG": "Erstellt eine Verbindung zwischen einem Event-Typ und einem Discord-Text-Kanal.",
    "DESC_PRUNE": "Entfernt inaktive Benutzer ohne Rolle.",
    "DESC_RESETLEAD": "Erstellt einen Post, mithilfe dessen Kommandeure rostern können.",
    "DESC_ADD_RESETLEAD": "Fügt manuell einen Spieler als Reset-Kommandeur hinzu.",
    "DESC_REMOVE_RESETLEAD": "Entfernt manuell einen Spieler von den Reset-Kommandeuren.",
    "DESC_SET_TS3_RESET_ROSTER": "Syncronisiert das aktuelle Resetroster ins TS3.",
    "DESC_ADD_EVENT": "Erstellt ein neues Event",
    "DESC_GRANT_ACHIEVEMENT": "Vergibt eine Errungenschaft an einen Spieler.",

    "COMMANDER_TAG_UP": "{0} hat im Teamspeak-Channel '{1}' einen Raid gestartet! {2}",

    "RED_BORDERLANDS": "Rote Grenzlande",
    "BLUE_BORDERLANDS": "Blaue Grenzlande",
    "GREEN_BORDERLANDS": "Grüne Grenzlande",
    "ETERNAL_BATTLEGROUNDS": "Ewige Schlachtfelder",
    "RESETLEAD_HEADER": "Reagiere mit einem der Emotes, um dich als Reset-Kommandeur einzutragen. Reagiere mit ❌ um dich wieder auszutragen.",
    "ROSTER_EXISTS": "Es gibt bereits ein Roster für diese Woche: {0}",
    "WEEK_NUMBER": "Kalenderwoche",
    "ROSTER_LEAD_ADDED": "Spieler `{0}` wurde erfolgreich als Kommandeur für die Karte `{1}` in der Woche {2} hinzugefügt. Siehe {3}",
    "ROSTER_LEAD_REMOVED": "Spieler `{0}` wurde erfolgreich als Kommandeur in der Woche {1} entfernt. Siehe {2}",

    "MK_EVENT_DATE": "Gib als nächstes ein gültiges Datum mit Uhrzeit an. Z.B. `15.02.2022 16:33`",
    "MK_EVENT_TITLE": "Gib jetzt einen Titel für das Event an.",
    "MK_EVENT_DESC": "Gib nun eine kurze Beschreibung für das Event an.",
    "MK_EVENT_REMINDER": "Falls automatisch eine Erinnerung gepostet werden soll, gib jetzt an, wie viele Minuten vor dem Event das geschehen soll. Gib eine negative Zahl an, falls du keine Erinnerung möchtest.",
    "MK_EVENT_TIMEOUT": "Das Zeitlimit für die Eingabe wurde überschritten und die Event-Erstellung abgebrochen. Du kannst den Prozess erneut starten.",

    "ACHIEVEMENT_UNLOCKED": "Erfolg freigeschaltet",

    "ACHIEVEMENT_NAME_GLIMMER": "Schimmer",
    "ACHIEVEMENT_DESC_GLIMMER": "Leite für eine Stunde.",
    "ACHIEVEMENT_FLAV_GLIMMER": "Willkommen auf der Brücke, Kommandeur!",

    "ACHIEVEMENT_NAME_SUNRAY": "Sonnenstrahl",
    "ACHIEVEMENT_DESC_SUNRAY": "Leite für zehn Stunden.",
    "ACHIEVEMENT_FLAV_SUNRAY": "Willkommen zurück, Kommandeur!",

    "ACHIEVEMENT_NAME_BLAZINGLIGHT": "Gleißendes Licht",
    "ACHIEVEMENT_DESC_BLAZINGLIGHT": "Leite für einhundert Stunden.",
    "ACHIEVEMENT_FLAV_BLAZINGLIGHT": "Die Truppen zählen auf euch.",

    "ACHIEVEMENT_NAME_SUPERNOVA": "Supernova",
    "ACHIEVEMENT_DESC_SUPERNOVA": "Leite für eintausend Stunden.",
    "ACHIEVEMENT_FLAV_SUPERNOVA": "Heerscharen harren deiner.",
}

/**
* Tries to resolve the passed key into a locale string. 
* 
* @param key - the key to get the locale string for
* @param args - optional, the arguments that are to be formatted into the resolved string
* @returns if a locale string could be found, that string with the passed arguments inserted into it, if it contains placeholders. 
*          If no locale string could be found, the key is returned instead.
*/
export function get(key: string, args?: string[], separator: string = "\n", flags = true, options: {[option: string]: boolean} = {}): string {
    const flagIcons = [flags ? ":flag_de: " : "", flags ? ":flag_gb: " : ""];
    const strings = [key in DE ? DE[key].formatUnicorn(args) : key, key in EN ? EN[key].formatUnicorn(args) : key]
                    .map(s => {
                        if("italic" in options && options["italic"] === true) {
                            s = `_${s}_`;
                        }
                        if("bold" in options && options["bold"] === true) {
                            s = `**${s}**`;
                        }
                        return s;
                    });  

    return [0,1].map(i => `${flagIcons[i]}${strings[i]}`)
                .join(separator);
    //return `${flagde}${sde}${separator}${flagen}${sen}`;
    //return ":flag_de: {0}{1}:flag_gb: {2}".formatUnicorn(sde, separator, sen);
    //return key in DE ? DE[key].formatUnicorn(args) : key;
};
