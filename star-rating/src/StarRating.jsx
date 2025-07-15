import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './App.css'

function StarRating({ startNumbers = 10 }) {
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedStar, setSelectedStar] = useState(null);

  function handleClick(idx) {
    setSelectedStar(idx);
  }

  function handleMouseMove(idx) {
    setHoveredStar(idx);
  }

  function handleMouseLeave() {
    setHoveredStar(null);
  }

  return (
    <div className="stars">
      {[...Array(startNumbers)].map((_, index) => (
        
        <FaStar
          key={index}
          className = 'star'
          color={
  hoveredStar !== null
    ? index <= hoveredStar
      ? 'yellow'
      : 'grey'
    : selectedStar !== null && index <= selectedStar
      ? 'yellow'
      : 'grey'
}

          onClick={() => handleClick(index)}
          onMouseMove={() => handleMouseMove(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

export default StarRating;
