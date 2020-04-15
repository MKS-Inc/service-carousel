const mongoose = require('mongoose');

const { Schema } = mongoose;

// Picture
const Pictures = new Schema(
  {
    fakeHouseID: { type: Number, unique: true },
    url: { type: String }
  },
);

module.exports = mongoose.model('pictures', Pictures);
