const router = require('koa-router')();
const UserDao = require('../../mongooseLib/dao/userDao');
const user = new UserDao();
const checkToken = require('../../utils/checkToken');


router.post('/place-order', checkToken, async (ctx, next) => {
    const Email = ctx.request.Email;
    const body = ctx.request.body;

    try {
        
        console.log(body);

        ctx.body = {
            type: 'success',
            message: '购买成功！'
        };

    } catch (error) {
        
    }

});



module.exports = router;