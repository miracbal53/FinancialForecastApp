// controllers/authController.js
const authService = require('../services/authService');

// src/controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Kullanıcı modelinizi burada içe aktarın

// Kayıt işlemi
exports.register = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, favoriteExchange, occupation } = req.body;

    try {
        // Şifreyi hashleyin
        const hashedPassword = await bcrypt.hash(password, 10);

        // Yeni kullanıcı oluşturun
        const newUser = new User({
            firstName,
            lastName,
            email,
            phoneNumber,
            password: hashedPassword,
            favoriteExchange,
            occupation,
        });

        // Kullanıcıyı veritabanına kaydedin
        await newUser.save();
        res.status(201).json({ message: 'Kayıt başarılı!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Kayıt sırasında bir hata oluştu.' });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { token, user } = await authService.loginUser(email, password);
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { register, login };
