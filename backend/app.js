// filepath: /c:/Users/201614468/Downloads/Projects/top-premier-league-scorers/backend/app.js
// Load environment variables from .env file
require('dotenv').config();

// Import the express library
const express = require('express');

// Import the cors library for enabling CORS
const cors = require('cors');

// Import the scorer routes
const scorerRoutes = require('./routes/scorerRoutes');

// Create an Express application
const app = express();

// Enable CORS
app.use(cors());

// Enable JSON parsing for incoming requests
app.use(express.json());

// Use scorer routes for /api/scorers endpoint
app.use('/api/scorers', scorerRoutes);

// Export the app module
module.exports = app;