const express = require('express');
const app = express();
const port = 3003;
const bodyParser = require('body-parser');
const path = require('path');
const { getAllListings, getListings, getPictures } = require('../db/mongoDB/index.js');

app.use(express.static(path.resolve(__dirname, '../dist/')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET
app.get('/carousel/listings/:listingId/images', (req, res) => {
  getPictures(req.params.listingId)
    .then(([listing]) => {
      const data = {};
      data.fakeHouse = {
        address: '123 street',
        id: req.params.listingId,
        price: 60,
      };
      data.fakeUrls = listing.imageUrls.map((url, i) => {
        return {
          id: i,
          url,
        };
      });

      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/api/pictures', (req, res) => {
  getAllListings()
    .then((listing) => {
      res.send(listing);
    })
    .catch((err) => {
      res.send(err);
    });
});

// CREATE
app.post('/carousel/listings/:listingId/images', (req, res) => {
  mysql.createPicture(req.params.listingId)
    .then((results) => res.status(201).json(results))
    .catch((err) => {
      res.sendStatus(500);
    });
});

// MYSQL GET
// app.get('/carousel/listings/:listingId/images', (req, res) => {
//   mysql.getPictures(req.params.listingId)
//     .then((results) => res.status(200).json(results))
//     .catch((err) => {
//       res.sendStatus(404);
//     });
// });

// UPDATE
app.patch('/carousel/listings/:listingId', (req, res) => {
  mysql.updateListing(req.params.listingId)
    .then((results) => res.status(204).json(results))
    .catch((err) => {
      res.sendStatus(500);
    });
});

// DELETE
app.delete('/carousel/images/:imageId', (req, res) => {
  mysql.deletePicture(req.params.imageId)
    .then((results) => res.status(204).json(results))
    .catch((err) => {
      res.sendStatus(404);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))