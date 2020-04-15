const { Listing } = require('../mongoDb/index.js');

exports.insertListings = (listings) => {
  return Listing.insertMany(listings);
};
