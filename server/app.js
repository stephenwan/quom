var express = require('express')
  , passport = require('passport')
  , mongoose = require('mongoose')
  , fs = require('fs')
  , join = require('path').join
  , config = require('./config/config')
  , db_uri = require('./config/env/dev').db;

var app = express();

var connect = function() {
    var options = { server: {socketOptions: {keepAlive: 1}}};    
    mongoose.connect(db_uri, options);
};

mongoose.connection.on('connected', function() {
    console.log('Connect to db successfully.');
})

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

connect();

require('./config/passport')(passport);
require('./config/express')(app, passport);
require('./config/routes')(app, passport);

fs.readdirSync(join(__dirname, 'models')).forEach(function(file) {
    if (/\.js$/.test(file)) require(join(__dirname, 'models', file));
});

module.exports = app;






