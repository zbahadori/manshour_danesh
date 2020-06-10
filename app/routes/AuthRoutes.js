module.exports = (app) => {
  const Auth = require("../controllers/AuthController");
  const axios = require("axios");
  var router = require("express").Router();

  // Main Routes
  router.post("/login", Auth.login);
  router.post("/register-begin", Auth.registerBegin);
  router.post("/register-complete", Auth.registerComplete);

  app.use("/api/auth", router);

  // Error handling
  app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      // Send the error rather than to show it on the console
      res.status(401).send(err);
    } else {
      next(err);
    }
  });
};
