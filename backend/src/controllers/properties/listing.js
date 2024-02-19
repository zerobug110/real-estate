const AsyncHandler = require("express-async-handler");
const Listings = require("../../models/listing");

exports.getListings = AsyncHandler(async (req, res, next) => {
  const listing = await Listings.find();
  res.status(200).json({
    success: false,
    data: listing,
  });
});
