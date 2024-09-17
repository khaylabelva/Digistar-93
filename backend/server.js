require('dotenv').config();
const mongodb = require('./src/database/dbConfig');
const provinceController = require('./src/controllers/query'); // Adjust path if needed
const { getTotalStats } = require('./src/controllers/query'); // Named import
const cors = require('cors');

// Connect to the database
mongodb.connectDB();

// Initialize express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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
