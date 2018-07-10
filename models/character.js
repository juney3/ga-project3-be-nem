// Require Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schema definitions
let CharacterSchema = new Schema({
  characterName: String,
  marvelId: Number
})

let Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;
