(self.webpackChunkclient=self.webpackChunkclient||[]).push([[4260],{15463:(e,r,t)=>{"use strict";t.d(r,{x:()=>a});const a=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313' class='ci-primary'/>"]},48129:(e,r,t)=>{"use strict";var a=t(5880).forEach,n=t(92241)("forEach");e.exports=n?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},92241:(e,r,t)=>{"use strict";var a=t(92837);e.exports=function(e,r){var t=[][e];return!!t&&a((function(){t.call(null,r||function(){return 1},1)}))}},48899:e=>{for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t={},a=0;a<66;a++)t[r.charAt(a)]=a;e.exports={itoc:r,ctoi:t}},96306:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},71070:(e,r,t)=>{var a=t(84839);e.exports=/ipad|iphone|ipod/i.test(a)&&"undefined"!=typeof Pebble},81785:(e,r,t)=>{var a=t(84839);e.exports=/web0s(?!.*chrome)/i.test(a)},92945:(e,r,t)=>{"use strict";var a=t(31196),n=t(92837),o=t(45884),c=t(4385),i=t(42002),s=Error.prototype.toString,u=n((function(){if(a){var e=c(Object.defineProperty({},"name",{get:function(){return this===e}}));if("true"!==s.call(e))return!0}return"2: 1"!==s.call({message:1,name:2})||"Error"!==s.call({})}));e.exports=u?function(){var e=o(this),r=i(e.name,"Error"),t=i(e.message);return r?t?r+": "+t:r:t}:s},24410:(e,r,t)=>{var a,n,o,c,i,s=t(6840),u=t(5851),f=t(32573).f,l=t(91625).set,h=t(9033),d=t(63929),E=t(71070),m=t(81785),p=t(31653),b=s.MutationObserver||s.WebKitMutationObserver,g=s.document,y=s.process,v=s.Promise,R=f(s,"queueMicrotask"),w=R&&R.value;if(!w){var A=new h,k=function(){var e,r;for(p&&(e=y.domain)&&e.exit();r=A.get();)try{r()}catch(t){throw A.head&&a(),t}e&&e.enter()};d||p||m||!b||!g?!E&&v&&v.resolve?((c=v.resolve(void 0)).constructor=v,i=u(c.then,c),a=function(){i(k)}):p?a=function(){y.nextTick(k)}:(l=u(l,s),a=function(){l(k)}):(n=!0,o=g.createTextNode(""),new b(k).observe(o,{characterData:!0}),a=function(){o.data=n=!n}),w=function(e){A.head||a(),A.add(e)}}e.exports=w},9033:e=>{var r=function(){this.head=null,this.tail=null};r.prototype={add:function(e){var r={item:e,next:null},t=this.tail;t?t.next=r:this.head=r,this.tail=r},get:function(){var e=this.head;if(e)return null===(this.head=e.next)&&(this.tail=null),e.item}},e.exports=r},23643:(e,r,t)=>{var a=t(6840),n=t(92837),o=t(65372),c=t(64163),i=t(46681),s=t(31653),u=a.structuredClone;e.exports=!!u&&!n((function(){if(i&&o>92||s&&o>94||c&&o>97)return!1;var e=new ArrayBuffer(8),r=u(e,{transfer:[e]});return 0!=e.byteLength||8!=r.byteLength}))},55059:(e,r,t)=>{var a=t(31653);e.exports=function(e){try{if(a)return Function('return require("'+e+'")')()}catch(r){}}},19017:(e,r,t)=>{var a=t(67768),n=t(6840),o=t(1240),c=t(74932),i=t(98513),s=t(92837),u=t(86124),f=t(73013),l=t(34974),h=t(48899).ctoi,d=/[^\d+/a-z]/i,E=/[\t\n\f\r ]+/g,m=/[=]{1,2}$/,p=o("atob"),b=String.fromCharCode,g=c("".charAt),y=c("".replace),v=c(d.exec),R=s((function(){return""!==p(" ")})),w=!s((function(){p("a")})),A=!R&&!w&&!s((function(){p()})),k=!R&&!w&&1!==p.length;a({global:!0,bind:!0,enumerable:!0,forced:R||w||A||k},{atob:function(e){if(l(arguments.length,1),A||k)return i(p,n,e);var r,t,a=y(u(e),E,""),c="",s=0,R=0;if(a.length%4==0&&(a=y(a,m,"")),a.length%4==1||v(d,a))throw new(o("DOMException"))("The string is not correctly encoded","InvalidCharacterError");for(;r=g(a,s++);)f(h,r)&&(t=R%4?64*t+h[r]:h[r],R++%4&&(c+=b(255&t>>(-2*R&6))));return c}})},88489:(e,r,t)=>{var a=t(67768),n=t(6840),o=t(1240),c=t(74932),i=t(98513),s=t(92837),u=t(86124),f=t(34974),l=t(48899).itoc,h=o("btoa"),d=c("".charAt),E=c("".charCodeAt),m=!!h&&!s((function(){h()})),p=!!h&&s((function(){return"bnVsbA=="!==h(null)})),b=!!h&&1!==h.length;a({global:!0,bind:!0,enumerable:!0,forced:m||p||b},{btoa:function(e){if(f(arguments.length,1),m||p||b)return i(h,n,u(e));for(var r,t,a=u(e),c="",s=0,g=l;d(a,s)||(g="=",s%1);){if((t=E(a,s+=3/4))>255)throw new(o("DOMException"))("The string contains characters outside of the Latin1 range","InvalidCharacterError");c+=d(g,63&(r=r<<8|t)>>8-s%1*8)}return c}})},22583:(e,r,t)=>{var a=t(6840),n=t(50650),o=t(22752),c=t(48129),i=t(63873),s=function(e){if(e&&e.forEach!==c)try{i(e,"forEach",c)}catch(r){e.forEach=c}};for(var u in n)n[u]&&s(a[u]&&a[u].prototype);s(o)},99345:(e,r,t)=>{"use strict";var a=t(67768),n=t(55059),o=t(1240),c=t(92837),i=t(4385),s=t(72037),u=t(91592).f,f=t(17543),l=t(50695),h=t(73013),d=t(14817),E=t(45884),m=t(92945),p=t(42002),b=t(96306),g=t(20151),y=t(49671),v=t(31196),R=t(23608),w="DOMException",A="DATA_CLONE_ERR",k=o("Error"),D=o(w)||function(){try{(new(o("MessageChannel")||n("worker_threads").MessageChannel)).port1.postMessage(new WeakMap)}catch(e){if(e.name==A&&25==e.code)return e.constructor}}(),O=D&&D.prototype,I=k.prototype,M=y.set,T=y.getterFor(w),S="stack"in k(w),C=function(e){return h(b,e)&&b[e].m?b[e].c:0},_=function(){d(this,x);var e=arguments.length,r=p(e<1?void 0:arguments[0]),t=p(e<2?void 0:arguments[1],"Error"),a=C(t);if(M(this,{type:w,name:t,message:r,code:a}),v||(this.name=t,this.message=r,this.code=a),S){var n=k(r);n.name=w,u(this,"stack",s(1,g(n.stack,1)))}},x=_.prototype=i(I),U=function(e){return{enumerable:!0,configurable:!0,get:e}},N=function(e){return U((function(){return T(this)[e]}))};v&&(l(x,"code",N("code")),l(x,"message",N("message")),l(x,"name",N("name"))),u(x,"constructor",s(1,_));var L=c((function(){return!(new D instanceof k)})),P=L||c((function(){return I.toString!==m||"2: 1"!==String(new D(1,2))})),B=L||c((function(){return 25!==new D(1,"DataCloneError").code})),F=L||25!==D[A]||25!==O[A],V=R?P||B||F:L;a({global:!0,constructor:!0,forced:V},{DOMException:V?_:D});var j=o(w),H=j.prototype;for(var W in P&&(R||D===j)&&f(H,"toString",m),B&&v&&D===j&&l(H,"code",U((function(){return C(E(this).name)}))),b)if(h(b,W)){var z=b[W],q=z.s,G=s(6,z.c);h(j,q)||u(j,q,G),h(H,q)||u(H,q,G)}},76510:(e,r,t)=>{"use strict";var a=t(67768),n=t(6840),o=t(1240),c=t(72037),i=t(91592).f,s=t(73013),u=t(14817),f=t(21527),l=t(42002),h=t(96306),d=t(20151),E=t(31196),m=t(23608),p="DOMException",b=o("Error"),g=o(p),y=function(){u(this,v);var e=arguments.length,r=l(e<1?void 0:arguments[0]),t=l(e<2?void 0:arguments[1],"Error"),a=new g(r,t),n=b(r);return n.name=p,i(a,"stack",c(1,d(n.stack,1))),f(a,this,y),a},v=y.prototype=g.prototype,R="stack"in b(p),w="stack"in new g(1,2),A=g&&E&&Object.getOwnPropertyDescriptor(n,p),k=!!A&&!(A.writable&&A.configurable),D=R&&!k&&!w;a({global:!0,constructor:!0,forced:m||D},{DOMException:D?y:g});var O=o(p),I=O.prototype;if(I.constructor!==O)for(var M in m||i(I,"constructor",c(1,O)),h)if(s(h,M)){var T=h[M],S=T.s;s(O,S)||i(O,S,c(6,T.c))}},57867:(e,r,t)=>{var a=t(1240),n="DOMException";t(53370)(a(n),n)},94205:(e,r,t)=>{var a=t(67768),n=t(6840),o=t(24410),c=t(66724),i=t(34974),s=t(31653),u=n.process;a({global:!0,enumerable:!0,dontCallGetSet:!0},{queueMicrotask:function(e){i(arguments.length,1),c(e);var r=s&&u.domain;o(r?r.bind(e):e)}})},41029:(e,r,t)=>{"use strict";var a=t(67768),n=t(6840),o=t(50695),c=t(31196),i=TypeError,s=Object.defineProperty,u=n.self!==n;try{if(c){var f=Object.getOwnPropertyDescriptor(n,"self");!u&&f&&f.get&&f.enumerable||o(n,"self",{get:function(){return n},set:function(e){if(this!==n)throw i("Illegal invocation");s(n,"self",{value:e,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else a({global:!0,simple:!0,forced:u},{self:n})}catch(l){}},57997:(e,r,t)=>{var a=t(67768),n=t(6840),o=t(14945)(n.setInterval,!0);a({global:!0,bind:!0,forced:n.setInterval!==o},{setInterval:o})},4421:(e,r,t)=>{var a=t(67768),n=t(6840),o=t(14945)(n.setTimeout,!0);a({global:!0,bind:!0,forced:n.setTimeout!==o},{setTimeout:o})},53492:(e,r,t)=>{var a,n=t(23608),o=t(67768),c=t(6840),i=t(1240),s=t(74932),u=t(92837),f=t(24839),l=t(39218),h=t(51219),d=t(19055),E=t(43931),m=t(28287),p=t(54439),b=t(45884),g=t(37205),y=t(73013),v=t(13055),R=t(63873),w=t(23385),A=t(34974),k=t(97667),D=t(40943),O=t(20129),I=t(86177),M=t(23643),T=c.Object,S=c.Array,C=c.Date,_=c.Error,x=c.EvalError,U=c.RangeError,N=c.ReferenceError,L=c.SyntaxError,P=c.TypeError,B=c.URIError,F=c.PerformanceMark,V=c.WebAssembly,j=V&&V.CompileError||_,H=V&&V.LinkError||_,W=V&&V.RuntimeError||_,z=i("DOMException"),q=D.Map,G=D.has,Q=D.get,Y=D.set,K=O.Set,X=O.add,Z=i("Object","keys"),J=s([].push),$=s((!0).valueOf),ee=s(1..valueOf),re=s("".valueOf),te=s(C.prototype.getTime),ae=f("structuredClone"),ne="DataCloneError",oe="Transferring",ce=function(e){return!u((function(){var r=new c.Set([7]),t=e(r),a=e(T(7));return t==r||!t.has(7)||"object"!=typeof a||7!=a}))&&e},ie=function(e,r){return!u((function(){var t=new r,a=e({a:t,b:t});return!(a&&a.a===a.b&&a.a instanceof r&&a.a.stack===t.stack)}))},se=c.structuredClone,ue=n||!ie(se,_)||!ie(se,z)||(a=se,!!u((function(){var e=a(new c.AggregateError([1],ae,{cause:3}));return"AggregateError"!=e.name||1!=e.errors[0]||e.message!=ae||3!=e.cause}))),fe=!se&&ce((function(e){return new F(ae,{detail:e}).detail})),le=ce(se)||fe,he=function(e){throw new z("Uncloneable type: "+e,ne)},de=function(e,r){throw new z((r||"Cloning")+" of "+e+" cannot be properly polyfilled in this engine",ne)},Ee=function(e,r){return le||de(r),le(e)},me=function(e,r){if(m(e)&&he("Symbol"),!E(e))return e;if(r){if(G(r,e))return Q(r,e)}else r=new q;var t,a,n,o,s,u,f,h,d,p,b,A=g(e),D=!1;switch(A){case"Array":n=S(w(e)),D=!0;break;case"Object":n={},D=!0;break;case"Map":n=new q,D=!0;break;case"Set":n=new K,D=!0;break;case"RegExp":n=new RegExp(e.source,k(e));break;case"Error":switch(a=e.name){case"AggregateError":n=i("AggregateError")([]);break;case"EvalError":n=x();break;case"RangeError":n=U();break;case"ReferenceError":n=N();break;case"SyntaxError":n=L();break;case"TypeError":n=P();break;case"URIError":n=B();break;case"CompileError":n=j();break;case"LinkError":n=H();break;case"RuntimeError":n=W();break;default:n=_()}D=!0;break;case"DOMException":n=new z(e.message,e.name),D=!0;break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":t=c[A],E(t)||de(A),n=new t(me(e.buffer,r),e.byteOffset,"DataView"===A?e.byteLength:e.length);break;case"DOMQuad":try{n=new DOMQuad(me(e.p1,r),me(e.p2,r),me(e.p3,r),me(e.p4,r))}catch(O){n=Ee(e,A)}break;case"File":if(le)try{n=le(e),g(n)!==A&&(n=void 0)}catch(O){}if(!n)try{n=new File([e],e.name,e)}catch(O){}n||de(A);break;case"FileList":if(o=function(){var e;try{e=new c.DataTransfer}catch(O){try{e=new c.ClipboardEvent("").clipboardData}catch(r){}}return e&&e.items&&e.files?e:null}()){for(s=0,u=w(e);s<u;s++)o.items.add(me(e[s],r));n=o.files}else n=Ee(e,A);break;case"ImageData":try{n=new ImageData(me(e.data,r),e.width,e.height,{colorSpace:e.colorSpace})}catch(O){n=Ee(e,A)}break;default:if(le)n=le(e);else switch(A){case"BigInt":n=T(e.valueOf());break;case"Boolean":n=T($(e));break;case"Number":n=T(ee(e));break;case"String":n=T(re(e));break;case"Date":n=new C(te(e));break;case"ArrayBuffer":(t=c.DataView)||"function"==typeof e.slice||de(A);try{if("function"!=typeof e.slice||e.resizable){u=e.byteLength,b="maxByteLength"in e?{maxByteLength:e.maxByteLength}:void 0,n=new ArrayBuffer(u,b),d=new t(e),p=new t(n);for(s=0;s<u;s++)p.setUint8(s,d.getUint8(s))}else n=e.slice(0)}catch(O){throw new z("ArrayBuffer is detached",ne)}break;case"SharedArrayBuffer":n=e;break;case"Blob":try{n=e.slice(0,e.size,e.type)}catch(O){de(A)}break;case"DOMPoint":case"DOMPointReadOnly":t=c[A];try{n=t.fromPoint?t.fromPoint(e):new t(e.x,e.y,e.z,e.w)}catch(O){de(A)}break;case"DOMRect":case"DOMRectReadOnly":t=c[A];try{n=t.fromRect?t.fromRect(e):new t(e.x,e.y,e.width,e.height)}catch(O){de(A)}break;case"DOMMatrix":case"DOMMatrixReadOnly":t=c[A];try{n=t.fromMatrix?t.fromMatrix(e):new t(e)}catch(O){de(A)}break;case"AudioData":case"VideoFrame":l(e.clone)||de(A);try{n=e.clone()}catch(O){he(A)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":de(A);default:he(A)}}if(Y(r,e,n),D)switch(A){case"Array":case"Object":for(f=Z(e),s=0,u=w(f);s<u;s++)h=f[s],v(n,h,me(e[h],r));break;case"Map":e.forEach((function(e,t){Y(n,me(t,r),me(e,r))}));break;case"Set":e.forEach((function(e){X(n,me(e,r))}));break;case"Error":R(n,"message",me(e.message,r)),y(e,"cause")&&R(n,"cause",me(e.cause,r)),"AggregateError"==a&&(n.errors=me(e.errors,r));case"DOMException":I&&R(n,"stack",me(e.stack,r))}return n};o({global:!0,enumerable:!0,sham:!M,forced:ue},{structuredClone:function(e){var r,t=A(arguments.length,1)>1&&!d(arguments[1])?b(arguments[1]):void 0,a=t?t.transfer:void 0;return void 0!==a&&function(e,r){if(!E(e))throw P("Transfer option cannot be converted to a sequence");var t=[];p(e,(function(e){J(t,b(e))}));var a,n,o,i,s,u,f=0,d=w(t);if(M)for(i=se(t,{transfer:t});f<d;)Y(r,t[f],i[f++]);else for(;f<d;){if(a=t[f++],G(r,a))throw new z("Duplicate transferable",ne);switch(n=g(a)){case"ImageBitmap":o=c.OffscreenCanvas,h(o)||de(n,oe);try{(u=new o(a.width,a.height)).getContext("bitmaprenderer").transferFromImageBitmap(a),s=u.transferToImageBitmap()}catch(m){}break;case"AudioData":case"VideoFrame":l(a.clone)&&l(a.close)||de(n,oe);try{s=a.clone(),a.close()}catch(m){}break;case"ArrayBuffer":l(a.transfer)||de(n,oe),s=a.transfer();break;case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":de(n,oe)}if(void 0===s)throw new z("This object cannot be transferred: "+n,ne);Y(r,a,s)}}(a,r=new q),me(e,r)}})},31567:(e,r,t)=>{t(57997),t(4421)},10829:(e,r,t)=>{"use strict";var a=t(17543),n=t(74932),o=t(86124),c=t(34974),i=URLSearchParams,s=i.prototype,u=n(s.append),f=n(s.delete),l=n(s.forEach),h=n([].push),d=new i("a=1&a=2");d.delete("a",1),d+""!=="a=2"&&a(s,"delete",(function(e){var r=arguments.length,t=r<2?void 0:arguments[1];if(r&&void 0===t)return f(this,e);var a=[];l(this,(function(e,r){h(a,{key:r,value:e})})),c(r,1);for(var n,i=o(e),s=o(t),d=0,E=0,m=!1,p=a.length;d<p;)n=a[d++],m||n.key===i?(m=!0,f(this,n.key)):E++;for(;E<p;)(n=a[E++]).key===i&&n.value===s||u(this,n.key,n.value)}),{enumerable:!0,unsafe:!0})},62887:(e,r,t)=>{"use strict";var a=t(17543),n=t(74932),o=t(86124),c=t(34974),i=URLSearchParams,s=i.prototype,u=n(s.getAll),f=n(s.has);new i("a=1").has("a",2)&&a(s,"has",(function(e){var r=arguments.length,t=r<2?void 0:arguments[1];if(r&&void 0===t)return f(this,e);var a=u(this,e);c(r,1);for(var n=o(t),i=0;i<a.length;)if(a[i++]===n)return!0;return!1}),{enumerable:!0,unsafe:!0})},11612:(e,r,t)=>{"use strict";var a=t(31196),n=t(74932),o=t(50695),c=URLSearchParams.prototype,i=n(c.forEach);a&&!("size"in c)&&o(c,"size",{get:function(){var e=0;return i(this,(function(){e++})),e},configurable:!0,enumerable:!0})},43727:(e,r,t)=>{var a=t(67768),n=t(1240),o=t(92837),c=t(34974),i=t(86124),s=t(91451),u=n("URL");a({target:"URL",stat:!0,forced:!(s&&o((function(){u.canParse()})))},{canParse:function(e){var r=c(arguments.length,1),t=i(e),a=r<2||void 0===arguments[1]?void 0:i(arguments[1]);try{return!!new u(t,a)}catch(n){return!1}}})},18884:(e,r,t)=>{t(19017),t(88489),t(22583),t(81740),t(99345),t(76510),t(57867),t(93449),t(94205),t(41029),t(53492),t(31567),t(9330),t(43727),t(93593),t(58526),t(10829),t(62887),t(11612);var a=t(34750);e.exports=a},54261:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});const a={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let n;const o=new Uint8Array(16);function c(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}const i=[];for(let f=0;f<256;++f)i.push((f+256).toString(16).slice(1));function s(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return i[e[r+0]]+i[e[r+1]]+i[e[r+2]]+i[e[r+3]]+"-"+i[e[r+4]]+i[e[r+5]]+"-"+i[e[r+6]]+i[e[r+7]]+"-"+i[e[r+8]]+i[e[r+9]]+"-"+i[e[r+10]]+i[e[r+11]]+i[e[r+12]]+i[e[r+13]]+i[e[r+14]]+i[e[r+15]]}const u=function(e,r,t){if(a.randomUUID&&!r&&!e)return a.randomUUID();const n=(e=e||{}).random||(e.rng||c)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){t=t||0;for(let e=0;e<16;++e)r[t+e]=n[e];return r}return s(n)}}}]);
//# sourceMappingURL=4260.e860e264.chunk.js.map