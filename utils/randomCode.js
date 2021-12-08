function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

/**
 * 
 * @description 随机从大小写字母和数字中获得n个
 * 
 * @param {Number} n 随机获取的数量
 * @returns {Array} 一个数组
 */
function randomCode(n) {
    let list = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'a',
        'A',
        'b',
        'B',
        'c',
        'C',
        'd',
        'D',
        'e',
        'E',
        'f',
        'F',
        'g',
        'G',
        'h',
        'H',
        'i',
        'I',
        'j',
        'J',
        'k',
        'K',
        'l',
        'L',
        'm',
        'M',
        'n',
        'N',
        'o',
        'O',
        'p',
        'P',
        'q',
        'Q',
        'r',
        'R',
        's',
        'S',
        't',
        'T',
        'u',
        'U',
        'v',
        'V',
        'w',
        'W',
        'x',
        'X',
        'y',
        'Y',
        'z',
        'Z',
    ];

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(list[randomInteger(0, list.length - 1)]);
    }

    return arr;
}

module.exports = randomCode;
