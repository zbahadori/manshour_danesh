(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[20,33],{1002:function(e,a,t){"use strict";t.r(a);var n=t(79),r=t(80),o=t(82),l=t(81),c=t(0),s=t.n(c),i=t(752),m=t(753),d=t(754),u=t(127),f=t(755),p=t(756),v=t(797),E=t(8),h=t.n(E),b=t(785),g=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.cssModule,n=e.header,r=e.mainText,o=e.smallText,l=e.color,c=e.value,i=e.children,m=e.variant,d=Object(u.a)(e,["className","cssModule","header","mainText","smallText","color","value","children","variant"]),E={style:"",color:l,value:c},g={style:"",bgColor:""};"inverse"===m&&(E.style="progress-white",E.color="",g.style="text-white",g.bgColor="bg-"+l);var y=Object(b.mapToCssModules)(h()(a,g.style,g.bgColor),t);return E.style=h()("progress-xs my-3",E.style),s.a.createElement(f.a,Object.assign({className:y},d),s.a.createElement(p.a,null,s.a.createElement("div",{className:"h4 m-0"},n),s.a.createElement("div",null,r),s.a.createElement(v.a,{className:E.style,color:E.color,value:E.value}),s.a.createElement("small",{className:"text-muted"},o),s.a.createElement("div",null,i)))}}]),t}(c.Component);g.defaultProps={header:"89.9%",mainText:"Lorem ipsum...",smallText:"Lorem ipsum dolor sit amet enim.",value:"25",variant:""};var y=g,x=t(759),T=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.cssModule,n=e.header,r=e.mainText,o=e.icon,l=e.color,c=e.footer,i=e.link,m=(e.children,e.variant),d=Object(u.a)(e,["className","cssModule","header","mainText","icon","color","footer","link","children","variant"]),v="0"===m?{card:"p-3",icon:"p-3",lead:"mt-2"}:"1"===m?{card:"p-0",icon:"p-4",lead:"pt-3"}:{card:"p-0",icon:"p-4 px-5",lead:"pt-3"},E={style:"clearfix",color:l,icon:o,classes:""};E.classes=Object(b.mapToCssModules)(h()(a,E.style,v.card),t);var g={style:"h5 mb-0",color:l,classes:""};g.classes=h()(g.style,"text-"+E.color,v.lead);return s.a.createElement(f.a,null,s.a.createElement(p.a,Object.assign({className:E.classes},d),function(e){var a=h()(e,"bg-"+E.color,v.icon,"font-2xl mr-3 float-left");return s.a.createElement("i",{className:a})}(E.icon),s.a.createElement("div",{className:g.classes},n),s.a.createElement("div",{className:"text-muted text-uppercase font-weight-bold font-xs"},r)),function(){if(c)return s.a.createElement(x.a,{className:"px-3 py-2"},s.a.createElement("a",{className:"font-weight-bold font-xs btn-block text-muted",href:i},"View More",s.a.createElement("i",{className:"fa fa-angle-right float-right font-lg"})))}())}}]),t}(c.Component);T.defaultProps={header:"$1,999.50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"0",link:"#"};var O=T,w=t(845),N=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.cssModule,n=e.header,r=e.icon,o=e.color,l=e.value,c=e.children,i=e.invert,m=Object(u.a)(e,["className","cssModule","header","icon","color","value","children","invert"]),d={style:"",color:o,value:l},E={style:"",bgColor:"",icon:r};i&&(d.style="progress-white",d.color="",E.style="text-white",E.bgColor="bg-"+o);var g=Object(b.mapToCssModules)(h()(a,E.style,E.bgColor),t);return d.style=h()("progress-xs mt-3 mb-0",d.style),s.a.createElement(f.a,Object.assign({className:g},m),s.a.createElement(p.a,null,s.a.createElement("div",{className:"h1 text-muted text-right mb-2"},s.a.createElement("i",{className:E.icon})),s.a.createElement("div",{className:"h4 mb-0"},n),s.a.createElement("small",{className:"text-muted text-uppercase font-weight-bold"},c),s.a.createElement(v.a,{className:d.style,color:d.color,value:d.value})))}}]),t}(c.Component);N.defaultProps={header:"87.500",icon:"icon-people",color:"info",value:"25",children:"Visitors",invert:!1};var j=N,C=t(799),k=function(e){var a=[{data:[65,59,84,84,51,55,40],label:"facebook"},{data:[1,13,9,17,34,41,38],label:"twitter"},{data:[78,81,80,45,34,12,40],label:"linkedin"},{data:[35,23,56,22,97,23,64],label:"google"}][e],t={labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:a.data,label:a.label}]};return function(){return t}},M={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}},$=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(i.a,null,s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(y,{color:"success",header:"89.9%"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(y,{color:"info",header:"12.124"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(y,{color:"warning",header:"$98.111,00",smallText:""},s.a.createElement("small",{className:"text-muted"},"Excepteur sint occaecat..."))),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(y,{color:"danger",value:"95",header:"1.9 TB",mainText:"Danger!",smallText:"This is your final warning..."})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(y,{color:"primary",variant:"inverse",header:"89.9%"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(y,{color:"warning",variant:"inverse",header:"12.124"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(y,{color:"danger",variant:"inverse",header:"$98.111,00",smallText:""},s.a.createElement("small",{className:"text-muted"},"Excepteur sint occaecat..."))),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(y,{color:"info",variant:"inverse",value:"95",header:"1.9 TB",mainText:"Danger!",smallText:"This is your final warning..."}))),s.a.createElement(i.a,null,s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-cogs",color:"primary"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-laptop",color:"info"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-moon-o",color:"warning"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-bell",color:"danger"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-cogs",color:"primary",footer:!0,link:"#/charts"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-laptop",color:"info",footer:!0})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-moon-o",color:"warning",footer:!0})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-bell",color:"danger",footer:!0}))),s.a.createElement(i.a,null,s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"1"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-laptop",color:"info",variant:"1"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-moon-o",color:"warning",variant:"1"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-bell",color:"danger",variant:"1"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"2"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-laptop",color:"info",variant:"2"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-moon-o",color:"warning",variant:"2"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(O,{header:"$1.999,50",mainText:"Income",icon:"fa fa-bell",color:"danger",variant:"2"}))),s.a.createElement(i.a,null,s.a.createElement(m.a,{xs:12,sm:6,md:3},s.a.createElement(w.default,{dataBox:function(){return{variant:"facebook",friends:"89k",feeds:"459"}}},s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(C.c,{data:k(0),options:M,height:90})))),s.a.createElement(m.a,{xs:12,sm:6,md:3},s.a.createElement(w.default,{dataBox:function(){return{variant:"twitter",followers:"973k",tweets:"1.792"}}},s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(C.c,{data:k(1),options:M,height:90})))),s.a.createElement(m.a,{xs:12,sm:6,md:3},s.a.createElement(w.default,{dataBox:function(){return{variant:"linkedin",contacts:"500+",feeds:"292"}}},s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(C.c,{data:k(2),options:M,height:90})))),s.a.createElement(m.a,{xs:12,sm:6,md:3},s.a.createElement(w.default,{dataBox:function(){return{variant:"google-plus",followers:"894",circles:"92"}}},s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(C.c,{data:k(3),options:M,height:90}))))),s.a.createElement(d.a,{className:"mb-4"},s.a.createElement(j,{icon:"icon-people",color:"info",header:"87.500",value:"25"},"Visitors"),s.a.createElement(j,{icon:"icon-user-follow",color:"success",header:"385",value:"25"},"New Clients"),s.a.createElement(j,{icon:"icon-basket-loaded",color:"warning",header:"1238",value:"25"},"Products sold"),s.a.createElement(j,{icon:"icon-pie-chart",color:"primary",header:"28%",value:"25"},"Returning Visitors"),s.a.createElement(j,{icon:"icon-speedometer",color:"danger",header:"5:34:11",value:"25"},"Avg. Time")),s.a.createElement(i.a,null,s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-people",color:"info",header:"87.500",value:"25"},"Visitors")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-user-follow",color:"success",header:"385",value:"25"},"New Clients")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-basket-loaded",color:"warning",header:"1238",value:"25"},"Products sold")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-pie-chart",color:"primary",header:"28%",value:"25"},"Returning Visitors")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-speedometer",color:"danger",header:"5:34:11",value:"25"},"Avg. Time")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-speech",color:"info",header:"972",value:"25"},"Comments"))),s.a.createElement(i.a,null,s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-people",color:"info",header:"87.500",value:"25",invert:!0},"Visitors")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-user-follow",color:"success",header:"385",value:"25",invert:!0},"New Clients")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-basket-loaded",color:"warning",header:"1238",value:"25",invert:!0},"Products sold")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-pie-chart",color:"primary",header:"28%",value:"25",invert:!0},"Returning Visitors")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-speedometer",color:"danger",header:"5:34:11",value:"25",invert:!0},"Avg. Time")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement(j,{icon:"icon-speech",color:"info",header:"972",value:"25",invert:!0},"Comments"))))}}]),t}(c.Component);a.default=$},785:function(e,a,t){"use strict";var n=t(787);a.__esModule=!0,a.getScrollbarWidth=l,a.setScrollbarWidth=c,a.isBodyOverflowing=s,a.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},a.conditionallyUpdateScrollbar=function(){var e=l(),a=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],t=a?parseInt(a.style.paddingRight||0,10):0;s()&&c(t+e)},a.setGlobalCssModule=function(e){r=e},a.mapToCssModules=function(e,a){void 0===e&&(e="");void 0===a&&(a=r);return a?e.split(" ").map((function(e){return a[e]||e})).join(" "):e},a.omit=function(e,a){var t={};return Object.keys(e).forEach((function(n){-1===a.indexOf(n)&&(t[n]=e[n])})),t},a.pick=function(e,a){var t,n=Array.isArray(a)?a:[a],r=n.length,o={};for(;r>0;)t=n[r-=1],o[t]=e[t];return o},a.warnOnce=m,a.deprecated=function(e,a){return function(t,n,r){null!==t[n]&&"undefined"!==typeof t[n]&&m('"'+n+'" property of "'+r+'" has been deprecated.\n'+a);for(var o=arguments.length,l=new Array(o>3?o-3:0),c=3;c<o;c++)l[c-3]=arguments[c];return e.apply(void 0,[t,n,r].concat(l))}},a.DOMElement=u,a.isReactRefObj=E,a.toNumber=function(e){var a=typeof e;if("number"===a)return e;if("symbol"===a||"object"===a&&"[object Symbol]"===h(e))return NaN;if(b(e)){var t="function"===typeof e.valueOf?e.valueOf():e;e=b(t)?""+t:t}if("string"!==a)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e},a.isObject=b,a.isFunction=g,a.findDOMElements=y,a.isArrayOrNodeList=x,a.getTarget=function(e,a){var t=y(e);return a?x(t)?t:null===t?[]:[t]:x(t)?t[0]:t},a.addMultipleEventListeners=function(e,a,t,n){var r=e;x(r)||(r=[r]);var o=t;"string"===typeof o&&(o=o.split(/\s+/));if(!x(r)||"function"!==typeof a||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(r,(function(t){t.addEventListener(e,a,n)}))})),function(){Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(r,(function(t){t.removeEventListener(e,a,n)}))}))}},a.focusableElements=a.defaultToggleEvents=a.canUseDOM=a.PopperPlacements=a.keyCodes=a.TransitionStatuses=a.TransitionPropTypeKeys=a.TransitionTimeouts=a.tagPropType=a.targetPropType=void 0;var r,o=n(t(1));function l(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var a=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),a}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){return document.body.clientWidth<window.innerWidth}var i={};function m(e){i[e]||("undefined"!==typeof console&&console.error(e),i[e]=!0)}var d="object"===typeof window&&window.Element||function(){};function u(e,a,t){if(!(e[a]instanceof d))return new Error("Invalid prop `"+a+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")}var f=o.default.oneOfType([o.default.string,o.default.func,u,o.default.shape({current:o.default.any})]);a.targetPropType=f;var p=o.default.oneOfType([o.default.func,o.default.string,o.default.shape({$$typeof:o.default.symbol,render:o.default.func}),o.default.arrayOf(o.default.oneOfType([o.default.func,o.default.string,o.default.shape({$$typeof:o.default.symbol,render:o.default.func})]))]);a.tagPropType=p;a.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600};a.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];a.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};a.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};a.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var v=!("undefined"===typeof window||!window.document||!window.document.createElement);function E(e){return!(!e||"object"!==typeof e)&&"current"in e}function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function b(e){var a=typeof e;return null!=e&&("object"===a||"function"===a)}function g(e){if(!b(e))return!1;var a=h(e);return"[object Function]"===a||"[object AsyncFunction]"===a||"[object GeneratorFunction]"===a||"[object Proxy]"===a}function y(e){if(E(e))return e.current;if(g(e))return e();if("string"===typeof e&&v){var a=document.querySelectorAll(e);if(a.length||(a=document.querySelectorAll("#"+e)),!a.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return a}return e}function x(e){return null!==e&&(Array.isArray(e)||v&&"number"===typeof e.length)}a.canUseDOM=v;a.defaultToggleEvents=["touchstart","click"];a.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},787:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},797:function(e,a,t){"use strict";var n=t(18),r=t(19),o=t(0),l=t.n(o),c=t(1),s=t.n(c),i=t(8),m=t.n(i),d=t(9),u={children:s.a.node,bar:s.a.bool,multi:s.a.bool,tag:d.q,value:s.a.oneOfType([s.a.string,s.a.number]),max:s.a.oneOfType([s.a.string,s.a.number]),animated:s.a.bool,striped:s.a.bool,color:s.a.string,className:s.a.string,barClassName:s.a.string,cssModule:s.a.object},f=function(e){var a=e.children,t=e.className,o=e.barClassName,c=e.cssModule,s=e.value,i=e.max,u=e.animated,f=e.striped,p=e.color,v=e.bar,E=e.multi,h=e.tag,b=Object(r.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),g=Object(d.s)(s)/Object(d.s)(i)*100,y=Object(d.m)(m()(t,"progress"),c),x=Object(d.m)(m()("progress-bar",v&&t||o,u?"progress-bar-animated":null,p?"bg-"+p:null,f||u?"progress-bar-striped":null),c),T=E?a:l.a.createElement("div",{className:x,style:{width:g+"%"},role:"progressbar","aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":i,children:a});return v?T:l.a.createElement(h,Object(n.a)({},b,{className:y,children:T}))};f.propTypes=u,f.defaultProps={tag:"div",value:0,max:100},a.a=f},845:function(e,a,t){"use strict";t.r(a);var n=t(127),r=t(79),o=t(80),l=t(82),c=t(81),s=t(0),i=t.n(s),m=t(8),d=t.n(m),u=t(785),f=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.children,t=e.className,r=e.cssModule,o=e.dataBox,l=(Object(n.a)(e,["children","className","cssModule","dataBox"]),o()),c=l.variant;if(!c||["facebook","twitter","linkedin","google-plus"].indexOf(c)<0)return null;var s="bg-"+c,m="fa fa-"+c,f=Object.keys(l),p=Object.values(l),v=d()("".concat("brand-card","-header"),s),E=d()("".concat("brand-card","-body")),h=Object(u.mapToCssModules)(d()("brand-card",t),r);return i.a.createElement("div",{className:h},i.a.createElement("div",{className:v},i.a.createElement("i",{className:m}),a),i.a.createElement("div",{className:E},i.a.createElement("div",null,i.a.createElement("div",{className:"text-value"},p[1]),i.a.createElement("div",{className:"text-uppercase text-muted small"},f[1])),i.a.createElement("div",null,i.a.createElement("div",{className:"text-value"},p[2]),i.a.createElement("div",{className:"text-uppercase text-muted small"},f[2]))))}}]),t}(s.Component);f.defaultProps={dataBox:function(){return{variant:"facebook",friends:"-",feeds:"-"}}},a.default=f}}]);
//# sourceMappingURL=20.342ceda3.chunk.js.map