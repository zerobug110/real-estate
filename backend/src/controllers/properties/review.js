const Review = require("../../models/reviews");

exports.createReviewCtrl = async (req, res, next) => {
  const { author, description, property, rating } = req.body;
  const review = await Review.create({ author, description, property, rating });
  res.status(201).json({
    staus: "success",
    data: review,
  });
};

exports.getAllReviewsCtrl = async (req, res, next) => {
  const reviews = await Review.find();
  res.status(200).json({
    success: true,
    data: reviews,
    count: reviews.length,
  });
};

exports.getReviewCtrl = async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  res.status(200).json({
    success: "true",
    data: review,
  });
};

exports.UpdateReviewCtrl = async (req, res, next) => {
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
    success: "true",
    data: review,
  });
};

exports.deleteReviewCtrl = async (req, res, next) => {
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
};
  