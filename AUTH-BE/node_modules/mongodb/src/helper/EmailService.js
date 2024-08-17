import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: 'vijayeswarybe@gmail.com',
        pass: 'fogaxljrtqwrblqr'        //foga xljr tqwr blqr
      },
      tls: {
        rejectUnauthorized: false
      }
});

let mail = async(to,randomString) => {
    try {
        let mailContent = await transporter.sendMail({
            from: 'vijayeswarybe@gmail.com',
            to: to,
            subject: 'Code to reset password',
            html: `<div><h3>Hi sir/mam</h3></div>
            <div>
              <p>To reset your password, Kindly copy the below code and paste it in respective column in our website</p>
              <a href=${process.env.WEB_URL}>${randomString}</a>     
              <p>Thanks!!!</p>       
            </div>
            `
        }) 

        console.log(mailContent.messageId, " - email sent");
    } catch (error) {
        console.log(error.message);
    }
}

export default mail


// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'vijayeswarybe@gmail.com',
//     pass: 'fogaxljrtqwrblqr'        //foga xljr tqwr blqr
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// let mailOptions = {
//   from: 'vijayeswarybe@gmail.com',
//   to: 'vijayeswar_y@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// let mail = transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// export default mail

// export default async function sendEmail() {
//     // Create a transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       secure: true, // enforcing secure transfer
//       auth: {
//         user: 'vijayeswarybe@gmail.com',
//         pass: 'fogaxljrtqwrblqr'        //foga xljr tqwr blqr
//       },
//       tls: {
//             rejectUnauthorized: false
//           }
//     });
  
//     // Set up email data
//     let mailOptions = {
//       from: 'vijayeswarybe@gmail.com',
//       to: 'vijayeswar_y@yahoo.com',
//       subject: 'Hello, World!',
//       text: 'html'
//     };

    
  
//     // Send email
//     let info = await transporter.sendMail(mailOptions);
//     // let html = `<p>Hi this is a paragraph</p>`
  
//     console.log('Message sent: %s', info.messageId);
//   }
  
// //   // Execute the function
// //   sendEmail().catch(console.error)