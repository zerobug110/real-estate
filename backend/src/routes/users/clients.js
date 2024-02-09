const express = require('express')
const { getClietsCtrl } = require('../../controllers/users/clientsCtrl')

const clientRoute = express.Router()

clientRoute.post('/', getClietsCtrl)
clientRoute.get('/', getClietsCtrl)
clientRoute.get('/:id', getClietsCtrl)
clientRoute.put('/:id', getClietsCtrl)
clientRoute.delete('/:id', getClietsCtrl)


module.exports = clientRoute