const { createConnection } = require('mysql');
const ParticipeModel = require ('../models/participe.model');

// get participe list
exports.getParticipeList = (rep, res) => {
   // console.log("Here are all participes");
    ParticipeModel.getParticipeList((err, participe) => {
        console.log("There are here");
        if(err)
        res.send(err);
        console.log('participes', participe);
        res.send(participe)
    })
}   

// get participe by ID
exports.getParticipeByID = (req, res) => {
    //console.log("Get participe by ID");
    ParticipeModel.getParticipeByID(req.params.idSeance, req.params.numDossier, (err, participe) => {
        if(err)
        res.send(err);
        console.log('Single participe data', participe );
        res.send(participe);  
    })
}


// create new participe
exports.createNewParticipe = (req, res) => { 
    const participeReqData = new ParticipeModel(req.body);
    console.log('participeReqData', participeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        ParticipeModel.createParticipe(participeReqData, (err, participe) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'participe ajoutée avec succes', data: participe.insertidparticipe})
            
        })
    }
}

// update participe 
exports.updateParticipe = (req, res) => {
    const participeReqData = new ParticipeModel(req.body);
    console.log('participeReqData update', participeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        ParticipeModel.updateParticipe(req.params.idSeance, req.params.numDossier, participeReqData, (err, participe) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'participe modifiée avec succes'})
            
        })
    }
} 

// delete participe
exports.deleteParticipe = (req, res) => {
    ParticipeModel.deleteParticipe(res.params.idSeance, res.params.numDossier, (err, participe) => {
        if(err)
        res.send(err); 
        res.json({sucesss: true, message: 'participe supprimée avec succes'});
    })
}