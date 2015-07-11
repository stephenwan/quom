'use strict';


module.exports = function(config) {

    return {
	feedConstants: feedApplicationLevelConstants	
    };

    function feedApplicationLevelConstants(req, res, next) {
	req.constants = config.constants;
	next();    
    }
    
}



