const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username || !req.body.password) {
    res.status(400).send({ message: "Username or Password can not be empty!" });
    return;
  }

  // Create a User
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    status: req.body.status ? req.body.status : false,
  });

  // Save User in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  //check query string
  const username = req.query.username;
  var condition = username
    ? { username: { $regex: new RegExp(username), $options: "i" } }
    : {};

  //get the data from DB
  User.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// // Find a single User with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   User.findById(id)
//     .then((data) => {
//       if (!data)
//         res.status(404).send({ message: "Not found User with id " + id });
//       else res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({ message: "Error retrieving User with id=" + id });
//     });
// };

// // Update a User by the id in the request
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!",
//     });
//   }

//   const id = req.params.id;

//   User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update User with id=${id}. Maybe User was not found!`,
//         });
//       } else res.send({ message: "User was updated successfully." });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error updating User with id=" + id,
//       });
//     });
// };

// // Delete a User with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   User.findByIdAndRemove(id, { useFindAndModify: false })
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete User with id=${id}. Maybe User was not found!`,
//         });
//       } else {
//         res.send({
//           message: "User was deleted successfully!",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Could not delete User with id=" + id,
//       });
//     });
// };

// // Delete all Users from the database.
// exports.deleteAll = (req, res) => {
//   User.deleteMany({})
//     .then((data) => {
//       res.send({
//         message: `${data.deletedCount} Users were deleted successfully!`,
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while removing all Users.",
//       });
//     });
// };

// Find all published Users
exports.findAllPublished = (req, res) => {
  User.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};
