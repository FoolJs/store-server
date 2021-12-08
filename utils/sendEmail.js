
const nodemailer = require('nodemailer');

/**
 * @description 发送邮件的脚本
 * @param {String} targetEmail 目标邮箱
 * @param {String} content 想要发送的内容
 */
async function sendEmail (targetEmail, content) {
    // 创建一个能够发送邮件的对象，
    let transporter = await nodemailer.createTransport({
        host: 'smtp.163.com', // smtp服务器的地址，可在用的邮箱的设置里面找到，
        port: 465, //端口若是设置为465，则最好把secure设置为true，
        secure: true, // 是否启动TLS连接，

        auth: {
            // 身份对象配置
            user: 'M2282202793@163.com', // 发送者的邮箱，
            pass: 'JEMLAILJHBODCZFA', // 邮箱的授权码，由邮箱提供，也可以使用密码，
        },
    });

    // 想要发送的消息的配置，
    let message = {
        from: '"👻XiaoMi👻" <M2282202793@163.com>', // 必须跟你的邮箱匹配，
        to: targetEmail, // 发送目标，
        subject: 'XiaoMi', // 邮件标题，
        html: content, // * 发送内容，
    };

    // 通过transporter.sendMail方法发送邮件
    let info = await transporter.sendMail(message);
}




module.exports = sendEmail;