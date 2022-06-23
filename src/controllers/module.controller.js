const { createConnection } = require('mysql');
const ModuleModel = require ('../models/module.model');

// get module list
exports.getModuleList = (rep, res) => {
   // console.log("Here are all modules");
    ModuleModel.getModuleList((err, module) => {
        console.log("There are here");
        if(err)
        res.send(err);
        console.log('modules', module);
        res.send(module)
    })
}   

// get module by ID
exports.getModuleByID = (req, res) => {
    //console.log("Get module by ID");
    ModuleModel.getModuleByID(req.params.numModule, (err, module) => {
        if(err)
        res.send(err);
        console.log('Single module data', module );
        res.send(module);  
    })
}


// create new module
exports.createNewModule = (req, res) => { 
    const moduleReqData = new ModuleModel(req.body);
    console.log('moduleReqData', moduleReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        ModuleModel.createModule(moduleReqData, (err, module) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'module ajoutée avec succes', data: module.insertnumModule})
            
        })
    }
}

// update module 
exports.updateModule = (req, res) => {
    const moduleReqData = new ModuleModel(req.body);
    console.log('moduleReqData update', moduleReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({sucesss: false, message: 'Entrez tout les champs'});
    } 
    else{
        ModuleModel.updateModule(req.params.numModule, moduleReqData, (err, module) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'module modifiée avec succes'})
            
        })
    }
} 

// delete module
exports.deleteModule = (req, res) => {
    ModuleModel.deleteModule(res.params.numModule, (err, module) => {
        if(err)
        res.send(err); 
        res.json({sucesss: true, message: 'module supprimée avec succes'});
    })
}