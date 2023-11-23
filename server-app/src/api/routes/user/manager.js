const express = require("express");
const userController = require("../../controllers/userController");
const { authenticateUser } = require("../../../middleware/authmiddleware");
const router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/forgotpassword", userController.forgotPassword);
router.post("/resetpassword", userController.resetPassword);
router.get("/", authenticateUser, userController.getUser);

module.exports = router;
