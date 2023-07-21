const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "ahmadmawardi007@gmail.com",
        pass: process.env.PASS_EMAIL
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter