const express = require('express');
const router = express.Router();

const dossierController = require('../controllers/dossier.controller');

// get all Dossier 
router.get('/', dossierController.getDossierList);

// get Dossier by ID
router.get('/:numDossier', dossierController.getDossierByID);

// create new Dossier
router.post('/', dossierController.createNewDossier);

// update Dossier
router.put('/:numDossier', dossierController.updateDossier);

// delete Dossier
router.delete('/:numDossier', dossierController.deleteDossier);

module.exports = router; 