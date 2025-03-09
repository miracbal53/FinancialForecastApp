require('dotenv').config(); // dotenv'i projeye dahil ediyoruz.
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Veritabanı bağlantısı
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Rotalar
app.use('/api/auth', require('./routes/authRoutes')); // Kimlik doğrulama işlemleri
app.use('/api/admin', require('./routes/adminRoutes')); // Yalnızca admin işlemleri
app.use('/api/predictions', require('./routes/predictionRoutes')); // Tahmin işlemleri
app.use('/api/communication', require('./routes/communicationRoutes')); // İletişim mesajları

// Sunucuyu başlatma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log('MongoDB URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

