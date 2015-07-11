var express = require('express')
  , merge = require('merge')
  , config = require('./config/config')
  , expressConfig = require('./config/express')
  , routesConfig = require('./config/routes');

var app = express();

expressConfig(app);
routesConfig(app);

module.exports = app;





