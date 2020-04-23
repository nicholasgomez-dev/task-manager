// Improting: Express, mongoose.js, User model
const express = require('express')
require('./db/mongoose') //this require will just ensure that the file runs
const User = require('./models/user')
const Task = require('./models/task')

// Setting: express, port
const app = express()
const port = process.env.PORT || 3000

// Setting: all incoming json -> accessible object
app.use(express.json())

// Setting: user data route
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user)=> {
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// Setting: server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//download postman, run mongodb, udemy lesson 89 17mins