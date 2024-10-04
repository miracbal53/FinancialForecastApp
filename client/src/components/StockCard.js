// src/components/StockCard.js
import React from 'react';

const StockCard = ({ title, flagSrc, type }) => {
  return (
    <div className="stock-card">
      {flagSrc && <img src={flagSrc} alt="Flag" className="flag-icon" />} {/* Bayrağı eklemek için */}
      <h3>{title}</h3>
      <p>{type}</p>
      <button className="btn">Tahmini Gör</button>
    </div>
  );
};

export default StockCard;
