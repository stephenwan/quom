var express = require('express')
  , passport = require('passport')
  , merge = require('merge')
  , config = require('./config/config')
  , expressConfig = require('./config/express')
  , passportConfig = require('./config/passport')
  , routesConfig = require('./config/routes');

var app = express();

passportConfig(passport);
expressConfig(app, passport);
routesConfig(app, passport);


module.exports = app;






