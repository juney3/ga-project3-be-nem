//Passport and JWT
var passport = require('passport';
var passportJWT = require('passport-jwt');
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;

//Require config file
var config - require('./config');

//Import Mongoose models
const mongoose = require('../models/User');
const User = mongoose.model('User');

var params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = function() {
  var strategy = new Strategy(params, (payload, callback) => {
    var user = User.findById(payload.id) || null
    if (user) {
      return callback(null, {
        id: user.id
      })
    }
    else {
      return callback(new Error('User not found'), null)
    }
  })
  passport.user(strategy)
  return {
    initialize: function() {
      return passport.initialize()
    },
    authenticate: function() {
      return passport.authenticate('jwt', {session: false})
    }
  }
}
