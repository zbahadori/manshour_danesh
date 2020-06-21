const db = require("../models");
const { validationResult } = require("express-validator");

//get all users
exports.test = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      err: true,
      message: errors.mapped(),
    });
  }

  return res.json({
    success: true,
    err: false,
    message: "اطلاعات با موفقیت یافت شد",
    data: req.body,
  });
};
