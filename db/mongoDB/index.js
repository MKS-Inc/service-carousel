const mongoose = require('mongoose');
const faker = require('faker');

mongoose
  .connect('mongodb://127.0.0.1:27017/pictures', { useNewUrlParser: true})
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const mongodb = mongoose.connection;

const picturesCollection = mongodb.collection('pictures');

const pictures = [];

for (let i = 0; i < 5; i++) {
  const fakeHouseID = faker.random.number({ min: 1, max: 100 });
  const url = faker.image.city();

  const newPictures = {
    fakeHouseID,
    url,
  };
  pictures.push(newPictures);
}
picturesCollection.insertMany(pictures);

module.exports = mongodb;
