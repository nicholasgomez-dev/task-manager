// Improting: Express, mongoose.js, User model
const express = require('express')
require('./db/mongoose') //this require will just ensure that the file runs
const User = require('./models/user')

// Setting: express, port
const app = express()
const port = process.env.PORT || 3000

// Setting: all incoming json -> accessible object
app.use(express.json())

// Setting: user data route
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// Setting: server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//download postman, run mongodb, udemy lesson 89 17mins