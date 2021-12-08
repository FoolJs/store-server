const router = require('koa-router')();



router.post( '/rotation', async (ctx, next) => {

    ctx.body = {
        data: [
            {src: '/rotation/1.webp'},
            {src: '/rotation/2.webp'},
            {src: '/rotation/3.webp'},
            {src: '/rotation/4.jpg'},
        ]
    };

} );

module.exports = router;