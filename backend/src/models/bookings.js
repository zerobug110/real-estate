const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  client: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Client",
  },
  propety: [
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
  statu: {
    type: String,
    default: "booked",
  },
});

const Bookings = mongoose.model("Booking", BookingSchema);
module.exports = Bookings;
