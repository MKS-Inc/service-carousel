const faker = require('faker');
const Listings = require('../models/listings.js');

const TOTAL_LISTINGS = 100; // 10000000
const BATCH_SIZE = 10; // 1000
const TOTAL_BATCHES = TOTAL_LISTINGS / BATCH_SIZE;
const LOG_FREQUENCY = TOTAL_LISTINGS / 100;

let batchCount = 0;
let listingCount = 1;
let logCount = 0;

const startTime = process.hrtime();
let lastLogTime = process.hrtime();

const generateListing = () => {
  const id = listingCount;
  const address = faker.address.city();
  listingCount += 1;
  return {
    id,
    address,
  };
};

const writeListings = () => {
  const listings = [];
  for (let i = 0; i < BATCH_SIZE; i += 1) {
    listings.push(generateListing());
  }
  return Listings.insertListings(listings);
};

const main = () => {
  writeListings()
    .then(() => {
      batchCount += 1;
      if (batchCount < TOTAL_BATCHES) {
        main();
        if ((listingCount - 1) % LOG_FREQUENCY === 0) {
          const timeSinceLastLog = process.hrtime(lastLogTime);
          const logsRemaining = (TOTAL_LISTINGS / LOG_FREQUENCY) - logCount;

          logCount += 1;
          lastLogTime = process.hrtime();
          console.log('Listings inserted: ', batchCount * BATCH_SIZE, ' of ', TOTAL_LISTINGS);
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








// count for current listing id
// batchCount -> 10,000 batches ; global variable

// function writeOneThousandListings
  // loop that generates an array of 1000 listings
    // listing count++
  // batch insert those 1000 listings -> going to use Listings.insertMany
    // should return (Listings.insertMany) -> it returns promise
  // end function

    // wait for callback 
    // invoke the function again to get another 1000 listings

// function main
  // writeOneThrousandListings()
  // .then(
  //    batchCount++;
        // if (batchCount < 10000) {
        //   writeOneThrousandListings();
        // } else {
        //   console.log('DONE');
        // }
  // )

// count for current picture id
// 10M listings..
// load listings first and then load pictures
