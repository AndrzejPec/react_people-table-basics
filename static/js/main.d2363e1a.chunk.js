(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),a=c(6),s=(c(31),c(32),c(33),c(2)),r=c(3),j=function(){return Object(r.jsx)("h1",{className:"title",children:"Home Page"})},i=c(4),l=c(0);function o(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var b=function(e){var t=e.person,c=e.people.find((function(e){return e.name===t}));return c?Object(r.jsx)(a.b,{to:"/people/".concat(c.slug),className:"f"===c.sex?"has-text-danger":"",children:t}):Object(r.jsx)("span",{children:t||"-"})},d=(c(35),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),h=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!0),j=Object(i.a)(a,2),h=j[0],O=j[1],x=Object(l.useState)(!1),p=Object(i.a)(x,2),u=p[0],m=p[1],f=Object(s.q)().slug;Object(l.useEffect)((function(){o().then((function(e){n(e),O(!1)})).catch((function(){O(!1),m(!0),n([])}))}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"People Page"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)("div",{className:"box table-container",children:u?Object(r.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}):h?Object(r.jsx)(d,{}):0===c.length?Object(r.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}):Object(r.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Sex"}),Object(r.jsx)("th",{children:"Born"}),Object(r.jsx)("th",{children:"Died"}),Object(r.jsx)("th",{children:"Mother"}),Object(r.jsx)("th",{children:"Father"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"person",className:f===e.slug?"has-background-warning":"",children:[Object(r.jsx)("td",{children:Object(r.jsx)(b,{person:e.name,people:c})}),Object(r.jsx)("td",{children:e.sex}),Object(r.jsx)("td",{children:e.born}),Object(r.jsx)("td",{children:e.died}),Object(r.jsx)("td",{children:Object(r.jsx)(b,{person:e.motherName||"",people:c})}),Object(r.jsx)("td",{children:Object(r.jsx)(b,{person:e.fatherName||"",people:c})})]},e.slug)}))})]})})})]})},O=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},x=c(20),p=c.n(x),u=function(){return Object(r.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(a.c,{className:function(e){var t=e.isActive;return p()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(r.jsx)(a.c,{className:function(e){var t=e.isActive;return p()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},m=function(){return Object(r.jsxs)("div",{"data-cy":"app",children:[Object(r.jsx)(u,{}),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(s.d,{children:[Object(r.jsx)(s.b,{path:"/",element:Object(r.jsx)(j,{})}),Object(r.jsx)(s.b,{path:"/home",element:Object(r.jsx)(s.a,{to:"/",replace:!0})}),Object(r.jsx)(s.b,{path:"/people",element:Object(r.jsx)(h,{})}),Object(r.jsx)(s.b,{path:"/people/:slug",element:Object(r.jsx)(h,{})}),Object(r.jsx)(s.b,{path:"/*",element:Object(r.jsx)(O,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(r.jsx)(a.a,{children:Object(r.jsx)(m,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.d2363e1a.chunk.js.map