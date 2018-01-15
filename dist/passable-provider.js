!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.PassableProvider=t(require("react")):e.PassableProvider=t(e.react)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.generateFieldValidationSummary=t.mergeValidationResults=t.mergeFieldIntoState=t.isAnObject=t.buildFieldsObject=t.fieldAttributesByType=void 0;var i=n(4),o=r(i),a=n(5),s=r(a),u=n(6),l=r(u),f=n(7),c=r(f),d=n(8),p=r(d),v=n(9),b=r(v);t.fieldAttributesByType=o.default,t.buildFieldsObject=s.default,t.isAnObject=l.default,t.mergeFieldIntoState=c.default,t.mergeValidationResults=p.default,t.generateFieldValidationSummary=b.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=i.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),l=(function(e){e&&e.__esModule}(u),n(0)),f=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getFieldDataFromEvent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,r=t.name;return{name:r,fieldAttributes:n.getFieldAttributes(r,t)}},n.validateOnEvent=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=n.getFieldDataFromEvent(e),i=r.name,o=r.fieldAttributes,s=t?{dirty:!0}:{},u=(0,l.mergeFieldIntoState)(n.state,i,a({},s,o));n.validateOne(i,u.fields)},n.setTouchedOnEvent=function(e){var t=n.getFieldDataFromEvent(e),r=t.name,i=t.fieldAttributes;n.state.fields[r]&&n.state.fields[r].touched||n.setInField(r,a({touched:!0},i))},n.validateOne=function(e,t){n.validate(e,t||his.state.fields||{})},n.validateAll=function(){n.validate()},n.validate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];n.setState(function(r){var i=t||n.state.fields||{},o=Object.assign({},r,{fields:i});return(0,l.mergeValidationResults)(o,n.passes({specific:e,data:o.fields,custom:n.custom}))})},n.state={fields:(0,l.buildFieldsObject)(e.initialFormState),errors:{},warnings:{}},n.custom=e.custom||{},n.passes=e.passes,n}return o(t,e),s(t,[{key:"componentDidUpdate",value:function(){if(this.props.onStateChange)return this.props.onStateChange(this.state)}},{key:"getFieldAttributes",value:function(e,t){return t?Object.assign({},this.state.fields[e],(0,l.fieldAttributesByType)(t)):{}}},{key:"setInField",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];this.setState(function(n){return(0,l.mergeFieldIntoState)(n,e,t)},n)}},{key:"render",value:function(){return"function"!=typeof this.props.children?null:"function"!=typeof this.props.passes?null:this.props.children({setTouchedOnEvent:this.setTouchedOnEvent,validateOnEvent:this.validateOnEvent,validateOne:this.validateOne,validateAll:this.validateAll,fields:this.state.fields,errors:this.state.errors,warnings:this.state.warnings})}}]),t}(u.Component);t.default=f},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){e=e||{};var t={};return i.includes(e.type)&&(t.checked=e.checked),t.value=void 0===e.value?"":e.value,t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=["checkbox","radio"]},function(e,t,n){"use strict";function r(e){return Object.keys(e||{}).reduce(function(t,n){return t[n]=t[n]||{},(0,i.isAnObject)(e[n])?t[n]=Object.assign({},e[n]):t[n].value=e[n],t[n]=Object.assign({errors:[],warnings:[]},t[n]),t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(0)},function(e,t,n){"use strict";function r(e){return"object"===(void 0===e?"undefined":i(e))&&(!Array.isArray(e)&&(![Map,WeakMap,Set,WeakSet,Number,String,Boolean].some(function(t){return e instanceof t})&&Object(e)===e))}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t&&0!==t)return e;var i=e.fields||{},o=i[t]||{},a=Object.assign({},o,n);return Object.assign({},e,{fields:Object.assign({},i,r({},t,a))})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},function(e,t,n){"use strict";function r(e,t){var n=Object.assign({errors:{},warnings:{},fields:{}},e);if(!e||!t)return n;var r=Object.assign({validationErrors:{},validationWarnings:{}},t),o=r.testsPerformed||[],a=n.fields;return Object.keys(o).reduce(function(e,t){var n=o[t],s=(0,i.generateFieldValidationSummary)(n),u=s.hasError,l=s.hasWarning;return u?e.errors[t]=n.failCount:delete e.errors[t],l?e.warnings[t]=n.warnCount:delete e.warnings[t],e.fields[t]=Object.assign({},a[t],{hasError:u,hasWarning:l,errors:r.validationErrors[t]||[],warnings:r.validationWarnings[t]||[]}),e},{fields:a,errors:n.errors,warnings:n.warnings})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(0)},function(e,t,n){"use strict";function r(e){return e=e||{},{hasError:e.failCount>0,hasWarning:e.warnCount>0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}])});
//# sourceMappingURL=passable-provider.js.map