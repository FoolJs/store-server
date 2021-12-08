const router = require('koa-router')();




router.post('/advert', async (ctx, next) => {


    ctx.body = {
        data: {src: '/advert/1.webp'}
    };
});


module.exports = router;