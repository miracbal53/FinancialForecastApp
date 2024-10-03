const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
    exchange: { type: String, required: true },
    predictionType: { type: String, enum: ['AI', 'Advisor'], required: true }, // 'AI' veya 'Advisor'
    predictionContent: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Prediction = mongoose.model('Prediction', predictionSchema);
module.exports = Prediction;
