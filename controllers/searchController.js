// Requirements
const express = require('express');
const router = express.Router();
const md5 = require('md5');
const axios = require('axios');
const Character = require('../models/character.js')
const config = require('../config.js')

let ts = Date.now()
let hash = md5(ts+config.PRIVATE_KEY+config.PUBLIC_KEY);

router.post('/', (req, res) => {
  // Search database for character ID
  let character = req.body.characterName
  let startYear = req.body.startYear
  let endYear = req.body.endYear
  let minDate;
  let maxDate;
  let dates=[];
  let characterMarvelId;
  let apiUrl;

  function setQueryDates(start, end) {
    if (!start && !end) {
      minDate = 1950;
      maxDate = 2018;
    }
    else {
      minDate = start;
      maxDate = end;
    }
    dates.push(minDate);
    dates.push(maxDate);
    return(dates);
  }

  Character.findOne({
    characterName: character
  })
    .then(foundCharacter => {
      characterMarvelId = foundCharacter.characterMarvelId;
      setQueryDates(startYear, endYear);

      apiUrl =`https://gateway.marvel.com:443/v1/public/characters/${characterMarvelId}/comics?dateRange=${minDate}-01-01%2C%20${maxDate}-12-31&apikey=${config.PUBLIC_KEY}&ts=${ts}&hash=${hash}`

      axios.get(apiUrl)
        .then(response => {
          let searchResults = response.data.data.results;
          res.json(searchResults);
        })
        .catch(err => {
          console.log("Search error", err);
        })
    })
    .catch(err => {
      console.log("error finding character", err)
    })
})

module.exports = router;
