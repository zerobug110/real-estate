// Listing
// |-- _id
// |-- propertyId (reference to Property model)
// |-- availability
// |-- unitNumber
// |-- (other listing-related fields)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ListingShema = new Schema({
  property: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Property",
      required: true,
    },
  ],
  availablility: {
    type: String,
  },
  //   unitNumber: {
  //     no: this.property.length,
  //   },
});

const Listings = mongoose.model("Listings", ListingShema);
module.exports = Listings;