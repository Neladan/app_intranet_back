const express = require('express');
const router = express.Router();

const seanceController = require('../controllers/seance.controller');

// get all seance 
router.get('/', seanceController.getSeanceList);

// get seance by ID
router.get('/:idSeance', seanceController.getSeanceByID);

// create new seance
router.post('/', seanceController.createNewSeance);

// update seance
router.put('/:idSeance', seanceController.updateSeance);

// delete seance
router.delete('/:idSeance', seanceController.deleteSeance);

module.exports = router; 