const mongoose = require('mongoose');

const { Listing, Picture } = require('./schema.js');

mongoose
  .connect('mongodb://127.0.0.1:27017/mks', { useNewUrlParser: true })
  .catch((error) => {
    console.error('Mongo Connection error', error);
  });

const db = mongoose.connection;

module.exports = { db, Listing, Picture };
