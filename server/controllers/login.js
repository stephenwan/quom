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

module.exports = {
    actionIndex: actionIndex,
    actionSuccess: actionSuccess
};






