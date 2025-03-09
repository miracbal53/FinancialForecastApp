const express = require('express');
const router = express.Router();
const communicationController = require('../controllers/communicationController');

// Yeni iletişim mesajı gönderme (POST)
router.post('/communication', communicationController.createCommunication);

// Tüm iletişim mesajlarını getirme (GET)
router.get('/communications', communicationController.getAllCommunications);

module.exports = router;
