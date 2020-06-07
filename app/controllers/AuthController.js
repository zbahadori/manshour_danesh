const AuthConfig = require("../config/AuthConfig");

// Create and Save a new Tutorial
exports.login = (req, res) => {
  // Validate request
  if (!req.body.username || !req.body.password) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // INstantiating the express-jwt middleware
  const jwtMW = AuthConfig.secret;

  // MOCKING DB just for test
  let users = [
    {
      id: 1,
      username: "test",
      password: "asdf123",
    },
    {
      id: 2,
      username: "test2",
      password: "asdf12345",
    },
  ];

  // LOGIN ROUTE
  app.post("/login", (req, res) => {
    const { username, password } = req.body;
    // Use your DB ORM logic here to find user and compare password
    for (let user of users) {
      // I am using a simple array users which i made above
      if (
        username == user.username &&
        password ==
          user.password /* Use your password hash checking logic here !*/
      ) {
        //If all credentials are correct do this
        let token = jwt.sign(
          { id: user.id, username: user.username },
          "keyboard cat 4 ever",
          { expiresIn: 129600 }
        ); // Sigining the token
        res.json({
          sucess: true,
          err: null,
          token,
        });
        break;
      } else {
        res.status(401).json({
          sucess: false,
          token: null,
          err: "Username or password is incorrect",
        });
      }
    }
  });

  app.get("/", jwtMW /* Using the express jwt MW here */, (req, res) => {
    res.send("You are authenticated"); //Sending some response when authenticated
  });

  //   // Create a Tutorial
  //   const tutorial = new Tutorial({
  //     title: req.body.title,
  //     description: req.body.description,
  //     published: req.body.published ? req.body.published : false
  //   });

  //   // Save Tutorial in the database
  //   tutorial
  //     .save(tutorial)
  //     .then(data => {
  //       res.send(data);
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while creating the Tutorial."
  //       });
  //     });
};
