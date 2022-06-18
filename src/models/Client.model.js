var dbConn = require("../../config/db.config");

var Client = (client) => {
  this.idUser = client.idUser;
  this.email = client.email;
  this.motPasse = client.motPasse;
  this.roleUser = client.roleUser;
  this.nom = client.nom;
  this.prenom = client.prenom;
  this.dateNais = client.dateNais;
};

//get all customers
Client.getAllClients = (result) => {
  dbConn.query(
    "SELECT * FROM Utilisateur WHERE roleUser='client'",
    (err, res) => {
      if (err) {
        console.log("Error while fetching customers", err);
        result(null, err);
      } else {
        console.log("Customers fetch successfully");
        result(null, res);
      }
    }
  );
};

//get customer from the database by id
Client.getClientById = (id, result) => {
  dbConn.query(
    "SELECT * FROM Utilisateur WHERE idUser=? AND roleUser='client'",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching customer by id", err);
        result(null, err);
      } else {
        console.log("Customer fetch successfully");
        result(null, res);
      }
    }
  );
};

module.exports = Client;
