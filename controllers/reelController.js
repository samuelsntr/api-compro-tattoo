const db = require('../models');
const Reel = db.Reel;

exports.getAll = async (req, res) => {
  const reels = await Reel.findAll({ order: [['createdAt', 'DESC']] });
  res.json(reels);
};

exports.create = async (req, res) => {
  const { url, caption } = req.body;
  const reel = await Reel.create({ url, caption });
  res.status(201).json(reel);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Reel.destroy({ where: { id } });
  res.json({ message: 'Deleted' });
};
