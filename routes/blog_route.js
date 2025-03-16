const express = require("express");
const BlogRouter = express.Router();

const Admin = require("../middlewares/admin_middleware")
const Blog = require("../controllers/blog_controller");


BlogRouter.post("/add-blog",Admin,Blog.AddBlogPostController);
BlogRouter.get("/view-blog",Blog.ViewBlogGetController);
BlogRouter.delete("/blog/delete/:id",Admin,Blog.DeleteBlogController);

module.exports = BlogRouter;
