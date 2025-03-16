const BlogModel = require("../models/blog_model");

async function AddBlogPostController(req, res) {
    try {
        const { title, content, author } = req.body;
        if (!title || !content || !author) {
            return res.status(400).json({
                msg: "Enter required fields title, content, author"
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
            msg: "Blog added successfully!",
            id: data._id
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

async function DeleteBlogController(req, res) {
    const id = req.params.id;
    try {
        const isDeleted = await BlogModel.findByIdAndDelete(id);
        console.log(id);

        if (!isDeleted) {
            return res.status(404).json({
                msg: "No blog found"
            });
        }
        return res.status(200).json({
            msg: "Deleted",
            data: isDeleted
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Server Error",
            error: e.message
        });
    }
}

module.exports = { AddBlogPostController, ViewBlogGetController, DeleteBlogController, };