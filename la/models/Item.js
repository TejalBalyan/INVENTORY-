// models/Item.js

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  item_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true },
  godown_id: { type: String, required: true }, // This can be a reference to a Location
  brand: { type: String },
  attributes: { type: Object },
  image_url: { type: String },
});

module.exports = mongoose.model('Item', ItemSchema);
