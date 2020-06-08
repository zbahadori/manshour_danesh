module.exports = (app) => {
  const users = require("../controllers/UserController.js");
  const jwtMiddleware = require("../middleware/JWTMiddleware");

  var router = require("express").Router();

  // Create a new User
  // router.post("/", users.create);

  // // Retrieve all Users
  // router.get("/", users.findAll);

  // // Retrieve all published Users
  // router.get("/published", jwtVerify, users.findAllPublished);

  // // Retrieve a single User with id
  // router.post("/login", users.login);

  // // Update a User with id
  // router.put("/:id", users.update);

  router.get("/test", users.test);

  app.use("/api/users", router);
};
