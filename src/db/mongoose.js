const mongoose = require('mongoose')
const validator = require('validator')

// Connecting to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// Creating model for 'User' data
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Not a vaild email!')
            }
        }
    },  
    age: {
        type: Number,
        validate(value) {
            if (value < 0 ) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// Instance of 'User' data
const me = new User({
    name: 'Mike',
    email: 'mike@'
})

// Saves data to db and returns a promise
me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error', error)
})


const Task = mongoose.model('Task', {
    description: {
        type: String,
    },
    completed: {
        type: Boolean
    }
})

// const task = new Task({
//     description: 'meal-prep',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

// 12:09 Lesson 85