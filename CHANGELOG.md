# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.0](https://github.com/es-shims/String.prototype.item/compare/v0.2.0...v1.0.0) - 2020-11-19

### Commits

- [Tests] migrate tests to Github Actions [`46db207`](https://github.com/es-shims/String.prototype.item/commit/46db2071e09011c0493b6be8e92916522658ee90)
- [Breaking] rename package to `at` from `item` [`45e8442`](https://github.com/es-shims/String.prototype.item/commit/45e844230dc222bb4022046da66e742e1ce2f89e)
- Implementation [`5cbe085`](https://github.com/es-shims/String.prototype.item/commit/5cbe08589371a38e70d2b2fbf999dfee01b826f0)
- Initial commit [`a3bcdf9`](https://github.com/es-shims/String.prototype.item/commit/a3bcdf9c68913cab605147c9b13c7cf378776741)
- Tests [`757d12d`](https://github.com/es-shims/String.prototype.item/commit/757d12dd941e6a6e6755a2c2284a105066cf7fa6)
- readme [`ea86655`](https://github.com/es-shims/String.prototype.item/commit/ea86655416f26f1fa573a81be3fb723eb7072cf6)
- npm init [`0785efd`](https://github.com/es-shims/String.prototype.item/commit/0785efd5c7c933c029c3bfff9f6a23c354c108e2)
- [meta] add `auto-changelog` [`6092425`](https://github.com/es-shims/String.prototype.item/commit/60924256669c28b72f64511b363cbfb881447df6)
- [Tests] run `nyc` on all tests [`a9d0e84`](https://github.com/es-shims/String.prototype.item/commit/a9d0e84b8567722e3a4a3605668e829f99dd3137)
- [Tests] use shared travis-ci configs [`1ae5299`](https://github.com/es-shims/String.prototype.item/commit/1ae529956ee812fdaae8dde979a25fd36c9955c9)
- [actions] add automatic rebasing / merge commit blocking [`ce9f160`](https://github.com/es-shims/String.prototype.item/commit/ce9f16001092d3c9d4aea3a924b3a205a82a2967)
- [actions] add "Allow Edits" workflow [`b20f9ff`](https://github.com/es-shims/String.prototype.item/commit/b20f9ffe1b84272af694e2f8e4171bca871cef1f)
- [Robustness] call-bind the polyfill in the CJS entry point [`69adfc5`](https://github.com/es-shims/String.prototype.item/commit/69adfc500d4ad7209d1439eb298528c1b30a2ef6)
- [Tests] add `npm run lint` [`0c37080`](https://github.com/es-shims/String.prototype.item/commit/0c3708032f9887cbb7c3c5e055c3db964d408eae)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `auto-changelog` [`dacaa65`](https://github.com/es-shims/String.prototype.item/commit/dacaa65bd37d23738a18fa47438da4157ee95148)
- [meta] add `safe-publish-latest` [`1404e5a`](https://github.com/es-shims/String.prototype.item/commit/1404e5a05448503c5ded664b4bd8a2a085dfb006)
- Only apps should have lockfiles [`ca0a264`](https://github.com/es-shims/String.prototype.item/commit/ca0a264d99695f394f0768d81723f830e39ea781)
- [Dev Deps] update `aud`, `eslint` [`744777d`](https://github.com/es-shims/String.prototype.item/commit/744777d9a9f22b66e2a5542113d369a90cc023c2)
- [meta] add `funding` field [`900a1fe`](https://github.com/es-shims/String.prototype.item/commit/900a1fe2182c8f97ce41e96c29355a612df48c17)

## v0.2.0 - 2014-04-10

### Fixed

- Use `String#slice` instead of `String#substr` [`#1`](https://github.com/es-shims/String.prototype.item/issues/1)

### Commits

- Initial commit [`bb6b614`](https://github.com/es-shims/String.prototype.item/commit/bb6b614bb600f8968e20f523c0cfaa68b36e1293)
- Make the `at` property non-enumerable [`9f4b6ef`](https://github.com/es-shims/String.prototype.item/commit/9f4b6ef8754d36ab1f98ada32f9ae4c60f9a35f8)
- Implement `CheckObjectCoercible` [`a39cae6`](https://github.com/es-shims/String.prototype.item/commit/a39cae640ac388bbbc727788fd0ec8b38d3efd78)
- README: Add spec proposal [`a8ae6f7`](https://github.com/es-shims/String.prototype.item/commit/a8ae6f7c5621ef4b07612dd55e2b92ea90d29711)
- Correct the implementation of ToInteger [`b322eff`](https://github.com/es-shims/String.prototype.item/commit/b322effb1f67a33b12eaeac88530797ba35f2697)
- Avoid IE8’s broken `Object.defineProperty` [`b984c9c`](https://github.com/es-shims/String.prototype.item/commit/b984c9cae8d9fd977d350b74ce977158b4de2acb)
- README: Explicitly request SVG badges [`9871b97`](https://github.com/es-shims/String.prototype.item/commit/9871b9771db4ac6aa38b43114d655011acd2da18)
- Cache `nextIndex` [`f04e6f9`](https://github.com/es-shims/String.prototype.item/commit/f04e6f9428fa67c53302bf4cade820a5e7bee684)
- Use `String#substr` instead of creating new strings from scratch [`29cb510`](https://github.com/es-shims/String.prototype.item/commit/29cb5108b54a5ab97cddbd897834fad79960e1d7)
- Tag the v0.2.0 release [`114c610`](https://github.com/es-shims/String.prototype.item/commit/114c6109a54fd303eeeb675688df92369e50d556)
- Shorten the short URL [`e5af058`](https://github.com/es-shims/String.prototype.item/commit/e5af0582d1b23043c48d869dab3f6e16361177e5)
- Avoid `isNaN` [`220a0b8`](https://github.com/es-shims/String.prototype.item/commit/220a0b8e1d2da19406bf26bcb86022c2f24afa43)
- README: Add link to spec bug ticket [`1f37394`](https://github.com/es-shims/String.prototype.item/commit/1f37394c0b6029fecea2e5f807ebd9abeae247b4)
- README: Tweak link to the ES-discuss thread [`ad2f0ba`](https://github.com/es-shims/String.prototype.item/commit/ad2f0ba794b03dc2422f4efc654d76ace13d743f)
