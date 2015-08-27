'use strict';

var $$passport;

function authenticate() {
    $$passport.authenticate('local', {
        successRedirect: '/success',
        failureRedirect: '/login',
        failureFlash: true
    }).apply(null, arguments);
}

function redirectUnauthorized(req, resp, next) {
    if (!req.user) {
        return resp.redirect('/login');
    }
    return next();
}


module.exports = function(passport) {
    $$passport = passport;

    if (!$$passport)
      throw new Error('Undefined dependency in ' + __filename);

    return {
        authenticate: authenticate,
        guard: redirectUnauthorized
    };
}