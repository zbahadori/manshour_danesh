const { validationResult } = require("express-validator");
const paginate = require("express-paginate");
const ImageUpload = require("../services/ImageUpload");

const db = require("../models");

//Get Authenticated user information
exports.userGetUserInformantion = async (req, res) => {
  const user = await db.user.findOne({ phone_number: req.user.phone_number });
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
      message: errors.errors[errors.errors.length - 1].msg,
      error: errors,
    });
  }

  const user = await db.user.findOne({ phone_number: req.user.phone_number });
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
        hello: "file upload error",
      });
  }

  // console.log("file seen", uploadedImage);

  user.name = req.body.name;
  user.lastname = req.body.lastname;
  user.name_english = req.body.name_english;
  user.lastname_english = req.body.lastname_english;
  user.father_name = req.body.father_name;
  user.grade = req.body.grade;
  user.city = req.body.city;
  user.province = req.body.province;
  user.school = req.body.school;

  if (uploadedImage) user.user_image = uploadedImage.image;

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

//Get the list of users that has been invited to the application
exports.userGetReferencedUsers = async (req, res) => {
  const [referencedUsers, itemCount] = await Promise.all([
    db.user
      .find({ reference_phone_number: req.user.phone_number })
      .limit(req.body.limit)
      .skip(req.body.skip)
      .sort({ createdAt: -1 })
      .lean()
      .exec(),
    db.user.count({}),
  ]);

  if (!referencedUsers)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  const pageCount = Math.ceil(itemCount / req.query.limit);

  return res.json({
    success: true,
    error: false,
    message: "عملیات با موفقیت انجام شد.",
    data: {
      has_more: paginate.hasNextPages(req)(pageCount),
      count: itemCount,
      data: referencedUsers,
    },
  });
};

exports.userGetReferencedLink = async (req, res) => {
  const user = await db.user.findOne({ phone_number: req.user.phone_number });
  if (!user)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  return res.json({
    message: "عملیات با موفقیت انجام شد.",
    success: true,
    error: false,
    data: process.env.REACT_APP_URL + "register/" + user.phone_number,
  });
};

exports.userUpdateNationalID = async (req, res) => {
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

  let nationalId = {
    phone_number: req.user.phone_number,
  };

  nationalId.national_id = req.body.national_id;

  let uploadedImage;

  if (req.files) {
    uploadedImage = await ImageUpload(
      req,
      req.files.national_id_image,
      process.env.USER_NATIONAL_ID_PATH
    );
    if (!uploadedImage.success)
      return res.json({
        success: uploadedImage.success,
        err: uploadedImage.err,
        message: uploadedImage.message,
      });

    nationalId.national_id_image = uploadedImage.image;
  } else {
    nationalId.national_id_image = req.body.national_id_image_name;
  }

  var query = { phone_number: req.user.phone_number },
    update = nationalId,
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

  db.nationalID.findOneAndUpdate(query, update, options, function (
    error,
    result
  ) {
    if (error)
      return res.json({
        success: false,
        err: true,
        message: "تکمیل عملیات در دیتابیس با موفقیت انجام نشد.",
      });
  });

  return res.json({
    success: true,
    err: false,
    message: "عملیات با موفقیت انجام شد.",
  });
};
// User update National ID information
exports.userGetNationalID = async (req, res) => {
  const nationalID = await db.nationalID
    .findOne({ phone_number: req.user.phone_number })
    .sort({ created_at: -1 });
  if (!nationalID)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  return res.json({
    success: true,
    err: false,
    message: "عملیات با موفقیت انجام شد.",
    data: nationalID,
  });
};

// User update National ID information
exports.userGetActiveAlerts = async (req, res) => {
  const alerts = await db.alert.find().sort({ createdAt: -1 });
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
