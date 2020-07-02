const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ajaysmart26@gmail.com',
      pass: 'whitewall177'
    }
 });


/*transporter.sendMail({
  from :'ajaysmart26@gmail.com',
  to : 'ajaysiva2000@gmail.com',
  subject: 'Hi',
  text : 'bye'
},(err,info)=>{
  if(err){
    console.error(err);
  }else{
    console.log(info);
  }
})*/

exports.mail = transporter;