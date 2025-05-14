const db = require('../models');
const Service = db.Service;
const fs = require("fs");
const path = require("path");

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

// 👇 Update endpoint
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, price, duration } = req.body;

    if (!name || !description || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // 👇 Check if a new image is uploaded
    let imageUrl = service.imageUrl;
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;

      // 👇 Delete old image from /uploads
      if (service.imageUrl) {
        const oldImagePath = path.join(__dirname, "..", "public", service.imageUrl);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
    }

    await Service.update(
      { name, description, imageUrl, price, duration },
      { where: { id } }
    );

    const updatedService = await Service.findByPk(id);
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error: error.message });
  }
};

// 👇 Remove endpoint
exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // 👇 Delete image from /uploads
    if (service.imageUrl) {
      const imagePath = path.join(__dirname, "..", "public", service.imageUrl);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Service.destroy({ where: { id } });
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error: error.message });
  }
};

