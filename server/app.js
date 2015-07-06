var express = require('express')
  , merge = require('merge')
  , config = require('./config/config')
  , expressConfig = require('./config/express');

var app = express();

expressConfig(app);

app.get('/', function(req, res) {
    res.render('login', merge(true, config.constants, { errorMessage: null }));
});

module.exports = app;





