var dbConn = require('../../config/db.config');

var Seance = (seance) => {
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

module.exports = Seance;