
if ("news" in navigator) {
  console.log("geolocation available");

    let  top, evr;
    try {
      const api_url = "/news_news";
      const response = await fetch(api_url);
      const json = await response.json();
      top = json.top.currently;
      evr = json.evr.results[0].measurements[0];
      document.getElementById("top_title").textContent = top.articles[0].title;
      document.getElementById("top_img").textContent = top.articles[0].urlToImage;
      document.getElementById("evr_title").textContent = evr.parameter;
      document.getElementById("evr_img").textContent = evr.value;
    } catch (error) {
      console.error(error);
    }

    const data = { top, evr };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  
} else {
  console.log("news is not available");
}
