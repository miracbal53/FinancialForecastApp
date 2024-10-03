const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    exchange: { type: String, required: true }, // 'Binance', 'Kraken' vb.
    active: { type: Boolean, default: true },
    subscriptionDate: { type: Date, default: Date.now },
    expirationDate: { type: Date },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
module.exports = Subscription;
