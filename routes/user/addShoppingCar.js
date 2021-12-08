const router = require('koa-router')();
const UserDao = require('../../mongooseLib/dao/userDao');
const CommodityTypeDao = require('../../mongooseLib/dao/commodityTypeDao');
const user = new UserDao();
const commodityType = new CommodityTypeDao();
const checkToken = require('../../utils/checkToken');



router.post('/add-shopping-car', checkToken, async (ctx, next) => {
    const { Name } = ctx.request.body;
    const Email = ctx.request.Email;

    try {
        const { Cover, Price } = await commodityType.findOne(
            { Name },
            {
                Cover: 1,
                Price: 1,
            }
        );

        const { ShoppingCart } = await user.findOne({Email}, {ShoppingCart: 1});

        let same = false;

        for (const item of ShoppingCart) {
            if ( item?.Name === Name ) {

                if ( item.Sum > 9 ) {
                    ctx.body = {
                        type: 'warning',
                        message: '购物车数量超过限制！'
                    };
                    return;
                }

                same = true;
                item.Sum += 1;
                break;
            }
        }

        if ( !same ) {
            ShoppingCart.push({
                Name, Cover, Price, Sum: 1
            });
        }


        await user.updateOne(
            { Email },
            {
                $set: {
                    ShoppingCart: ShoppingCart
                },
            }
        );

        ctx.body = {
            type: 'success',
            message: '加入购物车成功！',
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