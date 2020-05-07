// Improting: Express, mongoose.js, User model
const express = require('express')
require('./db/mongoose') //this require will just ensure that the file runs
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


const bcrypt = require('bcryptjs')
//8 Rounds of hashing is best for secuirty and speed
const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
    console.log(isMatch)
}

myFunction()