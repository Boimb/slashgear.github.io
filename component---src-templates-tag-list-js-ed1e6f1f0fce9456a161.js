"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[176],{2016:function(t,e,n){n.d(e,{a:function(){return i},H:function(){return l}});var a=n(9),i=a.default.ul.withConfig({displayName:"listcomponent__List",componentId:"sc-1nc5peu-0"})(["margin:0;padding:0;"]),l=a.default.li.withConfig({displayName:"listcomponent__ListItem",componentId:"sc-1nc5peu-1"})(["display:block;margin:0;padding:0;"])},3577:function(t,e,n){n.d(e,{h:function(){return i}});var a=n(7294),i=function(t){var e=t.content;return a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})}},9578:function(t,e,n){n.d(e,{w:function(){return l}});var a=n(7294),i=n(3577),l=function(t){var e=t.posts,n=void 0===e?[]:e,l=t.siteUrl;return a.createElement(i.h,{content:{"@context":"https://schema.org","@type":"ItemList",itemListElement:n.map((function(t,e){return{"@type":"ListItem",position:e+1,url:""+l+t.node.fields.slug}}))}})}},2701:function(t,e,n){n.d(e,{V:function(){return a}});var a=n(9).default.h1.withConfig({displayName:"pageTitlecomponent__PageTitle",componentId:"sc-la92g4-0"})(["font-size:1.7rem;"])},187:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var a=n(7294),i=n(5414),l=n(8347),r=n(1597),o=n(7861),s=n(9175),c=n(9578),m=JSON.parse('{"fr":{"tagList":{"description":"All blog post with the usage of this tag: ","title":"| Antoine Caron"}},"en":{"tagList":{"description":"Tous les articles de blog utilisant ce tag: ","title":"| Antoine Caron"}}}'),u=n(2016),g=n(2701),d=function(t){var e=t.location,n=t.pageContext,d=t.data,p=(0,l.Z)(d,"allMarkdownRemark.edges");return a.createElement(o.A,{location:e,config:{fields:{slug:n.slug},frontmatter:{title:"#"+n.tag}},lang:n.language},a.createElement(i.q,{htmlAttributes:{lang:n.language},meta:[{name:"description",content:m[n.language].tagList.description+" "+n.tag}],title:n.tag.charAt(0).toUpperCase()+n.tag.slice(1)+" "+m[n.language].tagList.title}),a.createElement(c.w,{posts:p,siteUrl:d.site.siteMetadata.siteUrl}),a.createElement("main",null,a.createElement(g.V,null,"#",n.tag),a.createElement(u.a,null,p.map((function(t){var e=t.node,i=(0,l.Z)(e,"frontmatter.title")||e.fields.slug;return a.createElement(u.H,{key:e.fields.slug},a.createElement("article",null,a.createElement("h2",{style:{marginBottom:(0,s.qZ)(1/4)}},a.createElement(r.Link,{style:{boxShadow:"none"},to:e.fields.slug},i)),a.createElement("span",null,a.createElement("time",{dateTime:e.frontmatter.dateJson},e.frontmatter.date)),a.createElement("span",{style:{margin:"0 1rem"}},a.createElement("span",{role:"img","aria-label":"Time to read"},"🕐"),e.timeToRead," min"),a.createElement("span",null,(e.frontmatter.tags||[]).map((function(t){return a.createElement(r.Link,{style:{marginRight:"0.5rem"},key:t,to:"/"+n.language+"/"+t},"#",t)}))),a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}})))})))))}}}]);
//# sourceMappingURL=component---src-templates-tag-list-js-ed1e6f1f0fce9456a161.js.map