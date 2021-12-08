const commodityTypeModel = require('../model/commodityType');
const BaseCrud = require('./baseCrud');



class CommodityTypeDao extends BaseCrud {
    constructor() {
        super(commodityTypeModel);
    }
}



module.exports = CommodityTypeDao;