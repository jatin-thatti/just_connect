const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    secure:false,
    auth:{
        user:'legendhawkey@gmail.com',
        pass:'lucky@333'
    }


});