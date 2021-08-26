const log4js = require("log4js");
const config = require("../config/logging.config.js")

log4js.configure(config);
var console = log4js.getLogger();
var application = log4js.getLogger("application");

module.exports = {
    console,
    application,
};