var users = [
  { id: 1, username: 'yanyi', password: '123456'},
  { id: 2, username: 'fangfang', password: '654321'}
];

function findUser(attrName, value, cb) {
    var rusers = users.filter(_filterBy(attrName, value));
    if (rusers.length === 0) return cb(null, null);
    return cb(null, rusers[0]);
}

function authenticate(username, password, cb) {
    findUser('username', username, function(err, user) {
        if (err) return cb(err);
        if (!user) return cb(null, false, {message: 'Unknown user'});
        if (user.password !== password)  return cb(null, false, {message: 'Invalid password'});
        return cb(null, user);
    });
}

function _filterBy(attrName, value) {
    return function(o) {
        return o[attrName] === value;
    };    
}

module.exports.findUser = findUser;
module.exports.authenticate = authenticate;