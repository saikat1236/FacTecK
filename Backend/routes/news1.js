
const fetch = require("node-fetch");
var mainContainer = document.getElementById("myData");
var div = document.createElement("div");
fetch(
  "http://newsapi.org/v2/top-headlines?country=in&apiKey=89aeec7315fc418c8d84c2246035737c")

  //http://newsapi.org/v2/top-headlines?country=in&apiKey=89aeec7315fc418c8d84c2246035737c"
  //https://jsonplaceholder.typicode.com/users
.then((response) => response.json())
    .then((data) => console.log(data.articles[0].title))
    .catch((err) => console.log(err));
    // console.log("Name of the first user in the array:");
    // console.log(json[0].name);
  






// const express = require('express');
// const news = express.Router();
// const fetch = require('node-fetch');


// // const app = express();
// // const port = process.env.PORT || 3000;
// // app.listen(port, () => {
// //   console.log(`Starting server at ${port}`);
// // });


// // app.post('/api', (request, response) => {
// //   const data = request.body;
// //   const timestamp = Date.now();
// //   data.timestamp = timestamp;
// //   database.insert(data);
// //   response.json(data);
// // });

// news.get('/news_news', async (request, response) => {
//   // console.log(request.params);

//   const top_url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=89aeec7315fc418c8d84c2246035737c";
//   const top_response = await fetch(top_url);
//   const top_data = await top_response.json();

//   const evr_url =
//     "http://newsapi.org/v2/everything?" +
//     "sources=bbc-news&" +
//     "apiKey=89aeec7315fc418c8d84c2246035737c";
//   const evr_response = await fetch(evr_url);
//   const evr_data = await evr_response.json();

//   const data = {
//     top: top_data,
//     evr: evr_data,
//   };
//   response.json(data);
// });
// module.exports = news;