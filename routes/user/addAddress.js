const router = require('koa-router')();
const UserDao = require('../../mongooseLib/dao/userDao');
const user = new UserDao();
const checkToken = require('../../utils/checkToken');


router.post( '/add-address', checkToken, async (ctx, next) => {
    const Email = ctx.request.Email;
    const addressMessage = ctx.request.body;

    try {
        
        await user.updateOne(
            { Email },
            {
                $push: {
                    AddressList: [addressMessage]
                },
            }
        );

        ctx.body = {
            type: 'success',
            message: '添加成功！'
        };

    } catch (error) {
        ctx.body = {
            type: 'error',
            message: '服务器错误，请稍候重试！'
        };
    }
} );




module.exports = router;