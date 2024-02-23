const AsyncHandler = require("express-async-handler");
const Client = require("../../models/clients");
const ErrorResponse = require("../../utils/errorResponse");

// @des create client
// @route post api/v1/clients
// @access public
exports.createClientCtrl = AsyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;
  const user = await Client.create({ name, email, password, phone });
  res.status(201).json({
    status: "success",
    data: user,
  });
});

// @des get all  clients
// @route get api/v1/clients
// @access public
exports.getAllClientsCtrl = AsyncHandler(async (req, res) => {
  //qeury search
  let query;

  //copy req.body
  let reqQuery = { ...req.body };

  //field to exclude
  const removeField = ["select", "sort", "paginate"];

  //loop over remover field and delete them from reqQuery
  removeField.forEach((param) => delete reqQuery[param]);

  //create qurery String
  let queryStr = JSON.stringify(reqQuery);

  //create operators like ($gt, $te, $lt, $lte, $in)
  queryStr = queryStr.replace(
    /\b(gt|gtl|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  //finding resource
  query = Client.find(JSON.parse(queryStr));

  //select fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  // sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.select(sortBy);
  }

  //pagination

  //executing query
  const user = await query;
  res.status(200).json({
    status: "success",
    count: user.length,
    data: user,
  });
});

// @des get client
// @route get api/v1/clients/:id
// @access public
exports.getClientCtrl = AsyncHandler(async (req, res, next) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(`cant find client with an id of ${req.params.id} `)
    );
  }
  res.status(200).json({
    success: true,
    data: client,
  });
});

// @des update client
// @route put api/v1/clients/:id
// @access private
exports.updateClientCtrl = AsyncHandler(async (req, res, next) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  // if the id does not exist
  if (!client) {
    return res.status(404).json({
      success: false,
    });
  }
  //updated data
  res.status(200).json({
    success: true,
    data: client,
  });
});

// @des delete clientz
// @route delete api/v1/clients:id
// @access pivate
exports.deleteClientCtrl = AsyncHandler(async (req, res) => {
  const client = await Client.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
  });
  if (!client) {
    return res.status(404).json({
      success: false,
      error: "client not found",
    });
  }
  // return empty object
  res.status(200).json({
    success: true,
    data: {},
  });
});
