// authRoutes.js
const express = require('express');
const { register, login, registerAdmin } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);      // Normal kullanıcı kaydı
router.post('/login', login);            // Kullanıcı giriş
router.post('/registerAdmin', registerAdmin); // Admin kaydı için özel endpoint

module.exports = router;
