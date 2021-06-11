/*! For license information please see component---src-pages-conferences-js-5cc9abdd14da9e639dfb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2rMq":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n("q1tI"),i=r(o),a=r(n("2rMq")),c=r(n("Gytx"));function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var p=[],s=void 0;function l(){s=e(p.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){function t(){return f(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return s},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),l()},t.prototype.componentDidUpdate=function(){l()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),l()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(o.Component);return d.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",d.canUseDOM=a.canUseDOM,d}}},Gytx:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),f=0;f<i.length;f++){var u=i[f];if(!c(u))return!1;var p=e[u],s=t[u];if(!1===(o=n?n.call(r,p,s,u):void 0)||void 0===o&&p!==s)return!1}return!0}},bmMU:function(e,t,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,f,u,p=r(t),s=r(n);if(p&&s){if((f=t.length)!=n.length)return!1;for(c=f;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(p!=s)return!1;var l=t instanceof Date,d=n instanceof Date;if(l!=d)return!1;if(l&&d)return t.getTime()==n.getTime();var m=t instanceof RegExp,h=n instanceof RegExp;if(m!=h)return!1;if(m&&h)return t.toString()==n.toString();var y=o(t);if((f=y.length)!==o(n).length)return!1;for(c=f;0!=c--;)if(!i.call(n,y[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=f;0!=c--;)if(!("_owner"===(u=y[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},g1Hi:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("p3AD"),a=n("qhky"),c=n("Wbzz"),f="Conferences",u="You can find here all the conferences I gave to different events.";t.default=function(){var e=Object(c.useStaticQuery)("4067624811").allConferencesJson.edges;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",color:"var(--textNormal)",maxWidth:Object(i.a)(24),padding:Object(i.a)(1.5)+" "+Object(i.a)(3/4)}},o.a.createElement(c.Link,{to:"/"},"Back to blog"),o.a.createElement(a.a,{htmlAttributes:{lang:"en_US",prefix:"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"},title:f,meta:[{property:"og:site_name",content:"Antoine Caron"},{name:"description",content:u},{property:"og:title",content:f},{property:"og:description",content:u},{property:"og:type",content:"website"},{property:"og:locale",content:"en_US"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:f},{name:"twitter:description",content:u},{property:"fb:app_id",content:"235346886871248"}]}),o.a.createElement("h1",{style:{color:"var(--header)"}},"Conferences"),e.map((function(e){return o.a.createElement("article",{key:e.node.id},o.a.createElement("h2",null,o.a.createElement("a",{href:e.node.link},e.node.title),o.a.createElement("a",{href:e.node.event.site}," ","- ",e.node.event.name)),o.a.createElement("p",null,new Date(e.node.event.date).toLocaleDateString(),e.node.speakers?" with the help of ":null,e.node.speakers?e.node.speakers.map((function(e){return o.a.createElement("a",{href:e.site},e.name)})):null),e.node.iframe?o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.node.iframe}}):null)})))}}}]);
//# sourceMappingURL=component---src-pages-conferences-js-5cc9abdd14da9e639dfb.js.map