var dbConn = require('../../config/db.config');

var Module = function(module) {
    this.numModule = module.numModule;
    this.nomModule = module.nomModule;
    this.nbrSeanceMod = module.nbrSeanceMod;
}

//get all Module
Module.getModuleList = (result) => {
    dbConn.query('SELECT * FROM Module', (err, res) => {
        if(err){
            console.log("Error while fetching Modules", err);
            result(null, err);
        }
        else {
            console.log("Modules fetched successfully");
            result(null, res);
        }
    })
}

//get Module by ID
Module.getModuleByID = (numModule, result) => {
    dbConn.query('SELECT * FROM Module WHERE numModule=?', numModule, (err, res)=> {
        if(err){
            console.log("Error while fetching Module by ID", numModule);
            result(null, err);
        }
        else {
            result(null, res); 
        }
    })
}

// create new Module
Module.createModule = (moduleReqData, result) =>{
    dbConn.query('INSERT INTO Module SET ? ', moduleReqData,(err, res) => {
        if(err){
            console.log('Error wile inserting data');
            result(null, err);
        }
        else {
            console.log('Module created successfully');
            result(null, res);
        }
    })
}

// update Module
Module.updateModule = (numModule, moduleReqData, result) => {
    dbConn.query("UPDATE Module SET nomModule=?,nbrSeanceMod=? WHERE numModule=?", [moduleReqData.nomModule, moduleReqData.nbrSeanceMod, numModule], (err, res) => {
        if(err){
            console.log('Error wile updating data');
            result(null, err);
        }
        else {
            console.log('Module updated successfully');
            result(null, res);
        }
    })
}

// delete Module
Module.deleteModule = (numModule, result) => {
    dbConn.query    ("DELETE FROM Module WHERE numModule=?", [numModule], (err, res) => {
        if(err){
            console.log('Error wile deleting data');
            result(null, err);
        }
        else {
            console.log('Module deleted successfully');
            result(null, res);
        }
    })
}
 
module.exports = Module;