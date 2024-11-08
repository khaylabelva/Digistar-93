require('dotenv').config();
const mongodb = require('./src/database/dbConfig');
const searchController = require('./src/controllers/searchController');
const provinceController = require('./src/controllers/query');
const contentController = require('./src/controllers/contentController'); // Import the new controller
const { getTotalStats } = require('./src/controllers/query');

const cors = require('cors');

// Connect to the database
mongodb.connectDB();

// Initialize express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Get specific province by name
app.get('/api/provinces/:name', async (req, res) => {
  try {
    const province = await provinceController.getProvinceByName(req.params.name);
    if (province) {
      res.setHeader('Content-Type', 'application/json');
      res.json(province);
    } else {
      res.status(404).json({ message: 'Province not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get total stats for all provinces
app.get('/api/total-stats', async (req, res) => {
  try {
    const totals = await getTotalStats();
    res.json(totals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching total stats' });
  }
});

// Search content
app.get('/api/search', searchController.searchContent);

// Get all content
app.get('/api/content', async (req, res) => {
  try {
    const content = await provinceController.getContent();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching content' });
  }
});

// Add new content
app.post('/api/content', contentController.addContent);

module.exports = app;
