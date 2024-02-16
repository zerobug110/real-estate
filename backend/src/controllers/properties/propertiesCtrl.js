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
  console.log("first");
  console.log(req.query);
  const properties = await Property.find();
  res.status(200).json({
    success: true,
    count: properties.length,
    data: properties,
  });
};

// @desc get property
// @route get api/v1/properties/:id
// @access public
exports.getPropertyCtrl = AsyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    res.status(404).json({
      success: false,
      error: "property not found",
    });
  }
  res.status(200).json({
    success: false,
    data: property,
  });
});

// @desc update propeerty
// @route put api/v1/properties/:id
// @access public
exports.updatePropertyCtrl = AsyncHandler(async (req, res, next) => {
  const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true, 
    runValidators: true
  })
  if(!property) {
    return res.status(400).json({
      success: true,
      error: "not found"
    })
  }
  res.status(200).json({
    success: true,
    data: property,
  })
})

exports.deletePropertyCtrl = AsyncHandler(async(req, res, next) => {
  const property = await Property.findByIdAndDelete(req.params.id)
  if(!property) {
    return res.status(404).json({
      success: true,
      message: "property not found"
    })
  }
  res.status(200).json({
    success: true,
    data: property,
  })
})