(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7w6I":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("p3AD"),c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("J7Mx"),h=n("MZZl"),T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function m(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,v,C,A=l()(d.d,d.b,d.c)((function(){return null})),w=(E=A,C=v=function(e){function t(){return g(this,t),b(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.g.SCRIPT:case h.g.NOSCRIPT:return{innerHTML:t};case h.g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return T({},r,((t={})[n.type]=[].concat(r[n.type]||[],[T({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case h.g.TITLE:return T({},o,((t={})[r.type]=a,t.titleAttributes=T({},i),t));case h.g.BODY:return T({},o,{bodyAttributes:T({},i)});case h.g.HTML:return T({},o,{htmlAttributes:T({},i)})}return T({},o,((n={})[r.type]=T({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=T({},t);return Object.keys(e).forEach((function(t){var r;n=T({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=m(o,["children"]),c=Object(d.a)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case h.g.LINK:case h.g.META:case h.g.NOSCRIPT:case h.g.SCRIPT:case h.g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=m(e,["children"]),r=T({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.a.createElement(E,r)},y(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(o.a.Component),v.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},v.defaultProps={defer:!0,encodeSpecialCharacters:!0},v.peek=E.peek,v.rewind=function(){var e=E.rewind();return e||(e=Object(d.c)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},C);w.renderStatic=w.rewind;var O=n("Wbzz"),S="Friends you should follow",L="List of my friends I worked with and you should definitely follow",I=i.a.div.withConfig({displayName:"friends-you-should-follow__Friends",componentId:"sc-18m7qr3-0"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1rem;@media screen and (max-width:768px){grid-template-columns:repeat(2,1fr);}}"]),P=i.a.article.withConfig({displayName:"friends-you-should-follow__Friend",componentId:"sc-18m7qr3-1"})(["header{margin-bottom:0.7rem;}img{width:100%;}"]);t.default=function(){var e=Object(O.useStaticQuery)("4277754598").allFriendsJson.edges;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",color:"var(--textNormal)",maxWidth:Object(a.a)(24),padding:Object(a.a)(1.5)+" "+Object(a.a)(3/4)}},o.a.createElement(O.Link,{to:"/"},"Back to blog"),o.a.createElement(w,{htmlAttributes:{lang:"en_US",prefix:"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"},title:S,meta:[{property:"og:site_name",content:"Antoine Caron"},{name:"description",content:L},{property:"og:title",content:S},{property:"og:description",content:L},{property:"og:type",content:"website"},{property:"og:locale",content:"en_US"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:S},{name:"twitter:description",content:L},{property:"fb:app_id",content:"235346886871248"}]}),o.a.createElement("h1",{style:{color:"var(--header)"}},"List of friends"),o.a.createElement("p",null,"Here is an uncomplete and unordered list of my web friends that you should follow. I had the chance to work with them on different projects. They support my humor, so they are wonderful people."),o.a.createElement(I,null,e.map((function(e){var t=e.node;return o.a.createElement(P,null,o.a.createElement("a",{key:t.id,href:t.site},o.a.createElement("header",null,t.name)),o.a.createElement("img",{loading:"lazy",src:t.image,alt:t.name+" profile picture"}))}))))}},J7Mx:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return g}));var r,o=n("q1tI"),i=n.n(o),a=n("YVoz"),c=n.n(a),u=n("MZZl"),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=m(e,u.g.TITLE),n=m(e,u.c.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,u.c.DEFAULT_TITLE);return t||r||void 0},d=function(e){return m(e,u.c.ON_CHANGE_CLIENT_STATE)||function(){}},h=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return l({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[u.g.BASE]})).map((function(e){return e[u.g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},y=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+s(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===u.h.REL&&"canonical"===e[n].toLowerCase()||s===u.h.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==u.h.INNER_HTML&&c!==u.h.CSS_TEXT&&c!==u.h.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],l=c()({},r[s],o[s]);r[s]=l}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},g=function(e){return{baseTag:T([u.h.HREF],e),bodyAttributes:h(u.a.BODY,e),defer:m(e,u.c.DEFER),encode:m(e,u.c.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:h(u.a.HTML,e),linkTags:y(u.g.LINK,[u.h.REL,u.h.HREF],e),metaTags:y(u.g.META,[u.h.NAME,u.h.CHARSET,u.h.HTTPEQUIV,u.h.PROPERTY,u.h.ITEM_PROP],e),noscriptTags:y(u.g.NOSCRIPT,[u.h.INNER_HTML],e),onChangeClientState:d(e),scriptTags:y(u.g.SCRIPT,[u.h.SRC,u.h.INNER_HTML],e),styleTags:y(u.g.STYLE,[u.h.CSS_TEXT],e),title:p(e),titleAttributes:h(u.a.TITLE,e)}},b=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){b(e)}),0)}),E=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,C="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},w=null,O=function(e){w&&C(w),e.defer?w=v((function(){S(e,(function(){w=null}))})):(S(e),w=null)},S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;P(u.g.BODY,r),P(u.g.HTML,o),I(p,d);var h={baseTag:R(u.g.BASE,n),linkTags:R(u.g.LINK,i),metaTags:R(u.g.META,a),noscriptTags:R(u.g.NOSCRIPT,c),scriptTags:R(u.g.SCRIPT,l),styleTags:R(u.g.STYLE,f)},T={},y={};Object.keys(h).forEach((function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(y[e]=h[e].oldTags)})),t&&t(),s(e,T,y)},L=function(e){return Array.isArray(e)?e.join(""):e},I=function(e,t){void 0!==e&&document.title!==e&&(document.title=L(e)),P(u.g.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.b),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var f=i.indexOf(s);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(u.b):n.getAttribute(u.b)!==a.join(",")&&n.setAttribute(u.b,a.join(","))}},R=function(e,t){var n=document.head||document.querySelector(u.g.HEAD),r=n.querySelectorAll(e+"["+u.b+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.h.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.h.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.b,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},N=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.e[n]||n]=e[n],t}),t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.d[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case u.g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.b]=!0,o=_(n,r),[i.a.createElement(u.g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=N(n),i=L(t);return o?"<"+e+" "+u.b+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+u.b+'="true">'+f(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.a.BODY:case u.a.HTML:return{toComponent:function(){return _(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.b]=!0,r);return Object.keys(t).forEach((function(e){var n=u.e[e]||e;if(n===u.h.INNER_HTML||n===u.h.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.h.INNER_HTML||e===u.h.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===u.f.indexOf(e);return t+"<"+e+" "+u.b+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},k=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:M(u.g.BASE,t,r),bodyAttributes:M(u.a.BODY,n,r),htmlAttributes:M(u.a.HTML,o,r),link:M(u.g.LINK,i,r),meta:M(u.g.META,a,r),noscript:M(u.g.NOSCRIPT,c,r),script:M(u.g.SCRIPT,s,r),style:M(u.g.STYLE,l,r),title:M(u.g.TITLE,{title:p,titleAttributes:d},r)}}}).call(this,n("yLpj"))},MZZl:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return l}));var r={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},o={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},i=(Object.keys(o).map((function(e){return o[e]})),{CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"}),a={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},c={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},u=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),s=[o.NOSCRIPT,o.SCRIPT,o.STYLE],l="data-react-helmet"}}]);
//# sourceMappingURL=component---src-pages-friends-you-should-follow-js-2d33eb22484531a4a6d0.js.map