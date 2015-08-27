'use strict';

var db_specs = {
    host: process.env['DBH'] || 'localhost',
    port: process.env['DBP'] || 27017,
    name: process.env['DB_NAME'] || 'test_db',
    protocol: process.env['DB_PROT'] || 'mongodb'    
};

function db_connection_string() {
    return db_specs['protocol'] + '://' + db_specs['host'] +
      ':' + db_specs['port'] + '/' + db_specs['name'];
}

module.exports = {
    db: db_connection_string()
};
