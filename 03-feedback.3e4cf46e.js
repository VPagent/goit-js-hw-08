function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var i,r,o,f,a,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,a=setTimeout(w,t),l?y(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=o}function w(){var e=p();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-u);return s?v(n,o-(e-c)):n}(e))}function O(e){return a=void 0,g&&i?y(e):(i=r=void 0,f)}function T(){var e=p(),n=h(e);if(i=arguments,r=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(w,t),y(u)}return void 0===a&&(a=setTimeout(w,t)),f}return t=b(t)||0,m(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=u=r=a=void 0},T.flush=function(){return void 0===a?f:O(p())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");let j={};!function(e){if(!localStorage.getItem("feedback-form-state"))return;j=JSON.parse(localStorage.getItem("feedback-form-state")),j.email&&(y[0].value=j.email);j.message&&(y[1].value=j.message)}(),y.addEventListener("input",e(t)((function(e){e.preventDefault(),j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(j),y.reset()}));
//# sourceMappingURL=03-feedback.3e4cf46e.js.map
