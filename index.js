'use strict'

var mongoose = require('mongoose').set('debug', true);
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/product-test')
        .then(() => {
            console.log("Conexión a la base de datos establecida con éxito.");

            // Creación del servidor
            app.listen(port, () => {
                console.log("Servidor inicializado correctamente en localhost:3700");
            });
        })
        .catch(error => console.log(error));