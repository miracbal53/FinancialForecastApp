import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";
import InfoSection from "../components/InfoSection";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Miraç Bal",
      position: "CEO & Kurucu",
      image: "/images/mirac.jpeg",
      description: "15+ yıllık finans ve teknoloji deneyimi",
    },
    {
      id: 2,
      name: "Sami Yetişken",
      position: "Finans Direktörü",
      image: "/images/team-3.jpg",
      description: "Uluslararası finans piyasaları uzmanı",
    },
    {
      id: 3,
      name: "Ali Arslan",
      position: "Teknoloji Direktörü",
      image: "/images/bio.jpeg",
      description: "Yapay zeka ve blockchain teknolojileri uzmanı",
    },
  ];

  return (
    <div className="about-page">
      <Header />
      <div className="about-container">
        <div className="container">
          <div className="about-header">
            <h2>
              Hakkımızda <span>Finexo</span>
            </h2>
            <p>
              Güvenilir finansal çözümler ve uzman kadromuzla,
              yatırımcılarımızın geleceğini şekillendiriyoruz. Finans
              teknolojilerindeki yenilikçi yaklaşımımızla sizlere hizmet
              vermekten gurur duyuyoruz.
            </p>
          </div>

          {/* Vision Mission Section */}
          <div className="vision-mission">
            <div className="vision-box">
              <div className="icon">
                <i className="fas fa-eye"></i>
              </div>
              <h2>Vizyonumuz</h2>
              <p>
                Finans teknolojilerini kullanarak, yatırımcıların finansal
                kararlarını daha bilinçli ve güvenli bir şekilde almalarını
                sağlamak ve finansal özgürlüklerine giden yolda onlara rehberlik
                etmek.
              </p>
            </div>
            <div className="mission-box">
              <div className="icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h2>Misyonumuz</h2>
              <p>
                En son teknoloji ve uzman kadromuzla, kullanıcılarımıza
                güvenilir, şeffaf ve etkili finansal çözümler sunarak, onların
                yatırım hedeflerine ulaşmalarına yardımcı olmak.
              </p>
            </div>
          </div>

          {/* Company Info Section */}
          <div className="company-info">
            <div className="info-content">
              <h2>Biz Kimiz?</h2>
              <p>
                2023 yılında kurulan Finexo, finans teknolojileri alanında öncü
                bir şirket olarak, yapay zeka ve blockchain teknolojilerini
                kullanarak yatırımcılara yenilikçi çözümler sunmaktadır.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <h3>10K+</h3>
                  <p>Aktif Kullanıcı</p>
                </div>
                <div className="stat-item">
                  <h3>50M+</h3>
                  <p>İşlem Hacmi</p>
                </div>
                <div className="stat-item">
                  <h3>%99.9</h3>
                  <p>Müşteri Memnuniyeti</p>
                </div>
              </div>
            </div>
            <div className="info-image">
              <img src="/images/about-img.jpg" alt="Finexo Office" />
            </div>
          </div>

          {/* Team Section */}
          <div className="team-section">
            <h2>Ekibimiz</h2>
            <p>Uzman kadromuzla size en iyi hizmeti sunuyoruz</p>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <h4>{member.position}</h4>
                    <p>{member.description}</p>
                    <div className="social-links">
                      <a href="#" className="social-link">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h2>Değerlerimiz</h2>
            <div className="values-grid">
              <div className="value-item">
                <i className="fas fa-shield-alt"></i>
                <h3>Güvenilirlik</h3>
                <p>
                  Müşterilerimizin güvenliği ve gizliliği bizim için en önemli
                  öncelik
                </p>
              </div>
              <div className="value-item">
                <i className="fas fa-chart-line"></i>
                <h3>Yenilikçilik</h3>
                <p>Sürekli gelişen teknolojileri takip eder ve uygularız</p>
              </div>
              <div className="value-item">
                <i className="fas fa-handshake"></i>
                <h3>Şeffaflık</h3>
                <p>Tüm işlemlerimizde açık ve dürüst bir yaklaşım benimseriz</p>
              </div>
              <div className="value-item">
                <i className="fas fa-users"></i>
                <h3>Müşteri Odaklılık</h3>
                <p>Müşterilerimizin ihtiyaçları her zaman önceliğimizdir</p>
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

export default About;
