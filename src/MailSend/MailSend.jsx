const nodemailer = require('nodemailer');

import React from 'react';

const MailSend = () => {
  const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth:{
      user: 'masudrana1998@gmail.com',
      pass: 'gfivejzappqnhcot'
    }
    
    
    })
    
    function sendMail(to, sub, msg){
      transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
      })
    }
    sendMail("masudrana19981002@gmail.com", "hi ", "hello")
    return sendMail()
};

export default MailSend;
