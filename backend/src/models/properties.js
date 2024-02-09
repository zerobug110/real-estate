const express = require('express')
const { propertiesCtrl } = require('../controllers/properties/propertiesCtrl')

const propertiesRoute = express.Router()

propertiesRoute.get('/', propertiesCtrl)

module.exports = propertiesRoute