const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const db = require("../models");
const AuthConfig = require("../config/AuthConfig");
const SMSController = require("../controllers/SMSControlller");

const User = db.user;
const registrationCode = db.registrationCode;
const loginCode = db.loginCode;

const { user } = require("../models");

// Start the Registration Process by sending the code via sms
exports.registerStart = async (req, res) => {
  //Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      err: true,
      message: errors.errors[0].msg,
      error: errors,
    });
  }

  //Check if the number has already been registered
  let user = await User.findOne({ phone_number: req.body.phone_number });
  if (user)
    return res.json({
      success: false,
      err: true,
      message: "شماره موبایل ثبت شده است.",
    });

  //Get the last code that has been sent to this user
  const theRegistrationCode = await registrationCode
    .find()
    .limit(1)
    .sort({ updatedAt: -1 })
    .findOne({ phone_number: req.body.phone_number });

  //Check to see if user has sent the Code recently
  if (theRegistrationCode) {
    dateItem = new Date(theRegistrationCode.updatedAt);
    dateNow = new Date();
    var diffMs = dateNow - dateItem; // milliseconds between now & Christmas
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    diffMins = Math.abs(diffMins);
    if (diffMins < process.env.SMS_RESEND_MINUNES) {
      return res.json({
        message: `لطفا برای استفاده از سرویس پیام کوتاه, ${
          process.env.SMS_RESEND_MINUNES - diffMins
        } دقیقه صبر کنید.`,
      });
    }
  }

  //generate the code
  var code = Math.floor(100000 + Math.random() * 900000);

  //send the code via SMS service
  let status = await SMSController.sendWelcomeSms(req.body.phone_number, code);

  // Check to see if successful
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

  // Save record in the database
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
  //Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      err: true,
      message: errors.errors[errors.errors.length - 1].msg,
      error: errors,
    });
  }

  //get the code from DB
  const code = await registrationCode
    .find()
    .limit(1)
    .sort({ updatedAt: -1 })
    .findOne({ code: req.body.code });

  //Check the code
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
  try {
    const createdUser = await query.save();
    const token = await jwt.sign(
      { phone_number: createdUser.phone_number, role: createdUser.role },
      AuthConfig.secret,
      {
        expiresIn: process.env.JWT_EXPIRATION * 60,
      }
    );

    const expirationDate = Date.now() + process.env.JWT_EXPIRATION * 60000;
    return res
      .cookie("authorization", token, {
        expires: new Date(expirationDate),
        httpOnly: true,
      })
      .redirect("/api/auth/is-authenticated");
  } catch (e) {
    return res.json({
      success: false,
      err: true,
      message: "تکمیل عملیات در دیتابیس با موفقیت انجام نشد.",
      e,
    });
  }
};

// Loggin user in
exports.loginStart = async (req, res) => {
  //Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      err: true,
      message: errors.errors[errors.errors.length - 1].msg,
      error: errors,
    });
  }

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
      message: "یوزر در دیتابیس یافت نشد.",
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

    //َAll Good
    return res.json({
      success: true,
      err: false,
      message: "عملیات با موفقیت انجام شد.",
    });
  }
};

// Loggin user in
exports.loginComplete = async (req, res) => {
  //Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      err: true,
      message: errors.errors[0].msg,
      error: errors,
    });
  }

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

  // try {
  const token = await jwt.sign(
    { phone_number: user.phone_number, role: user.role },
    AuthConfig.secret,
    {
      expiresIn: process.env.JWT_EXPIRATION * 60,
    }
  );

  const expirationDate = Date.now() + process.env.JWT_EXPIRATION * 60000;
  return res
    .cookie("authorization", token, {
      expires: new Date(expirationDate),
      httpOnly: true,
    })
    .redirect("/api/auth/is-authenticated");
  // } catch (e) {
  //   return res.json({
  //     success: false,
  //     err: true,
  //     message: "تکمیل عملیات در دیتابیس با موفقیت انجام نشد.",
  //     e,
  //   });
  // }
};

exports.jwtTest = async (req, res) => {
  //check if User exists
  //code.phone_number

  const user = await User.findOne({ phone_number: "09127170126" });
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
      expiresIn: process.env.JWT_EXPIRATION * 60,
    }
  );

  const expirationDate = Date.now() + process.env.JWT_EXPIRATION * 60000;
  return res
    .cookie("authorization", token, {
      expires: new Date(expirationDate),
      httpOnly: true,
    })
    .redirect("/api/auth/is-authenticated");

  // .json({
  //   message: "یوزر با موفقیت وارد شد",
  //   success: true,
  //   error: false,
  //   data: { token },
  // });
};

// Find a single User with an id
exports.isAuthenticated = async (req, res, next) => {
  var token = null;
  try {
    token = req.headers.cookie.split("authorization=")[1];
  } catch (e) {
    return res.json({
      success: false,
      err: true,
      message: "یوزر مهمان است.",
    });
  }
  if (!token)
    return res.json({
      success: false,
      err: true,
      message: "یوزر مهمان است.",
      data: {
        phone_number: user.phone_number,
        role: user.role,
      },
    });

  try {
    const user = jwt.verify(token, AuthConfig.secret);
    console.log(user);
    if (user.role != "student" && user.role != "admin")
      return res.json({
        success: false,
        err: true,
        message: "لطفا ابتدا Login کنید.",
      });

    return res.json({
      success: true,
      err: false,
      message: "خوش آمدید",
      data: user,
    });
  } catch (err) {
    return res.json({
      success: false,
      err: true,
      message: "کد منقضی شده است.",
      token,
      errMessage: err,
    });
  }
};
