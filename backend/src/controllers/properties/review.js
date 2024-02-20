const Review = require("../../models/reviews");
const AsyncHandler = require("express-async-handler");

// @desc create  review
// @route post api/v1/reviews
// @access public
exports.createReviewCtrl = AsyncHandler(async (req, res, next) => {
  const { author, description, property, rating } = req.body;
  const review = await Review.create({ author, description, property, rating });
  res.status(201).json({
    staus: "success",
    data: review,
  });
});

// @desc get all  reviews
// @route get api/v1/reviews
// @access public
exports.getAllReviewsCtrl = AsyncHandler(async (req, res, next) => {
  const reviews = await Review.find()
    .populate("property")
    .populate("author")
    .exec();
  res.status(200).json({
    success: true,
    count: reviews.length,
    data: reviews,
  });
});

// @desc get  review
// @route get api/v1/review/:id
// @access public
exports.getReviewCtrl = AsyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  res.status(200).json({
    success: "true",
    data: review,
  });
});

// @desc update  review
// @route put api/v1/review/:id
// @access public
exports.UpdateReviewCtrl = AsyncHandler(async (req, res, next) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!review) {
    return res.status(400).json({
      success: false,
    });
  }
  res.status(200).json({
    success: true,
    data: review,
  });
});

// @desc delete  review
// @route post api/v1/reviews/:id
// @access public
exports.deleteReviewCtrl = AsyncHandler(async (req, res, next) => {
  const review = await Review.findByIdAndDelete(req.params.id);

  if (!review) {
    return res.status(400).json({
      success: false,
      error: "Review not found",
    });
  }

  res.status(200).json({
    success: true,
    data: {},
  });
}); 