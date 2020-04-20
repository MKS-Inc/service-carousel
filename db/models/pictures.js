const { Picture } = require('../mongoDB/index.js');

exports.insertPictures = (images) => {
  return Picture.insertMany(images);
};
