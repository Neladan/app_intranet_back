const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 8080;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send("<h1>Hello World <br> API Eco-conduite</h1>");
});


// import customer routes
const clientRoutes = require('./src/routes/Client.route');


// create customer routes
app.use('/api/ecoc/client', clientRoutes);

//-----------------------------------------------

// import customer routes
const UtilisateurRoutes = require('./src/routes/Utilisateur.route');


// create customer routes
app.use('/api/ecoc/utilisateur', UtilisateurRoutes);

//----------------------------


// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});