const { check } = require("express-validator");

module.exports.id = [
  check("id").isMongoId().withMessage("Id را بررسی مجدد کنید."),
];

module.exports.title = [
  check("title")
    .isString()
    .isLength({ min: 2, max: 255 })
    .withMessage("متن موضوع خود را بررسی مجدد کنید."),
];

module.exports.message = [
  check("message")
    .isString()
    .isLength({ min: 2 })
    .withMessage("متن اصلی خود را بررسی مجدد کنید."),
];

module.exports.status = [
  check("status").isBoolean().withMessage("Id را بررسی مجدد کنید."),
];
