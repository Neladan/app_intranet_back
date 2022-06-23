const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// create express app
const app = express();

app.use(cors());

// setup the server port
const port = /*process.env.PORT ||*/ 8080;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send("<h1>Hello World <br> API Eco-conduite</h1>");
});

//-----------------------------------------------

// import user routes
const UtilisateurRoutes = require('./src/routes/Utilisateur.route');


// create customer routes
app.use('/api/ecoc', UtilisateurRoutes);

//----------------------------



// *********All about SEANCE******************** 

//import seance routes
//const seanceRoutes = require('./src/routes/seance.route');

//create seance routes
//app.use('/api/ecoc/seance', seanceRoutes); 


/*

// *************All about MODULE****************

//import module routes
const moduleRoutes = require ('./src/routes/module.route');

// create module routes 
app.use('/api/ecoc/module', moduleRoutes);




//*********** All about Examen*********************

// import examen route
const examenRoutes = require ('./src/routes/examen.route');

// create examen route
app.use('/api/ecoc/examen', examenRoutes);




//**************All about TypePermis************

// import TypePermis routes
const typePermisRoutes = require ('./src/routes/typePermis.route');

// create TypePermis route
app.use('/api/ecoc/typePermis', typePermisRoutes);




//*************All about partcipe*********

// import participe
const partcipeRoutes = require ('./src/routes/participe.route');

// create participe 
app.use('/api/ecoc/participe', partcipeRoutes);




//********************All about Paiement************

//import paiement
const paiementRoutes = require ('./src/routes/paiement.route');

// create paiement
app.use('/api/ecoc/paiement', paiementRoutes);




//***************All about dossier*************

// import dossier
const dossierRoutes = require ('./src/routes/dossier.route');

// create dossier
app.use('/api/ecoc/dossier', dossierRoutes)


*/


// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});