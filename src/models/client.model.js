var dbConn  = require('../../config/db.config');

var Client = (client) => {
    this.numClient     =   client.numClient;
    this.nom           =   client.nom;
    this.prenom        =   client.prenom;
    this.dateNais      =   client.dateNais;
}

//get all customers
Client.getAllClients = (result) => {
    dbConn.query('SELECT * FROM Client', (err, res) => {
        if (err) {
            console.log('Error while fetching customers', err);
            result(null, err);
        }else {
            console.log('Customers fetch successfully');
            result(null, res);
        }
    });
};

//get customer from the database by id
Client.getClientById = (id, result) => {
    dbConn.query('SELECT * FROM Client WHERE numClient=?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching customer by id', err);
            result(null, err);
        }else {
            console.log('Customer fetch successfully');
            result(null, res);
        }
    });
};

module.exports = Client;