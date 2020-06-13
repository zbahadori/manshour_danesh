const {
  adminCreateAlertsValidation,
  adminUserUpdateBlockValidation,
  adminDeleteSingleNationalIDValidation,
  adminUpdateSingleAlertValidation,
} = require("../validations/AdminValidations");
const db = require("../models");

//get all users
exports.adminGetAllUser = async (req, res) => {
  const users = await db.user.find().sort({ createdAt: -1 });
  if (!users) return res.json({ message: "No user was found in DB" });

  return res.json({ message: "success", data: users });
};

//block or unblock a user
exports.adminUserBlockUpdate = async (req, res) => {
  //Validate with joi
  const { error } = adminUserUpdateBlockValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await db.user.findOne({
    phone_number: req.body.phone_number,
  });
  if (!user) return res.json({ message: "No user was found in DB" });

  const modifiedUser = user.update({ status: !user.status });
  if (!modifiedUser)
    return res.json({ message: "User could not be updated at this moment" });

  return res.json({ message: "success" });
};

//Admin get All nationalID
exports.adminGetAllNationalID = async (req, res) => {
  const nationalIDs = await db.nationalID.find().sort({ createdAt: -1 });
  if (!nationalIDs) return res.json({ message: "No item was found in DB" });

  return res.json({ message: "success", data: nationalIDs });
};

//Admin Delete single nationalID
exports.adminDeleteSingleNationalID = async (req, res) => {
  //Validate with joi
  const { error } = adminDeleteSingleNationalIDValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log(req.body.phone_number);

  const nationalIDs = await db.nationalID.findOne({
    phone_number: req.body.phone_number,
  });
  if (!nationalIDs)
    return res.json({ message: "No item was found with this query" });

  const deleted = await nationalIDs.delete();
  console.log(deleted);
  return res.json({ message: "success" });
};

// Admin create Alert
exports.adminCreateAlert = async (req, res) => {
  //Validate with joi
  const { error } = adminCreateAlertsValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //Store alert in DB
  const alert = await db.alert.create(req.body);
  if (!alert) return res.json({ message: "DB error no alert created" });

  return res.json({
    message: "Alert created successfully",
    alert,
  });
};

// Admin Get the Alerts
exports.adminGetAllAlert = async (req, res) => {
  //Store alert in DB
  const alerts = await db.alert.find();
  if (!alerts) return res.json({ message: "No item has been found" });

  return res.json({
    message: "success",
    data: alerts,
  });
};

exports.adminUpdateSingleAlert = async (req, res) => {
  //Validate with joi
  const { error } = adminUpdateSingleAlertValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Store alert in DB
  const alert = await db.alert.findOne({
    _id: req.body.id,
  });
  if (!alert)
    return res.json({ message: "DB error no alert found with this id" });

  return res.json({
    message: "Alert updated successfully",
    alert,
  });
};
