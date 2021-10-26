'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    itemId: String,
    productType: String,
    productName: String,
    brandName: String,
    productImageURL: String,
    uom: String,
    availability: [{
        locationId: String,
        locationType: String,
        bufferedAvailability: String,
        unbufferedAvailability: String,
        storeHours: String,
        address: String,
        phone: String,
        price: String,
        distance: String
    }]
})

module.exports = mongoose.model('Product', ProductSchema);