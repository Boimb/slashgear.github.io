"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[674],{5769:function(e,t,n){var a=n(7316),o=["eventCategory","eventAction","eventLabel","eventValue"],r=n(5318);t.MS=s,t.I=function(e){var t=e.category,n=e.action,a=e.label,o=e.value,r=e.nonInteraction,i=void 0!==r&&r,l=e.transport,c=e.hitCallback,s=e.callbackTimeout,d=void 0===s?1e3:s;if("undefined"!=typeof window&&window.ga){var u={eventCategory:t,eventAction:n,eventLabel:a,eventValue:o,nonInteraction:i,transport:l};c&&"function"==typeof c&&(u.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,a=function(){n||(n=!0,e())};return setTimeout(a,t),a}(c,d)),window.ga("send","event",u)}};var i=r(n(7154)),l=r(n(7294)),c=r(n(5697));function s(e){var t=e.eventCategory,n=e.eventAction,r=e.eventLabel,c=e.eventValue,s=a(e,o);return l.default.createElement("a",(0,i.default)({},s,{onClick:function(a){"function"==typeof e.onClick&&e.onClick(a);var o=!0;return(0!==a.button||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey||a.defaultPrevented)&&(o=!1),e.target&&"_self"!==e.target.toLowerCase()&&(o=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:r||e.href,eventValue:c,transport:o?"beacon":"",hitCallback:function(){o&&(document.location=e.href)}}):o&&(document.location=e.href),!1}}))}s.propTypes={href:c.default.string,target:c.default.string,eventCategory:c.default.string,eventAction:c.default.string,eventLabel:c.default.string,eventValue:c.default.number,onClick:c.default.func}},7770:function(e,t,n){n.r(t);var a=n(5414),o=n(7294),r=n(5444),i=n(5769),l=n(1496),c=n(9),s=n(3610),d=n(5713),u="Support the Abbé Pierre Foundation",p="Support the association if the content of this blog has helped you! Help them to act!",f=(0,c.default)(i.MS).withConfig({displayName:"abbe-pierre__DonateButton",componentId:"sc-1b562pc-0"})(["display:block;margin:2rem auto;width:fit-content;font-size:2rem;padding:0.5rem;border-radius:4px;color:white;background:#ed6746;box-shadow:none;"]),h=(0,c.default)(l.Z).withConfig({displayName:"abbe-pierre__Cover",componentId:"sc-1b562pc-1"})(["margin-bottom:1rem;"]);t.default=function(){var e=(0,r.useStaticQuery)("2211637249"),t=e.site,n=e.img;return o.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",color:"var(--textNormal)",maxWidth:(0,d.qZ)(24),padding:(0,d.qZ)(1.5)+" "+(0,d.qZ)(3/4)}},o.createElement(r.Link,{to:"/"},"Back to blog"),o.createElement(a.q,{htmlAttributes:{lang:"en_US",prefix:"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"},title:u,link:[{rel:"alternate",hreflang:"fr",href:"/fr/abbe-pierre/"}],meta:[{property:"og:site_name",content:"Antoine Caron"},{name:"description",content:p},{property:"og:title",content:u},{property:"og:image",content:t.siteMetadata.siteUrl+s.Z},{name:"twitter:image",content:t.siteMetadata.siteUrl+s.Z},{property:"og:description",content:p},{property:"og:type",content:"website"},{property:"og:locale",content:"en_US"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:u},{name:"twitter:description",content:p},{property:"fb:app_id",content:"235346886871248"}]}),o.createElement("h1",{style:{color:"var(--header)"}},"Support the Abbé Pierre Foundation"),o.createElement(h,{loading:"lazy",fadeIn:!0,fluid:n.childImageSharp.fluid,alt:"Foundation image"}),o.createElement("blockquote",null,'"We are all men of one and the same Earth."'),o.createElement("p",null,"I have been a regular supporter of the"," ",o.createElement(i.MS,{target:"_blank",rel:"noreferrer",href:"https://www.fondation-abbe-pierre.fr/"},"Abbé Pierre Foundation")," ","for several years now, which fights in France (and in many other countries) to defend the dignity of all."),o.createElement("p",null,"Taking advantage of a growing audience and refusing to add publicity, I wanted to invite you to support this association whose actions are more than necessary unfortunately."),o.createElement("p",null,"While"," ",o.createElement("a",{href:"https://www.youtube.com/watch?v=9X0P4wOiddY",target:"_blank",rel:"noreferrer"},"politicians make false promises")," ","by letting families survive in the street every winter,"," ",o.createElement(i.MS,{target:"_blank",rel:"noreferrer",href:"https://www.fondation-abbe-pierre.fr/"},"the Fondation Abbé Pierre"),", through its actions, is working to welcome and help."),o.createElement("p",null,"If your personal situation allows it, and if my articles have helped you, please consider giving to this association (even 1€)."),o.createElement(f,{id:"donate-button",target:"_blank",rel:"noreferrer",href:"https://don.fondation-abbe-pierre.fr/"},"Donate now !"),o.createElement("p",null,"Finally, I invite you to listen to Abbé Pierre's appeal of February 1, 1954 which describes so well the action and the necessity of this foundation."),o.createElement("blockquote",null,'"The most constant and deadly disease, but also the most misunderstood in any society, is indifference."'),o.createElement("div",{style:{position:"relative",height:0,"padding-bottom":"56.25%"}},o.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/qVyspn7nH1o",style:{position:"absolute",width:"100%",height:"100%",left:"0"},title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))}},3610:function(e,t,n){t.Z=n.p+"static/abbe-pierre-8e65aaf9a8ec4d989a5bf0212fc8db4b.jpg"}}]);
//# sourceMappingURL=component---src-pages-abbe-pierre-js-6222517515228cd3bcdd.js.map