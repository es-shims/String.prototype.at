'use strict';

var RequireObjectCoercible = require('es-abstract/2023/RequireObjectCoercible');
var ToIntegerOrInfinity = require('es-abstract/2023/ToIntegerOrInfinity');
var ToString = require('es-abstract/2023/ToString');

var callBound = require('call-bind/callBound');

var $charAt = callBound('String.prototype.charAt');

module.exports = function at(index) {
	var O = RequireObjectCoercible(this);

	var S = ToString(O);

	var len = S.length;

	var relativeIndex = ToIntegerOrInfinity(index);

	var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;

	if (k < 0 || k >= len) {
		return void undefined;
	}

	return $charAt(S, k);
};
