const express = require("express");
const {
  createPropertyCtrl,
  getAllPropertiesCtrl,
  getPropertyCtrl,
  updatePropertyCtrl,
  deletePropertyCtrl,
} = require("../../controllers/properties/propertiesCtrl");

const propertiesRoute = express.Router();

propertiesRoute.route("/").post(createPropertyCtrl).get(getAllPropertiesCtrl);
propertiesRoute
  .route("/:id")
  .get(getPropertyCtrl)
  .put(updatePropertyCtrl)
  .delete(deletePropertyCtrl);

module.exports = propertiesRoute;
