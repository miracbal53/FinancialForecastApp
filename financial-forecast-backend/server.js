const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS ayarlarını ekleyin
app.use(cors());
app.use(express.json()); // JSON gövdesini işlemek için ekleyin

// MongoDB'ye bağlanın
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Auth route'larını ekleyin
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes); // Auth route'larını kullan

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
