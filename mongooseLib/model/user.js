const { Schema } = require('mongoose');
const { db } = require('../connect/db');

const userSchema = new Schema({
    NickName: {
        type: String,
        default: '宇宙首帅',
    },
    PassWord: {
        type: String,
    },
    Email: {
        type: String,
    },
    CreateTime: {
        type: Date,
        default: new Date(),
    },
    ShoppingCart: {
        type: Array,
        default: []
    },
    Collection: {
        Type: Array,
        default: []
    },
    Money: {
        type: Number,
        default: 99999
    },
    AddressList: {
        type: Array
    }
});

let userModel = db.model('Users', userSchema, 'Users');

module.exports = userModel;


