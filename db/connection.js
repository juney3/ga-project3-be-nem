const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/comicly')
  .then(connection => console.log("Connection to DB established"))
  .catch(err => console.log("Connection to DB failed", err))

module.exports = mongoose
