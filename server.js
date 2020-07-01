const express = require("express");
const bodyParser = require("body-parser");
const paginate = require("express-paginate");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
var cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const db = require("./app/models");

dotenv.config();

const app = express();

//CORS middleware
app.use(
  cors({
    origin: [
      `${process.env.REACT_APP_URL}`,
      "http://localhost:3000",
      "https://manshour.herokuapp.com",
    ],
    credentials: true,
  })
);

// keep this before all routes that will use pagination
app.use(
  paginate.middleware(
    process.env.PAGINATION_LIMIT,
    process.env.PAGINATION_MAXLIMIT
  )
);

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
      return res.json({
        err: true,
        message: "حجم فایل بیشتر از اندازه تعیین شده است.",
      });
    },
  })
);

//Database Connection
db.mongoose
  .connect(process.env.DB_CONNECT, {
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

//Routes
require("./app/routes/AdminRoutes")(app);
require("./app/routes/UserRouters")(app);
require("./app/routes/AuthRoutes")(app);

// static folder route
app.use(express.static("build"));
app.get("/static-index", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});

app.get("/this", async (req, res) => {
  const [results, itemCount] = await Promise.all([
    db.user.find({}).limit(req.query.limit).skip(req.skip).lean().exec(),
    db.user.count({}),
  ]);

  const pageCount = Math.ceil(itemCount / req.query.limit);

  return res.json({
    success: true,
    err: false,
    message: "عملیات با موفقیت انجام شد.",
    data: {
      has_more: paginate.hasNextPages(req)(pageCount),
      count: itemCount,
      data: results,
    },
  });
});

//Redirect all other routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
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
