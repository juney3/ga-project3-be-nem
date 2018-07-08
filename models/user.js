// Require Mongoose
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

// bcrypt settings
const bcrypt = require('bcrypt');

// Require other models
const List = require('./List.js');

// Schema definition

let UserSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  lists: [{
    type: Schema.Types.ObjectId,
    ref: 'List'
  }]
},
  {
    timestamps: true
  });

  UserSchema.pre('save', function(next) {
    const user = this;
    bcrypt.genSalt(10, function (err, salt){
      if (err) {
        return next("Password salting error", err);
      }

      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next("Password hashing error", err);
        }
        console.log("Saving hashed password");
        user.password = hash;
        next();
      })
    })
  })

  mongoose.model('User', UserSchema);

  module.exports = mongoose
