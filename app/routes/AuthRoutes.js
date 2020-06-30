module.exports = (app) => {
  const { check } = require("express-validator");
  const UserValidations = require("../validations/UserValidations");
  const AuthController = require("../controllers/AuthController");
  var router = require("express").Router();

  // Main Routes
  router.post(
    "/login-start",
    [UserValidations.phone_number],
    AuthController.loginStart
  );
  router.post("/login-complete", AuthController.loginComplete);
  router.post(
    "/register-start",
    [UserValidations.phone_number, UserValidations.reference_phone_number],
    AuthController.registerStart
  );
  router.post(
    "/register-complete",
    [UserValidations.code],
    AuthController.registerComplete
  );
  router.get("/jwt-student", AuthController.jwtStudent);
  router.get("/jwt-admin", AuthController.jwtAdmin);
  router.get("/is-authenticated", AuthController.isAuthenticated);

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
