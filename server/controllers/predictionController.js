const Prediction = require('../models/Prediction');

exports.getPredictions = async (req, res) => {
  const { market } = req.query;

  try {
    const predictions = await Prediction.find({ market });
    res.json({ predictions });
  } catch (error) {
    res.status(500).json({ message: 'Server Hatası' });
  }
};
