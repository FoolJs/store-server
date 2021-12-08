const router = require('koa-router')();
const CommodityTypeDao = require('../../mongooseLib/dao/commodityTypeDao');
const commodityType = new CommodityTypeDao();



router.post('/get-commodity-type', async (ctx, next) => {
    const { Type } = ctx.request.body;

    try {
        
        const o = await commodityType.find(
            { Type },
            {
                Name: 1,
                Cover: 1,
                Introduce: 1,
                Price: 1,
                OriginalPrice: 1
            }
        );

        console.log(o);

        ctx.body = {
            data: o
        };

    } catch (error) {
        console.log(error);
    }
});


module.exports = router;