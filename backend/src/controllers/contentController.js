const Content = require('../models/searchData'); // Adjust path if needed

// Controller function to add new content
const addContent = async (req, res) => {
  try {
    const { title, description, type, component, previewText } = req.body;

    if (!title || !description || !type) {
      return res.status(400).json({ error: 'Title, description, and type are required' });
    }

    const newContent = new Content({
      title,
      description,
      type,
      component,
      previewText,
    });

    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    console.error('Error adding content:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { addContent };
