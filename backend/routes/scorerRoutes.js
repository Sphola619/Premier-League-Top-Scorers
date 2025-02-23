// Import the express library
const express = require('express');

// Import the getTopScorers controller function
const { getTopScorers } = require('../controllers/scorerController');

// Create a new router instance
const router = express.Router();

// Define a route to get top scorers
router.get('/', getTopScorers);

// Export the router
module.exports = router;