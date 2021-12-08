const router = require('koa-router')();
const UserDao = require('../../mongooseLib/dao/userDao');
const user = new UserDao();
const checkToken = require('../../utils/checkToken');


router.post('/update-shopping-cart', checkToken, async (ctx, next) => {
    const Email = ctx.request.Email;
    const { ShoppingCart } = ctx.request.body;

    try {
        
        await user.updateOne({Email}, {
            $set: {ShoppingCart: ShoppingCart}
        });

        ctx.body = {
            type: 'success'
        };

    } catch (error) {
        console.log(error);
        ctx.body = {
            type: 'error',
            message: '服务器错误！'
        };
    }
});



module.exports = router;