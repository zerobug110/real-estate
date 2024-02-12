const {
  createReviewCtrl,
  getAllReviewsCtrl,
} = require("../../controllers/properties/review");

const express = require("express");

const reviewRouter = express.Router();

reviewRouter.route("/").post(createReviewCtrl).get(getAllReviewsCtrl);

module.exports = reviewRouter;
