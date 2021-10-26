'use strict'

var Product = require('../models/product');

var controller = {
    getProduct: function(req, res) {
        var productId = req.params.id;

        Product.findById(productId, (error, product) => {
            if(error) return res.status(500).send({
                message: 'Error al obtener los datos'
            });

            if(!product) return res.status(404).send({
                message: 'No se encontró ningún producto'
            });

            return res.status(200).send({
                product
            });
        });
    }
}

module.exports = controller;