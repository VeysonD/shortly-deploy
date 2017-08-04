var path = require('path');
var mongoose = require('mongoose');

//console.log('mongoose', mongoose.connection);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', function() {
  console.log('WELCOME TO MON GOD');
});
mongoose.connect ('mongodb://localhost/shortlydb');

module.exports = db;
