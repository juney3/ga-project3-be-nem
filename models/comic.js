// Require Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Required models
let List = require('./List.js');
let ComicUser = require('./ComicUser.js')

// Schema definition
let ComicSchema = new Schema({
  comicMarvelId: Number,
  comicTitle: String,
  comicIssueNumber: Number,
  comicDescription: String,
  comicPageCount: Number,
  comicResourceUrl: String,
  comicCoverImageUrl: String,
  comicOnSaleDate: Date,
  comicPrintPrice: String,
  lists: [{
    type: Schema.Types.ObjectId,
    ref: 'List'
  }],
  comicUsers: [{
    type: Schema.Types.ObjectId,
    ref: 'ComicUser'
  }]
})

let Comic = mongoose.model('Comic', ComicSchema);

module.exports = Comic;
