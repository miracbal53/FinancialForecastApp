import React, { useState } from 'react';

const AdminDashboard = () => {
  const [market, setMarket] = useState('');
  const [prediction, setPrediction] = useState('');
  const [message, setMessage] = useState('');

  const handlePredictionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admin/predictions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ market, prediction }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error submitting prediction:', error);
    }
  };

  return (
    <div>
      <h2>Admin Paneli - Tahmin Girişi</h2>
      <form onSubmit={handlePredictionSubmit}>
        <div>
          <label>Borsa Türü:</label>
          <select value={market} onChange={(e) => setMarket(e.target.value)} required>
            <option value="">Seçin</option>
            <option value="bist">Bist</option>
            <option value="kripto">Kripto</option>
            <option value="forex">Forex</option>
          </select>
        </div>
        <div>
          <label>Tahmin:</label>
          <textarea
            value={prediction}
            onChange={(e) => setPrediction(e.target.value)}
            placeholder="Tahmininizi giriniz"
            required
          />
        </div>
        <button type="submit">Tahmin Ekle</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminDashboard;
