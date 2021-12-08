const { Schema } = require('mongoose');
const { db } = require('../connect/db');

const commodityTypeSchema = new Schema({
    Type: {
        type: String,
    },
    Name: {
        type: String,
    },
    Cover: {
        type: String,
    },
    Introduce: {
        type: Array,
    },
    Price: {
        type: Number,
    },
    OriginalPrice: {
        type: Number,
    },
    RotationCover: {
        type: Array,
    },
    Stock: {
        type: Array,
    },
});

let commodityTypeModel = db.model(
    'CommodityTypes',
    commodityTypeSchema,
    'CommodityTypes'
);

module.exports = commodityTypeModel;
