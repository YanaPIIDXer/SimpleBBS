const router = require("express").Router();

router.get("/list", (req, res) => {
    res.json({ message: "Board List" });
});

module.exports = router;
