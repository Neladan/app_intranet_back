const { createConnection } = require('mysql');
const SeanceModel = require ('../models/seance.model');

// get seance list
exports.getSeanceList = (rep, res) => {
   // console.log("Here are all seances");
    SeanceModel.getSeanceList((err, seance) => {
        console.log("There are here");
        if(err)
        res.send(err);
        console.log('Seances', seance);
        res.send(seance)
    })
}   

// get seance by ID
exports.getSeanceByID = (req, res) => {
    //console.log("Get seance by ID");
    SeanceModel.getSeanceByID(req.params.idSeance, (err, seance) => {
        if(err)
        res.send(err);
        console.log('Single seance data', seance );
        res.send(seance);  
    })
}


// create new seance
exports.createNewSeance = (req, res) => { 
    const seanceReqData = new SeanceModel(req.body);
    console.log('seanceReqData', seanceReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        SeanceModel.createSeance(seanceReqData, (err, seance) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Seance ajoutée avec succes', data: seance.insertidSeance})
            
        })
    }
}

// update seance 
exports.updateSeance = (req, res) => {
    const seanceReqData = new SeanceModel(req.body);
    console.log('seanceReqData update', seanceReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        SeanceModel.updateSeance(req.params.idSeance, seanceReqData, (err, seance) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Seance modifiée avec succes'})
            
        })
    }
} 

// delete seance
exports.deleteSeance = (req, res) => {
    SeanceModel.deleteSeance(res.params.idSeance, (err, seance) => {
        if(err)
        res.send(err); 
        res.json({sucesss: true, message: 'Seance supprimée avec succes'});
    })
}