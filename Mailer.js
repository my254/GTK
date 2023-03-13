const nodemailer = require('nodemailer')
const fs = require('fs')
const { json } = require('express')

const Mailer = function(data){
    this.data = data
}
Mailer.prototype.mail = async function(){
    return new Promise( async (resolve,reject) => {
        const transporter = nodemailer.createTransport({
          port: 587,               // true for 465, false for other ports
          host: "asili.tandahost.co.ke",
             auth: {
                  user: 'inquiry@shiftmarketers.com',
                  pass: 'shift123456',
               },
          secure: false,
          });
      
          const mailData = {
                from: this.data.name,  // sender address
                to: 'inquiry@shiftmarketers.com',   // list of receivers
                subject: `You have a new message from ${this.data.name}`,
                text: 'That was easy!',
                html: `
                <b>Client name: ${this.data.name} </b><br>
                <b>Client phone: ${this.data.phone} </b><br>
                <b>Client email: ${this.data.email} </b><br>
                <b>Contact me by: ${this.data.mode} </b>
                `,
              };
              transporter.sendMail(mailData, function (err, info) {
                  if(err)
                   { reject("Email was not sent please try again later!")
                    console.log(err)}
                  else
                    {resolve("Email has been sent thank you for contacting us.")
                    console.log(info);}
               })
})
}
Mailer.prototype.subscribe = async function(){
  return new Promise( async (resolve,reject) => {
    const transporter = nodemailer.createTransport({
      port: 587,               // true for 465, false for other ports
      host: "asili.tandahost.co.ke",
         auth: {
              user: 'inquiry@shiftmarketers.com',
              pass: 'shift123456',
           },
      secure: false,
      });
  
      const mailData = {
            from: this.data.name,  // sender address
            to: 'inquiry@shiftmarketers.com',   // list of receivers
            subject: `You have a new message subscriber ...`,
            html: `
            <b>Client email: ${this.data.email} </b><br>
            `,
          };
          transporter.sendMail(mailData, function (err, info) {
              if(err)
               { reject("Email was not sent please try again later!")
                console.log(err)}
              else
                {resolve("Email has been sent thank you for contacting us.")
                console.log(info);}
           })
})
}
module.exports = Mailer