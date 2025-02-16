const CourseModel = require("../models/course_model");

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

module.exports = {ViewCourseGetController};