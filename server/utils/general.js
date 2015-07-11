'use strict';

var deepcopy = require('deepcopy');
var merge = require('merge');

module.exports.deepcopy = deepcopy;
module.exports.readnprop = readNestedProperty;
module.exports.merge = merge;

function readNestedProperty(obj, properties) {
    var cur = deepcopy(obj);
    var value = undefined;
    
    properties.every(function(p) {
	if (cur[p] !== undefined) {
	    value = cur = cur[p];
	    return true;	    
	}
	value = undefined;
	return false;	
    })
    
    return value;    
}
