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

// Retrieve all Users from the database.
// exports.findAll = (req, res) => {
//   //check query string
//   const username = req.query.username;
//   var condition = username
//     ? { username: { $regex: new RegExp(username), $options: "i" } }
//     : {};

//   //get the data from DB
//   User.find(condition)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while retrieving users.",
//       });
//     });
// };

// // Find all published Users
// exports.findAllPublished = (req, res) => {
//   User.find({ published: true })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while retrieving users.",
//       });
//     });
// };

// Test function
exports.test = async (req, res) => {
  // const salt = await bcrypt.genSalt(10);
  // const hashpassword = await bcrypt.hash(req.body.password, salt);
  // res.status(200).send({
  //   message: hashpassword,
  // });
  // return salt;
  // if (!req.body) {
  //   return res.status(400).send({
  //     message: "Data to update can not be empty!",
  //   });
  // }
  return res.json({
    message: "Hello test",
  });
};
