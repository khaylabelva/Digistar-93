const Province = require('../models/province');

// query all provinces
async function getProvinces() {
  try {
    return await Province.find();
  } catch (error) {
    console.error('Error fetching provinces:', error);
    throw error; // Rethrow or handle the error as needed
  }
}

// get a specific province by name
async function getProvinceByName(name) {
  try {
    return await Province.findOne({ province: name });
  } catch (error) {
    console.error('Error fetching province:', error);
    throw error;
  }
}

// sum total trucker, fleet, outlet, and distributor for all provinces
async function getTotalStats() {
  try {
    const result = await Province.aggregate([
      {
        $group: {
          _id: null,
          totalTruckers: { $sum: "$trucker" },
          totalFleet: { $sum: "$fleet" },
          totalOutlets: { $sum: "$outlet" },
          totalDistributors: { $sum: "$distributor" }
        }
      }
    ]);

    // If aggregation result is empty, return zeros
    if (result.length === 0) {
      return {
        totalTruckers: 0,
        totalFleet: 0,
        totalOutlets: 0,
        totalDistributors: 0
      };
    }

    return result[0];
  } catch (error) {
    console.error('Error calculating total stats:', error);
    throw error;
  }
}

module.exports = {
  getProvinces,
  getProvinceByName,
  getTotalStats
};