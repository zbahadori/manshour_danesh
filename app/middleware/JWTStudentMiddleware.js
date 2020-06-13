const jwt = require("jsonwebtoken");
const AuthConfig = require("../config/AuthConfig");

module.exports = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) res.status(401).send("access denied.");

  try {
    const user = jwt.verify(token, AuthConfig.secret);
    if (user.role != "student" && user.role != "admin")
      return res.status(401).send("User is not student or admin");
    //User is verified
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).send("JWT token is invalid");
  }
};
