const mongoose = require('mongoose');

// Scema Definition
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    nickname: {
        type: String,
        required: false
    },
    job: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
        minlength: 8
    }
});

module.exports = mongoose.model('User', userSchema);