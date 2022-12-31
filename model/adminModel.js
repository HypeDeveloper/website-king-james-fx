const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    rights: {
        type: String,
    },
});

module.exports = mongoose.model('Admin', AdminSchema)