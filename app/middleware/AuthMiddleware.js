const moment = require("moment");

const logger = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
};

module.exports = logger;
