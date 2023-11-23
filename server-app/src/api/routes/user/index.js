const express = require("express");
const userController = require("../../controllers/user/index");
const router = express.Router();
const { authenticateUser } = require("../../../middleware/authmiddleware");

router.post("/add-user", userController.addUser);
router.get("/", authenticateUser, userController.getUser);

module.exports = router;
