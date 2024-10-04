const Prediction = require('../models/Prediction');

exports.addPrediction = async (req, res) => {
  const { market, prediction } = req.body;

  try {
    const newPrediction = new Prediction({ market, prediction, createdBy: req.user.userId });
    await newPrediction.save();
    res.status(201).json({ message: 'Tahmin başarıyla eklendi' });
  } catch (error) {
    res.status(500).json({ message: 'Server Hatası' });
  }
};
