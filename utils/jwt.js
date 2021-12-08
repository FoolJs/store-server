const JWT = require('jsonwebtoken');


// 密钥
const SECRET = 'efhuij35hiuehgeiogh';



/**
 * @description 创建一个token
 * @param {object} payload 想要当作验证的数据
 * @param {Number} time token的有效时间
 */
function createToken( payload, time=60 * 60 * 24 * 7 ) {
    return JWT.sign(payload, SECRET, {
        expiresIn: time
    });
}

/**
 * @description 验证token
 * @param {string} token token字符串
 * 
 * 若是Token非法或Token过期，都会抛出一个错误
 * 
 */
function verifyToken( token ) {
    return new Promise( (resolve, reject) => {
        JWT.verify(token, SECRET, (err, decoded) => {
            if(err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    } )
}








module.exports = {
    createToken,
    verifyToken
};