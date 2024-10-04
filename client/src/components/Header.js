import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kullanıcının giriş durumunu takip eden state
  const navigate = useNavigate(); // Yönlendirme için useNavigate hook'u

  // Component mount olduğunda (sayfa yüklendiğinde) kullanıcının giriş durumunu kontrol ediyoruz
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Token varsa kullanıcı giriş yapmış durumda
    } else {
      setIsLoggedIn(false); // Token yoksa kullanıcı giriş yapmamış durumda
    }
  }, []);

  // Giriş veya çıkış işlemi
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Çıkış yapıldığında token'ı temizle ve giriş durumunu false yap
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      alert('Başarıyla çıkış yaptınız.');
      navigate('/'); // Anasayfaya yönlendir
    } else {
      // Giriş yap butonuna basıldığında login sayfasına yönlendir
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {/* Giriş yapılmamışsa gösterilecek linkler */}
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
                  <li className="nav-item">
                    <RouterLink className="nav-link" to="/#why">
                      Neden Bizi Seçmelisiniz?
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink className="nav-link" to="/#team">
                      Ekibimiz
                    </RouterLink>
                  </li>
                </>
              ) : (
                /* Giriş yapılmışsa gösterilecek linkler */
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
                </>
              )}
              {/* Her iki durumda da görünen İletişim linki */}
              <li className="nav-item">
                <RouterLink className="nav-link" to="/iletisim">
                  İletişim
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Giriş Yap / Çıkış Yap butonu */}
          <button onClick={handleLoginLogout} className="btn btn-primary">
            {isLoggedIn ? 'Çıkış Yap' : 'Giriş Yap'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
