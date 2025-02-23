import React, { useState } from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import axios from 'axios';

function App() {
  // State variables to manage player name input, player data, and error messages
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState('');

  // Function to handle the search operation
  const handleSearch = async () => {
    setError(''); // Clear any previous error messages
    setPlayerData(null); // Clear any previous player data
    try {
      // Make a GET request to the backend API to fetch top scorers
      const response = await axios.get('http://localhost:5000/api/scorers');
      // Find the player in the response data that matches the entered player name
      const player = response.data.find(scorer => scorer.player.name.toLowerCase() === playerName.toLowerCase());
      if (player) {
        // Set the player data if the player is found
        setPlayerData({
          name: player.player.name,
          goals: player.goals,
          position: response.data.indexOf(player) + 1,
          club: player.team.name,
          dateOfBirth: player.player.dateOfBirth // Add date of birth
        });
      } else {
        // Set an error message if the player is not found
        setError('Player not found.');
      }
    } catch (error) {
      // Set an error message if there is an issue fetching data
      setError('Error fetching data.');
    }
  };

  return (
    <div className="App" style={{ 
      backgroundImage: `url('/premier-league-background-image.webp')`, // Set background image
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh',
      color: 'black'
    }}>
      <h1>Premier League Top Scorers</h1>
      <input
        type="text"
        placeholder="Enter player name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)} // Update player name state on input change
      />
      <button onClick={handleSearch}>Search</button> {/* Trigger search on button click */}
      {error && <p className="error">{error}</p>} {/* Display error message if any */}
      {playerData && <PlayerCard player={playerData} />} {/* Display player data if available */}
    </div>
  );
}

export default App;