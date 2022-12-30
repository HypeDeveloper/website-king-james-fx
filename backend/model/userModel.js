const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Add your full name"],
    },
    username: {
        type: String,
        required: [true, "Add a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Add an emailaddress"],
        unique: true,
    },
    country: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, "Add a password to secure your account"],
    },
    btcAddress: {
        type: String,
        unique: true,
    },
    ethAddress: {
        type: String,
        unique: true,
    },
    usdtAddress: {
        type: String,
        unique: true,
    },
    userRefCode: {
        type: String,
    },
    inviteRefCode: {
        type: String,
    },
    amount: {
        type: Number,
    },
},
    {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema)