//VALIDATION
const Joi = require("joi-persian");

//Login Start Validation
const loginStartValidation = (data) => {
  const schema = Joi.object({
    phone_number: Joi.string().required().min(11).max(11),
  });
  return schema.validate(data);
};

//Login Complete Validation
const loginCompleteValidation = (data) => {
  const smsCodeLength = process.env.SMS_CODE_LENGTH;
  const schema = Joi.object({
    code: Joi.string()
      .required()
      .min(parseInt(smsCodeLength))
      .max(parseInt(smsCodeLength)),
  });

  return schema.validate(data);
};

//Start registration Validation
const registerBeginValidation = (data) => {
  const schema = Joi.object({
    phone_number: Joi.string().required().min(11).max(11),
  });
  return schema.validate(data);
};

//Complete registration validation
const registerCompleteValidation = (data) => {
  const smsCodeLength = process.env.SMS_CODE_LENGTH;
  const schema = Joi.object({
    code: Joi.string()
      .required()
      .min(parseInt(smsCodeLength))
      .max(parseInt(smsCodeLength)),
  });

  return schema.validate(data);
};

module.exports = {
  loginStartValidation,
  loginCompleteValidation,
  registerBeginValidation,
  registerCompleteValidation,
};
