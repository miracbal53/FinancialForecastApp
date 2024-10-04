import React, { useEffect, useState } from 'react';

const Predictions = () => {
  const [predictions, setPredictions] = useState([]);
  const [market, setMarket] = useState('');

  const fetchPredictions = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/predictions?market=${market}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setPredictions(data.predictions);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    }
  };

  useEffect(() => {
    if (market) {
      fetchPredictions();
    }
  }, [market]);

  return (
    <div>
      <h2>Tahminler</h2>
      <select value={market} onChange={(e) => setMarket(e.target.value)}>
        <option value="">Borsa Seç</option>
        <option value="bist">Bist</option>
        <option value="kripto">Kripto</option>
        <option value="forex">Forex</option>
      </select>

      {predictions.length > 0 ? (
        <ul>
          {predictions.map((prediction, index) => (
            <li key={index}>{prediction}</li>
          ))}
        </ul>
      ) : (
        <p>Tahmin bulunamadı</p>
      )}
    </div>
  );
};

export default Predictions;
