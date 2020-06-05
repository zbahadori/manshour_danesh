module.exports = (app) => {
  const Auth = require("../controllers/AuthController");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/login", Auth.login);

  app.use("/api/auth", router);
};
