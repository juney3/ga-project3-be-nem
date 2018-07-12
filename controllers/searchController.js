// Requirements
const express = require('express');
const router = express.Router();
const md5 = require('md5');
const axios = require('axios');
const Character = require('../models/character.js')

let ts = Date.now()
let hash = md5(ts+process.env.PRIVATE_KEY+process.env.PUBLIC_KEY);

router.post('/', (req, res) => {
  // Search database for character ID

  // Define query URL
  let apiUrl =`https://gateway.marvel.com:443/v1/public/characters/${req.body.characterName}/comics?dateRange=${req.body.startYear}-01-01%2C%20${req.body.endYear}-12-31&apikey=${process.env.PUBLIC_KEY}&ts=${ts}&hash=${hash}`

  console.log(apiUrl);

  axios.get(apiUrl)
    .then(response => {
      let searchResults = response.data.data.results;
      res.json(searchResults);
    })
    .catch(err => {
      console.log("Search error", err);
    })
})

module.exports = router;
