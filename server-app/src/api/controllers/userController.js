const register = require("./auth/register");
const login = require("./auth/login");
const forgotPassword = require("./auth/forgotPassword");
const resetPassword = require("./auth/resetPassword");
const generateOTP = require("./auth/generateOTP");

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
  generateOTP,
};