(self.webpackChunkclient=self.webpackChunkclient||[]).push([[4260],{15463:function(r,e,t){"use strict";t.d(e,{x:function(){return a}});var a=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313' class='ci-primary'/>"]},48899:function(r){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t={},a=0;a<66;a++)t[e.charAt(a)]=a;r.exports={itoc:e,ctoi:t}},96306:function(r){r.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},92945:function(r,e,t){"use strict";var a=t(31196),n=t(92837),o=t(45884),c=t(4385),i=t(42002),s=Error.prototype.toString,u=n((function(){if(a){var r=c(Object.defineProperty({},"name",{get:function(){return this===r}}));if("true"!==s.call(r))return!0}return"2: 1"!==s.call({message:1,name:2})||"Error"!==s.call({})}));r.exports=u?function(){var r=o(this),e=i(r.name,"Error"),t=i(r.message);return e?t?e+": "+t:e:t}:s},55059:function(r,e,t){var a=t(31653);r.exports=function(r){try{if(a)return Function('return require("'+r+'")')()}catch(e){}}},19017:function(r,e,t){var a=t(67768),n=t(1240),o=t(74932),c=t(92837),i=t(86124),s=t(73013),u=t(34974),f=t(48899).ctoi,l=/[^\d+/a-z]/i,E=/[\t\n\f\r ]+/g,m=/[=]+$/,d=n("atob"),p=String.fromCharCode,b=o("".charAt),g=o("".replace),y=o(l.exec),h=c((function(){return""!==d(" ")})),R=!c((function(){d("a")})),v=!h&&!R&&!c((function(){d()})),w=!h&&!R&&1!==d.length;a({global:!0,enumerable:!0,forced:h||R||v||w},{atob:function(r){if(u(arguments.length,1),v||w)return d(r);var e,t,a=g(i(r),E,""),o="",c=0,h=0;if(a.length%4==0&&(a=g(a,m,"")),a.length%4==1||y(l,a))throw new(n("DOMException"))("The string is not correctly encoded","InvalidCharacterError");for(;e=b(a,c++);)s(f,e)&&(t=h%4?64*t+f[e]:f[e],h++%4&&(o+=p(255&t>>(-2*h&6))));return o}})},88489:function(r,e,t){var a=t(67768),n=t(1240),o=t(74932),c=t(92837),i=t(86124),s=t(34974),u=t(48899).itoc,f=n("btoa"),l=o("".charAt),E=o("".charCodeAt),m=!!f&&!c((function(){f()})),d=!!f&&c((function(){return"bnVsbA=="!==f(null)})),p=!!f&&1!==f.length;a({global:!0,enumerable:!0,forced:m||d||p},{btoa:function(r){if(s(arguments.length,1),m||d||p)return f(i(r));for(var e,t,a=i(r),o="",c=0,b=u;l(a,c)||(b="=",c%1);){if((t=E(a,c+=3/4))>255)throw new(n("DOMException"))("The string contains characters outside of the Latin1 range","InvalidCharacterError");o+=l(b,63&(e=e<<8|t)>>8-c%1*8)}return o}})},99345:function(r,e,t){"use strict";var a=t(67768),n=t(55059),o=t(1240),c=t(92837),i=t(4385),s=t(72037),u=t(91592).f,f=t(17543),l=t(50695),E=t(73013),m=t(14817),d=t(45884),p=t(92945),b=t(42002),g=t(96306),y=t(20151),h=t(49671),R=t(31196),v=t(23608),w="DOMException",A="DATA_CLONE_ERR",D=o("Error"),O=o(w)||function(){try{(new(o("MessageChannel")||n("worker_threads").MessageChannel)).port1.postMessage(new WeakMap)}catch(r){if(r.name==A&&25==r.code)return r.constructor}}(),k=O&&O.prototype,I=D.prototype,M=h.set,T=h.getterFor(w),_="stack"in D(w),C=function(r){return E(g,r)&&g[r].m?g[r].c:0},S=function(){m(this,U);var r=arguments.length,e=b(r<1?void 0:arguments[0]),t=b(r<2?void 0:arguments[1],"Error"),a=C(t);if(M(this,{type:w,name:t,message:e,code:a}),R||(this.name=t,this.message=e,this.code=a),_){var n=D(e);n.name=w,u(this,"stack",s(1,y(n.stack,1)))}},U=S.prototype=i(I),N=function(r){return{enumerable:!0,configurable:!0,get:r}},x=function(r){return N((function(){return T(this)[r]}))};R&&(l(U,"code",x("code")),l(U,"message",x("message")),l(U,"name",x("name"))),u(U,"constructor",s(1,S));var L=c((function(){return!(new O instanceof D)})),F=L||c((function(){return I.toString!==p||"2: 1"!==String(new O(1,2))})),B=L||c((function(){return 25!==new O(1,"DataCloneError").code})),P=L||25!==O[A]||25!==k[A],V=v?F||B||P:L;a({global:!0,constructor:!0,forced:V},{DOMException:V?S:O});var j=o(w),H=j.prototype;for(var W in F&&(v||O===j)&&f(H,"toString",p),B&&R&&O===j&&l(H,"code",N((function(){return C(d(this).name)}))),g)if(E(g,W)){var z=g[W],Q=z.s,Y=s(6,z.c);E(j,Q)||u(j,Q,Y),E(H,Q)||u(H,Q,Y)}},76510:function(r,e,t){"use strict";var a=t(67768),n=t(6840),o=t(1240),c=t(72037),i=t(91592).f,s=t(73013),u=t(14817),f=t(21527),l=t(42002),E=t(96306),m=t(20151),d=t(31196),p=t(23608),b="DOMException",g=o("Error"),y=o(b),h=function(){u(this,R);var r=arguments.length,e=l(r<1?void 0:arguments[0]),t=l(r<2?void 0:arguments[1],"Error"),a=new y(e,t),n=g(e);return n.name=b,i(a,"stack",c(1,m(n.stack,1))),f(a,this,h),a},R=h.prototype=y.prototype,v="stack"in g(b),w="stack"in new y(1,2),A=y&&d&&Object.getOwnPropertyDescriptor(n,b),D=!!A&&!(A.writable&&A.configurable),O=v&&!D&&!w;a({global:!0,constructor:!0,forced:p||O},{DOMException:O?h:y});var k=o(b),I=k.prototype;if(I.constructor!==k)for(var M in p||i(I,"constructor",c(1,k)),E)if(s(E,M)){var T=E[M],_=T.s;s(k,_)||i(k,_,c(6,T.c))}},57867:function(r,e,t){var a=t(1240),n="DOMException";t(53370)(a(n),n)},41029:function(r,e,t){"use strict";var a=t(67768),n=t(6840),o=t(50695),c=t(31196),i=TypeError,s=Object.defineProperty,u=n.self!==n;try{if(c){var f=Object.getOwnPropertyDescriptor(n,"self");!u&&f&&f.get&&f.enumerable||o(n,"self",{get:function(){return n},set:function(r){if(this!==n)throw i("Illegal invocation");s(n,"self",{value:r,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else a({global:!0,simple:!0,forced:u},{self:n})}catch(l){}},57997:function(r,e,t){var a=t(67768),n=t(6840),o=t(14945)(n.setInterval,!0);a({global:!0,bind:!0,forced:n.setInterval!==o},{setInterval:o})},4421:function(r,e,t){var a=t(67768),n=t(6840),o=t(14945)(n.setTimeout,!0);a({global:!0,bind:!0,forced:n.setTimeout!==o},{setTimeout:o})},53492:function(r,e,t){var a,n=t(23608),o=t(67768),c=t(6840),i=t(1240),s=t(74932),u=t(92837),f=t(24839),l=t(39218),E=t(51219),m=t(19055),d=t(43931),p=t(28287),b=t(54439),g=t(45884),y=t(37205),h=t(73013),R=t(13055),v=t(63873),w=t(23385),A=t(34974),D=t(97667),O=t(40943),k=t(20129),I=t(86177),M=t(65372),T=t(64163),_=t(46681),C=t(31653),S=c.Object,U=c.Array,N=c.Date,x=c.Error,L=c.EvalError,F=c.RangeError,B=c.ReferenceError,P=c.SyntaxError,V=c.TypeError,j=c.URIError,H=c.PerformanceMark,W=c.WebAssembly,z=W&&W.CompileError||x,Q=W&&W.LinkError||x,Y=W&&W.RuntimeError||x,G=i("DOMException"),q=O.Map,X=O.has,Z=O.get,K=O.set,J=k.Set,$=k.add,rr=i("Object","keys"),er=s([].push),tr=s((!0).valueOf),ar=s(1..valueOf),nr=s("".valueOf),or=s(N.prototype.getTime),cr=f("structuredClone"),ir="DataCloneError",sr="Transferring",ur=function(r){return!u((function(){var e=new c.Set([7]),t=r(e),a=r(S(7));return t==e||!t.has(7)||"object"!=typeof a||7!=a}))&&r},fr=function(r,e){return!u((function(){var t=new e,a=r({a:t,b:t});return!(a&&a.a===a.b&&a.a instanceof e&&a.a.stack===t.stack)}))},lr=c.structuredClone,Er=n||!fr(lr,x)||!fr(lr,G)||(a=lr,!!u((function(){var r=a(new c.AggregateError([1],cr,{cause:3}));return"AggregateError"!=r.name||1!=r.errors[0]||r.message!=cr||3!=r.cause}))),mr=!lr&&ur((function(r){return new H(cr,{detail:r}).detail})),dr=ur(lr)||mr,pr=function(r){throw new G("Uncloneable type: "+r,ir)},br=function(r,e){throw new G((e||"Cloning")+" of "+r+" cannot be properly polyfilled in this engine",ir)},gr=function r(e,t){if(p(e)&&pr("Symbol"),!d(e))return e;if(t){if(X(t,e))return Z(t,e)}else t=new q;var a,n,o,s,u,f,E,m,b,g,A=y(e),O=!1;switch(A){case"Array":o=U(w(e)),O=!0;break;case"Object":o={},O=!0;break;case"Map":o=new q,O=!0;break;case"Set":o=new J,O=!0;break;case"RegExp":o=new RegExp(e.source,D(e));break;case"Error":switch(n=e.name){case"AggregateError":o=i("AggregateError")([]);break;case"EvalError":o=L();break;case"RangeError":o=F();break;case"ReferenceError":o=B();break;case"SyntaxError":o=P();break;case"TypeError":o=V();break;case"URIError":o=j();break;case"CompileError":o=z();break;case"LinkError":o=Q();break;case"RuntimeError":o=Y();break;default:o=x()}O=!0;break;case"DOMException":o=new G(e.message,e.name),O=!0;break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":a=c[A],d(a)||br(A),o=new a(r(e.buffer,t),e.byteOffset,"DataView"===A?e.byteLength:e.length);break;case"DOMQuad":try{o=new DOMQuad(r(e.p1,t),r(e.p2,t),r(e.p3,t),r(e.p4,t))}catch(k){dr?o=dr(e):br(A)}break;case"FileList":if(s=function(){var r;try{r=new c.DataTransfer}catch(k){try{r=new c.ClipboardEvent("").clipboardData}catch(e){}}return r&&r.items&&r.files?r:null}()){for(u=0,f=w(e);u<f;u++)s.items.add(r(e[u],t));o=s.files}else dr?o=dr(e):br(A);break;case"ImageData":try{o=new ImageData(r(e.data,t),e.width,e.height,{colorSpace:e.colorSpace})}catch(k){dr?o=dr(e):br(A)}break;default:if(dr)o=dr(e);else switch(A){case"BigInt":o=S(e.valueOf());break;case"Boolean":o=S(tr(e));break;case"Number":o=S(ar(e));break;case"String":o=S(nr(e));break;case"Date":o=new N(or(e));break;case"ArrayBuffer":(a=c.DataView)||"function"==typeof e.slice||br(A);try{if("function"==typeof e.slice)o=e.slice(0);else for(f=e.byteLength,o=new ArrayBuffer(f),b=new a(e),g=new a(o),u=0;u<f;u++)g.setUint8(u,b.getUint8(u))}catch(k){throw new G("ArrayBuffer is detached",ir)}break;case"SharedArrayBuffer":o=e;break;case"Blob":try{o=e.slice(0,e.size,e.type)}catch(k){br(A)}break;case"DOMPoint":case"DOMPointReadOnly":a=c[A];try{o=a.fromPoint?a.fromPoint(e):new a(e.x,e.y,e.z,e.w)}catch(k){br(A)}break;case"DOMRect":case"DOMRectReadOnly":a=c[A];try{o=a.fromRect?a.fromRect(e):new a(e.x,e.y,e.width,e.height)}catch(k){br(A)}break;case"DOMMatrix":case"DOMMatrixReadOnly":a=c[A];try{o=a.fromMatrix?a.fromMatrix(e):new a(e)}catch(k){br(A)}break;case"AudioData":case"VideoFrame":l(e.clone)||br(A);try{o=e.clone()}catch(k){pr(A)}break;case"File":try{o=new File([e],e.name,e)}catch(k){br(A)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":br(A);default:pr(A)}}if(K(t,e,o),O)switch(A){case"Array":case"Object":for(E=rr(e),u=0,f=w(E);u<f;u++)m=E[u],R(o,m,r(e[m],t));break;case"Map":e.forEach((function(e,a){K(o,r(a,t),r(e,t))}));break;case"Set":e.forEach((function(e){$(o,r(e,t))}));break;case"Error":v(o,"message",r(e.message,t)),h(e,"cause")&&v(o,"cause",r(e.cause,t)),"AggregateError"==n&&(o.errors=r(e.errors,t));case"DOMException":I&&v(o,"stack",r(e.stack,t))}return o},yr=lr&&!u((function(){if(_&&M>92||C&&M>94||T&&M>97)return!1;var r=new ArrayBuffer(8),e=lr(r,{transfer:[r]});return 0!=r.byteLength||8!=e.byteLength})),hr=function(r,e){if(!d(r))throw V("Transfer option cannot be converted to a sequence");var t=[];b(r,(function(r){er(t,g(r))}));var a,n,o,i,s,u,f=0,m=w(t);if(yr)for(i=lr(t,{transfer:t});f<m;)K(e,t[f],i[f++]);else for(;f<m;){if(a=t[f++],X(e,a))throw new G("Duplicate transferable",ir);switch(n=y(a)){case"ImageBitmap":o=c.OffscreenCanvas,E(o)||br(n,sr);try{(u=new o(a.width,a.height)).getContext("bitmaprenderer").transferFromImageBitmap(a),s=u.transferToImageBitmap()}catch(p){}break;case"AudioData":case"VideoFrame":l(a.clone)&&l(a.close)||br(n,sr);try{s=a.clone(),a.close()}catch(p){}break;case"ArrayBuffer":case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":br(n,sr)}if(void 0===s)throw new G("This object cannot be transferred: "+n,ir);K(e,a,s)}};o({global:!0,enumerable:!0,sham:!yr,forced:Er},{structuredClone:function(r){var e,t=A(arguments.length,1)>1&&!m(arguments[1])?g(arguments[1]):void 0,a=t?t.transfer:void 0;return void 0!==a&&(e=new q,hr(a,e)),gr(r,e)}})},31567:function(r,e,t){t(57997),t(4421)},18884:function(r,e,t){t(19017),t(88489),t(22583),t(81740),t(99345),t(76510),t(57867),t(93449),t(94205),t(41029),t(53492),t(31567),t(9330),t(93593),t(58526);var a=t(34750);r.exports=a},54261:function(r,e,t){"use strict";t.d(e,{Z:function(){return f}});var a,n={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},o=new Uint8Array(16);function c(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(o)}for(var i=[],s=0;s<256;++s)i.push((s+256).toString(16).slice(1));function u(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(i[r[e+0]]+i[r[e+1]]+i[r[e+2]]+i[r[e+3]]+"-"+i[r[e+4]]+i[r[e+5]]+"-"+i[r[e+6]]+i[r[e+7]]+"-"+i[r[e+8]]+i[r[e+9]]+"-"+i[r[e+10]]+i[r[e+11]]+i[r[e+12]]+i[r[e+13]]+i[r[e+14]]+i[r[e+15]]).toLowerCase()}var f=function(r,e,t){if(n.randomUUID&&!e&&!r)return n.randomUUID();var a=(r=r||{}).random||(r.rng||c)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){t=t||0;for(var o=0;o<16;++o)e[t+o]=a[o];return e}return u(a)}}}]);
//# sourceMappingURL=4260.bd96a221.chunk.js.map