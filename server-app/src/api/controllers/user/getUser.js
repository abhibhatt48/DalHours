const response = require("../../../utils/response");
const User = require("../../../models/user");

const getUser = (req, res) => {
  const { user } = req;

  return response(res, 200, true, user);
};

const getInstructorList = (req, res) => {
  User.find({ role: "INSTRUCTOR" })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

const getTAMarkerList = (req, res) => {
  User.find({ role: "TA_MARKER" })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

module.exports = { getUser, getInstructorList, getTAMarkerList };
