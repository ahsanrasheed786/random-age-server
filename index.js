// // index.js

// const express = require('express');
// const cors = require('cors');  // Import the CORS package

// const app = express();

// // Use CORS middleware to allow all origins (or you can specify an origin)
// app.use(cors());  // This will allow CORS for all routes

// const random = require('./api/random');

// module.exports = random;


// index.js
const express = require('express');
const cors = require('cors');  // Import the CORS package
const random = require('./api/random');

const app = express();

// Use CORS middleware to allow all origins
app.use(cors());  // Enables CORS for all routes

// Attach the random API route
app.use(random);  // This will route to the /api/random endpoint

// If you're running a server locally, listen on a port (e.g., 3000)
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
