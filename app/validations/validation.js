//VALIDATION
const Joi = require("@hapi/joi");

//Register Validation
const registerValidation = (data) => {
  const schema = {
    name: Joi.string().required().min(6),
    username: Joi.string().required().min(6),
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6),
    status: Joi.boolean().required(),
  };
  return Joi.validate(data, schema);
};

//Login Validation
const loginValidation = (data) => {
  const schema = {
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6),
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
