// // import a function that queries the database
// const getPictures = require('../db/dbQueries.js').getPictures;
// const deletePicture = require('../db/dbQueries.js').deletePicture;
// const updatePicture = require('../db/dbQueries.js').updatePicture;

// const handlers = {
//     handleGet: (req, res) => {
//         getPictures(function (fakeHouse, fakeUrls) {
//             // change this shit to send all the fakeUrls 
//             let obj = {}
//             obj.fakeHouse = fakeHouse
//             obj.fakeUrls = fakeUrls
//             res.send(obj) 
//         })
//     },
//     handleDelete: (req, res) => {
//         deletePicture(() => {
//             res.send('DONE');
//         })
//     },
//     // handleUpdate: (req, res) => {
//     //     updatePicture(() => {
//     //         res.send('DONE');
//     //     })
//     // }
// }

// module.exports = handlers