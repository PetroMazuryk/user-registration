"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[853],{4853:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var s=n(2791),r=n(9434),a=n(4270),i=n(8427),u="Task_wrapper__zvx3s",c="Task_text__IwwM2",o="Task_button__dYLbw",l=n(184),d=function(t){var e=t.id,n=t.text,s=t.numbers,a=(0,r.I0)();return(0,l.jsxs)("div",{className:u,children:[(0,l.jsxs)("p",{className:c,children:[s,". ",n]}),(0,l.jsx)("button",{type:"button",className:o,onClick:function(){return a((0,i._5)(e))},children:"Delete"})]})},_=function(t){return t.tasks.loading},m=function(t){return t.tasks.items},x="TaskList_list__Q1M-x",f=function(){var t=(0,r.v9)(m);return(0,l.jsx)("ul",{className:x,children:t.map((function(t,e){var n=t.id,s=t.text;return(0,l.jsx)("li",{children:(0,l.jsx)(d,{id:n,text:s,numbers:e+1})},n)}))})},k="TaskEditor_form__NXWha",h="TaskEditor_input__WXNoz",p="TaskEditor_button__qGfcX",v=function(){var t=(0,r.I0)();return(0,l.jsxs)("form",{className:k,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,s=n.elements.text.value;if(""!==s)return t((0,i.gI)(s)),void n.reset();alert("Task cannot be empty. Enter some text!")},children:[(0,l.jsx)("input",{name:"text",className:h}),(0,l.jsx)("button",{type:"submit",className:p,children:"Add task"})]})};function j(){var t=(0,r.I0)(),e=(0,r.v9)(_);return(0,s.useEffect)((function(){t((0,i.Jv)())}),[t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.q,{children:(0,l.jsx)("title",{children:"Your tasks"})}),(0,l.jsx)(v,{}),(0,l.jsx)("div",{children:e&&"Request in progress..."}),(0,l.jsx)(f,{})]})}}}]);
//# sourceMappingURL=853.4e7d66f0.chunk.js.map