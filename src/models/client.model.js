var dbConn  = require('../../config/db.config');

var Client = (client) => {
    this.numClient     =   client.numClient;
    this.nom           =   client.nom;
    this.prenom        =   client.prenom;
    this.dateNais      =   client.dateNais;
}

module.exports = Client;