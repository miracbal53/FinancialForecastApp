import React, { useState } from "react";
import "./Subscription.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Temel Plan",
      price: "199",
      period: "aylık",
      features: [
        "BIST Verileri",
        "Temel Analiz",
        "Email Desteği",
        "5 Adet Alarm Hakkı",
      ],
      color: "#3498db",
    },
    {
      name: "Pro Plan",
      price: "399",
      period: "aylık",
      features: [
        "BIST & Kripto Verileri",
        "Temel & Teknik Analiz",
        "7/24 Destek",
        "Sınırsız Alarm Hakkı",
        "AI Tahmin Modeli",
      ],
      color: "#2ecc71",
      popular: true,
    },
    {
      name: "Kurumsal",
      price: "899",
      period: "aylık",
      features: [
        "Tüm Piyasa Verileri",
        "Gelişmiş Analiz Araçları",
        "Öncelikli Destek",
        "API Erişimi",
        "Özel Raporlama",
        "Çoklu Kullanıcı",
      ],
      color: "#9b59b6",
    },
  ];

  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);
    // Burada seçilen plan için işlemler yapılabilir
  };

  return (
    <div className="subscription-page">
      <Header />
      <div className="subscription-container">
        <div className="subscription-header">
          <h2>
            Abonelik <span>Planları</span>
          </h2>
          <p>Size en uygun planı seçin ve finansal verilerinize hemen erişin</p>
        </div>
        <div className="plans-container">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <div className="popular-badge">En Popüler</div>}
              <div className="plan-content">
                <div className="plan-details">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="currency">₺</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                  <div className="features">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="button-container">
                  <button
                    className="select-plan-button"
                    onClick={() => handlePlanSelect(plan.name)}
                    style={{
                      backgroundColor:
                        selectedPlan === plan.name ? "#28a745" : plan.color,
                    }}
                  >
                    {selectedPlan === plan.name ? "Seçildi" : "Planı Seç"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscription;
