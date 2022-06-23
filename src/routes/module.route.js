const express = require('express');
const router = express.Router();

const moduleController = require('../controllers/module.controller');

// get all Module 
router.get('/', moduleController.getModuleList);

// get Module by ID
router.get('/:numModule', moduleController.getModuleByID);

// create new Module
router.post('/', moduleController.createNewModule);

// update Module
router.put('/:numModule', moduleController.updateModule);

// delete Module
router.delete('/:numModule', moduleController.deleteModule);

module.exports = router; 