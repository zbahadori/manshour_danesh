(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[15],{772:function(e,a,t){"use strict";var l=t(18),n=t(19),r=t(0),c=t.n(r),m=t(1),u=t.n(m),s=t(8),E=t.n(s),o=t(9),d={tag:o.q,className:u.a.string,cssModule:u.a.object},i=function(e){var a=e.className,t=e.cssModule,r=e.tag,m=Object(n.a)(e,["className","cssModule","tag"]),u=Object(o.m)(E()(a,"card-header"),t);return c.a.createElement(r,Object(l.a)({},m,{className:u}))};i.propTypes=d,i.defaultProps={tag:"div"},a.a=i},790:function(e,a,t){"use strict";var l=t(18),n=t(19),r=t(0),c=t.n(r),m=t(1),u=t.n(m),s=t(8),E=t.n(s),o=t(9),d={className:u.a.string,cssModule:u.a.object,size:u.a.string,bordered:u.a.bool,borderless:u.a.bool,striped:u.a.bool,dark:u.a.bool,hover:u.a.bool,responsive:u.a.oneOfType([u.a.bool,u.a.string]),tag:o.q,responsiveTag:o.q,innerRef:u.a.oneOfType([u.a.func,u.a.string,u.a.object])},i=function(e){var a=e.className,t=e.cssModule,r=e.size,m=e.bordered,u=e.borderless,s=e.striped,d=e.dark,i=e.hover,b=e.responsive,g=e.tag,v=e.responsiveTag,p=e.innerRef,f=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(o.m)(E()(a,"table",!!r&&"table-"+r,!!m&&"table-bordered",!!u&&"table-borderless",!!s&&"table-striped",!!d&&"table-dark",!!i&&"table-hover"),t),N=c.a.createElement(g,Object(l.a)({},f,{ref:p,className:h}));if(b){var j=Object(o.m)(!0===b?"table-responsive":"table-responsive-"+b,t);return c.a.createElement(v,{className:j},N)}return N};i.propTypes=d,i.defaultProps={tag:"table",responsiveTag:"div"},a.a=i},870:function(e,a,t){"use strict";var l=t(18),n=t(19),r=t(0),c=t.n(r),m=t(1),u=t.n(m),s=t(8),E=t.n(s),o=t(9),d={children:u.a.node,className:u.a.string,listClassName:u.a.string,cssModule:u.a.object,size:u.a.string,tag:o.q,listTag:o.q,"aria-label":u.a.string},i=function(e){var a,t=e.className,r=e.listClassName,m=e.cssModule,u=e.size,s=e.tag,d=e.listTag,i=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),g=Object(o.m)(E()(t),m),v=Object(o.m)(E()(r,"pagination",((a={})["pagination-"+u]=!!u,a)),m);return c.a.createElement(s,{className:g,"aria-label":i},c.a.createElement(d,Object(l.a)({},b,{className:v})))};i.propTypes=d,i.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=i},871:function(e,a,t){"use strict";var l=t(18),n=t(19),r=t(0),c=t.n(r),m=t(1),u=t.n(m),s=t(8),E=t.n(s),o=t(9),d={active:u.a.bool,children:u.a.node,className:u.a.string,cssModule:u.a.object,disabled:u.a.bool,tag:o.q},i=function(e){var a=e.active,t=e.className,r=e.cssModule,m=e.disabled,u=e.tag,s=Object(n.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(o.m)(E()(t,"page-item",{active:a,disabled:m}),r);return c.a.createElement(u,Object(l.a)({},s,{className:d}))};i.propTypes=d,i.defaultProps={tag:"li"},a.a=i},872:function(e,a,t){"use strict";var l=t(18),n=t(19),r=t(0),c=t.n(r),m=t(1),u=t.n(m),s=t(8),E=t.n(s),o=t(9),d={"aria-label":u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,next:u.a.bool,previous:u.a.bool,first:u.a.bool,last:u.a.bool,tag:o.q},i=function(e){var a,t=e.className,r=e.cssModule,m=e.next,u=e.previous,s=e.first,d=e.last,i=e.tag,b=Object(n.a)(e,["className","cssModule","next","previous","first","last","tag"]),g=Object(o.m)(E()(t,"page-link"),r);u?a="Previous":m?a="Next":s?a="First":d&&(a="Last");var v,p=e["aria-label"]||a;u?v="\u2039":m?v="\u203a":s?v="\xab":d&&(v="\xbb");var f=e.children;return f&&Array.isArray(f)&&0===f.length&&(f=null),b.href||"a"!==i||(i="button"),(u||m||s||d)&&(f=[c.a.createElement("span",{"aria-hidden":"true",key:"caret"},f||v),c.a.createElement("span",{className:"sr-only",key:"sr"},p)]),c.a.createElement(i,Object(l.a)({},b,{className:g,"aria-label":p}),f)};i.propTypes=d,i.defaultProps={tag:"a"},a.a=i},981:function(e,a,t){"use strict";t.r(a);var l=t(79),n=t(80),r=t(82),c=t(81),m=t(0),u=t.n(m),s=t(752),E=t(753),o=t(755),d=t(772),i=t(756),b=t(790),g=t(749),v=t(870),p=t(871),f=t(872),h=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(s.a,null,u.a.createElement(E.a,{xs:"12",lg:"6"},u.a.createElement(o.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Simple Table"),u.a.createElement(i.a,null,u.a.createElement(b.a,{responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Username"),u.a.createElement("th",null,"Date registered"),u.a.createElement("th",null,"Role"),u.a.createElement("th",null,"Status"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Samppa Nori"),u.a.createElement("td",null,"2012/01/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Estavan Lykos"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"danger"},"Banned"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Chetan Mohamed"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Admin"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"secondary"},"Inactive"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Derick Maximinus"),u.a.createElement("td",null,"2012/03/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"warning"},"Pending"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Friderik D\xe1vid"),u.a.createElement("td",null,"2012/01/21"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))))),u.a.createElement(v.a,null,u.a.createElement(p.a,null,u.a.createElement(f.a,{previous:!0,tag:"button"})),u.a.createElement(p.a,{active:!0},u.a.createElement(f.a,{tag:"button"},"1")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"2")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"3")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"4")),u.a.createElement(p.a,null,u.a.createElement(f.a,{next:!0,tag:"button"})))))),u.a.createElement(E.a,{xs:"12",lg:"6"},u.a.createElement(o.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Striped Table"),u.a.createElement(i.a,null,u.a.createElement(b.a,{responsive:!0,striped:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Username"),u.a.createElement("th",null,"Date registered"),u.a.createElement("th",null,"Role"),u.a.createElement("th",null,"Status"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Yiorgos Avraamu"),u.a.createElement("td",null,"2012/01/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Avram Tarasios"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"danger"},"Banned"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Quintin Ed"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Admin"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"secondary"},"Inactive"))),u.a.createElement("tr",null,u.a.createElement("td",null,"En\xe9as Kwadwo"),u.a.createElement("td",null,"2012/03/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"warning"},"Pending"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Agapetus Tade\xe1\u0161"),u.a.createElement("td",null,"2012/01/21"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))))),u.a.createElement(v.a,null,u.a.createElement(p.a,{disabled:!0},u.a.createElement(f.a,{previous:!0,tag:"button"},"Prev")),u.a.createElement(p.a,{active:!0},u.a.createElement(f.a,{tag:"button"},"1")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"2")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"3")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"4")),u.a.createElement(p.a,null,u.a.createElement(f.a,{next:!0,tag:"button"},"Next"))))))),u.a.createElement(s.a,null,u.a.createElement(E.a,{xs:"12",lg:"6"},u.a.createElement(o.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Condensed Table"),u.a.createElement(i.a,null,u.a.createElement(b.a,{responsive:!0,size:"sm"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Username"),u.a.createElement("th",null,"Date registered"),u.a.createElement("th",null,"Role"),u.a.createElement("th",null,"Status"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Carwyn Fachtna"),u.a.createElement("td",null,"2012/01/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Nehemiah Tatius"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"danger"},"Banned"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Ebbe Gemariah"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Admin"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"secondary"},"Inactive"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Eustorgios Amulius"),u.a.createElement("td",null,"2012/03/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"warning"},"Pending"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Leopold G\xe1sp\xe1r"),u.a.createElement("td",null,"2012/01/21"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))))),u.a.createElement(v.a,null,u.a.createElement(p.a,null,u.a.createElement(f.a,{previous:!0,tag:"button"},"Prev")),u.a.createElement(p.a,{active:!0},u.a.createElement(f.a,{tag:"button"},"1")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"2")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"3")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"4")),u.a.createElement(p.a,null,u.a.createElement(f.a,{next:!0,tag:"button"},"Next")))))),u.a.createElement(E.a,{xs:"12",lg:"6"},u.a.createElement(o.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Bordered Table"),u.a.createElement(i.a,null,u.a.createElement(b.a,{responsive:!0,bordered:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Username"),u.a.createElement("th",null,"Date registered"),u.a.createElement("th",null,"Role"),u.a.createElement("th",null,"Status"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Pompeius Ren\xe9"),u.a.createElement("td",null,"2012/01/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Pa\u0109jo Jadon"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"danger"},"Banned"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Micheal Mercurius"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Admin"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"secondary"},"Inactive"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Ganesha Dubhghall"),u.a.createElement("td",null,"2012/03/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"warning"},"Pending"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Hiroto \u0160imun"),u.a.createElement("td",null,"2012/01/21"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))))),u.a.createElement(v.a,null,u.a.createElement(p.a,null,u.a.createElement(f.a,{previous:!0,tag:"button"},"Prev")),u.a.createElement(p.a,{active:!0},u.a.createElement(f.a,{tag:"button"},"1")),u.a.createElement(p.a,{className:"page-item"},u.a.createElement(f.a,{tag:"button"},"2")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"3")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"4")),u.a.createElement(p.a,null,u.a.createElement(f.a,{next:!0,tag:"button"},"Next"))))))),u.a.createElement(s.a,null,u.a.createElement(E.a,null,u.a.createElement(o.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Combined All Table"),u.a.createElement(i.a,null,u.a.createElement(b.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Username"),u.a.createElement("th",null,"Date registered"),u.a.createElement("th",null,"Role"),u.a.createElement("th",null,"Status"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Vishnu Serghei"),u.a.createElement("td",null,"2012/01/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Zbyn\u011bk Phoibos"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"danger"},"Banned"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Einar Randall"),u.a.createElement("td",null,"2012/02/01"),u.a.createElement("td",null,"Admin"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"secondary"},"Inactive"))),u.a.createElement("tr",null,u.a.createElement("td",null,"F\xe9lix Troels"),u.a.createElement("td",null,"2012/03/01"),u.a.createElement("td",null,"Member"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"warning"},"Pending"))),u.a.createElement("tr",null,u.a.createElement("td",null,"Aulus Agmundr"),u.a.createElement("td",null,"2012/01/21"),u.a.createElement("td",null,"Staff"),u.a.createElement("td",null,u.a.createElement(g.a,{color:"success"},"Active"))))),u.a.createElement("nav",null,u.a.createElement(v.a,null,u.a.createElement(p.a,null,u.a.createElement(f.a,{previous:!0,tag:"button"},"Prev")),u.a.createElement(p.a,{active:!0},u.a.createElement(f.a,{tag:"button"},"1")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"2")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"3")),u.a.createElement(p.a,null,u.a.createElement(f.a,{tag:"button"},"4")),u.a.createElement(p.a,null,u.a.createElement(f.a,{next:!0,tag:"button"},"Next")))))))))}}]),t}(m.Component);a.default=h}}]);
//# sourceMappingURL=15.bd3be880.chunk.js.map