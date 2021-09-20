"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[70],{5769:function(e,t,n){var a=n(7316),r=["eventCategory","eventAction","eventLabel","eventValue"],c=n(5318);t.MS=u,t.I=function(e){var t=e.category,n=e.action,a=e.label,r=e.value,c=e.nonInteraction,o=void 0!==c&&c,i=e.transport,l=e.hitCallback,u=e.callbackTimeout,s=void 0===u?1e3:u;if("undefined"!=typeof window&&window.ga){var h={eventCategory:t,eventAction:n,eventLabel:a,eventValue:r,nonInteraction:o,transport:i};l&&"function"==typeof l&&(h.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,a=function(){n||(n=!0,e())};return setTimeout(a,t),a}(l,s)),window.ga("send","event",h)}};var o=c(n(7154)),i=c(n(7294)),l=c(n(5697));function u(e){var t=e.eventCategory,n=e.eventAction,c=e.eventLabel,l=e.eventValue,u=a(e,r);return i.default.createElement("a",(0,o.default)({},u,{onClick:function(a){"function"==typeof e.onClick&&e.onClick(a);var r=!0;return(0!==a.button||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey||a.defaultPrevented)&&(r=!1),e.target&&"_self"!==e.target.toLowerCase()&&(r=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:c||e.href,eventValue:l,transport:r?"beacon":"",hitCallback:function(){r&&(document.location=e.href)}}):r&&(document.location=e.href),!1}}))}u.propTypes={href:l.default.string,target:l.default.string,eventCategory:l.default.string,eventAction:l.default.string,eventLabel:l.default.string,eventValue:l.default.number,onClick:l.default.func}},9690:function(e,t,n){n.d(t,{$:function(){return l}});var a=n(7294),r=n(9),c=n(5444),o=r.default.footer.withConfig({displayName:"footercomponent__FooterWrapper",componentId:"sc-1ogqr1t-0"})(["display:flex;justify-content:space-between;margin-top:4rem;"]),i={Github:"https://github.com/Slashgear",Twitter:"https://twitter.com/Slashgear_",LinkedIn:"https://www.linkedin.com/in/antoine-caron-7089788a",DevTo:"https://dev.to/slashgear_",Medium:"https://medium.com/@Slashgear_",HackerNoon:"https://hackernoon.com/u/antoinecaron"},l=function(e){var t=e.className;return a.createElement(o,{className:t},a.createElement("div",null,Object.keys(i).map((function(e){return a.createElement("a",{key:e,href:i[e]},e)})).reduce((function(e,t){return[e," • ",t]}))),a.createElement("div",null,a.createElement(c.Link,{to:"/rss.xml"},"RSS")))}},7845:function(e,t,n){n.d(t,{A:function(){return E}});var a=n(7294),r=n(5444),c=n(9),o=n(5713);function i(e,t,r){void 0===r&&(r=n.g);var c=(0,a.useRef)();(0,a.useEffect)((function(){c.current=t}),[t]),(0,a.useEffect)((function(){if(r&&r.addEventListener){var t=function(e){return c.current(e)};return r.addEventListener(e,t),function(){r.removeEventListener(e,t)}}}),[e,r])}var l={},u=function(e,t,n){return l[e]||(l[e]={callbacks:[],value:n}),l[e].callbacks.push(t),{deregister:function(){var n=l[e].callbacks,a=n.indexOf(t);a>-1&&n.splice(a,1)},emit:function(n){l[e].value!==n&&(l[e].value=n,l[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function s(e,t){if(void 0===t&&(t=n.g.localStorage),t){var r=(c=t,{get:function(e,t){var n=c.getItem(e);return null===n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){c.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var r=n.get,c=n.set,o=(0,a.useRef)(null),l=(0,a.useState)((function(){return r(t,e)})),s=l[0],h=l[1];return i("storage",(function(e){var n=e.key,a=JSON.parse(e.newValue);n===t&&s!==a&&h(a)})),(0,a.useEffect)((function(){return o.current=u(t,h,e),function(){o.current.deregister()}}),[]),(0,a.useEffect)((function(){c(t,s),o.current.emit(s)}),[s]),[s,h]}(t,e,r)}}var c;return a.useState}var h=function(){},d={classList:{add:h,remove:h}};function f(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var r=t.element,c=t.classNameDark,o=t.classNameLight,l=t.onChange,u=t.storageKey;void 0===u&&(u="darkMode");var h=t.storageProvider,f=t.global,v=(0,a.useMemo)((function(){return function(e,t,r){void 0===r&&(r=n.g);var c=e?s(e,t):a.useState,o=r.matchMedia?r.matchMedia("(prefers-color-scheme: dark)"):{},i={addEventListener:function(e,t){return o.addListener&&o.addListener(t)},removeEventListener:function(e,t){return o.removeListener&&o.removeListener(t)}},l="(prefers-color-scheme: dark)"===o.media,u=r.document&&r.document.body||d;return{usePersistedDarkModeState:c,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=u),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(a){e.classList.add(a?t:n),e.classList.remove(a?n:t)}},mediaQueryEventTarget:i,getInitialValue:function(e){return l?o.matches:e}}}(u,h,f)}),[u,h,f]),g=v.getDefaultOnChange,m=v.mediaQueryEventTarget,A=(0,v.usePersistedDarkModeState)((0,v.getInitialValue)(e)),p=A[0],k=A[1],b=(0,a.useMemo)((function(){return l||g(r,c,o)}),[l,r,c,o,g]);return(0,a.useEffect)((function(){b(p)}),[b,p]),i("change",(function(e){return k(e.matches)}),m),{value:p,enable:(0,a.useCallback)((function(){return k(!0)}),[k]),disable:(0,a.useCallback)((function(){return k(!1)}),[k]),toggle:(0,a.useCallback)((function(){return k((function(e){return!e}))}),[k])}}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}var g=function(e,t){void 0===t&&(t={});var r,c=t,o=c.volume,i=void 0===o?1:o,l=c.playbackRate,u=void 0===l?1:l,s=c.soundEnabled,h=void 0===s||s,d=c.interrupt,f=void 0!==d&&d,g=c.onload,m=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(c,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),A=a.useRef(null),p=a.useRef(!1),k=a.useState(null),b=k[0],y=k[1],C=a.useState(null),S=C[0],I=C[1],E=function(){"function"==typeof g&&g.call(this),p.current&&y(1e3*this.duration()),I(this)};r=function(){return n.e(365).then(n.t.bind(n,6365,23)).then((function(t){var n;p.current||(A.current=null!==(n=t.Howl)&&void 0!==n?n:t.default.Howl,p.current=!0,new A.current(v({src:Array.isArray(e)?e:[e],volume:i,rate:u,onload:E},m)))})),function(){p.current=!1}},(0,a.useEffect)(r,[]),a.useEffect((function(){A.current&&S&&I(new A.current(v({src:Array.isArray(e)?e:[e],volume:i,onload:E},m)))}),[JSON.stringify(e)]),a.useEffect((function(){S&&(S.volume(i),S.rate(u))}),[i,u]);var j=a.useCallback((function(e){void 0===e&&(e={}),S&&(h||e.forceSoundEnabled)&&(f&&S.stop(),e.playbackRate&&S.rate(e.playbackRate),S.play(e.id))}),[S,h,f]),G=a.useCallback((function(e){S&&S.stop(e)}),[S]),M=a.useCallback((function(e){S&&S.pause(e)}),[S]);return[j,{sound:S,stop:G,pause:M,duration:b}]},m=n(5769);function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=n(1721),k=["className","icons"];function b(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}var y=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=n.handleClick.bind(A(n)),n.handleTouchStart=n.handleTouchStart.bind(A(n)),n.handleTouchMove=n.handleTouchMove.bind(A(n)),n.handleTouchEnd=n.handleTouchEnd.bind(A(n)),n.handleTouchCancel=n.handleTouchCancel.bind(A(n)),n.handleFocus=n.handleFocus.bind(A(n)),n.handleBlur=n.handleBlur.bind(A(n)),n.previouslyChecked=!(!t.checked&&!t.defaultChecked),n.state={checked:!(!t.checked&&!t.defaultChecked),hasFocus:!1},n}(0,p.Z)(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){"checked"in e&&(this.setState({checked:!!e.checked}),this.previouslyChecked=!!e.checked)},n.handleClick=function(e){var t=this.input;if(this.previouslyChecked=t.checked,e.target!==t&&!this.moved)return e.preventDefault(),t.focus(),void t.click();this.setState({checked:t.checked})},n.handleTouchStart=function(e){this.startX=b(e).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},n.handleTouchMove=function(e){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var t=b(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t):!this.state.checked&&t-15>this.startX&&(this.setState({checked:!0}),this.startX=t)}},n.handleTouchEnd=function(e){if(this.touchMoved){var t=this.input;e.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&t.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},n.handleTouchCancel=function(e){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},n.handleFocus=function(e){var t=this.props.onFocus;t&&t(e),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},n.handleBlur=function(e){var t=this.props.onBlur;t&&t(e),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},n.getIcon=function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null},n.render=function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,k)),c="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(n?" "+n:"");return a.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},a.createElement("div",{className:"react-toggle-track"},a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),a.createElement("div",{className:"react-toggle-thumb"}),a.createElement("input",Object.assign({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},t}(a.PureComponent),C=function(){var e=f(),t=g("/switch-on.mp3")[0],n=g("/switch-off.mp3")[0];return a.createElement(y,{icons:{checked:a.createElement("img",{src:"data:image/png;base64,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",width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"},alt:""}),unchecked:a.createElement("img",{src:"data:image/png;base64,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",width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"},alt:""})},checked:e.value,onChange:function(){e.value?n():t(),(0,m.I)({category:"SwitchTheme",action:"Click",label:e.value?"light":"dark"}),e.toggle()}})},S=c.default.div.withConfig({displayName:"layoutcomponent__Wrapper",componentId:"sc-kmaazn-0"})(["display:flex;justify-content:space-between;align-items:baseline;"]),I=function(e){var t=e.children;return a.createElement(S,null,t,a.createElement(C,null))},E=function(e){var t,n=e.location,c=e.config,i=e.children;return t=""+c.fields.slug===n.pathname?a.createElement("h1",{style:{marginBottom:(0,o.qZ)(1.5),marginTop:0,color:"var(--header)"}},a.createElement(r.Link,{style:{boxShadow:"none",textDecoration:"none"},to:c.fields.slug},c.frontmatter.title)):a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:(0,o.qZ)(-1),color:"var(--header)"}},a.createElement(r.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},c.frontmatter.title)),a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",color:"var(--textNormal)",background:"var(--bg)",transition:"var(--bg-transition)",maxWidth:(0,o.qZ)(24),padding:(0,o.qZ)(1.5)+" "+(0,o.qZ)(3/4)}},a.createElement(I,null,t),i)}},1172:function(e,t,n){n.d(t,{h:function(){return r}});var a=n(7294),r=function(e){var t=e.content;return a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})}}}]);
//# sourceMappingURL=079251e69bb3615baf60b97640b02e16a0d9c5f7-fc4479e44d49c10e3ab6.js.map