const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    tutorName: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    videoUrl:
    {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;