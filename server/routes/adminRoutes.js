// routes/adminRoutes.js
const express = require('express');
const { createPrediction, manageUsers } = require('../controllers/adminController');
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');

const router = express.Router();

// Sadece admin erişimine açık bir tahmin oluşturma endpointi
router.post('/predictions', auth, isAdmin, createPrediction);

// Sadece admin erişimine açık kullanıcı yönetimi endpointi
router.get('/manage-users', auth, isAdmin, manageUsers);

module.exports = router;
