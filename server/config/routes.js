'use strict';

function configLoginRoutes(app, passport) {    
    var loginCtrl = require('../controllers/login');    
    app.get(['/login', '/login/index'], loginCtrl.actionIndex);
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/success',
        failureRedirect: '/login',
        failureFlash: true
    }));
    app.get('/success', redirectUnauthorized, loginCtrl.actionSuccess);
    app.get('/logout', function(req, resp) {
        req.logout();
        resp.redirect('/login');
    });

    app.get('/', redirectUnauthorized, loginCtrl.actionSuccess);
}

function redirectUnauthorized(req, resp, next) {
    if (!req.user) {
        resp.redirect('/login');
    }
    next();
}

module.exports = function (app, passport) {
    configLoginRoutes(app, passport);
}
