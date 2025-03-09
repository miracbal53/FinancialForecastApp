import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Services.css";
import InfoSection from "../components/InfoSection";

const Services = () => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Bu içeriği görüntülemek için lütfen giriş yapın.");
      navigate("/login");
    } else {
      // Giriş yapılmışsa detay sayfasına yönlendir
      // TODO: Detay sayfası hazır olduğunda burası güncellenecek
      alert("Detay sayfası yakında eklenecektir.");
    }
  };

  const services = [
    {
      id: 1,
      title: "Currency Wallet",
      description:
        "Güvenli ve kullanıcı dostu dijital cüzdan hizmeti ile varlıklarınızı kolayca yönetin. Anlık işlemler, düşük komisyonlar ve 7/24 erişim imkanı.",
      image: "/images/s1.png",
    },
    {
      id: 2,
      title: "Security Storage",
      description:
        "En son teknoloji güvenlik sistemleri ile korunan depolama çözümleri. Çoklu imza desteği, soğuk cüzdan entegrasyonu ve düzenli yedekleme hizmetleri.",
      image: "/images/s2.png",
    },
    {
      id: 3,
      title: "Expert Support",
      description:
        "Deneyimli finans uzmanlarımızdan 7/24 destek alın. Piyasa analizleri, teknik destek ve kişiselleştirilmiş yatırım tavsiyeleri.",
      image: "/images/s3.png",
    },
    {
      id: 4,
      title: "Market Analysis",
      description:
        "Gelişmiş analiz araçları ve gerçek zamanlı piyasa verileri ile bilinçli yatırım kararları alın. Teknik ve temel analiz desteği.",
      image: "/images/s1.png",
    },
    {
      id: 5,
      title: "Portfolio Management",
      description:
        "Profesyonel portföy yönetimi hizmeti ile yatırımlarınızı optimize edin. Risk analizi, çeşitlendirme stratejileri ve performans raporlaması.",
      image: "/images/s2.png",
    },
    {
      id: 6,
      title: "Trading Alerts",
      description:
        "Özelleştirilebilir alım-satım alarmları ile fırsatları kaçırmayın. Fiyat hedefleri, teknik göstergeler ve piyasa haberleri bildirimleri.",
      image: "/images/s3.png",
    },
  ];

  return (
    <div className="services-page">
      <Header />
      <div className="services-container">
        <div className="container">
          <div className="services-header">
            <h1>
              Finansal <span>Hizmetlerimiz</span>
            </h1>
            <p>
              Profesyonel finans dünyasında{" "}
              <span className="accent-text">güvenilir çözüm ortağınız</span>.
              Size özel geliştirilmiş finansal hizmetlerimiz ile yatırımlarınızı
              güvenle yönetin ve geleceğinizi şekillendirin.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="learn-more" onClick={handleDetailClick}>
                    Detaylı Bilgi
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Services;
