const path = require("path")

module.exports = {
    appenders: {
        ConsoleLogAppender: {
            type: "console"
        },
        DateFileAppender: {
            type: "dateFile",
            filename: path.join(__dirname, "../logs", "/application.log"),
            pattenrs: "yyyyMMdd",
            daysToKeep: 7
        }
    },
    categories: {
        "default": {
            appenders: ["ConsoleLogAppender"],
            level: "ALL"
        },
        "application": {
            appenders: ["ConsoleLogAppender", "DateFileAppender"],
            level: "INFO"
        }
    }
};