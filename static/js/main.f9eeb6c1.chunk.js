(this["webpackJsonpcorona-app"]=this["webpackJsonpcorona-app"]||[]).push([[0],{124:function(e,t,n){e.exports=n(215)},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){},212:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(9),c=n.n(r),o=(n(129),n(130),n(52)),i=n(216),u=n(222),m=n(223),s=(n(131),n(218)),d=n(219),p=n(220),E=n(221),v=(n(132),n(33));function f(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"logo"},"COVID-19"),l.a.createElement(s.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},l.a.createElement(s.a.Item,{key:"1"},l.a.createElement(v.b,{to:"/"},l.a.createElement(d.a,null),l.a.createElement("span",null,"Dashboard - Polska"))),l.a.createElement(s.a.Item,{key:"2"},l.a.createElement(v.b,{to:"/secondContent"},l.a.createElement(p.a,null),l.a.createElement("span",null,"Dashboard - \u015awiat"))),l.a.createElement(s.a.Item,{key:"3"},l.a.createElement(v.b,{to:"/thirdContent"},l.a.createElement(E.a,null),l.a.createElement("span",null,"Mapa polski i \u015bwiata")))))}n(194);var h=n(16),g=n(217);n(195);function b(e){var t=e.loading,n=e.title,a=e.content;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{style:{padding:16},span:8},l.a.createElement(g.a,{loading:t,title:n,bordered:!1,hoverable:!0},a)))}n(212);var y=n(47),k=n(87),w=n.n(k),O=n(120);var j=[{path:"/",exact:!0,component:function(){var e=function(e){var t=Object(a.useState)(void 0),n=Object(o.a)(t,2),l=n[0],r=n[1],c=Object(a.useState)(!0),i=Object(o.a)(c,2),u=i[0],m=i[1];return Object(a.useEffect)((function(){function t(){return(t=Object(O.a)(w.a.mark((function t(){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,r(a),m(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{data:l,loading:u}}("https://covid19.mathdro.id/api/countries/POLAND/"),t=e.data,n=e.loading;return console.log(t),l.a.createElement("div",{className:"site-card-wrapper"},l.a.createElement(y.a,{gutter:16},l.a.createElement(b,{loading:n,title:"Obecnie zara\u017conych",content:null===t||void 0===t?void 0:t.confirmed.value}),l.a.createElement(b,{loading:n,title:"Wszystkich wyleczonych",content:null===t||void 0===t?void 0:t.recovered.value}),l.a.createElement(b,{loading:n,title:"Zgony",content:null===t||void 0===t?void 0:t.deaths.value})))}},{path:"/secondContent",component:function(){return l.a.createElement("div",null,"Second Content")}},{path:"/thirdContent",component:function(){return l.a.createElement("div",null,"Third Content")}}],x=n(26),C=i.a.Content;function N(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:"100vh"}},l.a.createElement(x.c,null,j.map((function(e,t){return l.a.createElement(x.a,{key:t,path:e.path,exact:e.exact,component:e.component})})))))}var S=i.a.Header,I=i.a.Sider;function D(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{trigger:null,collapsible:!0,collapsed:n},l.a.createElement(f,null)),l.a.createElement(i.a,{className:"site-layout"},l.a.createElement(S,{className:"site-layout-background",style:{padding:0}},l.a.createElement(n?u.a:m.a,{className:"trigger",onClick:function(){r(!n)}})),l.a.createElement(N,null)))}n(214);function F(){return l.a.createElement(i.a,null,l.a.createElement(D,null))}var z=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v.a,null,l.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[124,1,2]]]);
//# sourceMappingURL=main.f9eeb6c1.chunk.js.map