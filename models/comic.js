// Require Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let List = require('./List.js');

// Schema definition
let ComicSchema = new Schema({
  marvelId: Number,
  character: String,
  title: String,
  issueNumber: Number,
  description: String,
  pageCount: Number,
  url: String,
  extension: String,
  coverImage: String,
  isRead: Boolean,
  notes: String,
  lists: [{
    type: Schema.Types.ObjectId,
    ref: 'List'
  }]
})

let Comic = mongoose.model('Comic', ComicSchema);

module.exports = Comic;
