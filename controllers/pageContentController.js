const db = require('../models');
const PageContent = db.PageContent;

exports.getAll = async (req, res) => {
  try {
    const page = req.query.page;
    const condition = page ? { where: { page } } : {};
    const data = await PageContent.findAll(condition);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateContent = async (req, res) => {
  try {
    const { page, section, content } = req.body;
    let finalContent = content;

    // If file was uploaded, save the file path as content
    if (req.file) {
      finalContent = `/uploads/${req.file.filename}`;
    }

    const existing = await PageContent.findOne({ where: { page, section } });

    if (existing) {
      await PageContent.update({ content: finalContent }, { where: { page, section } });
      res.json({ message: 'Updated' });
    } else {
      const newContent = await PageContent.create({ page, section, content: finalContent });
      res.status(201).json(newContent);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

