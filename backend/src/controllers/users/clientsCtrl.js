const AsyncHandler = require("express-async-handler");
const Client = require("../../models/clients");

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
  let query;
  let reqQuery = { ...req.body };
  let queryStr = JSON.stringify(reqQuery);

  query = await Client.find(JSON.parse(queryStr)).replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
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
exports.getClientCtrl = AsyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);
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
  if (!review) {
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
