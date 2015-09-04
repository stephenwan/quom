var localStrategy = require('./passport/local'),
    mongoose = require('mongoose');

function config(passport) {    

    passport.use(localStrategy);

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        var User = mongoose.model('User');
        User.findOne({ _id: id}, done);
    });    
}

module.exports = config;