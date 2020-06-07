const jwt = require("jsonwebtoken");
const request = require("request");
var bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.users;
const {
  registerValidation,
  loginValidation,
} = require("../validations/validation");
// Create and Save a new User
exports.create = (req, res) => {
  //Validate with joi
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Hash password
  hashpassword(req.body.password).then((hashedpassword) => {
    //Check if email exists
    User.findOne({
      email: req.body.email,
    })
      .then((data) => {
        if (data)
          return res.status(400).send({
            message: "This email has been regestered before.",
          });
      })
      .catch((err) => {
        return res.status(400).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });

    // Create a User
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedpassword,
      status: req.body.status ? true : false,
    });

    // Save User in the database
    user
      .save(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
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

// Find a single User with an id
const hashpassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const sendSms = () => {
  axios({
    url: process.env.SMS_URL,
    method: "post",
    data: {
      op: "send",
      uname: "YOUR_USERNAME",
      pass: "YOUR_PASSWORD",
      message: "salam",
      from: "1000XXX",
      to: ["936xxxxx", "912xxxx"],
    },
  })
    .then((data) => {
      return data;
    })
    .catch((e) => e);
};

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

// Test function
exports.login = async (req, res) => {
  //Validate with joi
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if email is correct
  const user = await User.findOne({ email: req.body.email });
  if (!user) res.status(400).send("No user found with this email address.");

  //compare the password
  const verifyPassword = await bcrypt.compare(req.body.password, user.password);
  if (!verifyPassword) res.status(400).send("Password is incorrect.");

  const token = jwt.sign({ email: user.email }, process.env.JWT_TOKEN);
  res.status(200).header("authorization", "JWT_TOKEN").send(token);
};

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
};
