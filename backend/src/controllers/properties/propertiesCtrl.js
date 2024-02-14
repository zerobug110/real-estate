const AsyncHandler = require("express-async-handler");
const Property = require("../../models/property");

// @desc create  property
// @route post api/v1/properties
// @access public
exports.createPropertyCtrl = async (req, res, next) => {
  const {
    name,
    description,
    bedrooms,
    bathrooms,
    squareFoot,
    price,
    address,
    status,
    images,
    location,
    type,
    averateRating,
  } = req.body;
  const apt = await Property.create({
    name,
    description,
    bedrooms,
    bathrooms,
    squareFoot,
    price,
    address,
    status,
    images,
    location,
    type,
    averateRating,
  });

  res.status(200).json({
    status: "success",
    data: apt,
  });
};

// @desc get property
// @route get all api/v1/properties
// @access public
exports.getAllPropertiesCtrl = async (req, res, next) => {
  const properties = await Property.find();
  res.status(200).json({
    success: true,
    count: properties.length,
    data: properties,
  });
};

// @desc get propeerty
// @route get api/v1/properties/:id
// @access public
exports.getPropertyCtrl = AsyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.status(200).json({
    success: false,
    data: property,
  });
});
