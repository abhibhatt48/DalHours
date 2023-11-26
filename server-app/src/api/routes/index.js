const router = require("express").Router();

const auth = require("./auth/index");
const course = require("./course/index");
const user = require("./user/index");
// const user = require("./timeSheet/index");

router.use("/auth", auth);
router.use("/course", course);
router.use("/user", user);
// router.use("/user", user);

module.exports = router;
