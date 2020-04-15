const Picture = require('../db/models/pictures-model');

exports.getPictures = async (req, res) => {
  await Picture.find({}, (err, pictures) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: pictures });
  });
};

exports.deletePicture = async (id) => {
  const query = { 'id' : id};
  await Picture.deleteOne(query, (err, pictures) => console.log('Deleted'));
};

