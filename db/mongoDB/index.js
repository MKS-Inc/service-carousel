const mongoose = require('mongoose');

const { Listing, Picture } = require('./schema.js');

mongoose
  .connect('mongodb://127.0.0.1:27017/mks', { useNewUrlParser: true })
  .catch((error) => {
    console.error('Mongo Connection error', error);
  });

const db = mongoose.connection;

const getAllListings = () => Listing.find({})
  .then((data) => data);

const getListings = (listingId) => Listing.findOne({ id: listingId })
  .then((data) => data);

const getPictures = (id) => Picture.find({ listingId: id })
  .then((data) => data);

module.exports = {
  db, Listing, Picture, getAllListings, getListings, getPictures,
};


// indexing
// how to implement it?
