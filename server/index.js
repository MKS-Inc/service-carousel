const express = require('express')
const handlers = require('./handlers.js')
const app = express()
const port = 3002
const bodyParser = require('body-parser')
const path = require('path')
const db = require('../db/dbQueries');
const mongodb = require('../mongoDB');

app.use(express.static(path.resolve(__dirname, '../dist/')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongodb.on('error', console.error.bind(console, 'MongoDB connection error:'));

// GET
app.get('/api/pictures', handlers.handleGet);

// DELETE
app.delete('/api/pictures/:id', (req, res) => {
    handlers.deletePicture(req.params.id)
      .then((results) => res.status(200).json(results))
      .catch((err) => {
        throw err;
      });
});

// CREATE
// app.post('/api/pictures', (req, res) => {
//   const id = req.body;
//   handlers.createPicture(id)
//     .then((results) => res.status(201).json(results))
//     .catch((err) => {
//       throw err;
//     });
// });

// UPDATE
// app.put('/api/pictures/:id', (req, res) => {
//   handlers.updatePicture(req.params.id)
//     .then((results) => res.status(200).json(results))
//     .catch((err) => {
//       throw err;
//     });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))