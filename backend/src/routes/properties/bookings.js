const express = require("express");
const {
  creatBookingsCtrl,
  getAllBookingCtrl,
  getBookingCtrl,
  updateBookingCtrl,
  deleteBookingCtrl,
} = require("../../controllers/properties/bookings");
const bookingRouter = express.Router();

bookingRouter.route("/").post(creatBookingsCtrl).get(getAllBookingCtrl);

bookingRouter
  .route("/:id")
  .get(getBookingCtrl)
  .put(updateBookingCtrl)
  .delete(deleteBookingCtrl);

module.exports = bookingRouter;
