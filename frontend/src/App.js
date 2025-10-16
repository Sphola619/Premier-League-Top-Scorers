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
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState('');
  const [bgIndex, setBgIndex] = useState(0);

  const backgrounds = [premierLeagueImg, premierLeague4Img, moSalahImg, colePalmerImg, brunoFernandesImg, erlingHaalandImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = async () => {
    setError('');
    setPlayerData(null);
    try {
      // Replace localhost with your backend deployment URL
      const response = await axios.get('https://premier-league-top-scorers.onrender.com');
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

  const appStyle = {
    backgroundImage: `url(${backgrounds[bgIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
    color: 'black',
    transition: 'background-image 1s ease-in-out',
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
