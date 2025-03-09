import React, { useState } from "react";
import "./Subscription.css";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      name: "Temel Plan",
      price: "199",
      period: "aylık",
      features: [
        "Temel piyasa analizleri",
        "Günlük piyasa özetleri",
        "5 adet hisse takibi",
        "Standart teknik göstergeler",
        "E-posta bildirimleri",
      ],
      color: "#3498db",
    },
    {
      id: 2,
      name: "Pro Plan",
      price: "399",
      period: "aylık",
      features: [
        "Gelişmiş piyasa analizleri",
        "Gerçek zamanlı piyasa verileri",
        "20 adet hisse takibi",
        "Gelişmiş teknik göstergeler",
        "Özel alım-satım sinyalleri",
        "7/24 öncelikli destek",
        "Mobil uygulama erişimi",
      ],
      color: "#2ecc71",
      popular: true,
    },
    {
      id: 3,
      name: "Kurumsal Plan",
      price: "999",
      period: "aylık",
      features: [
        "Tam kapsamlı piyasa analizleri",
        "Sınırsız hisse takibi",
        "Yapay zeka destekli analizler",
        "Özel portföy yönetimi",
        "Kişiselleştirilmiş danışmanlık",
        "API erişimi",
        "Özel raporlar ve analizler",
        "7/24 VIP destek",
      ],
      color: "#9b59b6",
    },
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    // Burada seçilen plan için gerekli işlemler yapılabilir
    // Örneğin: Ödeme sayfasına yönlendirme, modal açma vb.
  };

  return (
    <div className="subscription-section">
      <div className="container">
        <div className="subscription-header">
          <h2>Abonelik Planları</h2>
          <p>
            Size en uygun planı seçin ve finansal dünyayı yakından takip edin
          </p>
        </div>

        <div className="subscription-plans">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={"plan-card " + (plan.popular ? "popular" : "")}
              style={{ "--plan-color": plan.color }}
            >
              {plan.popular && <div className="popular-badge">En Popüler</div>}
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">₺</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
              </div>

              <div className="plan-features">
                {plan.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={
                  "plan-button " + (selectedPlan === plan.id ? "selected" : "")
                }
                onClick={() => handlePlanSelect(plan.id)}
              >
                {selectedPlan === plan.id ? "Seçildi" : "Planı Seç"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
