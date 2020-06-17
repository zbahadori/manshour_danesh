const sharp = require("sharp");
const {
  userUpdateValidation,
  userUpdateNationalID,
} = require("../validations/UserValidations");
const db = require("../models");

//User update information in the first visit to dashboard
exports.userUpdateInformation = async (req, res) => {
  //Validate with joi
  const { error } = userUpdateValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await db.user.findOne({ phone_number: "09127170126" });
  if (!user)
    return res.json({
      success: false,
      err: true,
      message: "اطلاعاتی در دیتابیس یافت نشد.",
    });

  const userStored = await user.update(req.body);
  if (!userStored)
    return res.json({
      success: false,
      err: true,
      message: "تکمیل عملیات در دیتابیس با موفقیت انجام نشد.",
    });

  return res.json({
    user: userStored,
    message: "عملیات با موفقیت انجام شد",
    success: true,
    error: false,
    data: { token },
  });
};

//Get the list of users that has been invited to the application
exports.userGetReferencedUsers = async (req, res) => {
  //Validate with joi
  const { error } = userUpdateValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await db.user.findOne({ phone_number: "09127170126" });
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
    message: "یوزر با موفقیت وارد شد",
    success: true,
    error: false,
    data: { referencedUsers },
  });
};

// User update National ID information
exports.userUpdateNationalID = async (req, res) => {
  //Validate with joi
  const { error } = userUpdateNationalID(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (!req.files || !req.files.image)
    res.json({
      success: false,
      err: true,
      message: "فایلی برای آپلود انتخاب نشده است",
    });

  let filename = new Date().getTime();
  let arr = req.files.image.name.split(".");
  let extention = arr[arr.length - 1];

  let mime = req.files.image.mimetype.split("/");
  if (
    mime[0] != "image" &&
    !(extention == "jpg" || extention == "jpeg" || extention == "png")
  )
    return res.json({
      success: false,
      err: true,
      message: "فایلی انتخابی برای آپلود از نوع عکس نیست.",
    });

  const theImage = await sharp(req.files.image.data)
    .rotate()
    .resize(320, 240)
    .toBuffer();
  if (!theImage)
    return res.json({
      success: false,
      err: true,
      message: "خطا در تغییر شارپ",
    });

  let img = req.files.image;
  img.data = theImage;

  // Use the mv() method to place the file somewhere on your server
  const status = await img.mv(
    `${process.env.USER_NATIONAL_ID_PATH}${filename}.${extention}`,
    function (err) {
      if (err) return res.status(500).send(err);

      db.user.findOne({ phone_number: "09127170126" }).then((user) => {
        if (!user)
          return res.json({
            success: false,
            err: true,
            message: "اطلاعاتی در دیتابیس یافت نشد.",
          });

        db.nationalID
          .findOne({
            phone_number: user.phone_number,
          })
          .then((record) => {
            if (record)
              record
                .update({
                  phone_number: "09127170126",
                  national_id: req.body.national_id,
                  national_id_image: filename + "." + extention,
                })
                .then((status) => {
                  if (status)
                    return res.json({
                      success: true,
                      err: false,
                      message: "عملیات با موفقیت انجام شد.",
                    });
                });

            db.nationalID
              .create({
                phone_number: "09127170126",
                national_id: req.body.national_id,
                national_id_image: filename + "." + extention,
              })
              .then((status) => {
                return res.json({
                  success: true,
                  err: false,
                  message: "عملیات با موفقیت انجام شد.",
                });
              });
          });
      });
    }
  );
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
  if (!req.files || !req.files.image)
    return res.json({
      success: false,
      err: true,
      message: "فایلی برای آپلود انتخاب نشده است",
    });

  let filename = new Date().getTime();
  let arr = req.files.image.name.split(".");
  let extention = arr[arr.length - 1];

  let mime = req.files.image.mimetype.split("/");
  if (
    mime[0] != "image" &&
    !(extention == "jpg" || extention == "jpeg" || extention == "png")
  )
    return res.json({
      success: false,
      err: true,
      message: "فایلی انتخابی برای آپلود از نوع عکس نیست.",
    });

  const theImage = await sharp(req.files.image.data)
    .rotate()
    .resize(320, 240)
    .toBuffer();
  if (!theImage)
    return res.json({
      success: false,
      err: true,
      message: "خطا در تغییر شارپ",
    });

  let img = req.files.image;
  img.data = theImage;

  // Use the mv() method to place the file somewhere on your server
  const status = await img.mv(
    `${process.env.USER_IMAGE_PATH}${filename}.${extention}`,
    function (err) {
      if (err) return res.status(500).send(err);

      return res.json({
        success: true,
        err: false,
        message: "عملیات با موفقیت انجام شد.",
        data: { theImage },
      });
    }
  );
};
