var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var merge = require('merge');

var constants = {
    title: 'Quom'
};

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use('/public', express.static('public'));


var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var dbUrl = 'mongodb://10.0.1.14:27017/test';


var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('records');
  // Find some documents
  collection.find({}).toArray(function(err, records) {
      console.log("err?", err);
      
      callback(records);
  });      
}


// mongoClient.connect(dbUrl, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server.");

//     findDocuments(db, function(records) {
//         console.log(records);
//         db.close();
//     });
    

// });


app.get('/', function(req, res) {
    res.render('login', merge(true, constants, { errorMessage: null }));
});

module.exports = app;

