var LocalStrategy = require('passport-local').Strategy;



var users = [
  { account: 'yanyi', password: '123456'},
  { account: 'fangfang', password: '654321'}
];

var User = function() {

    this.authenticate = function(user, password) {
        return user.password === password;
    };
    
    this.load = function(account, callback) {
        var loaded = users.filter(function(e) {
            return e.account === account;
        });

        if (loaded.length > 0) {
            callback(null, loaded[0]);
        } else {
            callback(null, null);
        }        
    };
};

var options = {
    usernameField: 'account',
    passwordField: 'password'    
};




function handler(account, password, done) {
    User.load(account, function(err, user) {
        if (err) return done(err);
        if (!user) {
            return done(null, false, { message: 'Unknown user'});
        }
        if (!User.authenticate(user, password)) {
            return done(null, false, { message: 'Invalid password'});
        }        
        return done(null, user);
    });
}

module.exports = new LocalStrategy(options,handler);