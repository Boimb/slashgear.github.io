(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6Gk8":function(t,e,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=(n("tb+u"),n("GevN"),n("tmc/")),l=n.n(o),s=n("p3AD"),c=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props.children;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},i.a.createElement("img",{src:l.a,alt:"Antoine Caron",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}),t)},e}(i.a.Component);e.a=c},"6zF5":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a),i=n("WAGf"),o=function(t){var e=t.posts,n=void 0===e?[]:e,a=t.siteUrl;return r.a.createElement(i.a,{content:{"@context":"https://schema.org","@type":"ItemList",itemListElement:n.map((function(t,e){return{"@type":"ListItem",position:e+1,url:""+a+t.node.fields.slug}}))}})}},GH6y:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),i=n("vOnD"),o=n("Wbzz"),l=i.a.footer.withConfig({displayName:"socials__Footer",componentId:"sc-932uha-0"})(["display:flex;justify-content:space-between;margin-top:4rem;"]),s={Github:"https://github.com/Slashgear",Twitter:"https://twitter.com/Slashgear_",LinkedIn:"https://www.linkedin.com/in/antoine-caron-7089788a",DevTo:"https://dev.to/slashgear_",Medium:"https://medium.com/@Slashgear_"},c=function(){return r.a.createElement(l,null,r.a.createElement("div",null,Object.keys(s).map((function(t){return r.a.createElement("a",{key:t,href:s[t]},t)})).reduce((function(t,e){return[t," • ",e]}))),r.a.createElement("div",null,r.a.createElement(o.Link,{to:"/rss.xml"},"RSS")))}},TshS:function(t,e,n){"use strict";n.r(e);var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("Wbzz"),l=n("mwIZ"),s=n.n(l),c=n("TJpk"),m=n.n(c),u=n("9eSz"),p=n.n(u),d=n("6Gk8"),f=n("Bl7J"),h=n("p3AD"),g=n("GH6y"),E=n("6zF5"),y=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this,e=s()(this,"props.data.config"),n=s()(this,"props.data.allMarkdownRemark.edges"),a=s()(e,"frontmatter.title"),r=s()(e,"frontmatter.description"),l=s()(e,"html");return i.a.createElement(f.a,{location:this.props.location,config:e},i.a.createElement(m.a,{htmlAttributes:{lang:this.props.pageContext.language},meta:[{name:"description",content:r}],title:a}),i.a.createElement(E.a,{posts:n,siteUrl:this.props.data.site.siteMetadata.siteUrl}),i.a.createElement(d.a,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})),n.map((function(e){var n=e.node,a=s()(n,"frontmatter.title")||n.fields.slug;return i.a.createElement("div",{key:n.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(h.a)(1/4)}},i.a.createElement(o.Link,{style:{boxShadow:"none"},to:n.fields.slug},a)),i.a.createElement("small",null,i.a.createElement("time",{dateTime:n.frontmatter.dateJson},n.frontmatter.date)),i.a.createElement("small",{style:{margin:"0 1rem"}},i.a.createElement("span",{role:"img","aria-label":"Time to read"},"🕐"),n.timeToRead," min"),i.a.createElement("small",null,(n.frontmatter.tags||[]).map((function(e){return i.a.createElement(o.Link,{style:{marginRight:"0.5rem"},key:e,to:"/"+t.props.pageContext.language+"/"+e},"#",e)}))),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.excerpt}}),n.frontmatter.hero&&i.a.createElement(p.a,{fluid:n.frontmatter.hero.childImageSharp.fluid,alt:n.frontmatter.title}))})),i.a.createElement(g.a,null))},e}(i.a.Component);e.default=y},"tmc/":function(t,e,n){t.exports=n.p+"static/profile-pic-6015f9a66916f3d0b4678826cc46ec6c.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-368adb540219a1026bf9.js.map