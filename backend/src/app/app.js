const express = require('express')
const morgan = require('morgan');
const userRouter = require('../routes/userRoutes');
const app = express()

//======= middlewares
app.use(morgan('dev'));
app.use(express.json())

//======= routes
app.use('/api/v1/', userRouter )

module.exports = app