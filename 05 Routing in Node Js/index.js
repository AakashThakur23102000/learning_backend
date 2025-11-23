const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const pathName = req.url;
    console.log(pathName)
    if (pathName === "/aakash" || pathName === "/") {
        res.end("Hello Aakash")
    } else {
        res.writeHead(404)
        res.end("Hello Unknown person.")
    }
})


server.listen(8000,"127.0.0.1", () => {
    console.log("Our server is working.......")
})