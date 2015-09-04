'use strict';
var mongoose = require('mongoose');


function actionRegistration(req, resp){
    if (req.body && req.body.email) {
        var User = mongoose.model('User');
        User.create(req.body, function() {
            resp.status(201).end();           
        });
        
    } else {        
        resp.render('users/registration', {error: req.flash('error')});
    }
}

module.exports = {
    registration: actionRegistration
};