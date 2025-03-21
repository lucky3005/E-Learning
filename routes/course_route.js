const express = require("express");
const CourseRouter = express.Router();

const Course = require("../controllers/course_controller");
const Admin = require("../middlewares/admin_middleware");

CourseRouter.post("/add-course", Admin, Course.AddCoursePostController);
CourseRouter.get("/view-course", Course.ViewCourseGetController);
CourseRouter.delete("/course/delete/:id", Admin, Course.DeleteCourseController);

module.exports = CourseRouter;