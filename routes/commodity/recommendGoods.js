const router = require('koa-router')();
const CommodityTypeDao = require('../../mongooseLib/dao/commodityTypeDao');
const CommodityStoreDao = require('../../mongooseLib/dao/commodityStoreDao');
const commodityType = new CommodityTypeDao();
const commodityStore = new CommodityStoreDao();


const util = require('util');



router.post('/recommend-goods', async (ctx, next) => {

    try {

        let list = await commodityType.aggregate([
            {
                $group: {
                    _id: '$Type',
                    list: {
                        $push: {
                            Name: '$Name',
                            Cover: '$Cover',
                            Introduce: '$Introduce',
                            Price: '$Price',
                            OriginalPrice: '$OriginalPrice',
                        },
                    },
                },
            }
        ]);

        
        for (const iterator of list) {
            if ( iterator['list'].length > 8 ) {
                iterator['list'].length = 8;
            }

            if (iterator['_id'] === 'phone') {
                iterator.left = [
                    { src: '/phone/left1.webp', Name: 'MIX FOLD折叠屏手机' },
                ];
            } else if (iterator['_id'] === 'appliances') {
                iterator.left = [
                    {
                        src: '/appliances/left1.webp',
                        Name: '小米电视6 65″OLED',
                    },
                    {
                        src: '/appliances/left2.webp',
                        Name: '小米电视 ES55 2022款',
                    },
                ];
            } else if (iterator['_id'] === 'wear') {
                iterator.left = [
                    {
                        src: '/wear/left1.webp',
                        Name: 'Redmi 手表 2',
                    },
                ];
            } else if (iterator['_id'] === 'travel') {
                iterator.left = [
                    {
                        src: '/travel/left1.webp',
                        Name: '九号平衡车',
                    },
                    {
                        src: '/travel/left2.webp',
                        Name: '米家电动滑板车1S',
                    },
                ];
            } else if (iterator['_id'] === 'daily') {
                iterator.left = [
                    {
                        src: '/daily/left1.webp',
                        Name: '小米移动电源3 20000mAh USB-C双向快充版',
                    },
                    {
                        src: '/daily/left2.webp',
                        Name: '米家电动剃须刀S500',
                    },
                ];
            }


/*             if ( iterator['_id'] === 'phone' ) {
                iterator.left = ['/phone/left1.webp'];
            } else if ( iterator['_id'] === 'appliances' ) {
                iterator.left = ['/appliances/left1.webp', '/appliances/left2.webp'];
            } else if ( iterator['_id'] === 'wear' ) {
                iterator.left = ['/wear/left1.webp'];
            } */


        }

        


        ctx.body = {
            list
        };

    } catch (error) {
        console.log(error);
        ctx.body = {
            type: 'error',
            message: '服务器错误，请重试！'
        };
    }
});



module.exports = router;