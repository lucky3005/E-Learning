const CourseModel = require("../models/course_model");

async function AddCoursePostController(req, res) {
    const { tutorName, courseName, description, price, videoUrl, category } = req.body;

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
            msg: "Course added successfully!",
            id: course._id
        });

    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

async function ViewCourseGetController(req, res) {
    try {
        const course = await CourseModel.find({});
        if (!course) {
            return res.status(404).json({ message: "Not found" });
        }
        return res.status(200).json(course);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function DeleteCourseController(req, res) {
    const id = req.params.id;
    try {
        const isDeleted = await CourseModel.findByIdAndDelete(id);
        if (!isDeleted) {
            return res.status(404).json({ message: "Not found" });
        }

        return res.status(200).json({ message: "Deleted", data: isDeleted });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { ViewCourseGetController, AddCoursePostController, DeleteCourseController };