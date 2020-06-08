const jwt = require("jsonwebtoken");
const AuthConfig = require("../config/AuthConfig");

module.exports = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) res.status(401).send("access denied.");

  try {
    const verified = jwt.verify(token, AuthConfig.secret);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).send("invalid JWT token.");
  }
};
