const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const AuthConfig = require("../config/AuthConfig");
const User = db.users;

const {
  registerValidation,
  loginValidation,
} = require("../validations/AuthValidations");

// Loggin user in
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

  const token = jwt.sign({ email: user.email }, AuthConfig.secret, {
    expiresIn: 129600,
  });
  res.status(200).header("authorization", "JWT_TOKEN").json({
    success: true,
    error: false,
    token,
  });
};

// Register User
exports.register = (req, res) => {
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
