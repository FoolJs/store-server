


// 查找商品：
//      比如查找手机类型，直接在A表查询Type字段得到Sub即可

//购买商品：

        //将B表的购买的那个数据放到用户的某个字段里面，并将A表的库存数量-1




/* let A表类型表 = {
    Type: '手机',
    Sub: [
        {
            Name: '小米9',
            Cover: '图片',
            Introduce: ['介绍1', '介绍2'],
            Price: 100,
            OriginalPrice: 1000,
            RotationCover: ['轮播图1', '轮播图2'],
            Stock: ['库存，里面存一个OId的列表']
        },
    ],
}; */
let A表类型表 = {
    Type: '手机',
    Name: '小米9',
    Cover: '图片',
    Introduce: ['介绍1', '介绍2'],
    Price: 100,
    OriginalPrice: 1000,
    RotationCover: ['轮播图1', '轮播图2'],
    Stock: ['库存，里面存一个OId的列表']

};

let B表商品仓库表 = {
    ObjectId: '商品独有的OId',
    Type: '手机',
    Name: '小米9',
};





const CommodityStoreDao = require('./dao/commodityStoreDao');
const CommodityTypeDao = require('./dao/commodityTypeDao');

const commodityStore = new CommodityStoreDao();
const commodityType = new CommodityTypeDao();


/**
 * @description 添加商品
 * 
 * 首先根据商品数量向商品仓库表添加对应数量的商品，
 * 然后将它们的OID放到一个数组
 * 然后检查商品类型表是否已经存在该商品
 * 若存在，则将新添加的商品的OID添加到它的Stock字段
 * 如不存在，则添加该商品信息，并将OID数组作为Stock字段
 * 
 * @param {Object} o 商品信息
 * @param {Number} num 商品数量
 */
async function addCommodity(o, num = 1) {
    const {
        Type,
        Name,
        Cover,
        Introduce,
        Price,
        OriginalPrice,
        RotationCover,
    } = o;

    let list = [];

    for ( let i = 0; i < num; i++ ) {
        list.push( (await commodityStore.create({ Type, Name }))._id );
    }

    if ( await commodityType.findOne({
        Type,
        Name
    }) ) {
        await commodityType.updateOne(
            { Type, Name },
            {
                $push: { Stock: [ ...list ] },
            }
        );
    } else {
        await commodityType.insertMany({
            Type,
            Name,
            Cover,
            Introduce,
            Price,
            OriginalPrice,
            RotationCover,
            Stock: list,
        });
    }
}



const o = {
    Type: 'phone',
    Name: 'MIX FOLD折叠屏手机',
    Cover: '/phone/MIX FOLD折叠屏手机/cover.webp',
    Introduce: [
        '8.01"折叠大屏',
        '澎湃C1自研专业影像芯片',
        '液态镜头',
        '哈曼卡顿立体声四扬声器',
    ],
    Price: 7999,
    OriginalPrice: 7999,
    RotationCover: ['/phone/MIX FOLD折叠屏手机/MIX FOLD折叠屏手机-1.jpg'],
};



addCommodity(o, 50);

