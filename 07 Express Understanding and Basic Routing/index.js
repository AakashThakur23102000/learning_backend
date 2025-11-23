const http = require("http");
const express = require("express");

const app = express();

app.get("/",(req, res, next) => {
    res.send("Working as same.")
})

app.listen(3000, () => {
    console.log("<--------- Server is running -------->")
})