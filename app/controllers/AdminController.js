const { validationResult } = require("express-validator");
const db = require("../models");

//get all users
exports.adminGetAllUser = async (req, res) => {
  const users = await db.user.find().sort({ createdAt: -1 });
  if (!users)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی یافت نشد.",
    });

  return res.json({
    success: true,
    err: false,
    message: "اطلاعات با موفقیت یافت شد",
    data: { users },
  });
};

//Admin Updates Single User
exports.adminUpdateSingleUser = async (req, res) => {
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

  const user = await db.user.findOne({
    phone_number: req.body.phone_number,
  });
  if (!user)
    return res.json({
      success: false,
      err: true,
      message: "دانش آموزی با این مشخصات یافت نشد.",
    });

  user.name = req.body.name;
  user.lastname = req.body.lastname;
  user.name_english = req.body.name_english;
  user.lastname_english = req.body.lastname_english;
  user.grade = req.body.grade;
  user.city = req.body.city;
  user.province = req.body.province;
  user.school = req.body.school;
  if (user.user_image != req.body.user_image) user.school = req.body.school;

  const modifiedUser = user.save();
  if (!modifiedUser)
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
};

//block or unblock a user
exports.adminUserBlockUpdate = async (req, res) => {
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

  const user = await db.user.findOne({
    phone_number: req.body.phone_number,
  });
  if (!user)
    return res.json({
      success: false,
      err: true,
      message: "دانش آموزی با این مشخصات یافت نشد.",
    });

  const modifiedUser = user.update({ status: !user.status });
  if (!modifiedUser)
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
};

//Admin get All nationalID
exports.adminGetAllNationalID = async (req, res) => {
  const nationalIDs = await db.nationalID.find().sort({ createdAt: -1 });
  if (!nationalIDs)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی یافت نشد.",
    });

  return res.json({
    success: true,
    err: false,
    message: "عملیات با موفقیت انجام شد.",
    data: nationalIDs,
  });
};

//Admin Delete single nationalID
exports.adminDeleteSingleNationalID = async (req, res) => {
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

  const nationalIDs = await db.nationalID.findOne({
    phone_number: req.body.phone_number,
  });
  if (!nationalIDs)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعات با این مشخصات یافت نشد.",
    });

  const deleted = await nationalIDs.delete();
  if (!deleted)
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
};

//Admin Confirm Single Record
exports.adminConfirmSingleNationalID = async (req, res) => {
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

  const nationalIDs = await db.nationalID.findOne({
    phone_number: req.body.phone_number,
  });
  if (!nationalIDs)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعات با این مشخصات یافت نشد.",
    });
  nationalIDs.verified = nationalIDs.verified ? false : true;
  const updated = await nationalIDs.save();
  if (!updated)
    return res.json({
      success: false,
      err: true,
      message: "تکمیل عملیات در دیتابیس با موفقیت انجام نشد.",
    });

  console.log(nationalIDs.verified);

  return res.json({
    success: true,
    err: false,
    message: "عملیات با موفقیت انجام شد.",
  });
};

// Admin create Alert
exports.adminCreateAlert = async (req, res) => {
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

  const alert = await db.alert.create(req.body);
  if (!alert)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعات با این مشخصات یافت نشد.",
    });

  return res.json({
    success: true,
    err: false,
    message: "عملیات با موفقیت انجام شد.",
    data: { alert },
  });
};

// Admin Get the Alerts
exports.adminGetAllAlert = async (req, res) => {
  //Store alert in DB
  const alerts = await db.alert.find();
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
    data: alerts,
  });
};

exports.adminUpdateSingleAlert = async (req, res) => {
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

  //Store alert in DB
  const alert = await db.alert.findOne({
    _id: req.body.id,
  });

  if (!alert)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  alert.title = req.body.title;
  alert.message = req.body.message;
  const status = await alert.save();
  if (!status)
    return res.json({
      success: false,
      err: true,
      message: "تکمیل عملیات در دیتابیس با موفقیت انجام نشد.",
    });

  return res.json({
    success: true,
    err: false,
    message: "عملیات با موفقیت انجام شد.",
    data: { alert },
  });
};

exports.adminDeleteSingleAlert = async (req, res) => {
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

  const alert = await db.alert.findOne({
    _id: req.body.id,
  });

  if (!alert)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعات با این مشخصات یافت نشد.",
    });

  const deleted = await alert.delete();
  if (!deleted)
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
};
