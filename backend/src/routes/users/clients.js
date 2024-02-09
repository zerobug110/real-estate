const express = require('express')
const {  
    getAllClientsCtrl, 
    createClientCtrl, 
    getClientCtrl,
    updateClientCtrl,
    deleteClientCtrl
 } = require('../../controllers/users/clientsCtrl')

const clientRoute = express.Router()

clientRoute.route("/").post(createClientCtrl).get(getAllClientsCtrl);

clientRoute
  .route('/:id')
  .get(getClientCtrl)
  .put(updateClientCtrl)
  .delete(deleteClientCtrl)

module.exports = clientRoute