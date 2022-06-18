const express = require('express');
const router = express.Router();

const seanceController = require('../controllers/seance.controller');

//get all seance 
router.get('/', seanceController.getSeanceList);

module.exports = router; 