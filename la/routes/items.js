// routes/items.js
const express = require("express");
const router = express.Router();
const Item = require('../models/Item');

// GET all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find().populate("godown_id");
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate("godown_id");
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new item
router.post("/", async (req, res) => {
  const item = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    category: req.body.category,
    price: req.body.price,
    status: req.body.status,
    godown_id: req.body.godown_id,
    brand: req.body.brand,
    attributes: req.body.attributes,
    image_url: req.body.image_url,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT to update an item
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem) return res.status(404).json({ message: "Item not found" });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE an item
router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
