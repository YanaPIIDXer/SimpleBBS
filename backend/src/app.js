const express = require("express");
const { logInfo, logError } = require("./logging/logging.application.js");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    throw new Error("Fuck!!");
    res.json({ message: "Hello, World!" });
});

app.use(logError());

app.listen(PORT, () => {
    logInfo(`Start listen in PORT:${PORT}`);
});
