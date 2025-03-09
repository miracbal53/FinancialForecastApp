import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);

      // Kullanıcının admin olup olmadığını kontrol et
      const role = localStorage.getItem("role");
      if (role === "admin") {
        setIsAdmin(true);
      }
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, []);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      setIsLoggedIn(false);
      setIsAdmin(false);
      alert("Başarıyla çıkış yaptınız.");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <RouterLink className="navbar-brand" to="/">
            Finexo
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
                    <RouterLink
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/"
                    >
                      Anasayfa
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink
                      className={`nav-link ${
                        location.pathname === "/hizmetler" ? "active" : ""
                      }`}
                      to="/hizmetler"
                    >
                      Hizmetlerimiz
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink
                      className={`nav-link ${
                        location.pathname === "/hakkimizda" ? "active" : ""
                      }`}
                      to="/hakkimizda"
                    >
                      Hakkımızda
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink
                      className={`nav-link ${
                        location.pathname === "/borsalar" ? "active" : ""
                      }`}
                      to="/borsalar"
                    >
                      Borsalar
                    </RouterLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <RouterLink
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/"
                    >
                      Anasayfa
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink
                      className={`nav-link ${
                        location.pathname === "/borsalar" ? "active" : ""
                      }`}
                      to="/borsalar"
                    >
                      Borsalar
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink
                      className={`nav-link ${
                        location.pathname === "/ai" ? "active" : ""
                      }`}
                      to="/ai"
                    >
                      Yapay Zeka Tahminleri
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink
                      className={`nav-link ${
                        location.pathname === "/uzman" ? "active" : ""
                      }`}
                      to="/uzman"
                    >
                      Uzman Tahminleri
                    </RouterLink>
                  </li>
                  <li className="nav-item">
                    <RouterLink
                      className={`nav-link ${
                        location.pathname === "/profil" ? "active" : ""
                      }`}
                      to="/profil"
                    >
                      Profil
                    </RouterLink>
                  </li>
                  {isAdmin && (
                    <li className="nav-item">
                      <RouterLink
                        className={`nav-link ${
                          location.pathname === "/admin" ? "active" : ""
                        }`}
                        to="/admin"
                      >
                        Admin Paneli
                      </RouterLink>
                    </li>
                  )}
                </>
              )}
              <li className="nav-item">
                <RouterLink
                  className={`nav-link ${
                    location.pathname === "/iletisim" ? "active" : ""
                  }`}
                  to="/iletisim"
                >
                  İletişim
                </RouterLink>
              </li>
            </ul>
            <button onClick={handleLoginLogout} className="btn btn-primary">
              {isLoggedIn ? "Çıkış Yap" : "Giriş Yap"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
