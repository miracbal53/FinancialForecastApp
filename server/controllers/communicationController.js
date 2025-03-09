const Communication = require('../models/Communication');

// Yeni iletişim mesajı oluşturma
exports.createCommunication = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Yeni iletişim mesajını oluştur
    const newCommunication = new Communication({
      name,
      email,
      subject,
      message
    });

    // Mesajı kaydet
    await newCommunication.save();

    res.status(201).json({ message: 'Mesaj başarıyla kaydedildi.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Mesaj kaydedilemedi. Lütfen tekrar deneyin.' });
  }
};

// Tüm iletişim mesajlarını getirme
exports.getAllCommunications = async (req, res) => {
  try {
    const communications = await Communication.find();
    res.status(200).json(communications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Mesajlar alınırken bir hata oluştu.' });
  }
};
