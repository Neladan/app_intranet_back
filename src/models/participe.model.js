var dbConn = require('../../config/db.config');

var Participe = function(participe) {
    this.idparticipe = participe.idparticipe;
    this.numDossier = participe.numDossier;
    this.presence = participe.presence;
    this.motif = participe.motif;
}

//get all participe
Participe.getParticipeList = (result) => {
    dbConn.query('SELECT * FROM Participe', (err, res) => {
        if(err){
            console.log("Error while fetching participes", err);
            result(null, err);
        }
        else {
            console.log("participes fetched successfully");
            result(null, res);
        }
    })
}

//get participe by ID
Participe.getParticipeByID = (idSeance, numDossier, result) => {
    dbConn.query('SELECT * FROM Participe WHERE idSeance=? AND numDossier=?', [idSeance, numDossier], (err, res)=> {
        if(err){
            console.log("Error while fetching participe by ID", idSeance, numDossier);
            result(null, err);
        }
        else {
            result(null, res); 
        }
    })
}

// create new participe
Participe.createParticipe = (participeReqData, result) =>{
    dbConn.query('INSERT INTO Participe SET ? ', participeReqData,(err, res) => {
        if(err){
            console.log('Error wile inserting data');
            result(null, err);
        }
        else {
            console.log('participe created successfully');
            result(null, res);
        }
    })
}

// update participe
Participe.updateParticipe = (idSeance,numDossier, participeReqData, result) => {
    dbConn.query("UPDATE Participe SET idSeance=?,numDossier=?,presence=?,motif=? WHERE idSeance=? AND numDossier=?", [participeReqData.idSeance, participeReqData.numDossier, participeReqData.presence, participeReqData.motif, idSeance, numDossier], (err, res) => {
        if(err){
            console.log('Error wile updating data');
            result(null, err);
        }
        else {
            console.log('participe updated successfully');
            result(null, res);
        }
    })
}

// delete participe
Participe.deleteParticipe = (idSeance,numDossier, result) => {
    dbConn.query("DELETE FROM Participe WHERE idSeance=? AND numDossier=?", [idSeance, numDossier], (err, res) => {
        if(err){
            console.log('Error wile deleting data');
            result(null, err);
        }
        else {
            console.log('participe deleted successfully');
            result(null, res);
        }
    })
}
 
module.exports = Participe;