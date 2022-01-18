const nodemailer = require("nodemailer");

const email = {
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "secure" : false,
    "auth": {
      "user": "416d234458f1a9",
      "pass": "6cdb929ae3c282"
    }
    
};

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function(error, info){
        if(error) {
            console.log(error);
        }else {
            console.log(info);
            return info.response
        }
    });
};

const content = {
    from: 'p01073027511@gmail.com', // sender address
    to: "0a6b779388-0e25a0@inbox.mailtrap.io", // list of receivers
    subject: "메일테스트으", // Subject line
     // plain text body
    html:"<h2>메일테스트 - nodemailer를 이용한 이메일 보내기 구현</h2>"
};

send(content);