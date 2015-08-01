var LocalStrategy = require('passport-local').Strategy;
var userModel = require('../../models/user');

module.exports = new LocalStrategy(userModel.authenticate);

