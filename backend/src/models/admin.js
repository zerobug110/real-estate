const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  name: String,
  required: true,
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "please add an email",
    ],
  },
  telephone: Number,
  property: {
    type: mongoose.Types.ObjectId,
    ref: "Property",
  },
  role: {
    type: String,
    default: "admin",
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
