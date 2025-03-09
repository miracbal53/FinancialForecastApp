import React, { useState, useEffect } from "react";
import "./StockStats.css";

const StockStats = () => {
  const [stocks, setStocks] = useState([
    { id: 1, name: "BIST 100", value: "7.851,89", change: "+2.14" },
    { id: 2, name: "DOLAR", value: "31.42", change: "-0.35" },
    { id: 3, name: "EURO", value: "33.95", change: "-0.28" },
    { id: 4, name: "ALTIN/G", value: "2.024", change: "+1.12" },
    { id: 5, name: "BTC/USD", value: "71.245", change: "+3.45" },
  ]);

  // Simüle edilmiş veri güncelleme (gerçek API entegrasyonu için bu kısım değiştirilecek)
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => ({
          ...stock,
          value: (
            parseFloat(stock.value.replace(",", "")) +
            (Math.random() - 0.5) * 10
          ).toFixed(2),
          change: (parseFloat(stock.change) + (Math.random() - 0.5)).toFixed(2),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stock-stats">
      <div className="stats-container">
        <div className="stats-scroll">
          {stocks.map((stock) => (
            <div key={stock.id} className="stat-item">
              <div className="stat-name">{stock.name}</div>
              <div className="stat-value">{stock.value}</div>
              <div
                className={`stat-change ${
                  parseFloat(stock.change) >= 0 ? "positive" : "negative"
                }`}
              >
                {parseFloat(stock.change) >= 0 ? "▲" : "▼"}{" "}
                {Math.abs(parseFloat(stock.change))}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockStats;
