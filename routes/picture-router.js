const express = require('express');
const PictureCtrl = require('../controllers/picture-ctrl');

const router = express.Router();

router.get('/api/pics', PictureCtrl.getPictures);

router.get('/api/pics/:id', (req, res) => {
    PictureCtrl.deletePicture(req.params.id);
});

module.exports = router;
