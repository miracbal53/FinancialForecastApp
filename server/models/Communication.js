// models/Communication.js
const mongoose = require('mongoose');

const CommunicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Communication', CommunicationSchema);
