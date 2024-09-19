const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  component: String,
  previewText: String,
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
