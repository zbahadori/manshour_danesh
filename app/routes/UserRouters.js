module.exports = (app) => {
  const userController = require("../controllers/UserController.js");
  const jwtStudentMiddleware = require("../middleware/JWTStudentMiddleware");

  var router = require("express").Router();

  //User routes
  router.post("/update-information", userController.userUpdateInformation);
  router.get("/referenced-users", userController.userGetReferencedUsers);

  router.post("/test", jwtStudentMiddleware, userController.test);

  app.use("/api/user", router);
};
