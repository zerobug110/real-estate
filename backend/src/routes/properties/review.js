const {
  createReviewCtrl,
  getAllReviewsCtrl,
  getReviewCtrl,
  UpdateReviewCtrl,
} = require("../../controllers/properties/review");

const express = require("express");

const reviewRouter = express.Router();

reviewRouter.route("/").post(createReviewCtrl).get(getAllReviewsCtrl);
reviewRouter
  .route("/:id")
  .get(getReviewCtrl)
  .put(UpdateReviewCtrl)
//   .delete(deleteReview);

module.exports = reviewRouter;
