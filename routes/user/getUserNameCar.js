const router = require('koa-router')();
const UserDao = require('../../mongooseLib/dao/userDao');
const user = new UserDao();
const checkToken = require('../../utils/checkToken');


router.post('/get-name-car', checkToken, async (ctx, next) => {
    const { Email } = ctx.request;

    try {
        

    let list = await user.findOne(
        { Email },
        {
            Email: 1,
            ShoppingCart: 1,
        }
    );

    ctx.body = {
        type: 'success',
        data: list
    };





    } catch (error) {
        console.log(error);

        ctx.body = {
            type: 'error',
            message: '服务器错误，请稍候重试！'
        };
    }


});



module.exports = router;