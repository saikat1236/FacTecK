const express = require('express')
const path = require("path");
const app=express()
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;

app.use(express.static('public'))
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', require('./routes/news1'))
app.use("/", require("./routes/news"));
app.get("/news", (req, res) => {
  //   res.sendFile(path.join(__dirname, "/views/news1.ejs"));
  // res.send({ name: "GeeksforGeeks" });
  // res.sendFile(path.resolve("views/news1.ejs"));
  res.sendFile("views/news.ejs", { root: __dirname });
});
app.get("/news1", (req, res) => {
  res.sendFile("views/news1.html", { root: __dirname });
});
app.get("/news2", (req, res) => {
  res.sendFile("views/news2.html", { root: __dirname });
});
app.get("/news3", (req, res) => {
  res.sendFile("views/news3.html", { root: __dirname });
});
app.set('views', './views')
// app.set("views", path.join(__dirname, "views"));
// app.engine("html", require("ejs").renderFile);
app.listen(port, () => console.log("started"))