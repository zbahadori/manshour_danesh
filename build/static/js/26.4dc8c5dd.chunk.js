(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[26],{772:function(e,a,t){"use strict";var r=t(18),s=t(19),n=t(0),i=t.n(n),l=t(1),o=t.n(l),d=t(8),c=t.n(d),m=t(9),u={tag:m.q,className:o.a.string,cssModule:o.a.object},g=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),o=Object(m.m)(c()(a,"card-header"),t);return i.a.createElement(n,Object(r.a)({},l,{className:o}))};g.propTypes=u,g.defaultProps={tag:"div"},a.a=g},790:function(e,a,t){"use strict";var r=t(18),s=t(19),n=t(0),i=t.n(n),l=t(1),o=t.n(l),d=t(8),c=t.n(d),m=t(9),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:m.q,responsiveTag:m.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},g=function(e){var a=e.className,t=e.cssModule,n=e.size,l=e.bordered,o=e.borderless,d=e.striped,u=e.dark,g=e.hover,b=e.responsive,p=e.tag,v=e.responsiveTag,f=e.innerRef,E=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(m.m)(c()(a,"table",!!n&&"table-"+n,!!l&&"table-bordered",!!o&&"table-borderless",!!d&&"table-striped",!!u&&"table-dark",!!g&&"table-hover"),t),A=i.a.createElement(p,Object(r.a)({},E,{ref:f,className:h}));if(b){var M=Object(m.m)(!0===b?"table-responsive":"table-responsive-"+b,t);return i.a.createElement(v,{className:M},A)}return A};g.propTypes=u,g.defaultProps={tag:"table",responsiveTag:"div"},a.a=g},810:function(e,a,t){"use strict";a.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"F\xe9lix Troels",registered:"2018/03/21",role:"Staff",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}]},995:function(e,a,t){"use strict";t.r(a);var r=t(79),s=t(80),n=t(82),i=t(81),l=t(0),o=t.n(l),d=t(29),c=t(749),m=t(752),u=t(753),g=t(755),b=t(772),p=t(756),v=t(790),f=t(810);function E(e){var a,t=e.user,r="/users/".concat(t.id);return o.a.createElement("tr",{key:t.id.toString()},o.a.createElement("th",{scope:"row"},o.a.createElement(d.Link,{to:r},t.id)),o.a.createElement("td",null,o.a.createElement(d.Link,{to:r},t.name)),o.a.createElement("td",null,t.registered),o.a.createElement("td",null,t.role),o.a.createElement("td",null,o.a.createElement(d.Link,{to:r},o.a.createElement(c.a,{color:(a=t.status,"Active"===a?"success":"Inactive"===a?"secondary":"Pending"===a?"warning":"Banned"===a?"danger":"primary")},t.status))))}var h=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=f.a.filter((function(e){return e.id<10}));return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(m.a,null,o.a.createElement(u.a,{xl:6},o.a.createElement(g.a,null,o.a.createElement(b.a,null,o.a.createElement("i",{className:"fa fa-align-justify"})," Users ",o.a.createElement("small",{className:"text-muted"},"example")),o.a.createElement(p.a,null,o.a.createElement(v.a,{responsive:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"id"),o.a.createElement("th",{scope:"col"},"name"),o.a.createElement("th",{scope:"col"},"registered"),o.a.createElement("th",{scope:"col"},"role"),o.a.createElement("th",{scope:"col"},"status"))),o.a.createElement("tbody",null,e.map((function(e,a){return o.a.createElement(E,{key:a,user:e})})))))))))}}]),t}(l.Component);a.default=h}}]);
//# sourceMappingURL=26.4dc8c5dd.chunk.js.map