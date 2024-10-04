import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate ekledik
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // useNavigate hook'u ile yönlendirme yapacağız

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                // Giriş başarılı, token alındı
                localStorage.setItem('token', data.token); // Token'ı localStorage'da saklıyoruz
                alert('Giriş başarılı!'); 
                navigate('/'); // Başarılı giriş sonrası ana sayfaya yönlendirme
            } else {
                setErrorMessage(data.message); // Hata mesajını göster
            }
        } catch (error) {
            console.error('Hata:', error);
            setErrorMessage('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    };

    return (
        <div>
            <Header />
            <section className="login_section">
                <div className="container">
                    <h2>Login</h2>
                    {errorMessage && <p className="text-danger">{errorMessage}</p>} {/* Hata mesajını göster */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="E-mail adresinizi giriniz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Şifrenizi giriniz"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <p className="mt-3">
                        Eğer hesabınız yoksa, <Link to="/register">kayıt olun</Link>.
                    </p>
                </div>
            </section>
            <InfoSection />
            <Footer />
        </div>
    );
};

export default Login;
