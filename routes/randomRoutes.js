// routes/randomRoutes.js

const express = require('express');
const router = express.Router();
const { getRandomData } = require('../controllers/randomController');

// Route for getting random data
router.get('/random', getRandomData);

module.exports = router;
