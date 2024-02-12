const Property = require("../../models/property");

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


exports.getAllProperties = async (req, res, next) => {
  const properties = await Property.find();
  res.status(200).json({
    success: true,
    data: properties,
  });
};