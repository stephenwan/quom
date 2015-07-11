'use strict';

var login = require('../controllers/login');

module.exports = function (app, passport) {
    app.get('/login', login.index);
    app.get('/registration', login.registration);    
}
