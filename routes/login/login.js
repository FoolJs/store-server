const router = require('koa-router')();
const UserDao = require('../../mongooseLib/dao/userDao');
const user = new UserDao();
const { createToken } = require( '../../utils/jwt');



router.post('/login', async (ctx, next) => {
    const { Email, PassWord } = ctx.request.body;

    try {
        let _PassWord = ( await user.findOne( {Email}, {PassWord} ) )?.PassWord;

        if ( PassWord !== _PassWord ) {

            ctx.body = {
                type: 'warning',
                message: '用户名或密码错误'
            };
        } else {

            let token = createToken({Email});

            ctx.body = {
                type: 'success',
                message: '登录成功',
                token
            }
        }

    } catch (error) {
        ctx.body = {
            type: 'error',
            message: '服务器错误！',
        };
    }
});




module.exports = router;