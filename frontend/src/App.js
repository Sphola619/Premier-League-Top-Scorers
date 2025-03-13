import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import axios from 'axios';
import premierLeagueImg from './premier-league-background-image.webp';
import premierLeague4Img from './premier-league-top-four.webp';
import moSalahImg from './mohamed-salah.webp';
import colePalmerImg from './cole-palmer.webp';
import brunoFernandesImg from './bruno-fernandes.jpg';
import erlingHaalandImg from './erling-haaland.webp';

function App() {
  // State for player search functionality
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState('');

  // State for background animation
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [premierLeagueImg, premierLeague4Img, moSalahImg, colePalmerImg, brunoFernandesImg, erlingHaalandImg];

  // Effect for background animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Function to handle the search operation
  const handleSearch = async () => {
    setError(''); // Clear previous errors
    setPlayerData(null); // Clear previous player data
    try {
      const response = await axios.get('http://localhost:5000/api/scorers');
      const player = response.data.find(scorer =>
        scorer.player.name.toLowerCase() === playerName.toLowerCase()
      );
      if (player) {
        setPlayerData({
          name: player.player.name,
          goals: player.goals,
          position: response.data.indexOf(player) + 1,
          club: player.team.name,
          dateOfBirth: player.player.dateOfBirth,
        });
      } else {
        setError('Player not found.');
      }
    } catch (error) {
      setError('Error fetching data.');
    }
  };

  // Inline styles for the App div with dynamic background
  const appStyle = {
    backgroundImage: `url(${backgrounds[bgIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
    color: 'black',
    transition: 'background-image 1s ease-in-out', // Smooth transition between images
  };

  return (
    <div className="App" style={appStyle}>
      <h1>Premier League Top Scorers</h1>
      <input
        type="text"
        placeholder="Enter player name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error">{error}</p>}
      {playerData && <PlayerCard player={playerData} />}
    </div>
  );
}

export default App;