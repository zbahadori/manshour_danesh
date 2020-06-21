module.exports = (app) => {
  const UserController = require("../controllers/UserController.js");
  const NationalIDValidation = require("../validations/NationalIDValidation");
  const UserValidations = require("../validations/UserValidations");
  const jwtStudentMiddleware = require("../middlewares/JWTStudentMiddleware");

  var router = require("express").Router();

  //User routes
  router.post(
    "/update-information",
    [
      UserValidations.name,
      UserValidations.lastname,
      UserValidations.name_english,
      UserValidations.lastname_english,
      UserValidations.father_name,
      UserValidations.grade,
      UserValidations.province,
      UserValidations.city,
      UserValidations.school,
    ],
    UserController.userUpdateInformation
  );
  router.get("/referenced-users", UserController.userGetReferencedUsers);
  router.post(
    "/update-national-id",
    [NationalIDValidation.national_id],
    UserController.userUpdateNationalID
  );
  router.get("/get-active-alerts", UserController.userGetActiveAlerts);

  app.use("/api/user", router);
};
