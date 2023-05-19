/*! For license information please see 223.b54a1552aec55f828dd0.js.LICENSE.txt */
(self.webpackChunkcodex_chat_notebook=self.webpackChunkcodex_chat_notebook||[]).push([[223,927],{1223:function(e,t,o){!function(e,t,o){"use strict";var i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},i(e,t)};function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}var n,r,p=function(){function e(e){this._fn=e}return Object.defineProperty(e.prototype,"isDisposed",{get:function(){return!this._fn},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){if(this._fn){var e=this._fn;this._fn=null,e()}},e}(),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._disposed=new o.Signal(t),t}return s(t,e),Object.defineProperty(t.prototype,"disposed",{get:function(){return this._disposed},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.isDisposed||(e.prototype.dispose.call(this),this._disposed.emit(void 0),o.Signal.clearData(this))},t}(p);e.DisposableSet=function(){function e(){this._isDisposed=!1,this._items=new Set}return Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this._isDisposed},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._isDisposed||(this._isDisposed=!0,this._items.forEach((function(e){e.dispose()})),this._items.clear())},e.prototype.contains=function(e){return this._items.has(e)},e.prototype.add=function(e){this._items.add(e)},e.prototype.remove=function(e){this._items.delete(e)},e.prototype.clear=function(){this._items.clear()},e}(),(r=e.DisposableSet||(e.DisposableSet={})).from=function(e){var o=new r;return t.each(e,(function(e){o.add(e)})),o},e.ObservableDisposableSet=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._disposed=new o.Signal(t),t}return s(t,e),Object.defineProperty(t.prototype,"disposed",{get:function(){return this._disposed},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.isDisposed||(e.prototype.dispose.call(this),this._disposed.emit(void 0),o.Signal.clearData(this))},t}(e.DisposableSet),(n=e.ObservableDisposableSet||(e.ObservableDisposableSet={})).from=function(e){var o=new n;return t.each(e,(function(e){o.add(e)})),o},e.DisposableDelegate=p,e.ObservableDisposableDelegate=a,Object.defineProperty(e,"__esModule",{value:!0})}(t,o(9850),o(6168))}}]);