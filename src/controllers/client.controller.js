const ClientModel = require('../models/client.model');

//get all clients
exports.getAllClients = (req, res) => {
    //console.log('Ici tous les clients')
    ClientModel.getAllClients((err, clients) => {
        console.log('here we are');
    });
}