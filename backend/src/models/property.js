const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertySchema = new Schema(
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
    bedrooms: {
        type: Number,
    },
    bathrooms: {
        type: Number,
    },
    squareFootage: {
        type: string
    },
    price: {
        type: Number
    },
    address: {
        String
    },
    images: [
        {
          filename: {
            type: String,
            required: true,
          },
          contentType: {
            type: String,
            required: true,
          },
          data: {
            type: Buffer,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  { timestamps: true }
);

// Property
// |-- _id
// |-- type
// |-- bedrooms
// |-- bathrooms
// |-- squareFootage
// |-- price
// |-- address
// |-- description
// |-- images
// |-- location (embedded object with latitude and longitude)
