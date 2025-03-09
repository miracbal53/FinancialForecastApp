import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";
import InfoSection from "../components/InfoSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/communication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
        });
      } else {
        setStatus({
          type: 'error',
          message: data.message
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Bir hata oluştu, lütfen tekrar deneyin.'
      });
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <div className="contact-container">
        <div className="container">
          <div className="contact-header">
            <h1>
              İletişime <span>Geçin</span>
            </h1>
            <p>
              Sorularınız ve önerileriniz için bize ulaşın. Size yardımcı
              olmaktan mutluluk duyarız.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <div className="icon">
                  <img src="/images/address.png" alt="Adres" />
                </div>
                <div className="details">
                  <h3>Adres</h3>
                  <p>
                    Finans Mah. Borsa Cad. No:123
                    <br />
                    İstanbul, Türkiye
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <img src="/images/phone-call.png" alt="Telefon" />
                </div>
                <div className="details">
                  <h3>Telefon</h3>
                  <p>+90 (212) 555 0123</p>
                  <p>+90 (212) 555 0124</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <img src="/images/email.png" alt="Email" />
                </div>
                <div className="details">
                  <h3>Email</h3>
                  <p>info@finexo.com</p>
                  <p>destek@finexo.com</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Adınız Soyadınız</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>

                <div className="form-group">
                  <label>Email Adresiniz</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email adresinizi girin"
                  />
                </div>

                <div className="form-group">
                  <label>Konu</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Mesajınızın konusunu girin"
                  />
                </div>

                <div className="form-group">
                  <label>Mesajınız</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Mesajınızı buraya yazın"
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Mesaj Gönder
                </button>

                {status.message && (
                  <div className={`status-message ${status.type}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Contact;
