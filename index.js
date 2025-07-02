// index.js

const express = require('express');
const cors = require('cors');  // Import the CORS package
// const random = require('./api/random');

const app = express();

// Use CORS middleware to allow all origins (or you can specify an origin)
app.use(cors());  // This will allow CORS for all routes

const random = require('./api/random');

module.exports = random;
