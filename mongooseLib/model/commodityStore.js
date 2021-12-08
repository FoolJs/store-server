const { Schema } = require('mongoose');
const { db } = require('../connect/db');


const commodityStoreSchema = new Schema({
    Type: {
        type: String,
    },
    Name: {
        type: String
    }
});


let commodityStoreModel = db.model(
    'CommodityStores',
    commodityStoreSchema,
    'CommodityStores'
);

module.exports = commodityStoreModel;