// src/pages/Stocks.js
import React from 'react';
import StockCard from '../components/StockCard';
import turkishFlag from '../assets/hd-turk-bayragi-png-2.png'; // Türk bayrağı resmi

const Stocks = () => {
  const stocks = [
    {
      title: 'Borsa İstanbul',
      flagSrc: turkishFlag,
      type: 'Türk Lirası',
    },
    {
      title: 'Kripto',
      flagSrc: null, // Kripto için bayrak yok
      type: 'Kripto',
    },
    {
      title: 'Forex',
      flagSrc: null,
      type: 'Forex',
    },
  ];

  return (
    <div className="stocks-section">
      <h2>Borsalar</h2>
      <div className="stocks-container">
        {stocks.map((stock, index) => (
          <StockCard
            key={index}
            title={stock.title}
            flagSrc={stock.flagSrc}
            type={stock.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Stocks;
