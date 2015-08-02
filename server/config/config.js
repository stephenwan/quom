var path = require('path');

module.exports = {
    constants: {
        title: 'Quom'
    },    
    secret: 'quom@shenzhen',
    root: path.normalize(__dirname + '/../'),
    db: 'mongodb://localhost/quom'    
};