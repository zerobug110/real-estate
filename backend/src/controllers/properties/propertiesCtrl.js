const AsyncHandler = require("express-async-handler");
const Property = require("../../models/property");
const { Query } = require("mongoose");
const ErrorResponse = require("../../utils/errorResponse");

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
  //query filter
  let query;

  //copy req.query
  const reqQuery = { ...req.body };

  // Filed to exclude
  const removeField = ["select", "sort", "page", "limit"];

  //loop over remover filed and delete them from reqQuery
  removeField.forEach((param) => delete reqQuery[param]);

  //create query string
  let queryStr = JSON.stringify(reqQuery);

  /*
  mongodb filter operators.
  gt: greate than
  gte: greater than or equal to
  lt: less than
  lte: less than or equal to
  */
  //create operatores like ($gt, $gte, $lt, $lte)
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  //finding resource
  query = Property.find(JSON.parse(queryStr));

  //select fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    console.log(fields);
    query = query.select(fields);
  }

  //sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  //pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Property.countDocuments();
  query = query.skip(startIndex).limit(limit);

  //executing query
  const properties = await query;

  //pagination results
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.status(200).json({
    success: true,
    count: properties.length,
    pagination,
    data: properties,
  });
};

// @desc get property
// @route get api/v1/properties/:id
// @access public
exports.getPropertyCtrl = AsyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    return next(
      new ErrorResponse(`No property with the id of ${req.params.id}`),
      404
    );
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
    runValidators: true,
  });
  if (!property) {
    return res.status(400).json({
      success: true,
      error: "not found",
    });
  }
  res.status(200).json({
    success: true,
    data: property,
  });
});

// @desc delete propeerty
// @route delete api/v1/properties/:id/
// @access private
exports.deletePropertyCtrl = AsyncHandler(async (req, res, next) => {
  const property = await Property.findByIdAndDelete(req.params.id);
  if (!property) {
    return res.status(404).json({
      success: true,
      message: "property not found",
    });
  }
  res.status(200).json({
    success: true,
    data: property,
  });
});

// @desc upload propeerty photo
// @route put api/v1/properties/:id/photo
// @access private
exports.uploadPropertyPhotoCtrl = AsyncHandler(async (req, res, next) => {
  const property = await Property.findById(req.params.id);
  if (!property) {
    return next(
      new ErrorResponse(`No property with the id of ${req.params.id}`),
      404
    );
  }
  if (!res.files) {
    return next(new ErrorResponse(`please upload a file`, 400), 404);
  }
});
