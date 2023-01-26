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
const User = require('./routes/auth/auth'); 

//Routes Middlewares
app.use('/auth', User);
app.use('/user', verifyToken, User); //Ejemplo de protegida

module.exports = app