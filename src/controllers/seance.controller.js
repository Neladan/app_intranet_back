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