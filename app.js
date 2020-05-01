"use strict";

const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
let code = Math.random().toString().substr(2, 6);
let transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  service: "qq", // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  //   port: 465, // SMTP 端口
  secureConnection: true, // 使用了 SSL
  auth: {
    user: "alanwu.hd@qq.com",
    pass: "nuhelngjweilgahb", //这是QQ的
    //pass: "JPQFVHTYNPMVGPQX", //这是163的
  },
});

let mailOptions = {
  from: "alanwu.hd@qq.com", // sender address
  to: "15768716486@163.com", // list of receivers
  subject: "Hello,this is alan from China!", // Subject line
  // 发送text或者html格式
  text: `您的验证码是${code},验证码在10分钟内有效`, // plain text body
  //html:  fs.createReadStream(path.resolve(__dirname,'index.html'))// html body
  //html: '<img src="cid:01">', // html body
//   attachments: [
//     {
//       filename: "image",
//       path: path.resolve(__dirname, "2.jpg"),
//       cid: "01",
//     },
//     {
//       filename: "a.txt",
//       content: "hello world!",
//     },
//     {
//       filename: "b.txt",
//       path: "./text.txt",
//     },
//     {
//       filename: "test.docx",
//       path: "./test.docx",
//     },
//     {
//       filename: "ES6.pdf",
//       path: "./ES6.pdf",
//     },
//     {
//       filename: "test.zip",
//       path: "./test.zip",
//     },
//   ],
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  // console.log('Message sent: %s', info.messageId);
  console.log(info);
});
