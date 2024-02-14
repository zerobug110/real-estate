const express = require('express')
const morgan = require('morgan');
const clientRoute = require('../routes/users/clients');
const propertiesRoute = require('../routes/properties/properties');
const reviewRouter = require("../routes/properties/review");
const { globalErrorHandler } = require("../middlewares/globalErrorHandler");
const app = express();

//======= middlewares
app.use(morgan("dev"));
app.use(express.json());

//======= routes
app.use("/api/v1/properties", propertiesRoute);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/clients", clientRoute);

//======= global error handlers
app.use(globalErrorHandler);

module.exports = app