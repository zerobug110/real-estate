const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  tenant: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Client",
  },
  property: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Property",
    },
  ],

  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "booked",
  },
});

const Bookings = mongoose.model("Booking", BookingSchema);
module.exports = Bookings;
