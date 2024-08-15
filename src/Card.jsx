// src/Card.js
import React, { useState } from "react";

const Card = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card">
      {isExpanded ? (
        <p>{text}</p>
      ) : (
        <>
          <p>{text.substring(0, 20)}...</p>
          <button onClick={() => setIsExpanded(true)}>Show More</button>
        </>
      )}
    </div>
  );
};

export default Card;

