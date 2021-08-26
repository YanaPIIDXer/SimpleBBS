const express = require("express");
const { logInfo, logError } = require("./logging/logging.application.js");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});

app.use("/api/boards", require("./api/boards.js"));

app.use(logError());

app.listen(PORT, () => {
    logInfo(`Start listen in PORT:${PORT}`);
});
