const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fileUpload = require("express-fileupload");
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

app.use(express.static(path.join(__dirname, "client")));

// simple route
app.get("/", (req, res) => res.render("index.html"));

//Routes
require("./app/routes/AdminRoutes")(app);
require("./app/routes/UserRouters")(app);
require("./app/routes/AuthRoutes")(app);

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
