(this["webpackJsonpworking-react-app"]=this["webpackJsonpworking-react-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),i=n.n(s),a=(n(9),n(10),n(4)),o=(n(11),n(0)),j=function(e){var t=e.country,n=t.name,c=t.capital,r=t.population,s=t.flags;return Object(o.jsxs)("div",{className:"Country",children:[Object(o.jsxs)("h2",{children:["Name: ",n]}),Object(o.jsx)("img",{src:s[0],alt:""}),Object(o.jsxs)("p",{children:["Capital: ",c,"- Population: ",r]})]})},u=(n(13),function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://restcountries.com/v2/all").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Let's Travel"}),Object(o.jsx)("div",{className:"countries-container",children:n.map((function(e){return Object(o.jsx)(j,{country:e},"".concat(e.name))}))})]})}),l=(n(14),function(){return Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("nav",{className:"menu flex-me",children:[Object(o.jsx)("a",{href:"/home",children:"Home"}),Object(o.jsx)("a",{href:"/Countires",children:"Countries"}),Object(o.jsx)("a",{href:"/About",children:"About"}),Object(o.jsx)("a",{href:"/Contact",children:"Contact US"})]})})});var h=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(u,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),b()}],[[15,1,2]]]);
//# sourceMappingURL=main.5532e31d.chunk.js.map