const artPieces = []; // in-memory storage

app.post('/api/art', (req, res) => {
  const { mood, pixelData } = req.body;
  const newArt = { mood, pixelData, createdAt: new Date() };
  artPieces.push(newArt);
  res.status(201).json(newArt);
});

app.get('/api/art', (req, res) => {
  res.json(artPieces);
});
