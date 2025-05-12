const db = require('../models');
const PortfolioItem = db.PortfolioItem;

exports.getAll = async (req, res) => {
  try {
    const data = await PortfolioItem.findAll({
      order: [['createdAt', 'DESC']] // Sort by newest first
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio items', error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, description, style } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !description || !style) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const item = await PortfolioItem.create({ 
      title, 
      imageUrl, 
      description, 
      style 
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error creating portfolio item', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, style } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl;

    if (!title || !description || !style) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const [updated] = await PortfolioItem.update(
      { title, imageUrl, description, style }, 
      { where: { id } }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }

    const updatedItem = await PortfolioItem.findByPk(id);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating portfolio item', error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await PortfolioItem.destroy({ where: { id } });
    
    if (!deleted) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }
    
    res.json({ message: 'Portfolio item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting portfolio item', error: error.message });
  }
};
