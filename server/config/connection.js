// /config/connection.js v1.0

// import dependencies
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file in the root directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// set the connection to cloud (mongoDB Atlas) or local database (note: process.env.MONGO_URI is set in .env)
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bookDB';

console.log('connection.js: connection string is: ',connectionString);

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;