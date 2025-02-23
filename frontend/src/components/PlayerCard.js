import React from 'react';
import './PlayerCard.css';

// PlayerCard component to display player details
function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <h2>{player.name}</h2> {/* Display player name */}
      <p>Goals: {player.goals}</p> {/* Display number of goals */}
      <p>Position: {player.position}</p> {/* Display player position */}
      <p>Club: {player.club}</p> {/* Display player's club */}
      <p>Date of Birth: {player.dateOfBirth}</p> {/* Display date of birth */}
    </div>
  );
}

export default PlayerCard;