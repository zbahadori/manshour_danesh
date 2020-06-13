module.exports = (app) => {
  const adminController = require("../controllers/AdminController");
  const JWTAdminMiddleware = require("../middleware/JWTAdminMiddleware");

  var router = require("express").Router();

  //Admin routes
  //user manage routes
  router.get("/get-all-users", adminController.adminGetAllUser);
  router.post("/update-user-block", adminController.adminUserBlockUpdate);

  //alerts
  router.post("/create-alert", adminController.adminCreateAlert);
  router.post("/update-single-alert", adminController.adminUpdateSingleAlert);
  router.get("/get-alert", adminController.adminGetAllAlert);

  //national Id
  router.get("/get-national-id", adminController.adminGetAllNationalID);
  router.delete(
    "/delete-national-id",
    adminController.adminDeleteSingleNationalID
  );

  // router.post("/test", JWTAdminMiddleware, adminController.test);

  app.use("/api/admin", router);
};
