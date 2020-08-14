# string.prototype.item <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `String.prototype.item` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the proposed [spec](https://tc39.es/proposal-item-method/).

Because `String.prototype.item` depends on a receiver (the `this` value), the main export takes the string to operate on as the first argument.

## Getting started

```sh
npm install --save string.prototype.item
```

## Usage/Examples

```js
var item = require('string.prototype.item');
var assert = require('assert');

var arr = [1, [2], [], 3];

var results = item(arr, function (x, i) {
	assert.equal(x, arr[i]);
	return x;
});

assert.deepEqual(results, [1, 2, 3]);
```

```js
var item = require('string.prototype.item');
var assert = require('assert');
/* when String#item is not present */
delete String.prototype.item;
var shimmedFlatMap = item.shim();

var mapper = function (x) { return [x, 1]; };

assert.equal(shimmedFlatMap, item.getPolyfill());
assert.deepEqual(arr.item(mapper), item(arr, mapper));
```

```js
var item = require('string.prototype.item');
var assert = require('assert');
/* when String#item is present */
var shimmedIncludes = item.shim();

var mapper = function (x) { return [x, 1]; };

assert.equal(shimmedIncludes, String.prototype.item);
assert.deepEqual(arr.item(mapper), item(arr, mapper));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/string.prototype.item
[npm-version-svg]: http://versionbadg.es/es-shims/String.prototype.item.svg
[travis-svg]: https://travis-ci.org/es-shims/String.prototype.item.svg
[travis-url]: https://travis-ci.org/es-shims/String.prototype.item
[deps-svg]: https://david-dm.org/es-shims/String.prototype.item.svg
[deps-url]: https://david-dm.org/es-shims/String.prototype.item
[dev-deps-svg]: https://david-dm.org/es-shims/String.prototype.item/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/String.prototype.item#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/string.prototype.item.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/string.prototype.item.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/string.prototype.item.svg
[downloads-url]: http://npm-stat.com/charts.html?package=string.prototype.item
