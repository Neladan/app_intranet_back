const ClientModel = require('../models/client.model');

//get all customers
exports.getAllClients = (req, res) => {
    //console.log('Ici tous les clients')
    ClientModel.getAllClients((err, clients) => {
        console.log('here we are');
        if(err) 
            res.send(err);
            console.log('customers', clients);
            res.send(clients);
    });
}

//get customer by Id
exports.getClientById = (req, res) => {
    //console.log('Ici tous les clients')
    ClientModel.getClientById(req.params.numClient, (err, client) => {
        console.log('get customer by id');
        if(err) 
            res.send(err);
            console.log('single custmer', client);
            res.send(client);
    });
}

//create new customer
exports.createNewCustomer = (req, res) => {
    console.log('create a new customer');
}