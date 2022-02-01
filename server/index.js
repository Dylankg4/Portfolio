require('dotenv').config()
const express = require("express")
const app = express()
require("dotenv").config

const bodyParser = require("body-parser")
const cors = require("cors")
const nodeMailer = require("nodemailer")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.get("/", (req, res)=>{
    console.log(process.env.MAIL_HOST)
    res.send('hello')
})

app.post("/send_mail", async (req,res)=>{
    try{
        let {text} = req.body
        const transport = nodeMailer.createTransport({
            host: process.env.MAIL_HOST,
            secure: false,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        await transport.sendMail({
            from: process.env.MAIL_FROM,
            to: "test@test.com",
            subject: "test email",
            html: `<div className="email" style="
            border: 1px solid black;
            padding: 20px;
            font-family: sans-serif;
            line-height: 2;
            font-size: 20px; 
            ">
            <h2>Here is your email!</h2>
            <p>${text}</p>
        
            <p>All the best, Dylan</p>
            </div>`
        })
    } catch(error){
        console.log(error)
    }

})

app.listen(process.env.PORT || 4000, ()=> {
    console.log("Server is listening on port 4000")
})