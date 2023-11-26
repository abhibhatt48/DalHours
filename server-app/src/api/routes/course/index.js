const express = require("express");
const courseController = require("../../controllers/course/index");
const { authenticateUser } = require("../../../middleware/authmiddleware");
const router = express.Router();

router.post("/register-course", courseController.registerCourse);
router.get("/course-list",authenticateUser , courseController.getCourseList);

module.exports = router;
