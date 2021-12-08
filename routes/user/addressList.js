const router = require('koa-router')();
const UserDao = require('../../mongooseLib/dao/userDao');
const user = new UserDao();
const checkToken = require('../../utils/checkToken');


router.post( '/address-list', checkToken, async (ctx, next) => {

    const Email = ctx.request.Email;

    try {
        
        const { AddressList } = await user.findOne({Email}, {AddressList: 1});

        ctx.body = {
            type: 'success',
            AddressList
        };

    } catch (error) {
        console.log(error);

        ctx.body = {
            type: 'error',
            message: '服务器错误，请重试！'
        };
    }
} );




module.exports = router;