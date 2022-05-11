const express = require('express');
const app = express();
const port = process.env.PORT || 3080;
// const fs = require('fs');

// const trends = [
//   {
//     img: spaceshooter,
//     text: "Learn how to build a Web3 FPS game using unity...",
//     link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-space-fps-game/",
//   },
//   {
//     img: netflix,
//     text: "The fisrt Moralis Project! Let's Netflix and chill...",
//     link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-netflix-clone/",
//   },
//   {
//     img: academy,
//     text: "Master DeFi in 2022. Start  at the Moralis Academy...",
//     link: "https://academy.moralis.io/courses/defi-101",
//   },
//   {
//     img: js,
//     text: "Become a Web3 Developer with just simple JS...",
//     link: "https://academy.moralis.io/all-courses",
//   },
//   {
//     img: youtube,
//     text: "Best youtube channel to learn about Web3...",
//     link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
//   },
// ];

app.get('/api', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({ "users": ["user1", "user2"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
