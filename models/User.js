// user model for the database
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    studentID: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    admin: { // no way to create an admin user from frontend, can only me added manually. Admin users can modify other users tasks
        type: Boolean,
        default: false
    }
});

module.exports = User = mongoose.model('user', UserSchema);