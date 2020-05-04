// Improting: Express, mongoose.js, User model
const express = require('express')
require('./db/mongoose') //this require will just ensure that the file runs
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// Setting: express, port
const app = express()
const port = process.env.PORT || 3000

// Setting: all incoming json -> accessible object
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Setting: server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})