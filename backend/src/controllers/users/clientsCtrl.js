const client = require("../../models/clients");

// @des create client
// @route api/v1/clients
// @access public
exports.createClientCtrl = async (req, res) => {
  const { name, email, password, phone } = req.body;
  const user = await client.create({ name, email, password, phone });
  res.status(201).json({
    status: "success",
    data: user,
  });
};

exports.getAllClientsCtrl = async (req, res) => {
  const user = client.find();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

exports.getClientCtrl = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "get client successfully",
    });
  } catch (error) {}
};

exports.updateClientCtrl = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "client updated successfully",
    });
  } catch (error) {}
};

exports.deleteClientCtrl = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "client deleted successfully",
    });
  } catch (error) {}
};
