const logger = require("./logging.js").application;

const logInfo = (message) => {
    logger.info(message);
};

const logError = (options) => {
    return (err, req, res, next) => {
        logger.error(err.message);
        next(err);
    };
};

module.exports = {
    logInfo,
    logError
};
