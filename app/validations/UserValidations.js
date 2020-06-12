//VALIDATION
const Joi = require("joi-persian");

//Update user information validation
const userUpdateValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(2).max(255),
    lastname: Joi.string().required().min(2).max(255),
    name_english: Joi.string().required().min(2).max(255),
    lastname_english: Joi.string().required().min(2).max(255),
    father_name: Joi.string().required().min(2).max(255),
    grade: Joi.number().required().min(5).max(12),
    province: Joi.string().required().min(2).max(255),
    city: Joi.string().required().min(2).max(255),
    school: Joi.string().required().min(2).max(255),
    national_id: Joi.string().required().length(10),
  });
  return schema.validate(data);
};

module.exports = {
  userUpdateValidation,
};
