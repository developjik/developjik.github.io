"use strict";(self.webpackChunkzoomkoding_com=self.webpackChunkzoomkoding_com||[]).push([[678],{2863:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(2982),r=n(7294),u=n(1280),o=n(5150),c=n(4155),f=n(7405),s=n(2496);var d=function(e){var t=e.data,n=t.allMarkdownRemark.edges.map((function(e){var t=e.node;return new f.Z(t)}));n.sort((function(e,t){return Date.parse(t.date)-Date.parse(e.date)}));var d=t.site.siteMetadata,i=d.author,l=d.language,m=function(e){var t=new Set;return e.forEach((function(e){return e.categories.forEach((function(e){return t.add(e)}))})),(0,a.Z)(t).sort((function(e,t){return"featured"===e?-1:"featured"===t?1:0}))}(n);m.sort();var g=["All"].concat((0,a.Z)(m)),h=g.findIndex((function(e){return"featured"===e})),k=(0,r.useState)(-1===h?0:h),p=k[0],v=k[1],Z=(0,r.useCallback)((function(e,t){return v(t)}),[]);return r.createElement(u.Z,null,r.createElement(o.Z,{title:"Home"}),r.createElement(c.Z,{author:i,language:l}),r.createElement(s.Z,{posts:n,onChange:Z,tabs:g,tabIndex:p,showMoreButton:!0}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c63649266f0efc0f8a9d.js.map