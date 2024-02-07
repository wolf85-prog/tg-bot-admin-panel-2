"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[1803,686,1266,1170],{81170:function(e,t,n){n.r(t);var r=n(74165),s=n(15861),c=n(29439),i=n(72791),a=n(84688),l=(n(43513),n(78983)),d=n(80225),o=n(69835),x=n(75749),h=n(80184);t.default=function(){var e=(0,d.Z)().setCountPretendent,t=(0,i.useState)([]),n=(0,c.Z)(t,2),u=(n[0],n[1]),m=(0,i.useState)([]),j=(0,c.Z)(m,2),p=j[0],v=j[1],N=(0,i.useState)(!0),f=(0,c.Z)(N,2),w=(f[0],f[1],(0,i.useState)(!0)),b=(0,c.Z)(w,2),g=b[0],k=b[1],y=(0,i.useState)(!1),Z=(0,c.Z)(y,2),S=Z[0],C=Z[1];return(0,i.useEffect)((function(){var t=[];e(0);var n=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,c,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.gM)();case 2:return n=e.sent,console.log("pretendents: ",n),e.next=6,(0,x.bQ)();case 6:return c=e.sent,console.log("workers: ",c),e.next=10,(0,o.Y5)();case 10:i=e.sent,console.log("projects: ",i),u(i),n.map(function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,a){var l,d,o,h,u,m,j,p,N,f,w;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=i.find((function(e){return e.id===n.projectId})),d=null===l||void 0===l?void 0:l.name,o=c.find((function(e){return e.chatId===n.receiverId})),h=(null===o||void 0===o?void 0:o.userfamily)+" "+(null===o||void 0===o?void 0:o.username),"","","","",u=new Date(n.createdAt).getTime(),m=new Date(u),j=String(m.getMonth()+1).padStart(2,"0"),p=String(m.getDate()).padStart(2,"0"),N=m.getHours(),f=String(m.getMinutes()).padStart(2,"0"),w="".concat(p,".").concat(j," ").concat(N,":").concat(f),setTimeout((0,s.Z)((0,r.Z)().mark((function e(){var s,c,i,a,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.YL)(n.receiverId);case 2:a=e.sent,l={date:w,project:d,worker:h,worklist:a[0].spec,rang:null===(s=a[0])||void 0===s?void 0:s.rank,comment:null===(c=a[0])||void 0===c?void 0:c.comment,phone:null===(i=a[0])||void 0===i?void 0:i.phone},t.push(l),v(t),k(!1);case 7:case"end":return e.stop()}}),e)}))),1500*++a);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)("div",{className:"dark-theme",children:[(0,h.jsx)(a.S8,{}),(0,h.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-uley",children:[(0,h.jsx)(a.tf,{}),(0,h.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,h.jsx)(l.KB,{lg:!0,children:(0,h.jsxs)(i.Suspense,{fallback:(0,h.jsx)(l.LQ,{color:"primary"}),children:[(0,h.jsx)("h2",{children:"\u041f\u0440\u0435\u0442\u0435\u043d\u0434\u0435\u043d\u0442\u044b"}),(0,h.jsx)(l.rb,{className:"mb-3",children:(0,h.jsx)(l.b7,{sm:3,children:(0,h.jsx)(l.jO,{placeholder:"\u041f\u043e\u0438\u0441\u043a...","aria-label":"City"})})}),(0,h.jsx)(l.rb,{children:(0,h.jsx)(l.b7,{style:{textAlign:"center"},children:(0,h.jsx)(l.xH,{className:"mb-4",children:(0,h.jsx)(l.sl,{children:g?(0,h.jsx)(l.LQ,{}):(0,h.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,h.jsx)(l.V,{className:"table-light",children:(0,h.jsxs)(l.T6,{children:[(0,h.jsx)(l.is,{className:"text-center",style:{width:"110px"},children:"\u0414\u0430\u0442\u0430"}),(0,h.jsx)(l.is,{className:"text-center",style:{width:"250px"},children:"\u041f\u0440\u043e\u0435\u043a\u0442"}),(0,h.jsx)(l.is,{className:"text-center",style:{width:"150px"},children:"\u0424\u0418\u041e"}),(0,h.jsx)(l.is,{className:"text-center",style:{width:"160px"},children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}),(0,h.jsx)(l.is,{className:"text-center",style:{width:"140px"},children:"U.L.E.Y"}),(0,h.jsx)(l.is,{className:"text-center",style:{minWidth:"120px"},children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),(0,h.jsx)(l.is,{className:"text-center",style:{width:"160px"},children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"})]})}),(0,h.jsx)(l.NR,{children:p.map((function(e,t){return(0,h.jsxs)(l.T6,{"v-for":"item in tableItems",children:[(0,h.jsx)(l.NN,{className:"text-center",children:e.date}),(0,h.jsx)(l.NN,{className:"text-center",children:e.project}),(0,h.jsx)(l.NN,{className:"text-center",style:{color:e.dateborn>=2005?"red":""},children:e.worker}),(0,h.jsxs)(l.NN,{className:"text-center",children:[(0,h.jsx)("div",{onClick:function(){return C(!S)},children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),(0,h.jsx)(l.V9,{visible:S,children:(0,h.jsx)("table",{children:e.worklist?e.worklist.map((function(e,t){return(0,h.jsx)("tr",{children:(0,h.jsx)("td",{children:e.name})},t)})):""})})]}),(0,h.jsx)(l.NN,{className:"text-center",children:e.rang}),(0,h.jsx)(l.NN,{className:"text-center",style:{color:e.dateborn>=2005?"red":""},children:e.comment}),(0,h.jsx)(l.NN,{className:"text-center",children:(0,h.jsx)("div",{children:e.phone})})]},t)}))})]})})})})})]})})}),(0,h.jsx)(a.qh,{})]})]})}}}]);
//# sourceMappingURL=1803.41c66202.chunk.js.map