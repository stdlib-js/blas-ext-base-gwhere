<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gwhere

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Take elements from one of two strided arrays depending on a condition.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import gwhere from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gwhere@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gwhere@deno/mod.js';
```

#### gwhere( N, condition, strideC, x, strideX, y, strideY, out, strideOut )

Takes elements from one of two strided arrays depending on a condition.

```javascript
var condition = [ 1, 0, 1 ];
var x = [ 1.0, 2.0, 3.0 ];
var y = [ 4.0, 5.0, 6.0 ];
var out = [ 0.0, 0.0, 0.0 ];

gwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
// out => [ 1.0, 5.0, 3.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **condition**: condition [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideC**: stride length for `condition`.
-   **x**: first input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.
-   **y**: second input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideY**: stride length for `y`.
-   **out**: output [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to select from every other element:

```javascript
var condition = [ 1, 0, 0, 1, 1, 0 ];
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];
var out = [ 0.0, 0.0, 0.0 ];

gwhere( 3, condition, 2, x, 2, y, 2, out, 1 );
// out => [ 1.0, 9.0, 5.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

// Initial arrays...
var condition0 = new Float64Array( [ 0.0, 1.0, 0.0, 1.0, 0.0, 1.0 ] );
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var out0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var condition1 = new Float64Array( condition0.buffer, condition0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

gwhere( 3, condition1, 2, x1, 2, y1, 2, out1, 1 );
// out0 => <Float64Array>[ 0.0, 2.0, 4.0, 6.0, 0.0, 0.0 ]
```

<!-- lint disable maximum-heading-length -->

#### gwhere.ndarray( N, condition, strideC, offsetC, x, strideX, offsetX, y, strideY, offsetY, out, strideOut, offsetOut )

<!-- lint enable maximum-heading-length -->

Takes elements from one of two strided arrays depending on a condition using alternative indexing semantics.

```javascript
var condition = [ 1, 0, 1 ];
var x = [ 1.0, 2.0, 3.0 ];
var y = [ 4.0, 5.0, 6.0 ];
var out = [ 0.0, 0.0, 0.0 ];

gwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
// out => [ 1.0, 5.0, 3.0 ]
```

The function has the following additional parameters:

-   **offsetC**: starting index for `condition`.
-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to select from every other element starting from the second element:

```javascript
var condition = [ 0, 1, 0, 0, 0, 1 ];
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];
var out = [ 0.0, 0.0, 0.0 ];

gwhere.ndarray( 3, condition, 2, 1, x, 2, 1, y, 2, 1, out, 1, 0 );
// out => [ 2.0, 10.0, 6.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `out` unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dwhere`][@stdlib/blas/ext/base/dwhere], [`swhere`][@stdlib/blas/ext/base/swhere], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@deno/mod.js';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@deno/mod.js';
import gwhere from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gwhere@deno/mod.js';

var condition = bernoulli( 20, 0.5, {
    'dtype': 'generic'
});
console.log( condition );
var x = discreteUniform( 20, 0, 100, {
    'dtype': 'generic'
});
console.log( x );
var y = discreteUniform( 20, -100, 0, {
    'dtype': 'generic'
});
console.log( y );

var out = zeros( condition.length );
console.log( out );

gwhere( condition.length, condition, 1, x, 1, y, 1, out, 1 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gwhere.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gwhere

[test-image]: https://github.com/stdlib-js/blas-ext-base-gwhere/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-gwhere/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gwhere/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gwhere?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gwhere.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gwhere/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gwhere/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-gwhere/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gwhere/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-gwhere/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gwhere/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-gwhere/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gwhere/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gwhere/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/deno

[@stdlib/blas/ext/base/dwhere]: https://github.com/stdlib-js/blas-ext-base-dwhere/tree/deno

[@stdlib/blas/ext/base/swhere]: https://github.com/stdlib-js/blas-ext-base-swhere/tree/deno

</section>

<!-- /.links -->
