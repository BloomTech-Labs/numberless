const mongoose = require('mongoose');

// Create Charities Schema

const CharitySchema = new mongoose.Schema({
  charity: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String, // string to URL?
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  winner: {
    type: Boolean,
  }
});

module.exports = mongoose.model("Charities", CharitySchema);