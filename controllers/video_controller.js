const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const originalDir = path.join(__dirname, '../videos/original');
const compressedDir = path.join(__dirname, '../videos/compressed');

if (!fs.existsSync(originalDir)) fs.mkdirSync(originalDir, { recursive: true });
if (!fs.existsSync(compressedDir)) fs.mkdirSync(compressedDir, { recursive: true });

exports.uploadVideo = (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded');

    const inputVideoPath = path.join(originalDir, req.file.filename);
    const outputVideoPath = path.join(compressedDir, req.file.filename.replace(/\.[^/.]+$/, '.mkv'));

    exec(`ffmpeg -i "${inputVideoPath}" -c:v libx264 -preset ultrafast -crf 0 "${outputVideoPath}"`, (err) => {
        if (err) {
            console.error('Error compressing video:', err);
            return res.status(500).send('Error compressing video');
        }
        return res.json({
            message: 'Video uploaded and compressed successfully',
            originalVideoUrl: `${req.protocol}://${req.get('host')}/video/stream/original/${req.file.filename}`,
            compressedVideoUrl: `${req.protocol}://${req.get('host')}/video/stream/compressed/${req.file.filename.replace(/\.[^/.]+$/, '.mkv')}`
        });
    });
};

exports.streamOriginal = (req, res) => {
    const filePath = path.join(originalDir, req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).send('Original video not found');

    res.setHeader('Content-Type', 'video/mp4');
    fs.createReadStream(filePath).pipe(res);
};

exports.streamCompressed = (req, res) => {
    const filePath = path.join(compressedDir, req.params.filename.replace(/\.[^/.]+$/, '.mkv'));
    if (!fs.existsSync(filePath)) return res.status(404).send('Compressed video not found');

    res.setHeader('Content-Type', 'video/x-matroska');
    fs.createReadStream(filePath).pipe(res);
};
