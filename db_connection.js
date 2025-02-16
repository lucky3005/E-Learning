const mongoose = require("mongoose");

async function DBConnection(url) {
mongoose.connect(url)
.then(()=>console.log("MongoDB Connected"))
.catch((e)=>console.log("MongoDB Connection Error"));
}

module.exports = DBConnection;