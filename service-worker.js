"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","e64d092d635aed3dbc779240cc82d83c"],["/static/css/main.650ef73d.css","27b0907e3ad79eb18febd84c2d3758be"],["/static/js/main.8d87f707.js","780ec404355dda292c0f20803317f03a"],["/static/media/SourceSansPro-Light.779f3bf4.otf","779f3bf41b852b5582d41cd866ca3ddc"],["/static/media/SourceSansPro-Light.a663a1ba.ttf","a663a1ba5f49629a86f7486aaf0f5359"],["/static/media/SourceSansPro-Light.b818f497.eot","b818f4970be48d5cba35901f23c7d7b2"],["/static/media/SourceSansPro-Light.otf.7d901d60.woff","7d901d6001e12e3fd36572daa796e9cc"],["/static/media/SourceSansPro-Light.ttf.9ac3a965.woff2","9ac3a965ff8034e8c4f37c4a10c85349"],["/static/media/SourceSansPro-Regular.5e1d162e.otf","5e1d162e634a102d7da8db597825a764"],["/static/media/SourceSansPro-Regular.ac064e4c.eot","ac064e4ccb70dc3a2b5bd2d68b86428b"],["/static/media/SourceSansPro-Regular.d165cf1a.ttf","d165cf1a72ee7db500ecfc9d7672a834"],["/static/media/SourceSansPro-Regular.otf.bbd955e1.woff","bbd955e1383a2ab663298511a163d3dc"],["/static/media/SourceSansPro-Regular.ttf.713df4a9.woff2","713df4a98683bbbc9e0decd3fc9c0cf7"],["/static/media/SourceSansPro-Semibold.78667e5e.otf","78667e5e4b54fea9bb8552482b39cf2e"],["/static/media/SourceSansPro-Semibold.baa29e58.eot","baa29e58bf6f07dcc7e3abeaffdd94d6"],["/static/media/SourceSansPro-Semibold.c8eb6542.ttf","c8eb65424f2f0206e83a4ad5cc6ecbb3"],["/static/media/SourceSansPro-Semibold.otf.99f66ff4.woff","99f66ff4eab8123edcaa32fd744cb791"],["/static/media/SourceSansPro-Semibold.ttf.9ef07ea6.woff2","9ef07ea6ee6d06f4fd48a548168b69aa"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});