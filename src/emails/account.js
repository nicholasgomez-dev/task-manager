const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'gomez.nicholas96@gmail.com',
    from: 'gomez.nicholas96@gmail.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually gets to you.'
})