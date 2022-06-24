var dbConn = require('../../config/db.config');

var Paiement = function(paiement) {
    this.idTranche = Math.random() * 3000;
    this.numDossier = paiement.numDossier;
    this.montant = paiement.montant;
    this.dateEcheance = new Date();
    this.dateReglement = new Date();
}

//get all paiement
Paiement.getPaiementList = (result) => {
    dbConn.query('SELECT * FROM Paiement', (err, res) => {
        if(err){
            console.log("Error while fetching paiements", err);
            result(err, null);
        }
        else {
            console.log("paiements fetched successfully");
            result(null, res);
        }
    })
}

//get paiement by ID
Paiement.getPaiementByID = (idTranche, numDossier, result) => {
    dbConn.query('SELECT * FROM Paiement WHERE idTranche=? AND numDossier=?', [idTranche, numDossier], (err, res)=> {
        if(err){
            console.log("Error while fetching paiement by ID", idTranche, numDossier);
            result(err, null);
        }
        else {
            result(null, res); 
        }
    })
}

// create new paiement
Paiement.createPaiement = (paiementReqData, result) =>{
    dbConn.query('INSERT INTO Paiement SET ? ', paiementReqData,(err, res) => {
        if(err){
            console.log('Error wile inserting data');
            result(err, null);
        }
        else {
            console.log('paiement created successfully');
            result(null, res);
        }
    })
}

// update paiement
Paiement.updatePaiement = (idTranche,numDossier, paiementReqData, result) => {
    dbConn.query("UPDATE Paiement SET idTranche=?,numDossier=?,montant=?,dateEcheance=?,dateReglement=? WHERE idTranche=? AND numDossier=?", [paiementReqData.idTranche, paiementReqData.numDossier, paiementReqData.montant, paiementReqData.dateEcheance, paiementReqData.dateReglement, idTranche, numDossier], (err, res) => {
        if(err){
            console.log('Error wile updating data');
            result(err, null);
        }
        else {
            console.log('paiement updated successfully');
            result(null, res);
        }
    })
}

// delete paiement
Paiement.deletePaiement = (idTranche,numDossier, result) => {
    dbConn.query("DELETE FROM Paiement WHERE idTranche=? AND numDossier=?", [idTranche, numDossier], (err, res) => {
        if(err){
            console.log('Error wile deleting data');
            result(err, null);
        }
        else {
            console.log('paiement deleted successfully');
            result(null, res);
        }
    })
}
 
module.exports = Paiement;