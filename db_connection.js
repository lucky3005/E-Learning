const mongoose = require("mongoose");

async function DBConnection(url) {
mongoose.connect(url)
.then(()=>console.log("MongoDB Connected"))
.catch((e)=>console.log("MongoDB Connection Error"+e.message));
}

module.exports = DBConnection;