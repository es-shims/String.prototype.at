'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimStringPrototypeItem() {
	var polyfill = getPolyfill();
	define(
		String.prototype,
		{ item: polyfill },
		{ item: function () { return String.prototype.item !== polyfill; } }
	);
	return polyfill;
};
