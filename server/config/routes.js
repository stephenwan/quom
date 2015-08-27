'use strict';

var loginCtrl = require('../controllers/login'),
    usersCtrl = require('../controllers/users'),
    authenticationMw = require('../middlewares/authentication');

var $$app, $$passport, authentication;

function unprotectedRoutes() {
    $$app.get(['/login', '/login/index'], loginCtrl.index);
    $$app.get('/logout', loginCtrl.logout);
    $$app.get('/registration', usersCtrl.registration);
    $$app.post('/registration', usersCtrl.registration);
} 

function protectedRoutes() {
    var _a = authentication;
    $$app.post('/login', _a.authenticate);
    $$app.get('/success', _a.guard, loginCtrl.success);
    $$app.get('/', _a.guard, loginCtrl.success);
}

module.exports = function (app, passport) {

    $$app = app;
    $$passport = passport;

    if (!$$app || !$$passport)
      throw new Error('Undefined dependency in ' + __filename);

    authentication = authenticationMw($$passport);

    unprotectedRoutes();
    protectedRoutes();
}
