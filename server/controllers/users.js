'use strict';

function actionRegistration(req, resp){
    if (req.body) {
        console.log('req body:', req.body);
    } else {        
        resp.render('users/registration', {error: req.flash('error')});
    }
}

module.exports = {
    registration: actionRegistration
};