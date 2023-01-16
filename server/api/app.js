const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors())

//Capturar Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Carga de rutas

//Routes Middlewares


module.exports = app