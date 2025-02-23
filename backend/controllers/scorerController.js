// filepath: /c:/Users/201614468/Downloads/Projects/top-premier-league-scorers/backend/controllers/scorerController.js
// Import the axios library for making HTTP requests
const axios = require('axios');

// Load environment variables from .env file
require('dotenv').config();

// Define the API key for authentication with the Football-Data.org API
const API_KEY = process.env.API_KEY;

// Define the API URL for fetching top scorers in the Premier League
const API_URL = 'https://api.football-data.org/v4/competitions/PL/scorers';

// Export the getTopScorers function to handle requests for top scorers
exports.getTopScorers = async (req, res) => {
  try {
    // Make a GET request to the Football-Data.org API to fetch top scorers
    const response = await axios.get(API_URL, {
      headers: { 'X-Auth-Token': API_KEY } // Include the API key in the request headers
    });
    // Send the top scorers data as a JSON response
    res.json(response.data.scorers);
  } catch (error) {
    // Handle any errors that occur during the API request
    res.status(500).json({ message: 'Error fetching top scorers' });
  }
};