const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  memberId: {
    type: String,
    required: true,
  },
  maxHours: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: ["TA", "MARKER"],
    default: "TA",
    required: true,
  },
});

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  CRN: {
    type: String,
    required: true,
  },
  // TERM Format: SUMMER_2023
  term: {
    type: String,
    required: true,
  },
  startDate: {
    type: Number,
    required: true,
  },
  endDate: {
    type: Number,
    required: true,
  },
  instructorId: {
    type: String,
    required: true,
  },
  members: [memberSchema],
});

const Course = mongoose.model("Courses", courseSchema);

module.exports = Course;
