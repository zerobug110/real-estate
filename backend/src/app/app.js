const express = require('express')
const morgan = require('morgan');
const clientRoute = require('../routes/users/clients');
const propertiesRoute = require('../routes/properties/properties');
const reviewRouter = require("../routes/properties/review");
const app = express();

//======= middlewares
app.use(morgan("dev"));
app.use(express.json());

//======= routes
app.use("/api/v1/clients", clientRoute);
app.use("/api/v1/properties", propertiesRoute);
app.use("/api/v1/reviews", reviewRouter);

module.exports = app