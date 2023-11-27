const express = require("express");
const punchController = require("../../controllers/timeSheet/index");
const router = express.Router();

router.post("/add-punch", punchController.addPunch);
router.patch("/update-punch", punchController.updatePunch);

module.exports = router;
