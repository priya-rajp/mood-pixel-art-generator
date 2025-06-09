const mongoose = require('mongoose');

const ArtSchema = new mongoose.Schema({
  mood: String,
  pixelData: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Art', ArtSchema);
