"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2597,5788,9582],{77543:function(e,i,s){s.r(i);var t=s(74165),c=s(15861),a=s(29439),r=s(72791),n=s(57689),o=s(11087),l=s(78983),d=s(10935),u=(s(69018),s(26213)),f=s(69835),v=s(80184);i.default=function(){var e,i,s,p,h,x,j,m,g,N,b,y,E,w=(0,n.TH)(),S=(0,u.Z)(),k=S.addNewDistrib,Z=(S.setDistributionsWork,null===(e=w.state)||void 0===e?void 0:e.project),T=null===(i=w.state)||void 0===i?void 0:i.labelProj,C=null===(s=w.state)||void 0===s?void 0:s.text,I=null===(p=w.state)||void 0===p?void 0:p.category,D=null===(h=w.state)||void 0===h?void 0:h.count,R=null===(x=w.state)||void 0===x?void 0:x.date,V=null===(j=w.state)||void 0===j?void 0:j.image,L=null===(m=w.state)||void 0===m?void 0:m.showbuttons,A=null===(g=w.state)||void 0===g?void 0:g.textbutton,F=null===(N=w.state)||void 0===N?void 0:N.selected,B=null===(b=w.state)||void 0===b?void 0:b.uuid,J=null===(y=w.state)||void 0===y?void 0:y.stavka,O=null===(E=w.state)||void 0===E?void 0:E.target;console.log("catDistr: ",I),console.log("countReceiver: ",D),console.log("dateDistrib: ",R),console.log("imageDistrib: ",V),console.log("selected: ",F),console.log("labelName: ",T),console.log("uuidDistrib: ",B),console.log("textButton: ",A);var H=(0,r.useState)(6),M=(0,a.Z)(H,2),Q=M[0],W=M[1],_=(0,r.useState)(6),K=(0,a.Z)(_,2),P=K[0],Y=K[1],q=(0,r.useState)(6),U=(0,a.Z)(q,2),z=U[0],G=U[1],X=(0,r.useState)(6),$=(0,a.Z)(X,2),ee=$[0],ie=$[1],se=(0,r.useState)(6),te=(0,a.Z)(se,2),ce=te[0],ae=te[1],re=(0,r.useState)(6),ne=(0,a.Z)(re,2),oe=ne[0],le=ne[1],de=(0,r.useState)([!1,!1,!1,!1,!1,!1,!1]),ue=(0,a.Z)(de,2),fe=ue[0],ve=ue[1],pe=(0,r.useState)([!1,!1,!1,!1,!1,!1,!1]),he=(0,a.Z)(pe,2),xe=he[0],je=he[1],me=(0,r.useState)([!1,!1,!1,!1,!1,!1,!1]),ge=(0,a.Z)(me,2),Ne=ge[0],be=ge[1],ye=(0,r.useState)([!1,!1,!1,!1,!1,!1,!1]),Ee=(0,a.Z)(ye,2),we=Ee[0],Se=(Ee[1],(0,r.useState)([!1,!1,!1,!1,!1,!1,!1])),ke=(0,a.Z)(Se,2),Ze=ke[0],Te=(ke[1],(0,r.useState)([!1,!1,!1,!1,!1,!1,!1])),Ce=(0,a.Z)(Te,2),Ie=Ce[0],De=(Ce[1],new Date),Re=String(De.getMonth()+1).padStart(2,"0"),Ve=String(De.getDate()).padStart(2,"0"),Le="".concat(Ve,".").concat(Re);De.setDate(De.getDate()+1);var Ae=String(De.getMonth()+1).padStart(2,"0"),Fe=String(De.getDate()).padStart(2,"0"),Be="".concat(Fe,".").concat(Ae),Je=De.getFullYear(),Oe=(0,r.useState)([{date:Le,time:"06:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"07:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"08:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"09:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"10:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"11:00",proj:"",save:!1,go:!1,uuid:""}]),He=(0,a.Z)(Oe,2),Me=He[0],Qe=He[1],We=(0,r.useState)([{date:Le,time:"12:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"13:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"14:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"15:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"16:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"17:00",proj:"",save:!1,go:!1,uuid:""}]),_e=(0,a.Z)(We,2),Ke=_e[0],Pe=_e[1],Ye=(0,r.useState)([{date:Le,time:"18:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"19:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"20:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"21:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"22:00",proj:"",save:!1,go:!1,uuid:""},{date:Le,time:"23:00",proj:"",save:!1,go:!1,uuid:""}]),qe=(0,a.Z)(Ye,2),Ue=qe[0],ze=qe[1],Ge=(0,r.useState)([{date:Be,time:"06:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"07:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"08:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"09:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"10:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"11:00",proj:"",save:!1,go:!1,uuid:""}]),Xe=(0,a.Z)(Ge,2),$e=Xe[0],ei=Xe[1],ii=(0,r.useState)([{date:Be,time:"12:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"13:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"14:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"15:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"16:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"17:00",proj:"",save:!1,go:!1,uuid:""}]),si=(0,a.Z)(ii,2),ti=si[0],ci=si[1],ai=(0,r.useState)([{date:Be,time:"18:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"19:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"20:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"21:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"22:00",proj:"",save:!1,go:!1,uuid:""},{date:Be,time:"23:00",proj:"",save:!1,go:!1,uuid:""}]),ri=(0,a.Z)(ai,2),ni=ri[0],oi=ri[1],li=(0,r.useState)(""),di=(0,a.Z)(li,2),ui=di[0],fi=di[1],vi=(0,r.useState)(!1),pi=(0,a.Z)(vi,2),hi=pi[0],xi=pi[1],ji=(0,r.useState)([!1,!1,!1,!1,!1,!1,!1]),mi=(0,a.Z)(ji,2),gi=mi[0],Ni=mi[1],bi=(0,r.useState)([!1,!1,!1,!1,!1,!1,!1]),yi=(0,a.Z)(bi,2),Ei=yi[0],wi=yi[1],Si=(0,r.useState)([!1,!1,!1,!1,!1,!1,!1]),ki=(0,a.Z)(Si,2),Zi=ki[0],Ti=ki[1],Ci=(0,r.useState)([!1,!1,!1,!1,!1,!1,!1]),Ii=(0,a.Z)(Ci,2),Di=Ii[0],Ri=Ii[1],Vi=(0,r.useState)([!1,!1,!1,!1,!1,!1,!1]),Li=(0,a.Z)(Vi,2),Ai=Li[0],Fi=Li[1],Bi=(0,r.useState)([!1,!1,!1,!1,!1,!1,!1]),Ji=(0,a.Z)(Bi,2),Oi=Ji[0],Hi=Ji[1],Mi=(0,r.useState)(!0),Qi=(0,a.Z)(Mi,2),Wi=Qi[0],_i=Qi[1],Ki=(0,r.useState)(!1),Pi=(0,a.Z)(Ki,2),Yi=Pi[0],qi=Pi[1],Ui=(0,r.useState)(0),zi=(0,a.Z)(Ui,2),Gi=zi[0],Xi=zi[1],$i=(0,r.useRef)(),es=[],is=(0,n.s0)();(0,r.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var i,s,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.fE)(Z);case 2:c=e.sent,console.log("\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0440\u043e\u0435\u043a\u0442: ",null===(i=c.properties.Name.title[0])||void 0===i?void 0:i.plain_text),_i(!1),fi(null===(s=c.properties.Name.title[0])||void 0===s?void 0:s.plain_text);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,r.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var i,s,c,a,r,n,o,l,d,u,v,p,h,x,j,m;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.Wh)((new Date).toLocaleDateString());case 2:return i=e.sent,console.log("plan: ",i),e.next=6,(0,f.Wh)("".concat(Fe,".").concat(Ae,".").concat(Je));case 6:s=e.sent,console.log("plan2: ",s),c=De.getHours(),a=String(De.getMinutes()).padStart(2,"0"),console.log("time: "+c+":"+a),null!==i&&(r=JSON.parse(i.times),n=r.findIndex((function(e){return"12:00"===e.time})),o=r.findIndex((function(e){return"18:00"===e.time})),l=r.slice(0,n),d=r.slice(n,o),u=r.slice(o,r.length),l.forEach((function(e,i){e.save&&(gi[i]=!0,Ni(gi))})),d.forEach((function(e,i){e.save&&(Ei[i]=!0,wi(Ei))})),u.forEach((function(e,i){e.save&&(Zi[i]=!0,Ti(Zi))})),Qe(l),Pe(d),ze(u),W(n),Y(o-n),G(r.length-o)),null!==s&&(v=JSON.parse(s.times),p=v.findIndex((function(e){return"12:00"===e.time})),h=v.findIndex((function(e){return"18:00"===e.time})),x=v.slice(0,p),j=v.slice(p,h),m=v.slice(h,v.length),x.forEach((function(e,i){e.save&&(Di[i]=!0,Ri(Di))})),j.forEach((function(e,i){e.save&&(Ai[i]=!0,Fi(Ai))})),m.forEach((function(e,i){e.save&&(Oi[i]=!0,Hi(Oi))})),ei(x),ci(j),oi(m),ie(p),ae(h-p),le(v.length-h)),Me.forEach((function(e,i){console.log("time: ",c),e.time.split(":")[0]<=c&&(fe[i]=!0,ve(fe))})),Ke.forEach((function(e,i){e.time.split(":")[0]<=c&&(xe[i]=!0,je(xe))})),Ue.forEach((function(e,i){e.time.split(":")[0]<=c&&(Ne[i]=!0,be(Ne))}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var ss=function(e,i){1===i&&(!0===Me[e].save?(console.log("true"),gi[e]=!1,Me[e].save=!1,Me[e].proj="",Me[e].uuid=""):(console.log("false"),gi[e]=!0,Me[e].proj=ui,Me[e].uuid=B,Me[e].save=!0),Qe(Me),Ni(gi)),2===i&&(Ei[e]?(Ei[e]=!1,Ke[e].proj="",Ke[e].uuid="",Ke[e].save=!1):(Ei[e]=!0,Ke[e].proj=ui,Ke[e].uuid=B,Ke[e].save=!0),Pe(Ke),wi(Ei)),3===i&&(Zi[e]?(Zi[e]=!1,Ue[e].proj="",Ue[e].uuid="",Ue[e].save=!1):(Zi[e]=!0,Ue[e].proj=ui,Ue[e].uuid=B,Ue[e].save=!0),ze(Ue),Ti(Zi)),xi(!hi)},ts=function(e,i){1===i&&(!0===$e[e].save?(Di[e]=!1,$e[e].save=!1,$e[e].proj="",$e[e].uuid=""):(Di[e]=!0,$e[e].proj=ui,$e[e].uuid=B,$e[e].save=!0),ei($e),Ni(gi)),2===i&&(Ai[e]?(Ai[e]=!1,ti[e].proj="",ti[e].uuid="",ti[e].save=!1):(Ai[e]=!0,ti[e].proj=ui,ti[e].uuid=B,ti[e].save=!0),ci(ti),Fi(Ai)),3===i&&(Oi[e]?(Oi[e]=!1,ni[e].proj="",ni[e].uuid="",ni[e].save=!1):(Oi[e]=!0,ni[e].proj=ui,ni[e].uuid=B,ni[e].save=!0),oi(ni),Hi(Oi)),xi(!hi)},cs=function(e,i,s){if("06:00"===e&&1===s)if("07:00"===Me[i+1].time){W(Q+1),es=Me.slice(0);var t={date:Le,time:"06:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,t),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi)}else""===Me[i+1].proj&&(W(Q-1),(es=Me.slice(0)).splice(i+1,1),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi));if("07:00"===e&&1===s&&1===s)if("08:00"===Me[i+1].time){W(Q+1),es=Me.slice(0);var c={date:Le,time:"07:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,c),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi)}else""===Me[i+1].proj&&(W(Q-1),(es=Me.slice(0)).splice(i+1,1),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi));if("08:00"===e&&1===s&&1===s)if("09:00"===Me[i+1].time){W(Q+1),es=Me.slice(0);var a={date:Le,time:"08:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,a),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi)}else""===Me[i+1].proj&&(W(Q-1),(es=Me.slice(0)).splice(i+1,1),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi));if("09:00"===e&&1===s&&1===s)if("10:00"===Me[i+1].time){W(Q+1),es=Me.slice(0);var r={date:Le,time:"09:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,r),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi)}else""===Me[i+1].proj&&(W(Q-1),(es=Me.slice(0)).splice(i+1,1),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi));if("10:00"===e&&1===s&&1===s)if("11:00"===Me[i+1].time){W(Q+1),es=Me.slice(0);var n={date:Le,time:"10:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,n),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi)}else""===Me[i+1].proj&&(W(Q-1),(es=Me.slice(0)).splice(i+1,1),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi));if("11:00"===e&&1===s){var o,l;if("11:30"!==(null===(o=Me[i+1])||void 0===o?void 0:o.time)){W(Q+1),es=Me.slice(0),console.log(es);var d={date:Le,time:"11:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,d),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi)}"11:30"===(null===(l=Me[i+1])||void 0===l?void 0:l.time)&&""===Me[i+1].proj&&(W(Q-1),(es=Me.slice(0)).splice(i+1,1),Qe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi))}if("12:00"===e&&2===s)if("13:00"===Ke[i+1].time){Y(P+1),es=Ke.slice(0);var u={date:Le,time:"12:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,u),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei)}else""===Ke[i+1].proj&&(Y(P-1),(es=Ke.slice(0)).splice(i+1,1),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei));if("13:00"===e&&2===s)if("14:00"===Ke[i+1].time){Y(P+1),es=Ke.slice(0);var f={date:Le,time:"13:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,f),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei)}else""===Ke[i+1].proj&&(Y(P-1),(es=Ke.slice(0)).splice(i+1,1),Pe(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi));if("14:00"===e&&2===s)if("15:00"===Ke[i+1].time){Y(P+1),es=Ke.slice(0);var v={date:Le,time:"14:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,v),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei)}else""===Ke[i+1].proj&&(Y(P-1),(es=Ke.slice(0)).splice(i+1,1),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei));if("15:00"===e&&2===s)if("16:00"===Ke[i+1].time){Y(P+1),es=Ke.slice(0);var p={date:Le,time:"15:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,p),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei)}else""===Ke[i+1].proj&&(Y(P-1),(es=Ke.slice(0)).splice(i+1,1),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei));if("16:00"===e&&2===s)if("17:00"===Ke[i+1].time){Y(P+1),es=Ke.slice(0);var h={date:Le,time:"16:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,h),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei)}else""===Ke[i+1].proj&&(Y(P-1),(es=Ke.slice(0)).splice(i+1,1),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei));if("17:00"===e&&2===s){var x,j;if("17:30"!==(null===(x=Ke[i+1])||void 0===x?void 0:x.time)){Y(P+1),es=Ke.slice(0),console.log(es);var m={date:Le,time:"17:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,m),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei)}"17:30"===(null===(j=Ke[i+1])||void 0===j?void 0:j.time)&&""===Ke[i+1].proj&&(Y(P-1),(es=Ke.slice(0)).splice(i+1,1),Pe(es),es.forEach((function(e,i){Ei[i]=e.save})),wi(Ei))}if("18:00"===e&&3===s)if("19:00"===Ue[i+1].time){G(z+1),es=Ue.slice(0);var g={date:Le,time:"18:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,g),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi)}else""===Ue[i+1].proj&&(G(z-1),(es=Ue.slice(0)).splice(i+1,1),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi));if("19:00"===e&&3===s)if("20:00"===Ue[i+1].time){G(z+1),es=Ue.slice(0);var N={date:Le,time:"19:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,N),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi)}else""===Ue[i+1].proj&&(G(z-1),(es=Ue.slice(0)).splice(i+1,1),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi));if("20:00"===e&&3===s)if("21:00"===Ue[i+1].time){G(z+1),es=Ue.slice(0);var b={date:Le,time:"20:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,b),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi)}else""===Ue[i+1].proj&&(G(z-1),(es=Ue.slice(0)).splice(i+1,1),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi));if("21:00"===e&&3===s)if("22:00"===Ue[i+1].time){G(z+1),es=Ue.slice(0);var y={date:Le,time:"21:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,y),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi)}else""===Ue[i+1].proj&&(G(z-1),(es=Ue.slice(0)).splice(i+1,1),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi));if("22:00"===e&&3===s)if("23:00"===Ue[i+1].time){G(z+1),es=Ue.slice(0);var E={date:Le,time:"22:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,E),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi)}else""===Ue[i+1].proj&&(G(z-1),(es=Ue.slice(0)).splice(i+1,1),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi));if("23:00"===e&&3===s){var w,S;if("23:30"!==(null===(w=Ue[i+1])||void 0===w?void 0:w.time)){G(z+1),es=Ue.slice(0),console.log(es);var k={date:Le,time:"23:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,k),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi)}"23:30"===(null===(S=Ue[i+1])||void 0===S?void 0:S.time)&&""===Ue[i+1].proj&&(G(z-1),(es=Ue.slice(0)).splice(i+1,1),ze(es),es.forEach((function(e,i){Zi[i]=e.save})),Ti(Zi))}},as=function(e,i,s){if("06:00"===e&&1===s)if("07:00"===$e[i+1].time){ie(ee+1),es=$e.slice(0);var t={date:Be,time:"06:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,t),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di)}else""===$e[i+1].proj&&(ie(ee-1),(es=$e.slice(0)).splice(i+1,1),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di));if("07:00"===e&&1===s&&1===s)if("08:00"===$e[i+1].time){ie(ee+1),es=$e.slice(0);var c={date:Be,time:"07:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,c),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di)}else""===$e[i+1].proj&&(ie(ee-1),(es=$e.slice(0)).splice(i+1,1),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di));if("08:00"===e&&1===s&&1===s)if("09:00"===$e[i+1].time){ie(ee+1),es=$e.slice(0);var a={date:Be,time:"08:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,a),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di)}else""===$e[i+1].proj&&(ie(ee-1),(es=$e.slice(0)).splice(i+1,1),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di));if("09:00"===e&&1===s&&1===s)if("10:00"===$e[i+1].time){ie(ee+1),es=$e.slice(0);var r={date:Be,time:"09:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,r),ei(es),es.forEach((function(e,i){gi[i]=e.save})),Ni(gi)}else""===$e[i+1].proj&&(ie(ee-1),(es=$e.slice(0)).splice(i+1,1),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di));if("10:00"===e&&1===s&&1===s)if("11:00"===$e[i+1].time){ie(ee+1),es=$e.slice(0);var n={date:Be,time:"10:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,n),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di)}else""===$e[i+1].proj&&(ie(ee-1),(es=$e.slice(0)).splice(i+1,1),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di));if("11:00"===e&&1===s){var o,l;if("11:30"!==(null===(o=$e[i+1])||void 0===o?void 0:o.time)){ie(ee+1),es=$e.slice(0),console.log(es);var d={date:Be,time:"11:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,d),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di)}"11:30"===(null===(l=$e[i+1])||void 0===l?void 0:l.time)&&""===$e[i+1].proj&&(ie(ee-1),(es=$e.slice(0)).splice(i+1,1),ei(es),es.forEach((function(e,i){Di[i]=e.save})),Ri(Di))}if("12:00"===e&&2===s)if("13:00"===ti[i+1].time){ae(ce+1),es=ti.slice(0);var u={date:Be,time:"12:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,u),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai)}else""===ti[i+1].proj&&(ae(ce-1),(es=ti.slice(0)).splice(i+1,1),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai));if("13:00"===e&&2===s)if("14:00"===ti[i+1].time){ae(ce+1),es=ti.slice(0);var f={date:Be,time:"13:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,f),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai)}else""===ti[i+1].proj&&(ae(ce-1),(es=ti.slice(0)).splice(i+1,1),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai));if("14:00"===e&&2===s)if("15:00"===ti[i+1].time){ae(ce+1),es=ti.slice(0);var v={date:Be,time:"14:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,v),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai)}else""===ti[i+1].proj&&(ae(ce-1),(es=ti.slice(0)).splice(i+1,1),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai));if("15:00"===e&&2===s)if("16:00"===ti[i+1].time){ae(ce+1),es=ti.slice(0);var p={date:Be,time:"15:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,p),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai)}else""===ti[i+1].proj&&(ae(ce-1),(es=ti.slice(0)).splice(i+1,1),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai));if("16:00"===e&&2===s)if("17:00"===ti[i+1].time){ae(ce+1),es=ti.slice(0);var h={date:Be,time:"16:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,h),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai)}else""===ti[i+1].proj&&(ae(ce-1),(es=ti.slice(0)).splice(i+1,1),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai));if("17:00"===e&&2===s){var x,j;if("17:30"!==(null===(x=ti[i+1])||void 0===x?void 0:x.time)){ae(ce+1),es=ti.slice(0),console.log(es);var m={date:Be,time:"17:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,m),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai)}"17:30"===(null===(j=ti[i+1])||void 0===j?void 0:j.time)&&""===ti[i+1].proj&&(ae(ce-1),(es=ti.slice(0)).splice(i+1,1),ci(es),es.forEach((function(e,i){Ai[i]=e.save})),Fi(Ai))}if("18:00"===e&&3===s)if("19:00"===ni[i+1].time){le(oe+1),es=ni.slice(0);var g={date:Be,time:"18:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,g),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi)}else""===ni[i+1].proj&&(le(oe-1),(es=ni.slice(0)).splice(i+1,1),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi));if("19:00"===e&&3===s)if("20:00"===ni[i+1].time){le(oe+1),es=ni.slice(0);var N={date:Be,time:"19:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,N),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi)}else""===ni[i+1].proj&&(le(oe-1),(es=ni.slice(0)).splice(i+1,1),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi));if("20:00"===e&&3===s)if("21:00"===ni[i+1].time){le(oe+1),es=ni.slice(0);var b={date:Be,time:"20:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,b),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi)}else""===ni[i+1].proj&&(le(oe-1),(es=ni.slice(0)).splice(i+1,1),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi));if("21:00"===e&&3===s)if("22:00"===ni[i+1].time){le(oe+1),es=ni.slice(0);var y={date:Be,time:"21:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,y),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi)}else""===ni[i+1].proj&&(le(oe-1),(es=ni.slice(0)).splice(i+1,1),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi));if("22:00"===e&&3===s)if("23:00"===ni[i+1].time){le(oe+1),es=ni.slice(0);var E={date:Be,time:"22:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,E),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi)}else""===ni[i+1].proj&&(le(oe-1),(es=ni.slice(0)).splice(i+1,1),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi));if("23:00"===e&&3===s){var w,S;if("23:30"!==(null===(w=ni[i+1])||void 0===w?void 0:w.time)){le(oe+1),es=ni.slice(0),console.log(es);var k={date:Be,time:"23:30",proj:"",uuid:"",save:!1,go:!1};es.splice(i+1,0,k),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi)}"23:30"===(null===(S=ni[i+1])||void 0===S?void 0:S.time)&&""===ni[i+1].proj&&(le(oe-1),(es=ni.slice(0)).splice(i+1,1),oi(es),es.forEach((function(e,i){Oi[i]=e.save})),Hi(Oi))}},rs=(0,v.jsx)(l.oo,{autohide:!1,visible:!0,color:"success",className:"text-white align-items-center",children:(0,v.jsxs)("div",{className:"d-flex",children:[(0,v.jsx)(l.S3,{children:"\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e!"}),(0,v.jsx)(l.Pv,{className:"me-2 m-auto",white:!0})]})}),ns=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var i,s,a,r,n,o,l,d,u,v,p,h,x;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return qi(!0),console.log("\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438: ",I),console.log("\u0442\u0435\u043a\u0441\u0442: ",C),console.log("\u043f\u043e\u0441\u0442\u0435\u0440: ",V),console.log("\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u0438: ",F),i=new Date,(s=new Date).setDate(s.getDate()+1),a={id:B,date:i.toLocaleDateString()},r={id:B,date:s.toLocaleDateString()},e.next=12,(0,f.fA)(a);case 12:return e.sent,e.next=15,(0,f.fA)(r);case 15:return e.sent,n=[].concat(Me,Ke,Ue),o=JSON.stringify(n),l=[].concat($e,ti,ni),d=JSON.stringify(l),u={datestart:i.toLocaleDateString(),times:o},e.next=23,(0,f.A0)(u);case 23:return v={datestart:s.toLocaleDateString(),times:d},e.next=26,(0,f.A0)(v);case 26:return p="string"===typeof I?I.split(",").map((function(e){return e})).join(","):I.map((function(e){return e})).join(","),h=new Date,x=h.getFullYear(),n.forEach(function(){var e=(0,c.Z)((0,t.Z)().mark((function e(i){var s,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==i.save||i.uuid!==B||!1!==i.go){e.next=6;break}return s={text:C,image:V||"",project:T,projectId:Z,receivers:p,datestart:"".concat(x,"-").concat(i.date.split(".")[1],"-").concat(i.date.split(".")[0],"T").concat(i.time,":00"),delivered:"false",count:D,date:"".concat(Ve,".").concat(Re,".").concat(x),button:A||"",users:F.toString(),uuid:B,editButton:L,stavka:J,target:O},e.next=4,(0,f.pu)(s);case 4:c=e.sent,console.log("\u0420\u0430\u0441\u0441\u044b\u043b\u043a\u0430: ",c);case 6:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}()),l.forEach(function(){var e=(0,c.Z)((0,t.Z)().mark((function e(i){var s,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==i.save||i.uuid!==B||!1!==i.go){e.next=6;break}return s={text:C,image:V||"",project:T,projectId:Z,receivers:p,datestart:"".concat(x,"-").concat(i.date.split(".")[1],"-").concat(i.date.split(".")[0],"T").concat(i.time,":00"),delivered:"false",count:D,date:"".concat(Fe,".").concat(Ae,".").concat(x),button:A,users:F.toString(),uuid:B,editButton:L,stavka:J,target:O},e.next=4,(0,f.pu)(s);case 4:c=e.sent,console.log("\u0420\u0430\u0441\u0441\u044b\u043b\u043a\u04302: ",c);case 6:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}()),e.next=33,k(!0);case 33:Xi(rs),qi(!1),setTimeout((function(){is("/distributionw")}),2e3);case 36:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{className:"dark-theme",children:[(0,v.jsx)(d.S8,{}),(0,v.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-uley",children:[(0,v.jsx)(d.tf,{}),(0,v.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,v.jsx)(l.KB,{lg:!0,children:(0,v.jsx)(r.Suspense,{fallback:(0,v.jsx)(l.LQ,{color:"primary"}),children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{children:"\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0441\u0441\u044b\u043b\u043e\u043a"}),(0,v.jsx)("br",{}),(0,v.jsx)(l.rb,{children:(0,v.jsx)(l.b7,{xs:!0,children:(0,v.jsxs)(l.xH,{className:"mb-4",children:[(0,v.jsx)(l.bn,{children:"\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0441\u0441\u044b\u043b\u043e\u043a"}),(0,v.jsxs)(l.sl,{children:[(0,v.jsxs)("p",{style:{color:"#fff"},children:["\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0440\u043e\u0435\u043a\u0442: \xab",ui,"\xbb"]}),Wi?(0,v.jsx)("div",{style:{textAlign:"center"},children:(0,v.jsx)(l.LQ,{})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(l.rb,{children:[(0,v.jsx)(l.b7,{xs:!0,children:(0,v.jsxs)("div",{style:{float:"left",display:"flex"},children:[(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,style:{float:"left"},children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsx)(l.T6,{children:(0,v.jsx)(l.is,{className:"text-center",style:{width:"70px"},children:"\u0414\u0430\u0442\u0430"})})}),(0,v.jsx)(l.NR,{children:(0,v.jsx)(l.T6,{"v-for":"item in tableItems",children:(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px",height:"".concat(41*Q,"px")},children:(0,v.jsx)("div",{children:Le})})})})]}),(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsxs)(l.T6,{children:[(0,v.jsx)(l.is,{className:"text-center",children:"\u0412\u0440\u0435\u043c\u044f"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u041f\u0440\u043e\u0435\u043a\u0442"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u0421\u0442\u0430\u0442\u0443\u0441"})]})}),(0,v.jsx)(l.NR,{children:Me.map((function(e,i){return(0,v.jsxs)(l.T6,{"v-for":"item in tableItems",children:[(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:(0,v.jsx)("div",{onClick:function(){return cs("".concat(e.time),i,1)},children:e.time})})}),(0,v.jsx)(l.NN,{style:{width:"180px"},children:(0,v.jsx)("div",{style:{display:e.proj?"block":"none",color:e.go?"#2eb85c":""},children:e.proj})}),(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)(l.EC,{id:"rowCheckTab1",checked:gi[i],onChange:function(){return ss(i,1)},disabled:B!==e.uuid&&""!==e.proj||fe[i]?"disabled":""})})]},i)}))})]})]})}),(0,v.jsx)(l.b7,{xs:!0,children:(0,v.jsxs)("div",{style:{float:"left",display:"flex"},children:[(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,style:{float:"left"},children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsx)(l.T6,{children:(0,v.jsx)(l.is,{className:"text-center",style:{width:"70px"},children:"\u0414\u0430\u0442\u0430"})})}),(0,v.jsx)(l.NR,{children:(0,v.jsx)(l.T6,{"v-for":"item in tableItems",children:(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px",height:"".concat(41*P,"px")},children:(0,v.jsx)("div",{children:Le})})})})]}),(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsxs)(l.T6,{children:[(0,v.jsx)(l.is,{className:"text-center",children:"\u0412\u0440\u0435\u043c\u044f"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u041f\u0440\u043e\u0435\u043a\u0442"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u0421\u0442\u0430\u0442\u0443\u0441"})]})}),(0,v.jsx)(l.NR,{children:Ke.map((function(e,i){return(0,v.jsxs)(l.T6,{"v-for":"item in tableItems",children:[(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:(0,v.jsx)("div",{onClick:function(){return cs("".concat(e.time),i,2)},children:e.time})})}),(0,v.jsx)(l.NN,{style:{width:"180px"},children:(0,v.jsx)("div",{style:{display:e.proj?"block":"none",color:e.go?"#2eb85c":""},children:e.proj})}),(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)(l.EC,{id:"rowCheckTab2",checked:Ei[i],onChange:function(){return ss(i,2)},disabled:B!==e.uuid&&""!==e.proj||xe[i]?"disabled":""})})]},i)}))})]})]})}),(0,v.jsx)(l.b7,{xs:!0,children:(0,v.jsxs)("div",{style:{float:"left",display:"flex"},children:[(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,style:{float:"left"},children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsx)(l.T6,{children:(0,v.jsx)(l.is,{className:"text-center",style:{width:"70px"},children:"\u0414\u0430\u0442\u0430"})})}),(0,v.jsx)(l.NR,{children:(0,v.jsx)(l.T6,{"v-for":"item in tableItems",children:(0,v.jsx)(l.NN,{className:"text-center",style:{width:"70px",height:"".concat(41*z,"px")},children:(0,v.jsx)("div",{children:Le})})})})]}),(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsxs)(l.T6,{children:[(0,v.jsx)(l.is,{className:"text-center",children:"\u0412\u0440\u0435\u043c\u044f"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u041f\u0440\u043e\u0435\u043a\u0442"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u0421\u0442\u0430\u0442\u0443\u0441"})]})}),(0,v.jsx)(l.NR,{children:Ue.map((function(e,i){return(0,v.jsxs)(l.T6,{"v-for":"item in tableItems",children:[(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:(0,v.jsx)("div",{onClick:function(){return cs("".concat(e.time),i,3)},children:e.time})})}),(0,v.jsx)(l.NN,{style:{width:"180px"},children:(0,v.jsx)("div",{style:{display:e.proj?"block":"none",color:e.go?"#2eb85c":""},children:e.proj})}),(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)(l.EC,{id:"rowCheckTab3",checked:Zi[i],onChange:function(){return ss(i,3)},disabled:B!==e.uuid&&""!==e.proj||Ne[i]?"disabled":""})})]},i)}))})]})]})})]}),(0,v.jsx)("br",{}),(0,v.jsxs)(l.rb,{children:[(0,v.jsx)(l.b7,{xs:!0,children:(0,v.jsxs)("div",{style:{float:"left",display:"flex"},children:[(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,style:{float:"left"},children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsx)(l.T6,{children:(0,v.jsx)(l.is,{className:"text-center",style:{width:"70px"},children:"\u0414\u0430\u0442\u0430"})})}),(0,v.jsx)(l.NR,{children:(0,v.jsx)(l.T6,{"v-for":"item in tableItems",children:(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px",height:"".concat(41*ee,"px")},children:(0,v.jsx)("div",{children:Be})})})})]}),(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsxs)(l.T6,{children:[(0,v.jsx)(l.is,{className:"text-center",children:"\u0412\u0440\u0435\u043c\u044f"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u041f\u0440\u043e\u0435\u043a\u0442"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u0421\u0442\u0430\u0442\u0443\u0441"})]})}),(0,v.jsx)(l.NR,{children:$e.map((function(e,i){return(0,v.jsxs)(l.T6,{"v-for":"item in tableItems",children:[(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:(0,v.jsx)("div",{onClick:function(){return as("".concat(e.time),i,1)},children:e.time})})}),(0,v.jsx)(l.NN,{style:{width:"180px"},children:(0,v.jsx)("div",{style:{display:e.proj?"block":"none",color:e.go?"#2eb85c":""},children:e.proj})}),(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)(l.EC,{id:"rowCheckTab1",checked:Di[i],onChange:function(){return ts(i,1)},disabled:B!==e.uuid&&""!==e.proj||we[i]?"disabled":""})})]},i)}))})]})]})}),(0,v.jsx)(l.b7,{xs:!0,children:(0,v.jsxs)("div",{style:{float:"left",display:"flex"},children:[(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,style:{float:"left"},children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsx)(l.T6,{children:(0,v.jsx)(l.is,{className:"text-center",style:{width:"70px"},children:"\u0414\u0430\u0442\u0430"})})}),(0,v.jsx)(l.NR,{children:(0,v.jsx)(l.T6,{"v-for":"item in tableItems",children:(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px",height:"".concat(41*ce,"px")},children:(0,v.jsx)("div",{children:Be})})})})]}),(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsxs)(l.T6,{children:[(0,v.jsx)(l.is,{className:"text-center",children:"\u0412\u0440\u0435\u043c\u044f"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u041f\u0440\u043e\u0435\u043a\u0442"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u0421\u0442\u0430\u0442\u0443\u0441"})]})}),(0,v.jsx)(l.NR,{children:ti.map((function(e,i){return(0,v.jsxs)(l.T6,{"v-for":"item in tableItems",children:[(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:(0,v.jsx)("div",{onClick:function(){return as("".concat(e.time),i,2)},children:e.time})})}),(0,v.jsx)(l.NN,{style:{width:"180px"},children:(0,v.jsx)("div",{style:{display:e.proj?"block":"none",color:e.go?"#2eb85c":""},children:e.proj})}),(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)(l.EC,{id:"rowCheckTab2",checked:Ai[i],onChange:function(){return ts(i,2)},disabled:B!==e.uuid&&""!==e.proj||Ze[i]?"disabled":""})})]},i)}))})]})]})}),(0,v.jsx)(l.b7,{xs:!0,children:(0,v.jsxs)("div",{style:{float:"left",display:"flex"},children:[(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,style:{float:"left"},children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsx)(l.T6,{children:(0,v.jsx)(l.is,{className:"text-center",style:{width:"70px"},children:"\u0414\u0430\u0442\u0430"})})}),(0,v.jsx)(l.NR,{children:(0,v.jsx)(l.T6,{"v-for":"item in tableItems",children:(0,v.jsx)(l.NN,{className:"text-center",style:{width:"70px",height:"".concat(41*oe,"px")},children:(0,v.jsx)("div",{children:Be})})})})]}),(0,v.jsxs)(l.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,bordered:!0,children:[(0,v.jsx)(l.V,{className:"table-dark",children:(0,v.jsxs)(l.T6,{children:[(0,v.jsx)(l.is,{className:"text-center",children:"\u0412\u0440\u0435\u043c\u044f"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u041f\u0440\u043e\u0435\u043a\u0442"}),(0,v.jsx)(l.is,{className:"text-center",children:"\u0421\u0442\u0430\u0442\u0443\u0441"})]})}),(0,v.jsx)(l.NR,{children:ni.map((function(e,i){return(0,v.jsxs)(l.T6,{"v-for":"item in tableItems",children:[(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},children:(0,v.jsx)("div",{onClick:function(){return as("".concat(e.time),i,3)},children:e.time})})}),(0,v.jsx)(l.NN,{style:{width:"180px"},children:(0,v.jsx)("div",{style:{display:e.proj?"block":"none",color:e.go?"#2eb85c":""},children:e.proj})}),(0,v.jsx)(l.NN,{className:"text-center",style:{width:"50px"},children:(0,v.jsx)(l.EC,{id:"rowCheckTab3",checked:Oi[i],onChange:function(){return ts(i,3)},disabled:B!==e.uuid&&""!==e.proj||Ie[i]?"disabled":""})})]},i)}))})]})]})})]}),(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"15px"},children:[(0,v.jsx)("div",{style:{marginRight:"16px"},children:(0,v.jsx)(o.rU,{to:"/distributionw_add",children:(0,v.jsx)(l.u5,{color:"secondary",style:{width:"130px"},children:"\u041d\u0430\u0437\u0430\u0434"})})}),(0,v.jsxs)("div",{children:[(0,v.jsx)(l.u5,{color:"primary",onClick:ns,style:{width:"130px"},children:Yi?(0,v.jsx)(l.LQ,{style:{width:"20px",height:"20px"}}):"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),(0,v.jsx)(l.KF,{ref:$i,push:Gi,placement:"top-end"})]})]})]})]})]})})})]})})})}),(0,v.jsx)(d.qh,{})]})]})}}}]);
//# sourceMappingURL=2597.6e25aff4.chunk.js.map