const express = require('express');
const router = express.Router();
const Art = require('../models/Art');

// Save new art
router.post('/', async (req, res) => {
  try {
    const { mood, pixelData } = req.body;
    const newArt = new Art({ mood, pixelData });
    await newArt.save();
    res.status(201).json(newArt);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all art
router.get('/', async (req, res) => {
  try {
    const artPieces = await Art.find();
    res.json(artPieces);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
