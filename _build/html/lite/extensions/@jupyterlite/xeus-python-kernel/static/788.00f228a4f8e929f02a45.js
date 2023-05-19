(self.webpackChunk_jupyterlite_xeus_python_kernel=self.webpackChunk_jupyterlite_xeus_python_kernel||[]).push([[788],{788:(t,e,r)=>{"use strict";r.r(e),r.d(e,{IServiceWorkerManager:()=>h,JupyterLiteServer:()=>a,Router:()=>s,ServiceWorkerManager:()=>d,WORKER_NAME:()=>l});var o=r(820),n=r(789),i=r(670);class s{constructor(){this._routes=[]}get(t,e){this._add("GET",t,e)}put(t,e){this._add("PUT",t,e)}post(t,e){this._add("POST",t,e)}patch(t,e){this._add("PATCH",t,e)}delete(t,e){this._add("DELETE",t,e)}async route(t){const e=new URL(t.url),{method:r}=t,{pathname:o}=e;for(const n of this._routes){if(n.method!==r)continue;const i=o.match(n.pattern);if(!i)continue;const s=i.slice(1);let a;if("PATCH"===n.method||"PUT"===n.method||"POST"===n.method)try{a=JSON.parse(await t.text())}catch{a=void 0}return n.callback.call(null,{pathname:o,body:a,query:Object.fromEntries(e.searchParams)},...s)}throw new Error("Cannot route "+t.method+" "+t.url)}_add(t,e,r){"string"==typeof e&&(e=new RegExp(e)),this._routes.push({method:t,pattern:e,callback:r})}}class a extends n.Application{constructor(t){var e;super(t),this.name="JupyterLite Server",this.namespace=this.name,this.version="unknown",this._router=new s,this._serviceManager=new o.ServiceManager({standby:"never",serverSettings:{...o.ServerConnection.makeSettings(),WebSocket:i.WebSocket,fetch:null!==(e=this.fetch.bind(this))&&void 0!==e?e:void 0}})}get router(){return this._router}get serviceManager(){return this._serviceManager}async fetch(t,e){if(!(t instanceof Request))throw Error("Request info is not a Request");return this._router.route(t)}attachShell(t){}evtResize(t){}registerPluginModule(t){let e=t.default;Object.prototype.hasOwnProperty.call(t,"__esModule")||(e=t),Array.isArray(e)||(e=[e]),e.forEach((t=>{try{this.registerPlugin(t)}catch(t){console.error(t)}}))}registerPluginModules(t){t.forEach((t=>{this.registerPluginModule(t)}))}}var c=r(526);const u=r.p+"service-worker-b2fb40a.js",h=new c.Token("@jupyterlite/server-extension:IServiceWorkerManager"),l=`${u}`.split("/").slice(-1)[0];var p=r(840),f=r(142);class d{constructor(){this._registration=null,this._registrationChanged=new p.Signal(this),this._ready=new c.PromiseDelegate,this.initialize().catch(console.warn)}get registrationChanged(){return this._registrationChanged}get enabled(){return null!==this._registration}get ready(){return this._ready.promise}async initialize(){const{serviceWorker:t}=navigator,e=f.URLExt.join(f.PageConfig.getBaseUrl(),l);let r=null;if(t?t.controller&&(r=await t.getRegistration(t.controller.scriptURL)||null,console.info("JupyterLite ServiceWorker was already registered")):console.warn("ServiceWorkers not supported in this browser"),!r&&t)try{console.info("Registering new JupyterLite ServiceWorker",e),r=await t.register(e),console.info("JupyterLite ServiceWorker was sucessfully registered")}catch(t){console.warn(t),console.warn(`JupyterLite ServiceWorker registration unexpectedly failed: ${t}`)}this.setRegistration(r),r?this._ready.resolve(void 0):this._ready.reject(void 0)}setRegistration(t){this._registration=t,this._registrationChanged.emit(this._registration)}}},670:function(t,e,r){var o=r(155);!function(t){"use strict";var e,n="undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{},i=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t},s=Object.prototype.hasOwnProperty;function a(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}function c(t){try{return encodeURIComponent(t)}catch(t){return null}}var u={stringify:function(t,r){r=r||"";var o,n,i=[];for(n in"string"!=typeof r&&(r="?"),t)if(s.call(t,n)){if((o=t[n])||null!==o&&o!==e&&!isNaN(o)||(o=""),n=c(n),o=c(o),null===n||null===o)continue;i.push(n+"="+o)}return i.length?r+i.join("&"):""},parse:function(t){for(var e,r=/([^=?#&]+)=?([^&]*)/g,o={};e=r.exec(t);){var n=a(e[1]),i=a(e[2]);null===n||null===i||n in o||(o[n]=i)}return o}},h=/[\n\r\t]/g,l=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,p=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,f=/^[a-zA-Z]:/,d=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;function v(t){return(t||"").toString().replace(d,"")}var y=[["#","hash"],["?","query"],function(t,e){return m(e.protocol)?t.replace(/\\/g,"/"):t},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};function E(t){var e,r=("undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{}).location||{},o={},i=typeof(t=t||r);if("blob:"===t.protocol)o=new b(unescape(t.pathname),{});else if("string"===i)for(e in o=new b(t,{}),g)delete o[e];else if("object"===i){for(e in t)e in g||(o[e]=t[e]);void 0===o.slashes&&(o.slashes=l.test(t.href))}return o}function m(t){return"file:"===t||"ftp:"===t||"http:"===t||"https:"===t||"ws:"===t||"wss:"===t}function S(t,e){t=(t=v(t)).replace(h,""),e=e||{};var r,o=p.exec(t),n=o[1]?o[1].toLowerCase():"",i=!!o[2],s=!!o[3],a=0;return i?s?(r=o[2]+o[3]+o[4],a=o[2].length+o[3].length):(r=o[2]+o[4],a=o[2].length):s?(r=o[3]+o[4],a=o[3].length):r=o[4],"file:"===n?a>=2&&(r=r.slice(2)):m(n)?r=o[4]:n?i&&(r=r.slice(2)):a>=2&&m(e.protocol)&&(r=o[4]),{protocol:n,slashes:i||m(n),slashesCount:a,rest:r}}function b(t,e,r){if(t=(t=v(t)).replace(h,""),!(this instanceof b))return new b(t,e,r);var o,n,s,a,c,l,p=y.slice(),d=typeof e,g=this,w=0;for("object"!==d&&"string"!==d&&(r=e,e=null),r&&"function"!=typeof r&&(r=u.parse),o=!(n=S(t||"",e=E(e))).protocol&&!n.slashes,g.slashes=n.slashes||o&&e.slashes,g.protocol=n.protocol||e.protocol||"",t=n.rest,("file:"===n.protocol&&(2!==n.slashesCount||f.test(t))||!n.slashes&&(n.protocol||n.slashesCount<2||!m(g.protocol)))&&(p[3]=[/(.*)/,"pathname"]);w<p.length;w++)"function"!=typeof(a=p[w])?(s=a[0],l=a[1],s!=s?g[l]=t:"string"==typeof s?~(c="@"===s?t.lastIndexOf(s):t.indexOf(s))&&("number"==typeof a[2]?(g[l]=t.slice(0,c),t=t.slice(c+a[2])):(g[l]=t.slice(c),t=t.slice(0,c))):(c=s.exec(t))&&(g[l]=c[1],t=t.slice(0,c.index)),g[l]=g[l]||o&&a[3]&&e[l]||"",a[4]&&(g[l]=g[l].toLowerCase())):t=a(t,g);r&&(g.query=r(g.query)),o&&e.slashes&&"/"!==g.pathname.charAt(0)&&(""!==g.pathname||""!==e.pathname)&&(g.pathname=function(t,e){if(""===t)return e;for(var r=(e||"/").split("/").slice(0,-1).concat(t.split("/")),o=r.length,n=r[o-1],i=!1,s=0;o--;)"."===r[o]?r.splice(o,1):".."===r[o]?(r.splice(o,1),s++):s&&(0===o&&(i=!0),r.splice(o,1),s--);return i&&r.unshift(""),"."!==n&&".."!==n||r.push(""),r.join("/")}(g.pathname,e.pathname)),"/"!==g.pathname.charAt(0)&&m(g.protocol)&&(g.pathname="/"+g.pathname),i(g.port,g.protocol)||(g.host=g.hostname,g.port=""),g.username=g.password="",g.auth&&(~(c=g.auth.indexOf(":"))?(g.username=g.auth.slice(0,c),g.username=encodeURIComponent(decodeURIComponent(g.username)),g.password=g.auth.slice(c+1),g.password=encodeURIComponent(decodeURIComponent(g.password))):g.username=encodeURIComponent(decodeURIComponent(g.auth)),g.auth=g.password?g.username+":"+g.password:g.username),g.origin="file:"!==g.protocol&&m(g.protocol)&&g.host?g.protocol+"//"+g.host:"null",g.href=g.toString()}b.prototype={set:function(t,e,r){var o=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(r||u.parse)(e)),o[t]=e;break;case"port":o[t]=e,i(e,o.protocol)?e&&(o.host=o.hostname+":"+e):(o.host=o.hostname,o[t]="");break;case"hostname":o[t]=e,o.port&&(e+=":"+o.port),o.host=e;break;case"host":o[t]=e,/:\d+$/.test(e)?(e=e.split(":"),o.port=e.pop(),o.hostname=e.join(":")):(o.hostname=e,o.port="");break;case"protocol":o.protocol=e.toLowerCase(),o.slashes=!r;break;case"pathname":case"hash":if(e){var n="pathname"===t?"/":"#";o[t]=e.charAt(0)!==n?n+e:e}else o[t]=e;break;case"username":case"password":o[t]=encodeURIComponent(e);break;case"auth":var s=e.indexOf(":");~s?(o.username=e.slice(0,s),o.username=encodeURIComponent(decodeURIComponent(o.username)),o.password=e.slice(s+1),o.password=encodeURIComponent(decodeURIComponent(o.password))):o.username=encodeURIComponent(decodeURIComponent(e))}for(var a=0;a<y.length;a++){var c=y[a];c[4]&&(o[c[1]]=o[c[1]].toLowerCase())}return o.auth=o.password?o.username+":"+o.password:o.username,o.origin="file:"!==o.protocol&&m(o.protocol)&&o.host?o.protocol+"//"+o.host:"null",o.href=o.toString(),o},toString:function(t){t&&"function"==typeof t||(t=u.stringify);var e,r=this,o=r.host,n=r.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var i=n+(r.protocol&&r.slashes||m(r.protocol)?"//":"");return r.username?(i+=r.username,r.password&&(i+=":"+r.password),i+="@"):r.password?(i+=":"+r.password,i+="@"):"file:"!==r.protocol&&m(r.protocol)&&!o&&"/"!==r.pathname&&(i+="@"),":"===o[o.length-1]&&(o+=":"),i+=o+r.pathname,(e="object"==typeof r.query?t(r.query):r.query)&&(i+="?"!==e.charAt(0)?"?"+e:e),r.hash&&(i+=r.hash),i}},b.extractProtocol=S,b.location=E,b.trimLeft=v,b.qs=u;var w=b;function O(t,e){setTimeout((function(e){return t.call(e)}),4,e)}function C(t,e){void 0!==o&&console[t].call(null,e)}function L(t,e){void 0===t&&(t=[]);var r=[];return t.forEach((function(t){e(t)||r.push(t)})),r}var _=function(){this.listeners={}};function R(t){var e=t.indexOf("?");return e>=0?t.slice(0,e):t}_.prototype.addEventListener=function(t,e){"function"==typeof e&&(Array.isArray(this.listeners[t])||(this.listeners[t]=[]),0===function(t,e){void 0===t&&(t=[]);var r=[];return t.forEach((function(t){e(t)&&r.push(t)})),r}(this.listeners[t],(function(t){return t===e})).length&&this.listeners[t].push(e))},_.prototype.removeEventListener=function(t,e){var r=this.listeners[t];this.listeners[t]=L(r,(function(t){return t===e}))},_.prototype.dispatchEvent=function(t){for(var e=this,r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];var n=t.type,i=this.listeners[n];return!!Array.isArray(i)&&(i.forEach((function(o){r.length>0?o.apply(e,r):o.call(e,t)})),!0)};var k=function(){this.urlMap={}};k.prototype.attachWebSocket=function(t,e){var r=R(e),o=this.urlMap[r];if(o&&o.server&&-1===o.websockets.indexOf(t))return o.websockets.push(t),o.server},k.prototype.addMembershipToRoom=function(t,e){var r=this.urlMap[R(t.url)];r&&r.server&&-1!==r.websockets.indexOf(t)&&(r.roomMemberships[e]||(r.roomMemberships[e]=[]),r.roomMemberships[e].push(t))},k.prototype.attachServer=function(t,e){var r=R(e);if(!this.urlMap[r])return this.urlMap[r]={server:t,websockets:[],roomMemberships:{}},t},k.prototype.serverLookup=function(t){var e=R(t),r=this.urlMap[e];if(r)return r.server},k.prototype.websocketsLookup=function(t,e,r){var o,n=R(t),i=this.urlMap[n];return o=i?i.websockets:[],e&&(o=i.roomMemberships[e]||[]),r?o.filter((function(t){return t!==r})):o},k.prototype.removeServer=function(t){delete this.urlMap[R(t)]},k.prototype.removeWebSocket=function(t,e){var r=R(e),o=this.urlMap[r];o&&(o.websockets=L(o.websockets,(function(e){return e===t})))},k.prototype.removeMembershipFromRoom=function(t,e){var r=this.urlMap[R(t.url)],o=r.roomMemberships[e];r&&null!==o&&(r.roomMemberships[e]=L(o,(function(e){return e===t})))};var T=new k,N={CLOSE_NORMAL:1e3,CLOSE_GOING_AWAY:1001,CLOSE_PROTOCOL_ERROR:1002,CLOSE_UNSUPPORTED:1003,CLOSE_NO_STATUS:1005,CLOSE_ABNORMAL:1006,UNSUPPORTED_DATA:1007,POLICY_VIOLATION:1008,CLOSE_TOO_LARGE:1009,MISSING_EXTENSION:1010,INTERNAL_ERROR:1011,SERVICE_RESTART:1012,TRY_AGAIN_LATER:1013,TLS_HANDSHAKE:1015},A={CONSTRUCTOR_ERROR:"Failed to construct 'WebSocket':",CLOSE_ERROR:"Failed to execute 'close' on 'WebSocket':",EVENT:{CONSTRUCT:"Failed to construct 'Event':",MESSAGE:"Failed to construct 'MessageEvent':",CLOSE:"Failed to construct 'CloseEvent':"}},I=function(){};I.prototype.stopPropagation=function(){},I.prototype.stopImmediatePropagation=function(){},I.prototype.initEvent=function(t,e,r){void 0===t&&(t="undefined"),void 0===e&&(e=!1),void 0===r&&(r=!1),this.type=""+t,this.bubbles=Boolean(e),this.cancelable=Boolean(r)};var M=function(t){function e(e,r){if(void 0===r&&(r={}),t.call(this),!e)throw new TypeError(A.EVENT_ERROR+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(A.EVENT_ERROR+" parameter 2 ('eventInitDict') is not an object.");var o=r.bubbles,n=r.cancelable;this.type=""+e,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!n&&Boolean(n),this.cancelBubble=!1,this.bubbles=!!o&&Boolean(o)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(I),P=function(t){function e(e,r){if(void 0===r&&(r={}),t.call(this),!e)throw new TypeError(A.EVENT.MESSAGE+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(A.EVENT.MESSAGE+" parameter 2 ('eventInitDict') is not an object");var o=r.bubbles,n=r.cancelable,i=r.data,s=r.origin,a=r.lastEventId,c=r.ports;this.type=""+e,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!n&&Boolean(n),this.canncelBubble=!1,this.bubbles=!!o&&Boolean(o),this.origin=""+s,this.ports=void 0===c?null:c,this.data=void 0===i?null:i,this.lastEventId=""+(a||"")}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(I),W=function(t){function e(e,r){if(void 0===r&&(r={}),t.call(this),!e)throw new TypeError(A.EVENT.CLOSE+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(A.EVENT.CLOSE+" parameter 2 ('eventInitDict') is not an object");var o=r.bubbles,n=r.cancelable,i=r.code,s=r.reason,a=r.wasClean;this.type=""+e,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!n&&Boolean(n),this.cancelBubble=!1,this.bubbles=!!o&&Boolean(o),this.code="number"==typeof i?parseInt(i,10):0,this.reason=""+(s||""),this.wasClean=!!a&&Boolean(a)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(I);function U(t){var e=t.type,r=t.target,o=new M(e);return r&&(o.target=r,o.srcElement=r,o.currentTarget=r),o}function j(t){var e=t.type,r=t.origin,o=t.data,n=t.target,i=new P(e,{data:o,origin:r});return n&&(i.target=n,i.srcElement=n,i.currentTarget=n),i}function x(t){var e=t.code,r=t.reason,o=t.type,n=t.target,i=t.wasClean;i||(i=e===N.CLOSE_NORMAL||e===N.CLOSE_NO_STATUS);var s=new W(o,{code:e,reason:r,wasClean:i});return n&&(s.target=n,s.srcElement=n,s.currentTarget=n),s}function D(t,e,r){t.readyState=V.CLOSING;var o=T.serverLookup(t.url),n=x({type:"close",target:t.target,code:e,reason:r});O((function(){T.removeWebSocket(t,t.url),t.readyState=V.CLOSED,t.dispatchEvent(n),o&&o.dispatchEvent(n,o)}),t)}function G(t){return"[object Blob]"===Object.prototype.toString.call(t)||t instanceof ArrayBuffer||(t=String(t)),t}var B=new WeakMap;function q(t){if(B.has(t))return B.get(t);var e=new Proxy(t,{get:function(r,o){if("close"===o)return function(t){void 0===t&&(t={});var r=t.code||N.CLOSE_NORMAL,o=t.reason||"";D(e,r,o)};if("send"===o)return function(e){e=G(e),t.dispatchEvent(j({type:"message",data:e,origin:this.url,target:t}))};var n=function(t){return"message"===t?"server::"+t:t};return"on"===o?function(e,r){t.addEventListener(n(e),r)}:"off"===o?function(e,r){t.removeEventListener(n(e),r)}:"target"===o?t:r[o]}});return B.set(t,e),e}var V=function(t){function e(r,o){t.call(this),this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null,this.url=function(t){var e=new w(t),r=e.pathname,o=e.protocol,n=e.hash;if(!t)throw new TypeError(A.CONSTRUCTOR_ERROR+" 1 argument required, but only 0 present.");if(r||(e.pathname="/"),""===o)throw new SyntaxError(A.CONSTRUCTOR_ERROR+" The URL '"+e.toString()+"' is invalid.");if("ws:"!==o&&"wss:"!==o)throw new SyntaxError(A.CONSTRUCTOR_ERROR+" The URL's scheme must be either 'ws' or 'wss'. '"+o+"' is not allowed.");if(""!==n)throw new SyntaxError(A.CONSTRUCTOR_ERROR+" The URL contains a fragment identifier ('"+n+"'). Fragment identifiers are not allowed in WebSocket URLs.");return e.toString()}(r),o=function(t){if(void 0===t&&(t=[]),!Array.isArray(t)&&"string"!=typeof t)throw new SyntaxError(A.CONSTRUCTOR_ERROR+" The subprotocol '"+t.toString()+"' is invalid.");"string"==typeof t&&(t=[t]);var e=t.map((function(t){return{count:1,protocol:t}})).reduce((function(t,e){return t[e.protocol]=(t[e.protocol]||0)+e.count,t}),{}),r=Object.keys(e).filter((function(t){return e[t]>1}));if(r.length>0)throw new SyntaxError(A.CONSTRUCTOR_ERROR+" The subprotocol '"+r[0]+"' is duplicated.");return t}(o),this.protocol=o[0]||"",this.binaryType="blob",this.readyState=e.CONNECTING;var n=q(this),i=T.attachWebSocket(n,this.url);O((function(){if(i)if(i.options.verifyClient&&"function"==typeof i.options.verifyClient&&!i.options.verifyClient())this.readyState=e.CLOSED,C("error","WebSocket connection to '"+this.url+"' failed: HTTP Authentication failed; no valid credentials available"),T.removeWebSocket(n,this.url),this.dispatchEvent(U({type:"error",target:this})),this.dispatchEvent(x({type:"close",target:this,code:N.CLOSE_NORMAL}));else{if(i.options.selectProtocol&&"function"==typeof i.options.selectProtocol){var t=i.options.selectProtocol(o),r=""!==t,s=-1!==o.indexOf(t);if(r&&!s)return this.readyState=e.CLOSED,C("error","WebSocket connection to '"+this.url+"' failed: Invalid Sub-Protocol"),T.removeWebSocket(n,this.url),this.dispatchEvent(U({type:"error",target:this})),void this.dispatchEvent(x({type:"close",target:this,code:N.CLOSE_NORMAL}));this.protocol=t}this.readyState=e.OPEN,this.dispatchEvent(U({type:"open",target:this})),i.dispatchEvent(U({type:"connection"}),n)}else this.readyState=e.CLOSED,this.dispatchEvent(U({type:"error",target:this})),this.dispatchEvent(x({type:"close",target:this,code:N.CLOSE_NORMAL})),C("error","WebSocket connection to '"+this.url+"' failed")}),this)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={onopen:{},onmessage:{},onclose:{},onerror:{}};return r.onopen.get=function(){return this._onopen},r.onmessage.get=function(){return this._onmessage},r.onclose.get=function(){return this._onclose},r.onerror.get=function(){return this._onerror},r.onopen.set=function(t){this.removeEventListener("open",this._onopen),this._onopen=t,this.addEventListener("open",t)},r.onmessage.set=function(t){this.removeEventListener("message",this._onmessage),this._onmessage=t,this.addEventListener("message",t)},r.onclose.set=function(t){this.removeEventListener("close",this._onclose),this._onclose=t,this.addEventListener("close",t)},r.onerror.set=function(t){this.removeEventListener("error",this._onerror),this._onerror=t,this.addEventListener("error",t)},e.prototype.send=function(t){var r=this;if(this.readyState===e.CLOSING||this.readyState===e.CLOSED)throw new Error("WebSocket is already in CLOSING or CLOSED state");var o=j({type:"server::message",origin:this.url,data:G(t)}),n=T.serverLookup(this.url);n&&O((function(){r.dispatchEvent(o,t)}),n)},e.prototype.close=function(t,r){if(void 0!==t&&("number"!=typeof t||1e3!==t&&(t<3e3||t>4999)))throw new TypeError(A.CLOSE_ERROR+" The code must be either 1000, or between 3000 and 4999. "+t+" is neither.");if(void 0!==r&&(o=r,n=encodeURIComponent(o).match(/%[89ABab]/g),o.length+(n?n.length:0)>123))throw new SyntaxError(A.CLOSE_ERROR+" The message must not be greater than 123 bytes.");var o,n;if(this.readyState!==e.CLOSING&&this.readyState!==e.CLOSED){var i=q(this);this.readyState===e.CONNECTING?function(t,e,r){t.readyState=V.CLOSING;var o=T.serverLookup(t.url),n=x({type:"close",target:t.target,code:e,reason:r,wasClean:!1}),i=U({type:"error",target:t.target});O((function(){T.removeWebSocket(t,t.url),t.readyState=V.CLOSED,t.dispatchEvent(i),t.dispatchEvent(n),o&&o.dispatchEvent(n,o)}),t)}(i,t||N.CLOSE_ABNORMAL,r):D(i,t||N.CLOSE_NO_STATUS,r)}},Object.defineProperties(e.prototype,r),e}(_);V.CONNECTING=0,V.prototype.CONNECTING=V.CONNECTING,V.OPEN=1,V.prototype.OPEN=V.OPEN,V.CLOSING=2,V.prototype.CLOSING=V.CLOSING,V.CLOSED=3,V.prototype.CLOSED=V.CLOSED;var z=function(t){function e(r,o){var n=this;void 0===r&&(r="socket.io"),void 0===o&&(o=""),t.call(this),this.binaryType="blob";var i=new w(r);i.pathname||(i.pathname="/"),this.url=i.toString(),this.readyState=e.CONNECTING,this.protocol="",this.target=this,"string"==typeof o||"object"==typeof o&&null!==o?this.protocol=o:Array.isArray(o)&&o.length>0&&(this.protocol=o[0]);var s=T.attachWebSocket(this,this.url);O((function(){s?(this.readyState=e.OPEN,s.dispatchEvent(U({type:"connection"}),s,this),s.dispatchEvent(U({type:"connect"}),s,this),this.dispatchEvent(U({type:"connect",target:this}))):(this.readyState=e.CLOSED,this.dispatchEvent(U({type:"error",target:this})),this.dispatchEvent(x({type:"close",target:this,code:N.CLOSE_NORMAL})),C("error","Socket.io connection to '"+this.url+"' failed"))}),this),this.addEventListener("close",(function(t){n.dispatchEvent(x({type:"disconnect",target:t.target,code:t.code}))}))}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={broadcast:{}};return e.prototype.close=function(){if(this.readyState===e.OPEN){var t=T.serverLookup(this.url);return T.removeWebSocket(this,this.url),this.readyState=e.CLOSED,this.dispatchEvent(x({type:"close",target:this,code:N.CLOSE_NORMAL})),t&&t.dispatchEvent(x({type:"disconnect",target:this,code:N.CLOSE_NORMAL}),t),this}},e.prototype.disconnect=function(){return this.close()},e.prototype.emit=function(t){for(var r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];if(this.readyState!==e.OPEN)throw new Error("SocketIO is already in CLOSING or CLOSED state");var n=j({type:t,origin:this.url,data:r}),i=T.serverLookup(this.url);return i&&i.dispatchEvent.apply(i,[n].concat(r)),this},e.prototype.send=function(t){return this.emit("message",t),this},r.broadcast.get=function(){if(this.readyState!==e.OPEN)throw new Error("SocketIO is already in CLOSING or CLOSED state");var t=this,r=T.serverLookup(this.url);if(!r)throw new Error("SocketIO can not find a server at the specified URL ("+this.url+")");return{emit:function(e,o){return r.emit(e,o,{websockets:T.websocketsLookup(t.url,null,t)}),t},to:function(e){return r.to(e,t)},in:function(e){return r.in(e,t)}}},e.prototype.on=function(t,e){return this.addEventListener(t,e),this},e.prototype.off=function(t,e){this.removeEventListener(t,e)},e.prototype.hasListeners=function(t){var e=this.listeners[t];return!!Array.isArray(e)&&!!e.length},e.prototype.join=function(t){T.addMembershipToRoom(this,t)},e.prototype.leave=function(t){T.removeMembershipFromRoom(this,t)},e.prototype.to=function(t){return this.broadcast.to(t)},e.prototype.in=function(){return this.to.apply(null,arguments)},e.prototype.dispatchEvent=function(t){for(var e=this,r=[],o=arguments.length-1;o-- >0;)r[o]=arguments[o+1];var n=t.type,i=this.listeners[n];if(!Array.isArray(i))return!1;i.forEach((function(o){r.length>0?o.apply(e,r):o.call(e,t.data?t.data:t)}))},Object.defineProperties(e.prototype,r),e}(_);z.CONNECTING=0,z.OPEN=1,z.CLOSING=2,z.CLOSED=3;var F=function(t,e){return new z(t,e)};F.connect=function(t,e){return F(t,e)};function J(){return"undefined"!=typeof window?window:"object"==typeof o&&"object"==typeof r.g?r.g:this}var H={mock:!0,verifyClient:null,selectProtocol:null},$=function(t){function e(e,r){void 0===r&&(r=H),t.call(this);var o=new w(e);if(o.pathname||(o.pathname="/"),this.url=o.toString(),this.originalWebSocket=null,!T.attachServer(this,this.url))throw this.dispatchEvent(U({type:"error"})),new Error("A mock server is already listening on this url");this.options=Object.assign({},H,r),this.options.mock&&this.mockWebsocket()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.mockWebsocket=function(){var t=J();this.originalWebSocket=t.WebSocket,t.WebSocket=V},e.prototype.restoreWebsocket=function(){var t=J();null!==this.originalWebSocket&&(t.WebSocket=this.originalWebSocket),this.originalWebSocket=null},e.prototype.stop=function(t){void 0===t&&(t=function(){}),this.options.mock&&this.restoreWebsocket(),T.removeServer(this.url),"function"==typeof t&&t()},e.prototype.on=function(t,e){this.addEventListener(t,e)},e.prototype.off=function(t,e){this.removeEventListener(t,e)},e.prototype.close=function(t){void 0===t&&(t={});var e=t.code,r=t.reason,o=t.wasClean,n=T.websocketsLookup(this.url);T.removeServer(this.url),n.forEach((function(t){t.readyState=V.CLOSED,t.dispatchEvent(x({type:"close",target:t.target,code:e||N.CLOSE_NORMAL,reason:r||"",wasClean:o}))})),this.dispatchEvent(x({type:"close"}),this)},e.prototype.emit=function(t,e,r){var o=this;void 0===r&&(r={});var n,i=r.websockets;i||(i=T.websocketsLookup(this.url)),"object"!=typeof r||arguments.length>3?(e=Array.prototype.slice.call(arguments,1,arguments.length),n=e.map((function(t){return G(t)}))):n=G(e),i.forEach((function(r){var i=r instanceof z?e:n;Array.isArray(i)?r.dispatchEvent.apply(r,[j({type:t,data:i,origin:o.url,target:r.target})].concat(i)):r.dispatchEvent(j({type:t,data:i,origin:o.url,target:r.target}))}))},e.prototype.clients=function(){return T.websocketsLookup(this.url)},e.prototype.to=function(t,e,r){var o=this;void 0===r&&(r=[]);var n=this,i=r.concat(T.websocketsLookup(this.url,t,e)).reduce((function(t,e){return t.indexOf(e)>-1?t:t.concat(e)}),[]);return{to:function(t,e){return o.to.call(o,t,e,i)},emit:function(t,e){n.emit(t,e,{websockets:i})}}},e.prototype.in=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.to.apply(null,t)},e.prototype.simulate=function(t){var e=T.websocketsLookup(this.url);"error"===t&&e.forEach((function(t){t.readyState=V.CLOSED,t.dispatchEvent(U({type:"error",target:t.target}))}))},e}(_);$.of=function(t){return new $(t)};var Y=$,Z=V,K=F;t.Server=Y,t.WebSocket=Z,t.SocketIO=K,Object.defineProperty(t,"__esModule",{value:!0})}(e)},155:t=>{var e,r,o=t.exports={};function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===n||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:n}catch(t){e=n}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var a,c=[],u=!1,h=-1;function l(){u&&a&&(u=!1,a.length?c=a.concat(c):h=-1,c.length&&p())}function p(){if(!u){var t=s(l);u=!0;for(var e=c.length;e;){for(a=c,c=[];++h<e;)a&&a[h].run();h=-1,e=c.length}a=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new f(t,e)),1!==c.length||u||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);