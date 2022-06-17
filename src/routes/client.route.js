const express = require('express');
const router = express.Router();

const ClientController = require('../controllers/client.controller');

//route to get all customers
router.get('/', ClientController.getAllClients);

//route to get customer by id
router.get('/:numClient', ClientController.getClientById);

//route to create new customer
router.post('/', ClientController.createNewCustomer);

module.exports = router;