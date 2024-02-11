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
    phone: {
      type: String,
      maxLength: [20, "Phone number can not be longer than 20 characters"],
    },
    role: {
      default: "client",
    },
  },
  { timestamps: true }
);

const client = mongoose.model("Client", clientSchema);
module.exports = Client;
