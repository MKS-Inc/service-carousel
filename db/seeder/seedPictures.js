const Pictures = require('../models/pictures.js');
const PictureUrls = require('./pictureUrls');

const TOTAL_PICTURE_SETS = PictureUrls.length;
const TOTAL_LISTINGS = 100; // 10000000
const BATCH_SIZE = 10; // 1000
const TOTAL_BATCHES = TOTAL_LISTINGS / BATCH_SIZE;
const LOG_FREQUENCY = TOTAL_LISTINGS / 100;

let batchCount = 0;
let listingCount = 1;
let logCount = 0;

const startTime = process.hrtime();
let lastLogTime = process.hrtime();

const generateListingPictures = () => {
  const randomIndex = Math.floor(Math.random() * (TOTAL_PICTURE_SETS - 1) + 1);
  const imageUrls = PictureUrls[randomIndex];
  listingCount += 1;

  return {
    id: listingCount,
    listingId: listingCount,
    imageUrls,
  };
};

/* 
- Generate batch of 1,000 picture sets 
- Insert batch 
- Wait for batch to be completed
- Generate and insert again
 */
const writeListingPictures = () => {
  const pictures = [];
  for (let i = 0; i < BATCH_SIZE; i += 1) {
    pictures.push(generateListingPictures());
  }
  return Pictures.insertPictures(pictures);
};

const main = () => {
  writeListingPictures()
    .then(() => {
      batchCount += 1;
      if (batchCount < TOTAL_BATCHES) {
        main();
        if ((listingCount - 1) % LOG_FREQUENCY === 0) {
          const timeSinceLastLog = process.hrtime(lastLogTime);
          const logsRemaining = (TOTAL_LISTINGS / LOG_FREQUENCY) - logCount;

          logCount += 1;
          lastLogTime = process.hrtime();
          console.log('Pictures documents inserted: ', batchCount * BATCH_SIZE, ' of ', TOTAL_LISTINGS);
          console.log('Time remaining: ', (timeSinceLastLog[0] * logsRemaining) / 60);
        }
      } else {
        console.log('Total Minutes: ', (process.hrtime(startTime)[0] / 60));
        console.log('Done');
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

main();
