const jwt = require("jsonwebtoken");
const AuthConfig = require("../config/AuthConfig");

module.exports = (req, res, next) => {
  const token = req.header("authorization");
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
        message: "یوزر مهمان است.",
      });
    //User is verified
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
