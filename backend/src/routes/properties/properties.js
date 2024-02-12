const express = require("express");
const {
  createPropertyCtrl,
  getAllProperties,
} = require("../../controllers/properties/propertiesCtrl");

const propertiesRoute = express.Router();

propertiesRoute.route("/").post(createPropertyCtrl).get(getAllProperties);

module.exports = propertiesRoute;
