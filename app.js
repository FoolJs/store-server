const Koa = require( 'koa' );
const app = new Koa ();
const bodyparser = require('koa-bodyparser');




const register = require('./routes/login/register');
const login = require('./routes/login/login');
const getCommodityType = require('./routes/commodity/getCommodityType');
const rotation = require('./routes/rotation/rotation.js');
const advert = require('./routes/advert/advert');
const recommendGoods = require('./routes/commodity/recommendGoods');
const goodsDetails = require( './routes/commodity/goodsDetails' );
const getUserNameCar = require('./routes/user/getUserNameCar');
const addShoppingCar = require('./routes/user/addShoppingCar');
const shooppingCart = require('./routes/user/shoppingCart.js');
const updateShoppingCart = require('./routes/user/updateShoppingCart');
const addressList = require('./routes/user/addressList');
const addAddress = require('./routes/user/addAddress');
const removeAddress = require('./routes/user/removeAddress');
const placeOrder = require('./routes/user/placeOrder');


app.use(
    bodyparser({
        enableTypes: ['json', 'form', 'text'],
    })
);




app.use(register.routes(), register.allowedMethods());
app.use(login.routes(), login.allowedMethods());
app.use(getCommodityType.routes(), getCommodityType.allowedMethods());
app.use(rotation.routes(), rotation.allowedMethods());
app.use(advert.routes(), advert.allowedMethods());
app.use(recommendGoods.routes(), recommendGoods.allowedMethods());
app.use(goodsDetails.routes(), goodsDetails.allowedMethods());
app.use(getUserNameCar.routes(), getUserNameCar.allowedMethods());
app.use(addShoppingCar.routes(), addShoppingCar.allowedMethods());
app.use(shooppingCart.routes(), shooppingCart.allowedMethods());
app.use(updateShoppingCart.routes(), updateShoppingCart.allowedMethods());
app.use(addressList.routes(), addressList.allowedMethods());
app.use(addAddress.routes(), addAddress.allowedMethods());
app.use(removeAddress.routes(), removeAddress.allowedMethods());
app.use(placeOrder.routes(), placeOrder.allowedMethods());



module.exports = app;