(this["webpackJsonpchuck-norris"]=this["webpackJsonpchuck-norris"]||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(2),a=t(12),i=t.n(a),r=(t(22),t(14)),o=(t(23),t.p+"static/media/download.254a876c.jpg"),l=t(13),j=t.n(l),d=function(e){var c=e.catgs;return c&&0!==c.length?Object(s.jsxs)("div",{className:"categories ",children:[Object(s.jsx)("h2",{className:" subTitle",children:"Available Categories"}),Object(s.jsx)("cat",{children:Object(s.jsx)("ul",{children:c.map((function(e){return Object(s.jsx)("li",{className:"list",children:Object(s.jsxs)("span",{className:"category-name",children:[e," "]})},e)}))})})]}):Object(s.jsx)("p",{children:"No categories, sorry"})},u=t(15),g=t(16);var h=function(e){return function(c){var t=c.isLoading,n=Object(g.a)(c,["isLoading"]);return t?Object(s.jsx)("p",{style:{textAlign:"center",fontSize:"30px"},children:"Hold on, fetching data may take some time :)"}):Object(s.jsx)(e,Object(u.a)({},n))}};var b=function(){var e=h(d),c=Object(n.useState)({loading:!1,catgs:null}),t=Object(r.a)(c,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){i({loading:!0});j.a.get("https://api.chucknorris.io/jokes/categories").then((function(e){var c=e.data;i({loading:!1,catgs:c})}))}),[i]),Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"title",children:"Chuck Norris Jokes"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2"}),Object(s.jsxs)("div",{className:"col-8 card-group",children:[Object(s.jsx)("div",{className:"card ",children:Object(s.jsx)(e,{isLoading:a.loading,catgs:a.catgs})}),Object(s.jsx)("div",{className:"image card",children:Object(s.jsx)("img",{src:o,alt:"Chuck Noris"})})]})]})]})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(b,{}),document.getElementById("root")),O()}},[[41,1,2]]]);
//# sourceMappingURL=main.c2b55024.chunk.js.map