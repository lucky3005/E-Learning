//IMPORT PACKAGES
const express = require("express");
const cors = require("cors");
require("dotenv").config();

//INITIALIZE PACKAGES
const app = express();

//REQUIRED FILES
const DBConnection = require("./db_connection");
const AuthRouter = require("./routes/auth_route");
const CourseRouter = require("./routes/course_route");
const BlogRouter = require("./routes/blog_route");
const videoRoutes = require("./routes/video_route");

//PORT
const port = process.env.PORT || 4000

//MIDDLEWARES 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

DBConnection(process.env.DB_URL);

//API
app.use("/", AuthRouter);
app.use("/admin", CourseRouter, BlogRouter);
app.use("/user", CourseRouter, BlogRouter);
app.use('/video', videoRoutes);

app.listen(port, () => {
    console.log("Server Started");
});