const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var crypto = require("crypto");
const db = require("../models");
const AuthConfig = require("../config/AuthConfig");
const SMSController = require("../controllers/SMSControlller");
const User = db.user;
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

  //check if User exists
  const theLoginCode = await loginCode
    .find()
    .limit(1)
    .sort({ updatedAt: -1 })
    .findOne({ phone_number: req.body.phone_number });

  if (theLoginCode) {
    dateItem = new Date(theLoginCode.updatedAt);
    dateNow = new Date();
    var diffMs = dateNow - dateItem; // milliseconds between now & Christmas
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    diffMins = Math.abs(diffMins);
    if (diffMins < process.env.SMS_RESEND_MINUNES) {
      return res.json({
        success: false,
        err: true,
        message: `لطفا برای استفاده از سرویس پیام کوتاه, ${
          process.env.SMS_RESEND_MINUNES - diffMins
        } دقیقه صبر کنید.`,
      });
    }
  }

  //Generate the code
  var code = Math.floor(100000 + Math.random() * 900000);

  //check if User exists
  const user = await User.findOne({ phone_number: req.body.phone_number });
  if (!user)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  const temp = await SMSController.sendLoginSms(req.body.phone_number, code);
  //If SMS was successfull create a record
  if (temp == 200) {
    // Create a User
    const loginCodeData = new loginCode({
      phone_number: req.body.phone_number,
      code,
    });

    // Save User in the database
    const savedData = await loginCodeData.save();
    if (!savedData)
      return res.json({
        success: false,
        err: true,
        message: "تکمیل عملیات در دیتابیس با موفقیت انجام نشد.",
      });

    return res.json({
      success: true,
      err: false,
      message: "عملیات با موفقیت انجام شد.",
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
      return res.json({
        success: false,
        err: true,
        message: "کد منقضی شده است.",
      });
    }
  } else {
    return res.json({
      success: false,
      err: true,
      message: "کد اشتباه است.",
    });
  }

  //check if User exists
  const user = await User.findOne({ phone_number: code.phone_number });
  if (!user)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعات با این مشخصات یافت نشد.",
    });

  const token = await jwt.sign(
    { phone_number: user.phone_number, role: user.role },
    AuthConfig.secret,
    {
      expiresIn: process.env.JWT_EXPIRATION,
    }
  );
  return res.status(200).header("authorization", "JWT_TOKEN").json({
    message: "یوزر با موفقیت وارد شد",
    success: true,
    error: false,
    data: { token },
  });
};

// Start the Registration Process by sending the code via sms
exports.registerStart = async (req, res) => {
  //Validate with joi
  const { error } = registerBeginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if the number has already been registered
  let user = await User.findOne({ phone_number: req.body.phone_number });
  if (user)
    return res.json({
      success: false,
      err: true,
      message: "شماره موبایل ثبت شده است.",
    });

  //check if User exists
  const theRegistrationCode = await registrationCode
    .find()
    .limit(1)
    .sort({ updatedAt: -1 })
    .findOne({ phone_number: req.body.phone_number });

  if (theRegistrationCode) {
    dateItem = new Date(theRegistrationCode.updatedAt);
    dateNow = new Date();
    var diffMs = dateNow - dateItem; // milliseconds between now & Christmas
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    diffMins = Math.abs(diffMins);
    if (diffMins < process.env.SMS_RESEND_MINUNES) {
      return res.json({
        message: `Please wait ${
          process.env.SMS_RESEND_MINUNES - diffMins
        } minutes to send another code`,
      });
    }
  }
  //generate the code
  var code = Math.floor(100000 + Math.random() * 900000);
  //send the code via SMS service
  let status = await SMSController.sendWelcomeSms(req.body.phone_number, code);

  // Create a SMS registration record
  if (status != 200)
    return res.json({
      success: false,
      err: true,
      message: "در حال حاظر امکان ارسال پیام کوتاه نمی باشد",
    });

  //create a SMS record
  const registrationCodeData = new registrationCode({
    phone_number: req.body.phone_number,
    reference_phone_number: req.body.reference_phone_number
      ? req.body.reference_phone_number
      : null,
    code,
  });

  // Save User in the database
  status = await registrationCodeData.save(registrationCodeData);

  //if could not store in DB throw error
  if (!status)
    return res.json({
      success: false,
      err: true,
      message: "تکمیل عملیات در دیتابیس با موفقیت انجام نشد.",
    });

  //All GOod
  return res.json({
    success: true,
    err: false,
    message: "عملیات با موفقیت انجام شد.",
  });
};

// Complete the registration process by creating the user
exports.registerComplete = async (req, res) => {
  //Validate with joi
  const { error } = registerCompleteValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const code = await registrationCode
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
      return res.json({
        success: false,
        err: true,
        message: "کد منقضی شده است.",
      });
    }
  } else {
    return res.json({
      success: false,
      err: true,
      message: "کد اشتباه شده است.",
    });
  }

  //Check if phone_number exists
  const user = await User.findOne({
    phone_number: code.phone_number,
  });

  if (user)
    return res.json({
      success: false,
      err: true,
      message: "شماره موبایل ثبت شده است.",
    });

  // Create a User
  let query = new User({
    phone_number: code.phone_number,
  });

  if (code.reference_phone_number)
    query.reference_phone_number = code.reference_phone_number;

  // Save User in the database
  const createdUser = await query.save();
  return res.json({
    success: true,
    err: false,
    message: "یوزر با موفقیت ثبت شد.",
    data: createdUser,
  });
};

// Find a single User with an id
const hashpassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
