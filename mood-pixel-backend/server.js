const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

const artRoutes = require('./routes/art');
app.use('/api/art', artRoutes);

app.get('/', (req, res) => {
  res.send('Mood Pixel Art Backend is live!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
