const { createConnection } = require('mysql');
const PaiementModel = require ('../models/paiement.model');

// get paiement list
exports.getPaiementList = (rep, res) => {
   // console.log("Here are all paiements");
    PaiementModel.getPaiementList((err, paiement) => {
        console.log("There are here");
        if(err)
        res.send(err);
        console.log('paiements', paiement);
        res.send(paiement)
    })
}   

// get paiement by ID
exports.getPaiementByID = (req, res) => {
    //console.log("Get paiement by ID");
    PaiementModel.getPaiementByID(req.params.idTranche, req.params.numDossier, (err, paiement) => {
        if(err)
        res.send(err);
        console.log('Single paiement data', paiement );
        res.send(paiement);  
    })
}


// create new paiement
exports.createNewPaiement = (req, res) => { 
    const paiementReqData = new PaiementModel(req.body);
    console.log('paiementReqData', paiementReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        PaiementModel.createPaiement(paiementReqData, (err, paiement) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'paiement ajouté avec succes', data: paiement.insertidpaiement})
            
        })
    }
}

// update paiement 
exports.updatePaiement = (req, res) => {
    const paiementReqData = new PaiementModel(req.body);
    console.log('paiementReqData update', paiementReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        PaiementModel.updatePaiement(req.params.idTranche, req.params.numDossier, paiementReqData, (err, paiement) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'paiement modifiée avec succes'})
            
        })
    }
} 

// delete paiement
exports.deletePaiement = (req, res) => {
    PaiementModel.deletePaiement(res.params.idTranche, res.params.numDossier, (err, paiement) => {
        if(err)
        res.send(err); 
        res.json({sucesss: true, message: 'paiement supprimée avec succes'});
    })
}