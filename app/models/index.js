const dbConfig = require("../config/DBConfig.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./UserModel.js")(mongoose);
db.registrationCode = require("./RegistrationCodeModel")(mongoose);
db.loginCode = require("./LoginCodeModel")(mongoose);
db.nationalID = require("./NationalIDModel")(mongoose);
db.alert = require("./AlertsModel")(mongoose);

module.exports = db;
