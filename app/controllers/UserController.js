const { validationResult } = require("express-validator");
const ImageUpload = require("../services/ImageUpload");

const db = require("../models");

//Get Authenticated user information
exports.userGetUserInformantion = async (req, res) => {
  const user = await db.user.findOne({ phone_number: "09127170126" });
  if (!user)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  console.log(user);

  return res.json({
    message: "عملیات با موفقیت انجام شد.",
    success: true,
    error: false,
    data: {
      phone_number: user.phone_number,
      reference_phone_number: user.reference_phone_number,
      name: user.name,
      lastname: user.lastname,
      name_english: user.name_english,
      lastname_english: user.lastname_english,
      father_name: user.father_name,
      grade: user.grade,
      school: user.school,
      province: user.province,
      city: user.city,
      user_image: user.user_image,
    },
  });
};

//User update information in the first visit to dashboard
exports.userUpdateUserInformation = async (req, res) => {
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

  const user = await db.user.findOne({ phone_number: "09127170126" });
  if (!user)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  let uploadedImage;

  if (req.files) {
    uploadedImage = await ImageUpload(
      req,
      req.files.image,
      process.env.USER_IMAGE_PATH
    );
    if (!uploadedImage.success)
      return res.json({
        success: uploadedImage.success,
        err: uploadedImage.err,
        message: uploadedImage.message,
        hello: "dgdg",
      });
  }

  var inputdata = {
    name: req.body.name,
    lastname: req.body.lastname,
    name_english: req.body.name_english,
    lastname_english: req.body.lastname_english,
    father_name: req.body.father_name,
    grade: req.body.grade,
    province: req.body.province,
    city: req.body.city,
    school: req.body.school,
  };

  if (uploadedImage) {
    inputdata.user_image = uploadedImage.image;
  }

  const userStored = await user.update(inputdata);
  if (!userStored)
    return res.json({
      success: false,
      err: true,
      message: "تکمیل عملیات در دیتابیس با موفقیت انجام نشد.",
    });

  return res.json({
    message: "عملیات با موفقیت انجام شد",
    success: true,
    error: false,
  });
};

//Get the list of users that has been invited to the application
exports.userGetReferencedUsers = async (req, res) => {
  const user = await db.user.findOne({ phone_number: req.user.phone_number });
  if (!user)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  const referencedUsers = await db.user.findOne({
    reference_phone_number: user.phone_number,
  });
  if (!referencedUsers)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  return res.json({
    message: "عملیات با موفقیت انجام شد.",
    success: true,
    error: false,
    data: { referencedUsers },
  });
};

// User update National ID information
exports.userUpdateNationalID = async (req, res) => {
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
};

// User update National ID information
exports.userGetActiveAlerts = async (req, res) => {
  const alerts = await db.alert.find({ status: true }).sort({ createdAt: -1 });
  if (!alerts)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  return res.json({
    success: true,
    err: false,
    message: "عملیات با موفقیت انجام شد.",
    data: { alerts },
  });
};

// Test function
exports.test = async (req, res) => {
  console.log(req.files);
  const status = await ImageUpload(
    req,
    req.files ? req.files.image : null,
    process.env.USER_IMAGE_PATH
  );
  console.log(status);
  if (!status.success)
    return res.json({
      success: status.success,
      err: status.err,
      message: status.message,
    });

  return res.json({
    success: status.success,
    err: status.err,
    message: status.message,
    image: status.image,
  });
};
