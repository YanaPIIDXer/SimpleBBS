const express = require("express");
const { logInfo, logError } = require("./logging/logging.application.js");

const app = express();
const PORT = 3000;

app.use(logError());

app.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});

app.listen(PORT, () => {
    logInfo(`Start listen in PORT:${PORT}`);
});
