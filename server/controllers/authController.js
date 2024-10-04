
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Admin kullanıcı oluşturma
exports.registerAdmin = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    // Aynı email ile kayıtlı kullanıcı olup olmadığını kontrol et
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Bu email zaten kullanımda' });
    }

    // Şifreyi hash'le
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcıyı oluştur ve role: 'admin' olarak ayarla
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      role: 'admin', // Rolü admin olarak ayarla
    });

    // Kullanıcıyı kaydet
    await newUser.save();

    // Token oluştur
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ message: 'Admin kullanıcı başarıyla oluşturuldu', token });
  } catch (error) {
    res.status(500).json({ message: 'Admin kullanıcı oluşturulamadı', error });
  }
};

// Kayıt
exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'Email zaten kayıtlı' });

    user = new User({ firstName, lastName, email, password });
    await user.save();

    const payload = { userId: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Giriş
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Geçersiz kimlik bilgileri' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Geçersiz kimlik bilgileri' });

    const payload = { userId: user.id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
