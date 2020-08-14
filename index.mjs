import callBind from 'es-abstract/helpers/callBind.js';
import RequireObjectCoercible from 'es-abstract/2020/RequireObjectCoercible.js';

import getPolyfill from 'string.prototype.item/polyfill';

const bound = callBind(getPolyfill());

export default function item(string, index) {
	RequireObjectCoercible(string);
	return bound(string, index);
}

export { default as getPolyfill } from 'string.prototype.item/polyfill';
export { default as implementation } from 'string.prototype.item/implementation';
export { default as shim } from 'string.prototype.item/shim';
