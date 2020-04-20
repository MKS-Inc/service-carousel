const Listing = require('../db/mongoDB/schema.js');

const getListings = (listing) => Listing.find(listing)
  .then((data) => data);

module.exports = getListings;


// const getListings = async (req, res) => {
//   await Listing.find({}, (err, listings) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }
//     return res.status(200).json({ success: true, data: listings });
//   });
// };

// exports.deleteListing = async (id) => {
//   const query = { 'id' : id};
//   await Listing.deleteOne(query, (err, listings) => console.log('Deleted'));
// };