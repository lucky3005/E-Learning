//IMPORT PACKAGES
const express = require("express");
const cors = require("cors");
require("dotenv").config(); 

//INITIALIZE PACKAGES
const app = express();

//REQUIRED FILES
const DBConnection = require("./db_connection");
const AuthRouter = require("./routes/auth_route");
const AdminRouter = require("./routes/admin_route");
const ViewCourseRouter = require("./routes/view_course_route");
const BlogRouter = require("./routes/blog_route");

//PORT
const port = process.env.PORT || 4000


//MIDDLEWARES 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

DBConnection(process.env.DB_URL);

//API
app.use("/",AuthRouter);
app.use("/api/admin/v1",AdminRouter,BlogRouter);
app.use("/api/user/v1",AuthRouter,ViewCourseRouter,BlogRouter);

app.listen(port,()=>{
    console.log("Server Started");    
});