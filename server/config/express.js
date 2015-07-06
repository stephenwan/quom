var merge = require('merge')
  , path = require('path');

var express = require('express')
  , favicon = require('serve-favicon')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , flash = require('connect-flash');

var config = require('./config');

module.exports = function expressConfig(app, passport) {

    app.set('views', path.join(config.root, 'views'));
    app.set('view engine', 'jade');
    
    app.use('/public', express.static('public'));

    app.use(favicon(path.join(config.root, 'favicon.ico')));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(session({
        secret: config.secret,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 3600000 } // 1 hour
    }));

//    app.use(passport.initialize());
//    app.use(passport.session());

    app.use(flash());
    
};