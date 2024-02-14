const express = require("express");
const {
  createPropertyCtrl,
  getAllPropertiesCtrl,
  getPropertyCtrl,
} = require("../../controllers/properties/propertiesCtrl");

const propertiesRoute = express.Router();

propertiesRoute.route("/").post(createPropertyCtrl).get(getAllPropertiesCtrl);
propertiesRoute.route("/:id").get(getPropertyCtrl);

module.exports = propertiesRoute;
