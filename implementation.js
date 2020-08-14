'use strict';

var RequireObjectCoercible = require('es-abstract/2020/RequireObjectCoercible');
var ToInteger = require('es-abstract/2020/ToInteger');
var ToString = require('es-abstract/2020/ToString');

var callBound = require('es-abstract/helpers/callBound');

var $charAt = callBound('String.prototype.charAt');

module.exports = function item(index) {
	var O = RequireObjectCoercible(this);

	var S = ToString(O);

	var len = S.length;

	var relativeIndex = ToInteger(index);

	var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;

	if (k < 0 || k >= len) {
		return void undefined;
	}

	return $charAt(S, k);
};
