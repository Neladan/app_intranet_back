const express = require('express');
const router = express.Router();

const paiementController = require('../controllers/paiement.controller');

// get all Participe 
router.get('/', paiementController.getPaiementList);

// get Participe by ID
router.get('/:idTranche', paiementController.getPaiementByID);

// create new Participe
router.post('/', paiementController.createNewPaiement);

// update Participe
router.put('/:idTranche', paiementController.updatePaiement);

// delete Participe
router.delete('/:idTranche', paiementController.deletePaiement);

module.exports = router; 