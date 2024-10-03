const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // E-posta benzersiz olmalıdır
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true // Telefon numarası benzersiz olmalıdır
    },
    password: {
        type: String,
        required: true
    },
    favoriteExchange: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        default: '' // Boş bırakılabilir
    }
});

module.exports = mongoose.model('User', UserSchema);
