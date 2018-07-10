const express = require('express');
const router = express.Router();
const md5 = require('md5');
const config = require('../config.js')

let date = Date.now()

router.post('/character', (req, res) => {
  console.log("here is the character name", req.body.characterName)
  console.log("here is the timestamp", date)
})
