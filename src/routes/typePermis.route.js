const express = require('express');
const router = express.Router();

const typePermisController = require('../controllers/typePermis.controller');

// get all TypePermis 
router.get('/', typePermisController.getTypePermisList);

// get TypePermis by ID
router.get('/:codeTypePermis', typePermisController.getTypePermisByID);

// create new TypePermis
router.post('/', typePermisController.createNewTypePermis);

// update TypePermis
router.put('/:codeTypePermis', typePermisController.updateTypePermis);

// delete TypePermis
router.delete('/:codeTypePermis', typePermisController.deleteTypePermis);

module.exports = router; 