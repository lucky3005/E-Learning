const BlogModel = require("../models/blog_model");

async function AddBlogPostController(req, res) {
    try {
        const { title, content, author } = req.body;
        if (!title || !content || !author) {
            return res.status(400).json({
                msg: "Enter required fields"
            });
        }
        const data = await BlogModel.create({
            title,
            content,
            author,
        });

        if (!data) {
            return res.status(400).json({
                msg: "Unable to add blog"
            });
        }

        return res.status(200).json({
            msg: "Blog added successfully!"
        });

    } catch (error) {
        return res.status(500).json({
            msg: "Server Error"
        });
    }
}

async function ViewBlogGetController(req, res) {
    try {
        const data = await BlogModel.find({});
        if (!data) {
            return res.status(400).json({
                msg: "No blog found"
            });

        }
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({
            msg: "Server Error",
            error: e.message
        });
    }
}

module.exports = { AddBlogPostController, ViewBlogGetController };