import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate ekledik
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

const Register = () => {
    const navigate = useNavigate(); // useNavigate hook'unu tanımlıyoruz
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [favoriteExchange, setFavoriteExchange] = useState('');
    const [occupation, setOccupation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Form gönderildiğinde çalışacak olan fonksiyon
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Şifre kontrolü
        if (password !== confirmPassword) {
            alert("Şifreler uyuşmuyor");
            return;
        }

        // Telefon numarası kontrolü
        const phoneRegex = /^05\d{9}$/;
        if (!phoneRegex.test(phoneNumber)) {
            setErrorMessage('Telefon numarası 05 ile başlamalı ve 11 haneli olmalıdır.');
            return;
        }

        try {
            // API'ye POST isteği gönderiyoruz
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    password,
                    favoriteExchange,
                    occupation,
                }),
            });

            // API'den gelen yanıtı kontrol ediyoruz
            const data = await response.json();
            if (response.ok) {
                alert('Kayıt başarılı!');  // Kayıt başarılı
                navigate('/login');  // Başarılı kayıt sonrası giriş sayfasına yönlendirme
            } else {
                setErrorMessage(data.message);  // Hata mesajını göster
            }
        } catch (error) {
            console.error('Hata:', error);
            setErrorMessage('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    };

    return (
        <div>
            <Header />
            <section className="register_section">
                <div className="container">
                    <h2>Kayıt Ol</h2>
                    {errorMessage && <p className="text-danger">{errorMessage}</p>} {/* Hata mesajını göster */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Ad</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Adınızı girin"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Soyad</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Soyadınızı girin"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="E-posta adresinizi girin"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Telefon Numarası</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="(05xx) ile başlayacak şekilde girin"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Şifre</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Şifrenizi girin"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Şifre Tekrar</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Şifrenizi tekrar girin"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Favori Borsa</label>
                            <select
                                className="form-control"
                                value={favoriteExchange}
                                onChange={(e) => setFavoriteExchange(e.target.value)}
                                required
                            >
                                <option value="">Seçin</option>
                                <option value="Binance">Kripto</option>
                                <option value="Coinbase">Bist</option>
                                <option value="Kraken">Forex</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Meslek (Boş bırakılabilir)</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Mesleğinizi girin (isteğe bağlı)"
                                value={occupation}
                                onChange={(e) => setOccupation(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Kayıt Ol</button>
                    </form>
                    <p className="mt-3">
                        Zaten bir hesabınız var mı? <Link to="/login">Giriş Yapın</Link>.
                    </p>
                </div>
            </section>
            <InfoSection />
            <Footer />
        </div>
    );
};

export default Register;
