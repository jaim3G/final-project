  
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const router = express.Router()
const transporter = require('../configs/nodemailer.config')




router.post('/newMail', (req, res) => {

    let data = req.body
    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 000,
        auth: {
            user: process.env.EMAILUSER,
            pass: process.env.EMAILPWD
        }
    })

    let mailOptions = {
        from: data.email,
        to: 'jaimenterria@gmail.com',
        subject: data.subject,
        html:`
        
        <h1>INFORMATION</h1> 
        <ul>
        <li>${data.name}</li>
        <li>${data.email}</li>
        </ul>
        <h3> MESSAGE </h3>
        <p>${data.message}</p>`
    }

    smtpTransporter.sendMail(mailOptions, (err, response) => {
        if(err){
            res.send(err)
        } else {
            res.send('success')
        }
    })
    smtpTransporter.close()
})

router.post('/signupMail', (req, res) => {

    let data = req.body
    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 000,
        auth: {
            user: process.env.EMAILUSER,
            pass: process.env.EMAILPWD
        }
    })

    let mailOptions = {
        from: process.env.EMAILUSER,
        to:  data.email,
        subject: data.subject,
        html:`
        
        <h1>INFORMATION</h1> 
        <ul>
        <li>${data.name}</li>
        <li>${data.email}</li>
        </ul>
        <h3> MESSAGE </h3>
        <p>${data.message}</p>`
    }

    smtpTransporter.sendMail(mailOptions, (err, response) => {
        if(err){
            res.send(err)
        } else {
            res.send('success')
        }
    })
    smtpTransporter.close()
})

module.exports = router 
/*
router.post('/', (req, res) => {
    const { email, subject, message, name, email } = req.body
    User
        .findById(vendorsId)
        .then(vendor => {
           transporter.sendMail(
        {
            from: email,
            to: "ironhackproject21020@gmail.com",
            subject,
            text: message,
            html: `<b>NAME: ${name} MAIL: ${message}</b>`
        })
        res.redirect('/')
        })      
        .catch(err => next(new Error(err)))
})


*/
