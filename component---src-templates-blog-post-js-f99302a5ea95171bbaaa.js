(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6Gk8":function(t,e,a){"use strict";var n=a("dI71"),r=a("q1tI"),o=a.n(r),i=(a("tb+u"),a("GevN"),a("tmc/")),l=a.n(i),m=a("p3AD"),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.props.children;return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(m.a)(2.5)}},o.a.createElement("img",{src:l.a,alt:"Antoine Caron",style:{marginRight:Object(m.a)(.5),marginBottom:0,width:Object(m.a)(2),height:Object(m.a)(2)}}),t)},e}(o.a.Component);e.a=s},"tmc/":function(t,e,a){t.exports=a.p+"static/profile-pic-6015f9a66916f3d0b4678826cc46ec6c.jpg"},yZlL:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return J})),a.d(e,"pageQuery",(function(){return R}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("mwIZ"),l=a.n(i),m=a("9eSz"),s=a.n(m),c=a("vOnD"),d=a("6Gk8"),g=a("Bl7J"),p=a("p3AD"),u=c.a.aside.withConfig({displayName:"tableOfContents__Aside",componentId:"sc-1id9l7o-0"})(["display:none;width:400px;nav{margin-left:0.5rem;}ul{list-style:none;}li{margin-bottom:0.5rem;overflow:hidden;white-space:nowrap;,wordwrap:normal;text-overflow:ellipsis;}li > ul{margin-top:0;margin-left:1rem;}a{color:currentColor;box-shadow:none;}a:hover{box-shadow:0 1px 0 0 currentColor;}@media screen and (min-width:1500px){&{display:block;position:fixed;top:7rem;right:2rem;font-size:0.8rem;}}"]),f=c.a.header.withConfig({displayName:"tableOfContents__Heading",componentId:"sc-1id9l7o-1"})(["margin-bottom:0.8rem;font-weight:bold;font-size:1.1rem;"]),h=function(t){var e=t.tableOfContents;return r.a.createElement(u,null,r.a.createElement(f,null,"Table of content"),r.a.createElement("nav",{dangerouslySetInnerHTML:{__html:e}}))},y=(a("E9XD"),a("KQm4")),b=a("TJpk"),w=a.n(b),E=function(){return Object(o.useStaticQuery)("1264045386")},v={fr:"fr_FR",en:"en_US"},_=function(t){var e=t.description,a=t.lang,n=t.meta,i=t.title,l=t.image,m=t.translations,s=t.slug,c=t.type,d=void 0===c?"website":c,g=t.dateJson,p=t.tags,u=void 0===p?[]:p,f=Object(o.useStaticQuery)("4061151221").site,h=E().allMarkdownRemark.edges.reduce((function(t,e){var a=e.node;return t[a.frontmatter.language]=a.fields.slug,t}),{}),b=e+" "+(u||[]).join(", ")||f.siteMetadata.description,_=[],k=[],x=[];if(l&&(_=[{property:"og:image",content:f.siteMetadata.siteUrl+l.src},{name:"twitter:image",content:f.siteMetadata.siteUrl+l.src},{property:"og:image:alt",content:i},{property:"og:image:width",content:1080},{property:"og:image:type",content:"image/jpeg"}]),"article"===d&&(_.push({property:"article:author",content:"Antoine Caron"}),_.push({property:"article:section",content:"Frontend Tech"}),u&&u.forEach((function(t){_.push({property:"article:tag",content:t})}))),m){for(var C=0;C<m.length;C+=2)k.push({rel:"alternate",hreflang:m[C],href:""+h[m[C]]+m[C+1]}),x.push({property:"og:locale:alternate",content:v[m[C]]});k.push({rel:"alternate",hreflang:a,href:""+s})}return g&&_.push({property:"article:published_time",content:g}),u&&_.push({name:"keywords",content:u}),r.a.createElement(w.a,{htmlAttributes:{lang:a,prefix:"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"},head:!0,title:i,link:k,titleTemplate:"%s | "+f.siteMetadata.title,meta:[].concat(x,[{property:"og:site_name",content:"Antoine Caron"},{name:"description",content:b},{property:"og:url",content:""+f.siteMetadata.siteUrl+s},{property:"og:title",content:i},{property:"og:description",content:b},{property:"og:type",content:d},{property:"og:locale",content:v[a]},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:f.siteMetadata.social.twitter},{name:"twitter:title",content:i},{name:"twitter:description",content:b}],Object(y.a)(_),[{name:"google-site-verification",content:"h1uQ_z8fdlLI60AmxP8vjy1H-bKSDlv0n5XolWfeDIo"},{property:"fb:app_id",content:"235346886871248"}]).concat(n)})};_.defaultProps={lang:"en",meta:[],description:"",tags:[]};var k=_,x=c.a.div.withConfig({displayName:"availableLanguages__Container",componentId:"lioydm-0"})(["padding:1rem;margin:2rem 0;font-weight:bold;background-color:hsla(268,53%,51%,30%);border-radius:0.75rem;border:solid hsla(268,53%,51%) 1px;"]),C=function(t){var e=t.language,a=t.translations,n=E(),i=n.allMarkdownRemark.edges.find((function(t){return t.node.frontmatter.language==e})).node.frontmatter.language_option;return a?r.a.createElement(x,null,i,":"," ",n.allMarkdownRemark.edges.map((function(t){var n=t.node;if(n.frontmatter.language!=e){var i=n.fields.slug;if(a){var l=a.findIndex((function(t){return t==n.frontmatter.language}));-1!==l&&(i+=a[l+1])}return r.a.createElement(o.Link,{key:i,style:{boxShadow:"none",textDecoration:"none"},to:i,hrefLang:n.frontmatter.language},n.frontmatter.language_label)}}))):null},O=c.a.div.withConfig({displayName:"editOnGithub__Wrapper",componentId:"sc-1ubqci3-0"})(["margin-bottom:1rem;"]),I=function(t){var e=t.slug,a=Object(o.useStaticQuery)("1666466174").site.siteMetadata.repository;return r.a.createElement(O,null,r.a.createElement("a",{href:a+"/edit/source/src/pages"+e+"index.md",target:"_blank"},"Edit this page on Github"))},j=a("WAGf"),S=a("tmc/"),M=a.n(S),T=function(t){var e=t.post,a=t.slug,n=t.siteUrl;return r.a.createElement(j.a,{content:{"@context":"http://schema.org","@type":"BlogPosting",headline:e.frontmatter.title,editor:"Antoine Caron",genre:"Tech Blog",wordcount:e.wordCount.words,url:""+n+a,mainEntityOfPage:""+n+a,datePublished:e.frontmatter.dateJson,dateCreated:e.frontmatter.dateJson,dateModified:e.frontmatter.dateJson,description:e.frontmatter.description,articleBody:e.html,image:[""+n+e.frontmatter.hero.childImageSharp.image16x9.src,""+n+e.frontmatter.hero.childImageSharp.image4x3.src,""+n+e.frontmatter.hero.childImageSharp.image1x1.src],keywords:e.frontmatter.tags,author:{"@type":"Person",name:"Antoine Caron"},publisher:{"@type":"Organization",name:"Antoine Caron",logo:{"@type":"ImageObject",url:""+n+M.a}}}})},L=c.a.div.withConfig({displayName:"blog-post__PostContent",componentId:"hrojot-0"})(["margin-top:2rem;"]),A=c.a.div.withConfig({displayName:"blog-post__RelatedPost",componentId:"hrojot-1"})(["margin-left:1rem;"]);function J(t){var e=t.data,a=t.pageContext,n=(a.previous,a.next,a.slug),i=a.language,m=t.location,c=e.markdownRemark,u=(l()(e,"config.frontmatter.title"),l()(e,"config.html"));c.excerpt;return r.a.createElement(g.a,{location:m,config:e.config,translations:c.frontmatter.translations},r.a.createElement(k,{type:"article",title:c.frontmatter.title,description:c.frontmatter.description||c.excerpt,lang:c.frontmatter.language,translations:c.frontmatter.translations,image:c.frontmatter.hero?c.frontmatter.hero.childImageSharp.image:null,slug:n,dateJson:c.frontmatter.dateJson,tags:c.frontmatter.tags}),r.a.createElement("h1",{style:{color:"var(--header)"}},c.frontmatter.title),c.headings.length>1&&r.a.createElement(h,{tableOfContents:c.tableOfContents}),r.a.createElement("div",{style:Object.assign({},Object(p.b)(-.2),{marginBottom:Object(p.a)(1),marginTop:Object(p.a)(-1)})},r.a.createElement("time",{dateTime:c.frontmatter.dateJson},c.frontmatter.date),r.a.createElement("small",{style:{marginLeft:"1rem"}},(c.frontmatter.tags||[]).map((function(t){return r.a.createElement(o.Link,{style:{marginRight:"0.5rem"},key:t,to:"/"+i+"/"+t},"#",t)})))),r.a.createElement(C,{language:i,translations:c.frontmatter.translations}),c.frontmatter.hero&&r.a.createElement(s.a,{fluid:c.frontmatter.hero.childImageSharp.fluid,alt:c.frontmatter.title}),r.a.createElement(L,{dangerouslySetInnerHTML:{__html:c.html}}),r.a.createElement(T,{post:c,slug:n,siteUrl:e.site.siteMetadata.siteUrl}),r.a.createElement(I,{slug:n}),r.a.createElement("hr",{style:{marginBottom:Object(p.a)(1)}}),r.a.createElement(d.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}})),e.relatedPosts.edges.length?r.a.createElement("aside",null,r.a.createElement("header",null,r.a.createElement("h2",null,"Related posts:")),e.relatedPosts.edges.map((function(t){var e=t.node,a=l()(e,"frontmatter.title")||e.fields.slug;return r.a.createElement(A,{key:e.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(p.a)(1/4)}},r.a.createElement(o.Link,{style:{boxShadow:"none"},to:e.fields.slug},a)),r.a.createElement("small",null,r.a.createElement("time",{dateTime:e.frontmatter.dateJson},e.frontmatter.date)),r.a.createElement("small",{style:{margin:"0 1rem"}},r.a.createElement("span",{role:"img","aria-label":"Time to read"},"🕐"),e.timeToRead," min"),r.a.createElement("small",null,(e.frontmatter.tags||[]).map((function(t){return r.a.createElement(o.Link,{style:{marginRight:"0.5rem"},key:t,to:"/"+i+"/"+t},"#",t)}))),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))):null)}var R="2930435900"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f99302a5ea95171bbaaa.js.map