const config = require("../config.json");
const winston = require('winston');
const DB = require("./DB.js");
const schedule = require('node-schedule');
const gw2 = require("@cthos/gw2-api");
const api = new gw2.gw2();
api.setStorage(new gw2.memStore());

exports.validateWorld = function(apikey) {
    api.setAPIKey(apikey);
    return api.getAccount().then(
       res => new Promise((resolve, reject) => resolve(res.world === config.world_id)),
       res => new Promise((resolve, reject) => resolve(false))
    );  
}

exports.getAccountGUID = function(apikey) {
    api.setAPIKey(apikey);
    return api.getAccount().then(
        res => new Promise((resolve, reject) => resolve(res.id)),
        res => new Promise((resolve, reject) => resolve(false))
    );
}

exports.cronJobs = {};

exports.scheduleCronjob = function(client, time, guild, command, args) {
    let job = null;
    switch(command) {
        case "say":
            job = schedule.scheduleJob(time, () => {
                // Note that this callback could take place long after the cron was scheduled.
                // So the bot could no longer be there. We therefore need to find() the guild
                // again to make sure the bot is still on there.
                let g = client.guilds.find(g => g.id === guild.id);
                if(!g) {
                    winston.log("error", "I am not a member of guild {0}. Canceling Say cronjob.".formatUnicorn(guild));
                    job.cancel();
                    return;
                } else {
                    let c = g.channels.find(c => c.id === args.channel);
                    if(!c) {
                        winston.log("error", "Can not find a channel {0}. Canceling Say cronjob.".formatUnicorn(args.channel));
                        job.cancel();
                        return;
                    } else {
                        c.send(args.text);
                        winston.log("info", "Executed Say.");
                    }
                }
            });
            winston.log("info", "Scheduling Say in {0}#{1} to {2}.".formatUnicorn(guild, args.channel, time));
        break;

        case "reauthenticate":
        break;

        default:
            winston.log("error", "Unhandled cron type '{0}'".formatUnicorn(command));
        break;
    }
    return job;
}

exports.deleteCronjob = function(id) {
    let canceled = false;
    let deletedFromDB = false;
    if(id in exports.cronJobs) {
        exports.cronJobs[id].cancel();
        delete exports.cronJobs[id];
        canceled = true;
        winston.log("info", "Canceled cronjob with ID {0}.".formatUnicorn(id));
    }
    if(DB.deleteCronjob(id)) {
        deletedFromDB = true;
        winston.log("info", "Deleted cronjob with ID {0} from DB.".formatUnicorn(id));
    }
    return canceled || deletedFromDB;
}

// taken from https://stackoverflow.com/a/18234317
String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }
    return str;
};