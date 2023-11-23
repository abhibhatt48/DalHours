const express = require("express");
const courseController = require("../../controllers/course/index");
const router = express.Router();

router.post("/register-course", courseController.registerCourse);

module.exports = router;
