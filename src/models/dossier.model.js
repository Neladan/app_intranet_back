var dbConn = require('../../config/db.config');

var Dossier = function(dossier) {
    this.numDossier = dossier.numDossier;
    this.dateInsc = new Date()
    this.resultat = dossier.resultat;
    this.montantdefini = dossier.montantdefini;
    this.nbrSeance = dossier.nbrSeance;
    this.idUser = dossier.idUser;
    this.numModule = dossier.numModule;
    this.codeTypePermis = dossier.codeTypePermis;
    this.codeExamen = dossier.codeExamen;
}

//get all dossier
Dossier.getDossierList = (result) => {
    dbConn.query('SELECT * FROM Dossier', (err, res) => {
        if(err){
            console.log("Error while fetching dossiers", err);
            result(null, err);
        }
        else {
            console.log("dossiers fetched successfully");
            result(null, res);
        }
    })
}

//get dossier by ID
Dossier.getDossierByID = (numDossier, result) => {
    dbConn.query('SELECT * FROM Dossier WHERE numDossier=?', numDossier, (err, res)=> {
        if(err){
            console.log("Error while fetching dossier by ID", numDossier);
            result(null, err);
        }
        else {
            result(null, res); 
        }
    })
}

// create new dossier
Dossier.createDossier = (dossierReqData, result) =>{
    dbConn.query('INSERT INTO Dossier SET ? ', dossierReqData,(err, res) => {
        if(err){
            console.log('Error wile inserting data');
            result(null, err);
        }
        else {
            console.log('dossier created successfully');
            result(null, res);
        }
    })
}

// update dossier
Dossier.updateDossier = (numDossier, dossierReqData, result) => {
    dbConn.query("UPDATE Dossier SET dateInsc=?,resultat=?,montantdefini=?,nbrSeance=?,idUser=?,numModule=?,codeTypePermis=?,codeExamen=? WHERE numDossier=?", [dossierReqData.dateInsc, dossierReqData.resultat, dossierReqData.montantdefini,dossierReqData.idUser, dossierReqData.numModule, dossierReqData.codeTypePermis, dossierReqData.codeExamen, numDossier], (err, res) => {
        if(err){
            console.log('Error wile updating data');
            result(null, err);
        }
        else {
            console.log('Dossier updated successfully');
            result(null, res);
        }
    })
}

// delete dossier
Dossier.deleteDossier = (numDossier, result) => {
    dbConn.query    ("DELETE FROM Dossier WHERE numDossier=?", [numDossier], (err, res) => {
        if(err){
            console.log('Error wile deleting data');
            result(null, err);
        }
        else {
            console.log('dossier deleted successfully');
            result(null, res);
        }
    })
}
 
module.exports = Dossier;