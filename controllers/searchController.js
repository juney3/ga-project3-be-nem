// Requirements
const express = require('express');
const router = express.Router();
const md5 = require('md5');
const axios = require('axios');
const config = require('../config.js')
const Character = require('../models/Character')

let ts = Date.now()
let hash = md5(ts+config.PRIVATE_KEY+config.PUBLIC_KEY);

let apiUrl = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${config.PUBLIC_KEY}&hash=${hash}`

router.post('/', (req, res) => {
  console.log("here is the character name", req.body.characterName)
  console.log("here is the timestamp", ts)

  console.log("here is the awesome hash", hash);
  res.send("Received the request!");

})

module.exports = router;
