'use strict';

var expect = require('chai').expect;

require('./model-test-helper');
require('../models/users');
var User = require('mongoose').model('User');


describe('Model users', function() {

    beforeEach(function(done) {
        new User({
            email: 'main@main.com',
            firstName: 'main',
            lastName: 'main'
        }).save(done);
    });
    
    afterEach(function(done) {
        User.collection.remove();
        done();
    });
    
    it('Can create user', function(done) {
        var userData = {
            email: 'test@test.com',
            lastName: 'test',
            firstName: 'test'
        };
        
        User.create(userData, function(err, user) {
            expect(err).to.be.null;
            expect(user.email).to.equal(userData.email);
            done();
        });
    });

    it('Can list users', function(done) {
        User.list({}, function(err, users) {
            expect(users.length).to.equal(1);
            expect(users[0].lastName).to.equal('main');
            done();
        });

    });

});