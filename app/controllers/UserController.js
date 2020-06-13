const sharp = require("sharp");
const { userUpdateValidation } = require("../validations/UserValidations");
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

// Test function
exports.test = async (req, res) => {
  if (!req.files || !req.files.image)
    res.json({ message: "no image has been selected" });

  let filename = new Date().getTime();
  console.log(filename);
  let arr = req.files.image.name.split(".");
  let extention = arr[arr.length - 1];

  let mime = req.files.image.mimetype.split("/");
  if (
    mime[0] != "image" &&
    !(extention == "jpg" || extention == "jpeg" || extention == "png")
  )
    return res.json({ message: "File type should be image format" });

  const theImage = await sharp(req.files.image.data).resize(200).toBuffer();
  if (!theImage)
    return res.json({ message: "Image could not be converted by sharp" });

  let img = req.files.image;
  img.data = theImage;

  // Use the mv() method to place the file somewhere on your server
  const status = await img.mv(
    `files/upload/${filename}.${extention}`,
    function (err) {
      if (err) return res.status(500).send(err);

      console.log(status);

      res.json({ data: theImage });
    }
  );
};
