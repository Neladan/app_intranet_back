var dbConn = require('../../config/db.config');

var TypePermis = function(typePermis) {
    this.codeTypePermis = typePermis.codeTypePermis;
    this.nomTypePermis = typePermis.nomTypePermis;
}

//get all TypePermis
TypePermis.getTypePermisList = (result) => {
    dbConn.query('SELECT * FROM TypePermis', (err, res) => {
        if(err){
            console.log("Error while fetching TypePermis", err);
            result(null, err);
        }
        else {
            console.log("TypePermiss fetched successfully");
            result(null, res);
        }
    })
}

//get TypePermis by ID
TypePermis.getTypePermisByID = (codeTypePermis, result) => {
    dbConn.query('SELECT * FROM TypePermis WHERE codeTypePermis=?', codeTypePermis, (err, res)=> {
        if(err){
            console.log("Error while fetching TypePermis by ID", codeTypePermis);
            result(err, null);
        }
        else {
            result(null, res); 
        }
    })
}

// create new TypePermis
TypePermis.creatTypePermis = (typePermisReqData, result) =>{
    dbConn.query('INSERT INTO TypePermis SET ? ', typePermisReqData,(err, res) => {
        if(err){
            console.log('Error wile inserting data');
            result(null, err);
        }
        else {
            console.log('TypePermis created successfully');
            result(null, res);
        }
    })
}

// update TypePermis
TypePermis.updateTypePermis = (codeTypePermis, typePermisReqData, result) => {
    dbConn.query("UPDATE TypePermis SET nomTypePermis=? WHERE codeTypePermis=?", [typePermisReqData.nomTypePermis, codeTypePermis], (err, res) => {
        if(err){
            console.log('Error wile updating data');
            result(null, err);
        }
        else {
            console.log('TypePermis updated successfully');
            result(null, res);
        }
    })
}

// delete TypePermis
TypePermis.deleteTypePermis = (codeTypePermis, result) => {
    dbConn.query    ("DELETE FROM TypePermis WHERE codeTypePermis=?", [codeTypePermis], (err, res) => {
        if(err){
            console.log('Error wile deleting data');
            result(null, err);
        }
        else {
            console.log('TypePermis deleted successfully');
            result(null, res);
        }
    })
}
 
module.exports = TypePermis;