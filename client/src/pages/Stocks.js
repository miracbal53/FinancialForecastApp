// src/pages/Stocks.js
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StockStats from "../components/StockStats";
import "./Stocks.css";
import InfoSection from "../components/InfoSection";

const Stocks = () => {
  const [activeTab, setActiveTab] = useState("bist");
  const [marketData, setMarketData] = useState({
    bist: [
      {
        symbol: "THYAO",
        name: "Türk Hava Yolları",
        lastPrice: "256.40",
        change24h: "+2.15",
        high24h: "258.90",
        low24h: "253.10",
        volume24h: "854.3M",
        volumeTL: "2.18B",
        marketCap: "354.2B",
        prevClose: "251.00",
      },
      {
        symbol: "GARAN",
        name: "Garanti Bankası",
        lastPrice: "93.45",
        change24h: "+1.85",
        high24h: "94.20",
        low24h: "92.15",
        volume24h: "632.1M",
        volumeTL: "589.4M",
        marketCap: "392.5B",
        prevClose: "91.75",
      },
      {
        symbol: "ASELS",
        name: "Aselsan",
        lastPrice: "45.82",
        change24h: "-0.65",
        high24h: "46.34",
        low24h: "45.56",
        volume24h: "245.6M",
        volumeTL: "112.3M",
        marketCap: "165.8B",
        prevClose: "46.12",
      },
      {
        symbol: "SISE",
        name: "Şişe Cam",
        lastPrice: "62.15",
        change24h: "+3.25",
        high24h: "62.85",
        low24h: "60.40",
        volume24h: "321.4M",
        volumeTL: "199.6M",
        marketCap: "186.4B",
        prevClose: "60.20",
      },
      {
        symbol: "KRDMD",
        name: "Kardemir",
        lastPrice: "18.92",
        change24h: "+1.12",
        high24h: "19.15",
        low24h: "18.64",
        volume24h: "412.8M",
        volumeTL: "78.1M",
        marketCap: "113.5B",
        prevClose: "18.71",
      },
      {
        symbol: "EREGL",
        name: "Ereğli Demir Çelik",
        lastPrice: "42.38",
        change24h: "-0.85",
        high24h: "42.94",
        low24h: "42.12",
        volume24h: "286.5M",
        volumeTL: "121.4M",
        marketCap: "147.8B",
        prevClose: "42.74",
      },
      {
        symbol: "AKBNK",
        name: "Akbank",
        lastPrice: "37.64",
        change24h: "+2.45",
        high24h: "37.92",
        low24h: "36.78",
        volume24h: "524.7M",
        volumeTL: "197.5M",
        marketCap: "195.7B",
        prevClose: "36.74",
      },
      {
        symbol: "YKBNK",
        name: "Yapı Kredi",
        lastPrice: "28.16",
        change24h: "+1.95",
        high24h: "28.46",
        low24h: "27.62",
        volume24h: "378.2M",
        volumeTL: "106.5M",
        marketCap: "142.3B",
        prevClose: "27.62",
      },
    ],
    crypto: [
      {
        symbol: "BTC",
        name: "Bitcoin",
        lastPrice: "64,285.50",
        change24h: "+2.34",
        high24h: "64,890.00",
        low24h: "63,150.00",
        volume24h: "42.5B",
        volumeUSDT: "42.5B",
        marketCap: "1.26T",
        prevClose: "62,820.00",
      },
      {
        symbol: "ETH",
        name: "Ethereum",
        lastPrice: "3,285.75",
        change24h: "+1.85",
        high24h: "3,315.20",
        low24h: "3,245.50",
        volume24h: "18.2B",
        volumeUSDT: "18.2B",
        marketCap: "395.4B",
        prevClose: "3,225.40",
      },
      {
        symbol: "BNB",
        name: "Binance Coin",
        lastPrice: "465.82",
        change24h: "-0.95",
        high24h: "472.15",
        low24h: "462.30",
        volume24h: "2.8B",
        volumeUSDT: "2.8B",
        marketCap: "71.8B",
        prevClose: "470.25",
      },
      {
        symbol: "SOL",
        name: "Solana",
        lastPrice: "125.45",
        change24h: "+4.25",
        high24h: "127.80",
        low24h: "120.15",
        volume24h: "3.2B",
        volumeUSDT: "3.2B",
        marketCap: "54.2B",
        prevClose: "120.34",
      },
      {
        symbol: "ADA",
        name: "Cardano",
        lastPrice: "0.845",
        change24h: "+1.15",
        high24h: "0.856",
        low24h: "0.835",
        volume24h: "985.4M",
        volumeUSDT: "985.4M",
        marketCap: "29.8B",
        prevClose: "0.836",
      },
      {
        symbol: "AVAX",
        name: "Avalanche",
        lastPrice: "42.65",
        change24h: "+3.45",
        high24h: "43.20",
        low24h: "41.15",
        volume24h: "845.2M",
        volumeUSDT: "845.2M",
        marketCap: "15.4B",
        prevClose: "41.23",
      },
      {
        symbol: "DOT",
        name: "Polkadot",
        lastPrice: "9.85",
        change24h: "-1.25",
        high24h: "10.05",
        low24h: "9.75",
        volume24h: "425.8M",
        volumeUSDT: "425.8M",
        marketCap: "12.6B",
        prevClose: "9.98",
      },
      {
        symbol: "MATIC",
        name: "Polygon",
        lastPrice: "0.965",
        change24h: "+2.85",
        high24h: "0.978",
        low24h: "0.942",
        volume24h: "568.3M",
        volumeUSDT: "568.3M",
        marketCap: "9.8B",
        prevClose: "0.938",
      },
    ],
    forex: [
      {
        symbol: "USD/TRY",
        name: "Dolar/TL",
        lastPrice: "32.4520",
        change24h: "+0.15",
        high24h: "32.4850",
        low24h: "32.3950",
        volume24h: "12.4B",
        range: "32.3950-32.4850",
        prevClose: "32.4035",
      },
      {
        symbol: "EUR/TRY",
        name: "Euro/TL",
        lastPrice: "35.1240",
        change24h: "-0.25",
        high24h: "35.2150",
        low24h: "35.0850",
        volume24h: "8.2B",
        range: "35.0850-35.2150",
        prevClose: "35.2120",
      },
      {
        symbol: "GBP/TRY",
        name: "Sterlin/TL",
        lastPrice: "41.0520",
        change24h: "-0.35",
        high24h: "41.1850",
        low24h: "40.9850",
        volume24h: "4.8B",
        range: "40.9850-41.1850",
        prevClose: "41.1960",
      },
      {
        symbol: "EUR/USD",
        name: "Euro/Dolar",
        lastPrice: "1.0825",
        change24h: "+0.12",
        high24h: "1.0845",
        low24h: "1.0810",
        volume24h: "25.6B",
        range: "1.0810-1.0845",
        prevClose: "1.0812",
      },
      {
        symbol: "GBP/USD",
        name: "Sterlin/Dolar",
        lastPrice: "1.2645",
        change24h: "-0.18",
        high24h: "1.2680",
        low24h: "1.2625",
        volume24h: "15.2B",
        range: "1.2625-1.2680",
        prevClose: "1.2668",
      },
      {
        symbol: "USD/JPY",
        name: "Dolar/Yen",
        lastPrice: "151.85",
        change24h: "+0.45",
        high24h: "152.05",
        low24h: "151.45",
        volume24h: "18.4B",
        range: "151.45-152.05",
        prevClose: "151.17",
      },
      {
        symbol: "XAU/USD",
        name: "Altın/Dolar",
        lastPrice: "2,345.80",
        change24h: "+0.85",
        high24h: "2,352.40",
        low24h: "2,338.60",
        volume24h: "6.8B",
        range: "2,338.60-2,352.40",
        prevClose: "2,326.10",
      },
      {
        symbol: "XAG/USD",
        name: "Gümüş/Dolar",
        lastPrice: "27.85",
        change24h: "+1.25",
        high24h: "28.05",
        low24h: "27.45",
        volume24h: "2.4B",
        range: "27.45-28.05",
        prevClose: "27.51",
      },
    ],
  });

  // Simüle edilmiş veri güncellemesi
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setMarketData((prevData) => {
        const updateMarketItem = (item) => {
          // Fiyat değişimi için rastgele değer (-0.5% ile +0.5% arası)
          const priceChange = (Math.random() - 0.5) * 0.01;
          const currentPrice = parseFloat(item.lastPrice.replace(/,/g, ""));
          const newPrice = currentPrice * (1 + priceChange);

          // 24 saatlik değişim için güncelleme
          const currentChange = parseFloat(item.change24h);
          const newChange = currentChange + (Math.random() - 0.5) * 0.2;

          // Hacim için rastgele değişim
          const volumeChange = 1 + (Math.random() - 0.5) * 0.02;

          return {
            ...item,
            lastPrice: item.symbol.includes("BTC")
              ? newPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : item.symbol.includes("ETH")
              ? newPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : item.symbol.includes("USD/TRY") ||
                item.symbol.includes("EUR/TRY") ||
                item.symbol.includes("GBP/TRY")
              ? newPrice.toFixed(4)
              : newPrice.toFixed(2),
            change24h: newChange.toFixed(2),
            volume24h: item.volume24h.includes("B")
              ? (parseFloat(item.volume24h) * volumeChange).toFixed(1) + "B"
              : (parseFloat(item.volume24h) * volumeChange).toFixed(1) + "M",
            high24h:
              newPrice > parseFloat(item.high24h.replace(/,/g, ""))
                ? newPrice.toFixed(2)
                : item.high24h,
            low24h:
              newPrice < parseFloat(item.low24h.replace(/,/g, ""))
                ? newPrice.toFixed(2)
                : item.low24h,
          };
        };

        return {
          bist: prevData.bist.map(updateMarketItem),
          crypto: prevData.crypto.map(updateMarketItem),
          forex: prevData.forex.map(updateMarketItem),
        };
      });
    }, 3000); // Her 3 saniyede bir güncelleme

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div className="stocks-page">
      <Header />
      <div className="stocks-content">
        <div className="container">
          <div className="stocks-header">
            <h1>
              Anlık <span>Piyasalar</span>
            </h1>
            <p>
              Borsa İstanbul, Kripto ve Forex piyasalarını anlık takip edin.
            </p>
          </div>

          <StockStats />

          <div className="market-tables">
            <div className="market-tabs">
              <button
                className={`market-tab ${activeTab === "bist" ? "active" : ""}`}
                onClick={() => setActiveTab("bist")}
              >
                BIST <i className="fas fa-chart-line ms-5"></i>
              </button>
              <button
                className={`market-tab ${
                  activeTab === "crypto" ? "active" : ""
                }`}
                onClick={() => setActiveTab("crypto")}
              >
                Kripto <i className="fas fa-coins ms-5"></i>
              </button>
              <button
                className={`market-tab ${
                  activeTab === "forex" ? "active" : ""
                }`}
                onClick={() => setActiveTab("forex")}
              >
                Forex <i className="fas fa-exchange-alt ms-5"></i>
              </button>
            </div>

            <div className="market-section">
              <div className="table-responsive">
                <table className="market-table">
                  <thead>
                    <tr>
                      <th>Sembol</th>
                      <th>İsim</th>
                      <th>Son Fiyat</th>
                      <th>24s Değişim</th>
                      <th>24s En Yüksek</th>
                      <th>24s En Düşük</th>
                      <th>24s Hacim</th>
                      <th>24s Hacim (TL/USDT)</th>
                      <th>Piyasa Değeri</th>
                      <th>Önceki Kapanış</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketData[activeTab].map((item, index) => (
                      <tr key={index}>
                        <td className="symbol">{item.symbol}</td>
                        <td>{item.name}</td>
                        <td className="price">{item.lastPrice}</td>
                        <td
                          className={`change ${
                            parseFloat(item.change24h) >= 0
                              ? "positive"
                              : "negative"
                          }`}
                        >
                          {parseFloat(item.change24h) >= 0 ? "▲" : "▼"}{" "}
                          {Math.abs(parseFloat(item.change24h))}%
                        </td>
                        <td className="high">{item.high24h}</td>
                        <td className="low">{item.low24h}</td>
                        <td>{item.volume24h}</td>
                        <td>
                          {activeTab === "crypto"
                            ? item.volumeUSDT
                            : activeTab === "forex"
                            ? item.range
                            : item.volumeTL}
                        </td>
                        <td>{item.marketCap}</td>
                        <td>{item.prevClose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Stocks;
