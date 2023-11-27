const express = require("express");
const punchController = require("../../controllers/timeSheet/index");
const router = express.Router();

router.post("/add-punch", punchController.addPunch);
router.patch("/update-punch", punchController.updatePunch);
router.post("/punchout", punchController.punchOut);
router.get("/details", punchController.details);


module.exports = router;
