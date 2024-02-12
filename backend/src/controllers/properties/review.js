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
  });
};
