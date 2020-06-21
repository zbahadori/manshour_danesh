const { check } = require("express-validator");

const message = {
  english: "count must be between 1 and 1000",
  chinese: "count must be between 1 and 1000, but in chinese",
};

module.exports.count = [
  check("count").isInt({ min: 1, max: 1000 }).withMessage(message),
];
