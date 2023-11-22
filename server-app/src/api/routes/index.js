const router = require("express").Router();

const manager = require("./user/manager");

// TODO: Add required routes

router.use("/user", manager);

module.exports = router;