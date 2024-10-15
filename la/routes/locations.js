// // routes/locations.js
// const express = require("express");
// const router = express.Router();
// const Location = require("../models/Location");

// // GET all locations
// router.get("/", async (req, res) => {
//   try {
//     const locations = await Location.find().populate("parent_godown");
//     res.json(locations);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST a new location
// router.post("/", async (req, res) => {
//   const location = new Location({
//     name: req.body.name,
//     parent_godown: req.body.parent_godown || null,
//   });

//   try {
//     const newLocation = await location.save();
//     res.status(201).json(newLocation);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;
// routes/locations.js

const express = require('express');
const router = express.Router();
const Location = require('../models/Location'); // Ensure the model path is correct

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
