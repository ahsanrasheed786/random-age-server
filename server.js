// const express = require('express');
// const randomRoutes = require('./routes/randomRoutes');
// const app = express();
// const config = require('./config/config');

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api', randomRoutes);
// app.use('/', (req, res) => res.send('server is running'));

// // Start the server
// const PORT = config.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const randomRoutes = require('./routes/randomRoutes');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/api', randomRoutes);

// For Vercel's serverless function handling
module.exports = app;
