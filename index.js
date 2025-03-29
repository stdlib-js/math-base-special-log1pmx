// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return Math.abs(n)}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"",u=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,i,u,a;if(null==n)return e.call(n);r=n[f],a=f,t=null!=(u=n)&&o.call(u,a);try{n[f]=void 0}catch(t){return e.call(n)}return i=e.call(n),t?n[f]=r:delete n[f],i}:function(n){return e.call(n)},a="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof c)return!1;try{t=new c(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var l,p=t,A="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,m="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,t,r;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),r=t,n=(A&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?m:function(){throw new Error("not implemented")};var d,b=l,s="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,U="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var n,t,r;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),r=t,n=(s&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?U:function(){throw new Error("not implemented")};var h,g=d,N="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(N&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var T,j={uint16:h,uint8:g};(T=new j.uint16(1))[0]=4660;var x=52===new j.uint8(T.buffer)[0],E=!0===x?1:0,I=new b(1),V=new p(I.buffer);function O(n){return I[0]=n,V[E]}var k=!0===x?1:0,G=new b(1),M=new p(G.buffer),P=1023,Y=Number.NEGATIVE_INFINITY,_=.6931471803691238,q=1.9082149292705877e-10,z=0x40000000000000,B=.3333333333333333,C=1048575,D=2146435072,H=1048576,J=1072693248;function K(n){var t,r,e,o,i,f,u,a,c,y,l,p;return 0===n?Y:function(n){return n!=n}(n)||n<0?NaN:(i=0,(r=O(n))<H&&(i-=54,r=O(n*=z)),r>=D?n+n:(i+=(r>>20)-P|0,i+=(a=614244+(r&=C)&1048576|0)>>20|0,u=(n=function(n,t){return G[0]=n,M[k]=t>>>0,G[0]}(n,r|a^J))-1,(C&2+r)<3?0===u?0===i?0:i*_+i*q:(f=u*u*(.5-B*u),0===i?u-f:i*_-(f-i*q-u)):(a=r-398458|0,c=440401-r|0,o=(l=(p=(y=u/(2+u))*y)*p)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(l),e=p*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(l),f=e+o,(a|=c)>0?(t=.5*u*u,0===i?u-(t-y*(t+f)):i*_-(t-(y*(t+f)+i*q)-u)):0===i?u-y*(u-f):i*_-(y*(u-f)-i*q-u))))}var L,Q=2220446049250313e-31,R=eval;L=function(){var n;try{R('"use strict"; (function* () {})'),n=!0}catch(t){n=!1}return n}()?function(t,r){var e,o,i,f,u;if(u={},arguments.length>1&&(u=r),e=u.tolerance||Q,i=u.maxTerms||1e6,f=u.initialValue||0,1==("function"==typeof t.next)){for(o of t)if(n(e*(f+=o))>=n(o)||0==--i)break}else do{f+=o=t()}while(n(e*f)<n(o)&&--i);return f}:function(t,r){var e,o,i,f,u;u={},arguments.length>1&&(u=r),e=u.tolerance||Q,i=u.maxTerms||1e6,f=u.initialValue||0;do{f+=o=t()}while(n(e*f)<n(o)&&--i);return f};var W=L;return function(t){var r,e;return t<=-1?NaN:(e=n(t))>.95?K(1+t)-t:e<Q?-t*t/2:(r={initialValue:-t},W(function(n){var t=-n,r=-1,e=0;return function(){return(r*=t)/(e+=1)}}(t),r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).log1pmx=t();
//# sourceMappingURL=index.js.map
