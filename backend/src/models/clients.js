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
      maxLength: [50, "name cant not  be more than 50 characters "],
    },
    username: {
      type: String,
      required: [true, "please add a username"],
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
    role: {
      default: "client",
    },
  },
  { timestamps: true }
);

const client = mongoose.model("Clent", clientSchema);
module.exports = Clent;

// |-- _id
// |-- username
// |-- email
// |-- password
// |-- (other user-related fields)
