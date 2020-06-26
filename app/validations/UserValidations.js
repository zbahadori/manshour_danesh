const { check } = require("express-validator");

module.exports.phone_number = [
  check("phone_number")
    .isString()
    .isLength({ min: 11, max: 11 })
    .withMessage("شماره موبایل خود را بررسی مجدد کنید."),
];

module.exports.reference_phone_number = [
  check("reference_phone_number")
    .isString()
    .isLength({ min: 11, max: 11 })
    .withMessage("شماره موبایل معرف خود را بررسی مجدد کنید.")
    .custom((value, { req }) => {
      if (value == req.body.phone_number) {
        throw new Error("شماره تلفن با شماره تلفن معرف یکی است");
      }

      // Indicates the success of this synchronous custom validator
      return true;
    })
    .optional(),
];

const smsCodeLength = process.env.SMS_CODE_LENGTH;
module.exports.code = [
  check("code")
    .isString()
    .isLength({ min: parseInt(smsCodeLength), max: parseInt(smsCodeLength) })
    .withMessage("کد وارد شده صحیح نیست."),
];

module.exports.name = [
  check("name")
    .isString()
    .isLength({ min: 2, max: 255 })
    .withMessage("نام وارد شده را بررسی مجدد کنید."),
];

module.exports.lastname = [
  check("lastname")
    .isString()
    .isLength({ min: 2, max: 255 })
    .withMessage("نام خانوادگی وارد شده را بررسی مجدد کنید."),
];

module.exports.name_english = [
  check("name_english")
    .isString()
    .isLength({ min: 2, max: 255 })
    .withMessage("نام انگلیسی وارد شده را بررسی مجدد کنید."),
];

module.exports.lastname_english = [
  check("lastname_english")
    .isString()
    .isLength({ min: 2, max: 255 })
    .withMessage("نام خانوادگی انگلیسی وارد شده را بررسی مجدد کنید."),
];

module.exports.father_name = [
  check("father_name")
    .isString()
    .isLength({ min: 2, max: 255 })
    .withMessage("نام پدر وارد شده را بررسی مجدد کنید."),
];

module.exports.grade = [
  check("grade")
    .isInt({ min: 5, max: 12 })
    .withMessage("مقطع تحصیلی وارد شده را بررسی مجدد کنید."),
];

module.exports.province = [
  check("province")
    .isString()
    .withMessage("استان وارد شده را بررسی مجدد کنید."),
];

module.exports.city = [
  check("city").isString().withMessage("شهر وارد شده را بررسی مجدد کنید."),
];

module.exports.school = [
  check("school")
    .isString()
    .withMessage("نام مدرسه وارد شده را بررسی مجدد کنید."),
];

module.exports.user_image = [
  check("phone_number")
    .isString()
    .isLength({ min: 4, max: 255 })
    .withMessage("عکس آپلود شده خود را بررسی مجدد کنید."),
];
