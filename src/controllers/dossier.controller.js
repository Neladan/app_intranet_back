const { createConnection } = require('mysql');
const DossierModel = require ('../models/dossier.model');

// get dossier list
exports.getDossierList = (rep, res) => {
   // console.log("Here are all dossiers");
    DossierModel.getDossierList((err, dossier) => {
        console.log("There are here");
        if(err)
        res.send(err);
        console.log('dossiers', dossier);
        res.send(dossier)
    })
}   

// get dossier by ID
exports.Dossier = (req, res) => {
    //console.log("Get dossier by ID");
    DossierModel.getDossierByID(req.params.numDossier, (err, dossier) => {
        if(err)
        res.send(err);
        console.log('Single dossier data', dossier );
        res.send(dossier);  
    })
}


// create new dossier
exports.createNewDossier = (req, res) => { 
    const dossierReqData = new DossierModel(req.body);
    console.log('dossierReqData', dossierReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        DossierModel.createDossier(dossierReqData, (err, dossier) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'dossier ajoutée avec succes', data: dossier.insertnumDossier})
            
        })
    }
}

// update dossier 
exports.updateDossier = (req, res) => {
    const dossierReqData = new DossierModel(req.body);
    console.log('dossierReqData update', dossierReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        DossierModel.updateDossier(req.params.numDossier, dossierReqData, (err, dossier) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'dossier modifiée avec succes'})
            
        })
    }
} 

// delete dossier
exports.deleteDossier = (req, res) => {
    DossierModel.deleteDossier(res.params.numDossier, (err, dossier) => {
        if(err)
        res.send(err); 
        res.json({sucesss: true, message: 'dossier supprimée avec succes'});
    })
}