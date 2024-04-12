// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-sum-series@v0.2.1-esm/index.mjs";function n(n){var r,m;return n<=-1?NaN:(m=s(n))>.95?t(1+n)-n:m<e?-n*n/2:(r={initialValue:-n},i(function(s){var t=-s,e=-1,i=0;return function(){return(e*=t)/(i+=1)}}(n),r))}export{n as default};
//# sourceMappingURL=index.mjs.map
