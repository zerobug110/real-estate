const AsyncHandler = require("express-async-handler");
const Favorite = require("../../models/favorite");

exports.addFavorite = AsyncHandler(async (req, res, next) => {
  const { clientId, propertyId } = req.body;
  const favorites = Favorite.create({ clientId, propertyId });
  if (!clientId || propertyId) {
    res.status(400).json({
      // message: "no"
    });
  }
});
