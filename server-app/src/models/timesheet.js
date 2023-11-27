const mongoose = require("mongoose");

const timesheetSchema = new mongoose.Schema({
  instanceId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  userId: {
    type: String,
    required: true,
  },
  approverId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  totalHours: {
    type: Number,
    required: true,
  },
  isOverTime: {
    type: Boolean,
    required: true,
  },
  isApproved: {
    type: Boolean,
    required: true,
  },
});

const Timesheet = mongoose.model("Timesheet", timesheetSchema);

module.exports = Timesheet;
