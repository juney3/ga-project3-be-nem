// Require Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = require('./User.js');
let Comic = require('./Comic.js');

// Schema definition

let ListSchema = new Schema({
  name: String,
  description: String,
  isPublic: Boolean,
  marvelId: Number,
  users: [{
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
