const { createConnection } = require('mysql');
const TypePermisModel = require ('../models/typePermis.model');

// get typePermis list
exports.getTypePermisList = (rep, res) => {
   // console.log("Here are all typePermiss");
    TypePermisModel.getTypePermisList((err, typePermis) => {
        console.log("There are here");
        if(err)
        res.send(err);
        console.log('typePermiss', typePermis);
        res.send(typePermis)
    })
}   

// get typePermis by ID
exports.getTypePermisByID = (req, res) => {
    //console.log("Get typePermis by ID");
    TypePermisModel.getTypePermisByID(req.params.codeTypePermis, (err, typePermis) => {
        if(err)
        res.send(err);
        console.log('Single typePermis data', typePermis );
        res.send(typePermis);  
    })
}


// create new typePermis
exports.createNewTypePermis = (req, res) => { 
    const typePermisReqData = new TypePermisModel(req.body);
    console.log('typePermisReqData', typePermisReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        TypePermisModel.createTypePermis(typePermisReqData, (err, typePermis) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'typePermis ajoutée avec succes', data: typePermis.insertcodeTypePermis})
            
        })
    }
}

// update typePermis 
exports.updateTypePermis = (req, res) => {
    const typePermisReqData = new TypePermisModel(req.body);
    console.log('typePermisReqData update', typePermisReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        TypePermisModel.updateTypePermis(req.params.codeTypePermis, typePermisReqData, (err, typePermis) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'typePermis modifiée avec succes'})
            
        })
    }
} 

// delete typePermis
exports.deleteTypePermis = (req, res) => {
    TypePermisModel.deleteTypePermis(res.params.codeTypePermis, (err, typePermis) => {
        if(err)
        res.send(err); 
        res.json({sucesss: true, message: 'typePermis supprimée avec succes'});
    })
}