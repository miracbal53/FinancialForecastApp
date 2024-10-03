const express = require('express');
const router = express.Router();
const User = require('../models/User'); // User modelini dahil et
const bcrypt = require('bcrypt');

// Örnek bir login route'u
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Kullanıcıyı veritabanında bul
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Kullanıcı bulunamadı' });
        }

        // Şifreyi kontrol et
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Şifre hatalı' });
        }

        // Giriş başarılı
        return res.status(200).json({ message: 'Giriş başarılı' });
    } catch (error) {
        return res.status(500).json({ message: 'Sunucu hatası', error });
    }
});

// Kayıt route'u
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, favoriteExchange, occupation } = req.body;

    try {
        // Kullanıcının mevcut olup olmadığını kontrol et
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Bu e-posta ile kayıtlı bir kullanıcı var' });
        }

        // Telefon numarası kontrolü (05 ile başlamalı ve 11 haneli olmalı)
        const phoneRegex = /^05\d{9}$/;
        if (!phoneRegex.test(phoneNumber)) {
            return res.status(400).json({ message: 'Telefon numarası 05 ile başlamalı ve 11 haneli olmalıdır' });
        }

        // Şifreyi hashle
        const hashedPassword = await bcrypt.hash(password, 10);

        // Yeni kullanıcıyı oluştur
        const newUser = new User({
            firstName,
            lastName,
            email,
            phoneNumber,
            password: hashedPassword,
            favoriteExchange,
            occupation
        });

        await newUser.save();

        return res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi' });
    } catch (error) {
        return res.status(500).json({ message: 'Sunucu hatası', error });
    }
});

const Subscription = require('../models/Subscription'); // Subscription modelini dahil et

// Abonelik oluşturma
router.post('/subscribe', async (req, res) => {
    const { userId, exchange } = req.body;

    try {
        const newSubscription = new Subscription({
            userId,
            exchange,
            expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 gün geçerli
        });

        await newSubscription.save();
        return res.status(201).json({ message: 'Abonelik başarılı bir şekilde oluşturuldu' });
    } catch (error) {
        return res.status(500).json({ message: 'Sunucu hatası', error });
    }
});

// Kullanıcının aboneliklerini getirme
router.get('/subscriptions/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const subscriptions = await Subscription.find({ userId });
        return res.status(200).json(subscriptions);
    } catch (error) {
        return res.status(500).json({ message: 'Sunucu hatası', error });
    }
});

// Tahminleri alma
router.get('/predictions', async (req, res) => {
    try {
        const predictions = await Prediction.find();
        return res.status(200).json(predictions);
    } catch (error) {
        return res.status(500).json({ message: 'Sunucu hatası', error });
    }
});



module.exports = router;
