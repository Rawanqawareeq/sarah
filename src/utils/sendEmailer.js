import nodemailer from "nodemailer";
import 'dotenv/config';
const transporter = nodemailer.createTransport({
   service:"gmail",
   secure: false,
    auth: {
      user:process.env.USER_EMAIL,
      pass:process.env.PASSWORD_EMAIL,
    },
  });

  async function sendEmail(to,subject,html) {
    const info = await transporter.sendMail({
      from: `RAWAN" <${process.env.USER_EMAIL}>`, 
      to, 
      subject:'welcome to shop',
      html,
    });
    
}

  export default sendEmail;
  
 