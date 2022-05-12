const express = require('express');
const app = express();
const port = process.env.PORT || 3080;
// const fs = require('fs');


const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://crypto-news-live3.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
    'X-RapidAPI-Key': '47e9141977mshbd24a2d489d7c64p12cf85jsn3a0fe2ebe61d'
  }
};

const fetchNews = async () => {
  try {
    const response = await axios.request(options);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};


app.get('/api', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  let news = await fetchNews();
  news.length = 8;
  res.json(news);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
