const Sequelize = require('sequelize');

const sequelize = new Sequelize('fake_data', 'root', '1', {
  host: 'localhost',
  dialect: 'mysql'
});

// GET
exports.getPictures = async (callback) => {
  let randNum = Math.floor(Math.random() * (100 - 1) + 1)
  let fakeHouse = await sequelize.query(`SELECT * FROM fakeHouses WHERE id='${randNum}'`, {
    type: sequelize.QueryTypes.SELECT
  })

  let fakeUrls = await sequelize.query(`SELECT * FROM fakeUrls WHERE fakeHouseID='${randNum}'`, {
    type: sequelize.QueryTypes.SELECT
  })
  callback(fakeHouse, fakeUrls)
}

// DELETE
exports.deletePicture = (id) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'DELETE FROM fakeHouses WHERE id = ?';
    sequelize.query(queryStr, id, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// UPDATE
// exports.updatePicture = (url ,id) => {
//   let randNum = Math.floor(Math.random() * (100 - 1) + 1);

//   return new Promise((resolve, reject) => {
//     const queryStr = `UPDATE FROM fakeHouses SET url = '${randNum}' WHERE id = ?`;
//     sequelize.query(queryStr, [url, id] , (err, result, fields) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(result);
//     });
//   });
// };

// POST
// exports.createPicture = (url) => {
//   return new Promise((resolve, reject) => {
//     const queryStr = 'INSERT INTO fakeHouses (url) VALUES (?)';
//     sequelize.query(queryStr, [url] , (err, result, fields) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(result);
//     });
//   });
// };