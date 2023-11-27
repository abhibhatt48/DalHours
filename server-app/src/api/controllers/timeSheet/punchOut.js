const Timesheet = require("../../../models/timesheet");
const response = require("../../../utils/response");

async function punchOut(req, res) {
  try {
    const { _id, endTime } = req.body;
    const existingTimesheet = await Timesheet.findById(_id);

    if (!existingTimesheet) {
      return response(res, 404, false, { message: "Timesheet not found" });
    }

    existingTimesheet.endTime = endTime;
    existingTimesheet.totalHours = calculateTotalHours(
      existingTimesheet.startTime,
      endTime
    );

    if (isApprovalNeeded(existingTimesheet.startTime, endTime)) {
      existingTimesheet.approvalNeeded = true;
    }

    await existingTimesheet.save();
    return response(res, 200, true, {
      message: "Punch out successful",
      timesheetId: existingTimesheet._id,
    });
  } catch (error) {
    console.error("Error punching out", error);
    return response(res, 500, false, {
      message: "Failed to punch out",
    });
  }
}

function calculateTotalHours(startTime, endTime) {
  const millisecondsInHour = 3600000;
  const totalMilliseconds = new Date(endTime) - new Date(startTime);
  return totalMilliseconds / millisecondsInHour;
}

function isApprovalNeeded(startTime, endTime) {
  const maxHoursWithoutApproval = 50;
  const totalHours = calculateTotalHours(startTime, endTime);
  return totalHours > maxHoursWithoutApproval;
}

module.exports = punchOut;
