const mongoose = require('mongoose')
const validator = require('validator')

// Connecting to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// // Creating model for 'User' data
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Not a vaild email!')
//             }
//         }
//     },  
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0 ) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password: {
//         required: true,
//         type: String,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     }
// })

// // Instance of 'User' data
// const me = new User({
//     name: '    Nick    ',
//     email: 'MYEMAIL@MEAD.IO    ',
//     password: 'phone098?'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })



// Task Model
const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'eat lunch lol'
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})

// 12:09 Lesson 85