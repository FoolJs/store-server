const { verifyToken } = require('./jwt');


// 鉴定token
async function checkToken (ctx, next) {
    const token = ctx.request.headers['authorization'];

    if ( !token ) {
        ctx.body = {
            type: 'warning',
            message: '您还未登录！'
        };
    } else {

        try {
            ctx.request.Email = (await verifyToken(token)).Email;
            await next();

        } catch (error) {
            ctx.body = {
                type: 'warning',
                message: '你还未登录！',
            };
        }

    }

}


module.exports = checkToken;