(this["webpackJsonptask-list-react"]=this["webpackJsonptask-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(7),o=n.n(a),i=(n(13),n(8)),r=n(4),u=n(3),d=(n(14),n(0)),j=function(t){var e=t.title;return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("h1",{children:e})})},l=(n(16),function(t){var e=t.addNewTask,n=Object(c.useState)(""),s=Object(u.a)(n,2),a=s[0],o=s[1];return Object(d.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e(a.trim()),o("")},children:[Object(d.jsx)("input",{autoFocus:!0,value:a,className:"form__input",placeholder:"Co jest do zrobienia?",onChange:function(t){var e=t.target;return o(e.value)}}),Object(d.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})}),b=(n(17),function(t){var e=t.tasks,n=t.hideDone,c=t.toggleHideDone,s=t.setAllDone;return e.length>0&&Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsxs)("button",{onClick:c,className:"buttons__button",children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(d.jsx)("button",{onClick:s,className:"buttons__button",disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszystkie"})]})}),f=(n(18),function(t){var e=t.tasks,n=t.hideDone,c=t.removeTask,s=t.toggleTaskDone;return Object(d.jsx)("ul",{className:"tasks",children:e.map((function(t){return Object(d.jsxs)("li",{className:"tasks__item ".concat(t.done&&n?"tasks__item--hidden":""),children:[Object(d.jsx)("button",{onClick:function(){return s(t.id)},className:"tasks__button tasks__button--done",children:Object(d.jsx)("span",{children:t.done?"\u2714":""})}),Object(d.jsx)("span",{className:"\n            tasks__span ".concat(t.done?" tasks__span--done":""," \n          "),children:t.content}),Object(d.jsx)("button",{onClick:function(){return c(t.id)},className:"tasks__button tasks__button--remove",children:"\ud83d\uddd1"})]},t.id)}))})}),h=(n(19),function(t){var e=t.title,n=t.extraHeaderContent,c=t.body;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("header",{className:"section__header",children:[Object(d.jsx)("h2",{className:"section__title",children:e}),n]}),Object(d.jsx)("div",{className:"section__body",children:c})]})}),O=(n(20),function(t){var e=t.children;return Object(d.jsx)("div",{className:"container",children:e})});var m=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)([{id:1,content:"przej\u015b\u0107 na Reacta",done:!1},{id:2,content:"zje\u015b\u0107 \u015bniadanie",done:!0}]),o=Object(u.a)(a,2),m=o[0],k=o[1];return Object(d.jsxs)(O,{children:[Object(d.jsx)(j,{title:"Lista zada\u0144"}),Object(d.jsx)(h,{title:"Dodaj nowe zadanie",body:Object(d.jsx)(l,{addNewTask:function(t){k((function(e){return[].concat(Object(i.a)(e),[{content:t,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(d.jsx)(h,{title:"Lista zada\u0144",extraHeaderContent:Object(d.jsx)(b,{tasks:m,hideDone:n,toggleHideDone:function(){s((function(t){return!t}))},setAllDone:function(){k((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}}),body:Object(d.jsx)(f,{tasks:m,hideDone:n,removeTask:function(t){k((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){k((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}})})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),a(t),o(t)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),k()}],[[21,1,2]]]);
//# sourceMappingURL=main.d361023d.chunk.js.map