const mongoose = require('mongoose');
const { Schema } = mongoose
mongoose.connect('mongodb://0.0.0.0:27017/inotebook');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})
const User = mongoose.model('user', UserSchema);
module.exports = User;