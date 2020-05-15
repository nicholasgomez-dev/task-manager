const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is under maintenance check back soon.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5ebe256f0b8c9e4ca8b1b335')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5ebe240e851aaf0e44ab9234')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()