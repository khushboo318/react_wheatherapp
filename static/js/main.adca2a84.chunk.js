(this.webpackJsonpwheatherapp=this.webpackJsonpwheatherapp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(5),r=a.n(n),i=(a(11),a(3)),j=a.n(i),l=a(6),o=a(4),u=(a(13),a(0)),p=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("Mumbai"),r=Object(o.a)(n,2),i=r[0],p=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&appid=946eaf51a1cf690c299b71aeb2e54d42"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,s(c.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{className:"inputData",children:Object(u.jsx)("input",{type:"search",className:"inputField",onChange:function(e){p(e.target.value)}})}),a?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("h2",{className:"location",children:[Object(u.jsx)("i",{className:"fas fa-street-view"})," ",i]}),Object(u.jsxs)("h1",{className:"temp",children:[a.temp,"\xb0cel"]}),Object(u.jsxs)("h3",{className:"tempmin_max",children:["Min : ",a.temp_min,"\xb0cel | Max : ",a.temp_max,"\xb0cel"]})]}),Object(u.jsx)("div",{className:"wave -one"}),Object(u.jsx)("div",{className:"wave -two"}),Object(u.jsx)("div",{className:"wave -three"})]}):Object(u.jsx)("p",{className:"errorMsg",children:"No data found"})]})};var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(p,{})})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.adca2a84.chunk.js.map