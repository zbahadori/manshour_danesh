//VALIDATION
const Joi = require("joi-persian");
Joi.objectId = require("joi-objectid")(Joi);

//Update user information validation
const adminCreateAlertsValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(2).max(255),
    message: Joi.string().required(),
  });
  return schema.validate(data);
};

//Update user block status
const adminUserUpdateBlockValidation = (data) => {
  const schema = Joi.object({
    phone_number: Joi.string().required().length(11),
  });
  return schema.validate(data);
};

const adminDeleteSingleNationalIDValidation = (data) => {
  const schema = Joi.object({
    phone_number: Joi.string().required().length(11),
  });
  return schema.validate(data);
};

const adminUpdateSingleAlertValidation = (data) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
    title: Joi.string().required().min(2).max(255),
    message: Joi.string().required(),
    status: Joi.boolean(),
  });
  return schema.validate(data);
};

module.exports = {
  adminCreateAlertsValidation,
  adminUserUpdateBlockValidation,
  adminDeleteSingleNationalIDValidation,
  adminUpdateSingleAlertValidation,
};
