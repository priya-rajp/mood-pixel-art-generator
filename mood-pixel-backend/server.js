const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store for art pieces
let artPieces = [];

// Save new art
app.post('/api/art', (req, res) => {
  const { mood, pixelData } = req.body;
  const newArt = {
    id: artPieces.length + 1,  // simple ID for testing
    mood,
    pixelData,
    createdAt: new Date()
  };
  artPieces.push(newArt);
  res.status(201).json(newArt);
});

// Get all art
app.get('/api/art', (req, res) => {
  res.json(artPieces);
});

// Test endpoint
app.get('/', (req, res) => {
  res.send('Mood Pixel Art Backend (No Database Mode) is live!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
