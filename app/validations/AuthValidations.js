//VALIDATION
const Joi = require("joi-persian");

const registerBeginValidation = (data) => {
  const schema = Joi.object({
    phone_number: Joi.string().required().min(11).max(11),
  });
  return schema.validate(data);
};

//Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(6),
    username: Joi.string().required().min(6),
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6),
  });
  return schema.validate(data);
};

//Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6),
  });

  return schema.validate(data);
};

const registerCompleteValidation = (data) => {
  const smsCodeLength = process.env.SMS_CODE_LENGTH;
  console.log(smsCodeLength);
  const schema = Joi.object({
    code: Joi.string()
      .required()
      .min(parseInt(smsCodeLength))
      .max(parseInt(smsCodeLength)),
  });

  return schema.validate(data);
};

module.exports = {
  registerValidation,
  registerBeginValidation,
  loginValidation,
  registerCompleteValidation,
};
