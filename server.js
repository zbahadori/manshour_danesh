const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const corsOrigin = require("./app/config/AppConfig");
const AuthMiddleware = require("./app/middleware/AuthMiddleware");

dotenv.config();

const app = express();

// Init Auth middleware
app.use(AuthMiddleware);

//CORS middleware
var corsOptions = {
  origin: corsOrigin,
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Database Connection
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "To our application" });
});

//Routes
require("./app/routes/UserRouters")(app);
require("./app/routes/AuthRoutes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
