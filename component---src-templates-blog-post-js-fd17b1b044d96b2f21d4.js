(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"65Gh":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Antoine Caron","description":"Antoine Caron personal blog where you can read news about his open-source courses, packages.","social":{"twitter":"Slashgear_"},"siteUrl":"https://slashgear.github.io"}}}}')},T1Gm:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":"https://github.com/Slashgear/slashgear.github.io"}}}}')},YycZ:function(t){t.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"fields":{"slug":"/"},"frontmatter":{"language":"en","language_label":"English","language_option":"Post available in"}}},{"node":{"fields":{"slug":"/fr/"},"frontmatter":{"language":"fr","language_label":"Français","language_option":"Article disponible en"}}}]}}}')},yZlL:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return z})),a.d(e,"pageQuery",(function(){return P}));a("E5k/");var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("mwIZ"),l=a.n(i),s=a("9eSz"),m=a.n(s),c=a("vOnD"),d=a("6Gk8"),g=a("Bl7J"),u=a("p3AD"),f=c.a.aside.withConfig({displayName:"tableOfContents__Aside",componentId:"sc-1id9l7o-0"})(["display:none;width:400px;nav{margin-left:0.5rem;}ul{list-style:none;}li{margin-bottom:0.5rem;overflow:hidden;white-space:nowrap;,wordwrap:normal;text-overflow:ellipsis;}li > ul{margin-top:0;margin-left:1rem;}a{color:currentColor;box-shadow:none;}a:hover{box-shadow:0 1px 0 0 currentColor;}@media screen and (min-width:1500px){&{display:block;position:fixed;top:7rem;right:2rem;font-size:0.8rem;}}"]),p=c.a.header.withConfig({displayName:"tableOfContents__Heading",componentId:"sc-1id9l7o-1"})(["margin-bottom:0.8rem;font-weight:bold;font-size:1.1rem;"]),h=function(t){var e=t.tableOfContents;return r.a.createElement(f,null,r.a.createElement(p,null,"Table of content"),r.a.createElement("nav",{dangerouslySetInnerHTML:{__html:e}}))},b=(a("pJf4"),a("q8oJ"),a("8npG"),a("YbXK"),a("cFtU"),a("rzGZ"),a("m210"),a("4DPX"),a("65Gh")),y=a("TJpk"),w=a.n(y),v=a("YycZ"),E=function(){return v.data};function _(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return x(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var k=function(t){var e=t.description,a=t.lang,n=t.meta,o=t.title,i=t.image,l=t.translations,s=t.slug,m=b.data.site,c=E().allMarkdownRemark.edges.reduce((function(t,e){var a=e.node;return t[a.frontmatter.language]=a.fields.slug,t}),{}),d=e||m.siteMetadata.description,g=[],u=[];if(i&&(g=[{property:"og:image",content:m.siteMetadata.siteUrl+i.src},{name:"twitter:image",content:m.siteMetadata.siteUrl+i.src}]),l){for(var f=0;f<l.length;f+=2)u.push({rel:"alternate",hreflang:l[f],href:""+c[l[f]]+l[f+1]});u.push({rel:"alternate",hreflang:a,href:""+s})}return r.a.createElement(w.a,{htmlAttributes:{lang:a},title:o,link:u,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:d},{name:"og:url",content:""+m.siteMetadata.siteUrl+s},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{property:"og:locale",content:a},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:m.siteMetadata.social.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(_(g),[{name:"google-site-verification",content:"h1uQ_z8fdlLI60AmxP8vjy1H-bKSDlv0n5XolWfeDIo"},{name:"fb:app_id",content:"235346886871248"}]).concat(n)})};k.defaultProps={lang:"en",meta:[],description:""};var C=k,I=(a("zTTH"),a("v9g0"),c.a.div.withConfig({displayName:"availableLanguages__Container",componentId:"lioydm-0"})(["padding:1rem;margin:2rem 0;font-weight:bold;background-color:hsla(268,53%,51%,30%);border-radius:0.75rem;border:solid hsla(268,53%,51%) 1px;"])),S=function(t){var e=t.language,a=t.translations,n=E(),i=n.allMarkdownRemark.edges.find((function(t){return t.node.frontmatter.language==e})).node.frontmatter.language_option;return a?r.a.createElement(I,null,i,":"," ",n.allMarkdownRemark.edges.map((function(t){var n=t.node;if(n.frontmatter.language!=e){var i=n.fields.slug;if(a){var l=a.findIndex((function(t){return t==n.frontmatter.language}));-1!==l&&(i+=a[l+1])}return r.a.createElement(o.Link,{key:i,style:{boxShadow:"none",textDecoration:"none"},to:i,hrefLang:n.frontmatter.language},n.frontmatter.language_label)}}))):null},O=a("T1Gm"),M=c.a.div.withConfig({displayName:"editOnGithub__Wrapper",componentId:"sc-1ubqci3-0"})(["margin-bottom:1rem;"]),A=function(t){var e=t.slug,a=O.data.site.siteMetadata.repository;return r.a.createElement(M,null,r.a.createElement("a",{href:a+"/edit/source/src/pages"+e+"index.md",target:"_blank"},"Edit this page on Github"))},j=a("WAGf"),T=a("tmc/"),J=a.n(T),G=function(t){var e=t.post,a=t.slug,n=t.siteUrl;return r.a.createElement(j.a,{content:{"@context":"http://schema.org","@type":"BlogPosting",headline:e.frontmatter.title,editor:"Antoine Caron",genre:"Tech Blog",wordcount:e.wordCount.words,url:""+n+a,mainEntityOfPage:""+n+a,datePublished:e.frontmatter.dateJson,dateCreated:e.frontmatter.dateJson,dateModified:e.frontmatter.dateJson,description:e.frontmatter.description,articleBody:e.html,image:[""+n+e.frontmatter.hero.childImageSharp.image16x9.src,""+n+e.frontmatter.hero.childImageSharp.image4x3.src,""+n+e.frontmatter.hero.childImageSharp.image1x1.src],author:{"@type":"Person",name:"Antoine Caron"},publisher:{"@type":"Organization",name:"Antoine Caron",logo:{"@type":"ImageObject",url:""+n+J.a}}}})},L=c.a.div.withConfig({displayName:"blog-post__PostContent",componentId:"hrojot-0"})(["margin-top:2rem;"]);function z(t){var e=t.data,a=t.pageContext,n=a.previous,i=a.next,s=a.slug,c=t.location,f=e.markdownRemark,p=(l()(e,"config.frontmatter.title"),l()(e,"config.frontmatter.language")),b=l()(e,"config.html");f.excerpt;return r.a.createElement(g.a,{location:c,config:e.config,translations:f.frontmatter.translations},r.a.createElement(C,{title:f.frontmatter.title,description:f.frontmatter.description||f.excerpt,lang:f.frontmatter.language,translations:f.frontmatter.translations,image:f.frontmatter.hero?f.frontmatter.hero.childImageSharp.image:null,slug:s}),r.a.createElement("h1",{style:{color:"var(--header)"}},f.frontmatter.title),f.headings.length>1&&r.a.createElement(h,{tableOfContents:f.tableOfContents}),r.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},f.frontmatter.date),r.a.createElement(S,{language:p,translations:f.frontmatter.translations}),f.frontmatter.hero&&r.a.createElement(m.a,{fluid:f.frontmatter.hero.childImageSharp.fluid,alt:f.frontmatter.title}),r.a.createElement(L,{dangerouslySetInnerHTML:{__html:f.html}}),r.a.createElement(G,{post:f,slug:s,siteUrl:e.site.siteMetadata.siteUrl}),r.a.createElement(A,{slug:s}),r.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),r.a.createElement(d.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:b}})),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,n&&r.a.createElement(o.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,i&&r.a.createElement(o.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))}var P="3954219777"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-fd17b1b044d96b2f21d4.js.map