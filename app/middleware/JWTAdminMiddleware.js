const jwt = require("jsonwebtoken");
const AuthConfig = require("../config/AuthConfig");

module.exports = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) res.status(401).send("access denied.");

  //get the payload
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace("-", "+").replace("_", "/");
  const payload = JSON.parse(Buffer.from(base64, "base64").toString());

  try {
    const user = jwt.verify(token, AuthConfig.secret);
    if (user.role != "admin") return res.status(401).send("User is not admin");
    //User is verified
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).send("JWT token is invalid");
  }
};
