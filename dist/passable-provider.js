!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.PassableProvider=e(require("react")):t.PassableProvider=e(t.react)}(global,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=130)}([function(t,e,n){var r=n(41),o=n(92)(function(t,e,n){r(t,e,n)});t.exports=o},function(t,e,n){var r=n(22),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(52),o=n(57);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){var r=n(15),o=n(53),i=n(54),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(42),o=n(43),i=n(44),u=n(45),a=n(46);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=u,c.prototype.set=a,t.exports=c},function(t,e,n){var r=n(6);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e,n){var r=n(3)(Object,"create");t.exports=r},function(t,e,n){var r=n(66);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){var r=n(14),o=n(31);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e,n){var r=n(3)(n(1),"Map");t.exports=r},function(t,e,n){var r=n(5),o=n(2);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,n){var r=n(1).Symbol;t.exports=r},function(t,e,n){var r=n(26);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){(function(t){var r=n(1),o=n(81),i=e&&!e.nodeType&&e,u=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=u&&u.exports===i?r.Buffer:void 0,c=(a?a.isBuffer:void 0)||o;t.exports=c}).call(this,n(17)(t))},function(t,e,n){var r=n(83),o=n(84),i=n(85),u=i&&i.isTypedArray,a=u?o(u):r;t.exports=a},function(t,e,n){var r=n(7),o=n(47),i=n(48),u=n(49),a=n(50),c=n(51);function f(t){var e=this.__data__=new r(t);this.size=e.size}f.prototype.clear=o,f.prototype.delete=i,f.prototype.get=u,f.prototype.has=a,f.prototype.set=c,t.exports=f},function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,n){var r=n(58),o=n(65),i=n(67),u=n(68),a=n(69);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=u,c.prototype.set=a,t.exports=c},function(t,e,n){var r=n(16),o=n(6);t.exports=function(t,e,n){(void 0===n||o(t[e],n))&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(3),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){var r=n(1).Uint8Array;t.exports=r},function(t,e,n){var r=n(29)(Object.getPrototypeOf,Object);t.exports=r},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(79),o=n(4),i=Object.prototype,u=i.hasOwnProperty,a=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return o(t)&&u.call(t,"callee")&&!a.call(t,"callee")};t.exports=c},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e){t.exports=function(t,e){if("__proto__"!=e)return t[e]}},function(t,e,n){var r=n(34),o=n(90),i=n(12);t.exports=function(t){return i(t)?r(t,!0):o(t)}},function(t,e,n){var r=n(89),o=n(30),i=n(11),u=n(19),a=n(35),c=n(20),f=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),s=!n&&o(t),p=!n&&!s&&u(t),l=!n&&!s&&!p&&c(t),v=n||s||p||l,d=v?r(t.length,String):[],y=d.length;for(var b in t)!e&&!f.call(t,b)||v&&("length"==b||p&&("offset"==b||"parent"==b)||l&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||a(b,y))||d.push(b);return d}},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(103),o=n(106),i=n(107);t.exports=function(t,e,n,u,a,c){var f=1&n,s=t.length,p=e.length;if(s!=p&&!(f&&p>s))return!1;var l=c.get(t);if(l&&c.get(e))return l==e;var v=-1,d=!0,y=2&n?new r:void 0;for(c.set(t,e),c.set(e,t);++v<s;){var b=t[v],h=e[v];if(u)var g=f?u(h,b,v,e,t,c):u(b,h,v,t,e,c);if(void 0!==g){if(g)continue;d=!1;break}if(y){if(!o(e,function(t,e){if(!i(y,e)&&(b===t||a(b,t,n,u,c)))return y.push(e)})){d=!1;break}}else if(b!==h&&!a(b,h,n,u,c)){d=!1;break}}return c.delete(t),c.delete(e),d}},function(e,n){e.exports=t},function(t,e,n){var r=n(101);t.exports=function(t,e){return r(t,e)}},function(t,e,n){var r=n(126),o=n(2);t.exports=function(t,e,n){var i=!0,u=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,u="trailing"in n?!!n.trailing:u),r(t,e,{leading:i,maxWait:e,trailing:u})}},function(t,e,n){var r=n(21),o=n(25),i=n(70),u=n(72),a=n(2),c=n(33),f=n(32);t.exports=function t(e,n,s,p,l){e!==n&&i(n,function(i,c){if(a(i))l||(l=new r),u(e,n,c,s,t,p,l);else{var v=p?p(f(e,c),i,c+"",e,n,l):void 0;void 0===v&&(v=i),o(e,c,v)}},c)}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(8),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():o.call(e,n,1),--this.size,0))}},function(t,e,n){var r=n(8);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(8);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(8);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(7);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(7),o=n(13),i=n(24);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var u=n.__data__;if(!o||u.length<199)return u.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(u)}return n.set(t,e),this.size=n.size,this}},function(t,e,n){var r=n(14),o=n(55),i=n(2),u=n(23),a=/^\[object .+?Constructor\]$/,c=Function.prototype,f=Object.prototype,s=c.toString,p=f.hasOwnProperty,l=RegExp("^"+s.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?l:a).test(u(t))}},function(t,e,n){var r=n(15),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[a]=n:delete t[a]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,o=n(56),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},function(t,e,n){var r=n(1)["__core-js_shared__"];t.exports=r},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(59),o=n(7),i=n(13);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,e,n){var r=n(60),o=n(61),i=n(62),u=n(63),a=n(64);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=u,c.prototype.set=a,t.exports=c},function(t,e,n){var r=n(9);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(9),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(9),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},function(t,e,n){var r=n(9);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,n){var r=n(10);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(10);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(10);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(10);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},function(t,e,n){var r=n(71)();t.exports=r},function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,i=Object(e),u=r(e),a=u.length;a--;){var c=u[t?a:++o];if(!1===n(i[c],c,i))break}return e}}},function(t,e,n){var r=n(25),o=n(73),i=n(74),u=n(76),a=n(77),c=n(30),f=n(11),s=n(80),p=n(19),l=n(14),v=n(2),d=n(82),y=n(20),b=n(32),h=n(86);t.exports=function(t,e,n,g,x,_,j){var O=b(t,n),m=b(e,n),w=j.get(m);if(w)r(t,n,w);else{var S=_?_(O,m,n+"",t,e,j):void 0,P=void 0===S;if(P){var A=f(m),E=!A&&p(m),k=!A&&!E&&y(m);S=m,A||E||k?f(O)?S=O:s(O)?S=u(O):E?(P=!1,S=o(m,!0)):k?(P=!1,S=i(m,!0)):S=[]:d(m)||c(m)?(S=O,c(O)?S=h(O):v(O)&&!l(O)||(S=a(m))):P=!1}P&&(j.set(m,S),x(S,m,g,_,j),j.delete(m)),r(t,n,S)}}},function(t,e,n){(function(t){var r=n(1),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===o?r.Buffer:void 0,a=u?u.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=a?a(n):new t.constructor(n);return t.copy(r),r}}).call(this,n(17)(t))},function(t,e,n){var r=n(75);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},function(t,e,n){var r=n(27);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},function(t,e,n){var r=n(78),o=n(28),i=n(18);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:r(o(t))}},function(t,e,n){var r=n(2),o=Object.create,i=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i},function(t,e,n){var r=n(5),o=n(4);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e,n){var r=n(12),o=n(4);t.exports=function(t){return o(t)&&r(t)}},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(5),o=n(28),i=n(4),u=Function.prototype,a=Object.prototype,c=u.toString,f=a.hasOwnProperty,s=c.call(Object);t.exports=function(t){if(!i(t)||"[object Object]"!=r(t))return!1;var e=o(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==s}},function(t,e,n){var r=n(5),o=n(31),i=n(4),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!u[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(22),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===o&&r.process,a=function(){try{return i&&i.require&&i.require("util").types||u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=a}).call(this,n(17)(t))},function(t,e,n){var r=n(87),o=n(33);t.exports=function(t){return r(t,o(t))}},function(t,e,n){var r=n(88),o=n(16);t.exports=function(t,e,n,i){var u=!n;n||(n={});for(var a=-1,c=e.length;++a<c;){var f=e[a],s=i?i(n[f],t[f],f,n,t):void 0;void 0===s&&(s=t[f]),u?o(n,f,s):r(n,f,s)}return n}},function(t,e,n){var r=n(16),o=n(6),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var u=t[e];i.call(t,e)&&o(u,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(2),o=n(18),i=n(91),u=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=o(t),n=[];for(var a in t)("constructor"!=a||!e&&u.call(t,a))&&n.push(a);return n}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){var r=n(93),o=n(100);t.exports=function(t){return r(function(e,n){var r=-1,i=n.length,u=i>1?n[i-1]:void 0,a=i>2?n[2]:void 0;for(u=t.length>3&&"function"==typeof u?(i--,u):void 0,a&&o(n[0],n[1],a)&&(u=i<3?void 0:u,i=1),e=Object(e);++r<i;){var c=n[r];c&&t(e,c,r,u)}return e})}},function(t,e,n){var r=n(36),o=n(94),i=n(96);t.exports=function(t,e){return i(o(t,e,r),t+"")}},function(t,e,n){var r=n(95),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,u=-1,a=o(i.length-e,0),c=Array(a);++u<a;)c[u]=i[e+u];u=-1;for(var f=Array(e+1);++u<e;)f[u]=i[u];return f[e]=n(c),r(t,this,f)}}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(97),o=n(99)(r);t.exports=o},function(t,e,n){var r=n(98),o=n(26),i=n(36),u=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=u},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e){var n=Date.now;t.exports=function(t){var e=0,r=0;return function(){var o=n(),i=16-(o-r);if(r=o,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,n){var r=n(6),o=n(12),i=n(35),u=n(2);t.exports=function(t,e,n){if(!u(n))return!1;var a=typeof e;return!!("number"==a?o(n)&&i(e,n.length):"string"==a&&e in n)&&r(n[e],t)}},function(t,e,n){var r=n(102),o=n(4);t.exports=function t(e,n,i,u,a){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,i,u,t,a))}},function(t,e,n){var r=n(21),o=n(37),i=n(108),u=n(111),a=n(121),c=n(11),f=n(19),s=n(20),p="[object Arguments]",l="[object Array]",v="[object Object]",d=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,y,b,h){var g=c(t),x=c(e),_=g?l:a(t),j=x?l:a(e),O=(_=_==p?v:_)==v,m=(j=j==p?v:j)==v,w=_==j;if(w&&f(t)){if(!f(e))return!1;g=!0,O=!1}if(w&&!O)return h||(h=new r),g||s(t)?o(t,e,n,y,b,h):i(t,e,_,n,y,b,h);if(!(1&n)){var S=O&&d.call(t,"__wrapped__"),P=m&&d.call(e,"__wrapped__");if(S||P){var A=S?t.value():t,E=P?e.value():e;return h||(h=new r),b(A,E,n,y,h)}}return!!w&&(h||(h=new r),u(t,e,n,y,b,h))}},function(t,e,n){var r=n(24),o=n(104),i=n(105);function u(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}u.prototype.add=u.prototype.push=o,u.prototype.has=i,t.exports=u},function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,n){var r=n(15),o=n(27),i=n(6),u=n(37),a=n(109),c=n(110),f=r?r.prototype:void 0,s=f?f.valueOf:void 0;t.exports=function(t,e,n,r,f,p,l){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!p(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=a;case"[object Set]":var d=1&r;if(v||(v=c),t.size!=e.size&&!d)return!1;var y=l.get(t);if(y)return y==e;r|=2,l.set(t,e);var b=u(v(t),v(e),r,f,p,l);return l.delete(t),b;case"[object Symbol]":if(s)return s.call(t)==s.call(e)}return!1}},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}},function(t,e,n){var r=n(112),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,i,u,a){var c=1&n,f=r(t),s=f.length;if(s!=r(e).length&&!c)return!1;for(var p=s;p--;){var l=f[p];if(!(c?l in e:o.call(e,l)))return!1}var v=a.get(t);if(v&&a.get(e))return v==e;var d=!0;a.set(t,e),a.set(e,t);for(var y=c;++p<s;){var b=t[l=f[p]],h=e[l];if(i)var g=c?i(h,b,l,e,t,a):i(b,h,l,t,e,a);if(!(void 0===g?b===h||u(b,h,n,i,a):g)){d=!1;break}y||(y="constructor"==l)}if(d&&!y){var x=t.constructor,_=e.constructor;x!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof x&&x instanceof x&&"function"==typeof _&&_ instanceof _)&&(d=!1)}return a.delete(t),a.delete(e),d}},function(t,e,n){var r=n(113),o=n(115),i=n(118);t.exports=function(t){return r(t,i,o)}},function(t,e,n){var r=n(114),o=n(11);t.exports=function(t,e,n){var i=e(t);return o(t)?i:r(i,n(t))}},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},function(t,e,n){var r=n(116),o=n(117),i=Object.prototype.propertyIsEnumerable,u=Object.getOwnPropertySymbols,a=u?function(t){return null==t?[]:(t=Object(t),r(u(t),function(e){return i.call(t,e)}))}:o;t.exports=a},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var u=t[n];e(u,n,t)&&(i[o++]=u)}return i}},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(34),o=n(119),i=n(12);t.exports=function(t){return i(t)?r(t):o(t)}},function(t,e,n){var r=n(18),o=n(120),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},function(t,e,n){var r=n(29)(Object.keys,Object);t.exports=r},function(t,e,n){var r=n(122),o=n(13),i=n(123),u=n(124),a=n(125),c=n(5),f=n(23),s=f(r),p=f(o),l=f(i),v=f(u),d=f(a),y=c;(r&&"[object DataView]"!=y(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=y(new o)||i&&"[object Promise]"!=y(i.resolve())||u&&"[object Set]"!=y(new u)||a&&"[object WeakMap]"!=y(new a))&&(y=function(t){var e=c(t),n="[object Object]"==e?t.constructor:void 0,r=n?f(n):"";if(r)switch(r){case s:return"[object DataView]";case p:return"[object Map]";case l:return"[object Promise]";case v:return"[object Set]";case d:return"[object WeakMap]"}return e}),t.exports=y},function(t,e,n){var r=n(3)(n(1),"DataView");t.exports=r},function(t,e,n){var r=n(3)(n(1),"Promise");t.exports=r},function(t,e,n){var r=n(3)(n(1),"Set");t.exports=r},function(t,e,n){var r=n(3)(n(1),"WeakMap");t.exports=r},function(t,e,n){var r=n(2),o=n(127),i=n(128),u=Math.max,a=Math.min;t.exports=function(t,e,n){var c,f,s,p,l,v,d=0,y=!1,b=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=c,r=f;return c=f=void 0,d=e,p=t.apply(r,n)}function x(t){var n=t-v;return void 0===v||n>=e||n<0||b&&t-d>=s}function _(){var t=o();if(x(t))return j(t);l=setTimeout(_,function(t){var n=e-(t-v);return b?a(n,s-(t-d)):n}(t))}function j(t){return l=void 0,h&&c?g(t):(c=f=void 0,p)}function O(){var t=o(),n=x(t);if(c=arguments,f=this,v=t,n){if(void 0===l)return function(t){return d=t,l=setTimeout(_,e),y?g(t):p}(v);if(b)return l=setTimeout(_,e),g(v)}return void 0===l&&(l=setTimeout(_,e)),p}return e=i(e)||0,r(n)&&(y=!!n.leading,s=(b="maxWait"in n)?u(i(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h),O.cancel=function(){void 0!==l&&clearTimeout(l),d=0,c=v=f=l=void 0},O.flush=function(){return void 0===l?p:j(o())},O}},function(t,e,n){var r=n(1);t.exports=function(){return r.Date.now()}},function(t,e,n){var r=n(2),o=n(129),i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=a.test(t);return n||c.test(t)?f(t.slice(2),n?2:8):u.test(t)?NaN:+t}},function(t,e,n){var r=n(5),o=n(4);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},function(t,e,n){"use strict";n.r(e);var r=n(38),o=["checkbox","radio"],i=n(0),u=n.n(i);function a(t){return Object.keys(t||{}).reduce(function(e,n){return e[n]=e[n]||{},function(t){return"object"===function(t){return("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(t)&&(!Array.isArray(t)&&(![Map,WeakMap,Set,WeakSet,Number,String,Boolean].some(function(e){return t instanceof e})&&Object(t)===t))}(t[n])?e[n]=u()({},t[n]):e[n].value=t[n],e[n]=u()({errors:[],warnings:[]},e[n]),e},{})}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e&&0!==e)return t;var r,o,i,a=t.fields||{},c=a[e]||{},f=u()({},c,n);return u()({},t,{fields:u()({},a,(r={},o=e,i=f,o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,r))})}var f=n(39),s=n.n(f),p=n(40),l=n.n(p);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){x(t,e,n[e])})}return t}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=function(t){function e(t){var n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this,r=b(e).call(this,t),x(g(g(n=!r||"object"!==v(r)&&"function"!=typeof r?g(this):r)),"getFieldDataFromEvent",function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target;return n.getFieldAttributes(t)}),x(g(g(n)),"validateOnEvent",function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=n.getFieldDataFromEvent(t),o=e?{dirty:!0}:{},i=t.target.name,u=c(n.state,i,d({},o,r));n.validateOne(i,u.fields)}),x(g(g(n)),"setTouchedOnEvent",function(t){var e=n.getFieldDataFromEvent(t),r=t.target.name;n.state.fields[r]&&n.state.fields[r].touched||n.setInField(r,d({touched:!0},e))}),x(g(g(n)),"validateOne",function(t,e){n.updateField(e),n.validate([t])}),x(g(g(n)),"validateAll",function(){n.validate()}),x(g(g(n)),"updateField",function(t,e){if(t){var r=u()({},n.state,{fields:t});n.updateState(r,e)}}),x(g(g(n)),"updateState",function(t,e){s()(n.state,t)||n.setState(t,e)}),x(g(g(n)),"updateStateWithValidationResult",function(t){var e=function(t,e){var n=u()({},{errors:{},warnings:{},warningCount:0,errorCount:0,fields:{}},t);if(!t||!e)return n;var r=Object.assign({validationErrors:{},validationWarnings:{}},e),o=r.testsPerformed||[],i=n.fields;return(n=Object.keys(o).reduce(function(t,n){var u,a=o[n],c={hasError:(u=(u=a)||{}).failCount>0,hasWarning:u.warnCount>0},f=c.hasError,s=c.hasWarning,p=Boolean(e.async&&e.async[n]);return f?t.errors[n]=a.failCount:delete t.errors[n],s?t.warnings[n]=a.warnCount:delete t.warnings[n],t.fields[n]=Object.assign({},i[n],{pending:!!p&&!e.async[n].done,hasError:f,hasWarning:s,errors:r.validationErrors[n]||[],warnings:r.validationWarnings[n]||[]}),t},{fields:i,errors:n.errors,warnings:n.warnings})).warningCount=Object.keys(n.warnings).length,n.errorCount=Object.keys(n.errors).length,n}(n.state,t);n.updateState(e)}),n.state=u()({},{errors:{},warnings:{},warningCount:0,errorCount:0,fields:{}},{fields:a(t.initialFormState)}),n.validate=l()(n.validate.bind(g(g(n))),t.throttle||0,{leading:!1,trailing:!0}),n.custom=t.custom||{},n.passes=t.passes,n}var n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,r.Component),n=e,(i=[{key:"componentDidUpdate",value:function(t,e){if(this.props.formStateUpdated)return this.props.formStateUpdated(this.state,e)}},{key:"getFieldAttributes",value:function(t){return t?u()({},this.state.fields[t.name],function(t){t=t||{};var e={};return o.includes(t.type)&&(e.checked=t.checked),e.value=void 0===t.value?"":t.value,e}(t)):{}}},{key:"validate",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=this.state.fields||{},r=this.passes({specific:e,data:n,custom:this.custom}).done(function(e){t.updateStateWithValidationResult(e)});r.async&&this.updateStateWithValidationResult(r)}},{key:"setInField",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.updateState(c(this.state,t,e),n)}},{key:"render",value:function(){return"function"!=typeof this.props.children?null:"function"!=typeof this.props.passes?null:this.props.children({setTouchedOnEvent:this.setTouchedOnEvent,validateOnEvent:this.validateOnEvent,validateOne:this.validateOne,validateAll:this.validateAll,fields:this.state.fields,errors:this.state.errors,warnings:this.state.warnings})}}])&&y(n.prototype,i),e}();e.default=_}])});
//# sourceMappingURL=passable-provider.js.map