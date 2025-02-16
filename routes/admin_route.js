const express = require("express");
const AdminRouter = express.Router();

const Admin = require("../middlewares/admin_middleware");
const AdminController = require("../controllers/admin_controller");

AdminRouter.post("/add-course",Admin, AdminController.AddCoursePostController);

module.exports =  AdminRouter
