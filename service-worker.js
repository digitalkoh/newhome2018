"use strict";var precacheConfig=[["/newhome2018/index.html","49cbb0441155d750b9720b4e9007da89"],["/newhome2018/static/css/main.86e67499.css","6017b2cf03d1766ebcc84832ba4d13fc"],["/newhome2018/static/js/main.6b27d96b.js","763ac2decb9f3192d7b569236541abc4"],["/newhome2018/static/media/FSThriveElliotWeb-Bold.4029adf0.woff","4029adf04f825639f11cf88c6016e58e"],["/newhome2018/static/media/FSThriveElliotWeb-Bold.84bb92fd.ttf","84bb92fdcb72c907746b6ac468ba2cda"],["/newhome2018/static/media/FSThriveElliotWeb-Bold.8686f2b6.svg","8686f2b6bb93d8f7d2f0b75d38841c45"],["/newhome2018/static/media/FSThriveElliotWeb-Bold.dd3de213.woff2","dd3de2134d231ada15f4f37afeecc59b"],["/newhome2018/static/media/FSThriveElliotWeb-Bold.f16f7ac8.eot","f16f7ac8397b0d87e45cd6bc5e729313"],["/newhome2018/static/media/FSThriveElliotWeb-Heavy.25576daf.svg","25576daff3703fd55f2c81f4bceb3646"],["/newhome2018/static/media/FSThriveElliotWeb-Heavy.33f06ef4.woff","33f06ef4ecde66f25e9975ab66e2bc8d"],["/newhome2018/static/media/FSThriveElliotWeb-Heavy.a761ef95.ttf","a761ef95620abd558e6d5468fc36f397"],["/newhome2018/static/media/FSThriveElliotWeb-Heavy.b1251faf.woff2","b1251faf8b0ab634cf3b2640d9d114d0"],["/newhome2018/static/media/FSThriveElliotWeb-Heavy.d568e665.eot","d568e665eab5a0cae29338d77a58eeff"],["/newhome2018/static/media/FSThriveElliotWeb-Light.10729526.svg","10729526278f7a41e65f95f269646e30"],["/newhome2018/static/media/FSThriveElliotWeb-Light.5e5df50f.ttf","5e5df50f4e163445e5999e5e564c4fb5"],["/newhome2018/static/media/FSThriveElliotWeb-Light.74886c2d.woff","74886c2d8ea7354ac98922f7f156a317"],["/newhome2018/static/media/FSThriveElliotWeb-Light.cd51dc7e.eot","cd51dc7e0e59e0b8a3e152fc03074f1e"],["/newhome2018/static/media/FSThriveElliotWeb-Regular.6dd1eaf1.woff","6dd1eaf16690dba493f726d47acb5a6c"],["/newhome2018/static/media/FSThriveElliotWeb-Regular.77007033.svg","770070330869f6029470c49100937f8b"],["/newhome2018/static/media/FSThriveElliotWeb-Regular.95955d11.eot","95955d11a0a554866bb99b67e06bd93a"],["/newhome2018/static/media/FSThriveElliotWeb-Regular.ab5b4279.ttf","ab5b427922d9032fb5a8fd52b7e22e0c"],["/newhome2018/static/media/FSThriveElliotWeb-Regular.cb7d6312.woff2","cb7d6312e10586673528fc3509bff315"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/newhome2018/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});