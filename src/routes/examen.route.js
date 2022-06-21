const express = require('express');
const router = express.Router();

const examenController = require('../controllers/examen.controller');

// get all Examen 
router.get('/', examenController.getExamenList);

// get Examen by ID
router.get('/:codeExamen', examenController.getExamenByID);

// create new Examen
router.post('/', examenController.createNewExamen);

// update Examen
router.put('/:codeExamen', examenController.updateExamen);

// delete Examen
router.delete('/:codeExamen', examenController.deleteExamen);

module.exports = router; 