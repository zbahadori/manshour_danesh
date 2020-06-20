const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
var cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const corsOrigin = require("./app/config/AppConfig");
const secureStorage = require("./app/services/SecureStorage");
const AuthMiddleware = require("./app/middlewares/AuthMiddleware");

dotenv.config();

const app = express();

// Init Auth middleware
// app.use(AuthMiddleware);

//CORS middleware
var corsOptions = {
  origin: corsOrigin,
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Coockie parser for JWT
app.use(cookieParser());

// Enable file Upload
app.use(
  fileUpload({
    safeFileNames: true,
    limits: { fileSize: 50 * 1024 * 1024 },
    createParentPath: true,
    preserveExtension: 4,
    debug: true,
    limitHandler: (req, res, next) => {
      return res.json({ err: true, message: "Size limit has been exceeded" });
    },
  })
);

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
// app.get("/", (req, res) => res.render("./client/build/index.html"));

//Routes
require("./app/routes/AdminRoutes")(app);
require("./app/routes/UserRouters")(app);
require("./app/routes/AuthRoutes")(app);

// static folder route
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/this", async (req, res) => {
  await secureStorage.setItem("key", req.cookies);
  const data = await secureStorage.getItem("key");
  res.send(data);
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", function (err) {
    if (err.errno === "EADDRINUSE") {
      console.log(
        `----- Port ${port} is busy, trying with port ${port + 1} -----`
      );
      listen(port + 1);
    } else {
      console.log(err);
    }
  });
