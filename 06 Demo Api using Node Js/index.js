const http = require("http");
const url = require("url");

const ApiData = [
    {
        "source": { "pointer": "/data/attributes/firstName" },
        "title": "Invalid Attribute",
        "detail": "First name must contain at least two characters."
    },
    {
        "source": { "pointer": "/data/attributes/firstName" },
        "title": "Invalid Attribute",
        "detail": "First name must contain an emoji."
    }
]

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify(ApiData));
})


server.listen(8000, "127.0.0.1", () => {
    console.log("Our server is working.......")
})