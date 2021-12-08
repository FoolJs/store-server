const router = require('koa-router')();
const UserDao = require('../../mongooseLib/dao/userDao');
const user = new UserDao();
const checkToken = require('../../utils/checkToken');




router.post('/shopping-cart', checkToken, async (ctx, next) => {
    const Email = ctx.request.Email;

    try {
        
        const { ShoppingCart } = await user.findOne({Email}, {ShoppingCart: 1});

        ctx.body = {
            type: 'success',
            ShoppingCart
        };

    } catch (error) {
        console.log(error);
    }
});



module.exports = router;