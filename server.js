const express = require('express');
const randomRoutes = require('./routes/randomRoutes');
const app = express();
const config = require('./config/config');

// Middleware
app.use(express.json());

// Routes
app.use('/api', randomRoutes);
app.use('/', (req, res) => res.send('server is running'));

// Start the server
const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
