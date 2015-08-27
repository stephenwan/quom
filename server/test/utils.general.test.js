'use strict';

var expect = require('chai').expect;
var gutils = require('../utils/general');


describe('readnprop', function() {
    
    var targetFn = gutils.readnprop;
    var obj = { a: { b: { c: 0}}};   
    
    it('should read the property if all properties are defined in order', function() {
	var result = targetFn(obj, ['a', 'b', 'c']);	
	expect(result).to.equal(0);	
    })

    it('should return undefined if not all properties are defined in order', function() {
	var result = targetFn(obj, ['a', 'c', 'b']);
	expect(result).to.be.undefined;
	
    })

    it('should return undefined if property list is longer than being valid', function() {
	var result = targetFn(obj, ['a', 'b', 'c', 'd']);
	expect(result).to.be.undefined;
	
    })
    
})


describe('deepcopy', function() {

    var targetFn = gutils.deepcopy;
    var obj = { a: { b: {c: 0}}};

    it('value content of the deepcopied item should be equal to the original', function() {
	var result = targetFn(obj);
	expect(result.a.b.c).to.equal(0);	
    })

    it('object content of the deepcopied item should not be equal to the original', function() {
	var result = targetFn(obj);
	expect(result.a).not.to.equal(obj.a);	
    })        
})
