(this["webpackJsonpphantom-directory"]=this["webpackJsonpphantom-directory"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(10),s=c.n(n),r=(c(33),c(9)),i=(c(34),c(24)),o=c.n(i),j=function(){return o.a.get("https://randomuser.me/api/?results=50&nat=us")},l=c(61),b=c(64),d=c(60),h=c(65),u=c(62),O=c.p+"static/media/logo.eda393f3.png",m=c(2);function x(e){var t=e.name,c=Object(a.useState)(!1),n=Object(r.a)(c,2),s=n[0],i=n[1];return Object(m.jsx)(b.a,{className:"mb-3 border-secondary",children:Object(m.jsx)(b.a.Body,{children:Object(m.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)(b.a.Title,{children:[t.name.first,Object(m.jsx)("span",{children:" "}),t.name.last]}),Object(m.jsx)(b.a.Subtitle,{children:Object(m.jsxs)(d.a,{variant:"secondary",className:"mb-4",children:[" Employee ID: ",t.id.value]})}),Object(m.jsx)(b.a.Text,{children:Object(m.jsx)(h.a,{onClick:function(){return i((function(e){return!e}))},variant:"primary",children:s?"Hide Details":"View Details"})}),Object(m.jsx)(u.a,{in:s,children:Object(m.jsxs)("div",{className:"mt-4",children:[Object(m.jsx)("img",{alt:t.name.first,src:t.picture.medium}),Object(m.jsxs)("h6",{className:"mt-4",children:["DOB : ",new Date(t.dob.date).toLocaleDateString()]}),Object(m.jsxs)("h6",{children:["Email : ",Object(m.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})]}),Object(m.jsxs)("h6",{children:["Phone : ",t.cell]}),Object(m.jsxs)("h6",{children:["Location : ",t.location.city,", ",t.location.state]})]})})]}),Object(m.jsx)("img",{className:"d-none d-md-block",height:"120",alt:O,src:O})]})})})}var f=c(63),p=c(27);function y(e){var t=e.onParamChange;return Object(m.jsx)(f.a,{className:"mb-4",children:Object(m.jsxs)(f.a.Row,{children:[Object(m.jsxs)(f.a.Group,{as:p.a,children:[Object(m.jsx)(f.a.Label,{children:"Location"}),Object(m.jsx)(f.a.Control,{onChange:t,placeholder:"Search By State",type:"search"})]}),Object(m.jsxs)(f.a.Group,{as:p.a,children:[Object(m.jsx)(f.a.Label,{children:"Name"}),Object(m.jsx)(f.a.Control,{type:"search",placeholder:"Search By Employee",onChange:t})]})]})})}c(57);function g(){return Object(m.jsxs)("header",{className:"jumbotron jumbotron-fluid",children:[Object(m.jsx)("h4",{className:"header",children:"Phantom Solutions"}),Object(m.jsx)("p",{children:"Employee Directory"})]})}var v=function(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),c=t[0],n=(t[1],Object(a.useState)("")),s=Object(r.a)(n,2),i=s[0],o=s[1],b=Object(a.useState)([]),d=Object(r.a)(b,2),h=d[0],u=d[1],O=Object(a.useState)(""),f=Object(r.a)(O,2),p=f[0],v=f[1],S=Object(a.useState)([]),C=Object(r.a)(S,2),L=C[0],N=C[1];return Object(a.useEffect)((function(){o(!0),j().then((function(e){u(e.data.results),o(!1)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){N(h.filter((function(e){return e.name.first.toLowerCase().includes(p.toLowerCase())||e.location.state.toLowerCase().includes(p.toLocaleLowerCase())})))}),[p,h]),Object(m.jsxs)(l.a,{className:"my-1",children:[Object(m.jsx)(g,{}),Object(m.jsx)(y,{params:c,onParamChange:function(e){v(e.target.value)}}),i&&Object(m.jsx)("h1",{children:"Loading..."}),L.map((function(e){return Object(m.jsx)(x,{name:e},e.id.value)}))]})};s.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.1e42564f.chunk.js.map