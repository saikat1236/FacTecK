const express = require("express");
const http = require("http");
const app = express();
const fs = require('fs');
const { url } = require('inspector');
const hostname = '127.0.0.1';
const port = 3000;
const home =fs.readFileSync('../Frontend/tech-contact.html')
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     // url = req.url;
//     req.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     if (url == "/") {
//       req.end(home);
//     } else if (url == "/news") {
//       req.end(news);
//     } else if (url == "/facts") {
//       req.end(facts);
//     } else if (url == "/technology") {
//       req.end(technology);
//     } else if (url == "/knowledge") {
//       req.end(knowledge);
//     } else {
//             req.statusCode = 404;
//     //    req.end("404 not found");
//     }
//     req.end('hello saikat');
// });

app.get("/", (req, res) => {
    res.send("This is our home page")
});
app.get("/news", (req, res) => {
  res.send("This is our news page");
});
app.get("/facts", (req, res) => {
  res.send("This is our facts page");
});
app.get("/technology", (req, res) => {
  res.send("This is our technology page");
});
app.get("/knowledge", (req, res) => {
  res.send("This is our knowledge page");
});
app.listen(port, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
// server.listen(port, hostname, () => {
//     console.log("server running at http://${hostname}:${port}/")
// });
// server.listen(port, hostname, () => {
//   console.log(`server running at http://${hostname}:${port}/`);
// });