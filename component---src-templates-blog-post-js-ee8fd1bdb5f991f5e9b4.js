(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"65Gh":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Antoine Caron","description":"Antoine Caron personal blog where you can read news about his open-source courses, packages.","social":{"twitter":"Slashgear_"},"siteUrl":"https://slashgear.github.io"}}}}')},YycZ:function(t){t.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"fields":{"slug":"/"},"frontmatter":{"language":"en","language_label":"English","language_option":"Post available in"}}},{"node":{"fields":{"slug":"/fr/"},"frontmatter":{"language":"fr","language_label":"Français","language_option":"Article disponible en"}}}]}}}')},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return A}));n("E5k/");var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),i=n("mwIZ"),l=n.n(i),s=n("6Gk8"),c=n("Bl7J"),m=n("p3AD"),d=n("vOnD"),g=d.a.aside.withConfig({displayName:"tableOfContents__Aside",componentId:"sc-1id9l7o-0"})(["display:none;width:400px;nav{margin-left:0.5rem;}ul{list-style:none;}li{margin-bottom:0.5rem;overflow:hidden;white-space:nowrap;,wordwrap:normal;text-overflow:ellipsis;}li > ul{margin-top:0;margin-left:1rem;}a{color:currentColor;box-shadow:none;}a:hover{box-shadow:0 1px 0 0 currentColor;}@media screen and (min-width:1500px){&{display:block;position:fixed;top:7rem;right:2rem;font-size:0.8rem;}}"]),p=d.a.header.withConfig({displayName:"tableOfContents__Heading",componentId:"sc-1id9l7o-1"})(["margin-bottom:0.8rem;font-weight:bold;font-size:1.1rem;"]),f=function(t){var e=t.tableOfContents;return r.a.createElement(g,null,r.a.createElement(p,null,"Table of content"),r.a.createElement("nav",{dangerouslySetInnerHTML:{__html:e}}))},u=(n("pJf4"),n("q8oJ"),n("8npG"),n("YbXK"),n("cFtU"),n("rzGZ"),n("m210"),n("4DPX"),n("65Gh")),h=n("TJpk"),y=n.n(h),b=n("YycZ"),w=function(){return b.data};function v(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var E=function(t){var e=t.description,n=t.lang,a=t.meta,o=t.title,i=t.image,l=t.translations,s=u.data.site,c=w().allMarkdownRemark.edges.reduce((function(t,e){var n=e.node;return t[n.frontmatter.language]=n.fields.slug,t}),{}),m=e||s.siteMetadata.description,d=[],g=[];if(i&&(d=[{property:"og:image",content:s.siteMetadata.siteUrl+i.src},{name:"twitter:image",content:s.siteMetadata.siteUrl+i.src},{name:"og:image:width",content:i.width},{name:"og:image:height",content:i.height}]),l)for(var p=0;p<l.length;p+=2)g.push({rel:"alternate",hreflang:l[p],href:""+c[l[p]]+l[p+1]});return r.a.createElement(y.a,{htmlAttributes:{lang:n},title:o,link:g,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{property:"og:locale",content:n},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.social.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(v(d),[{name:"google-site-verification",content:"h1uQ_z8fdlLI60AmxP8vjy1H-bKSDlv0n5XolWfeDIo"}]).concat(a)})};E.defaultProps={lang:"en",meta:[],description:""};var _=E,x=n("So3+"),C=(n("zTTH"),n("v9g0"),d.a.div.withConfig({displayName:"availableLanguages__Container",componentId:"lioydm-0"})(["padding:1rem;margin:2rem 0;font-weight:bold;background-color:hsla(268,53%,51%,30%);border-radius:0.75rem;border:solid hsla(268,53%,51%) 1px;"])),I=function(t){var e=t.language,n=t.translations,a=w(),i=a.allMarkdownRemark.edges.find((function(t){return t.node.frontmatter.language==e})).node.frontmatter.language_option;return n?r.a.createElement(C,null,i,":"," ",a.allMarkdownRemark.edges.map((function(t){var a=t.node;if(a.frontmatter.language!=e){var i=a.fields.slug;if(n){var l=n.findIndex((function(t){return t==a.frontmatter.language}));-1!==l&&(i+=n[l+1])}return r.a.createElement(o.Link,{key:i,style:{boxShadow:"none",textDecoration:"none"},to:i,hrefLang:a.frontmatter.language},a.frontmatter.language_label)}}))):null};var O=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data.markdownRemark,e=(l()(this.props,"data.config.frontmatter.title"),l()(this.props,"data.config.frontmatter.language")),n=l()(this,"props.data.config.html"),a=(t.excerpt,this.props.pageContext),i=a.previous,d=a.next;return r.a.createElement(c.a,{location:this.props.location,config:this.props.data.config,translations:t.frontmatter.translations},r.a.createElement(_,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt,lang:t.frontmatter.lang,translations:t.frontmatter.translations,image:t.frontmatter.hero?t.frontmatter.hero.childImageSharp.image:null}),r.a.createElement("h1",{style:{color:"var(--header)"}},t.frontmatter.title),t.headings.length>1&&r.a.createElement(f,{tableOfContents:t.tableOfContents}),r.a.createElement("p",{style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-1)})},t.frontmatter.date),r.a.createElement(I,{language:e,translations:t.frontmatter.translations}),t.frontmatter.hero&&r.a.createElement(x.a,{hero:t.frontmatter.hero,title:t.frontmatter.title}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),r.a.createElement(s.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,i&&r.a.createElement(o.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),r.a.createElement("li",null,d&&r.a.createElement(o.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →"))))},a}(r.a.Component),A=(e.default=O,"3155491166")},zTTH:function(t,e,n){"use strict";var a=n("P8UN"),r=n("Wadk")(6),o="findIndex",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),a(a.P+a.F*i,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(o)}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ee8fd1bdb5f991f5e9b4.js.map