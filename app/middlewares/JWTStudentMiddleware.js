const jwt = require("jsonwebtoken");
const AuthConfig = require("../config/AuthConfig");

module.exports = (req, res, next) => {
  const token = req.headers.cookie.split("authorization=")[1];
  if (!token)
    return res.json({
      success: false,
      err: true,
      message: "یوزر مهمان است.",
    });

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
