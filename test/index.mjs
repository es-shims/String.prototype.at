import item from 'string.prototype.item';
import * as itemModule from 'string.prototype.item';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	t.test('bad string/this value', (st) => {
		st.throws(() => item(undefined), TypeError, 'undefined is not an object');
		st.throws(() => item(null), TypeError, 'null is not an object');
		st.end();
	});

	runTests(item, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(itemModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports'
	);

	const { shim, getPolyfill, implementation } = itemModule;
	t.equal(await import('string.prototype.item/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('string.prototype.item/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('string.prototype.item/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
