const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.CONSTRING);
        console.log("connected to db");   
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}

module.exports = connectDb;