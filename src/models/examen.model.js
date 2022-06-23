var dbConn = require('../../config/db.config');

var Examen = function(examen) {
    this.codeExamen = examen.codeExamen;
    this.dateExamen = new Date();
}

//get all examen
Examen.getExamenList = (result) => {
    dbConn.query('SELECT * FROM Examen', (err, res) => {
        if(err){
            console.log("Error while fetching examens", err);
            result(null, err);
        }
        else {
            console.log("examens fetched successfully");
            result(null, res);
        }
    })
}

//get examen by ID
Examen.getExamenByID = (codeExamen, result) => {
    dbConn.query('SELECT * FROM Examen WHERE codeExamen=?', codeExamen, (err, res)=> {
        if(err){
            console.log("Error while fetching examen by ID", codeExamen);
            result(null, err);
        }
        else {
            result(null, res); 
        }
    })
}

// create new examen
Examen.creatExamen = (examenReqData, result) =>{
    dbConn.query('INSERT INTO Examen SET ? ', examenReqData,(err, res) => {
        if(err){
            console.log('Error wile inserting data');
            result(null, err);
        }
        else {
            console.log('examen created successfully');
            result(null, res);
        }
    })
}

// update examen
Examen.updateExamen = (codeExamen, examenReqData, result) => {
    dbConn.query("UPDATE Examen SET dateExamen=? WHERE codeExamen=?", [examenReqData.dateExamen, codeExamen], (err, res) => {
        if(err){
            console.log('Error wile updating data');
            result(null, err);
        }
        else {
            console.log('examen updated successfully');
            result(null, res);
        }
    })
}

// delete examen
Examen.deleteExamen = (codeExamen, result) => {
    dbConn.query    ("DELETE FROM Examen WHERE codeExamen=?", [codeExamen], (err, res) => {
        if(err){
            console.log('Error wile deleting data');
            result(null, err);
        }
        else {
            console.log('examen deleted successfully');
            result(null, res);
        }
    })
}
 
module.exports = Examen;