const asm1Router = require('express').Router()
// const sgMail = require('@sendgrid/mail');
const request = require('request');

asm1Router.post('/mail', (req, res) => {

    let from = req.body.from || 'good0896863529@gmail.com'
    let to = req.body.to
    let subject = req.body.subject
    let message = req.body.message

    const options = {
        'method': 'POST',
        'url': 'https://api.sendgrid.com/v3/mail/send',
        'headers': {
            'Authorization': ` Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            "personalizations": [{ "to": [{ "email": to }] }], 
            "from": { "email": from }, 
            "subject": subject, 
            "content": [
                { "type": "text/plain", "message": message }
            ] 
        })
    };
    
    request(options, function (error, response) {
        if (error) {
            res.status(400).json({
                message: 'error'
            })
        } else {
            res.status(200).json({
                message: 'success'
            })
        }
        console.log(response.body);
    });
})

module.exports = asm1Router