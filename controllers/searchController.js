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

  setQueryDates(startYear, endYear)
  console.log("minDate is", dates[0])
  console.log("maxDate is", dates[1])

  // Define query URL
  let apiUrl =`https://gateway.marvel.com:443/v1/public/characters/${req.body.characterName}/comics?dateRange=${req.body.startYear}-01-01%2C%20${req.body.endYear}-12-31&apikey=${config.PUBLIC_KEY}&ts=${ts}&hash=${hash}`

  console.log(apiUrl);

  Character.findOne({
    characterName: character
  })
    .then(foundCharacter => {
      console.log("found the character!")
      console.log(foundCharacter);
    })
    .catch(err => {
      console.log("error finding character", err)
    })

  // axios.get(apiUrl)
  //   .then(response => {
  //     let searchResults = response.data.data.results;
  //     res.json(searchResults);
  //   })
  //   .catch(err => {
  //     console.log("Search error", err);
  //   })
})

module.exports = router;
