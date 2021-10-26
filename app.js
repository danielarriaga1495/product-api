'use strict'

var express = require('express');

var app = express();

// Rutas
var product_routes = require('./routes/product');

// Middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// CORS

// Rutas
app.use('/api', product_routes);

// Exportar
module.exports = app;