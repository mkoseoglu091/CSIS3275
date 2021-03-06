// mongoDB connection function (used in server.js)
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // from the config file gets the global variable mongoURI

const connectDB = async () => {
    try {
        await mongoose.connect(db); // this can have additional arguments as settings. ex: connect(db, {settingName: true/false})
        console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err.message);
        process.exit(1); // exit process with failure
    }
}

module.exports = connectDB; // exports the connectDB function so it can be used in server.js