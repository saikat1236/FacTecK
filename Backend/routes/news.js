const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


newsr.get('/',async(req,res)=>{
    try {
      var top1_url =
        "http://newsapi.org/v2/top-headlines?country=in&apiKey=89aeec7315fc418c8d84c2246035737c";
      var top2_url = "http://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=89aeec7315fc418c8d84c2246035737c";
      var top3_url = "http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=89aeec7315fc418c8d84c2246035737c";
      var evr_url =
        "http://newsapi.org/v2/everything?" +
        "sources=bbc-news&" +
        "apiKey=89aeec7315fc418c8d84c2246035737c";

      const top1_news_get = await axios.get(top1_url);
      const top2_news_get = await axios.get(top2_url);
      const top3_news_get = await axios.get(top3_url);
      const evr_news_get = await axios.get(evr_url);
      // res.render('news',{articles:news_get.data.articles})
      res.render("news", {
        top1_articles: top1_news_get.data.articles,
        top2_articles: top2_news_get.data.articles,
        top3_articles: top3_news_get.data.articles,
        evr_articles: evr_news_get.data.articles,
      });
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})
// newsr.get("/", async (req, res) => {
//   try {
//     var url =
//       "http://newsapi.org/v2/top-headlines?" +
//       "country=in&" +
//       "apiKey=89aeec7315fc418c8d84c2246035737c";

//     const news1_get = await axios.get(url);
//     res.render("news", { articles: news1_get.data.articles });
//   } catch (error) {
//     if (error.response) {
//       console.log(error);
//     }
//   }
// });

// newsr.post('/search',async(req,res)=>{
//     const search=req.body.search
//     // console.log(req.body.search)

//     try {
//         var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=89aeec7315fc418c8d84c2246035737c`;

//         const news_get =await axios.get(url)
//         res.render('news',{articles:news_get.data.articles})
        
        

        
        
//     } catch (error) {
//         if(error.response){
//             console.log(error)
//         }
        
//     }
// })


module.exports=newsr