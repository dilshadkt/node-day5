const http = require("node:http");
const os = require("node:os");
console.log(os.cpus().length);
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("home page");
  } else if (req.url === "/slow") {
    for (let i = 0; i < 6000000000; i++) {}
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("slower page");
  }
});
server.listen(8000);
