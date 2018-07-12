//Controller configuration
const express = require('express');
const router = express.Router();

// Required models
const Character = require('../models/character.js');


router.get('/', (req, res) => {
  Character.find({})
  .then(response => {
    console.log(response.data);
  })
  .catch(err => {
    console.log("error getting all characters", err)
  })
})

module.exports = router;
