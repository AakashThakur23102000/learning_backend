const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
    res.end("Hello from server")
})

server.listen(8000,"127.0.0.1", () => {
    console.log("Our server is working.......")
})