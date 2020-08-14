'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return String.prototype.item || implementation;
};
