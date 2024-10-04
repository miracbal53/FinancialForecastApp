import React, { useState } from 'react';

const Subscription = () => {
  const [selectedMarket, setSelectedMarket] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleSubscription = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ market: selectedMarket }),
      });

      const data = await response.json();
      setSubscriptionMessage(data.message);
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <div>
      <h2>Abonelik Satın Al</h2>
      <select value={selectedMarket} onChange={(e) => setSelectedMarket(e.target.value)}>
        <option value="">Borsa Seç</option>
        <option value="bist">Bist</option>
        <option value="kripto">Kripto</option>
        <option value="forex">Forex</option>
      </select>
      <button onClick={handleSubscription}>Abonelik Satın Al</button>
      {subscriptionMessage && <p>{subscriptionMessage}</p>}
    </div>
  );
};

export default Subscription;
