const router = require("express").Router();

router.get("/list", (req, res, next) => {
    res.json({ message: "Board List" });
});

module.exports = router;
