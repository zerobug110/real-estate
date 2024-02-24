const AsyncHandler = require("express-async-handler");
const Bookings = require("../../models/bookings");
const ErrorResponse = require("../../utils/errorResponse");

// @desc create bookings
//@route post /api/v1/bookings
//@access private
exports.creatBookingsCtrl = AsyncHandler(async (req, res, next) => {
  const { tenant, property, checkInDate, checkOutDate } = req.body;
  const booking = await Bookings.create({
    tenant,
    property,
    checkInDate,
    checkOutDate,
  });

  res.status(201).json({
    success: true,
    data: booking,
  });
});

//@desc get booking
//@route get /api/v1/bookings
//@access private
exports.getBookingCtrl = AsyncHandler(async (req, res, next) => {
  const booking = await Bookings.findById(req.params.id)
    .populate("property")
    .populate("tenant");

  if (!booking) {
    return next(
      new ErrorResponse(`can't find a booking with the id of ${req.params.id}`)
    );
  }
  res.status(200).json({
    success: true,
    data: booking,
  });
});

//@desc get all bookings
//@route get /api/v1/bookings
//@access private
exports.getAllBookingCtrl = AsyncHandler(async (req, res, next) => {
  const bookings = await Bookings.find()
    .populate({
      path: "tenant",
      select: "name email phone role",
    })
    .populate({
      path: "property",
      select: "name description bedrooms bathrooms price status type images",
    });

  res.status(200).json({
  success: true,
  count: bookings.length,
  data: bookings,
});
});

//@desc update bookings
//@route put /api/v1/bookings/:id
//@access private
exports.updateBookingCtrl = AsyncHandler(async (req, res, next) => {
  const booking = await Bookings.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!booking) {
    return res.status(404).json({
      success: true,
      message: "bookings not found",
    });
  }
  res.status(200).json({
    succes: true,
    data: booking,
  });
});

//@desc delete bookings
//@route delete /api/v1/bookings/:id
//@access private
exports.deleteBookingCtrl = AsyncHandler(async (req, res, next) => {
  const booking = await Bookings.findByIdAndDelete(req.params.id);
  if (!booking) {
    return res.status(404).json({
      success: false,
      error: "booking not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "booking deleted successfully",
  });
});