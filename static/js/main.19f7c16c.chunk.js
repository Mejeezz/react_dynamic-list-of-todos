(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(4),l=c(2),r=c(3),i=c.n(r),o=c(1),d=(c(13),c(14),c(7)),j=c.n(d),u=c(0),b=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedTodoId;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(u.jsxs)("tr",{"data-cy":"todo",children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),Object(u.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()("has-text-success",{"has-text-danger":!n}),children:a})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t||null)},children:Object(u.jsx)("span",{className:"icon",children:s===t?Object(u.jsx)("i",{className:"far fa-eye-slash"}):Object(u.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},h=function(e){var t=e.value,c=e.response,s=e.setValue,a=e.setResponse;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){s(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){a(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},m=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(e){var t=e.todoId,c=e.selectedTodos,s=e.selectedUser,a=Object(o.useState)(null),r=Object(l.a)(a,2),d=r[0],j=r[1],b=c.find((function(e){return e.id===t})),h=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=5;break}return e.next=3,c=b.userId,O("/users/".concat(c));case 3:t=e.sent,j(t);case 5:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){h()}),[]);return Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),d?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===b||void 0===b?void 0:b.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==b&&void 0!==b&&b.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto: ".concat(d.email),children:d.name})]})]})]}):Object(u.jsx)(m,{})]})},f=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(null),r=Object(l.a)(a,2),d=r[0],j=r[1],f=Object(o.useState)(!0),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(o.useState)("all"),g=Object(l.a)(y,2),k=g[0],w=g[1],T=Object(o.useState)(""),C=Object(l.a)(T,2),S=C[0],I=C[1],_=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/todos");case 2:t=e.sent,s(t),N(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){_()}),[]);var E=function(e,t){return e.toLowerCase().includes(t.toLowerCase())},L=Object(o.useMemo)((function(){switch(k){case"active":return c.filter((function(e){return!e.completed})).filter((function(e){var t=e.title;return E(t,S)}));case"completed":return c.filter((function(e){return e.completed})).filter((function(e){var t=e.title;return E(t,S)}));default:return c.filter((function(e){var t=e.title;return E(t,S)}))}}),[k,c,S]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{value:k,response:S,setValue:w,setResponse:I})}),Object(u.jsx)("div",{className:"block",children:v?Object(u.jsx)(m,{}):Object(u.jsx)(b,{todos:L,selectedTodoId:d,selectTodo:j})})]})})}),d&&Object(u.jsx)(x,{todoId:d,selectedTodos:c,selectedUser:j})]})};a.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.19f7c16c.chunk.js.map