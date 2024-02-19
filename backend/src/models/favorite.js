const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema(
  {
    client: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Client",
      },
    ],
    trim: true,
    property: {
      type: mongoose.Types.ObjectId,
      ref: "Property",
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", FavoriteSchema);
module.exports = Favorite;
