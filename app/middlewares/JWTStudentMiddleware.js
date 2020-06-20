const jwt = require("jsonwebtoken");
const AuthConfig = require("../config/AuthConfig");

module.exports = (req, res, next) => {
  const token = req.cookies.authorization;
  if (!token)
    return res.json({
      success: false,
      err: true,
      message: "یوزر مهمان است.",
    });

  //get the payload
  // var base64Url = token.split(".")[1];
  // var base64 = base64Url.replace("-", "+").replace("_", "/");
  // const payload = JSON.parse(Buffer.from(base64, "base64").toString());

  try {
    const user = jwt.verify(token, AuthConfig.secret);
    if (user.role != "student" && user.role != "admin")
      return res.json({
        success: false,
        err: true,
        message: "لطفا ابتدا Login کنید.",
      });

    req.user = user;
    return next();
  } catch (err) {
    return res.json({
      success: false,
      err: true,
      message: "کد منقضی شده است.",
    });
  }
};
