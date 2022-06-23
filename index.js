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



// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});