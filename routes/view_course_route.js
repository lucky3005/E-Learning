const express = require("express");
const ViewCourseRouter = express.Router();

const ViewCourse = require("../controllers/view_course_controller");

ViewCourseRouter.get("/get-course",ViewCourse.ViewCourseGetController);

module.exports =  ViewCourseRouter;