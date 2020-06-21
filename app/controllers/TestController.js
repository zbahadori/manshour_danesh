const {
  adminCreateAlertsValidation,
  adminUserUpdateBlockValidation,
  adminDeleteSingleNationalIDValidation,
  adminUpdateSingleAlertValidation,
} = require("../validations/AdminValidations");
const db = require("../models");
const { validationResult } = require("express-validator");

//get all users
exports.test = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  return res.json({
    success: true,
    err: false,
    message: "اطلاعات با موفقیت یافت شد",
    data: req.body,
  });
};
