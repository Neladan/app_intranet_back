const { createConnection } = require('mysql');
const ExamenModel = require ('../models/examen.model');

// get examen list
exports.getExamenList = (rep, res) => {
   // console.log("Here are all examens");
    ExamenModel.getExamenList((err, examen) => {
        console.log("There are here");
        if(err)
        res.send(err);
        console.log('examens', examen);
        res.send(examen)
    })
}   

// get examen by ID
exports.getExamenByID = (req, res) => {
    //console.log("Get examen by ID");
    ExamenModel.getExamenByID(req.params.codeExamen, (err, examen) => {
        if(err)
        res.send(err);
        console.log('Single examen data', examen );
        res.send(examen);  
    })
}


// create new examen
exports.createNewExamen = (req, res) => { 
    const examenReqData = new ExamenModel(req.body);
    console.log('examenReqData', examenReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        ExamenModel.createExamen(examenReqData, (err, examen) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'examen ajoutée avec succes', data: examen.insertcodeExamen})
            
        })
    }
}

// update examen 
exports.updateExamen = (req, res) => {
    const examenReqData = new ExamenModel(req.body);
    console.log('examenReqData update', examenReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        ExamenModel.updateExamen(req.params.codeExamen, examenReqData, (err, examen) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'examen modifiée avec succes'})
            
        })
    }
} 

// delete examen
exports.deleteexamen = (req, res) => {
    ExamenModel.deleteexamen(res.params.codeExamen, (err, examen) => {
        if(err)
        res.send(err); 
        res.json({sucesss: true, message: 'examen supprimée avec succes'});
    })
}