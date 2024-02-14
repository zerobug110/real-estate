const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: [true, "please add a name"],
      maxLength: [50, "name can not  be more than 50 characters "],
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // required: true,
      // trim: true,
      // lowercase: true,
      unique: true,
      // required: "Email address is required",
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      //   "please add an email",
      // ],
    },
    phone: {
      type: String,
      maxLength: [20, "Phone number can not be longer than 20 characters"],
      required: true,
    },
    role: {
      type: String,
      default: "client",
    },
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
; 