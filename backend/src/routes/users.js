const express = require('express')
const { getUserCtrl } = require('../controllers/user')

const userRouter = express.Router()

userRouter.get('/user', getUserCtrl)


module.exports = userRouter