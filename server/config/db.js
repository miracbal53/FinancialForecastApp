const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    console.log('MongoDB URI:', uri); // Bu satırı ekleyin
    if (!uri) {
      throw new Error('MONGO_URI environment variable is not defined.');
    }

    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB bağlantısı başarılı.');
  } catch (error) {
    console.error('MongoDB bağlantısı sırasında hata:', error.message);
    process.exit(1);
  }
};


module.exports = connectDB;
