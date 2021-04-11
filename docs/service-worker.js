try{self["workbox:core:6.1.2"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.1.2"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=s(e)}}class i extends n{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class o{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:o}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let a=o&&o.handler;const r=e.method;if(!a&&this.i.has(r)&&(a=this.i.get(r)),!a)return;let c;try{c=a.handle({url:s,request:e,event:t,params:i})}catch(e){c=Promise.reject(e)}const f=o&&o.catchHandler;return c instanceof Promise&&(this.o||f)&&(c=c.catch((async n=>{if(f)try{return await f.handle({url:s,request:e,event:t,params:i})}catch(e){n=e}if(this.o)return this.o.handle({url:s,request:e,event:t});throw n}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const i=this.t.get(s.method)||[];for(const o of i){let i;const a=o.match({url:e,sameOrigin:t,request:s,event:n});if(a)return i=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:o,params:i}}return{}}setDefaultHandler(e,t="GET"){this.i.set(t,s(e))}setCatchHandler(e){this.o=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let a;function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}const c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},f=e=>[c.prefix,e,c.suffix].filter((e=>e&&e.length>0)).join("-"),l=e=>e||f(c.precache),h=e=>e||f(c.runtime);function u(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.1.2"]&&_()}catch(e){}function d(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),o=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:o.href}}class p{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class w{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this.l.getCacheKeyForURL(e.url);return s?new Request(s):e},this.l=e}}let b;async function v(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const i=e.clone(),o={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=s?s(o):o,r=function(){if(void 0===b){const e=new Response("");if("body"in e)try{new Response(e.body),b=!0}catch(e){b=!1}b=!1}return b}()?i.body:await i.blob();return new Response(r,a)}function m(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class y{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;try{self["workbox:strategies:6.1.2"]&&_()}catch(e){}function R(e){return"string"==typeof e?new Request(e):e}class q{constructor(e,t){this.h={},Object.assign(this,t),this.event=t.event,this.u=e,this.p=new y,this.v=[],this.m=[...e.plugins],this.g=new Map;for(const e of this.m)this.g.set(e,{});this.event.waitUntil(this.p.promise)}async fetch(e){const{event:s}=this;let n=R(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const o=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this.u.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:o,response:e});return e}catch(e){throw i&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:i.clone(),request:o.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=R(e);let s;const{cacheName:n,matchOptions:i}=this.u,o=await this.getCacheKey(t,"read"),a=r({},i,{cacheName:n});s=await caches.match(o,a);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:i,cachedResponse:s,request:o,event:this.event})||void 0;return s}async cachePut(e,s){const n=R(e);var i;await(i=0,new Promise((e=>setTimeout(e,i))));const o=await this.getCacheKey(n,"write");if(!s)throw new t("cache-put-with-no-response",{url:(a=o.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const c=await this.R(s);if(!c)return!1;const{cacheName:f,matchOptions:l}=this.u,h=await self.caches.open(f),u=this.hasCallback("cacheDidUpdate"),d=u?await async function(e,t,s,n){const i=m(t.url,s);if(t.url===i)return e.match(t,n);const o=r({},n,{ignoreSearch:!0}),a=await e.keys(t,o);for(const t of a)if(i===m(t.url,s))return e.match(t,n)}(h,o.clone(),["__WB_REVISION__"],l):null;try{await h.put(o,u?c.clone():c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:f,oldResponse:d,newResponse:c.clone(),request:o,event:this.event});return!0}async getCacheKey(e,t){if(!this.h[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=R(await e({mode:t,request:s,event:this.event,params:this.params}));this.h[t]=s}return this.h[t]}hasCallback(e){for(const t of this.u.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this.u.plugins)if("function"==typeof t[e]){const s=this.g.get(t),n=n=>{const i=r({},n,{state:s});return t[e](i)};yield n}}waitUntil(e){return this.v.push(e),e}async doneWaiting(){let e;for(;e=this.v.shift();)await e}destroy(){this.p.resolve()}async R(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class U extends class{constructor(e={}){this.cacheName=h(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,i=new q(this,{event:t,request:s,params:n}),o=this.q(i,s,t);return[o,this.U(o,i,s,t)]}async q(e,s,n){let i;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(i=await this.L(s,e),!i||"error"===i.type)throw new t("no-response",{url:s.url})}catch(t){for(const o of e.iterateCallbacks("handlerDidError"))if(i=await o({error:t,event:n,request:s}),i)break;if(!i)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))i=await t({event:n,request:s,response:i});return i}async U(e,t,s,n){let i,o;try{i=await e}catch(o){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await t.doneWaiting()}catch(e){o=e}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:o}),t.destroy(),o)throw o}}{constructor(e={}){e.cacheName=l(e.cacheName),super(e),this.k=!1!==e.fallbackToNetwork,this.plugins.push(U.copyRedirectedCacheableResponsesPlugin)}async L(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._(e,t):await this.C(e,t))}async C(e,s){let n;if(!this.k)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n=await s.fetch(e),n}async _(e,s){this.N();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}N(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==U.copyRedirectedCacheableResponsesPlugin&&(n===U.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(U.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}U.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},U.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await v(e):e};class L{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this.O=new Map,this.S=new Map,this.T=new Map,this.u=new U({cacheName:l(e),plugins:[...t,new w({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.u}precache(e){this.addToCacheList(e),this.W||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.W=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=d(n),o="string"!=typeof n&&n.revision?"reload":"default";if(this.O.has(i)&&this.O.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.O.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.T.has(e)&&this.T.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.T.set(e,n.integrity)}if(this.O.set(i,e),this.S.set(i,o),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return u(e,(async()=>{const t=new p;this.strategy.plugins.push(t);for(const[t,s]of this.O){const n=this.T.get(s),i=this.S.get(t),o=new Request(t,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:o,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return u(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this.O.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.O}getCachedURLs(){return[...this.O.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.O.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=r({cacheKey:s},t.params),this.strategy.handle(t))}}let k;const C=()=>(k||(k=new L),k);class x extends n{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const o=new URL(e,location.href);o.hash="",yield o.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(o,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:o});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}function N(e){const s=C();!function(e,s,r){let c;if("string"==typeof e){const t=new URL(e,location.href);c=new n((({url:e})=>e.href===t.href),s,r)}else if(e instanceof RegExp)c=new i(e,s,r);else if("function"==typeof e)c=new n(e,s,r);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=e}(a||(a=new o,a.addFetchListener(),a.addCacheListener()),a).registerRoute(c)}(new x(s,e))}var E;self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),E={},function(e){C().precache(e)}([{url:"app.css",revision:"b9644c07d3925d476e0164117494cafd"},{url:"app.js",revision:"9f8de79158b3365b6cb0db70c8af4bcb"},{url:"app.js.LICENSE.txt",revision:"530462231b1f72c49a127b14a8d45ea6"},{url:"assets/icon_128.png",revision:"57c17409e171a316fff61d17c217e23b"},{url:"assets/roboto-mono-latin-100.woff",revision:"1012343b5923410b5c3c62fcb601f9b0"},{url:"assets/roboto-mono-latin-100.woff2",revision:"0cea122ae42dbfe81c8efc0c6121979d"},{url:"assets/roboto-mono-latin-100italic.woff",revision:"0dc4c50f0241ec261f619c4725af8fe7"},{url:"assets/roboto-mono-latin-100italic.woff2",revision:"9c5de6a3504d953d0eced4f3e6ffa234"},{url:"assets/roboto-mono-latin-200.woff",revision:"caf045ea900f0f3cb16fb58869ab3201"},{url:"assets/roboto-mono-latin-200.woff2",revision:"dd0420991cc8f5a1ff098dc7473750e5"},{url:"assets/roboto-mono-latin-200italic.woff",revision:"ed3d7578d9d812ae7641c47d1dcb8f83"},{url:"assets/roboto-mono-latin-200italic.woff2",revision:"daec5f7f172bc1b9a4066d637f26c809"},{url:"assets/roboto-mono-latin-300.woff",revision:"b0cda08e9fdaa9dd5e700d3a58e19d3d"},{url:"assets/roboto-mono-latin-300.woff2",revision:"7949068d479db18a60f2cf61b6bf2756"},{url:"assets/roboto-mono-latin-300italic.woff",revision:"cffb1b2364180c90c0d7bd9512c36687"},{url:"assets/roboto-mono-latin-300italic.woff2",revision:"113256108532fb220c2b23b0a4396d0c"},{url:"assets/roboto-mono-latin-400.woff",revision:"0f03f6f8fedfdf7b895f8e633a76a511"},{url:"assets/roboto-mono-latin-400.woff2",revision:"d8ab6e6b16f310580e0570584c0ce6d4"},{url:"assets/roboto-mono-latin-400italic.woff",revision:"a1cc60361c99f033672f308f0398a6d0"},{url:"assets/roboto-mono-latin-400italic.woff2",revision:"ec00892e2a475b20737a4e10b15737b5"},{url:"assets/roboto-mono-latin-500.woff",revision:"99275686593f91cbdf1035c8216d375d"},{url:"assets/roboto-mono-latin-500.woff2",revision:"b3d75110ab515440cd8ac698f669b6d2"},{url:"assets/roboto-mono-latin-500italic.woff",revision:"17ffc400beaddd1044ec514455622481"},{url:"assets/roboto-mono-latin-500italic.woff2",revision:"3731d318ed75e843d78254d9c9d1837e"},{url:"assets/roboto-mono-latin-600.woff",revision:"d8c9603b5541819a796694260cc8b0a6"},{url:"assets/roboto-mono-latin-600.woff2",revision:"7577ca36fed1089b15c7ae5730fa3805"},{url:"assets/roboto-mono-latin-600italic.woff",revision:"01a9f59c8311cd1c4857fb261077e468"},{url:"assets/roboto-mono-latin-600italic.woff2",revision:"d78ab8c1ba8b48fb77705fbf0078d35a"},{url:"assets/roboto-mono-latin-700.woff",revision:"9d793a8d492ee02df891e473d9267325"},{url:"assets/roboto-mono-latin-700.woff2",revision:"d6ba0e99c52d53b707dbd0d00f0a4d10"},{url:"assets/roboto-mono-latin-700italic.woff",revision:"4f6a4879558ca07bf08f179b3c82b587"},{url:"assets/roboto-mono-latin-700italic.woff2",revision:"661269000c136494c15e652da3d92fc2"},{url:"assets/timer.mp3",revision:"9eef5a4906e1c84e6a7410427c3e96e1"},{url:"favicon.ico",revision:"d7cba811185150a83fd1653e5e9aee52"},{url:"icons/apple-icon-180.png",revision:"484513ef0187d45a9fb40665722a983f"},{url:"icons/apple-splash-dark-1136-640.png",revision:"109df01d7178ece9e8927fa1cadc1b30"},{url:"icons/apple-splash-dark-1334-750.png",revision:"0d138502d016fcc0a0b0e733bc7096fb"},{url:"icons/apple-splash-dark-1792-828.png",revision:"675ab54409b62a0219a79e325860fd2e"},{url:"icons/apple-splash-dark-2048-1536.png",revision:"f1d7ed6896541eb6bc5dc1312142ce3f"},{url:"icons/apple-splash-dark-2160-1620.png",revision:"9a072792bbbf5c5fa1ae10b9f121904a"},{url:"icons/apple-splash-dark-2208-1242.png",revision:"06907ed3f72fd42fa75756ae35d92dac"},{url:"icons/apple-splash-dark-2224-1668.png",revision:"f6283e6370781b9c4b08272b8fc83c17"},{url:"icons/apple-splash-dark-2388-1668.png",revision:"528b1b29dccde899f0952abf0bacca06"},{url:"icons/apple-splash-dark-2436-1125.png",revision:"573a662857e2a741280d8197c028601c"},{url:"icons/apple-splash-dark-2532-1170.png",revision:"417c114d14e2065a1aa6fdb473aef862"},{url:"icons/apple-splash-dark-2688-1242.png",revision:"6ccfcc39dff18473ea2a8dd4c37898fa"},{url:"icons/apple-splash-dark-2732-2048.png",revision:"d24139f2f4422ac7272c8731b1fc9437"},{url:"icons/apple-splash-dark-2778-1284.png",revision:"966aed704ca7cc6531fe34704d3d3d7c"},{url:"icons/icon-192.png",revision:"1ddf1f71fe5338573fa06d480c9ab6c7"},{url:"icons/icon-512.png",revision:"7cfd20e845682c76a846114a0321a89d"},{url:"icons/icon_128.png",revision:"57c17409e171a316fff61d17c217e23b"},{url:"icons/mstile-icon-128.png",revision:"2545e1cb413c0613e5914b1d6f833ed0"},{url:"icons/mstile-icon-270.png",revision:"ee20462e2c89002889b466b51eb98942"},{url:"icons/mstile-icon-558-270.png",revision:"3809a3d07576665d89b37cbe8a258420"},{url:"icons/mstile-icon-558.png",revision:"4a30307df62a4bf578580e471eff67b9"},{url:"index.html",revision:"05c53a63df3535326f721040ea93c6a2"},{url:"manifest.json",revision:"d75bd16b07e087267da08c036e6f584c"},{url:"manifest.webmanifest",revision:"d75bd16b07e087267da08c036e6f584c"}]),N(E);
