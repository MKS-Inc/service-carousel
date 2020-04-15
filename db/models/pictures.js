const { Picture } = require('../mongoDb/index.js');

exports.insertMany = (images) => {
  return Picture.insertMany(images);
};
