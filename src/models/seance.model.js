var dbConn = require('../../config/db.config');

var Seance = function(seance) {
    this.idSeance = seance.idSeance;
    this.date = new Date()
    this.heureDebut = new TimeRanges();
    this.heureFin = new TimeRanges();
    this.numModule = seance.numModule;
    this.codeTypePermis = seance.codeTypePermis;
    this.codeExamen = seance.codeExamen;
}

//get all seance
Seance.getSeanceList = (result) => {
    dbConn.query('SELECT * FROM Seance', (err, res) => {
        if(err){
            console.log("Error while fetching seances", err);
            result(null, err);
        }
        else {
            console.log("Seances fetched successfully");
            result(null, res);
        }
    })
}

//get seance by ID
Seance.getSeanceByID = (idSeance, result) => {
    dbConn.query('SELECT * FROM Seance WHERE idSeance=?', idSeance, (err, res)=> {
        if(err){
            console.log("Error while fetching seance by ID", idSeance);
            result(null, err);
        }
        else {
            result(null, res); 
        }
    })
}

// create new seance
Seance.createSeance = (seanceReqData, result) =>{
    dbConn.query('INSERT INTO Seance SET ? ', seanceReqData,(err, res) => {
        if(err){
            console.log('Error wile inserting data');
            result(null, err);
        }
        else {
            console.log('Seance created successfully');
            result(null, res);
        }
    })
}

// update seance
Seance.updateSeance = (idSeance, seanceReqData, result) => {
    dbConn.query("UPDATE Seance SET date=?,heureDebut=?,heureFin=?,numModule=?,codeTypePermis=?,codeExamen=? WHERE idSeance=?", [seanceReqData.date, seanceReqData.heureDebut, seanceReqData.heureFin, seanceReqData.numModule, seanceReqData.codeTypePermis, seanceReqData.codeExamen, idSeance], (err, res) => {
        if(err){
            console.log('Error wile updating data');
            result(null, err);
        }
        else {
            console.log('Seance updated successfully');
            result(null, res);
        }
    })
}

// delete seance
Seance.deleteSeance = (idSeance, result) => {
    dbConn.query    ("DELETE FROM Seance WHERE idSeance=?", [idSeance], (err, res) => {
        if(err){
            console.log('Error wile deleting data');
            result(null, err);
        }
        else {
            console.log('Seance deleted successfully');
            result(null, res);
        }
    })
}
 
module.exports = Seance;