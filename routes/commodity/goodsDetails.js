const router = require('koa-router')();
const CommodityTypeDao = require('../../mongooseLib/dao/commodityTypeDao');
const commodityType = new CommodityTypeDao();



router.post('/goods-details', async (ctx, next) => {
    const { Name } = ctx.request.body;

    try {
        const details = await commodityType.findOne(
            { Name },
            {
                Name: 1,
                Introduce: 1,
                Price: 1,
                OriginalPrice: 1,
                RotationCover: 1
            }
        );

        ctx.body = {
            details
        };

    } catch (error) {
        console.log(error);
    }
});



module.exports = router;