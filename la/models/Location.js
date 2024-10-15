// models/Location.js
const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  parent_godown: { type: String, default: null }, // Ensure this matches the type used for parent IDs
});

module.exports = mongoose.model('Location', LocationSchema);
