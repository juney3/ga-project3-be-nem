// Requirements
const express = require('express');
const router = express.Router();
const md5 = require('md5');
const axios = require('axios');
const config = require('../config.js')
const Character = require('../models/Character')

let ts = Date.now()
let hash = md5(ts+config.PRIVATE_KEY+config.PUBLIC_KEY);

router.post('/', (req, res) => {
  console.log("here is the character name", req.body.characterName)
  console.log("here is the timestamp", ts)
  console.log("here is the awesome hash", hash);
  // Define query URL
  let apiUrl =`https://gateway.marvel.com:443/v1/public/characters/${req.body.characterName}/comics?dateRange=${req.body.startYear}-01-01%2C%20${req.body.endYear}-12-31&apikey=${config.PUBLIC_KEY}&ts=${ts}&hash=${hash}`

  console.log(apiUrl);

  axios.get(apiUrl)
    .then(response => {
      console.log("response received", response.data.data.results);
      let searchResults = response.data.data.results;
      res.json(searchResults);
    })
    .catch(err => {
      console.log("Search error", err);
    })
})

module.exports = router;
