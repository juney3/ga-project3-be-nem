// Require Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// bcrypt settings
const bcrypt = require('bcrypt-nodejs');

// Require other models
let List = require('./List.js');
let ComicUser = require('./ComicUser.js');

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
  }],
  comicUsers: [{
    type: Schema.Types.ObjectId,
    ref: 'ComicUser'
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

UserSchema.methods.comparePassword = function(submittedPassword, callback) {
  bcrypt.compare(submittedPassword, this.password, function (err, isMatch) {
    if (err) {
      return callback("password comparison error", err);
    }
    callback(null, isMatch);
  })
}

// Export

let User = mongoose.model('User', UserSchema);

module.exports = User;
