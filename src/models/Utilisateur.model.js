var dbConn  = require('../../config/db.config');

var Utilisateur = (utilisateur) => {
    this.idUser       =   utilisateur.idUser;
    this.email        =   utilisateur.email;
    this.motPasse     =   utilisateur.motPasse;
    this.roleUser     =   utilisateur.roleUser;
    this.nom          =   utilisateur.nom;
    this.prenom       =   utilisateur.prenom;
    this.dateNais     =   utilisateur.dateNais;
}

//get all customers
Utilisateur.getAllUtilisateurs = (result) => {
    dbConn.query("SELECT * FROM Utilisateur", (err, res) => {
        if (err) {
            console.log('Error while fetching users', err);
            result(null, err);
        }else {
            console.log('Users fetch successfully');
            result(null, res);
        }
    });
};

//get customer from the database by id
Utilisateur.getUtilisateurById = (id, result) => {
    dbConn.query('SELECT * FROM Utilisateur WHERE idUser=?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching user by id', err);
            result(null, err);
        }else {
            console.log('User fetch successfully');
            result(null, res);
        }
    });
};

module.exports = Utilisateur;