const express = require("express");

const router = express.Router();

router.get("/v1/api", (req, res) => {
    res.status(200).json({
        message: "Welcome to the API",
    });
});

router.use("/v1/api/deck", require("./deck/index"));
router.use("/v1/api/card", require("./card/index"));
router.use("/v1/api/access", require("./access/index"));


module.exports = router;
