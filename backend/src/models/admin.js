const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  type: mongoose.Types.ObjectId,
  name: String,
  required: true,
  email: String,
  telephone: Number,
  ref: "Property",
  default: "admin",
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
