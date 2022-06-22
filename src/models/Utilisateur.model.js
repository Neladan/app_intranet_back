var dbConn = require("../../config/db.config");

const bcrypt = require("bcrypt");

var Utilisateur = function (utilisateur) {
  this.email = utilisateur.email;
  this.motPasse = utilisateur.motPasse;
  this.roleUser = utilisateur.roleUser;
  this.nom = utilisateur.nom === "" ? undefined : utilisateur.nom;
  this.prenom = utilisateur.prenom === "" ? undefined : utilisateur.prenom;
  this.dateNais =
    utilisateur.dateNais === "" ? undefined : utilisateur.dateNais;
};

//get all customers
Utilisateur.getAllUtilisateurs = (result) => {
  dbConn.query("SELECT * FROM Utilisateur", (err, res) => {
    if (err) {
      console.log("Error while fetching users", err);
      result(err, null);
    } else {
      console.log("Users fetch successfully");
      result(null, res);
    }
  });
};

//get customer from the database by id
Utilisateur.getUtilisateurById = (id, result) => {
  dbConn.query("SELECT * FROM Utilisateur WHERE idUser=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching user by id", err);
      result(err, null);
    } else {
      console.log("User fetch successfully");
      result(null, res);
    }
  });
};

//get customer from the database by e-mail and password
Utilisateur.getUtilisateurByEmailPwd = (email, pwd, result) => {
  dbConn.query(
    "SELECT email, motPasse, roleUser FROM Utilisateur WHERE email=?",
    email,
    (err, res) => {
      if (err) {
        console.log("Error while fetching user by email and password", err);
        //result(err, null);
      } else {
        console.log("User fetch successfully");
        //result(null, res);
        if (res.length > 0) {
          bcrypt.compare(pwd, res[0].motPasse, (err, response) => {
            if (response) {
              result(null, res);
            } else {
              result("Wrong email/password combination", null);
            }
          });
        } else {
          result("User does not exist", null);
          //console.log("don't exist");
        }
      }
    }
  );
};

// create new user
Utilisateur.createUser = (userData, result) => {
  bcrypt.hash(userData.motPasse, 10, (err, hash) => {
    dbConn.query(
      "INSERT INTO Utilisateur SET ? ",
      { ...userData, motPasse: hash },
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("User created successfully");
          result(null, res);
        }
      }
    );
  });
};

module.exports = Utilisateur;
