const db = require("../models");
const { validationResult } = require("express-validator");

//get all users
exports.test = async (req, res) => {
  try {
    const data = req.headers.cookie.split("authorization=")[1];
  } catch (e) {
    return res.json({
      success: false,
      err: true,
      message: "یوزر مهمان است.",
    });
  }
  return res.json({
    success: false,
    err: true,
    message: "یوزر مهمان است.",
    data,
  });
};
