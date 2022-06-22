const express = require('express');
const router = express.Router();

const jwt = require ('jsonwebtoken');

const UtilisateurController = require('../controllers/Utilisateur.controller');

//route to get all users
router.get('/', UtilisateurController.getAllUtilisateurs);

//route to get user by id
router.get('/:idUser', UtilisateurController.getUtilisateurById);

//route to login
router.post('/login', UtilisateurController.toLogin);

//route to create user
router.post('/new-user', UtilisateurController.createUser)

const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if(!token) {
        res.send('Yo we need token');
    }else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if(err) {
                res.json({auth: false, message: 'you failed to authenticate'});
            }else {
                req.email = decoded.email;
                next()
            }
        });
    }

};

//route to verify authentication
router.get('/isUserAuth', verifyJWT, UtilisateurController.isUserAuth);


module.exports = router;