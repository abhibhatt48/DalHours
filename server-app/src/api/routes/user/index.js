const express = require("express");
const userController = require("../../controllers/user/index");
const router = express.Router();
const {
  authenticateUser,
  authenticateAdmin,
} = require("../../../middleware/authmiddleware");

router.post("/add-user", authenticateAdmin, userController.addUser);
router.get("/", authenticateUser, userController.getUser);

module.exports = router;
