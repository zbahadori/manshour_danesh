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
  if (!user) return res.json({ message: "No user found with the given info" });

  const userStored = await user.update(req.body);
  if (!userStored)
    return res.json({ message: "User could not be stored in database" });

  return res.json({
    user: userStored,
  });
};

//Get the list of users that has been invited to the application
exports.userGetReferencedUsers = async (req, res) => {
  //Validate with joi
  const { error } = userUpdateValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await db.user.findOne({ phone_number: "09127170126" });
  if (!user) return res.json({ message: "No user found with the given info" });

  const referencedUsers = await db.user.findOne({
    reference_phone_number: user.phone_number,
  });
  if (!referencedUsers)
    return res.json({
      message: "No referenced user has been recorded with this phone number",
    });

  return res.json({
    message: "",
    success: true,
    err: false,
    users: referencedUsers,
  });
};

// User update National ID information
exports.userUpdateNationalID = async (req, res) => {
  //Validate with joi
  const { error } = userUpdateNationalID(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (!req.files || !req.files.image)
    res.json({ message: "no image has been selected" });

  let filename = new Date().getTime();
  let arr = req.files.image.name.split(".");
  let extention = arr[arr.length - 1];

  let mime = req.files.image.mimetype.split("/");
  if (
    mime[0] != "image" &&
    !(extention == "jpg" || extention == "jpeg" || extention == "png")
  )
    return res.json({ message: "File type should be image format" });

  const theImage = await sharp(req.files.image.data)
    .rotate()
    .resize(320, 240)
    .toBuffer();
  if (!theImage)
    return res.json({ message: "Image could not be converted by sharp" });

  let img = req.files.image;
  img.data = theImage;

  // Use the mv() method to place the file somewhere on your server
  const status = await img.mv(
    `${process.env.USER_NATIONAL_ID_PATH}${filename}.${extention}`,
    function (err) {
      if (err) return res.status(500).send(err);

      db.user.findOne({ phone_number: "09127170126" }).then((user) => {
        if (!user)
          return res.json({ message: "User is not found based on auth" });

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
                    return res.json({ data: "Data has been updated" });
                });

            db.nationalID
              .create({
                phone_number: "09127170126",
                national_id: req.body.national_id,
                national_id_image: filename + "." + extention,
              })
              .then((status) => {
                return res.json({ data: "Data has been created" });
              });
          });
      });
    }
  );
};

// User update National ID information
exports.userGetActiveAlerts = async (req, res) => {
  const alerts = await db.alert.find({ status: true }).sort({ createdAt: -1 });
  if (!alerts) return res.json({ message: "no item was found in DB" });

  return res.json({ message: "success", data: alerts });
};

// Test function
exports.test = async (req, res) => {
  if (!req.files || !req.files.image)
    res.json({ message: "no image has been selected" });

  let filename = new Date().getTime();
  let arr = req.files.image.name.split(".");
  let extention = arr[arr.length - 1];

  let mime = req.files.image.mimetype.split("/");
  if (
    mime[0] != "image" &&
    !(extention == "jpg" || extention == "jpeg" || extention == "png")
  )
    return res.json({ message: "File type should be image format" });

  const theImage = await sharp(req.files.image.data)
    .rotate()
    .resize(320, 240)
    .toBuffer();
  if (!theImage)
    return res.json({ message: "Image could not be converted by sharp" });

  let img = req.files.image;
  img.data = theImage;

  // Use the mv() method to place the file somewhere on your server
  const status = await img.mv(
    `${process.env.USER_IMAGE_PATH}${filename}.${extention}`,
    function (err) {
      if (err) return res.status(500).send(err);

      res.json({ data: theImage });
    }
  );
};
