const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Client",
    },
    description: {
      type: String,
      required: true,
      maxLength: [500, "review can not be more than 500 characters"],
    },
    property: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Property",
    },
    rating: {
      type: Number,
      required: true,
      min: [1, "Rating can not be less than 1"],
      max: [10, "Rating can not be more than 10"],
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
