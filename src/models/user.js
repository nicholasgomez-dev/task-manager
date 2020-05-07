// Importing: Mongoose, Validator
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

//Users property schema for db: just declaration, nothing happening
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Not a vaild email!')
            }
        }
    },  
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0 ) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        required: true,
        type: String,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})

//standard function needed bc 'this' keyword doesnt get bind with arrow function: runs before saving user to db
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

// Creates User in DB
const User = mongoose.model('User', userSchema)


// Exporting: User
module.exports = User