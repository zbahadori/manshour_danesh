module.exports = (app) => {
  const Auth = require("../controllers/AuthController");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/login", Auth.login);

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
