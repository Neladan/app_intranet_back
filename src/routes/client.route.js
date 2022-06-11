const express = require('express');
const router = express.Router();

const ClientController = require('../controllers/client.controller');

//route to get all clients
router.get('/', ClientController.getAllClients);

module.exports = router;