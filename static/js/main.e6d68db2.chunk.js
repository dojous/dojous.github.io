(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t.p+"static/media/star_wars_main.6fae9640.png"},28:function(e){e.exports={people:"People",lang:"Change language",layout:"Change layout",planets:"Planets",films:"Films",species:"Species",vehicles:"Vehicles",starships:"Starships"}},29:function(e){e.exports={people:"Postacie",lang:"Zmie\u0144 j\u0119zyk",layout:"Zmie\u0144 wygl\u0105d",planets:"Planety",films:"Filmy",species:"Gatunki",vehicles:"Pojazdy",starships:"Statki kosmiczne"}},3:function(e,a,t){"use strict";var n=t(0),c=t(7),l=t(28),s=t(29);a.a=function(e){var a=e.string;return{en:l,pl:s}[Object(n.useContext)(c.a).state.defaultLang][a]}},32:function(e,a,t){e.exports=t(85)},38:function(e,a,t){},39:function(e,a,t){},7:function(e,a,t){"use strict";t.d(a,"a",function(){return i}),t.d(a,"b",function(){return o});var n=t(9),c=t(13),l=t(0),s=t.n(l),i=s.a.createContext(),r={tabLayout:!0,defaultLang:"en"},m=function(e,a){switch(a.type){case"setTabLayout":return Object(c.a)({},e,{tabLayout:a.payload});case"setLang":return Object(c.a)({},e,{defaultLang:a.payload});default:return Object(c.a)({},e)}};function o(e){var a=Object(l.useReducer)(m,r),t=Object(n.a)(a,2),c={state:t[0],dispatch:t[1]};return s.a.createElement(i.Provider,{value:c},e.children)}},85:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(26),s=t.n(l),i=(t(38),t(39),t(27)),r=t.n(i),m=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React Hooks sample app"),c.a.createElement("img",{className:"ui large fluid image",src:r.a,alt:"starWars"}))},o=t(86),u=t(7),p=t(3),E=function(){return Object(n.useContext)(u.a).state.tabLayout?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ui top attached tabular menu"},c.a.createElement(o.a,{exact:!0,activeClassName:"active item",className:"item",to:"/"},"Home"),c.a.createElement(o.a,{activeClassName:"active item",className:"item",to:"/people"},c.a.createElement(p.a,{string:"people"})),c.a.createElement(o.a,{activeClassName:"active item",className:"item",to:"/planets"},c.a.createElement(p.a,{string:"planets"})),c.a.createElement(o.a,{className:"item",activeClassName:"active item",to:"/films"},c.a.createElement(p.a,{string:"films"})),c.a.createElement(o.a,{className:"item",activeClassName:"active item",to:"/species"},c.a.createElement(p.a,{string:"species"})),c.a.createElement(o.a,{className:"item red",activeClassName:"active item",to:"/vehicles"},c.a.createElement(p.a,{string:"vehicles"})),c.a.createElement(o.a,{className:"item red",activeClassName:"active item",to:"/starships"},c.a.createElement(p.a,{string:"starships"})))):c.a.createElement("div",{className:"ui inverted segment"},c.a.createElement("div",{className:"ui inverted secondary pointing menu"},c.a.createElement(o.a,{exact:!0,activeClassName:"active item",className:"item",to:"/"},"Home"),c.a.createElement(o.a,{activeClassName:"active item",className:"item",to:"/people"},c.a.createElement(p.a,{string:"people"})),c.a.createElement(o.a,{activeClassName:"active item",className:"item",to:"/planets"},c.a.createElement(p.a,{string:"planets"})),c.a.createElement(o.a,{className:"item",activeClassName:"active item",to:"/films"},c.a.createElement(p.a,{string:"films"})),c.a.createElement(o.a,{className:"item",activeClassName:"active item",to:"/species"},c.a.createElement(p.a,{string:"species"})),c.a.createElement(o.a,{className:"item red",activeClassName:"active item",to:"/vehicles"},c.a.createElement(p.a,{string:"vehicles"})),c.a.createElement(o.a,{className:"item red",activeClassName:"active item",to:"/starships"},c.a.createElement(p.a,{string:"starships"}))))},v=t(89),d=t(30),f=t(88),h=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Page Not Found"))},N=t(9),g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ui action input",style:{width:"600px"}},c.a.createElement("input",{type:"text",placeholder:"Search..."}),c.a.createElement("button",{className:"ui icon button"},c.a.createElement("i",{className:"search icon"}))))},b=function(){var e=Object(n.useContext)(u.a),a=e.state,t=e.dispatch,l=Object(n.useState)(),s=Object(N.a)(l,2),i=s[0],r=s[1];Object(n.useEffect)(function(){r(a.defaultLang)},[a.defaultLang]);var m=Object(n.useState)(),o=Object(N.a)(m,2),E=o[0],v=o[1];Object(n.useEffect)(function(){v(a.tabLayout)},[a.tabLayout]);var d="en"===i?"pl":"gb uk",f="en"===i?"pl":"en";return c.a.createElement("div",{className:"ui menu"},c.a.createElement("div",{className:"header item"},c.a.createElement("button",{className:"ui  basic icon button",onClick:function(){return t({type:"setTabLayout",payload:!E})}},c.a.createElement("i",{className:"icon settings"})," ",c.a.createElement(p.a,{string:"layout"}))),c.a.createElement("div",{className:"item"},c.a.createElement("button",{className:"ui  basic icon button",onClick:function(e){return function(){return t({type:"setLang",payload:e})}}(f)},c.a.createElement("i",{className:"".concat(d," flag")})," ",c.a.createElement(p.a,{string:"lang"}))),c.a.createElement("div",{className:"right menu"},c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"item"},c.a.createElement(g,null)))))},y=t(16),C=t.n(y),j=t(19),k=t(17),w=t(20),O=t.n(w),x=t(10),L=t.n(x),F=function(e){var a="".concat(e.location.pathname),t=Object(n.useState)([]),l=Object(N.a)(t,2),s=l[0],i=l[1];if(Object(n.useEffect)(function(){var e=!1;return function(){var t=Object(j.a)(C.a.mark(function t(){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://swapi.co/api".concat(a)).then(function(a){e||i(a.data)}).catch(function(e){console.log("ERR",e)});case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}},[s]),null===s)return c.a.createElement("div",{className:"ui container"},c.a.createElement(L.a,{type:"ThreeDots",color:"black",height:"100",width:"100"}));var r=Object.keys(s).map(function(e){return c.a.createElement("div",{className:"ui feed",key:Math.random(100)},c.a.createElement("div",{className:"event"},c.a.createElement("div",{className:"label"},c.a.createElement("i",{className:"check icon"})),c.a.createElement("div",{className:"content"},c.a.createElement("p",{style:{fontWeight:"bold"}},e.toUpperCase()),c.a.createElement("div",{className:"ui list"},Array.isArray(s[e])?s[e].map(function(e){return c.a.createElement("div",{className:"item",key:Math.random(100)},c.a.createElement("i",{className:"linkify icon"}),c.a.createElement("div",{className:"content"},c.a.createElement(k.a,{to:"/".concat(e.match(/\/api\/(.*)/)[1])},e)))}):s[e]))))}),m=a.split("/")[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"rightTopCorner"},c.a.createElement("div",{className:"ui breadcrumb"},c.a.createElement(k.a,{to:"/"},"Home"),c.a.createElement("span",{className:"divider"},"/"),c.a.createElement(k.a,{to:"/".concat(m)},m),c.a.createElement("span",{className:"divider"},"/"),c.a.createElement("div",{className:"active section"},s.name?s.name:s.title))),c.a.createElement("div",null,c.a.createElement(k.a,{to:"/".concat(m)},c.a.createElement("i",{className:"large icons"},c.a.createElement("i",{className:"big left chevron icon"})),"Back")),r)},S="(people|starships|films|vehicles|planets|species)",P=function(e){var a=e.items,l=Object(n.lazy)(function(){return t.e(3).then(t.bind(null,91))});return c.a.createElement(l,{items:a})},W=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement(E,null),c.a.createElement("div",{className:"ui bottom attached active tab segment"},c.a.createElement(n.Suspense,{fallback:c.a.createElement(L.a,{type:"Watch",color:"red",height:"250",width:"250"})},c.a.createElement(v.a,null,c.a.createElement(d.a,{path:"/",exact:!0,component:m}),c.a.createElement(d.a,{path:"/".concat(S),exact:!0,render:function(e){return c.a.createElement(P,{items:e.location.pathname.split("/")[1]})}}),c.a.createElement(d.a,{path:"/".concat(S,"/:id"),component:F}),c.a.createElement(d.a,{path:"/not-found",component:h}),c.a.createElement(f.a,{to:"/not-found"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=t(87);t(31);s.a.render(c.a.createElement(u.b,null,c.a.createElement(z.a,null,c.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.e6d68db2.chunk.js.map