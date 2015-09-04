var LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose');

function authenticate(accountName, password, cb) {
    var User = mongoose.model('User');
    
    User.findOne({ accountName: accountName}, function(err, user) {
        if (err) return cb(err);
        if (!user) return cb(null, false, { message: 'Unknown user'});
        if (!user.authenticate(password)) return cb(null, false, { message: 'Invalid password'});
        return cb(null, user);
    });        
}


module.exports = new LocalStrategy(authenticate);


