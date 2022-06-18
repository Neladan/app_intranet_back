const express = require('express');
const router = express.Router();

const UtilisateurController = require('../controllers/Utilisateur.controller');

//route to get all users
router.get('/', UtilisateurController.getAllUtilisateurs);

//route to get user by id
router.get('/:idUser', UtilisateurController.getUtilisateurById);

module.exports = router;