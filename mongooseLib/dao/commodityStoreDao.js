const commodityStoreModel = require('../model/commodityStore');
const BaseCrud = require('./baseCrud');

class commodityStoreDao extends BaseCrud {
    constructor () {
        super(commodityStoreModel);
    }
}


module.exports = commodityStoreDao;