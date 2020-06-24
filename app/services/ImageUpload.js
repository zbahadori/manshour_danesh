const sharp = require("sharp");

module.exports = ImageUpload = async (req, uploadedImage, storePath) => {
  if (!req.files || !uploadedImage)
    return {
      success: false,
      err: true,
      message: "فایلی برای آپلود انتخاب نشده است",
    };

  let filename = new Date().getTime();
  let arr = uploadedImage.name.split(".");
  let extention = arr[arr.length - 1];

  let mime = uploadedImage.mimetype.split("/");
  if (
    mime[0] != "image" &&
    !(
      extention == "jpg" ||
      extention == "jpeg" ||
      extention == "png" ||
      extention == "gif"
    )
  )
    return {
      success: false,
      err: true,
      message: "فایلی انتخابی برای آپلود از نوع عکس نیست.",
    };

  const theImage = await sharp(uploadedImage.data)
    .rotate()
    .resize(320, 240)
    .toBuffer();
  if (!theImage)
    return {
      success: false,
      err: true,
      message: "خطا در تغییر شارپ",
    };

  let img = uploadedImage;
  img.data = theImage;

  // Use the mv() method to place the file somewhere on your server
  console.log(`${storePath}${filename}.${extention}`, "fsf");
  try {
    img.mv(`${storePath}${filename}.${extention}`, (err) => {
      if (err) {
        return {
          success: false,
          err: true,
          message: "خظا در ذخیره عکس",
        };
      }
    });
  } catch (e) {
    return {
      success: false,
      err: true,
      message: "خظا در ذخیره عکس",
    };
  }

  return {
    success: true,
    err: false,
    message: "عکس با موفقیت بارگزاری شد",
    image: `${filename}.${extention}`,
  };
};
