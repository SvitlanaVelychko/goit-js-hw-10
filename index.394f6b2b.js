function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,f=a||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,y=function(){return f.Date.now()};function g(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=r.test(t);return e||c.test(t)?u(t.slice(2),e?2:8):o.test(t)?NaN:+t}n=function(t,n,e){var i,o,r,c,u,a,l=0,f=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(n){var e=i,r=o;return i=o=void 0,l=n,c=t.apply(r,e)}function b(t){return l=t,u=setTimeout(j,n),f?h(t):c}function _(t){var e=t-a;return void 0===a||e>=n||e<0||s&&t-l>=r}function j(){var t=y();if(_(t))return $(t);u=setTimeout(j,function(t){var e=n-(t-a);return s?p(e,r-(t-l)):e}(t))}function $(t){return u=void 0,v&&i?h(t):(i=o=void 0,c)}function T(){var t=y(),e=_(t);if(i=arguments,o=this,a=t,e){if(void 0===u)return b(a);if(s)return u=setTimeout(j,n),h(a)}return void 0===u&&(u=setTimeout(j,n)),c}return n=m(n)||0,g(e)&&(f=!!e.leading,r=(s="maxWait"in e)?d(m(e.maxWait)||0,n):r,v="trailing"in e?!!e.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=a=o=u=void 0},T.flush=function(){return void 0===u?c:$(y())},T};const v={input:document.querySelector("input#search-box"),countryList:document.querySelector(".country-list"),countryCard:document.querySelector(".country-info")};v.input.addEventListener("input",t(n)((function(t){t.preventDefault();const n=t.target.value.trim();""===n&&(v.countryList.innerHTML="",v.countryCard.innerHTML="");(e=n,fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((t=>t.json())).catch((t=>console.error()))).then((t=>{1===t.length?v.countryCard.insertAdjacentHTML("beforeend",function(t){const n=t.map((({name:t,flags:n,capital:e,population:i,languages:o})=>`<div class="country-info__container">\n        <img class="country-info__flag"\n            src="${n.svg}" \n            alt="Flag of ${t.official}"\n            width = 30px height = 30px/>\n            <h1 class="country-info__title">${t.official}</h1>\n        </div>\n        <ul class="country-info__list">\n        <li class="country-info__item"><b>Capital:</b> ${e}</li>\n        <li class="country-info__item"><b>Population:</b> ${i}</li>\n        <li class="country-info__item"><b>Languages:</b> ${Object.values(o).join(", ")}</li>\n        </ul>`)).join("");return n}(t)):t.length<=10?v.countryList.insertAdjacentHTML("beforeend",function(t){const n=t.map((({name:t,flags:n})=>`<li class="country-list__item">\n                <img class="country-list__flag"\n                src="${n.svg}" alt="Flag of ${t.official}" width ="30" height ="30"/>\n                <h2 class="country-list__title">${t.official}</h2>\n            </li>`)).join("");return n}(t)):t.length<=10&&console.log("Too many matches found. Please enter a more specific name.")})).catch((t=>{console.log(t)}));var e}),300));
//# sourceMappingURL=index.394f6b2b.js.map