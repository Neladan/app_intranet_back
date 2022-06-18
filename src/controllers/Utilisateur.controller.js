const UtilisateurModel = require('../models/Utilisateur.model');

//get all users
exports.getAllUtilisateurs = (req, res) => {

    UtilisateurModel.getAllUtilisateurs((err, utilisateurs) => {
        console.log('here we are a users');
        if(err) 
            res.send(err);
            console.log('users', utilisateurs);
            res.send(utilisateurs);
    });
}

//get user by Id
exports.getUtilisateurById = (req, res) => {

    UtilisateurModel.getUtilisateurById(req.params.idUser, (err, utilisateur) => {
        console.log('get user by id');
        if(err) 
            res.send(err);
            console.log('single user', utilisateur);
            res.send(utilisateur);
    });
}
