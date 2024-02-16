const mongoose = require("mongoose");
const geocoder = require("../utils/geoCoder");

const Schema = mongoose.Schema;

const PropertySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: [500, "please add a description"],
    },
    address: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
    },
    bathrooms: {
      type: Number,
    },
    squareFootage: {
      type: String,
    },
    price: {
      type: Number,
    },
    address: {
      String,
    },
    status: {
      type: String,
      default: "vacant",
    },
    images: [
      {
        filename: {
          type: String,
          required: true,
          default: "no-photo.jpg ",
        },
      },
    ],
    location: {
      type: {
        type: String,
        enum: ["Point"],
        // required: true,
      },
      coordinates: {
        type: [Number],
        // required: true,
        index: "2dsphere",
      },
      fomarttedAddress: String,
      street: String,
      city: String,
      postalCode: String,
      country: String,
    },
    type: {
      type: [String],
      required: true,
      enum: [
        "Single-Family Home",
        "Duplex",
        "Townhouse",
        "Row House",
        "Bungalow",
        "Cottage",
        "Ranch House",
        "Colonial House",
        "Cape Cod House",
        "Victorian House",
        "Mediterranean House",
        "Craftsman House",
        "Contemporary House",
        "Modern House",
        "Log Cabin",
        "Geodesic Dome House",
        "Tudor House",
        "Split-Level House",
        "Georgian House",
        "Cabin",
        "others",
      ],
    },
    averageRating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [10, "Rating must not be more than 10"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

//geolocation fields for map
// PropertySchema.pre("save", async function (next) {
//   const loc = await geocoder.geocode(this.address);
//   this.location({
//     type: "point",
//     coordinates: [log[0].longitude, log[0].latitude],
//     formattedAddress: log[0].formattedAddress,
//     street: log[0].streetName,
//     city: log[0].stateCode,
//     zipcode: log[0].zipcode,
//     country: log[0].countryCode,
//   });
//   next();
// });

// //unsave the address from the req
// this.address = undefined;

const Property = mongoose.model("Property", PropertySchema);
module.exports = Property;
