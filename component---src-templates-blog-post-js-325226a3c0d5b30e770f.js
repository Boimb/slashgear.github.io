"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[989],{7063:function(e,t,n){n.d(t,{w:function(){return s}});var r=n(7294),a=n(9),o=n(5444),i=n(1496),l=a.ZP.div.withConfig({displayName:"biocomponent__Wrapper",componentId:"sc-hnimla-0"})(["margin-bottom:2.5rem;* > div{margin-left:0.5rem;}"]),m=(0,a.ZP)(i.Z).withConfig({displayName:"biocomponent__Image",componentId:"sc-hnimla-1"})(["float:left;flex-shrink:0;"]),s=function(e){var t=e.children,n=(0,o.useStaticQuery)("2564629789");return r.createElement(l,null,r.createElement(m,{fixed:n.img.childImageSharp.fixed,style:{margin:"0 1.2rem 0 0"}}),t)}},5222:function(e,t,n){n.d(t,{J:function(){return p}});var r=n(7294),a=n(9),o=n(5444),i=n(1496),l=n(5769),m=(0,a.ZP)(i.Z).withConfig({displayName:"fundationcomponent__Logo",componentId:"sc-1oj1f27-0"})(["flex-shrink:0;"]),s=a.ZP.div.withConfig({displayName:"fundationcomponent__TextWrapper",componentId:"sc-1oj1f27-1"})(["flex-grow:1;margin-right:1rem;"]),c=a.ZP.blockquote.withConfig({displayName:"fundationcomponent__Blocquote",componentId:"sc-1oj1f27-2"})(["border:none;"]),d=(0,a.ZP)(l.MS).withConfig({displayName:"fundationcomponent__Link",componentId:"sc-1oj1f27-3"})(["display:flex;color:var(--textNormal);box-shadow:none;&:hover,&:focus{","{filter:drop-shadow(5px 5px 3px var(--textNormal));}","{text-decoration:underline;}}"],m,s),g={fr:{text:"Si vous aimez le contenu de ce blog, ou bien qu'il vous a aidé, s'il vous plait, considérez donner à la fondation Abbé Pierre que je soutiens personnellement.",quote:"“On n’est jamais heureux que dans le bonheur qu’on donne. Donner, c’est recevoir.”"},en:{text:"If you like some content of this blog, or it has helped you, please consider donating to the Abbé Pierre Foundation which I personally support.",quote:'"We are only ever happy in the happiness we give. To give is to receive."'}},p=function(e){var t=e.lang,n=void 0===t?"en":t,a=(0,o.useStaticQuery)("62118570");return r.createElement(d,{target:"_blank",rel:"noreferrer",href:"https://www.fondation-abbe-pierre.fr/"},r.createElement(s,null,g[n].text,r.createElement("br",null),r.createElement(c,null,g[n].quote)),r.createElement(m,{fixed:a.img.childImageSharp.fixed,alt:"logo de la fondation abbé pierre"}))}},2168:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(7294),a=n(5444),o=n(7361),i=n.n(o),l=n(1496),m=n(9),s=n(7063),c=n(3127),d=n(5713),g=m.ZP.aside.withConfig({displayName:"tableOfContents__Aside",componentId:"sc-1id9l7o-0"})(["display:none;width:400px;nav{margin-left:0.5rem;overflow:auto;max-height:80vh;}ul{list-style:none;}li{margin-bottom:0.5rem;overflow:hidden;white-space:nowrap;,wordwrap:normal;text-overflow:ellipsis;}li > ul{margin-top:0;margin-left:1rem;}a{color:currentColor;box-shadow:none;}a:hover{box-shadow:0 1px 0 0 currentColor;}@media screen and (min-width:1500px){&{display:block;position:fixed;top:7rem;right:2rem;font-size:0.8rem;}}"]),p=m.ZP.header.withConfig({displayName:"tableOfContents__Heading",componentId:"sc-1id9l7o-1"})(["margin-bottom:0.8rem;font-weight:bold;font-size:1.1rem;"]),u=function(e){var t=e.tableOfContents;return r.createElement(g,null,r.createElement(p,null,"Table of content"),r.createElement("nav",{dangerouslySetInnerHTML:{__html:t}}))},f=n(2141),h=n(5414),y=function(){return(0,a.useStaticQuery)("1264045386")},b={fr:"fr_FR",en:"en_US"},w=function(e){var t=e.description,n=e.lang,o=e.meta,i=e.title,l=e.image,m=e.translations,s=e.slug,c=e.type,d=void 0===c?"website":c,g=e.dateJson,p=e.tags,u=void 0===p?[]:p,w=(0,a.useStaticQuery)("4061151221").site,v=y().allMarkdownRemark.edges.reduce((function(e,t){var n=t.node;return e[n.frontmatter.language]=n.fields.slug,e}),{}),E=t+" "+(u||[]).join(", ")||w.siteMetadata.description,x=[],_=[],k=[];if(l&&(x=[{property:"og:image",content:w.siteMetadata.siteUrl+l.src},{name:"twitter:image",content:w.siteMetadata.siteUrl+l.src},{property:"og:image:alt",content:i},{property:"og:image:width",content:1080},{property:"og:image:type",content:"image/jpeg"}]),"article"===d&&(x.push({property:"article:author",content:"Antoine Caron"}),x.push({property:"article:section",content:"Frontend Tech"}),u&&u.forEach((function(e){x.push({property:"article:tag",content:e})}))),m){for(var C=0;C<m.length;C+=2)_.push({rel:"alternate",hreflang:m[C],href:""+v[m[C]]+m[C+1]}),k.push({property:"og:locale:alternate",content:b[m[C]]});_.push({rel:"alternate",hreflang:n,href:""+s})}return g&&x.push({property:"article:published_time",content:g}),u&&x.push({name:"keywords",content:u}),r.createElement(h.q,{htmlAttributes:{lang:n,prefix:"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"},head:!0,title:i,link:_,titleTemplate:"%s | "+w.siteMetadata.title,meta:[].concat(k,[{property:"og:site_name",content:"Antoine Caron"},{name:"description",content:E},{property:"og:url",content:""+w.siteMetadata.siteUrl+s},{property:"og:title",content:i},{property:"og:description",content:E},{property:"og:type",content:d},{property:"og:locale",content:b[n]},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:w.siteMetadata.social.twitter},{name:"twitter:title",content:i},{name:"twitter:description",content:E}],(0,f.Z)(x),[{name:"google-site-verification",content:"h1uQ_z8fdlLI60AmxP8vjy1H-bKSDlv0n5XolWfeDIo"},{property:"fb:app_id",content:"235346886871248"}]).concat(o)})};w.defaultProps={lang:"en",meta:[],description:"",tags:[]};var v=w,E=m.ZP.div.withConfig({displayName:"availableLanguages__Container",componentId:"sc-lioydm-0"})(["padding:1rem;margin:2rem 0;font-weight:bold;background-color:hsla(268,53%,51%,30%);border-radius:0.75rem;border:solid hsla(268,53%,51%) 1px;"]),x=function(e){var t=e.language,n=e.translations,o=y(),i=o.allMarkdownRemark.edges.find((function(e){return e.node.frontmatter.language==t})).node.frontmatter.language_option;return n?r.createElement(E,null,i,":"," ",o.allMarkdownRemark.edges.map((function(e){var o=e.node;if(o.frontmatter.language!=t){var i=o.fields.slug;if(n){var l=n.findIndex((function(e){return e==o.frontmatter.language}));-1!==l&&(i+=n[l+1])}return r.createElement(a.Link,{key:i,style:{boxShadow:"none",textDecoration:"none"},to:i,hrefLang:o.frontmatter.language},o.frontmatter.language_label)}}))):null},_=m.ZP.div.withConfig({displayName:"editOnGithub__Wrapper",componentId:"sc-1ubqci3-0"})(["margin-bottom:1rem;"]),k=function(e){var t=e.slug,n=(0,a.useStaticQuery)("1666466174").site.siteMetadata.repository;return r.createElement(_,null,r.createElement("a",{href:n+"/edit/source/src/pages"+t+"index.md",target:"_blank"},"Edit this page on Github"))},C=n(5038),I=n.p+"static/profile-pic-0ffd646679dfe2f47b5dbbb110c1f294.jpg",P=function(e){var t=e.post,n=e.slug,a=e.siteUrl,o=i()(t,"frontmatter.hero.childImageSharp",{image16x9:{},image4x3:{},image1x1:{}});return r.createElement(C.h,{content:{"@context":"http://schema.org","@type":"Article",headline:t.frontmatter.title,editor:"Antoine Caron",genre:"Tech Blog",wordcount:t.wordCount.words,url:""+a+n,mainEntityOfPage:""+a+n,datePublished:t.frontmatter.dateJson,dateCreated:t.frontmatter.dateJson,dateModified:t.frontmatter.dateJson,description:t.frontmatter.description,articleBody:t.html,image:[""+a+o.image16x9.src,""+a+o.image4x3.src,""+a+o.image1x1.src],keywords:t.frontmatter.tags,author:{"@type":"Person",name:"Antoine Caron"},publisher:{"@type":"Organization",name:"Antoine Caron",logo:{"@type":"ImageObject",url:""+a+I}}}})},S=n(5222),Z=m.ZP.div.withConfig({displayName:"blog-post__PostContent",componentId:"sc-hrojot-0"})(["margin-top:2rem;"]),M=m.ZP.div.withConfig({displayName:"blog-post__RelatedPost",componentId:"sc-hrojot-1"})(["margin-left:1rem;"]);function q(e){var t=e.data,n=e.pageContext,o=(n.previous,n.next,n.slug),m=n.language,g=e.location,p=t.markdownRemark,f=(i()(t,"config.frontmatter.title"),i()(t,"config.html"));p.excerpt;return r.createElement(c.A,{location:g,config:t.config,translations:p.frontmatter.translations},r.createElement(v,{type:"article",title:p.frontmatter.title,description:p.frontmatter.description||p.excerpt,lang:p.frontmatter.language,translations:p.frontmatter.translations,image:p.frontmatter.hero?p.frontmatter.hero.childImageSharp.image:null,slug:o,dateJson:p.frontmatter.dateJson,tags:p.frontmatter.tags}),r.createElement("h1",{style:{color:"var(--header)"}},p.frontmatter.title),p.headings.length>1&&r.createElement(u,{tableOfContents:p.tableOfContents}),r.createElement("div",{style:Object.assign({},(0,d.bA)(-.2),{marginBottom:(0,d.qZ)(1),marginTop:(0,d.qZ)(-1)})},r.createElement("time",{dateTime:p.frontmatter.dateJson},p.frontmatter.date),r.createElement("small",{style:{marginLeft:"1rem"}},(p.frontmatter.tags||[]).map((function(e){return r.createElement(a.Link,{style:{marginRight:"0.5rem"},key:e,to:"/"+m+"/"+e},"#",e)})))),r.createElement(x,{language:m,translations:p.frontmatter.translations}),p.frontmatter.hero&&r.createElement(l.Z,{fluid:p.frontmatter.hero.childImageSharp.fluid,alt:p.frontmatter.title}),r.createElement(Z,{dangerouslySetInnerHTML:{__html:p.html}}),r.createElement(P,{post:p,slug:o,siteUrl:t.site.siteMetadata.siteUrl}),r.createElement(k,{slug:o}),r.createElement("hr",{style:{marginBottom:(0,d.qZ)(1)}}),r.createElement(s.w,null,r.createElement("div",{dangerouslySetInnerHTML:{__html:f}})),r.createElement(S.J,{lang:p.frontmatter.language}),t.relatedPosts.edges.length?r.createElement("aside",null,r.createElement("header",null,r.createElement("h2",null,"Related posts:")),t.relatedPosts.edges.map((function(e){var t=e.node,n=i()(t,"frontmatter.title")||t.fields.slug;return r.createElement(M,{key:t.fields.slug},r.createElement("h3",{style:{marginBottom:(0,d.qZ)(1/4)}},r.createElement(a.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),r.createElement("small",null,r.createElement("time",{dateTime:t.frontmatter.dateJson},t.frontmatter.date)),r.createElement("small",{style:{margin:"0 1rem"}},r.createElement("span",{role:"img","aria-label":"Time to read"},"🕐"),t.timeToRead," min"),r.createElement("small",null,(t.frontmatter.tags||[]).map((function(e){return r.createElement(a.Link,{style:{marginRight:"0.5rem"},key:e,to:"/"+m+"/"+e},"#",e)}))),r.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))):null)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-325226a3c0d5b30e770f.js.map