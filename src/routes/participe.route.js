const express = require('express');
const router = express.Router();

const participeController = require('../controllers/participe.controller');

// get all Participe 
router.get('/', participeController.getParticipeList);

// get Participe by ID
router.get('/:idSeance', participeController.getParticipeByID);

// create new Participe
router.post('/', participeController.createNewParticipe);

// update Participe
router.put('/:idSeance', participeController.updateParticipe);

// delete Participe
router.delete('/:idSeance', participeController.deleteParticipe);

module.exports = router; 