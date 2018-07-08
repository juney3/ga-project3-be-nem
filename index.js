// Core dependencies
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

// Controllers
const usersController = require('./controllers/usersController.js');
const comicsController = require('./controllers/comicsController.js');
const listsController = require('./controllers/listsController.js');
const charactersController = require('./controllers/charactersController.js')
const apiController = require('./controllers/apiController.js')

// Initialize express
const app = express();

// Require passport
const passport = require('./config/passport')();

// Express configuration
app.use(parser.urlencoded({
  extended: true
app.use(cors());
app.use(parser.json());
app.use(passport.initialize());

// Routes
app.use('/users', usersController);
app.use('/character', charactersController);
app.use('/comics', comicsController);
app.use('/api', apiController);
app.use('/api/lists', listsController);

// Set port
app.listen(process.env.PORT || 3010, () => console.log("comic.ly is doing awesome things on port 3010"));
