import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini ekleyin
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                alert(data.message); // Giriş başarılı
            } else {
                alert(data.message); // Hata mesajı
            }
        } catch (error) {
            console.error('Hata:', error);
            alert('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    };

    return (
        <div>
            <Header />
            <section className="login_section">
                <div className="container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="E-mail adresinizi giriniz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    {/* Kayıt olma bağlantısını ekleyin */}
                    <p className="mt-3">
                        Eğer hesabınız yoksa, <Link to="/register">kayıt olun</Link>.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Login;
