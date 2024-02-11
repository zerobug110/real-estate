// Review
// |-- _id
// |-- userId (reference to User model)
// |-- propertyId (reference to Property model)
// |-- rating
// |-- comments
// |-- timestamp
// |-- (other review-related fields)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: [500, "review can not be more than 500 characters"],
    },
    wroteBy: {
      type: mongoose.Types.ObjectId,
      ref: Client,
      required: true,
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
