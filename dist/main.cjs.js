"use strict";function e(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var t,n=e(require("react")),r={exports:{}},o={exports:{}},i={};var s,a,c,u,l,f,p,d,h,y,v,m,b,g,S={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function E(){return a||(a=1,"production"===process.env.NODE_ENV?o.exports=function(){if(t)return i;t=1;var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,v=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case o:case a:case s:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case v:case y:case c:return e;default:return t}}case r:return t}}}function C(e){return E(e)===f}return i.AsyncMode=l,i.ConcurrentMode=f,i.ContextConsumer=u,i.ContextProvider=c,i.Element=n,i.ForwardRef=p,i.Fragment=o,i.Lazy=v,i.Memo=y,i.Portal=r,i.Profiler=a,i.StrictMode=s,i.Suspense=d,i.isAsyncMode=function(e){return C(e)||E(e)===l},i.isConcurrentMode=C,i.isContextConsumer=function(e){return E(e)===u},i.isContextProvider=function(e){return E(e)===c},i.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},i.isForwardRef=function(e){return E(e)===p},i.isFragment=function(e){return E(e)===o},i.isLazy=function(e){return E(e)===v},i.isMemo=function(e){return E(e)===y},i.isPortal=function(e){return E(e)===r},i.isProfiler=function(e){return E(e)===a},i.isStrictMode=function(e){return E(e)===s},i.isSuspense=function(e){return E(e)===d},i.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===a||e===s||e===d||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===S||e.$$typeof===m)},i.typeOf=E,i}():o.exports=(s||(s=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,m=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:var y=e.type;switch(y){case c:case u:case r:case i:case o:case f:return y;default:var v=y&&y.$$typeof;switch(v){case a:case l:case h:case d:case s:return v;default:return p}}case n:return p}}}var E=c,C=u,w=a,O=s,k=t,x=l,j=r,T=h,I=d,P=n,$=i,N=o,R=f,_=!1;function D(e){return g(e)===u}S.AsyncMode=E,S.ConcurrentMode=C,S.ContextConsumer=w,S.ContextProvider=O,S.Element=k,S.ForwardRef=x,S.Fragment=j,S.Lazy=T,S.Memo=I,S.Portal=P,S.Profiler=$,S.StrictMode=N,S.Suspense=R,S.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),D(e)||g(e)===c},S.isConcurrentMode=D,S.isContextConsumer=function(e){return g(e)===a},S.isContextProvider=function(e){return g(e)===s},S.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},S.isForwardRef=function(e){return g(e)===l},S.isFragment=function(e){return g(e)===r},S.isLazy=function(e){return g(e)===h},S.isMemo=function(e){return g(e)===d},S.isPortal=function(e){return g(e)===n},S.isProfiler=function(e){return g(e)===i},S.isStrictMode=function(e){return g(e)===o},S.isSuspense=function(e){return g(e)===f},S.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===u||e===i||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===d||e.$$typeof===s||e.$$typeof===a||e.$$typeof===l||e.$$typeof===v||e.$$typeof===m||e.$$typeof===b||e.$$typeof===y)},S.typeOf=g}()),S)),o.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function C(){if(u)return c;u=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return c=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(r,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))t.call(i,u)&&(a[u]=i[u]);if(e){s=e(i);for(var l=0;l<s.length;l++)n.call(i,s[l])&&(a[s[l]]=i[s[l]])}}return a},c}function w(){if(f)return l;f=1;return l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function O(){return d?p:(d=1,p=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var k=E();r.exports=function(){if(m)return v;m=1;var e=E(),t=C(),n=w(),r=O(),o=function(){if(y)return h;y=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=w(),n={},r=O();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,s,a,c){if("production"!==process.env.NODE_ENV)for(var u in o)if(r(o,u)){var l;try{if("function"!=typeof o[u]){var f=Error((a||"React class")+": "+s+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}l=o[u](i,u,a,s,null,t)}catch(e){l=e}if(!l||l instanceof Error||e((a||"React class")+": type specification of "+s+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in n)){n[l.message]=!0;var p=c?c():"";e("Failed "+s+" type: "+l.message+(null!=p?p:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},h=o}(),i=function(){};function s(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),v=function(a,c){var u="function"==typeof Symbol&&Symbol.iterator,l="@@iterator",f="<<anonymous>>",p={array:v("array"),bigint:v("bigint"),bool:v("boolean"),func:v("function"),number:v("number"),object:v("object"),string:v("string"),symbol:v("symbol"),any:y(s),arrayOf:function(e){return y((function(t,r,o,i,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var a=t[r];if(!Array.isArray(a))return new h("Invalid "+i+" `"+s+"` of type `"+g(a)+"` supplied to `"+o+"`, expected an array.");for(var c=0;c<a.length;c++){var u=e(a,c,o,i,s+"["+c+"]",n);if(u instanceof Error)return u}return null}))},element:y((function(e,t,n,r,o){var i=e[t];return a(i)?null:new h("Invalid "+r+" `"+o+"` of type `"+g(i)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:y((function(t,n,r,o,i){var s=t[n];return e.isValidElementType(s)?null:new h("Invalid "+o+" `"+i+"` of type `"+g(s)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(t,n,r,o,i){if(!(t[n]instanceof e)){var s=e.name||f;return new h("Invalid "+o+" `"+i+"` of type `"+((a=t[n]).constructor&&a.constructor.name?a.constructor.name:f)+"` supplied to `"+r+"`, expected instance of `"+s+"`.")}var a;return null}))},node:y((function(e,t,n,r,o){return b(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,o,i,s,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var c=t[o],u=g(c);if("object"!==u)return new h("Invalid "+s+" `"+a+"` of type `"+u+"` supplied to `"+i+"`, expected an object.");for(var l in c)if(r(c,l)){var f=e(c,l,i,s,a+"."+l,n);if(f instanceof Error)return f}return null}))},oneOf:function(e){return Array.isArray(e)?y((function(t,n,r,o,i){for(var s=t[n],a=0;a<e.length;a++)if(d(s,e[a]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===S(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(s)+"` supplied to `"+r+"`, expected one of "+c+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),s)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+E(o)+" at index "+t+"."),s}return y((function(t,o,i,s,a){for(var c=[],u=0;u<e.length;u++){var l=(0,e[u])(t,o,i,s,a,n);if(null==l)return null;l.data&&r(l.data,"expectedType")&&c.push(l.data.expectedType)}return new h("Invalid "+s+" `"+a+"` supplied to `"+i+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(t,r,o,i,s){var a=t[r],c=g(a);if("object"!==c)return new h("Invalid "+i+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");for(var u in e){var l=e[u];if("function"!=typeof l)return m(o,i,s,u,S(l));var f=l(a,u,o,i,s+"."+u,n);if(f)return f}return null}))},exact:function(e){return y((function(o,i,s,a,c){var u=o[i],l=g(u);if("object"!==l)return new h("Invalid "+a+" `"+c+"` of type `"+l+"` supplied to `"+s+"`, expected `object`.");var f=t({},o[i],e);for(var p in f){var d=e[p];if(r(e,p)&&"function"!=typeof d)return m(s,a,c,p,S(d));if(!d)return new h("Invalid "+a+" `"+c+"` key `"+p+"` supplied to `"+s+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(u,p,s,a,c+"."+p,n);if(y)return y}return null}))}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function y(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function o(o,s,a,u,l,p,d){if(u=u||f,p=p||a,d!==n){if(c){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var v=u+":"+a;!t[v]&&r<3&&(i("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[v]=!0,r++)}}return null==s[a]?o?null===s[a]?new h("The "+l+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`."):new h("The "+l+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(s,a,u,l,p)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function v(e){return y((function(t,n,r,o,i,s){var a=t[n];return g(a)!==e?new h("Invalid "+o+" `"+i+"` of type `"+S(a)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||a(e))return!0;var t=function(e){var t=e&&(u&&e[u]||e[l]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!b(n.value))return!1}else for(;!(n=r.next()).done;){var o=n.value;if(o&&!b(o[1]))return!1}return!0;default:return!1}}function g(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function S(e){if(null==e)return""+e;var t=g(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function E(e){var t=S(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,p.checkPropTypes=o,p.resetWarningCache=o.resetWarningCache,p.PropTypes=p,p},v}()(k.isElement,!0)}else r.exports=function(){if(g)return b;g=1;var e=w();function t(){}function n(){}return n.resetWarningCache=t,b=function(){function r(t,n,r,o,i,s){if(s!==e){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function o(){return r}r.isRequired=r;var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i}}()();var x=r.exports;const j={onActivate:x.func,onAddUndo:x.func,onBeforeAddUndo:x.func,onBeforeExecCommand:x.func,onBeforeGetContent:x.func,onBeforeRenderUI:x.func,onBeforeSetContent:x.func,onBeforePaste:x.func,onBlur:x.func,onChange:x.func,onClearUndos:x.func,onClick:x.func,onContextMenu:x.func,onCommentChange:x.func,onCompositionEnd:x.func,onCompositionStart:x.func,onCompositionUpdate:x.func,onCopy:x.func,onCut:x.func,onDblclick:x.func,onDeactivate:x.func,onDirty:x.func,onDrag:x.func,onDragDrop:x.func,onDragEnd:x.func,onDragGesture:x.func,onDragOver:x.func,onDrop:x.func,onExecCommand:x.func,onFocus:x.func,onFocusIn:x.func,onFocusOut:x.func,onGetContent:x.func,onHide:x.func,onInit:x.func,onInput:x.func,onKeyDown:x.func,onKeyPress:x.func,onKeyUp:x.func,onLoadContent:x.func,onMouseDown:x.func,onMouseEnter:x.func,onMouseLeave:x.func,onMouseMove:x.func,onMouseOut:x.func,onMouseOver:x.func,onMouseUp:x.func,onNodeChange:x.func,onObjectResizeStart:x.func,onObjectResized:x.func,onObjectSelected:x.func,onPaste:x.func,onPostProcess:x.func,onPostRender:x.func,onPreProcess:x.func,onProgressState:x.func,onRedo:x.func,onRemove:x.func,onReset:x.func,onSaveContent:x.func,onSelectionChange:x.func,onSetAttrib:x.func,onSetContent:x.func,onShow:x.func,onSubmit:x.func,onUndo:x.func,onVisualAid:x.func,onSkinLoadError:x.func,onThemeLoadError:x.func,onModelLoadError:x.func,onPluginLoadError:x.func,onIconsLoadError:x.func,onLanguageLoadError:x.func,onScriptsLoad:x.func,onScriptsLoadError:x.func},T=Object.assign({apiKey:x.string,id:x.string,inline:x.bool,init:x.object,initialValue:x.string,onEditorChange:x.func,value:x.string,tagName:x.string,tabIndex:x.number,cloudChannel:x.string,plugins:x.oneOfType([x.string,x.array]),toolbar:x.oneOfType([x.string,x.array]),disabled:x.bool,textareaName:x.string,tinymceScriptSrc:x.oneOfType([x.string,x.arrayOf(x.string),x.arrayOf(x.shape({src:x.string,async:x.bool,defer:x.bool}))]),rollback:x.oneOfType([x.number,x.oneOf([!1])]),scriptLoading:x.shape({async:x.bool,defer:x.bool,delay:x.number})},j),I=e=>"function"==typeof e,P=e=>e in j,$=e=>e.substr(2),N=(e,t,n,r,o)=>((e,t,n,r,o,i,s)=>{const a=Object.keys(o).filter(P),c=Object.keys(i).filter(P),u=a.filter((e=>void 0===i[e])),l=c.filter((e=>void 0===o[e]));u.forEach((e=>{const t=$(e),r=s[t];n(t,r),delete s[t]})),l.forEach((n=>{const o=r(e,n),i=$(n);s[i]=o,t(i,o)}))})(o,e.on.bind(e),e.off.bind(e),((t,n)=>r=>{var o;return null===(o=t(n))||void 0===o?void 0:o(r,e)}),t,n,r);let R=0;const _=e=>{const t=Date.now(),n=Math.floor(1e9*Math.random());return R++,e+"_"+n+R+String(t)},D=e=>null!==e&&("textarea"===e.tagName.toLowerCase()||"input"===e.tagName.toLowerCase()),M=e=>void 0===e||""===e?[]:Array.isArray(e)?e:e.split(" "),L=(e,t)=>{void 0!==e&&(null!=e.mode&&"object"==typeof e.mode&&"function"==typeof e.mode.set?e.mode.set(t):e.setMode(t))},V=(e,t,n)=>{var r,o;const i=e.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=t.id,i.src=t.src,i.async=null!==(r=t.async)&&void 0!==r&&r,i.defer=null!==(o=t.defer)&&void 0!==o&&o;const s=()=>{i.removeEventListener("load",s),i.removeEventListener("error",a),n(t.src)},a=e=>{i.removeEventListener("load",s),i.removeEventListener("error",a),n(t.src,e)};i.addEventListener("load",s),i.addEventListener("error",a),e.head&&e.head.appendChild(i)},B=(()=>{const e=[],t=t=>{let n=e.find((e=>e.getDocument()===t));return void 0===n&&(n=(e=>{let t={};const n=(e,n)=>{const r=t[e];r.done=!0,r.error=n;for(const t of r.handlers)t(e,n);r.handlers=[]};return{loadScripts:(r,o,i)=>{const s=e=>void 0!==i?i(e):console.error(e);if(0===r.length)return void s(new Error("At least one script must be provided"));let a=0,c=!1;const u=(e,t)=>{c||(t?(c=!0,s(t)):++a===r.length&&o())};for(const o of r){const r=t[o.src];if(r)r.done?u(o.src,r.error):r.handlers.push(u);else{const r=_("tiny-");t[o.src]={id:r,src:o.src,done:!1,error:null,handlers:[u]},V(e,Object.assign({id:r},o),n)}}},deleteScripts:()=>{var n;for(const r of Object.values(t)){const t=e.getElementById(r.id);null!=t&&"SCRIPT"===t.tagName&&(null===(n=t.parentNode)||void 0===n||n.removeChild(t))}t={}},getDocument:()=>e}})(t),e.push(n)),n};return{loadList:(e,n,r,o,i)=>{const s=()=>t(e).loadScripts(n,o,i);r>0?setTimeout(s,r):s()},reinitialize:()=>{for(let t=e.pop();null!=t;t=e.pop())t.deleteScripts()}}})(),A=e=>{const t=e;return t&&t.tinymce?t.tinymce:null};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".tox-promotion,\n.tox-statusbar__branding {\n  display: none !important;\n}\n");class F extends n.Component{constructor(e){var t,r,o;super(e),this.rollbackTimer=void 0,this.valueCursor=void 0,this.rollbackChange=()=>{const e=this.editor,t=this.props.value;e&&t&&t!==this.currentContent&&e.undoManager.ignore((()=>{if(e.setContent(t),this.valueCursor&&(!this.inline||e.hasFocus()))try{e.selection.moveToBookmark(this.valueCursor)}catch(e){}})),this.rollbackTimer=void 0},this.handleBeforeInput=e=>{if(void 0!==this.props.value&&this.props.value===this.currentContent&&this.editor&&(!this.inline||this.editor.hasFocus()))try{this.valueCursor=this.editor.selection.getBookmark(3)}catch(e){}},this.handleBeforeInputSpecial=e=>{"Enter"!==e.key&&"Backspace"!==e.key&&"Delete"!==e.key||this.handleBeforeInput(e)},this.handleEditorChange=e=>{const t=this.editor;if(t&&t.initialized){const e=t.getContent();void 0!==this.props.value&&this.props.value!==e&&!1!==this.props.rollback&&(this.rollbackTimer||(this.rollbackTimer=window.setTimeout(this.rollbackChange,"number"==typeof this.props.rollback?this.props.rollback:200))),e!==this.currentContent&&(this.currentContent=e,I(this.props.onEditorChange)&&this.props.onEditorChange(e,t))}},this.handleEditorChangeSpecial=e=>{"Backspace"!==e.key&&"Delete"!==e.key||this.handleEditorChange(e)},this.initialise=(e=0)=>{var t,n,r;const o=this.elementRef.current;if(!o)return;if(!(e=>{if(!("isConnected"in Node.prototype)){let t=e,n=e.parentNode;for(;null!=n;)t=n,n=t.parentNode;return t===e.ownerDocument}return e.isConnected})(o)){if(0===e)setTimeout((()=>this.initialise(1)),1);else{if(!(e<100))throw new Error("tinymce can only be initialised when in a document");setTimeout((()=>this.initialise(e+1)),100)}return}const i=A(this.view);if(!i)throw new Error("tinymce should have been loaded into global scope");const s=Object.assign(Object.assign({},this.props.init),{selector:void 0,target:o,readonly:this.props.disabled,inline:this.inline,plugins:(a=null===(t=this.props.init)||void 0===t?void 0:t.plugins,c=this.props.plugins,M(a).concat(M(c))),toolbar:null!==(n=this.props.toolbar)&&void 0!==n?n:null===(r=this.props.init)||void 0===r?void 0:r.toolbar,setup:e=>{this.editor=e,this.bindHandlers({}),this.inline&&!D(o)&&e.once("PostRender",(t=>{e.setContent(this.getInitialValue(),{no_events:!0})})),this.props.init&&I(this.props.init.setup)&&this.props.init.setup(e)},init_instance_callback:e=>{var t,n;const r=this.getInitialValue();this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:e.getContent(),this.currentContent!==r&&(this.currentContent=r,e.setContent(r),e.undoManager.clear(),e.undoManager.add(),e.setDirty(!1));const o=null!==(n=this.props.disabled)&&void 0!==n&&n;L(this.editor,o?"readonly":"design"),this.props.init&&I(this.props.init.init_instance_callback)&&this.props.init.init_instance_callback(e)}});var a,c;this.inline||(o.style.visibility=""),D(o)&&(o.value=this.getInitialValue()),i.init(s)},this.id=this.props.id||_("tiny-react"),this.elementRef=n.createRef(),this.inline=null!==(o=null!==(t=this.props.inline)&&void 0!==t?t:null===(r=this.props.init)||void 0===r?void 0:r.inline)&&void 0!==o&&o,this.boundHandlers={}}get view(){var e,t;return null!==(t=null===(e=this.elementRef.current)||void 0===e?void 0:e.ownerDocument.defaultView)&&void 0!==t?t:window}componentDidUpdate(e){var t,n;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(e),this.editor.initialized)){if(this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:this.editor.getContent(),"string"==typeof this.props.initialValue&&this.props.initialValue!==e.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"==typeof this.props.value&&this.props.value!==this.currentContent){const e=this.editor;e.undoManager.transact((()=>{let t;if(!this.inline||e.hasFocus())try{t=e.selection.getBookmark(3)}catch(e){}const n=this.valueCursor;if(e.setContent(this.props.value),!this.inline||e.hasFocus())for(const r of[t,n])if(r)try{e.selection.moveToBookmark(r),this.valueCursor=r;break}catch(e){}}))}if(this.props.disabled!==e.disabled){const e=null!==(n=this.props.disabled)&&void 0!==n&&n;L(this.editor,e?"readonly":"design")}}}componentDidMount(){var e,t,n,r,o;if(null!==A(this.view))this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&0===this.props.tinymceScriptSrc.length)null===(t=(e=this.props).onScriptsLoadError)||void 0===t||t.call(e,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(null===(n=this.elementRef.current)||void 0===n?void 0:n.ownerDocument){const e=()=>{var e,t;null===(t=(e=this.props).onScriptsLoad)||void 0===t||t.call(e),this.initialise()},t=e=>{var t,n;null===(n=(t=this.props).onScriptsLoadError)||void 0===n||n.call(t,e)};B.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),null!==(o=null===(r=this.props.scriptLoading)||void 0===r?void 0:r.delay)&&void 0!==o?o:0,e,t)}}componentWillUnmount(){const e=this.editor;e&&(e.off(this.changeEvents(),this.handleEditorChange),e.off(this.beforeInputEvent(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((t=>{e.off(t,this.boundHandlers[t])})),this.boundHandlers={},e.remove(),this.editor=void 0)}render(){return this.inline?this.renderInline():this.renderIframe()}changeEvents(){var e,t,n;return(null===(n=null===(t=null===(e=A(this.view))||void 0===e?void 0:e.Env)||void 0===t?void 0:t.browser)||void 0===n?void 0:n.isIE())?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"}beforeInputEvent(){return window.InputEvent&&"function"==typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"}renderInline(){const{tagName:e="div"}=this.props;return n.createElement(e,{ref:this.elementRef,id:this.id,tabIndex:this.props.tabIndex})}renderIframe(){return n.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id,tabIndex:this.props.tabIndex})}getScriptSources(){var e,t;const n=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.async,r=null===(t=this.props.scriptLoading)||void 0===t?void 0:t.defer;if(void 0!==this.props.tinymceScriptSrc)return"string"==typeof this.props.tinymceScriptSrc?[{src:this.props.tinymceScriptSrc,async:n,defer:r}]:this.props.tinymceScriptSrc.map((e=>"string"==typeof e?{src:e,async:n,defer:r}:e));return[{src:"../../public/tinymce/tinymce.min.js",async:n,defer:r}]}getInitialValue(){return"string"==typeof this.props.initialValue?this.props.initialValue:"string"==typeof this.props.value?this.props.value:""}bindHandlers(e){if(void 0!==this.editor){N(this.editor,e,this.props,this.boundHandlers,(e=>this.props[e]));const t=e=>void 0!==e.onEditorChange||void 0!==e.value,n=t(e),r=t(this.props);!n&&r?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):n&&!r&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}}}F.propTypes=T,F.defaultProps={cloudChannel:"7"},exports.Editor=F;
