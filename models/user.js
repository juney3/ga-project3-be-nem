// Require Mongoose
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

// bcrypt settings
const bcrypt = require('bcrypt-nodejs');

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
  var user = this;
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

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  })
}

mongoose.model('User', UserSchema);

module.exports = mongoose;
