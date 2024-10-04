const express = require('express');
const { getPredictions } = require('../controllers/predictionController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/predictions', auth, getPredictions);

module.exports = router;
