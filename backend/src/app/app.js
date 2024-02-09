const express = require('express')
const morgan = require('morgan');
const clientRoute = require('../routes/users/clients');
// const propertiesRoute = require('../models/properties');
const app = express()

//======= middlewares
app.use(morgan('dev'));
app.use(express.json())

//======= routes
app.use('/api/v1/clients', clientRoute )
// app.use('/api/v1/properties', propertiesRoute )

module.exports = app