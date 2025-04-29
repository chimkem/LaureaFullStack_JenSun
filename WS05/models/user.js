const mongoose = require('mongoose');

// Scema Definition
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlenght: 4
    },
    nickname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    number: {
        type: Number,
        required: true
    },
    group: {
        type: String,
        required: true
    }
});

userSchema.methods.valid = function valid() {
    const validation = this.username
        ? "Käyttäjänimi: " + this.username + "on aktiivinen"
        : "Tämä käyttäjänimi on vapaa"
    console.log(validation);
};

module.exports = mongoose.model('user', userSchema);