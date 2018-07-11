//Controller configuration
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('../config/passport');
const config = require('../config/config');

// Required models
const List = require('../models/List');
const User = require('../models/User');
const Comic = require('../models/Comic');


//Routes
router.get('/:id', (req, res) => {
  console.log("list controller getting one list")
})

router. get('/', (req, res) => {
  console.log("list controller getting all lists")
})
