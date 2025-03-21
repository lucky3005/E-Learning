const express = require('express');
const multer = require('multer');
const videoController = require('../controllers/video_controller');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'videos/original/'),
    filename: (req, file, cb) => cb(null, file.originalname)
});

const upload = multer({ storage });

router.post('/upload', upload.single('video'), videoController.uploadVideo);
router.get('/stream/original/:filename', videoController.streamOriginal);
router.get('/stream/compressed/:filename', videoController.streamCompressed);

module.exports = router;
