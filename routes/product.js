'use strict'

var express = require('express');
var ProductController = require('../controllers/product');

var router = express.Router();

router.get('/product/:id', ProductController.getProduct);

module.exports = router;