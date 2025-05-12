const db = require('../models');
const Service = db.Service;

exports.getAll = async (req, res) => {
  const data = await Service.findAll();
  res.json(data);
};

exports.create = async (req, res) => {
  try {
    const { name, description, price, duration } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!name || !description || !price) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const service = await Service.create({ 
      name, 
      description, 
      imageUrl,
      price, 
      duration 
    });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error creating service', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, price, duration } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl;

    if (!name || !description || !price) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const [updated] = await Service.update(
      { name, description, imageUrl, price, duration },
      { where: { id } }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Service not found' });
    }

    const updatedService = await Service.findByPk(id);
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ message: 'Error updating service', error: error.message });
  }
};

exports.remove = async (req, res) => {
  const id = req.params.id;
  await Service.destroy({ where: { id } });
  res.json({ message: 'Deleted' });
};
