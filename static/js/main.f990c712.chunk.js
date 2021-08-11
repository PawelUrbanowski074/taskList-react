(this["webpackJsonptask-list-react"]=this["webpackJsonptask-list-react"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s,d,u,l,b,j,h,x,f,p,O,m,g,k,v,w,z,y,C=t(0),P=t.n(C),S=t(22),T=t.n(S),D=t(17),E=t(8),F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"},e=n.id;return"/zadania/".concat(e)},M=t(5),U=t(4),L=U.d.header(r||(r=Object(M.a)(["\n  margin: 10px 0;\n"]))),I=t(2),H=function(n){var e=n.title;return Object(I.jsx)(L,{children:Object(I.jsx)("h1",{children:e})})},J=U.d.section(c||(c=Object(M.a)(["\n  margin: 10px 0;\n  background: ",";\n  box-shadow:  0 0 5px ",";;\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.alto})),N=U.d.header(a||(a=Object(M.a)(["\n  border-bottom: 1px solid ",";;\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n\n  \n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.color.alto}),(function(n){return n.theme.breakPoint.mobileMax})),R=U.d.h2(o||(o=Object(M.a)(["\n  font-size: 20px;\n  margin: 0;\n"]))),A=U.d.div(i||(i=Object(M.a)(["\n  padding: 20px;\n"]))),B=function(n){var e=n.title,t=n.extraHeaderContent,r=n.body;return Object(I.jsxs)(J,{children:[Object(I.jsxs)(N,{children:[Object(I.jsx)(R,{children:e}),t]}),Object(I.jsx)(A,{children:r})]})},G=U.d.div(s||(s=Object(M.a)(["\n\tmax-width: 900px;\n\tmargin: 0 auto;\n\tpadding: 20px;\n"]))),W=U.d.p(d||(d=Object(M.a)(["\n  line-height: 1.5;\n"]))),Y=U.d.a(u||(u=Object(M.a)(["\n  text-decoration: none;\n  color: ",";\n"])),(function(n){return n.theme.color.teal})),Z=function(){return Object(I.jsxs)(G,{children:[Object(I.jsx)(H,{title:"O autorze"}),Object(I.jsx)(B,{title:"Pawe\u0142 Urbanowski - kilka s\u0142\xf3w o mnie...",body:Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(W,{children:["Absolwent ",Object(I.jsx)("strong",{children:"informatyki"}),", obecny uczestnik kursu Front-end developera na platformie ",Object(I.jsx)("strong",{children:"Youcode"}),". Szukam pomys\u0142u na przysz\u0142o\u015b\u0107, st\u0105d pr\xf3ba si\u0142 w tworzeniu stron internetowych."]}),Object(I.jsx)(W,{children:"Poza nauk\u0105, gitarzysta basowy oraz fan siatk\xf3wki. W czasie wolnym lubi\u0119 gotowa\u0107, ogl\u0105da\u0107 seriale oraz je\u017adzi\u0107 na rolkach."}),Object(I.jsxs)(W,{children:["Je\u015bli chcesz spojrze\u0107 na inne moje projekty, zapraszam Ci\u0119 ",Object(I.jsx)(Y,{target:"_blank",href:"https://github.com/palel",children:"tutaj"}),"."]})]})})]})},$=t(33),_=t(9),q=t(21),K="tasks",Q=function(n){return localStorage.setItem(K,JSON.stringify(n))},V=Object(q.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(K))||[],hideDone:!1,loading:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},setAllDone:function(n){n.tasks.forEach((function(n){n.done=!0}))},fetchExampleTasks:function(n){n.loading=!0},fetchExampleTasksSuccess:function(n,e){var t=e.payload;n.tasks=t,n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1}}}),X=V.actions,nn=X.addTask,en=X.removeTask,tn=X.toggleHideDone,rn=X.toggleTaskDone,cn=X.setAllDone,an=X.fetchExampleTasks,on=X.fetchExampleTasksSuccess,sn=X.fetchExampleTasksError,dn=function(n){return n.tasks},un=function(n){return dn(n).tasks},ln=function(n){return dn(n).hideDone},bn=function(n){return 0===un(n).length},jn=function(n){return un(n).every((function(n){return n.done}))},hn=function(n){return dn(n).loading},xn=V.reducer,fn=U.d.form(l||(l=Object(M.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n  padding: 15px 0px;\n\n  @media (max-width: ","px) {\n      grid-template-columns: 1fr;\n      grid-gap: 0px;\n  }\n"])),(function(n){return n.theme.breakPoint.mobileMax})),pn=U.d.button(b||(b=Object(M.a)(["\n  background-color: ",";\n  color: ",";\n  padding: 0 20px;\n  transition: 0.3s;\n  border: none;\n\n  @media (max-width: ","px) {\n      padding: 10px 0;\n  }\n\n  &:hover {\n      filter: brightness(110%);\n      transform: scale(1.1);\n      cursor: pointer;\n\n      @media (max-width: ","px) {\n          transform: scale(1.04);\n      }\n  }\n\n  &:active {\n      filter: brightness(120%);\n  }\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakPoint.mobileMax}),(function(n){return n.theme.breakPoint.mobileMax})),On=U.d.input(j||(j=Object(M.a)(["\n  padding: 10px;\n  flex-grow: 1;\n  border: 1px solid ",";\n\n  @media (max-width: ","px) {\n      margin: 10px 0;\n  }\n"])),(function(n){return n.theme.color.alto}),(function(n){return n.theme.breakPoint.mobileMax})),mn=function(){var n=Object(C.useState)(""),e=Object($.a)(n,2),t=e[0],r=e[1],c=Object(_.b)(),a=Object(C.useRef)(null),o=function(){a.current.focus()};return Object(I.jsxs)(fn,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(c(nn({content:e,done:!1,id:Object(q.c)()})),r(""),o())},children:[Object(I.jsx)(On,{value:t,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return r(e.value)},ref:a,autoFocus:!0}),Object(I.jsx)(pn,{onClick:o,children:"Dodaj zadanie"})]})},gn=U.d.div(h||(h=Object(M.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n\n  @media (max-width:","px) {\n      grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.breakPoint.mobileMax})),kn=U.d.button(x||(x=Object(M.a)(["\n  background-color: ",";\n  color: ",";\n  border-style: none;\n  padding: 15px 15px;\n  transition: 0.3s;\n\n  &:hover:not([disabled]) {\n      filter: brightness(110%);\n      cursor: pointer;\n  }\n\n  &:active:not([disabled]) {\n      filter: brightness(120%);\n  }\n\n  &:disabled {\n      color: ",";\n      cursor: not-allowed;\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.silver})),vn=function(){var n=Object(_.c)(bn),e=Object(_.c)(jn),t=Object(_.c)(ln),r=Object(_.b)();return Object(I.jsx)(gn,{children:!n&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(kn,{onClick:function(){return r(tn())},children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(I.jsx)(kn,{onClick:function(){return r(cn())},disabled:e,children:"Uko\u0144cz wszystkie"})]})})},wn=U.d.ul(f||(f=Object(M.a)(["\n  list-style: none;\n  padding-left: 0;\n"]))),zn=U.d.li(p||(p=Object(M.a)(["\n  font-size: 18px;\n  padding: 10px;\n  border-bottom: solid 1px ",";;\n  display: flex;\n  align-items: center;\n  word-break: break-word; \n\n  ","\n"])),(function(n){return n.theme.color.alto}),(function(n){return n.hidden&&Object(U.c)(O||(O=Object(M.a)(["\n      display: none;\n  "])))})),yn=U.d.span(m||(m=Object(M.a)(["\n  padding: 0px 15px;\n  flex-grow: 1;\n\n  ","  \n"])),(function(n){return n.done&&Object(U.c)(g||(g=Object(M.a)(["\n      text-decoration: line-through;\n  "])))})),Cn=U.d.button(k||(k=Object(M.a)(["\n  color: ",";\n  width: 30px;\n  height: 30px;\n  border: none;\n  justify-self: center;\n  transition: 0.3s;\n\n  ","\n\n  ","\n\n  &:hover {\n      filter: brightness(110%);\n      cursor: pointer;\n  }\n\n  &:active {\n      filter: brightness(120%);\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(U.c)(v||(v=Object(M.a)(["\n      background-color: ",";\n  "])),(function(n){return n.theme.color.forestGreen}))}),(function(n){return n.remove&&Object(U.c)(w||(w=Object(M.a)(["\n      background-color: ",";\n  "])),(function(n){return n.theme.color.crimson}))})),Pn=Object(U.d)(D.b)(z||(z=Object(M.a)(["\n  color:  ","; \n  text-decoration: none;\n  transition: 0.3s;\n\n  &:hover {\n      filter: brightness(110%);\n      cursor: pointer;\n  }\n\n  &:active {\n      filter: brightness(120%);\n  }\n"])),(function(n){return n.theme.color.teal})),Sn="szukaj",Tn=function(){var n=Object(E.h)(),e=new URLSearchParams(n.search).get(Sn),t=Object(_.c)((function(n){return function(n,e){var t=un(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),r=Object(_.c)(ln),c=Object(_.b)();return Object(I.jsx)(wn,{children:t.map((function(n){return Object(I.jsxs)(zn,{hidden:n.done&&r,children:[Object(I.jsx)(Cn,{onClick:function(){return c(rn(n.id))},toggleDone:!0,children:Object(I.jsx)("span",{children:n.done?"\u2714":""})}),Object(I.jsx)(yn,{done:n.done,children:Object(I.jsx)(Pn,{to:"/zadania/".concat(n.id),children:n.content})}),Object(I.jsx)(Cn,{onClick:function(){return c(en(n.id))},remove:!0,children:"\ud83d\uddd1"})]},n.id)}))})},Dn=U.d.div(y||(y=Object(M.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n"]))),En=function(){var n=function(n){var e=Object(E.h)();return new URLSearchParams(e.search).get(n)}(Sn),e=function(){var n=Object(E.h)(),e=Object(E.g)();return function(t){var r=t.key,c=t.value,a=new URLSearchParams(n.search);void 0===c?a.delete(r):a.set(r,c),e.push("".concat(n.pathname,"?").concat(a.toString()))}}();return Object(I.jsx)(Dn,{children:Object(I.jsx)(On,{placeholder:"Filtruj zadania",value:n||"",onChange:function(n){var t=n.target;e({key:Sn,value:""!==t.value.trim()?t.value:void 0})}})})},Fn=function(){var n=Object(_.c)(hn),e=Object(_.b)();return Object(I.jsx)(kn,{onClick:function(){return e(an())},disabled:n,children:n?"\u0141adowanie...":"Pobierz przyk\u0142adowe zadania"})};var Mn=function(){return Object(I.jsxs)(G,{children:[Object(I.jsx)(H,{title:"Lista zada\u0144"}),Object(I.jsx)(B,{title:"Dodaj nowe zadanie",extraHeaderContent:Object(I.jsx)(Fn,{}),body:Object(I.jsx)(mn,{})}),Object(I.jsx)(B,{title:"Wyszukiwarka",body:Object(I.jsx)(En,{})}),Object(I.jsx)(B,{title:"Lista zada\u0144",extraHeaderContent:Object(I.jsx)(vn,{}),body:Object(I.jsx)(Tn,{})})]})};var Un,Ln,In,Hn,Jn=function(){var n=Object(E.i)().id,e=Object(_.c)((function(e){return function(n,e){return un(n).find((function(n){return n.id===e}))}(e,n)}));return Object(I.jsxs)(G,{children:[Object(I.jsx)(H,{title:"Szczeg\xf3\u0142y zadania"}),Object(I.jsx)(B,{title:e?e.content:" Nie znaleziono zadania... ",body:!!e&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("strong",{children:"Uko\u0144czono: "})," ",e.done?"Tak":"Nie"]})})]})},Nn="active",Rn=U.d.ul(Un||(Un=Object(M.a)(["\n\tbackground-color: ",";\n\tlist-style: none;\n\tmargin: 0px;\n\tpadding: 0px;\n\tdisplay: flex;\n\tjustify-content: center;\n"])),(function(n){return n.theme.color.teal})),An=U.d.li(Ln||(Ln=Object(M.a)(["\n\tfont-size: 18px;\n\tpadding: 20px;\n"]))),Bn=Object(U.d)(D.c).attrs((function(){return{activeClassName:Nn}}))(In||(In=Object(M.a)(["\n\tcolor:  ","; \n\ttext-decoration: none;\n\t&."," {\n\t\tfont-weight: bold;\n\t}\n"])),(function(n){return n.theme.color.white}),Nn),Gn=function(){return Object(I.jsx)("nav",{children:Object(I.jsxs)(Rn,{children:[Object(I.jsx)(An,{children:Object(I.jsx)(Bn,{to:"/zadania",children:"Zadania"})}),Object(I.jsx)(An,{children:Object(I.jsx)(Bn,{to:"/autor",children:"O autorze"})})]})})},Wn=function(){return Object(I.jsxs)(D.a,{children:[Object(I.jsx)(Gn,{}),Object(I.jsxs)(E.d,{children:[Object(I.jsx)(E.b,{path:F(),children:Object(I.jsx)(Jn,{})}),Object(I.jsx)(E.b,{path:"/zadania",children:Object(I.jsx)(Mn,{})}),Object(I.jsx)(E.b,{path:"/autor",children:Object(I.jsx)(Z,{})}),Object(I.jsx)(E.b,{path:"/",children:Object(I.jsx)(E.a,{to:"/zadania"})})]})]})},Yn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))},Zn=Object(U.b)(Hn||(Hn=Object(M.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.alto})),$n=t(34),_n=t(12),qn=t.n(_n),Kn=t(16),Qn=t(32),Vn=function(){var n=Object(Qn.a)(qn.a.mark((function n(){var e;return qn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/taskList-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Xn=qn.a.mark(te),ne=qn.a.mark(re),ee=qn.a.mark(ce);function te(){var n;return qn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Kn.c)(1e3);case 3:return e.next=5,Object(Kn.b)(Vn);case 5:return n=e.sent,e.next=8,Object(Kn.d)(on(n));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Kn.d)(sn());case 14:return e.next=16,Object(Kn.b)(alert,"Przyk\u0142adowe zadania nie zosta\u0142y pobrane prawid\u0142owo... Prosz\u0119, od\u015bwie\u017c stron\u0119 i spr\xf3buj ponownie.");case 16:case"end":return e.stop()}}),Xn,null,[[0,10]])}function re(){var n;return qn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Kn.e)(un);case 2:return n=e.sent,e.next=5,Object(Kn.b)(Q,n);case 5:case"end":return e.stop()}}),ne)}function ce(){return qn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Kn.g)(an.type,te);case 2:return n.next=4,Object(Kn.f)("*",re);case 4:case"end":return n.stop()}}),ee)}var ae=qn.a.mark(oe);function oe(){return qn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Kn.a)([ce()]);case 2:case"end":return n.stop()}}),ae)}var ie=Object($n.a)(),se=Object(q.a)({reducer:{tasks:xn},middleware:[ie]});ie.run(oe);var de=se;T.a.render(Object(I.jsx)(P.a.StrictMode,{children:Object(I.jsx)(_.a,{store:de,children:Object(I.jsxs)(U.a,{theme:{color:{black:"#000",silver:"#ccc",alto:"#ddd",gallery:"$eee",crimson:"#db143c",white:"#fff",teal:"#008080",forestGreen:"#228c22"},breakPoint:{mobileMax:767}},children:[Object(I.jsx)(Zn,{}),Object(I.jsx)(Wn,{})]})})}),document.getElementById("root")),Yn()}},[[47,1,2]]]);
//# sourceMappingURL=main.f990c712.chunk.js.map