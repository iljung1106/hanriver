(this["webpackJsonpreact-ex7"]=this["webpackJsonpreact-ex7"]||[]).push([[0],{27:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),s=n.n(a),r=n(6),i=n.n(r),o=(n(27),n(3)),u=n(20),j=n.n(u),b=(n(52),function(){var t=Object(o.c)((function(t){return t.data})),e=Object(o.c)((function(t){return t.status})),n=Object(o.b)();return Object(a.useEffect)((function(){n((function(t){t({type:"REQUEST_PENDING"}),j.a.get("https://hanriver.herokuapp.com/").then((function(e){t({type:"REQUEST_SUCCESS",payload:e.data})})).catch((function(e){console.log(e),t({type:"REQUEST_FAILURE"})}))}))}),[]),console.log(e),"PENDING"===e?Object(c.jsx)("h1",{children:"\ub85c\ub529\uc911"}):Object(c.jsx)("div",{className:"hanriver",children:Object(c.jsxs)("div",{style:{fontSize:45},className:"hanriver-info",children:[Object(c.jsxs)("div",{style:{fontSize:40},children:["\ud604\uc7ac \ud55c\uac15 \uc628\ub3c4 ",Object(c.jsx)("br",{})," ",t.temp,"\ub3c4"]}),Object(c.jsx)("div",{style:{fontSize:20},children:t.time})]})})});var d=function(){return Object(c.jsx)(b,{})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))},l=n(5),h={status:"SUCCESS",data:{temp:"",time:""}},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REQUEST_PENDING":return Object(l.a)(Object(l.a)({},t),{},{status:"PENDING"});case"REQUEST_SUCCESS":return{status:"SUCCESS",data:e.payload};case"REQUEST_FAILURE":return Object(l.a)(Object(l.a)({},t),{},{status:"ERROR"});default:return t}},f=n(4),O=n(21),p=Object(f.c)(S,Object(f.a)(O.a));i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(o.a,{store:p,children:Object(c.jsx)(d,{})})}),document.getElementById("root")),E()}},[[53,1,2]]]);
//# sourceMappingURL=main.32933b47.chunk.js.map