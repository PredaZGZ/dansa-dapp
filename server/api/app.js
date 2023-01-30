const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors())

//Capturar Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Carga de rutas
const verifyToken = require('./routes/auth/verify-token');
const Auth = require('./routes/auth/auth'); 
const Weights = require('./routes/fitness/weights'); 

//Routes Middlewares
app.use('/auth', Auth);
app.use('/fitness/weights', verifyToken, Weights);

module.exports = app