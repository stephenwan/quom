var merge = require('merge');

function actionIndex(req, resp) {
    if (req.user)
      resp.redirect('/success');
    else
      resp.render('login/index', merge(true, req.constants, {error: req.flash('error')}));
}

function actionSuccess(req, resp) {   
    resp.render('login/login-success', { username: req.user.username});   
}

function actionLogout(req, resp) {
    req.logout();
    resp.redirect('/login');
}

module.exports = {
    index: actionIndex,
    success: actionSuccess,
    logout: actionLogout    
};






