require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/db");

db().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("server is up and running on port",process.env.PORT);
    });
})
