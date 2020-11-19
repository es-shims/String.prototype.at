'use strict';

var define = require('define-properties');
var RequireObjectCoercible = require('es-abstract/2020/RequireObjectCoercible');
var callBind = require('call-bind');

var implementation = require('./implementation');

var getPolyfill = require('./polyfill');
var bound = callBind(getPolyfill());

var shim = require('./shim');

var boundItemShim = function item(string, index) {
	RequireObjectCoercible(string);
	return bound(string, index);
};
define(boundItemShim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundItemShim;
