// Require Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Required models
let List = require('./List.js');
let Comic = require('./Comic.js')

// Schema definition
let ComicUserSchema = newSchema({
  hasRead: Boolean,
  notes: String,
  lists: [{
    type: Schema.Types.ObjectId,
    ref: 'List'
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

let ComicUser = mongoose.model('ComicUser', ComicUserSchema);

module.exports = ComicUser;
