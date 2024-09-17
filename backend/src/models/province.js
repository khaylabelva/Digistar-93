const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
  province: String,
  trucker: Number,
  fleet: Number,
  outlet: Number,
  distributor: Number
});

const Province = mongoose.model('Province', provinceSchema);

module.exports = Province;
