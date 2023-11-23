const router = require("express").Router();

const auth = require("./auth/index");
const course = require("./course/index");
const user = require("./user/index");

router.use("/auth", auth);
// router.use("/course", course);
router.use("/user", user);

module.exports = router;
