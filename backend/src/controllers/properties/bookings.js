const AsyncHandler = require("express-async-handler");
const Bookings = require("../../models/bookings");

// @desc create bookings
//@route post /api/v1/bookings
//@access private
exports.creatBookingsCtrl = AsyncHandler(async (req, res, next) => {
  const { client, property, checkInDate, checkOutDate } = req.body;
  const booking = await Bookings.create({
    client,
    property,
    checkInDate,
    checkOutDate,
  });

  res.status(201).json({
    success: true,
    data: booking,
  });
});

// @desc get booking
//@route get /api/v1/bookings
//@access private
exports.getBooking = AsyncHandler(async (req, res, next) => {
  const booking = await Bookings.find();
  if (!bookings) {
    res.status(404).json({
      success: false,
      error: `bookings not found`,
    });
  }
  res.status(200).json({
    success: true,
    data: bookings,
  });
});

//@desc get all bookings
//@route get /api/v1/bookings
//@access private
exports.getAllBooking = AsyncHandler(async (req, res, next) => {
  const bookings = await Bookings.find();
  res.status(200).status({
    success: true,
    count: bookings.length,
    data: bookings,
  });
});

//nextcloud
