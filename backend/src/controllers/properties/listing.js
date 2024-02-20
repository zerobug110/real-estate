const AsyncHandler = require("express-async-handler");
const Listings = require("../../models/listing");

exports.getListings = AsyncHandler(async (req, res, next) => {
  //query
  let query;

  //copy reqQuery
  const reqQuery = { ...req.body };

  //field to exclude
  const removeField = ["select", "sort", "paginate"];

  //loop over remover field and delete them from reqQuery
  removeField.forEach((param) => delete reqQuery[param]);

  //create qurery String
  let queryStr = JSON.stringify(reqQuery);

  //create operators like ($gt, $te, $lt, $lte, $in)
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in))\b/g,
    (match) => `$${match}`
  );

  //finding resource
  query = Listings.find(JSON.parse(queryStr));

  //select fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  // sorting

  //executing query
  const listing = await query;
  res.status(200).json({
    success: false,
    data: listing,
  });
});
