const nodemailer = require('nodemailer')


const transport = nodemailer.createTransport({
    service: 'gmail', 
    auth:{
        user: process.env.nodeMailer_Email, 
        pass: process.env.nodeMaler_Pass
    }
})

module.exports.sendVerifyEmail = async (email, token)=>{
    let url = "http://localhost:5000/user/verifyEmail?token" + token
    
    await transport.sendEmail({
        from: process.env.nodeMailer_Email,
        to: email,
        subject: "VERIFY YOUR ACCOUNT!",
        text: `Click this link to Verify: ${url}`,
        html: `<h3>Click this link to Verify: ${url}</h3>`
    })
}