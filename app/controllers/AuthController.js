const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var crypto = require("crypto");
const db = require("../models");
const AuthConfig = require("../config/AuthConfig");
const SMSController = require("../controllers/SMSControlller");
const User = db.users;
const registrationCode = db.registrationCode;
const loginCode = db.loginCode;

const {
  loginStartValidation,
  loginCompleteValidation,
  registerBeginValidation,
  registerCompleteValidation,
} = require("../validations/AuthValidations");

// Loggin user in
exports.loginStart = async (req, res) => {
  //Validate with joi
  const { error } = loginStartValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Generate the code
  var code = Math.floor(100000 + Math.random() * 900000);

  //check if User exists
  const user = await User.findOne({ phone_number: req.body.phone_number });
  if (!user) res.status(400).send("No user found with this Phone number.");

  const temp = await SMSController.sendLoginSms(req.body.phone_number, code);
  //If SMS was successfull create a record
  if (temp == 200) {
    // Create a User
    const loginCodeData = new loginCode({
      phone_number: req.body.phone_number,
      code,
    });

    // Save User in the database
    await loginCodeData.save();

    res.json({
      message: "SMS has been sent successfully",
    });
  }
};

// Loggin user in
exports.loginComplete = async (req, res) => {
  //Validate with joi
  const { error } = loginCompleteValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if User exists
  const code = await loginCode
    .find()
    .limit(1)
    .sort({ updatedAt: -1 })
    .findOne({ code: req.body.code });

  if (code) {
    console.log(code);
    dateItem = new Date(code.updatedAt);
    dateNow = new Date();
    var diffMs = dateNow - dateItem; // milliseconds between now & Christmas
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    diffMins = Math.abs(diffMins);
    if (diffMins > process.env.SMS_EXPIRATION_MINUTES) {
      res.json({ message: "Code has been expired" });
    }
  } else {
    res.status(400).send("Invalid code submitted.");
  }

  const token = await jwt.sign(
    { phone_number: code.phone_number },
    AuthConfig.secret,
    {
      expiresIn: 129600,
    }
  );
  res.status(200).header("authorization", "JWT_TOKEN").json({
    message: "Ok",
    success: true,
    error: false,
    token,
  });
};

// Start the Registration Process by sending the code via sms
exports.registerStart = (req, res) => {
  //Validate with joi
  const { error } = registerBeginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  var code = Math.floor(100000 + Math.random() * 900000);

  SMSController.sendWelcomeSms(req.body.phone_number, code)
    .then((data) => {
      // Create a SMS registration record
      const registrationCodeData = new registrationCode({
        phone_number: req.body.phone_number,
        code,
      });

      // Save User in the database
      registrationCodeData
        .save(registrationCodeData)
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

  registrationCode
    .find()
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

      //Check if phone_number exists
      User.findOne({
        phone_number: item.phone_number,
      })
        .then((data) => {
          if (data.phone_number)
            res.status(400).json({
              message: "This phone number has been regestered before.",
            });
        })
        .catch((err) => {
          res.status(400).json({
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

// Find a single User with an id
const hashpassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
