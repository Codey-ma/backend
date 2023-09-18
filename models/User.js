const moongose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new moongose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    username: {
        type: String,
        required: [true, 'Please enter your username'],
        unique: [true, 'Username already exists'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: [true, 'Email already exists'],
    },
    avatar: {
        type: String,
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false,
    },
    
    courses: [
        {
            type: moongose.Schema.Types.ObjectId,
            ref: 'Course',
        },
    ],

    events: [
        {
            type: moongose.Schema.Types.ObjectId,
            ref: 'Event',
        },
    ],

    todos: [
        {
            category: {
                type: String,
                enum: ['Personal', 'Codey'],
                default: 'Personal',
            },
            title: {
                type: String,
                required: [true, 'Please enter a title'],
            },
            url: {
                type: String,
            },
        },
    ],
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    if (this.avatar === undefined) {
        this.avatar = `https://ui-avatars.com/api/?name=${this.name}&background=random`;
    }

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};


module.exports = moongose.model('User', userSchema);