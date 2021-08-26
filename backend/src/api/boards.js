const router = require("express").Router();
const buildResult = require("./build_result.js");

router.get("/list", (req, res, next) => {
    res.json(buildResult(0, {}));
});

module.exports = router;
