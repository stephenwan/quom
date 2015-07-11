'use strict';

var utils = require('../utils/general');

module.exports.index = indexCtrl;
module.exports.registration = regCtrl;

function regCtrl(req, res) {
    res.render('login/registration');    
}

function indexCtrl(req, res) {
    if (!req.user)
	res.render('login/index', utils.merge(true, req.constants, { errorMessage: null}));
    else
	res.redirect();               
}
