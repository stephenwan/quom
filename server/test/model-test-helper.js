var mongoose = require('mongoose'),
    db_url = 'mongodb://localhost/test_db';

var connect = function () {
    var options = { server: { socketOptions: { keepAlive: 1 } } };
    mongoose.connect(db_url, options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);