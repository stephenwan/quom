var localStrategy = require('./passport/local');
var userModel = require('../models/user');

function config(passport) {    

    passport.use(localStrategy);

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        userModel.findUser('id', id, done);
    });    
}

module.exports = config;