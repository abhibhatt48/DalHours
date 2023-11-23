const register = require("./auth/register");
const login = require("./auth/login");
const forgotPassword = require("./auth/forgotPassword");
const resetPassword = require("./auth/resetPassword");
const generateOTP = require("./auth/generateOTP");
const getUser = require("./auth/user");

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
  generateOTP,
  getUser,
};
