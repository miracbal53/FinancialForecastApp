import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Admin durumu
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);

      // Kullanıcının admin olup olmadığını kontrol et
      const role = localStorage.getItem('role');
      if (role === 'admin') {
        setIsAdmin(true);
      }
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, []);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      setIsLoggedIn(false);
      setIsAdmin(false);
      alert('Başarıyla çıkış yaptınız.');
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <RouterLink className="navbar-brand" to="/">
            <span>Finexo</span>
          </RouterLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <RouterLink className="nav-link" to="/">
                      Anasayfa
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink className="nav-link" to="/#services">
                      Hizmetlerimiz
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink className="nav-link" to="/#about">
                      Hakkımızda
                    </RouterLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <RouterLink className="nav-link" to="/">
                      Anasayfa
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink className="nav-link" to="/borsalar">
                      Borsalar
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink className="nav-link" to="/ai">
                      Yapay Zeka Tahminleri
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink className="nav-link" to="/uzman">
                      Uzman Tahminleri
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink className="nav-link" to="/profil">
                      Profil
                    </RouterLink>
                  </li>
                  {isAdmin && (
                    <li className="nav-item">
                      <RouterLink className="nav-link" to="/admin">
                        Admin Paneli
                      </RouterLink>
                    </li>
                  )}
                </>
              )}
              <li className="nav-item">
                <RouterLink className="nav-link" to="/iletisim">
                  İletişim
                </RouterLink>
              </li>
            </ul>
          </div>

          <button onClick={handleLoginLogout} className="btn btn-primary">
            {isLoggedIn ? 'Çıkış Yap' : 'Giriş Yap'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
