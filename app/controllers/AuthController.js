const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var crypto = require("crypto");
const db = require("../models");
const AuthConfig = require("../config/AuthConfig");
const SMSController = require("../controllers/SMSControlller");
const User = db.users;
const SMSCode = db.smsCodes;

const {
  registerValidation,
  loginValidation,
  registerBeginValidation,
  registerCompleteValidation,
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
exports.register1 = (req, res) => {
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
    const query = new User({
      phone_number: req.body.phone_number,
    });

    // Save User in the database
    query
      .save(query)
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

// Start the Registration Process by sending the code via sms
exports.registerBegin = (req, res) => {
  //Validate with joi
  const { error } = registerBeginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  var code = crypto.randomBytes(6).toString("hex");

  SMSController.sendWelcomeSms("09127170126", code)
    .then((data) => {
      // Create a User
      const smsCode = new SMSCode({
        phone_number: req.body.phone_number,
        code,
      });

      // Save User in the database
      smsCode
        .save(smsCode)
        .then((data) => {
          res.send("SMS has been sent successfully.");
        })
        .catch((err) => {
          res.status(400).send({
            message:
              err.message || "Some error occurred while creating the User.",
          });
        });
    })
    .catch((e) => {
      res.status(401).send("SMS could not be sent at this moment");
      console.log(e.message);
    });
};

// Complete the registration process by creating the user
exports.registerComplete = (req, res) => {
  //Validate with joi
  const { error } = registerCompleteValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log(new Date().toISOString());

  new Date().toISOString();

  SMSCode.find()
    .limit(1)
    .sort({ updatedAt: -1 })
    .findOne({ code: req.body.code })
    .then((item) => {
      if (item) {
        console.log(item);
        dateItem = new Date(item.updatedAt);
        dateNow = new Date();
        var diffMs = dateNow - dateItem; // milliseconds between now & Christmas
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        diffMins = Math.abs(diffMins);
        if (diffMins > process.env.SMS_EXPIRATION_MINUTES) {
          res.json({ message: "Code has been expired" });
        }
      } else {
        res.json({ message: "No item was found" });
      }

      //Create User

      //Check if email exists
      User.findOne({
        phone_number: item.phone_number,
      })
        .then((data) => {
          if (data)
            return res.status(400).json({
              message: "This email has been regestered before.",
            });
        })
        .catch((err) => {
          return res.status(400).json({
            message:
              err.message || "Some error occurred while creating the User.",
          });
        });

      // Create a User
      const query = new User({
        phone_number: item.phone_number,
      });

      // Save User in the database
      query
        .save(query)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(400).send({
            message:
              err.message || "Some error occurred while creating the User.",
          });
        });
    })
    .catch((e) =>
      res.json({ message: "Can not find any user with this information" })
    );
};
