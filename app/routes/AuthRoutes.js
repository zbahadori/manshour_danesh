module.exports = (app) => {
  const { check } = require("express-validator");
  const NewValidation = require("../validations/NewValidations");
  const AuthController = require("../controllers/AuthController");
  const TestController = require("../controllers/TestController");
  var router = require("express").Router();

  // Main Routes
  router.post("/login-start", AuthController.loginStart);
  router.post("/login-complete", AuthController.loginComplete);
  router.post(
    "/register-start",
    [check("phone_number").isEmail()],
    AuthController.registerStart
  );
  router.post("/register-complete", AuthController.registerComplete);
  router.get("/jwt-test", AuthController.jwtTest);
  router.get("/is-authenticated", AuthController.isAuthenticated);

  router.post("/test", NewValidation.count, TestController.test);

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
