module.exports = (app) => {
  const UserController = require("../controllers/UserController.js");
  const NationalIDValidation = require("../validations/NationalIDValidation");
  const UserValidations = require("../validations/UserValidations");
  const jwtStudentMiddleware = require("../middlewares/JWTStudentMiddleware");

  var router = require("express").Router();

  //User routes

  router.post("/get-user-information", UserController.userGetUserInformantion);

  router.post(
    "/update-user-information",
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
    UserController.userUpdateUserInformation
  );
  router.post("/get-national-id", UserController.userGetNationalID);

  router.post(
    "/update-national-id",
    [NationalIDValidation.national_id],
    UserController.userUpdateNationalID
  );

  router.post("/referenced-users", UserController.userGetReferencedUsers);

  router.post("/reference-link", UserController.userGetReferencedLink);

  router.get("/get-active-alerts", UserController.userGetActiveAlerts);

  router.get("/test", UserController.test);
  router.post("/test", UserController.test);

  // app.use("/api/user", [jwtStudentMiddleware], router);
  app.use("/api/user", router);
};
