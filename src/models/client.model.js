var dbConn  = require('../../config/db.config');

var Client = (client) => {
    this.numClient     =   client.numClient;
    this.nom           =   client.nom;
    this.prenom        =   client.prenom;
    this.dateNais      =   client.dateNais;
}

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

module.exports = Client;