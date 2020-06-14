//VALIDATION
const Joi = require("joi-persian");

//Login Start Validation
const loginStartValidation = (data) => {
  const schema = Joi.object({
    phone_number: Joi.string().required().length(11),
  });
  return schema.validate(data);
};

//Login Complete Validation
const loginCompleteValidation = (data) => {
  const smsCodeLength = process.env.SMS_CODE_LENGTH;
  const schema = Joi.object({
    code: Joi.string().required().length(parseInt(smsCodeLength)),
  });

  return schema.validate(data);
};

//Start registration Validation
const registerBeginValidation = (data) => {
  const schema = Joi.object({
    phone_number: Joi.string().required().length(11),
    reference_phone_number: Joi.string().length(11),
  });
  return schema.validate(data);
};

//Complete registration validation
const registerCompleteValidation = (data) => {
  const smsCodeLength = process.env.SMS_CODE_LENGTH;
  const schema = Joi.object({
    code: Joi.string().required().length(parseInt(smsCodeLength)),
  });

  return schema.validate(data);
};

module.exports = {
  loginStartValidation,
  loginCompleteValidation,
  registerBeginValidation,
  registerCompleteValidation,
};
