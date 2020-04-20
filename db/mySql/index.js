const mysql = require('mysql');

const DB_HOST = process.env.DB_HOST || 'localhost';
const PASSWORD = process.env.PASSWORD || '1';

const connection = mysql.createConnection({
  host: DB_HOST,
  user: 'root',
  password: PASSWORD,
  database: 'mks',
});

connection.connect((err) => {
  if (err) console.error('Mysql connection error:', err);
});

// CREATE
const createPicture = (listingId) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'INSERT INTO pictures (source, listing_id) values ("This is URL", ?)';
    connection.query(queryStr, listingId, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// READ
const getPictures = (listingId) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'SELECT * FROM pictures WHERE listing_id = ?';
    connection.query(queryStr, listingId, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// READ ALL
const getAllPictures = () => {
  return new Promise((resolve, reject) => {
    const queryStr = 'SELECT * FROM pictures';
    connection.query(queryStr, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// UPDATE
const updateListing = (listingId) => {
  return new Promise((resolve, reject) => {
    const queryStr = `UPDATE listings SET address = "3000 Mission" WHERE id = ?`;
    connection.query(queryStr, listingId, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// DELETE
const deletePicture = (imageId) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'DELETE FROM pictures WHERE id = ?';
    connection.query(queryStr, imageId, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = {
  connection,
  createPicture,
  getPictures,
  getAllPictures,
  updateListing,
  deletePicture,
};
