const db = require('../models');
const PageContent = db.PageContent;
const fs = require("fs");
const path = require("path");

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

    // Check if content already exists for this page/section
    const existing = await PageContent.findOne({ where: { page, section } });

    // If new image uploaded
    if (req.file) {
      finalContent = `/uploads/${req.file.filename}`;

      // Delete old image file if it exists and it's an image path
      if (existing && existing.content && existing.content.startsWith("/uploads/")) {
        const oldImagePath = path.join(__dirname, "..", "public", existing.content);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
    }

    if (existing) {
      await PageContent.update(
        { content: finalContent },
        { where: { page, section } }
      );
      res.json({ message: "Updated" });
    } else {
      const newContent = await PageContent.create({
        page,
        section,
        content: finalContent,
      });
      res.status(201).json(newContent);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

