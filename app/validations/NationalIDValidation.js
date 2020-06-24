const { check } = require("express-validator");

module.exports.national_id = [
  check("national_id")
    .isString()
    .isLength({ min: 10, max: 10 })
    .withMessage("شماره ملی وارد شده را بررسی مجدد کنید."),
];
