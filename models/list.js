// Require Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Required models
const User = require('./User.js');
const Comic = require('./Comic.js');

// Schema definition

let ListSchema = new Schema({
  listName: String,
  listDescription: String,
  listIsPublic: Boolean,
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comics: [{
    type: Schema.Types.ObjectId,
    ref: 'Comic'
  }]
},
  {
    timestamps: true
  })


// Export

let List = mongoose.model('List', ListSchema);

module.exports = List;
