(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[25],{772:function(e,a,t){"use strict";var r=t(18),s=t(19),n=t(0),i=t.n(n),d=t(1),o=t.n(d),l=t(8),c=t.n(l),m=t(9),u={tag:m.q,className:o.a.string,cssModule:o.a.object},g=function(e){var a=e.className,t=e.cssModule,n=e.tag,d=Object(s.a)(e,["className","cssModule","tag"]),o=Object(m.m)(c()(a,"card-header"),t);return i.a.createElement(n,Object(r.a)({},d,{className:o}))};g.propTypes=u,g.defaultProps={tag:"div"},a.a=g},790:function(e,a,t){"use strict";var r=t(18),s=t(19),n=t(0),i=t.n(n),d=t(1),o=t.n(d),l=t(8),c=t.n(l),m=t(9),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:m.q,responsiveTag:m.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},g=function(e){var a=e.className,t=e.cssModule,n=e.size,d=e.bordered,o=e.borderless,l=e.striped,u=e.dark,g=e.hover,b=e.responsive,p=e.tag,f=e.responsiveTag,v=e.innerRef,h=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(m.m)(c()(a,"table",!!n&&"table-"+n,!!d&&"table-bordered",!!o&&"table-borderless",!!l&&"table-striped",!!u&&"table-dark",!!g&&"table-hover"),t),A=i.a.createElement(p,Object(r.a)({},h,{ref:v,className:E}));if(b){var M=Object(m.m)(!0===b?"table-responsive":"table-responsive-"+b,t);return i.a.createElement(f,{className:M},A)}return A};g.propTypes=u,g.defaultProps={tag:"table",responsiveTag:"div"},a.a=g},810:function(e,a,t){"use strict";a.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"F\xe9lix Troels",registered:"2018/03/21",role:"Staff",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}]},996:function(e,a,t){"use strict";t.r(a);var r=t(20),s=t(79),n=t(80),i=t(82),d=t(81),o=t(0),l=t.n(o),c=t(752),m=t(753),u=t(755),g=t(772),b=t(756),p=t(790),f=t(810),v=function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){var e=this,a=f.a.find((function(a){return a.id.toString()===e.props.match.params.id})),t=a?Object.entries(a):[["id",l.a.createElement("span",null,l.a.createElement("i",{className:"text-muted icon-ban"})," Not found")]];return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(c.a,null,l.a.createElement(m.a,{lg:6},l.a.createElement(u.a,null,l.a.createElement(g.a,null,l.a.createElement("strong",null,l.a.createElement("i",{className:"icon-info pr-1"}),"User id: ",this.props.match.params.id)),l.a.createElement(b.a,null,l.a.createElement(p.a,{responsive:!0,striped:!0,hover:!0},l.a.createElement("tbody",null,t.map((function(e){var a=Object(r.a)(e,2),t=a[0],s=a[1];return l.a.createElement("tr",{key:t},l.a.createElement("td",null,"".concat(t,":")),l.a.createElement("td",null,l.a.createElement("strong",null,s)))})))))))))}}]),t}(o.Component);a.default=v}}]);
//# sourceMappingURL=25.1d005fb7.chunk.js.map