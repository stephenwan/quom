'use strict';

function actionRegistration(req, resp){
    if (req.body && req.body.email) {
        console.log('req body:', req.body);
        resp.end();
    } else {        
        resp.render('users/registration', {error: req.flash('error')});
    }
}

module.exports = {
    registration: actionRegistration
};