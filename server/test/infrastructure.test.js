'use strict';

var expect = require('chai').expect;

describe('Database should be operational', function() {
    var db_url = 'mongodb://localhost/test_db';
    var MongoClient = require('mongodb').MongoClient
    var database;
    var collection;

    beforeEach(function(done) {
        MongoClient.connect(db_url, function(err, db) {
            if (!err) {
                database = db;
                collection = db.collection('test_users');
                collection.insert({
                    name: 'main',
                    age: 1
                }, function() {
                    done();            
                });
            }
        })       
    });

    afterEach(function() {
        if (database) {
            collection.remove({});
            database.close();
        }
    });
    
    it('Database should be defined', function(){
        expect(database).to.be.defined;
    });

    it('Can read record from database', function(done) {
        collection.findOne({}, {}, function(e, doc) {
            expect(e).to.be.null;
            expect(doc.name).to.equal('main');
            expect(doc.age).to.equal(1);
            done();
        });
    });
    

    it('Can save record to database', function(done) {
        var record = { name: 'tester', age: 5 };
        collection.insert(record, function(err, doc) {
              expect(err).to.be.null;
              expect(doc.result.n).to.equal(1);
              done();
          });
    });

});