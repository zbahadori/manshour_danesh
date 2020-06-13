const { userUpdateValidation } = require("../validations/UserValidations");
// Test function
exports.userUpdateInformation = async (req, res) => {
  //Validate with joi
  const { error } = userUpdateValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  return res.json({
    message: "Hello test",
  });
};

// Test function
exports.test = async (req, res) => {
  return res.json({
    message: "Hello test",
  });
};
