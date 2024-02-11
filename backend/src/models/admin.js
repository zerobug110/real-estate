const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  type: mongoose.Types.ObjectId,
  name: String,
  required: true,
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "please add an email",
    ],
  },
  telephone: Number,
  ref: "Property",
  default: "admin",
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
