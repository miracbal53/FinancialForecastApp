// middleware/isAdmin.js
const isAdmin = (req, res, next) => {
    // auth middleware'inden geçmiş bir istekte kullanıcı rolünü kontrol et
    if (req.user && req.user.role === 'admin') {
      next(); // Eğer rol "admin" ise devam et
    } else {
      res.status(403).json({ message: 'Bu işlem için yetkiniz yok' });
    }
  };
  
  module.exports = isAdmin;
  