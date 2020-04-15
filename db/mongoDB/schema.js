const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  id: Number,
  source: String,
  listingId: Number,
});

const listingSchema = new mongoose.Schema({
  id: Number,
  address: String,
});

const Picture = mongoose.model('Picture', pictureSchema);

const Listing = mongoose.model('Listing', listingSchema);

module.exports = { Picture, Listing };
