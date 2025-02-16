const CourseModel = require("../models/course_model");

async function AddCoursePostController(req, res) {
    const {tutorName, courseName, description, price, videoUrl, category } = req.body;
    
    try {
        if (!tutorName || !courseName || !description || !videoUrl || !category) {
            return res.status(400).json({
                msg: "Fill all required fields tutorName, courseName, description, price, videoUrl, category"
            });
        }

        const course = await CourseModel.create({
            tutorName,
            courseName,
            description,
            price,
            videoUrl,
            category,
        });

        if (!course) {
            return res.status(400).json({
                msg: "Unable to add course"
            });
        }

        return res.status(200).json({
            msg: "Course added successfully!"
        });

    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = {
    AddCoursePostController,
}