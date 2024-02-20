const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema(
  {
    clientId: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Client",
      },
    ],
    propertyId: {
      type: mongoose.Types.ObjectId,
      ref: "Property",
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", FavoriteSchema);
module.exports = Favorite;
