const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "416d234458f1a9",
      pass: "6cdb929ae3c282"
    }
    
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        }else {
            console.log(info);
            return info.response
        }
    });
};

let email_data = {
    from: 'p01073027511@gmail.com',
    to : 'kkmh7511@naver.com',
    subject : '테스트 메일 입니다.',
    text : 'nodejs 한시만만에 끝내보자'
}

send(email_data);