const express = require('express');
const { addPrediction } = require('../controllers/adminController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/predictions', auth, addPrediction);

module.exports = router;
