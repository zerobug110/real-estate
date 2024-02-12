const express = require("express");
const {
  createPropertyCtrl,
} = require("../../controllers/properties/propertiesCtrl");

const propertiesRoute = express.Router();

propertiesRoute.route("/").post(createPropertyCtrl);

module.exports = propertiesRoute;
