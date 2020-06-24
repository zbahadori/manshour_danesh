module.exports = (app) => {
  const AdminController = require("../controllers/AdminController");
  const UserValidations = require("../validations/UserValidations");
  const AlertValidation = require("../validations/AlertValidation");
  const JWTAdminMiddleware = require("../middlewares/JWTAdminMiddleware");

  var router = require("express").Router();

  //Admin routes
  //user manage routes
  router.post("/get-all-users", AdminController.adminGetAllUser);
  router.post(
    "/update-user-block",
    [UserValidations.phone_number],
    AdminController.adminUserBlockUpdate
  );

  //alerts
  router.post(
    "/create-alert",
    [AlertValidation.title, AlertValidation.message],
    AdminController.adminCreateAlert
  );
  router.post(
    "/update-single-alert",
    [
      AlertValidation.id,
      AlertValidation.title,
      AlertValidation.message,
      AlertValidation.status,
    ],
    AdminController.adminUpdateSingleAlert
  );
  router.get("/get-alert", AdminController.adminGetAllAlert);

  //national Id
  router.post("/get-national-id", AdminController.adminGetAllNationalID);
  router.post(
    "/confirm-national-id",
    [UserValidations.phone_number],
    AdminController.adminConfirmSingleNationalID
  );

  router.post(
    "/delete-national-id",
    [UserValidations.phone_number],
    AdminController.adminDeleteSingleNationalID
  );

  // router.post("/test", AdminController.test);

  app.use("/api/admin", router);
};
