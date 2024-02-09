const express = require('express')
const morgan = require('morgan')
const app = express()

//======= middlewares
app.use(morgan('dev'));
app.use(express.json())

//======= routes

module.exports = app