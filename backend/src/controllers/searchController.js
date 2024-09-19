const Content = require('../models/searchData'); // Ensure the correct model is being used

const searchContent = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    // Find content matching the query
    const results = await Content.find({
      $or: [
        { title: new RegExp(query, 'i') },
        { description: new RegExp(query, 'i') },
        { previewText: new RegExp(query, 'i') },
        { type: new RegExp(query, 'i') },
        { component: new RegExp(query, 'i') }
      ]
    });

    if (results.length === 0) {
      return res.status(404).json({ message: 'No results found' });
    }

    res.json(results);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { searchContent };
