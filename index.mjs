import callBind from 'call-bind';
import RequireObjectCoercible from 'es-abstract/2023/RequireObjectCoercible.js';

import getPolyfill from 'string.prototype.at/polyfill';

const bound = callBind(getPolyfill());

export default function at(string, index) {
	RequireObjectCoercible(string);
	return bound(string, index);
}

export { default as getPolyfill } from 'string.prototype.at/polyfill';
export { default as implementation } from 'string.prototype.at/implementation';
export { default as shim } from 'string.prototype.at/shim';
