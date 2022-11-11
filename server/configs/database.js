const mongoose = require('mongoose');

// TODO: add to env variable
const CONNECTION_STRING = 'mongodb://localhost:27017/cryptoFox';

module.exports = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING);
        console.log('Database connected');
    } catch (error) {
        console.error('Error initializing database');
        console.error(error.message);
        process.exit(1);
    }
};