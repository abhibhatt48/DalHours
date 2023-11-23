const response = require("../../../utils/response");

const getUser = (req, res) => {
  const { user } = req;

  return response(res, 200, true, user);
};

module.exports = getUser;
