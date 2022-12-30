// const mongoose = require("mongoose");
const { default: mongoose } = require("mongoose");

mongoose.set("strictQuery", true);
function connectDB(){
    const uri = process.env.MONGODB_SRV;
    mongoose.connect(uri).then(() => console.log("Connected!"));
}

module.exports = connectDB;
