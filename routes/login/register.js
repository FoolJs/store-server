const router = require('koa-router')();
const UserDao = require('../../mongooseLib/dao/userDao');
const user = new UserDao();
const randomCode = require('../../utils/randomCode');
const sendEmail = require('../../utils/sendEmail');


const cache = new Map();

router.post( '/get-code', async (ctx, next) => {

    const { Email } = ctx.request.body;

    try {
        
        if ( await user.findOne({Email}, {}) ) {

            ctx.body = {
                type: 'warning',
                message: '该邮箱已被注册,请换一个吧！'
            };

        } else {
            const Code = randomCode(4).join('');

            const content = `
            <p><strong>【小米商城】</strong>您的验证码是<strong>${Code}</strong>，如非本人操作请忽略。</p>
            `;

            await sendEmail(Email, content);

            cache.set(Email, Code);

            let timerId = setTimeout(() => {
                clearTimeout(timerId);
                timerId = null;
                cache.delete(Email);
            }, 120000);

            ctx.body = {
                type: 'success',
                message: '您的验证码已发送，请注意查收。',
            };
        }


    } catch (error) {
        console.log(error);

        ctx.body = {
            type: 'error',
            message: '服务器错误，请稍候重试',
        };
    }

} );


router.post( '/register', async (ctx, next) => {
    const { Email, PassWord, Code } = ctx.request.body;

    try {

        
        if ( Code !== cache.get(Email) ) {
            
            ctx.body = {
                type: 'warning',
                message: '验证码错误，请重试！',
            };


        } else if ( await user.findOne({Email}, {}) ) {

            ctx.body = {
                type: 'warning',
                message: '该邮箱已被注册,请换一个吧！',
            };
        } else {
            await user.insertMany({
                Email,
                PassWord
            });

            ctx.body = {
                type: 'success',
                message: '注册成功！'
            };
        }

    } catch (error) {

        ctx.body = {
            type: 'error',
            message: '服务器错误，请稍候重试',
        };
    }
} );



module.exports = router;