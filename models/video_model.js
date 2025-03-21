const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: String,
    filePath: String,
});

module.exports = mongoose.model('Video', videoSchema);
