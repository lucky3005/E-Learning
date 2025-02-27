const express = require("express");
const BlogRouter = express.Router();
const Blog = require("../controllers/blog_controller");


BlogRouter.post("/add-blog",Blog.AddBlogPostController);
BlogRouter.get("/view-blog",Blog.ViewBlogGetController);

module.exports = BlogRouter;
