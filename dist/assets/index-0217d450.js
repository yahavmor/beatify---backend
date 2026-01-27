var Jf=Object.defineProperty;var eE=Object.getPrototypeOf;var tE=Reflect.get;var iE=(t,e,i)=>e in t?Jf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var jc=(t,e,i)=>(iE(t,typeof e!="symbol"?e+"":e,i),i),Tl=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var k=(t,e,i)=>(Tl(t,e,"read from private field"),i?i.call(t):e.get(t)),ue=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},st=(t,e,i,a)=>(Tl(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i);var ot=(t,e,i)=>(Tl(t,e,"access private method"),i),Bn=(t,e,i)=>tE(eE(t),i,e);import{R as vn,r as fn}from"./index-12a7fd2e.js";import{H as aE}from"./hls-c2a68498.js";import{C as Wn,M as rE}from"./mixin-cf90cd8a.js";var nE=Object.create,xm=Object.defineProperty,sE=Object.getOwnPropertyDescriptor,oE=Object.getOwnPropertyNames,lE=Object.getPrototypeOf,dE=Object.prototype.hasOwnProperty,Om=function(t,e){return function(){return t&&(e=t(t=0)),e}},qe=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}},uE=function(t,e,i,a){if(e&&typeof e=="object"||typeof e=="function")for(var r=oE(e),n=0,s=r.length,o;n<s;n++)o=r[n],!dE.call(t,o)&&o!==i&&xm(t,o,{get:(function(l){return e[l]}).bind(null,o),enumerable:!(a=sE(e,o))||a.enumerable});return t},at=function(t,e,i){return i=t!=null?nE(lE(t)):{},uE(e||!t||!t.__esModule?xm(i,"default",{value:t,enumerable:!0}):i,t)},Rt=qe(function(t,e){var i;typeof window<"u"?i=window:typeof global<"u"?i=global:typeof self<"u"?i=self:i={},e.exports=i});function fa(t,e){return e!=null&&typeof Symbol<"u"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):fa(t,e)}var Ea=Om(function(){Ea()});function Nm(t){"@swc/helpers - typeof";return t&&typeof Symbol<"u"&&t.constructor===Symbol?"symbol":typeof t}var Pm=Om(function(){}),$m=qe(function(t,e){var i=Array.prototype.slice;e.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),cE=qe(function(t,e){Ea(),e.exports=i;function i(a,r){if(!fa(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),hE=qe(function(t,e){Ea(),e.exports=i;function i(a,r){if(!fa(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),Um=qe(function(t,e){e.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),Hm=qe(function(t,e){e.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),Bm=qe(function(t,e){e.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),mE=qe(function(t,e){Pm(),e.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(d){switch(d.nodeType){case 3:return m(d.data);case 8:return"<!--"+d.data+"-->";default:return r(d)}}function r(d){var u=[],v=d.tagName;return d.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),u.push("<"+v+c(d)+o(d)),i.indexOf(v)>-1?u.push(" />"):(u.push(">"),d.childNodes.length?u.push.apply(u,d.childNodes.map(a)):d.textContent||d.innerText?u.push(m(d.textContent||d.innerText)):d.innerHTML&&u.push(d.innerHTML),u.push("</"+v+">")),u.join("")}function n(d,u){var v=Nm(d[u]);return u==="style"&&Object.keys(d.style).length>0?!0:d.hasOwnProperty(u)&&(v==="string"||v==="boolean"||v==="number")&&u!=="nodeName"&&u!=="className"&&u!=="tagName"&&u!=="textContent"&&u!=="innerText"&&u!=="namespaceURI"&&u!=="innerHTML"}function s(d){if(typeof d=="string")return d;var u="";return Object.keys(d).forEach(function(v){var f=d[v];v=v.replace(/[A-Z]/g,function(b){return"-"+b.toLowerCase()}),u+=v+":"+f+";"}),u}function o(d){var u=d.dataset,v=[];for(var f in u)v.push({name:"data-"+f,value:u[f]});return v.length?l(v):""}function l(d){var u=[];return d.forEach(function(v){var f=v.name,b=v.value;f==="style"&&(b=s(b)),u.push(f+'="'+p(b)+'"')}),u.length?" "+u.join(" "):""}function c(d){var u=[];for(var v in d)n(d,v)&&u.push({name:v,value:d[v]});for(var f in d._attributes)for(var b in d._attributes[f]){var y=d._attributes[f][b],T=(y.prefix?y.prefix+":":"")+b;u.push({name:T,value:y.value})}return d.className&&u.push({name:"class",value:d.className}),u.length?l(u):""}function m(d){var u="";return typeof d=="string"?u=d:d&&(u=d.toString()),u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(d){return m(d).replace(/"/g,"&quot;")}}),Wm=qe(function(t,e){Ea();var i=$m(),a=Um(),r=Hm(),n=Bm(),s=mE(),o="http://www.w3.org/1999/xhtml";e.exports=l;function l(c,m,p){if(!fa(this,l))return new l(c);var d=p===void 0?o:p||null;this.tagName=d===o?String(c).toUpperCase():c,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=m||null,this.namespaceURI=d,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(c){return c.parentNode&&c.parentNode.removeChild(c),this.childNodes.push(c),c.parentNode=this,c},l.prototype.replaceChild=function(c,m){c.parentNode&&c.parentNode.removeChild(c);var p=this.childNodes.indexOf(m);return m.parentNode=null,this.childNodes[p]=c,c.parentNode=this,m},l.prototype.removeChild=function(c){var m=this.childNodes.indexOf(c);return this.childNodes.splice(m,1),c.parentNode=null,c},l.prototype.insertBefore=function(c,m){c.parentNode&&c.parentNode.removeChild(c);var p=m==null?-1:this.childNodes.indexOf(m);return p>-1?this.childNodes.splice(p,0,c):this.childNodes.push(c),c.parentNode=this,c},l.prototype.setAttributeNS=function(c,m,p){var d=null,u=m,v=m.indexOf(":");if(v>-1&&(d=m.substr(0,v),u=m.substr(v+1)),this.tagName==="INPUT"&&m==="type")this.type=p;else{var f=this._attributes[c]||(this._attributes[c]={});f[u]={value:p,prefix:d}}},l.prototype.getAttributeNS=function(c,m){var p=this._attributes[c],d=p&&p[m]&&p[m].value;return this.tagName==="INPUT"&&m==="type"?this.type:typeof d!="string"?null:d},l.prototype.removeAttributeNS=function(c,m){var p=this._attributes[c];p&&delete p[m]},l.prototype.hasAttributeNS=function(c,m){var p=this._attributes[c];return!!p&&m in p},l.prototype.setAttribute=function(c,m){return this.setAttributeNS(null,c,m)},l.prototype.getAttribute=function(c){return this.getAttributeNS(null,c)},l.prototype.removeAttribute=function(c){return this.removeAttributeNS(null,c)},l.prototype.hasAttribute=function(c){return this.hasAttributeNS(null,c)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(c){var m=c.split(" "),p=[];return i(this,function(d){if(d.nodeType===1){var u=d.className||"",v=u.split(" ");m.every(function(f){return v.indexOf(f)!==-1})&&p.push(d)}}),p},l.prototype.getElementsByTagName=function(c){c=c.toLowerCase();var m=[];return i(this.childNodes,function(p){p.nodeType===1&&(c==="*"||p.tagName.toLowerCase()===c)&&m.push(p)}),m},l.prototype.contains=function(c){return i(this,function(m){return c===m})||!1}}),pE=qe(function(t,e){Ea();var i=Wm();e.exports=a;function a(r){if(!fa(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),vE=qe(function(t,e){e.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),fE=qe(function(t,e){Ea();var i=$m(),a=cE(),r=hE(),n=Wm(),s=pE(),o=vE(),l=Um(),c=Hm(),m=Bm();e.exports=p;function p(){if(!fa(this,p))return new p;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var d=p.prototype;d.createTextNode=function(u){return new r(u,this)},d.createElementNS=function(u,v){var f=u===null?null:String(u);return new n(v,this,f)},d.createElement=function(u){return new n(u,this)},d.createDocumentFragment=function(){return new s(this)},d.createEvent=function(u){return new o(u)},d.createComment=function(u){return new a(u,this)},d.getElementById=function(u){u=String(u);var v=i(this.childNodes,function(f){if(String(f.id)===u)return f});return v||null},d.getElementsByClassName=n.prototype.getElementsByClassName,d.getElementsByTagName=n.prototype.getElementsByTagName,d.contains=n.prototype.contains,d.removeEventListener=m,d.addEventListener=c,d.dispatchEvent=l}),EE=qe(function(t,e){var i=fE();e.exports=new i}),Fm=qe(function(t,e){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=EE(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),e.exports=r});function _E(t){if(Array.isArray(t))return t}function bE(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(t);!(r=(s=i.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function gE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gl(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function Km(t,e){if(t){if(typeof t=="string")return Gl(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Gl(t,e)}}function hi(t,e){return _E(t)||bE(t,e)||Km(t,e)||gE()}var nn=at(Rt()),Xc=at(Rt()),yE=at(Rt()),TE={now:function(){var t=yE.default.performance,e=t&&t.timing,i=e&&e.navigationStart,a=typeof i=="number"&&typeof t.now=="function"?i+t.now():Date.now();return Math.round(a)}},Ae=TE,En=function(){var t,e,i;if(typeof((t=Xc.default.crypto)===null||t===void 0?void 0:t.getRandomValues)=="function"){i=new Uint8Array(32),Xc.default.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var c=l==="x"?i[n]:i[n]&3|8;return n++,c.toString(16)});var s=Ae.now(),o=s==null?void 0:s.toString(16).substring(3);return o?e.substring(0,28)+o:e},Vm=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},bt=function(t){if(t&&typeof t.nodeName<"u")return t.muxId||(t.muxId=Vm()),t.muxId;var e;try{e=document.querySelector(t)}catch{}return e&&!e.muxId&&(e.muxId=t),(e==null?void 0:e.muxId)||t},_o=function(t){var e;t&&typeof t.nodeName<"u"?(e=t,t=bt(e)):e=document.querySelector(t);var i=e&&e.nodeName?e.nodeName.toLowerCase():"";return[e,t,i]};function AE(t){if(Array.isArray(t))return Gl(t)}function kE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function SE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(t){return AE(t)||kE(t)||Km(t)||SE()}var Xi={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},wE=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=t?[console,t]:[console],l=(i=console.trace).bind.apply(i,gt(o)),c=(a=console.info).bind.apply(a,gt(o)),m=(r=console.debug).bind.apply(r,gt(o)),p=(n=console.warn).bind.apply(n,gt(o)),d=(s=console.error).bind.apply(s,gt(o)),u=e;return{trace:function(){for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];if(!(u>Xi.TRACE))return l.apply(void 0,gt(f))},debug:function(){for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];if(!(u>Xi.DEBUG))return m.apply(void 0,gt(f))},info:function(){for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];if(!(u>Xi.INFO))return c.apply(void 0,gt(f))},warn:function(){for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];if(!(u>Xi.WARN))return p.apply(void 0,gt(f))},error:function(){for(var v=arguments.length,f=new Array(v),b=0;b<v;b++)f[b]=arguments[b];if(!(u>Xi.ERROR))return d.apply(void 0,gt(f))},get level(){return u},set level(v){v!==this.level&&(u=v??e)}}},ae=wE("[mux]"),Al=at(Rt());function Ql(){var t=Al.default.doNotTrack||Al.default.navigator&&Al.default.navigator.doNotTrack;return t==="1"}function $(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}Ea();function Me(t,e){if(!fa(t,e))throw new TypeError("Cannot call a class as a function")}function Jc(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ei(t,e,i){return e&&Jc(t.prototype,e),i&&Jc(t,i),t}function I(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ur(t){return ur=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ur(t)}function IE(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=ur(t),t!==null););return t}function os(t,e,i){return typeof Reflect<"u"&&Reflect.get?os=Reflect.get:os=function(a,r,n){var s=IE(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},os(t,e,i||t)}function zl(t,e){return zl=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},zl(t,e)}function RE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&zl(t,e)}function CE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Pm();function LE(t,e){return e&&(Nm(e)==="object"||typeof e=="function")?e:$(t)}function DE(t){var e=CE();return function(){var i=ur(t),a;if(e){var r=ur(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return LE(this,a)}}var St=function(t){return _n(t)[0]},_n=function(t){if(typeof t!="string"||t==="")return["localhost"];var e=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,i=t.match(e)||[],a=i[4],r;return a&&(r=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,r]},kl=at(Rt()),ME={exists:function(){var t=kl.default.performance,e=t&&t.timing;return e!==void 0},domContentLoadedEventEnd:function(){var t=kl.default.performance,e=t&&t.timing;return e&&e.domContentLoadedEventEnd},navigationStart:function(){var t=kl.default.performance,e=t&&t.timing;return e&&e.navigationStart}},bo=ME;function Te(t,e,i){i=i===void 0?1:i,t[e]=t[e]||0,t[e]+=i}function go(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){I(t,r,i[r])})}return t}function xE(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,a)}return i}function mu(t,e){return e=e??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):xE(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}),t}var OE=["x-cdn","content-type"],qm=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],NE=OE.concat(qm);function pu(t){t=t||"";var e={},i=t.trim().split(/[\r\n]+/);return i.forEach(function(a){if(a){var r=a.split(": "),n=r.shift();n&&(NE.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(e[n]=r.join(": "))}}),e}function yo(t){if(t){var e=qm.find(function(i){return t[i]!==void 0});return e?t[e]:void 0}}var PE=function(t){var e={};for(var i in t){var a=t[i],r=a["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=a["DATA-ID"].replace("io.litix.data.","");e[n]=a.VALUE}}return e},Ym=PE,Fn=function(t){if(!t)return{};var e=bo.navigationStart(),i=t.loading,a=i?i.start:t.trequest,r=i?i.first:t.tfirst,n=i?i.end:t.tload;return{bytesLoaded:t.total,requestStart:Math.round(e+a),responseStart:Math.round(e+r),responseEnd:Math.round(e+n)}},Ar=function(t){if(!(!t||typeof t.getAllResponseHeaders!="function"))return pu(t.getAllResponseHeaders())},$E=function(t,e,i){var a=arguments.length>4?arguments[4]:void 0,r=t.log,n=t.utils.secondsToMs,s=function(b){var y=parseInt(a.version),T;return y===1&&b.programDateTime!==null&&(T=b.programDateTime),y===0&&b.pdt!==null&&(T=b.pdt),T};if(!bo.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(b,y){return t.emit(e,b,y)},l=function(b,y){var T=y.levels,_=y.audioTracks,S=y.url,L=y.stats,P=y.networkDetails,H=y.sessionData,z={},ie={};T.forEach(function(fe,Be){z[Be]={width:fe.width,height:fe.height,bitrate:fe.bitrate,attrs:fe.attrs}}),_.forEach(function(fe,Be){ie[Be]={name:fe.name,language:fe.lang,bitrate:fe.bitrate}});var V=Fn(L),U=V.bytesLoaded,Pe=V.requestStart,Ye=V.responseStart,Ge=V.responseEnd;o("requestcompleted",mu(go({},Ym(H)),{request_event_type:b,request_bytes_loaded:U,request_start:Pe,request_response_start:Ye,request_response_end:Ge,request_type:"manifest",request_hostname:St(S),request_response_headers:Ar(P),request_rendition_lists:{media:z,audio:ie,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var c=function(b,y){var T=y.details,_=y.level,S=y.networkDetails,L=y.stats,P=Fn(L),H=P.bytesLoaded,z=P.requestStart,ie=P.responseStart,V=P.responseEnd,U=T.fragments[T.fragments.length-1],Pe=s(U)+n(U.duration);o("requestcompleted",{request_event_type:b,request_bytes_loaded:H,request_start:z,request_response_start:ie,request_response_end:V,request_current_level:_,request_type:"manifest",request_hostname:St(T.url),request_response_headers:Ar(S),video_holdback:T.holdBack&&n(T.holdBack),video_part_holdback:T.partHoldBack&&n(T.partHoldBack),video_part_target_duration:T.partTarget&&n(T.partTarget),video_target_duration:T.targetduration&&n(T.targetduration),video_source_is_live:T.live,player_manifest_newest_program_time:isNaN(Pe)?void 0:Pe})};i.on(a.Events.LEVEL_LOADED,c);var m=function(b,y){var T=y.details,_=y.networkDetails,S=y.stats,L=Fn(S),P=L.bytesLoaded,H=L.requestStart,z=L.responseStart,ie=L.responseEnd;o("requestcompleted",{request_event_type:b,request_bytes_loaded:P,request_start:H,request_response_start:z,request_response_end:ie,request_type:"manifest",request_hostname:St(T.url),request_response_headers:Ar(_)})};i.on(a.Events.AUDIO_TRACK_LOADED,m);var p=function(b,y){var T=y.stats,_=y.networkDetails,S=y.frag;T=T||S.stats;var L=Fn(T),P=L.bytesLoaded,H=L.requestStart,z=L.responseStart,ie=L.responseEnd,V=_?Ar(_):void 0,U={request_event_type:b,request_bytes_loaded:P,request_start:H,request_response_start:z,request_response_end:ie,request_hostname:_?St(_.responseURL):void 0,request_id:V?yo(V):void 0,request_response_headers:V,request_media_duration:S.duration,request_url:_==null?void 0:_.responseURL};S.type==="main"?(U.request_type="media",U.request_current_level=S.level,U.request_video_width=(i.levels[S.level]||{}).width,U.request_video_height=(i.levels[S.level]||{}).height,U.request_labeled_bitrate=(i.levels[S.level]||{}).bitrate):U.request_type=S.type,o("requestcompleted",U)};i.on(a.Events.FRAG_LOADED,p);var d=function(b,y){var T=y.frag,_=T.start,S=s(T),L={currentFragmentPDT:S,currentFragmentStart:n(_)};o("fragmentchange",L)};i.on(a.Events.FRAG_CHANGED,d);var u=function(b,y){var T=y.type,_=y.details,S=y.response,L=y.fatal,P=y.frag,H=y.networkDetails,z=(P==null?void 0:P.url)||y.url||"",ie=H?Ar(H):void 0;if((_===a.ErrorDetails.MANIFEST_LOAD_ERROR||_===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||_===a.ErrorDetails.FRAG_LOAD_ERROR||_===a.ErrorDetails.FRAG_LOAD_TIMEOUT||_===a.ErrorDetails.LEVEL_LOAD_ERROR||_===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||_===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||_===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||_===a.ErrorDetails.SUBTITLE_LOAD_ERROR||_===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||_===a.ErrorDetails.KEY_LOAD_ERROR||_===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:_,request_url:z,request_hostname:St(z),request_id:ie?yo(ie):void 0,request_type:_===a.ErrorDetails.FRAG_LOAD_ERROR||_===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":_===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||_===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":_===a.ErrorDetails.SUBTITLE_LOAD_ERROR||_===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":_===a.ErrorDetails.KEY_LOAD_ERROR||_===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:S==null?void 0:S.code,request_error_text:S==null?void 0:S.text}),L){var V,U="".concat(z?"url: ".concat(z,`
`):"")+"".concat(S&&(S.code||S.text)?"response: ".concat(S.code,", ").concat(S.text,`
`):"")+"".concat(y.reason?"failure reason: ".concat(y.reason,`
`):"")+"".concat(y.level?"level: ".concat(y.level,`
`):"")+"".concat(y.parent?"parent stream controller: ".concat(y.parent,`
`):"")+"".concat(y.buffer?"buffer length: ".concat(y.buffer,`
`):"")+"".concat(y.error?"error: ".concat(y.error,`
`):"")+"".concat(y.event?"event: ".concat(y.event,`
`):"")+"".concat(y.err?"error message: ".concat((V=y.err)===null||V===void 0?void 0:V.message,`
`):"");o("error",{player_error_code:T,player_error_message:_,player_error_context:U})}};i.on(a.Events.ERROR,u);var v=function(b,y){var T=y.frag,_=T&&T._url||"";o("requestcanceled",{request_event_type:b,request_url:_,request_type:"media",request_hostname:St(_)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var f=function(b,y){var T=y.level,_=i.levels[T];if(_&&_.attrs&&_.attrs.BANDWIDTH){var S=_.attrs.BANDWIDTH,L,P=parseFloat(_.attrs["FRAME-RATE"]);isNaN(P)||(L=P),S?o("renditionchange",{video_source_fps:L,video_source_bitrate:S,video_source_width:_.width,video_source_height:_.height,video_source_rendition_name:_.name,video_source_codec:_==null?void 0:_.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,f),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,c),i.off(a.Events.AUDIO_TRACK_LOADED,m),i.off(a.Events.FRAG_LOADED,p),i.off(a.Events.FRAG_CHANGED,d),i.off(a.Events.ERROR,u),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,f),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},UE=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},eh=function(t,e){if(!t||!t.requestEndDate)return{};var i=St(t.url),a=t.url,r=t.bytesLoaded,n=new Date(t.requestStartDate).getTime(),s=new Date(t.firstByteDate).getTime(),o=new Date(t.requestEndDate).getTime(),l=isNaN(t.duration)?0:t.duration,c=typeof e.getMetricsFor=="function"?e.getMetricsFor(t.mediaType).HttpList:e.getDashMetrics().getHttpRequests(t.mediaType),m;c.length>0&&(m=pu(c[c.length-1]._responseHeaders||""));var p=m?yo(m):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:m,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:p}},HE=function(t,e){var i=e.getQualityFor(t),a=e.getCurrentTrackFor(t).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},BE=function(t){var e;return(e=t.match(/.*codecs\*?="(.*)"/))===null||e===void 0?void 0:e[1]},WE=function(t){try{var e,i,a=(i=t.getVersion)===null||i===void 0||(e=i.call(t))===null||e===void 0?void 0:e.split(".").map(function(r){return parseInt(r)})[0];return a}catch{return!1}},FE=function(t,e,i){var a=t.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=WE(i),n=function(T,_){return t.emit(e,T,_)},s=function(T){var _=T.type,S=T.data,L=(S||{}).url;n("requestcompleted",{request_event_type:_,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:St(L),request_url:L})};i.on("manifestLoaded",s);var o={},l=function(T){if(typeof T.getRequests!="function")return null;var _=T.getRequests({state:"executed"});return _.length===0?null:_[_.length-1]},c=function(T){var _=T.type,S=T.fragmentModel,L=T.chunk,P=l(S);m({type:_,request:P,chunk:L})},m=function(T){var _=T.type,S=T.chunk,L=T.request,P=(S||{}).mediaInfo,H=P||{},z=H.type,ie=H.bitrateList;ie=ie||[];var V={};ie.forEach(function(Qe,Re){V[Re]={},V[Re].width=Qe.width,V[Re].height=Qe.height,V[Re].bitrate=Qe.bandwidth,V[Re].attrs={}}),z==="video"?o.video=V:z==="audio"?o.audio=V:o.media=V;var U=eh(L,i),Pe=U.requestStart,Ye=U.requestResponseStart,Ge=U.requestResponseEnd,fe=U.requestResponseHeaders,Be=U.requestMediaDuration,Ct=U.requestHostname,We=U.requestUrl,ft=U.requestId;n("requestcompleted",{request_event_type:_,request_start:Pe,request_response_start:Ye,request_response_end:Ge,request_bytes_loaded:-1,request_type:z+"_init",request_response_headers:fe,request_hostname:Ct,request_id:ft,request_url:We,request_media_duration:Be,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",m):i.on("initFragmentLoaded",c);var p=function(T){var _=T.type,S=T.fragmentModel,L=T.chunk,P=l(S);d({type:_,request:P,chunk:L})},d=function(T){var _=T.type,S=T.chunk,L=T.request,P=S||{},H=P.mediaInfo,z=P.start,ie=H||{},V=ie.type,U=eh(L,i),Pe=U.requestStart,Ye=U.requestResponseStart,Ge=U.requestResponseEnd,fe=U.requestBytesLoaded,Be=U.requestResponseHeaders,Ct=U.requestMediaDuration,We=U.requestHostname,ft=U.requestUrl,Qe=U.requestId,Re=HE(V,i),$e=Re.currentLevel,nt=Re.renditionWidth,_a=Re.renditionHeight,Un=Re.renditionBitrate;n("requestcompleted",{request_event_type:_,request_start:Pe,request_response_start:Ye,request_response_end:Ge,request_bytes_loaded:fe,request_type:V,request_response_headers:Be,request_hostname:We,request_id:Qe,request_url:ft,request_media_start_time:z,request_media_duration:Ct,request_current_level:$e,request_labeled_bitrate:Un,request_video_width:nt,request_video_height:_a})};r>=4?i.on("mediaFragmentLoaded",d):i.on("mediaFragmentLoaded",p);var u={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(u.video&&typeof u.video.bitrate=="number"){if(!(u.video.width&&u.video.height)){a.warn("have bitrate info for video but missing width/height");return}var T=u.video.bitrate;if(u.audio&&typeof u.audio.bitrate=="number"&&(T+=u.audio.bitrate),T!==u.totalBitrate)return u.totalBitrate=T,{video_source_bitrate:T,video_source_height:u.video.height,video_source_width:u.video.width,video_source_codec:BE(u.video.codec)}}},f=function(T,_,S){if(typeof T.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",T);return}var L=T.mediaType;if(L==="audio"||L==="video"){var P=i.getBitrateInfoListFor(L).find(function(z){var ie=z.qualityIndex;return ie===T.newQuality});if(!(P&&typeof P.bitrate=="number")){a.warn("missing bitrate info for ".concat(L));return}u[L]=mu(go({},P),{codec:i.getCurrentTrackFor(L).codec});var H=v();H&&n("renditionchange",H)}};i.on("qualityChangeRendered",f);var b=function(T){var _=T.request,S=T.mediaType;_=_||{},n("requestcanceled",{request_event_type:_.type+"_"+_.action,request_url:_.url,request_type:S,request_hostname:St(_.url)})};i.on("fragmentLoadingAbandoned",b);var y=function(T){var _=T.error,S,L,P=(_==null||(S=_.data)===null||S===void 0?void 0:S.request)||{},H=(_==null||(L=_.data)===null||L===void 0?void 0:L.response)||{};(_==null?void 0:_.code)===27&&n("requestfailed",{request_error:P.type+"_"+P.action,request_url:P.url,request_hostname:St(P.url),request_type:P.mediaType,request_error_code:H.status,request_error_text:H.statusText});var z="".concat(P!=null&&P.url?"url: ".concat(P.url,`
`):"")+"".concat(H!=null&&H.status||H!=null&&H.statusText?"response: ".concat(H==null?void 0:H.status,", ").concat(H==null?void 0:H.statusText,`
`):"");n("error",{player_error_code:_==null?void 0:_.code,player_error_message:_==null?void 0:_.message,player_error_context:z})};i.on("error",y),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",m),i.off("mediaFragmentLoaded",d),i.off("qualityChangeRendered",f),i.off("error",y),i.off("fragmentLoadingAbandoned",b),delete i._stopMuxMonitor}},KE=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},th=0,VE=function(){function t(){Me(this,t),I(this,"_listeners",void 0)}return ei(t,[{key:"on",value:function(e,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++th,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],a&&(i=i.bind(a)),this._listeners[e].push(i),i}},{key:"off",value:function(e,i){var a=this._listeners&&this._listeners[e];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(e,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++th;var n=function(){r.off(e,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(e,n)}},{key:"emit",value:function(e,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(l,c){l=l.slice(),l.forEach(function(m){m.call(a,{type:e},c)})};o(r,i),o(n,i),o(s,i)}}}]),t}(),qE=VE,Sl=at(Rt()),YE=function(){function t(e){var i=this;Me(this,t),I(this,"_playbackHeartbeatInterval",void 0),I(this,"_playheadShouldBeProgressing",void 0),I(this,"pm",void 0),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(Sl.default.clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return ei(t,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=Sl.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(Sl.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),t}(),GE=YE,QE=function t(e){var i=this;Me(this,t),I(this,"viewErrored",void 0),e.on("viewinit",function(){i.viewErrored=!1}),e.on("error",function(a,r){try{var n=e.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(e.data.player_error_code=n.player_error_code||r.player_error_code,e.data.player_error_message=n.player_error_message||r.player_error_message,e.data.player_error_context=n.player_error_context||r.player_error_context,e.data.player_error_severity=n.player_error_severity||r.player_error_severity,e.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){e.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),e.on("aftererror",function(){var a,r,n,s,o;(a=e.data)===null||a===void 0||delete a.player_error_code,(r=e.data)===null||r===void 0||delete r.player_error_message,(n=e.data)===null||n===void 0||delete n.player_error_context,(s=e.data)===null||s===void 0||delete s.player_error_severity,(o=e.data)===null||o===void 0||delete o.player_error_business_exception})},zE=QE,ZE=function(){function t(e){Me(this,t),I(this,"_watchTimeTrackerLastCheckedTime",void 0),I(this,"pm",void 0),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return ei(t,[{key:"_updateWatchTime",value:function(e,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),Te(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(e,i){this._updateWatchTime(e,i),this._watchTimeTrackerLastCheckedTime=null}}]),t}(),jE=ZE,XE=function(){function t(e){var i=this;Me(this,t),I(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),I(this,"_lastTime",void 0),I(this,"_isAdPlaying",void 0),I(this,"_callbackUpdatePlaybackTime",void 0),I(this,"pm",void 0),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Ae.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a),e.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",r),e.on("seeking",r),e.on("adplaying",function(){i._isAdPlaying=!0}),e.on("adended",function(){i._isAdPlaying=!1}),e.on("adpause",function(){i._isAdPlaying=!1}),e.on("adbreakstart",function(){i._isAdPlaying=!1}),e.on("adbreakend",function(){i._isAdPlaying=!1}),e.on("adplay",function(){i._isAdPlaying=!1}),e.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Ae.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return ei(t,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,i=Ae.now(),a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i-this._lastTime),a>0&&a<=1e3&&Te(this.pm.data,"view_content_playback_time",a),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=i}}]),t}(),JE=XE,e_=function(){function t(e){Me(this,t),I(this,"pm",void 0),this.pm=e;var i=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",i),e.on("playbackheartbeatend",i),e.on("timeupdate",i),e.on("destroy",function(){e.off("timeupdate",i)})}return ei(t,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),t}(),t_=e_,ih=5*60*1e3,i_=function t(e){if(Me(this,t),!e.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;Te(e.data,"view_rebuffer_duration",s),i=n.viewer_time,e.data.view_rebuffer_duration>ih&&(e.emit("viewend"),e.send("viewend"),e.mux.log.warn("Ending view after rebuffering for longer than ".concat(ih,"ms, future events will be ignored unless a programchange or videochange occurs.")))}e.data.view_watch_time>=0&&e.data.view_rebuffer_count>0&&(e.data.view_rebuffer_frequency=e.data.view_rebuffer_count/e.data.view_watch_time,e.data.view_rebuffer_percentage=e.data.view_rebuffer_duration/e.data.view_watch_time)};e.on("playbackheartbeat",function(n,s){return r(s)}),e.on("rebufferstart",function(n,s){i||(Te(e.data,"view_rebuffer_count",1),i=s.viewer_time,e.one("rebufferend",a))}),e.on("viewinit",function(){i=void 0,e.off("rebufferend",a)})}},a_=i_,r_=function(){function t(e){var i=this;Me(this,t),I(this,"_lastCheckedTime",void 0),I(this,"_lastPlayheadTime",void 0),I(this,"_lastPlayheadTimeUpdatedTime",void 0),I(this,"_rebuffering",void 0),I(this,"pm",void 0),this.pm=e,!(e.disableRebufferTracking||e.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Ae.now()})}))}return ei(t,[{key:"_checkIfRebuffering",value:function(e,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),t}(),n_=r_,s_=function(){function t(e){var i=this;Me(this,t),I(this,"NAVIGATION_START",void 0),I(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){var a=e.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof e.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof e.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||Ae.now(),r)};e.one("playing",n),e.one("adplaying",n),e.one("viewend",function(){e.off("playing",n),e.off("adplaying",n)})}})}return ei(t,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),t}(),o_=s_,l_=function t(e){var i=this;Me(this,t),I(this,"_lastPlayerHeight",void 0),I(this,"_lastPlayerWidth",void 0),I(this,"_lastPlayheadPosition",void 0),I(this,"_lastSourceHeight",void 0),I(this,"_lastSourceWidth",void 0),e.on("viewinit",function(){i._lastPlayheadPosition=-1});var a=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"],r=["playing","hb","renditionchange","orientationchange"];a.forEach(function(n){e.on(n,function(){if(i._lastPlayheadPosition>=0&&e.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var s=e.data.player_playhead_time-i._lastPlayheadPosition;if(s<0){i._lastPlayheadPosition=-1;return}var o=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),l=Math.max(0,o-1),c=Math.max(0,1-o);e.data.view_max_upscale_percentage=Math.max(e.data.view_max_upscale_percentage||0,l),e.data.view_max_downscale_percentage=Math.max(e.data.view_max_downscale_percentage||0,c),Te(e.data,"view_total_content_playback_time",s),Te(e.data,"view_total_upscaling",l*s),Te(e.data,"view_total_downscaling",c*s)}i._lastPlayheadPosition=-1})}),r.forEach(function(n){e.on(n,function(){i._lastPlayheadPosition=e.data.player_playhead_time,i._lastPlayerWidth=e.data.player_width,i._lastPlayerHeight=e.data.player_height,i._lastSourceWidth=e.data.video_source_width,i._lastSourceHeight=e.data.video_source_height})})},d_=l_,u_=2e3,c_=function t(e){var i=this;Me(this,t),I(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=Ae.now(),s=(e.data.viewer_time||n)-(a||n);Te(e.data,"view_seek_duration",s),e.data.view_max_seek_time=Math.max(e.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};e.on("seeking",function(n,s){if(Object.assign(e.data,s),i.isSeeking&&s.viewer_time-a<=u_){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,Te(e.data,"view_seek_count",1),e.send("seeking")}),e.on("seeked",function(){r()}),e.on("viewend",function(){i.isSeeking&&(r(),e.send("seeked")),i.isSeeking=!1,a=-1})},h_=c_,ah=function(t,e){t.push(e),t.sort(function(i,a){return i.viewer_time-a.viewer_time})},m_=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],p_=function(){function t(e){var i=this;Me(this,t),I(this,"_adHasPlayed",void 0),I(this,"_adRequests",void 0),I(this,"_adResponses",void 0),I(this,"_currentAdRequestNumber",void 0),I(this,"_currentAdResponseNumber",void 0),I(this,"_prerollPlayTime",void 0),I(this,"_wouldBeNewAdPlay",void 0),I(this,"isAdBreak",void 0),I(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),m_.forEach(function(r){return e.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};e.on("adbreakstart",function(){i.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),ah(i._adRequests,n),Te(e.data,"view_ad_request_count"),i.inPrerollPosition()&&(e.data.view_preroll_requested=!0,i._adHasPlayed||Te(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),ah(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&Te(e.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),e.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,Te(e.data,"view_ad_played_count")),i.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,i._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-e.data.view_start)),i._prerollPlayTime=n.viewer_time)}),e.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof e.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(e.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,e.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),e.on("adclicked",function(r,n){i._wouldBeNewAdPlay||Te(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(r,n){i._wouldBeNewAdPlay||Te(e.data,"view_ad_skipped_count")}),e.on("adended",function(){i._wouldBeNewAdPlay=!0}),e.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return ei(t,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===e)return this._adRequests[i]}},{key:"_updateAdData",value:function(e,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=hi(_n(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=hi(_n(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}}this.pm.data.ad_asset_url=i==null?void 0:i.ad_asset_url,this.pm.data.ad_tag_url=i==null?void 0:i.ad_tag_url,this.pm.data.ad_creative_id=i==null?void 0:i.ad_creative_id,this.pm.data.ad_id=i==null?void 0:i.ad_id,this.pm.data.ad_universal_id=i==null?void 0:i.ad_universal_id}}]),t}(),v_=p_,rh=at(Rt()),f_=function t(e){Me(this,t);var i,a,r=function(){e.disableRebufferTracking||(Te(e.data,"view_waiting_rebuffer_count",1),i=Ae.now(),a=rh.default.setInterval(function(){if(i){var c=Ae.now();Te(e.data,"view_waiting_rebuffer_duration",c-i),i=c}},250))},n=function(){e.disableRebufferTracking||i&&(Te(e.data,"view_waiting_rebuffer_duration",Ae.now()-i),i=!1,rh.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};e.on("waiting",function(){s&&r()}),e.on("playing",function(){n(),o()}),e.on("pause",l),e.on("seeking",l)},E_=f_,__=function t(e){var i=this;Me(this,t),I(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Ae.now(),e.on("before*",r)},r=function(n){var s=Ae.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(e.emit("devicesleep",{viewer_time:o}),Object.assign(e.data,{viewer_time:o}),e.send("devicesleep"),e.emit("devicewake",{viewer_time:s}),Object.assign(e.data,{viewer_time:s}),e.send("devicewake"))};e.one("playbackheartbeat",a),e.on("playbackheartbeatend",function(){e.off("before*",r),e.one("playbackheartbeat",a)})},b_=__,wl=at(Rt()),Gm=function(t){return t()}(function(){var t=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function e(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=t({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var c=document.cookie?document.cookie.split("; "):[],m=/(%[0-9A-Z]{2})+/g,p=0;p<c.length;p++){var d=c[p].split("="),u=d.slice(1).join("=");u.charAt(0)==='"'&&(u=u.slice(1,-1));try{var v=d[0].replace(m,decodeURIComponent);if(u=i.read?i.read(u,v):i(u,v)||u.replace(m,decodeURIComponent),this.json)try{u=JSON.parse(u)}catch{}if(r===v){o=u;break}r||(o[v]=u)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",t(n,{expires:-1}))},a.withConverter=e,a}return e(function(){})}),Qm="muxData",g_=function(t){return Object.entries(t).map(function(e){var i=hi(e,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},y_=function(t){return t.split("&").reduce(function(e,i){var a=hi(i.split("="),2),r=a[0],n=a[1],s=+n,o=n&&s==n?s:n;return e[r]=o,e},{})},zm=function(){var t;try{t=y_(Gm.get(Qm)||"")}catch{t={}}return t},Zm=function(t){try{Gm.set(Qm,g_(t),{expires:365})}catch{}},T_=function(){var t=zm();return t.mux_viewer_id=t.mux_viewer_id||En(),t.msn=t.msn||Math.random(),Zm(t),{mux_viewer_id:t.mux_viewer_id,mux_sample_number:t.msn}},A_=function(){var t=zm(),e=Ae.now();return t.session_start&&(t.sst=t.session_start,delete t.session_start),t.session_id&&(t.sid=t.session_id,delete t.session_id),t.session_expires&&(t.sex=t.session_expires,delete t.session_expires),(!t.sex||t.sex<e)&&(t.sid=En(),t.sst=e),t.sex=e+25*60*1e3,Zm(t),{session_id:t.sid,session_start:t.sst,session_expires:t.sex}};function k_(t,e){var i=e.beaconCollectionDomain,a=e.beaconDomain;if(i)return"https://"+i;t=t||"inferred";var r=a||"litix.io";return t.match(/^[a-z0-9]+$/)?"https://"+t+"."+r:"https://img.litix.io/a.gif"}var S_=at(Rt()),jm=function(){var t;switch(Xm()){case"cellular":t="cellular";break;case"ethernet":t="wired";break;case"wifi":t="wifi";break;case void 0:break;default:t="other"}return t},Xm=function(){var t=S_.default.navigator,e=t&&(t.connection||t.mozConnection||t.webkitConnection);return e&&e.type};jm.getConnectionFromAPI=Xm;var w_=jm,I_={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},R_=Jm(I_),C_={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},nh=Jm(C_);function Jm(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[t[i]]=i);return e}function Zl(t){var e={},i={};return Object.keys(t).forEach(function(a){var r=!1;if(t.hasOwnProperty(a)&&t[a]!==void 0){var n=a.split("_"),s=n[0],o=R_[s];o||(ae.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),nh[l]?o+=nh[l]:Number.isInteger(Number(l))?o+=l:(ae.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=t[a]:e[o]=t[a]}}),Object.assign(e,i)}var ea=at(Rt()),L_=at(Fm()),D_={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},M_=56*1024,x_=["hb","requestcompleted","requestfailed","requestcanceled"],O_="https://img.litix.io",pi=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=t||O_,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},D_,e)};pi.prototype.queueEvent=function(t,e){var i=Object.assign({},e);return this._eventQueue.length<=this._options.maxQueueLength||t==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};pi.prototype.flushEvents=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(t&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};pi.prototype.destroy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,t?this._clearBeaconQueue():this.flushEvents(),ea.default.clearTimeout(this._sendTimeout)};pi.prototype._clearBeaconQueue=function(){var t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,e=this._eventQueue.slice(t);t>0&&Object.assign(e[e.length-1],Zl({mux_view_message:"event queue truncated"}));var i=this._createPayload(e);ep(this._beaconUrl,i,!0,function(){})};pi.prototype._sendBeaconQueue=function(){var t=this;if(this._postInFlight){this._resendAfterPost=!0;return}var e=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(e),a=Ae.now();ep(this._beaconUrl,i,!1,function(r,n){n?(t._eventQueue=e.concat(t._eventQueue),t._failureCount+=1,ae.info("Error sending beacon: "+n)):t._failureCount=0,t._roundTripTime=Ae.now()-a,t._postInFlight=!1,t._resendAfterPost&&(t._resendAfterPost=!1,t._eventQueue.length>0&&t._sendBeaconQueue())})};pi.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var t=Math.pow(2,this._failureCount-1);return t=t*Math.random(),(1+t)*this._options.baseTimeBetweenBeacons};pi.prototype._startBeaconSending=function(){var t=this;ea.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=ea.default.setTimeout(function(){t._eventQueue.length&&t._sendBeaconQueue(),t._startBeaconSending()},this._getNextBeaconTime()))};pi.prototype._createPayload=function(t){var e=this,i={transmission_timestamp:Math.round(Ae.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||t}),n=a.length/1024},o=function(){return n<=e._options.maxPayloadKBSize};return s(),o()||(ae.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=t.filter(function(l){return x_.indexOf(l.e)===-1}),s()),o()||(ae.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var c in l){var m=l[c],p=50*1024;typeof m=="string"&&m.length>p&&(l[c]=m.substring(0,p))}}),s()),a};var N_=typeof L_.default.exitPictureInPicture=="function"?function(t){return t.length<=M_}:function(t){return!1},ep=function(t,e,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(t,e)){a();return}if(ea.default.fetch){ea.default.fetch(t,{method:"POST",body:e,headers:{"Content-Type":"text/plain"},keepalive:N_(e)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(ea.default.XMLHttpRequest){var r=new ea.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",t),r.setRequestHeader("Content-Type","text/plain"),r.send(e);return}a()},P_=pi,$_=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],U_=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],H_=["ad_id","ad_creative_id","ad_universal_id"],B_=["viewstart","error","ended","viewend"],W_=10*60*1e3,F_=function(){function t(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Me(this,t);var r,n,s,o,l,c,m,p,d,u,v,f;I(this,"mux",void 0),I(this,"envKey",void 0),I(this,"options",void 0),I(this,"eventQueue",void 0),I(this,"sampleRate",void 0),I(this,"disableCookies",void 0),I(this,"respectDoNotTrack",void 0),I(this,"previousBeaconData",void 0),I(this,"lastEventTime",void 0),I(this,"rateLimited",void 0),I(this,"pageLevelData",void 0),I(this,"viewerData",void 0),this.mux=e,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new P_(k_(this.envKey,this.options));var b;this.sampleRate=(b=this.options.sampleRate)!==null&&b!==void 0?b:1;var y;this.disableCookies=(y=this.options.disableCookies)!==null&&y!==void 0?y:!1;var T;this.respectDoNotTrack=(T=this.options.respectDoNotTrack)!==null&&T!==void 0?T:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(m=this.options.platform)===null||m===void 0||(c=m.os)===null||c===void 0?void 0:c.family,viewer_os_architecture:(d=this.options.platform)===null||d===void 0||(p=d.os)===null||p===void 0?void 0:p.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(u=v.os)===null||u===void 0?void 0:u.version,viewer_connection_type:w_(),page_url:wl.default===null||wl.default===void 0||(f=wl.default.location)===null||f===void 0?void 0:f.href},this.viewerData=this.disableCookies?{}:T_()}return ei(t,[{key:"send",value:function(e,i){if(!(!e||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&Ql())return ae.info("Not sending `"+e+"` because Do Not Track is enabled");if(!i||typeof i!="object")return ae.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:A_(),r=mu(go({},this.pageLevelData,i,a,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=this._deduplicateBeaconData(e,r),l=Zl(o);if(this.lastEventTime=this.mux.utils.now(),s)return ae.info("Not sending event due to sample rate restriction",e,r,l);if(this.envKey||ae.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,r,l),!this.rateLimited){if(ae.info("Sending event",e,r,l),this.rateLimited=!this.eventQueue.queueEvent(e,l),this.mux.WINDOW_UNLOADING&&e==="viewend")this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&e==="hb"?this.eventQueue.flushEvents(!0):B_.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return r.event="eventrateexceeded",l=Zl(r),this.eventQueue.queueEvent(r.event,l),ae.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,i){var a=this,r={},n=i.view_id;if(n==="-1"||e==="viewstart"||e==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=W_)r=go({},i),n&&(this.previousBeaconData=r),n&&e==="viewend"&&(this.previousBeaconData=null);else{var s=e.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=hi(o,2),c=l[0],m=l[1];a.previousBeaconData&&(m!==a.previousBeaconData[c]||$_.indexOf(c)>-1||a.objectHasChanged(s,c,m,a.previousBeaconData[c])||a.eventRequiresKey(e,c))&&(r[c]=m,a.previousBeaconData[c]=m)})}return r}},{key:"objectHasChanged",value:function(e,i,a,r){return!e||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(e,i){return!!(e==="renditionchange"&&i.indexOf("video_source_")===0||H_.includes(i)&&U_.includes(e))}}]),t}(),K_=function t(e){Me(this,t);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,c=function(d,u){var v=u.request_start,f=u.request_response_start,b=u.request_response_end,y=u.request_bytes_loaded;n++;var T,_;if(f?(T=f-(v??0),_=(b??0)-f):_=(b??0)-(v??0),_>0&&y&&y>0){var S=y/_*8e3;s++,a+=y,r+=_,e.data.view_min_request_throughput=Math.min(e.data.view_min_request_throughput||1/0,S),e.data.view_average_request_throughput=a/r*8e3,e.data.view_request_count=n,T>0&&(i+=T,e.data.view_max_request_latency=Math.max(e.data.view_max_request_latency||0,T),e.data.view_average_request_latency=i/s)}},m=function(d,u){n++,o++,e.data.view_request_count=n,e.data.view_request_failed_count=o},p=function(d,u){n++,l++,e.data.view_request_count=n,e.data.view_request_canceled_count=l};e.on("requestcompleted",c),e.on("requestfailed",m),e.on("requestcanceled",p)},V_=K_,q_=60*60*1e3,Y_=function t(e){var i=this;Me(this,t),I(this,"_lastEventTime",void 0),e.on("before*",function(a,r){var n=r.viewer_time,s=Ae.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>q_){var l=Object.keys(e.data).reduce(function(m,p){return p.indexOf("video_")===0?Object.assign(m,I({},p,e.data[p])):m},{});e.mux.log.info("Received event after at least an hour inactivity, creating a new view");var c=e.playbackHeartbeat._playheadShouldBeProgressing;e._resetView(Object.assign({viewer_time:n},l)),e.playbackHeartbeat._playheadShouldBeProgressing=c,e.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(e.emit("play",{viewer_time:n}),a.type!=="playing"&&e.emit("playing",{viewer_time:n}))}})},G_=Y_,Q_=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],z_=new Set(["requestcompleted","requestfailed","requestcanceled"]),Z_=function(t){RE(i,t);var e=DE(i);function i(a,r,n){Me(this,i);var s;s=e.call(this),I($(s),"DOM_CONTENT_LOADED_EVENT_END",void 0),I($(s),"NAVIGATION_START",void 0),I($(s),"_destroyed",void 0),I($(s),"_heartBeatTimeout",void 0),I($(s),"adTracker",void 0),I($(s),"dashjs",void 0),I($(s),"data",void 0),I($(s),"disablePlayheadRebufferTracking",void 0),I($(s),"disableRebufferTracking",void 0),I($(s),"errorTracker",void 0),I($(s),"errorTranslator",void 0),I($(s),"emitTranslator",void 0),I($(s),"getAdData",void 0),I($(s),"getPlayheadTime",void 0),I($(s),"getStateData",void 0),I($(s),"stateDataTranslator",void 0),I($(s),"hlsjs",void 0),I($(s),"id",void 0),I($(s),"longResumeTracker",void 0),I($(s),"minimumRebufferDuration",void 0),I($(s),"mux",void 0),I($(s),"playbackEventDispatcher",void 0),I($(s),"playbackHeartbeat",void 0),I($(s),"playbackHeartbeatTime",void 0),I($(s),"playheadTime",void 0),I($(s),"seekingTracker",void 0),I($(s),"sustainedRebufferThreshold",void 0),I($(s),"watchTimeTracker",void 0),I($(s),"currentFragmentPDT",void 0),I($(s),"currentFragmentStart",void 0),s.DOM_CONTENT_LOADED_EVENT_END=bo.domContentLoadedEventEnd(),s.NAVIGATION_START=bo.navigationStart();var o={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(d){return d},emitTranslator:function(){for(var d=arguments.length,u=new Array(d),v=0;v<d;v++)u[v]=arguments[v];return u},stateDataTranslator:function(d){return d}};s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(o,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),ae.level=n.debug?Xi.DEBUG:Xi.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new F_(a,n.data.env_key,n),s.data={player_instance_id:En(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var l=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind($(s));if(s.on("viewinit",function(d,u){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,u),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)}),s.on("videochange",function(d,u){this._resetView(u)}),s.on("programchange",function(d,u){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(u,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(d,u){this.currentFragmentPDT=u.currentFragmentPDT,this.currentFragmentStart=u.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var c=function(){var d=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",d&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",c,!1);var m=function(d){d.persisted||s.destroy()};window.addEventListener("pagehide",m,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",c),window.removeEventListener("pagehide",m)})}s.on("playerready",function(d,u){Object.assign(this.data,u)}),Q_.forEach(function(d){s.on(d,function(u,v){d.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,v),this._sanitizeData()}),s.on("after"+d,function(){(d!=="error"||this.errorTracker.viewErrored)&&this.send(d)})}),s.on("viewend",function(d,u){Object.assign(s.data,u)});var p=function(d){var u=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=u-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",p),s.longResumeTracker=new G_($(s)),s.errorTracker=new zE($(s)),new b_($(s)),s.seekingTracker=new h_($(s)),s.playheadTime=new t_($(s)),s.playbackHeartbeat=new GE($(s)),new d_($(s)),s.watchTimeTracker=new jE($(s)),new JE($(s)),s.adTracker=new v_($(s)),new n_($(s)),new a_($(s)),new o_($(s)),new E_($(s)),new V_($(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return ei(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=os(ur(i.prototype),"emit",this)).call.apply(n,[this].concat(gt(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(c){r[c]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=hi(_n(r.video_source_url),2),o=s[0],l=s[1];r.video_source_domain=l,r.video_source_hostname=o}delete r.ad_request_id,this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,z_.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a=this.getStateData();if(typeof this.stateDataTranslator=="function")try{a=this.stateDataTranslator(a)}catch(r){this.mux.log.warn("Exception in stateDataTranslator translator callback.",r)}Object.assign(this.data,a),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var o=parseInt(a.data[s],10);a.data[s]=isNaN(o)?void 0:o});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(a.data[s]){var o=a.data[s].toLowerCase();(o.indexOf("data:")===0||o.indexOf("blob:")===0)&&(a.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=En(),n=function(){r===a.data.view_id&&Te(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,$E(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(UE(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,FE(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(KE(this.dashjs),this.dashjs=void 0)}}]),i}(qE),j_=Z_,kr=at(Fm());function X_(){return kr.default&&!!(kr.default.fullscreenElement||kr.default.webkitFullscreenElement||kr.default.mozFullScreenElement||kr.default.msFullscreenElement)}var J_=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],e0={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function t0(t,e,i){var a=hi(_o(e),3),r=a[0],n=a[1],s=a[2],o=t.log,l=t.utils.getComputedStyle,c=t.utils.secondsToMs,m={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners"));var p={getPlayheadTime:function(){return c(r.currentTime)},getStateData:function(){var u,v,f,b=((u=(v=this).getPlayheadTime)===null||u===void 0?void 0:u.call(v))||c(r.currentTime),y=this.hlsjs&&this.hlsjs.url,T=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),_={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:X_(),video_poster_url:r.poster,video_source_url:y||T||r.currentSrc,video_source_duration:c(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(f=r.getVideoPlaybackQuality)===null||f===void 0?void 0:f.call(r).droppedVideoFrames};if(r.getStartDate&&b>0){var S=r.getStartDate();if(S&&typeof S.getTime=="function"&&S.getTime()){var L=S.getTime();if(_.player_program_time=L+b,r.seekable.length>0){var P=L+r.seekable.end(r.seekable.length-1);_.player_live_edge_program_time=P}}}return _}};i=Object.assign(m,i,p),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:t.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(u,v){t.emit(n,u,v)},r.mux.updateData=function(u){r.mux.emit("hb",u)};var d=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(u){r.removeEventListener(u,r.mux.listeners[u],!1)}),delete r.mux.listeners,r.mux.destroy=d,r.mux.swapElement=d,r.mux.emit=d,r.mux.addHLSJS=d,r.mux.addDashJS=d,r.mux.removeHLSJS=d,r.mux.removeDashJS=d,r.mux.updateData=d,r.mux.setEmitTranslator=d,r.mux.setStateDataTranslator=d,r.mux.setGetPlayheadTime=d,r.mux.deleted=!0,t.emit(n,"destroy")},r.mux.swapElement=function(u){var v=hi(_o(u),3),f=v[0],b=v[1],y=v[2];if(f){if(y!=="video"&&y!=="audio")return t.log.error("The element of `"+b+"` was not a media element.")}else return t.log.error("No element was found with the `"+b+"` query selector.");f.muxId=r.muxId,delete r.muxId,f.mux=f.mux||{},f.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(f.mux.listeners).forEach(function(T){r.removeEventListener(T,f.mux.listeners[T],!1),f.addEventListener(T,f.mux.listeners[T],!1)}),f.mux.swapElement=r.mux.swapElement,f.mux.destroy=r.mux.destroy,delete r.mux,r=f},r.mux.addHLSJS=function(u){t.addHLSJS(n,u)},r.mux.addDashJS=function(u){t.addDashJS(n,u)},r.mux.removeHLSJS=function(){t.removeHLSJS(n)},r.mux.removeDashJS=function(){t.removeDashJS(n)},r.mux.setEmitTranslator=function(u){t.setEmitTranslator(n,u)},r.mux.setStateDataTranslator=function(u){t.setStateDataTranslator(n,u)},r.mux.setGetPlayheadTime=function(u){u||(u=i.getPlayheadTime),t.setGetPlayheadTime(n,u)},t.init(n,i),t.emit(n,"playerready"),r.paused||(t.emit(n,"play"),r.readyState>2&&t.emit(n,"playing")),r.mux.listeners={},J_.forEach(function(u){u==="error"&&!i.automaticErrorTracking||(r.mux.listeners[u]=function(){var v={};if(u==="error"){if(!r.error||r.error.code===1)return;v.player_error_code=r.error.code,v.player_error_message=e0[r.error.code]||r.error.message}t.emit(n,u,v)},r.addEventListener(u,r.mux.listeners[u],!1))})}function i0(t,e,i,a){var r=a;if(t&&typeof t[e]=="function")try{r=t[e].apply(t,i)}catch(n){ae.info("safeCall error",n)}return r}var sn=at(Rt()),Ia;sn.default&&sn.default.WeakMap&&(Ia=new WeakMap);function a0(t,e){if(!t||!e||!sn.default||typeof sn.default.getComputedStyle!="function")return"";var i;return Ia&&Ia.has(t)&&(i=Ia.get(t)),i||(i=sn.default.getComputedStyle(t,null),Ia&&Ia.set(t,i)),i.getPropertyValue(e)}function r0(t){return Math.floor(t*1e3)}var Ui={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},Jo=function(t){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(t),this.manifest};Jo.prototype.process=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)};Jo.prototype.processLine=function(t){var e=t.indexOf(":"),i=l0(t,e),a=i[0],r=i.length===2?vu(i[1]):void 0;if(a[0]!=="#")this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case Ui.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case Ui.PART_INF:{Il(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case Ui.SERVER_CONTROL:{Il(this.manifest,i),this.setHoldBack();break}case Ui.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case Ui.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case Ui.VERSION:{Il(this.manifest,i);break}case Ui.SESSION_DATA:{var o=d0(i[1]),l=Ym(o);Object.assign(this.manifest.sessionData,l)}}};Jo.prototype.setHoldBack=function(){var t=this.manifest,e=t.serverControl,i=t.targetDuration,a=t.partTargetDuration;if(e){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!e.hasOwnProperty(r)&&(e[r]=s),s&&e[r]<s&&(e[r]=s),a&&!e.hasOwnProperty(n)&&(e[n]=a*3),a&&e[n]<o&&(e[n]=o)}};var Il=function(t,e){var i=tp(e[0].replace("#EXT-X-","")),a;o0(e[1])?(a={},a=Object.assign(s0(e[1]),a)):a=vu(e[1]),t[i]=a},tp=function(t){return t.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},vu=function(t){if(t.toLowerCase()==="yes"||t.toLowerCase()==="no")return t.toLowerCase()==="yes";var e=t.indexOf(":")!==-1?t:parseFloat(t);return isNaN(e)?t:e},n0=function(t){var e={},i=t.split("=");if(i.length>1){var a=tp(i[0]);e[a]=vu(i[1])}return e},s0=function(t){for(var e=t.split(","),i={},a=0;e.length>a;a++){var r=e[a],n=n0(r);i=Object.assign(n,i)}return i},o0=function(t){return t.indexOf("=")>-1},l0=function(t,e){return e===-1?[t]:[t.substring(0,e),t.substring(e+1)]},d0=function(t){var e={};if(t){var i=t.search(","),a=t.slice(0,i),r=t.slice(i+1),n=[a,r];return n.forEach(function(s,o){for(var l=s.replace(/['"]+/g,"").split("="),c=0;c<l.length;c++)l[c]==="DATA-ID"&&(e["DATA-ID"]=l[1-c]),l[c]==="VALUE"&&(e.VALUE=l[1-c])}),{data:e}}},u0=Jo,c0={safeCall:i0,safeIncrement:Te,getComputedStyle:a0,secondsToMs:r0,assign:Object.assign,headersStringToObject:pu,cdnHeadersToRequestId:yo,extractHostnameAndDomain:_n,extractHostname:St,manifestParser:u0,generateShortID:Vm,generateUUID:En,now:Ae.now,findMediaElement:_o},h0=c0,m0={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},p0=m0,v0="mux-embed",f0="5.9.0",E0="2.1",_e={},xi=function(t){var e=arguments;typeof t=="string"?xi.hasOwnProperty(t)?nn.default.setTimeout(function(){e=Array.prototype.splice.call(e,1),xi[t].apply(null,e)},0):ae.warn("`"+t+"` is an unknown task"):typeof t=="function"?nn.default.setTimeout(function(){t(xi)},0):ae.warn("`"+t+"` is invalid.")},_0={loaded:Ae.now(),NAME:v0,VERSION:f0,API_VERSION:E0,PLAYER_TRACKED:!1,monitor:function(t,e){return t0(xi,t,e)},destroyMonitor:function(t){var e=hi(_o(t),1),i=e[0];i&&i.mux&&typeof i.mux.destroy=="function"?i.mux.destroy():ae.error("A video element monitor for `"+t+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(t,e){var i=bt(t);_e[i]?_e[i].addHLSJS(e):ae.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(t,e){var i=bt(t);_e[i]?_e[i].addDashJS(e):ae.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(t){var e=bt(t);_e[e]?_e[e].removeHLSJS():ae.error("A monitor for `"+e+"` has not been initialized.")},removeDashJS:function(t){var e=bt(t);_e[e]?_e[e].removeDashJS():ae.error("A monitor for `"+e+"` has not been initialized.")},init:function(t,e){Ql()&&e&&e.respectDoNotTrack&&ae.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=bt(t);_e[i]=new j_(xi,i,e)},emit:function(t,e,i){var a=bt(t);_e[a]?(_e[a].emit(e,i),e==="destroy"&&delete _e[a]):ae.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(t,e){var i=bt(t);_e[i]?_e[i].emit("hb",e):ae.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(t,e){var i=bt(t);_e[i]?_e[i].emitTranslator=e:ae.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(t,e){var i=bt(t);_e[i]?_e[i].stateDataTranslator=e:ae.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(t,e){var i=bt(t);_e[i]?_e[i].getPlayheadTime=e:ae.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:Ql,log:ae,utils:h0,events:p0,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(xi,_0);typeof nn.default<"u"&&typeof nn.default.addEventListener=="function"&&nn.default.addEventListener("pagehide",function(t){t.persisted||(xi.WINDOW_UNLOADING=!0)},!1);var fu=xi;/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var W=aE,re={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},O={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},el=t=>t===re.VIDEO?"playback":t,gi=class Nr extends Error{constructor(e,i=Nr.MEDIA_ERR_CUSTOM,a,r){var n;super(e),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=Nr.MEDIA_ERR_NETWORK&&i<=Nr.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Nr.defaultMessages[this.code])!=null?n:"")}};gi.MEDIA_ERR_ABORTED=1,gi.MEDIA_ERR_NETWORK=2,gi.MEDIA_ERR_DECODE=3,gi.MEDIA_ERR_SRC_NOT_SUPPORTED=4,gi.MEDIA_ERR_ENCRYPTED=5,gi.MEDIA_ERR_CUSTOM=100,gi.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var C=gi,b0=t=>t==null,Eu=(t,e)=>b0(e)?!1:t in e,jl={ANY:"any",MUTED:"muted"},j={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},zt={MSE:"mse",NATIVE:"native"},Pr={HEADER:"header",QUERY:"query",NONE:"none"},To=Object.values(Pr),ui={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},sh={HLS:ui.M3U8};[...Object.values(ui)];var gk={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},yk={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},Tk={DESCENDING:"desc"},g0="en",Xl={code:g0},ge=(t,e,i,a,r=t)=>{r.addEventListener(e,i,a),t.addEventListener("teardown",()=>{r.removeEventListener(e,i)},{once:!0})};function y0(t,e,i){e&&i>e&&(i=e);for(let a=0;a<t.length;a++)if(t.start(a)<=i&&t.end(a)>=i)return!0;return!1}var _u=t=>{let e=t.indexOf("?");if(e<0)return[t];let i=t.slice(0,e),a=t.slice(e);return[i,a]},tl=t=>{let{type:e}=t;if(e){let i=e.toUpperCase();return Eu(i,sh)?sh[i]:e}return T0(t)},ip=t=>t==="VOD"?j.ON_DEMAND:j.LIVE,ap=t=>t==="EVENT"?Number.POSITIVE_INFINITY:t==="VOD"?Number.NaN:0,T0=t=>{let{src:e}=t;if(!e)return"";let i="";try{i=new URL(e).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return k0(t)?ui.M3U8:"";let r=i.slice(a+1).toUpperCase();return Eu(r,ui)?ui[r]:""},A0="mux.com",k0=({src:t,customDomain:e=A0})=>{let i;try{i=new URL(`${t}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${e}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},tr=t=>{let e=(t??"").split(".")[1];if(e)try{let i=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},S0=({exp:t},e=Date.now())=>!t||t*1e3<e,w0=({sub:t},e)=>t!==e,I0=({aud:t},e)=>!t,R0=({aud:t},e)=>t!==e,rp="en";function M(t,e=!0){var i,a;let r=e&&(a=(i=Xl)==null?void 0:i[t])!=null?a:t,n=e?Xl.code:rp;return new C0(r,n)}var C0=class{constructor(t,e=(i=>(i=Xl)!=null?i:rp)()){this.message=t,this.locale=e}format(t){return this.message.replace(/\{(\w+)\}/g,(e,i)=>{var a;return(a=t[i])!=null?a:""})}toString(){return this.message}},L0=Object.values(jl),oh=t=>typeof t=="boolean"||typeof t=="string"&&L0.includes(t),D0=(t,e,i)=>{let{autoplay:a}=t,r=!1,n=!1,s=oh(a)?a:!!a,o=()=>{r||ge(e,"playing",()=>{r=!0},{once:!0})};if(o(),ge(e,"loadstart",()=>{r=!1,o(),Rl(e,s)},{once:!0}),ge(e,"loadstart",()=>{i||(t.streamType&&t.streamType!==j.UNKNOWN?n=t.streamType===j.LIVE:n=!Number.isFinite(e.duration)),Rl(e,s)},{once:!0}),i&&i.once(W.Events.LEVEL_LOADED,(l,c)=>{var m;t.streamType&&t.streamType!==j.UNKNOWN?n=t.streamType===j.LIVE:n=(m=c.details.live)!=null?m:!1}),!s){let l=()=>{!n||Number.isFinite(t.startTime)||(i!=null&&i.liveSyncPosition?e.currentTime=i.liveSyncPosition:Number.isFinite(e.seekable.end(0))&&(e.currentTime=e.seekable.end(0)))};i&&ge(e,"play",()=>{e.preload==="metadata"?i.once(W.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=oh(l)?l:!!l,Rl(e,s))}},Rl=(t,e)=>{if(!e)return;let i=t.muted,a=()=>t.muted=i;switch(e){case jl.ANY:t.play().catch(()=>{t.muted=!0,t.play().catch(a)});break;case jl.MUTED:t.muted=!0,t.play().catch(a);break;default:t.play().catch(()=>{});break}},M0=({preload:t,src:e},i,a)=>{let r=p=>{p!=null&&["","none","metadata","auto"].includes(p)?i.setAttribute("preload",p):i.removeAttribute("preload")};if(!a)return r(t),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,c=p=>{r(p);let d=p??i.preload;s||d==="none"||(d==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),m())},m=()=>{!n&&e&&(n=!0,a.loadSource(e))};return ge(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,m()},{once:!0}),c(t),c};function x0(t,e){var i;if(!("videoTracks"in t))return;let a=new WeakMap;e.on(W.Events.MANIFEST_PARSED,function(l,c){o();let m=t.addVideoTrack("main");m.selected=!0;for(let[p,d]of c.levels.entries()){let u=m.addRendition(d.url[0],d.width,d.height,d.videoCodec,d.bitrate);a.set(d,`${p}`),u.id=`${p}`}}),e.on(W.Events.AUDIO_TRACKS_UPDATED,function(l,c){s();for(let m of c.audioTracks){let p=m.default?"main":"alternative",d=t.addAudioTrack(p,m.name,m.lang);d.id=`${m.id}`,m.default&&(d.enabled=!0)}}),t.audioTracks.addEventListener("change",()=>{var l;let c=+((l=[...t.audioTracks].find(p=>p.enabled))==null?void 0:l.id),m=e.audioTracks.map(p=>p.id);c!=e.audioTrack&&m.includes(c)&&(e.audioTrack=c)}),e.on(W.Events.LEVELS_UPDATED,function(l,c){var m;let p=t.videoTracks[(m=t.videoTracks.selectedIndex)!=null?m:0];if(!p)return;let d=c.levels.map(u=>a.get(u));for(let u of t.videoRenditions)u.id&&!d.includes(u.id)&&p.removeRendition(u)});let r=l=>{let c=l.target.selectedIndex;c!=e.nextLevel&&(e.nextLevel=c)};(i=t.videoRenditions)==null||i.addEventListener("change",r);let n=()=>{for(let l of t.videoTracks)t.removeVideoTrack(l)},s=()=>{for(let l of t.audioTracks)t.removeAudioTrack(l)},o=()=>{n(),s()};e.once(W.Events.DESTROYING,o)}var Cl=t=>"time"in t?t.time:t.startTime;function O0(t,e){e.on(W.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let c=(o=s.subtitleTrack)!=null?o:s.closedCaptions,m=e.subtitleTracks.findIndex(({lang:d,name:u,type:v})=>d==(c==null?void 0:c.lang)&&u===s.label&&v.toLowerCase()===s.kind),p=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${m}`;bu(t,s.kind,s.label,c==null?void 0:c.lang,p,s.default)})});let i=()=>{if(!e.subtitleTracks.length)return;let r=Array.from(t.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=e.subtitleTracks[e.subtitleTrack],s=n?n.default?"default":`${e.subtitleTracks[e.subtitleTrack].type.toLowerCase()}${e.subtitleTrack}`:void 0;if(e.subtitleTrack<0||(r==null?void 0:r.id)!==s){let o=e.subtitleTracks.findIndex(({lang:l,name:c,type:m,default:p})=>r.id==="default"&&p||l==r.language&&c===r.label&&m.toLowerCase()===r.kind);e.subtitleTrack=o}(r==null?void 0:r.id)===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};t.textTracks.addEventListener("change",i),e.on(W.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=t.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(c=>{var m;(m=o.cues)!=null&&m.getCueById(c.id)||o.addCue(c)}),l&&(o.mode="disabled")}),e.once(W.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(t.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let o="track";r.kind&&(o+=`[kind="${r.kind}"]`),r.label&&(o+=`[label="${r.label}"]`);let l=t.querySelector(o),c=(s=l==null?void 0:l.getAttribute("src"))!=null?s:"";l==null||l.removeAttribute("src"),setTimeout(()=>{l==null||l.setAttribute("src",c)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};e.once(W.Events.MANIFEST_LOADED,a),e.once(W.Events.MEDIA_ATTACHED,a)}function bu(t,e,i,a,r,n){let s=document.createElement("track");return s.kind=e,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(e)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),t.append(s),s.track}function N0(t,e){let i=Array.prototype.find.call(t.querySelectorAll("track"),a=>a.track===e);i==null||i.remove()}function $n(t,e,i){var a;return(a=Array.from(t.querySelectorAll("track")).find(r=>r.track.label===e&&r.track.kind===i))==null?void 0:a.track}async function np(t,e,i,a){let r=$n(t,i,a);return r||(r=bu(t,a,i),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...e].sort((n,s)=>Cl(s)-Cl(n)).forEach(n=>{var s,o;let l=n.value,c=Cl(n);if("endTime"in n&&n.endTime!=null)r==null||r.addCue(new VTTCue(c,n.endTime,a==="chapters"?l:JSON.stringify(l??null)));else{let m=Array.prototype.findIndex.call(r==null?void 0:r.cues,v=>v.startTime>=c),p=(s=r==null?void 0:r.cues)==null?void 0:s[m],d=p?p.startTime:Number.isFinite(t.duration)?t.duration:Number.MAX_SAFE_INTEGER,u=(o=r==null?void 0:r.cues)==null?void 0:o[m-1];u&&(u.endTime=c),r==null||r.addCue(new VTTCue(c,d,a==="chapters"?l:JSON.stringify(l??null)))}}),t.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var gu="cuepoints",sp=Object.freeze({label:gu});async function op(t,e,i=sp){return np(t,e,i.label,"metadata")}var Jl=t=>({time:t.startTime,value:JSON.parse(t.text)});function P0(t,e={label:gu}){let i=$n(t,e.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>Jl(a)):[]}function lp(t,e={label:gu}){var i,a;let r=$n(t,e.label,"metadata");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return Jl(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return Jl(s||r.activeCues[0])}async function $0(t,e=sp){return new Promise(i=>{ge(t,"loadstart",async()=>{let a=await op(t,[],e);ge(t,"cuechange",()=>{let r=lp(t);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}var yu="chapters",dp=Object.freeze({label:yu}),ed=t=>({startTime:t.startTime,endTime:t.endTime,value:t.text});async function up(t,e,i=dp){return np(t,e,i.label,"chapters")}function U0(t,e={label:yu}){var i;let a=$n(t,e.label,"chapters");return(i=a==null?void 0:a.cues)!=null&&i.length?Array.from(a.cues,r=>ed(r)):[]}function cp(t,e={label:yu}){var i,a;let r=$n(t,e.label,"chapters");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return ed(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return ed(s||r.activeCues[0])}async function H0(t,e=dp){return new Promise(i=>{ge(t,"loadstart",async()=>{let a=await up(t,[],e);ge(t,"cuechange",()=>{let r=cp(t);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}function B0(t,e){if(e){let i=e.playingDate;if(i!=null)return new Date(i.getTime()-t.currentTime*1e3)}return typeof t.getStartDate=="function"?t.getStartDate():new Date(NaN)}function W0(t,e){if(e&&e.playingDate)return e.playingDate;if(typeof t.getStartDate=="function"){let i=t.getStartDate();return new Date(i.getTime()+t.currentTime*1e3)}return new Date(NaN)}var on={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},F0=t=>{if(t===re.VIDEO)return on.VIDEO;if(t===re.DRM)return on.DRM},K0=(t,e)=>{var i,a;let r=el(t),n=`${r}Token`;return(i=e.tokens)!=null&&i[r]?(a=e.tokens)==null?void 0:a[r]:Eu(n,e)?e[n]:void 0},Ao=(t,e,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,o;if(n){let y=M("Your device appears to be offline",r),T,_=C.MEDIA_ERR_NETWORK,S=new C(y,_,!1,T);return S.errorCategory=e,S.muxCode=O.NETWORK_OFFLINE,S.data=t,S}let l="status"in t?t.status:t.code,c=Date.now(),m=C.MEDIA_ERR_NETWORK;if(l===200)return;let p=el(e),d=K0(e,i),u=F0(e),[v]=_u((s=i.playbackId)!=null?s:"");if(!l||!v)return;let f=tr(d);if(d&&!f){let y=M("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:p}),T=M("Compact JWT string: {token}",r).format({token:d}),_=new C(y,m,!0,T);return _.errorCategory=e,_.muxCode=O.NETWORK_TOKEN_MALFORMED,_.data=t,_}if(l>=500){let y=new C("",m,a??!0);return y.errorCategory=e,y.muxCode=O.NETWORK_UNKNOWN_ERROR,y}if(l===403)if(f){if(S0(f,c)){let y={timeStyle:"medium",dateStyle:"medium"},T=M("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:p}),_=M("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",y).format((o=f.exp)!=null?o:0*1e3),currentDate:new Intl.DateTimeFormat("en",y).format(c)}),S=new C(T,m,!0,_);return S.errorCategory=e,S.muxCode=O.NETWORK_TOKEN_EXPIRED,S.data=t,S}if(w0(f,v)){let y=M("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p}),T=M("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:p,playbackId:v,tokenPlaybackId:f.sub}),_=new C(y,m,!0,T);return _.errorCategory=e,_.muxCode=O.NETWORK_TOKEN_SUB_MISMATCH,_.data=t,_}if(I0(f)){let y=M("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),T=M("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:u}),_=new C(y,m,!0,T);return _.errorCategory=e,_.muxCode=O.NETWORK_TOKEN_AUD_MISSING,_.data=t,_}if(R0(f,u)){let y=M("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),T=M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:u,aud:f.aud}),_=new C(y,m,!0,T);return _.errorCategory=e,_.muxCode=O.NETWORK_TOKEN_AUD_MISMATCH,_.data=t,_}}else{let y=M("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p,category:e}),T=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),_=new C(y,m,a??!0,T);return _.errorCategory=e,_.muxCode=O.NETWORK_TOKEN_MISSING,_.data=t,_}if(l===412){let y=M("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),T=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),_=new C(y,m,a??!0,T);return _.errorCategory=e,_.muxCode=O.NETWORK_NOT_READY,_.streamType=i.streamType===j.LIVE?"live":i.streamType===j.ON_DEMAND?"on-demand":"unknown",_.data=t,_}if(l===404){let y=M("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),T=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),_=new C(y,m,a??!0,T);return _.errorCategory=e,_.muxCode=O.NETWORK_NOT_FOUND,_.data=t,_}if(l===400){let y=M("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),T=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),_=new C(y,m,a??!0,T);return _.errorCategory=e,_.muxCode=O.NETWORK_INVALID_URL,_.data=t,_}let b=new C("",m,a??!0);return b.errorCategory=e,b.muxCode=O.NETWORK_UNKNOWN_ERROR,b.data=t,b},lh=W.DefaultConfig.capLevelController,V0={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function q0(t){let e=t.toLowerCase().trim();return V0[e]}var td=class $r extends lh{constructor(e){super(e)}static setMaxAutoResolution(e,i){i?$r.maxAutoResolution.set(e,i):$r.maxAutoResolution.delete(e)}getMaxAutoResolution(){var e;let i=this.hls;return(e=$r.maxAutoResolution.get(i))!=null?e:void 0}get levels(){var e;return(e=this.hls.levels)!=null?e:[]}getValidLevels(e){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=e)}getMaxLevelCapped(e){let i=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let r=q0(a);if(!r)return super.getMaxLevel(e);let n=i.filter(l=>l.width*l.height<=r),s=n.findIndex(l=>l.width*l.height===r);if(s!==-1){let l=n[s];return i.findIndex(c=>c===l)}if(n.length===0)return 0;let o=n[n.length-1];return i.findIndex(l=>l===o)}getMaxLevel(e){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(e);let i=super.getMaxLevel(e),a=this.getValidLevels(e);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=$r.minMaxResolution;return r>=n?i:lh.getMaxLevelByMediaSize(a,n*(16/9),n)}};td.minMaxResolution=720,td.maxAutoResolution=new WeakMap;var Y0=td,Ll=Y0,ls={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},G0=t=>{if(t.includes("fps"))return ls.FAIRPLAY;if(t.includes("playready"))return ls.PLAYREADY;if(t.includes("widevine"))return ls.WIDEVINE},Q0=t=>{let e=t.split(`
`).find((i,a,r)=>a&&r[a-1].startsWith("#EXT-X-STREAM-INF"));return fetch(e).then(i=>i.status!==200?Promise.reject(i):i.text())},z0=t=>{let e=t.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!e.length)return{};let i={};for(let a of e){let r=j0(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},Z0=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function j0(t){let e=[...t.matchAll(Z0)];return Object.fromEntries(e.map(([,i,a])=>[i,a]))}var X0=t=>{var e,i,a;let r=t.split(`
`),n=(i=((e=r.find(c=>c.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?e:"").split(":")[1])==null?void 0:i.trim(),s=ip(n),o=ap(n),l;if(s===j.LIVE){let c=r.find(m=>m.startsWith("#EXT-X-PART-INF"));if(c)l=+c.split(":")[1].split("=")[1]*2;else{let m=r.find(d=>d.startsWith("#EXT-X-TARGETDURATION")),p=(a=m==null?void 0:m.split(":"))==null?void 0:a[1];l=+(p??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},J0=async(t,e)=>{if(e===ui.MP4)return{streamType:j.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(e===ui.M3U8){let i=await fetch(t);if(!i.ok)return Promise.reject(i);let a=await i.text(),r=await Q0(a);return{...z0(a),...X0(r)}}return console.error(`Media type ${e} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},eb=async(t,e,i=tl({src:t}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:c,sessionData:m}=await J0(t,i),p=m==null?void 0:m["com.apple.hls.chapters"];(p!=null&&p.URI||p!=null&&p.VALUE.toLocaleLowerCase().startsWith("http"))&&Tu((a=p.URI)!=null?a:p.VALUE,e),((r=me.get(e))!=null?r:{}).liveEdgeStartOffset=c,((n=me.get(e))!=null?n:{}).targetLiveWindow=l,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=me.get(e))!=null?s:{}).streamType=o,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Tu=async(t,e)=>{var i,a;try{let r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((i=n==null?void 0:n[0])!=null&&i.metadata))return;for(let l of n[0].metadata)l.key&&l.value&&(s[l.key]=l.value);((a=me.get(e))!=null?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");e.dispatchEvent(o)}catch(r){console.error(r)}},tb=t=>{var e;let i=t.type,a=ip(i),r=ap(i),n,s=!!((e=t.partList)!=null&&e.length);return a===j.LIVE&&(n=s?t.partTarget*2:t.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},ib=(t,e,i)=>{var a,r,n,s,o,l,c,m;let{streamType:p,targetLiveWindow:d,liveEdgeStartOffset:u,lowLatency:v}=tb(t);if(p===j.LIVE){v?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let f=Object.freeze({get length(){return e.seekable.length},start(b){return e.seekable.start(b)},end(b){var y;return b>this.length||b<0||Number.isFinite(e.duration)?e.seekable.end(b):(y=i.liveSyncPosition)!=null?y:e.seekable.end(b)}});((o=me.get(e))!=null?o:{}).seekable=f}((l=me.get(e))!=null?l:{}).liveEdgeStartOffset=u,((c=me.get(e))!=null?c:{}).targetLiveWindow=d,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((m=me.get(e))!=null?m:{}).streamType=p,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},dh,uh,hp=(uh=(dh=globalThis==null?void 0:globalThis.navigator)==null?void 0:dh.userAgent)!=null?uh:"",ch,hh,mh,ab=(mh=(hh=(ch=globalThis==null?void 0:globalThis.navigator)==null?void 0:ch.userAgentData)==null?void 0:hh.platform)!=null?mh:"",rb=hp.toLowerCase().includes("android")||["x11","android"].some(t=>ab.toLowerCase().includes(t)),nb=t=>/^((?!chrome|android).)*safari/i.test(hp)&&!!t.canPlayType("application/vnd.apple.mpegurl"),me=new WeakMap,ci="mux.com",ph,vh,mp=(vh=(ph=W).isSupported)==null?void 0:vh.call(ph),sb=t=>rb||!nb(t),Au=()=>{if(typeof window<"u")return fu.utils.now()},ob=fu.utils.generateUUID,id=({playbackId:t,customDomain:e=ci,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:c,tokens:{playback:m=c}={},extraSourceParams:p={}}={})=>{if(!t)return;let[d,u=""]=_u(t),v=new URL(`https://stream.${e}/${d}.m3u8${u}`);return m||v.searchParams.has("token")?(v.searchParams.forEach((f,b)=>{b!="token"&&v.searchParams.delete(b)}),m&&v.searchParams.set("token",m)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(p).forEach(([f,b])=>{b!=null&&v.searchParams.set(f,b)})),v.toString()},il=t=>{if(!t)return;let[e]=t.split("?");return e||void 0},ku=t=>{if(!t||!t.startsWith("https://stream."))return;let[e]=new URL(t).pathname.slice(1).split(/\.m3u8|\//);return e||void 0},lb=t=>{var e,i,a;return(e=t==null?void 0:t.metadata)!=null&&e.video_id?t.metadata.video_id:yp(t)&&(a=(i=il(t.playbackId))!=null?i:ku(t.src))!=null?a:t.src},pp=t=>{var e;return(e=me.get(t))==null?void 0:e.error},db=t=>{var e;return(e=me.get(t))==null?void 0:e.metadata},ad=t=>{var e,i;return(i=(e=me.get(t))==null?void 0:e.streamType)!=null?i:j.UNKNOWN},ub=t=>{var e,i;return(i=(e=me.get(t))==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN},Su=t=>{var e,i;return(i=(e=me.get(t))==null?void 0:e.seekable)!=null?i:t.seekable},cb=t=>{var e;let i=(e=me.get(t))==null?void 0:e.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=Su(t);return a.length?a.end(a.length-1)-i:Number.NaN},wu=.034,hb=(t,e,i=wu)=>Math.abs(t-e)<=i,vp=(t,e,i=wu)=>t>e||hb(t,e,i),mb=(t,e=wu)=>t.paused&&vp(t.currentTime,t.duration,e),fp=(t,e)=>{var i,a,r;if(!e||!t.buffered.length)return;if(t.readyState>2)return!1;let n=e.currentLevel>=0?(a=(i=e.levels)==null?void 0:i[e.currentLevel])==null?void 0:a.details:(r=e.levels.find(p=>!!p.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(t.currentTime<t.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(t.currentTime<=o.start)return!1;let l=o.start+o.duration/2,c=t.buffered.start(t.buffered.length-1),m=t.buffered.end(t.buffered.length-1);return l>c&&l<m},Ep=(t,e)=>t.ended||t.loop?t.ended:e&&fp(t,e)?!0:mb(t),pb=(t,e,i)=>{_p(e,i,t);let{metadata:a={}}=t,{view_session_id:r=ob()}=a,n=lb(t);a.view_session_id=r,a.video_id=n,t.metadata=a;let s=m=>{var p;(p=e.mux)==null||p.emit("hb",{view_drm_type:m})};t.drmTypeCb=s,me.set(e,{retryCount:0});let o=vb(t,e),l=M0(t,e,o);t!=null&&t.muxDataKeepSession&&e!=null&&e.mux&&!e.mux.deleted?o&&e.mux.addHLSJS({hlsjs:o,Hls:o?W:void 0}):yb(t,e,o),Tb(t,e,o),$0(e),H0(e);let c=D0(t,e,o);return{engine:o,setAutoplay:c,setPreload:l}},_p=(t,e,i)=>{let a=e==null?void 0:e.engine;t!=null&&t.mux&&!t.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&t.mux.removeHLSJS():(t.mux.destroy(),delete t.mux)),a&&(a.detachMedia(),a.destroy()),t&&(t.hasAttribute("src")&&(t.removeAttribute("src"),t.load()),t.removeEventListener("error",Ap),t.removeEventListener("error",rd),t.removeEventListener("durationchange",Tp),me.delete(t),t.dispatchEvent(new Event("teardown")))};function bp(t,e){var i;let a=tl(t);if(a!==ui.M3U8)return!0;let r=!a||((i=e.canPlayType(a))!=null?i:!0),{preferPlayback:n}=t,s=n===zt.MSE,o=n===zt.NATIVE,l=mp&&(s||sb(e));return r&&(o||!l)}var vb=(t,e)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l}=t,c=tl(t)===ui.M3U8,m=bp(t,e);if(c&&!m&&mp){let p={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},d=fb(a),u=Eb(t),v=[Pr.QUERY,Pr.HEADER].includes(s)?{useHeaders:s===Pr.HEADER,sessionId:n==null?void 0:n.view_session_id,contentId:n==null?void 0:n.video_id}:void 0,f=o.capLevelToPlayerSize==null?{capLevelController:Ll}:{},b=new W({debug:i,startPosition:r,cmcd:v,xhrSetup:(y,T)=>{var _,S;if(s&&s!==Pr.QUERY)return;let L=new URL(T);if(!L.searchParams.has("CMCD"))return;let P=((S=(_=L.searchParams.get("CMCD"))==null?void 0:_.split(","))!=null?S:[]).filter(H=>H.startsWith("sid")||H.startsWith("cid")).join(",");L.searchParams.set("CMCD",P),y.open("GET",L)},...f,...p,...d,...u,...o});return f.capLevelController===Ll&&l!==void 0&&Ll.setMaxAutoResolution(b,l),b.on(W.Events.MANIFEST_PARSED,async function(y,T){var _,S;let L=(_=T.sessionData)==null?void 0:_["com.apple.hls.chapters"];(L!=null&&L.URI||L!=null&&L.VALUE.toLocaleLowerCase().startsWith("http"))&&Tu((S=L==null?void 0:L.URI)!=null?S:L==null?void 0:L.VALUE,e)}),b}},fb=t=>t===j.LIVE?{backBufferLength:8}:{},Eb=t=>{let{tokens:{drm:e}={},playbackId:i,drmTypeCb:a}=t,r=il(i);return!e||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:ds(t,"fairplay"),serverCertificateUrl:gp(t,"fairplay")},"com.widevine.alpha":{licenseUrl:ds(t,"widevine")},"com.microsoft.playready":{licenseUrl:ds(t,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let c=(l=o.videoCapabilities)==null?void 0:l.map(m=>({...m,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:c}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=G0(n);return a==null||a(l),o}))}},_b=async t=>{let e=await fetch(t);return e.status!==200?Promise.reject(e):await e.arrayBuffer()},bb=async(t,e)=>{let i=await fetch(e,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},gb=(t,e)=>{let i=async n=>{let s=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[n],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(l=>{var c;return(c=t.drmTypeCb)==null||c.call(t,ls.FAIRPLAY),l}).catch(()=>{let l=M("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),c=new C(l,C.MEDIA_ERR_ENCRYPTED,!0);c.errorCategory=re.DRM,c.muxCode=O.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,it(e,c)});if(!s)return;let o=await s.createMediaKeys();try{let l=await _b(gp(t,"fairplay")).catch(c=>{if(c instanceof Response){let m=Ao(c,re.DRM,t);return console.error("mediaError",m==null?void 0:m.message,m==null?void 0:m.context),m?Promise.reject(m):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(c)});await o.setServerCertificate(l).catch(()=>{let c=M("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),m=new C(c,C.MEDIA_ERR_ENCRYPTED,!0);return m.errorCategory=re.DRM,m.muxCode=O.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(m)})}catch(l){it(e,l);return}await e.setMediaKeys(o)},a=n=>{let s;if(n==="internal-error"){let o=M("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");s=new C(o,C.MEDIA_ERR_ENCRYPTED,!0),s.errorCategory=re.DRM,s.muxCode=O.ENCRYPTED_CDM_ERROR}else if(n==="output-restricted"||n==="output-downscaled"){let o=M("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");s=new C(o,C.MEDIA_ERR_ENCRYPTED,!1),s.errorCategory=re.DRM,s.muxCode=O.ENCRYPTED_OUTPUT_RESTRICTED}s&&it(e,s)},r=async(n,s)=>{let o=e.mediaKeys.createSession(),l=()=>{o.keyStatuses.forEach(m=>a(m))},c=async m=>{let p=m.message;try{let d=await bb(p,ds(t,"fairplay"));try{await o.update(d)}catch{let u=M("Failed to update DRM license. This may be an issue with the player or your protected content."),v=new C(u,C.MEDIA_ERR_ENCRYPTED,!0);v.errorCategory=re.DRM,v.muxCode=O.ENCRYPTED_UPDATE_LICENSE_FAILED,it(e,v)}}catch(d){if(d instanceof Response){let u=Ao(d,re.DRM,t);if(console.error("mediaError",u==null?void 0:u.message,u==null?void 0:u.context),u){it(e,u);return}console.error("Unexpected error in license key request",d);return}console.error(d)}};o.addEventListener("keystatuseschange",l),o.addEventListener("message",c),e.addEventListener("teardown",()=>{o.removeEventListener("keystatuseschange",l),o.removeEventListener("message",c),o.close()},{once:!0}),await o.generateRequest(n,s).catch(m=>{console.error("Failed to generate license request",m);let p=M("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),d=new C(p,C.MEDIA_ERR_ENCRYPTED,!0);return d.errorCategory=re.DRM,d.muxCode=O.ENCRYPTED_GENERATE_REQUEST_FAILED,Promise.reject(d)})};ge(e,"encrypted",async n=>{try{let s=n.initDataType;if(s!=="skd"){console.error(`Received unexpected initialization data type "${s}"`);return}e.mediaKeys||await i(s);let o=n.initData;if(o==null){console.error(`Could not start encrypted playback due to missing initData in ${n.type} event`);return}await r(s,o)}catch(s){it(e,s);return}})},ds=({playbackId:t,tokens:{drm:e}={},customDomain:i=ci},a)=>{let r=il(t);return`https://license.${i.toLocaleLowerCase().endsWith(ci)?i:ci}/license/${a}/${r}?token=${e}`},gp=({playbackId:t,tokens:{drm:e}={},customDomain:i=ci},a)=>{let r=il(t);return`https://license.${i.toLocaleLowerCase().endsWith(ci)?i:ci}/appcert/${a}/${r}?token=${e}`},yp=({playbackId:t,src:e,customDomain:i})=>{if(t)return!0;if(typeof e!="string")return!1;let a=window==null?void 0:window.location.href,r=new URL(e,a).hostname.toLocaleLowerCase();return r.includes(ci)||!!i&&r.includes(i.toLocaleLowerCase())},yb=(t,e,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=fu,muxDataSDKOptions:o={}}=t,l=yp(t);if(!n&&(r||l)){let{playerInitTime:c,playerSoftwareName:m,playerSoftwareVersion:p,beaconCollectionDomain:d,debug:u,disableCookies:v}=t,f={...t.metadata,video_title:((a=t==null?void 0:t.metadata)==null?void 0:a.video_title)||void 0},b=y=>typeof y.player_error_code=="string"?!1:typeof t.errorTranslator=="function"?t.errorTranslator(y):y;s.monitor(e,{debug:u,beaconCollectionDomain:d,hlsjs:i,Hls:i?W:void 0,automaticErrorTracking:!1,errorTranslator:b,disableCookies:v,...o,data:{...r?{env_key:r}:{},player_software_name:m,player_software:m,player_software_version:p,player_init_time:c,...f}})}},Tb=(t,e,i)=>{var a,r;let n=bp(t,e),{src:s,customDomain:o=ci}=t,l=()=>{e.ended||t.disablePseudoEnded||!Ep(e,i)||(fp(e,i)?e.currentTime=e.buffered.end(e.buffered.length-1):e.dispatchEvent(new Event("ended")))},c,m,p=()=>{let d=Su(e),u,v;d.length>0&&(u=d.start(0),v=d.end(0)),(m!==v||c!==u)&&e.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),c=u,m=v};if(ge(e,"durationchange",p),e&&n){let d=tl(t);if(typeof s=="string"){if(s.endsWith(".mp4")&&s.includes(o)){let f=ku(s),b=new URL(`https://stream.${o}/${f}/metadata.json`);Tu(b.toString(),e)}let u=()=>{if(ad(e)!==j.LIVE||Number.isFinite(e.duration))return;let f=setInterval(p,1e3);e.addEventListener("teardown",()=>{clearInterval(f)},{once:!0}),ge(e,"durationchange",()=>{Number.isFinite(e.duration)&&clearInterval(f)})},v=async()=>eb(s,e,d).then(u).catch(f=>{if(f instanceof Response){let b=Ao(f,re.VIDEO,t);if(b){it(e,b);return}}});if(e.preload==="none"){let f=()=>{v(),e.removeEventListener("loadedmetadata",b)},b=()=>{v(),e.removeEventListener("play",f)};ge(e,"play",f,{once:!0}),ge(e,"loadedmetadata",b,{once:!0})}else v();(a=t.tokens)!=null&&a.drm?gb(t,e):ge(e,"encrypted",()=>{let f=M("Attempting to play DRM-protected content without providing a DRM token."),b=new C(f,C.MEDIA_ERR_ENCRYPTED,!0);b.errorCategory=re.DRM,b.muxCode=O.ENCRYPTED_MISSING_TOKEN,it(e,b)},{once:!0}),e.setAttribute("src",s),t.startTime&&(((r=me.get(e))!=null?r:{}).startTime=t.startTime,e.addEventListener("durationchange",Tp,{once:!0}))}else e.removeAttribute("src");e.addEventListener("error",Ap),e.addEventListener("error",rd),e.addEventListener("emptied",()=>{e.querySelectorAll("track[data-removeondestroy]").forEach(u=>{u.remove()})},{once:!0}),ge(e,"pause",l),ge(e,"seeked",l),ge(e,"play",()=>{e.ended||vp(e.currentTime,e.duration)&&(e.currentTime=e.seekable.length?e.seekable.start(0):0)})}else i&&s?(i.once(W.Events.LEVEL_LOADED,(d,u)=>{ib(u.details,e,i),p(),ad(e)===j.LIVE&&!Number.isFinite(e.duration)&&(i.on(W.Events.LEVEL_UPDATED,p),ge(e,"durationchange",()=>{Number.isFinite(e.duration)&&i.off(W.Events.LEVELS_UPDATED,p)}))}),i.on(W.Events.ERROR,(d,u)=>{var v,f;let b=Ab(u,t);if(b.muxCode===O.NETWORK_NOT_READY){let y=(v=me.get(e))!=null?v:{},T=(f=y.retryCount)!=null?f:0;if(T<6){let _=T===0?5e3:6e4,S=new C(`Retrying in ${_/1e3} seconds...`,b.code,b.fatal);Object.assign(S,b),it(e,S),setTimeout(()=>{y.retryCount=T+1,u.details==="manifestLoadError"&&u.url&&i.loadSource(u.url)},_);return}else{y.retryCount=0;let _=new C('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',b.code,b.fatal);Object.assign(_,b),it(e,_);return}}it(e,b)}),i.on(W.Events.MANIFEST_LOADED,()=>{let d=me.get(e);d&&d.error&&(d.error=null,d.retryCount=0,e.dispatchEvent(new Event("emptied")),e.dispatchEvent(new Event("loadstart")))}),e.addEventListener("error",rd),ge(e,"waiting",l),x0(t,i),O0(e,i),i.attachMedia(e)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function Tp(t){var e;let i=t.target,a=(e=me.get(i))==null?void 0:e.startTime;if(a&&y0(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function Ap(t){if(!t.isTrusted)return;t.stopImmediatePropagation();let e=t.target;if(!(e!=null&&e.error))return;let{message:i,code:a}=e.error,r=new C(i,a);if(e.src&&a===C.MEDIA_ERR_SRC_NOT_SUPPORTED&&e.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=pp(e))!=null?n:e.error;(s==null?void 0:s.code)===C.MEDIA_ERR_SRC_NOT_SUPPORTED&&it(e,r)},500);return}if(e.src&&(a!==C.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(e.src);r.data={response:{code:n}}}catch{}it(e,r)}function it(t,e){var i;e.fatal&&(((i=me.get(t))!=null?i:{}).error=e,t.dispatchEvent(new CustomEvent("error",{detail:e})))}function rd(t){var e,i;if(!(t instanceof CustomEvent)||!(t.detail instanceof C))return;let a=t.target,r=t.detail;!r||!r.fatal||(((e=me.get(a))!=null?e:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var Ab=(t,e)=>{var i,a,r;t.fatal?console.error("getErrorFromHlsErrorData()",t):e.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",t);let n={[W.ErrorTypes.NETWORK_ERROR]:C.MEDIA_ERR_NETWORK,[W.ErrorTypes.MEDIA_ERROR]:C.MEDIA_ERR_DECODE,[W.ErrorTypes.KEY_SYSTEM_ERROR]:C.MEDIA_ERR_ENCRYPTED},s=m=>[W.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,W.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(m.details)?C.MEDIA_ERR_NETWORK:n[m.type],o=m=>{if(m.type===W.ErrorTypes.KEY_SYSTEM_ERROR)return re.DRM;if(m.type===W.ErrorTypes.NETWORK_ERROR)return re.VIDEO},l,c=s(t);if(c===C.MEDIA_ERR_NETWORK&&t.response){let m=(i=o(t))!=null?i:re.VIDEO;l=(a=Ao(t.response,m,e,t.fatal))!=null?a:new C("",c,t.fatal)}else if(c===C.MEDIA_ERR_ENCRYPTED)if(t.details===W.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let m=M("Attempting to play DRM-protected content without providing a DRM token.");l=new C(m,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_MISSING_TOKEN}else if(t.details===W.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let m=M("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");l=new C(m,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(t.details===W.ErrorDetails.KEY_SYSTEM_NO_SESSION){let m=M("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");l=new C(m,C.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(t.details===W.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let m=M("Failed to update DRM license. This may be an issue with the player or your protected content.");l=new C(m,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(t.details===W.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let m=M("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");l=new C(m,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(t.details===W.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let m=M("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");l=new C(m,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_CDM_ERROR}else if(t.details===W.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let m=M("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");l=new C(m,C.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_OUTPUT_RESTRICTED}else l=new C(t.error.message,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_ERROR;else l=new C("",c,t.fatal);return l.context||(l.context=`${t.url?`url: ${t.url}
`:""}${t.response&&(t.response.code||t.response.text)?`response: ${t.response.code}, ${t.response.text}
`:""}${t.reason?`failure reason: ${t.reason}
`:""}${t.level?`level: ${t.level}
`:""}${t.parent?`parent stream controller: ${t.parent}
`:""}${t.buffer?`buffer length: ${t.buffer}
`:""}${t.error?`error: ${t.error}
`:""}${t.event?`event: ${t.event}
`:""}${t.err?`error message: ${(r=t.err)==null?void 0:r.message}
`:""}`),l.data=t,l},kp=t=>{throw TypeError(t)},Iu=(t,e,i)=>e.has(t)||kp("Cannot "+i),Ne=(t,e,i)=>(Iu(t,e,"read from private field"),i?i.call(t):e.get(t)),_t=(t,e,i)=>e.has(t)?kp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ct=(t,e,i,a)=>(Iu(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Kn=(t,e,i)=>(Iu(t,e,"access private method"),i),kb=()=>{try{return"0.29.2"}catch{}return"UNKNOWN"},Sb=kb(),wb=()=>Sb,Ib=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,g={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},Rb=Object.values(g),fh=wb(),Eh="mux-video",Ot,Ur,us,Hr,cs,hs,ms,ps,vs,Br,Ra,Wr,Cb=class extends Wn{constructor(){super(),_t(this,Ra),_t(this,Ot),_t(this,Ur),_t(this,us),_t(this,Hr,{}),_t(this,cs,{}),_t(this,hs),_t(this,ms),_t(this,ps),_t(this,vs),_t(this,Br,""),ct(this,us,Au()),this.nativeEl.addEventListener("muxmetadata",e=>{var i;let a=db(this.nativeEl),r=(i=this.metadata)!=null?i:{};this.metadata={...a,...r},(a==null?void 0:a["com.mux.video.branding"])==="mux-free-plan"&&(ct(this,Br,"default"),this.updateLogo())})}static get NAME(){return Eh}static get VERSION(){return fh}static get observedAttributes(){var e;return[...Rb,...(e=Wn.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?Ib:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var i;return`
      ${Wn.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((i=e[g.LOGO])!=null?i:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(g.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?To.includes(e)?this.setAttribute(g.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${To.join()}`):this.removeAttribute(g.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(g.PLAYER_INIT_TIME)?+this.getAttribute(g.PLAYER_INIT_TIME):Ne(this,us)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(g.PLAYER_INIT_TIME):this.setAttribute(g.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=Ne(this,ps))!=null?e:Eh}set playerSoftwareName(e){ct(this,ps,e)}get playerSoftwareVersion(){var e;return(e=Ne(this,ms))!=null?e:fh}set playerSoftwareVersion(e){ct(this,ms,e)}get _hls(){var e;return(e=Ne(this,Ot))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=pp(this.nativeEl))!=null?e:null}get errorTranslator(){return Ne(this,vs)}set errorTranslator(e){ct(this,vs,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(g.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(g.TYPE,e):this.removeAttribute(g.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(g.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(g.DEBUG,""):this.removeAttribute(g.DEBUG))}get disableTracking(){return this.hasAttribute(g.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(g.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(g.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(g.DISABLE_COOKIES,""):this.removeAttribute(g.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(g.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(g.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(g.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(g.START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(g.START_TIME):this.setAttribute(g.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(g.PLAYBACK_ID)?this.getAttribute(g.PLAYBACK_ID):(e=ku(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(g.PLAYBACK_ID,e):this.removeAttribute(g.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(g.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(g.MAX_RESOLUTION,e):this.removeAttribute(g.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(g.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(g.MIN_RESOLUTION,e):this.removeAttribute(g.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(g.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(g.MAX_AUTO_RESOLUTION):this.setAttribute(g.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(g.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(g.RENDITION_ORDER,e):this.removeAttribute(g.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(g.PROGRAM_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programStartTime(e){e==null?this.removeAttribute(g.PROGRAM_START_TIME):this.setAttribute(g.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(g.PROGRAM_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programEndTime(e){e==null?this.removeAttribute(g.PROGRAM_END_TIME):this.setAttribute(g.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(g.ASSET_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetStartTime(e){e==null?this.removeAttribute(g.ASSET_START_TIME):this.setAttribute(g.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(g.ASSET_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetEndTime(e){e==null?this.removeAttribute(g.ASSET_END_TIME):this.setAttribute(g.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(g.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(g.CUSTOM_DOMAIN,e):this.removeAttribute(g.CUSTOM_DOMAIN))}get drmToken(){var e;return(e=this.getAttribute(g.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(g.DRM_TOKEN,e):this.removeAttribute(g.DRM_TOKEN))}get playbackToken(){var e,i,a,r;if(this.hasAttribute(g.PLAYBACK_TOKEN))return(e=this.getAttribute(g.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(g.PLAYBACK_ID)){let[,n]=_u((i=this.playbackId)!=null?i:"");return(a=new URLSearchParams(n).get("token"))!=null?a:void 0}if(this.src)return(r=new URLSearchParams(this.src).get("token"))!=null?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(g.PLAYBACK_TOKEN,e):this.removeAttribute(g.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(g.PLAYBACK_TOKEN),i=this.getAttribute(g.DRM_TOKEN);return{...Ne(this,cs),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{}}}set tokens(e){ct(this,cs,e??{})}get ended(){return Ep(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(g.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(g.ENV_KEY,e):this.removeAttribute(g.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(g.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(g.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(g.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(g.STREAM_TYPE))!=null?e:ad(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(g.STREAM_TYPE,e):this.removeAttribute(g.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(g.TARGET_LIVE_WINDOW)?+this.getAttribute(g.TARGET_LIVE_WINDOW):ub(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(g.TARGET_LIVE_WINDOW):this.setAttribute(g.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,i;if(this.hasAttribute(g.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=(e=this.nativeEl.seekable.end(0))!=null?e:0,n=(i=this.nativeEl.seekable.start(0))!=null?i:0;return Math.max(n,r-a)}return cb(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(g.LIVE_EDGE_OFFSET))return+this.getAttribute(g.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(g.LIVE_EDGE_OFFSET):this.setAttribute(g.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return Su(this.nativeEl)}async addCuePoints(e){return op(this.nativeEl,e)}get activeCuePoint(){return lp(this.nativeEl)}get cuePoints(){return P0(this.nativeEl)}async addChapters(e){return up(this.nativeEl,e)}get activeChapter(){return cp(this.nativeEl)}get chapters(){return U0(this.nativeEl)}getStartDate(){return B0(this.nativeEl,this._hls)}get currentPdt(){return W0(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(g.PREFER_PLAYBACK);if(e===zt.MSE||e===zt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===zt.MSE||e===zt.NATIVE?this.setAttribute(g.PREFER_PLAYBACK,e):this.removeAttribute(g.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![g.METADATA_URL].includes(e)).reduce((e,i)=>{let a=this.getAttribute(i);return a!=null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...Ne(this,Hr)}}set metadata(e){ct(this,Hr,e??{}),this.mux&&this.mux.emit("hb",Ne(this,Hr))}get _hlsConfig(){return Ne(this,hs)}set _hlsConfig(e){ct(this,hs,e)}get logo(){var e;return(e=this.getAttribute(g.LOGO))!=null?e:Ne(this,Br)}set logo(e){e?this.setAttribute(g.LOGO,e):this.removeAttribute(g.LOGO)}load(){ct(this,Ot,pb(this,this.nativeEl,Ne(this,Ot)))}unload(){_p(this.nativeEl,Ne(this,Ot),this),ct(this,Ot,void 0)}attributeChangedCallback(e,i,a){var r,n;switch(Wn.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,i,a),e){case g.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case g.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let s=!!i,o=!!a;!s&&o?Kn(this,Ra,Wr).call(this):s&&!o?this.unload():s&&o&&(this.unload(),Kn(this,Ra,Wr).call(this));break}case"autoplay":if(a===i)break;(r=Ne(this,Ot))==null||r.setAutoplay(this.autoplay);break;case"preload":if(a===i)break;(n=Ne(this,Ot))==null||n.setPreload(a);break;case g.PLAYBACK_ID:this.src=id(this);break;case g.DEBUG:{let s=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=s);break}case g.METADATA_URL:a&&fetch(a).then(s=>s.json()).then(s=>this.metadata=s).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case g.STREAM_TYPE:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case g.TARGET_LIVE_WINDOW:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case g.LOGO:(a==null||a!==i)&&this.updateLogo();break;case g.DISABLE_TRACKING:{if(a==null||a!==i){let s=this.currentTime,o=this.paused;this.unload(),Kn(this,Ra,Wr).call(this).then(()=>{this.currentTime=s,o||this.play()})}break}case g.DISABLE_COOKIES:{(a==null||a!==i)&&this.disableCookies&&document.cookie.split(";").forEach(s=>{s.trim().startsWith("muxData")&&(document.cookie=s.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break}}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let i=this.constructor.getLogoHTML(Ne(this,Br)||this.logo);e.innerHTML=i}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.nativeEl&&this.src&&!Ne(this,Ot)&&Kn(this,Ra,Wr).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Ot=new WeakMap,Ur=new WeakMap,us=new WeakMap,Hr=new WeakMap,cs=new WeakMap,hs=new WeakMap,ms=new WeakMap,ps=new WeakMap,vs=new WeakMap,Br=new WeakMap,Ra=new WeakSet,Wr=async function(){Ne(this,Ur)||(await ct(this,Ur,Promise.resolve()),ct(this,Ur,null),this.load())};const la=new WeakMap;class Dl extends Error{}class Lb extends Error{}const Db=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],Mb=globalThis.WeakRef?class extends Set{add(t){super.add(new WeakRef(t))}forEach(t){super.forEach(e=>{const i=e.deref();i&&t(i)})}}:Set;function xb(t){var e,i,a;(i=(e=globalThis.chrome)==null?void 0:e.cast)!=null&&i.isAvailable?(a=globalThis.cast)!=null&&a.framework?t():customElements.whenDefined("google-cast-button").then(t):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(t)}}function Ob(){return globalThis.chrome}function Nb(){var i;const t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if((i=globalThis.chrome)!=null&&i.cast||document.querySelector(`script[src="${t}"]`))return;const e=document.createElement("script");e.src=t,document.head.append(e)}function Mi(){var t,e;return(e=(t=globalThis.cast)==null?void 0:t.framework)==null?void 0:e.CastContext.getInstance()}function Ru(){var t;return(t=Mi())==null?void 0:t.getCurrentSession()}function Cu(){var t;return(t=Ru())==null?void 0:t.getSessionObj().media[0]}function Pb(t){return new Promise((e,i)=>{Cu().editTracksInfo(t,e,i)})}function $b(t){return new Promise((e,i)=>{Cu().getStatus(t,e,i)})}function _h(t){return Mi().setOptions({...Sp(),...t})}function Sp(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function Ub(t){if(!t)return;const e=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,i=t.match(e);return i?i[1]:null}function Hb(t){const e=t.split(`
`),i=[];for(let a=0;a<e.length;a++)if(e[a].trim().startsWith("#EXT-X-STREAM-INF")){const n=e[a+1]?e[a+1].trim():"";n&&!n.startsWith("#")&&i.push(n)}return i}function Bb(t){return t.split(`
`).find(a=>!a.trim().startsWith("#")&&a.trim()!=="")}async function Wb(t){try{const i=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return Db.some(a=>i===a)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function Fb(t){try{const e=await(await fetch(t)).text();let i=e;const a=Hb(e);if(a.length>0){const s=new URL(a[0],t).toString();i=await(await fetch(s)).text()}const r=Bb(i);return Ub(r)}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}const fs=new Mb,fi=new WeakSet;let we;xb(()=>{var t,e,i,a;if(!((e=(t=globalThis.chrome)==null?void 0:t.cast)!=null&&e.isAvailable)){console.debug("chrome.cast.isAvailable",(a=(i=globalThis.chrome)==null?void 0:i.cast)==null?void 0:a.isAvailable);return}we||(we=cast.framework,Mi().addEventListener(we.CastContextEventType.CAST_STATE_CHANGED,r=>{fs.forEach(n=>{var s,o;return(o=(s=la.get(n)).onCastStateChanged)==null?void 0:o.call(s,r)})}),Mi().addEventListener(we.CastContextEventType.SESSION_STATE_CHANGED,r=>{fs.forEach(n=>{var s,o;return(o=(s=la.get(n)).onSessionStateChanged)==null?void 0:o.call(s,r)})}),fs.forEach(r=>{var n,s;return(s=(n=la.get(r)).init)==null?void 0:s.call(n)}))});let bh=0;var Z,xn,et,oi,sa,oa,Di,Qo,li,Fi,zo,wp,Zo,Ip,On,nd,jo,Rp,Nn,sd,Xo,Cp,Pn,od;class Kb extends EventTarget{constructor(i){super();ue(this,li);ue(this,zo);ue(this,Zo);ue(this,On);ue(this,jo);ue(this,Nn);ue(this,Xo);ue(this,Pn);ue(this,Z,void 0);ue(this,xn,void 0);ue(this,et,void 0);ue(this,oi,void 0);ue(this,sa,"disconnected");ue(this,oa,!1);ue(this,Di,new Set);ue(this,Qo,new WeakMap);st(this,Z,i),fs.add(this),la.set(this,{init:()=>ot(this,Nn,sd).call(this),onCastStateChanged:()=>ot(this,On,nd).call(this),onSessionStateChanged:()=>ot(this,jo,Rp).call(this),getCastPlayer:()=>k(this,li,Fi)}),ot(this,Nn,sd).call(this)}get state(){return k(this,sa)}async watchAvailability(i){if(k(this,Z).disableRemotePlayback)throw new Dl("disableRemotePlayback attribute is present.");return k(this,Qo).set(i,++bh),k(this,Di).add(i),queueMicrotask(()=>i(ot(this,Zo,Ip).call(this))),bh}async cancelWatchAvailability(i){if(k(this,Z).disableRemotePlayback)throw new Dl("disableRemotePlayback attribute is present.");i?k(this,Di).delete(i):k(this,Di).clear()}async prompt(){var a,r,n,s;if(k(this,Z).disableRemotePlayback)throw new Dl("disableRemotePlayback attribute is present.");if(!((r=(a=globalThis.chrome)==null?void 0:a.cast)!=null&&r.isAvailable))throw new Lb("The RemotePlayback API is disabled on this platform.");const i=fi.has(k(this,Z));fi.add(k(this,Z)),_h(k(this,Z).castOptions),Object.entries(k(this,oi)).forEach(([o,l])=>{k(this,et).controller.addEventListener(o,l)});try{await Mi().requestSession()}catch(o){if(i||fi.delete(k(this,Z)),o==="cancel")return;throw new Error(o)}(s=(n=la.get(k(this,Z)))==null?void 0:n.loadOnPrompt)==null||s.call(n)}}Z=new WeakMap,xn=new WeakMap,et=new WeakMap,oi=new WeakMap,sa=new WeakMap,oa=new WeakMap,Di=new WeakMap,Qo=new WeakMap,li=new WeakSet,Fi=function(){if(fi.has(k(this,Z)))return k(this,et)},zo=new WeakSet,wp=function(){fi.has(k(this,Z))&&(Object.entries(k(this,oi)).forEach(([i,a])=>{k(this,et).controller.removeEventListener(i,a)}),fi.delete(k(this,Z)),k(this,Z).muted=k(this,et).isMuted,k(this,Z).currentTime=k(this,et).savedPlayerState.currentTime,k(this,et).savedPlayerState.isPaused===!1&&k(this,Z).play())},Zo=new WeakSet,Ip=function(){var a;const i=(a=Mi())==null?void 0:a.getCastState();return i&&i!=="NO_DEVICES_AVAILABLE"},On=new WeakSet,nd=function(){const i=Mi().getCastState();if(fi.has(k(this,Z))&&i==="CONNECTING"&&(st(this,sa,"connecting"),this.dispatchEvent(new Event("connecting"))),!k(this,oa)&&(i!=null&&i.includes("CONNECT"))){st(this,oa,!0);for(let a of k(this,Di))a(!0)}else if(k(this,oa)&&(!i||i==="NO_DEVICES_AVAILABLE")){st(this,oa,!1);for(let a of k(this,Di))a(!1)}},jo=new WeakSet,Rp=async function(){var a;const{SESSION_RESUMED:i}=we.SessionState;if(Mi().getSessionState()===i&&k(this,Z).castSrc===((a=Cu())==null?void 0:a.media.contentId)){fi.add(k(this,Z)),Object.entries(k(this,oi)).forEach(([r,n])=>{k(this,et).controller.addEventListener(r,n)});try{await $b(new chrome.cast.media.GetStatusRequest)}catch(r){console.error(r)}k(this,oi)[we.RemotePlayerEventType.IS_PAUSED_CHANGED](),k(this,oi)[we.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},Nn=new WeakSet,sd=function(){!we||k(this,xn)||(st(this,xn,!0),_h(k(this,Z).castOptions),k(this,Z).textTracks.addEventListener("change",()=>ot(this,Pn,od).call(this)),ot(this,On,nd).call(this),st(this,et,new we.RemotePlayer),new we.RemotePlayerController(k(this,et)),st(this,oi,{[we.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:i})=>{i===!0?(st(this,sa,"connected"),this.dispatchEvent(new Event("connect"))):(ot(this,zo,wp).call(this),st(this,sa,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[we.RemotePlayerEventType.DURATION_CHANGED]:()=>{k(this,Z).dispatchEvent(new Event("durationchange"))},[we.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{k(this,Z).dispatchEvent(new Event("volumechange"))},[we.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{k(this,Z).dispatchEvent(new Event("volumechange"))},[we.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var i;(i=k(this,li,Fi))!=null&&i.isMediaLoaded&&k(this,Z).dispatchEvent(new Event("timeupdate"))},[we.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{k(this,Z).dispatchEvent(new Event("resize"))},[we.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{k(this,Z).dispatchEvent(new Event(this.paused?"pause":"play"))},[we.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var i,a;((i=k(this,li,Fi))==null?void 0:i.playerState)!==chrome.cast.media.PlayerState.PAUSED&&k(this,Z).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[(a=k(this,li,Fi))==null?void 0:a.playerState]))},[we.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var i;(i=k(this,li,Fi))!=null&&i.isMediaLoaded&&(await Promise.resolve(),ot(this,Xo,Cp).call(this))}}))},Xo=new WeakSet,Cp=function(){ot(this,Pn,od).call(this)},Pn=new WeakSet,od=async function(){var d,u,v;if(!k(this,li,Fi))return;const a=(((d=k(this,et).mediaInfo)==null?void 0:d.tracks)??[]).filter(({type:f})=>f===chrome.cast.media.TrackType.TEXT),r=[...k(this,Z).textTracks].filter(({kind:f})=>f==="subtitles"||f==="captions"),n=a.map(({language:f,name:b,trackId:y})=>{const{mode:T}=r.find(_=>_.language===f&&_.label===b)??{};return T?{mode:T,trackId:y}:!1}).filter(Boolean),o=n.filter(({mode:f})=>f!=="showing").map(({trackId:f})=>f),l=n.find(({mode:f})=>f==="showing"),c=((v=(u=Ru())==null?void 0:u.getSessionObj().media[0])==null?void 0:v.activeTrackIds)??[];let m=c;if(c.length&&(m=m.filter(f=>!o.includes(f))),l!=null&&l.trackId&&(m=[...m,l.trackId]),m=[...new Set(m)],!((f,b)=>f.length===b.length&&f.every(y=>b.includes(y)))(c,m))try{const f=new chrome.cast.media.EditTracksInfoRequest(m);await Pb(f)}catch(f){console.error(f)}};const Vb=t=>{var e,i,a,r,n,s,Y,l,Lp;return e=class extends t{constructor(){super(...arguments);ue(this,s);ue(this,l);ue(this,i,{paused:!1});ue(this,a,Sp());ue(this,r,void 0);ue(this,n,void 0)}get remote(){return k(this,n)?k(this,n):Ob()?(this.disableRemotePlayback||Nb(),la.set(this,{loadOnPrompt:()=>ot(this,l,Lp).call(this)}),st(this,n,new Kb(this))):super.remote}attributeChangedCallback(d,u,v){if(super.attributeChangedCallback(d,u,v),d==="cast-receiver"&&v){k(this,a).receiverApplicationId=v;return}if(k(this,s,Y))switch(d){case"cast-stream-type":case"cast-src":this.load();break}}async load(){var y;if(!k(this,s,Y))return super.load();const d=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);d.customData=this.castCustomData;const u=[...this.querySelectorAll("track")].filter(({kind:T,src:_})=>_&&(T==="subtitles"||T==="captions")),v=[];let f=0;if(u.length&&(d.tracks=u.map(T=>{const _=++f;v.length===0&&T.track.mode==="showing"&&v.push(_);const S=new chrome.cast.media.Track(_,chrome.cast.media.TrackType.TEXT);return S.trackContentId=T.src,S.trackContentType="text/vtt",S.subtype=T.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,S.name=T.label,S.language=T.srclang,S})),this.castStreamType==="live"?d.streamType=chrome.cast.media.StreamType.LIVE:d.streamType=chrome.cast.media.StreamType.BUFFERED,d.metadata=new chrome.cast.media.GenericMediaMetadata,d.metadata.title=this.title,d.metadata.images=[{url:this.poster}],Wb(this.castSrc)){const T=await Fb(this.castSrc);(T==null?void 0:T.includes("m4s"))||(T==null?void 0:T.includes("mp4"))?(d.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,d.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):T!=null&&T.includes("ts")&&(d.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,d.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}const b=new chrome.cast.media.LoadRequest(d);b.currentTime=super.currentTime??0,b.autoplay=!k(this,i).paused,b.activeTrackIds=v,await((y=Ru())==null?void 0:y.loadMedia(b)),this.dispatchEvent(new Event("volumechange"))}play(){var d;if(k(this,s,Y)){k(this,s,Y).isPaused&&((d=k(this,s,Y).controller)==null||d.playOrPause());return}return super.play()}pause(){var d;if(k(this,s,Y)){k(this,s,Y).isPaused||(d=k(this,s,Y).controller)==null||d.playOrPause();return}super.pause()}get castOptions(){return k(this,a)}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(d){this.castReceiver!=d&&this.setAttribute("cast-receiver",`${d}`)}get castSrc(){var d;return this.getAttribute("cast-src")??((d=this.querySelector("source"))==null?void 0:d.src)??this.currentSrc}set castSrc(d){this.castSrc!=d&&this.setAttribute("cast-src",`${d}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(d){this.setAttribute("cast-content-type",`${d}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(d){this.setAttribute("cast-stream-type",`${d}`)}get castCustomData(){return k(this,r)}set castCustomData(d){const u=typeof d;if(!["object","undefined"].includes(u)){console.error(`castCustomData must be nullish or an object but value was of type ${u}`);return}st(this,r,d)}get readyState(){if(k(this,s,Y))switch(k(this,s,Y).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return k(this,s,Y)?k(this,s,Y).isPaused:super.paused}get muted(){var d;return k(this,s,Y)?(d=k(this,s,Y))==null?void 0:d.isMuted:super.muted}set muted(d){var u;if(k(this,s,Y)){(d&&!k(this,s,Y).isMuted||!d&&k(this,s,Y).isMuted)&&((u=k(this,s,Y).controller)==null||u.muteOrUnmute());return}super.muted=d}get volume(){var d;return k(this,s,Y)?((d=k(this,s,Y))==null?void 0:d.volumeLevel)??1:super.volume}set volume(d){var u;if(k(this,s,Y)){k(this,s,Y).volumeLevel=+d,(u=k(this,s,Y).controller)==null||u.setVolumeLevel();return}super.volume=d}get duration(){var d,u;return k(this,s,Y)&&((d=k(this,s,Y))!=null&&d.isMediaLoaded)?((u=k(this,s,Y))==null?void 0:u.duration)??NaN:super.duration}get currentTime(){var d,u;return k(this,s,Y)&&((d=k(this,s,Y))!=null&&d.isMediaLoaded)?((u=k(this,s,Y))==null?void 0:u.currentTime)??0:super.currentTime}set currentTime(d){var u;if(k(this,s,Y)){k(this,s,Y).currentTime=d,(u=k(this,s,Y).controller)==null||u.seek();return}super.currentTime=d}},i=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,Y=function(){var d,u;return(u=(d=la.get(this.remote))==null?void 0:d.getCastPlayer)==null?void 0:u.call(d)},l=new WeakSet,Lp=async function(){k(this,i).paused=Bn(e.prototype,this,"paused"),Bn(e.prototype,this,"pause").call(this),this.muted=Bn(e.prototype,this,"muted");try{await this.load()}catch(d){console.error(d)}},jc(e,"observedAttributes",[...t.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),e};var Dp=t=>{throw TypeError(t)},Mp=(t,e,i)=>e.has(t)||Dp("Cannot "+i),xp=(t,e,i)=>(Mp(t,e,"read from private field"),i?i.call(t):e.get(t)),Op=(t,e,i)=>e.has(t)?Dp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Np=(t,e,i,a)=>(Mp(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),al=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class t extends al{}globalThis.DocumentFragment=t}var Lu=class extends al{},qb=class extends al{},Yb={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Lu)}},Es,Gb=class{constructor(e,i={}){Op(this,Es),Np(this,Es,i==null?void 0:i.detail)}get detail(){return xp(this,Es)}initCustomEvent(){}};Es=new WeakMap;function Qb(t,e){return new Lu}var zb={document:{createElement:Qb},DocumentFragment,customElements:Yb,CustomEvent:Gb,EventTarget:al,HTMLElement:Lu,HTMLVideoElement:qb},Zb=typeof window>"u"||typeof globalThis.customElements>"u",Ml=Zb?zb:globalThis,_s,gh=class extends Vb(rE(Cb)){constructor(){super(...arguments),Op(this,_s)}get autoplay(){let t=this.getAttribute("autoplay");return t===null?!1:t===""?!0:t}set autoplay(t){let e=this.autoplay;t!==e&&(t?this.setAttribute("autoplay",typeof t=="string"?t:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var t;return(t=xp(this,_s))!=null?t:this.muxCastCustomData}set castCustomData(t){Np(this,_s,t)}};_s=new WeakMap;Ml.customElements.get("mux-video")||(Ml.customElements.define("mux-video",gh),Ml.MuxVideoElement=gh);const R={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},Q={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Pp={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},$p=Object.entries(Pp),h=$p.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),jb={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},mi=$p.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...jb});Object.entries(mi).reduce((t,[e,i])=>{const a=h[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const Xb=Object.entries(h).reduce((t,[e,i])=>{const a=mi[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),Xt={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},ir={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},xl={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},Ze={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ni={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Jb={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function eg(t){return t==null?void 0:t.map(ig).join(" ")}function tg(t){return t==null?void 0:t.split(/\s+/).map(ag)}function ig(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function ag(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function rg(t){return t==null?void 0:t.map(sg).join(" ")}function ng(t){return t==null?void 0:t.split(/\s+/).map(og)}function sg(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function og(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function lg(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Du(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function Up(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const Hp=t=>new Promise(e=>setTimeout(e,t)),yh=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],dg=(t,e)=>{const i=t===1?yh[e].singular:yh[e].plural;return`${t} ${i}`},ln=t=>{if(!Du(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((o,l)=>o&&dg(o,l)).filter(o=>o).join(", ")}${i?" remaining":""}`};function Oi(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const s=Math.floor(e/60%60),o=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}const ug={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."};var Th;const Ol={en:ug};let ld=((Th=globalThis.navigator)==null?void 0:Th.language)||"en";const cg=t=>{ld=t},hg=t=>{var e,i,a;const[r]=ld.split("-");return((e=Ol[ld])==null?void 0:e[t])||((i=Ol[r])==null?void 0:i[t])||((a=Ol.en)==null?void 0:a[t])||t},D=(t,e={})=>hg(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`);let Bp=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class Wp extends Bp{}let Ah=class extends Wp{constructor(){super(...arguments),this.role=null}};class mg{observe(){}unobserve(){}disconnect(){}}const Fp={createElement:function(){return new bn.HTMLElement},createElementNS:function(){return new bn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},bn={ResizeObserver:mg,document:Fp,Node:Wp,Element:Ah,HTMLElement:class extends Ah{constructor(){super(...arguments),this.innerHTML=""}get content(){return new bn.DocumentFragment}},DocumentFragment:class extends Bp{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},Kp="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>"u"||typeof window.customElements>"u",Vp=Object.keys(bn).every(t=>t in globalThis),E=Kp&&!Vp?bn:globalThis,ke=Kp&&!Vp?Fp:globalThis.document,kh=new WeakMap,Mu=t=>{let e=kh.get(t);return e||kh.set(t,e=new Set),e},qp=new E.ResizeObserver(t=>{for(const e of t)for(const i of Mu(e.target))i(e)});function cr(t,e){Mu(t).add(e),qp.observe(t)}function hr(t,e){const i=Mu(t);i.delete(e),i.size||qp.unobserve(t)}function rt(t){const e={};for(const i of t)e[i.name]=i.value;return e}function Ve(t){var e;return(e=dd(t))!=null?e:Er(t,"media-controller")}function dd(t){var e;const{MEDIA_CONTROLLER:i}=Q,a=t.getAttribute(i);if(a)return(e=rl(t))==null?void 0:e.getElementById(a)}const Yp=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},pg=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},Gp=(t,e)=>pg(t,e)[0],vi=(t,e)=>!t||!e?!1:t!=null&&t.contains(e)?!0:vi(t,e.getRootNode().host),Er=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||Er(t.getRootNode().host,e)};function xu(t=document){var e;const i=t==null?void 0:t.activeElement;return i?(e=xu(i.shadowRoot))!=null?e:i:null}function rl(t){var e;const i=(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Qp(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function vg(t,e,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((t-i.x)*r+(e-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function Ie(t,e){const i=fg(t,a=>a===e);return i||Ou(t,e)}function fg(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(e(s.selectorText))return s}}function Ou(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r==null?void 0:r[r.length-1];return n!=null&&n.sheet?(n==null||n.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function ne(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function pe(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}ne(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function F(t,e){return t.hasAttribute(e)}function K(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}F(t,e)!=i&&t.toggleAttribute(e,i)}function se(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function oe(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;se(t,e,void 0)!==a&&t.setAttribute(e,a)}var zp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ei=(t,e,i)=>(zp(t,e,"read from private field"),i?i.call(t):e.get(t)),Eg=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Vn=(t,e,i,a)=>(zp(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Fe;function _g(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class nl extends E.HTMLElement{constructor(){if(super(),Eg(this,Fe,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Q.MEDIA_CONTROLLER,h.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Q.MEDIA_CONTROLLER&&(i&&((n=(r=Ei(this,Fe))==null?void 0:r.unassociateElement)==null||n.call(r,this),Vn(this,Fe,null)),a&&this.isConnected&&(Vn(this,Fe,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Ei(this,Fe))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Vn(this,Fe,bg(this)),this.getAttribute(Q.MEDIA_CONTROLLER)&&((i=(e=Ei(this,Fe))==null?void 0:e.associateElement)==null||i.call(e,this)),(a=Ei(this,Fe))==null||a.addEventListener("pointerdown",this),(r=Ei(this,Fe))==null||r.addEventListener("click",this)}disconnectedCallback(){var e,i,a,r;this.getAttribute(Q.MEDIA_CONTROLLER)&&((i=(e=Ei(this,Fe))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=Ei(this,Fe))==null||a.removeEventListener("pointerdown",this),(r=Ei(this,Fe))==null||r.removeEventListener("click",this),Vn(this,Fe,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:s}=e,{left:o,top:l,width:c,height:m}=this.getBoundingClientRect(),p=n-o,d=s-l;if(p<0||d<0||p>c||d>m||c===0&&m===0)return;const u=this._pointerType||"mouse";if(this._pointerType=void 0,u===xl.TOUCH){this.handleTap(e);return}else if(u===xl.MOUSE||u===xl.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return F(this,h.MEDIA_PAUSED)}set mediaPaused(e){K(this,h.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new E.CustomEvent(i,{composed:!0,bubbles:!0}))}}Fe=new WeakMap;nl.shadowRootOptions={mode:"open"};nl.getTemplateHTML=_g;function bg(t){var e;const i=t.getAttribute(Q.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):Er(t,"media-controller")}E.customElements.get("media-gesture-receiver")||E.customElements.define("media-gesture-receiver",nl);var Sh=nl,Nu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},tt=(t,e,i)=>(Nu(t,e,"read from private field"),i?i.call(t):e.get(t)),je=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ki=(t,e,i,a)=>(Nu(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),pt=(t,e,i)=>(Nu(t,e,"access private method"),i),ko,Ca,gn,Za,bs,ud,Zp,Fr,gs,cd,jp,hd,Xp,yn,sl,ol,Pu,mr,Tn;const x={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function gg(t){return`
    <style>
      
      :host([${h.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${x.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${x.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${x.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${x.AUDIO}])[${x.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${x.AUDIO}])[${x.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${x.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${x.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${x.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${x.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${x.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${x.USER_INACTIVE}]:not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_AIRPLAYING}]):not([${h.MEDIA_IS_CASTING}]):not([${x.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${x.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${x.USER_INACTIVE}]:not([${x.NO_AUTOHIDE}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${x.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${x.USER_INACTIVE}][${x.AUTOHIDE_OVER_CONTROLS}]:not([${x.NO_AUTOHIDE}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${x.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${x.AUDIO}])[${h.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Sh.shadowRootOptions.mode}">
          ${Sh.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const yg=Object.values(h),Tg="sm:384 md:576 lg:768 xl:960";function Ag(t){Jp(t.target,t.contentRect.width)}function Jp(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(x.BREAKPOINTS))!=null?i:Tg,r=kg(a),n=Sg(r,e);let s=!1;if(Object.keys(r).forEach(o=>{if(n.includes(o)){t.hasAttribute(`breakpoint${o}`)||(t.setAttribute(`breakpoint${o}`,""),s=!0);return}t.hasAttribute(`breakpoint${o}`)&&(t.removeAttribute(`breakpoint${o}`),s=!0)}),s){const o=new CustomEvent(mi.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(o)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(mi.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function kg(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function Sg(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class ll extends E.HTMLElement{constructor(){if(super(),je(this,ud),je(this,cd),je(this,hd),je(this,yn),je(this,ol),je(this,mr),je(this,ko,0),je(this,Ca,null),je(this,gn,null),je(this,Za,void 0),this.breakpointsComputed=!1,je(this,bs,new MutationObserver(pt(this,ud,Zp).bind(this))),je(this,Fr,!1),je(this,gs,i=>{tt(this,Fr)||(setTimeout(()=>{Ag(i),Ki(this,Fr,!1)},0),Ki(this,Fr,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const i=rt(this.attributes),a=this.constructor.getTemplateHTML(i);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(a):this.shadowRoot.innerHTML=a}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){tt(this,Ca)&&this.mediaUnsetCallback(tt(this,Ca));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[x.AUTOHIDE,x.GESTURES_DISABLED].concat(yg).filter(e=>![h.MEDIA_RENDITION_LIST,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_CHAPTERS_CUES,h.MEDIA_WIDTH,h.MEDIA_HEIGHT,h.MEDIA_ERROR,h.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==x.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Ki(this,Ca,e),e.localName.includes("-")&&await E.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;tt(this,bs).observe(this,{childList:!0,subtree:!0}),cr(this,tt(this,gs));const i=this.getAttribute(x.AUDIO)!=null,a=D(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(x.USER_INACTIVE,""),Jp(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=E.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;tt(this,bs).disconnect(),hr(this,tt(this,gs)),this.media&&this.mediaUnsetCallback(this.media),(e=E.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){Ki(this,Ca,null)}handleEvent(e){switch(e.type){case"pointerdown":Ki(this,ko,e.timeStamp);break;case"pointermove":pt(this,cd,jp).call(this,e);break;case"pointerup":pt(this,hd,Xp).call(this,e);break;case"mouseleave":pt(this,yn,sl).call(this);break;case"mouseup":this.removeAttribute(x.KEYBOARD_CONTROL);break;case"keyup":pt(this,mr,Tn).call(this),this.setAttribute(x.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);Ki(this,Za,isNaN(i)?0:i)}get autohide(){return(tt(this,Za)===void 0?2:tt(this,Za)).toString()}get breakpoints(){return se(this,x.BREAKPOINTS)}set breakpoints(e){oe(this,x.BREAKPOINTS,e)}get audio(){return F(this,x.AUDIO)}set audio(e){K(this,x.AUDIO,e)}get gesturesDisabled(){return F(this,x.GESTURES_DISABLED)}set gesturesDisabled(e){K(this,x.GESTURES_DISABLED,e)}get keyboardControl(){return F(this,x.KEYBOARD_CONTROL)}set keyboardControl(e){K(this,x.KEYBOARD_CONTROL,e)}get noAutohide(){return F(this,x.NO_AUTOHIDE)}set noAutohide(e){K(this,x.NO_AUTOHIDE,e)}get autohideOverControls(){return F(this,x.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){K(this,x.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return F(this,x.USER_INACTIVE)}set userInteractive(e){K(this,x.USER_INACTIVE,e)}}ko=new WeakMap;Ca=new WeakMap;gn=new WeakMap;Za=new WeakMap;bs=new WeakMap;ud=new WeakSet;Zp=function(t){const e=this.media;for(const i of t){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!e)this.mediaUnsetCallback(r);else{let s=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(s=!1);s&&this.mediaUnsetCallback(r)}}if(e)for(const r of i.addedNodes)r===e&&this.handleMediaUpdated(e)}};Fr=new WeakMap;gs=new WeakMap;cd=new WeakSet;jp=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-tt(this,ko)<250)return;pt(this,ol,Pu).call(this),clearTimeout(tt(this,gn));const e=this.hasAttribute(x.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&pt(this,mr,Tn).call(this)};hd=new WeakSet;Xp=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(x.USER_INACTIVE);[this,this.media].includes(t.target)&&e?pt(this,yn,sl).call(this):pt(this,mr,Tn).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e==null?void 0:e.localName))&&pt(this,mr,Tn).call(this)};yn=new WeakSet;sl=function(){if(tt(this,Za)<0||this.hasAttribute(x.USER_INACTIVE))return;this.setAttribute(x.USER_INACTIVE,"");const t=new E.CustomEvent(mi.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};ol=new WeakSet;Pu=function(){if(!this.hasAttribute(x.USER_INACTIVE))return;this.removeAttribute(x.USER_INACTIVE);const t=new E.CustomEvent(mi.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};mr=new WeakSet;Tn=function(){pt(this,ol,Pu).call(this),clearTimeout(tt(this,gn));const t=parseInt(this.autohide);t<0||Ki(this,gn,setTimeout(()=>{pt(this,yn,sl).call(this)},t*1e3))};ll.shadowRootOptions={mode:"open"};ll.getTemplateHTML=gg;E.customElements.get("media-container")||E.customElements.define("media-container",ll);var ev=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},De=(t,e,i)=>(ev(t,e,"read from private field"),i?i.call(t):e.get(t)),Sr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qn=(t,e,i,a)=>(ev(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),La,Da,So,ta,ai,yi;class $u{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){Sr(this,ai),Sr(this,La,void 0),Sr(this,Da,void 0),Sr(this,So,void 0),Sr(this,ta,new Set),qn(this,La,e),qn(this,Da,i),qn(this,So,new Set(a))}[Symbol.iterator](){return De(this,ai,yi).values()}get length(){return De(this,ai,yi).size}get value(){var e;return(e=[...De(this,ai,yi)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(qn(this,ta,new Set),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...De(this,ai,yi)][e]}values(){return De(this,ai,yi).values()}forEach(e,i){De(this,ai,yi).forEach(e,i)}add(...e){var i,a;e.forEach(r=>De(this,ta).add(r)),!(this.value===""&&!((i=De(this,La))!=null&&i.hasAttribute(`${De(this,Da)}`)))&&((a=De(this,La))==null||a.setAttribute(`${De(this,Da)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>De(this,ta).delete(a)),(i=De(this,La))==null||i.setAttribute(`${De(this,Da)}`,`${this.value}`)}contains(e){return De(this,ai,yi).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}La=new WeakMap;Da=new WeakMap;So=new WeakMap;ta=new WeakMap;ai=new WeakSet;yi=function(){return De(this,ta).size?De(this,ta):De(this,So)};const wg=(t="")=>t.split(/\s+/),tv=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?Xt.CAPTIONS:Xt.SUBTITLES,language:i,label:r}},dl=(t="",e={})=>wg(t).map(i=>{const a=tv(i);return{...e,...a}}),iv=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?tv(e):e):typeof t=="string"?dl(t):[t]:[],md=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,An=(t=[])=>Array.prototype.map.call(t,md).join(" "),Ig=(t,e)=>i=>i[t]===e,av=t=>{const e=Object.entries(t).map(([i,a])=>Ig(i,a));return i=>e.every(a=>a(i))},dn=(t,e=[],i=[])=>{const a=iv(i).map(av),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},ul=(t,e=()=>!0)=>{if(!(t!=null&&t.textTracks))return[];const i=typeof e=="function"?e:av(e);return Array.from(t.textTracks).filter(i)},rv=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(h.MEDIA_SUBTITLES_SHOWING)},Rg=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},wh="exitFullscreen"in ke?"exitFullscreen":"webkitExitFullscreen"in ke?"webkitExitFullscreen":"webkitCancelFullScreen"in ke?"webkitCancelFullScreen":void 0,Cg=t=>{var e;const{documentElement:i}=t;if(wh){const a=(e=i==null?void 0:i[wh])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Kr="fullscreenElement"in ke?"fullscreenElement":"webkitFullscreenElement"in ke?"webkitFullscreenElement":void 0,Lg=t=>{const{documentElement:e,media:i}=t,a=e==null?void 0:e[Kr];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Jb.FULLSCREEN?i:a},Dg=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=Lg(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(Kr in s))return vi(n,r);for(;s!=null&&s[Kr];){if(s[Kr]===r)return!0;s=(e=s[Kr])==null?void 0:e.shadowRoot}}return!1},Mg="fullscreenEnabled"in ke?"fullscreenEnabled":"webkitFullscreenEnabled"in ke?"webkitFullscreenEnabled":void 0,xg=t=>{const{documentElement:e,media:i}=t;return!!(e!=null&&e[Mg])||i&&"webkitSupportsFullscreen"in i};let Yn;const Uu=()=>{var t,e;return Yn||(Yn=(e=(t=ke)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),Yn)},Og=async(t=Uu())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([Ng(t,i.signal),Pg(t,e)]);return i.abort(),a},Ng=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),Pg=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await Hp(10)}return t.volume!==e},$g=/.*Version\/.*Safari\/.*/.test(E.navigator.userAgent),nv=(t=Uu())=>E.matchMedia("(display-mode: standalone)").matches&&$g?!1:typeof(t==null?void 0:t.requestPictureInPicture)=="function",sv=(t=Uu())=>xg({documentElement:ke,media:t}),Ug=sv(),Hg=nv(),Bg=!!E.WebKitPlaybackTargetAvailabilityEvent,Wg=!!E.chrome,wo=t=>ul(t.media,e=>[Xt.SUBTITLES,Xt.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),ov=t=>ul(t.media,e=>e.mode===ir.SHOWING&&[Xt.SUBTITLES,Xt.CAPTIONS].includes(e.kind)),lv=(t,e)=>{const i=wo(t),a=ov(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)dn(ir.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:s}=t;if(!(s!=null&&s.noSubtitlesLangPref)){const m=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),p=m?[m,...globalThis.navigator.languages]:globalThis.navigator.languages,d=i.filter(u=>p.some(v=>u.language.toLowerCase().startsWith(v.split("-")[0]))).sort((u,v)=>{const f=p.findIndex(y=>u.language.toLowerCase().startsWith(y.split("-")[0])),b=p.findIndex(y=>v.language.toLowerCase().startsWith(y.split("-")[0]));return f-b});d[0]&&(n=d[0])}const{language:o,label:l,kind:c}=n;dn(ir.DISABLED,i,a),dn(ir.SHOWING,i,[{language:o,label:l,kind:c}])}}},Hu=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?Fg(t,e):Object.entries(t).every(([i,a])=>i in e&&Hu(a,e[i])),Fg=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>Hu(r,e[n])):!0},Kg=Object.values(ni);let Io;const Vg=Og().then(t=>(Io=t,Io)),qg=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof E.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=E.customElements.get(i);a&&e instanceof a||(await E.customElements.whenDefined(i),E.customElements.upgrade(e))}))},Yg=new E.DOMParser,Gg=t=>t&&(Yg.parseFromString(t,"text/html").body.textContent||t),Vr={mediaError:{get(t,e){const{media:i}=t;if((e==null?void 0:e.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if((e==null?void 0:e.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if((e==null?void 0:e.type)!=="playing")return(a=(i=r==null?void 0:r.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=E.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&E.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;E.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=E.localStorage.getItem("media-chrome-pref-muted")==="true";Vr.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){const{media:e}=t;return e==null?void 0:e.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?E.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&E.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=E.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Vr.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof(e==null?void 0:e.volume)>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!Du(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e==null?void 0:e.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return(e==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i==null?void 0:i.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i==null?void 0:i.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[ni.LIVE,ni.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(Kg.includes(r))return r===ni.UNKNOWN?a:r;const n=e.duration;return n===1/0?ni.LIVE:Number.isFinite(n)?ni.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=Vr.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===ni.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Vr.mediaStreamType.get(t)===ni.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return wo(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return ov(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const s=o=>{var l;!n.defaultSubtitles||o&&![Xt.CAPTIONS,Xt.SUBTITLES].includes((l=o==null?void 0:o.track)==null?void 0:l.kind)||lv(e,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=ul(i,{kind:Xt.CHAPTERS});return Array.from((e=a==null?void 0:a.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:s})=>({text:Gg(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",t),n==null||n.addEventListener("load",t),()=>{r==null||r.removeEventListener("load",t),n==null||n.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?vi(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n!=null&&n.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!ke.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else ke.pictureInPictureElement&&ke.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r==null?void 0:r.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a==null?void 0:a.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return Dg(t)},set(t,e,i){var a;t?(Rg(e),i.detail&&((a=e.media)==null||a.focus())):Cg(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!(i!=null&&i.remote)||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:!!i.remote.state},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&E.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!Ug||!sv(e))return Ze.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!Hg||!nv(e))return Ze.UNSUPPORTED;if(e!=null&&e.disablePictureInPicture)return Ze.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(Io===!1||(e==null?void 0:e.volume)==null)return Ze.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{Io==null&&Vg.then(e=>t(e?void 0:Ze.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!Wg||!((i=a==null?void 0:a.remote)!=null&&i.state))return Ze.UNSUPPORTED;if(!(e==null||e==="available"))return Ze.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!Bg)return Ze.UNSUPPORTED;if((e==null?void 0:e.availability)==="not-available")return Ze.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!(i!=null&&i.videoRenditions))return Ze.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return Ze.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!(a!=null&&a.audioTracks))return Ze.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return Ze.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},Qg={[R.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:s}=e,o=i??void 0;let l,c;if(s&&o!=null){const[u]=ul(s,{kind:Xt.METADATA,label:"thumbnails"}),v=Array.prototype.find.call((a=u==null?void 0:u.cues)!=null?a:[],(f,b,y)=>b===0?f.endTime>o:b===y.length-1?f.startTime<=o:f.startTime<=o&&f.endTime>o);if(v){const f=/'^(?:[a-z]+:)?\/\//i.test(v.text)||(r=s==null?void 0:s.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,b=new URL(v.text,f);c=new URLSearchParams(b.hash).get("#xywh").split(",").map(T=>+T),l=b.href}}const m=t.mediaDuration.get(e);let d=(n=t.mediaChaptersCues.get(e).find((u,v,f)=>v===f.length-1&&m===u.endTime?u.startTime<=o&&u.endTime>=o:u.startTime<=o&&u.endTime>o))==null?void 0:n.text;return i!=null&&d==null&&(d=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:c,mediaPreviewChapter:d}},[R.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[R.MEDIA_PLAY_REQUEST](t,e){var i,a,r,n;const s="mediaPaused",l=t.mediaStreamType.get(e)===ni.LIVE,c=!((i=e.options)!=null&&i.noAutoSeekToLive),m=t.mediaTargetLiveWindow.get(e)>0;if(l&&c&&!m){const p=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(p){const d=(n=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,u=p-d;t.mediaCurrentTime.set(u,e)}}t[s].set(!1,e)},[R.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[R.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[R.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[R.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[R.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[R.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[R.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,l=s-o;t[n].set(l,e)},[R.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=wo(e),s=iv(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&E.localStorage.setItem("media-chrome-pref-subtitles-lang",o),dn(ir.SHOWING,n,s)},[R.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=wo(e),r=i??[];dn(ir.DISABLED,a,r)},[R.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){lv(e,i)},[R.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[R.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[R.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[R.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[R.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[R.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[R.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[R.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[R.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},zg=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Vr,requestMap:r=Qg,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let c=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const m=f=>{f!=null&&(Hu(f,c)||(c=Object.freeze({...c,...f}),o.forEach(b=>b(c))))},p=()=>{const f=Object.entries(a).reduce((b,[y,{get:T}])=>(b[y]=T(l),b),{});m(f)},d={};let u;const v=async(f,b)=>{var y,T,_,S,L,P,H,z,ie,V,U,Pe,Ye,Ge,fe,Be;const Ct=!!u;if(u={...l,...u??{},...f},Ct)return;await qg(...Object.values(f));const We=o.length>0&&b===0&&s,ft=l.media!==u.media,Qe=((y=l.media)==null?void 0:y.textTracks)!==((T=u.media)==null?void 0:T.textTracks),Re=((_=l.media)==null?void 0:_.videoRenditions)!==((S=u.media)==null?void 0:S.videoRenditions),$e=((L=l.media)==null?void 0:L.audioTracks)!==((P=u.media)==null?void 0:P.audioTracks),nt=((H=l.media)==null?void 0:H.remote)!==((z=u.media)==null?void 0:z.remote),_a=l.documentElement!==u.documentElement,Un=!!l.media&&(ft||We),Hc=!!((ie=l.media)!=null&&ie.textTracks)&&(Qe||We),Bc=!!((V=l.media)!=null&&V.videoRenditions)&&(Re||We),Wc=!!((U=l.media)!=null&&U.audioTracks)&&($e||We),Fc=!!((Pe=l.media)!=null&&Pe.remote)&&(nt||We),Kc=!!l.documentElement&&(_a||We),yl=Un||Hc||Bc||Wc||Fc||Kc,ba=o.length===0&&b===1&&s,Vc=!!u.media&&(ft||ba),qc=!!((Ye=u.media)!=null&&Ye.textTracks)&&(Qe||ba),Yc=!!((Ge=u.media)!=null&&Ge.videoRenditions)&&(Re||ba),Gc=!!((fe=u.media)!=null&&fe.audioTracks)&&($e||ba),Qc=!!((Be=u.media)!=null&&Be.remote)&&(nt||ba),zc=!!u.documentElement&&(_a||ba),Zc=Vc||qc||Yc||Gc||Qc||zc;if(!(yl||Zc)){Object.entries(u).forEach(([J,Tr])=>{l[J]=Tr}),p(),u=void 0;return}Object.entries(a).forEach(([J,{get:Tr,mediaEvents:Yf=[],textTracksEvents:Gf=[],videoRenditionsEvents:Qf=[],audioTracksEvents:zf=[],remoteEvents:Zf=[],rootEvents:jf=[],stateOwnersUpdateHandlers:Xf=[]}])=>{d[J]||(d[J]={});const ze=de=>{const Ee=Tr(l,de);m({[J]:Ee})};let Ce;Ce=d[J].mediaEvents,Yf.forEach(de=>{Ce&&Un&&(l.media.removeEventListener(de,Ce),d[J].mediaEvents=void 0),Vc&&(u.media.addEventListener(de,ze),d[J].mediaEvents=ze)}),Ce=d[J].textTracksEvents,Gf.forEach(de=>{var Ee,Et;Ce&&Hc&&((Ee=l.media.textTracks)==null||Ee.removeEventListener(de,Ce),d[J].textTracksEvents=void 0),qc&&((Et=u.media.textTracks)==null||Et.addEventListener(de,ze),d[J].textTracksEvents=ze)}),Ce=d[J].videoRenditionsEvents,Qf.forEach(de=>{var Ee,Et;Ce&&Bc&&((Ee=l.media.videoRenditions)==null||Ee.removeEventListener(de,Ce),d[J].videoRenditionsEvents=void 0),Yc&&((Et=u.media.videoRenditions)==null||Et.addEventListener(de,ze),d[J].videoRenditionsEvents=ze)}),Ce=d[J].audioTracksEvents,zf.forEach(de=>{var Ee,Et;Ce&&Wc&&((Ee=l.media.audioTracks)==null||Ee.removeEventListener(de,Ce),d[J].audioTracksEvents=void 0),Gc&&((Et=u.media.audioTracks)==null||Et.addEventListener(de,ze),d[J].audioTracksEvents=ze)}),Ce=d[J].remoteEvents,Zf.forEach(de=>{var Ee,Et;Ce&&Fc&&((Ee=l.media.remote)==null||Ee.removeEventListener(de,Ce),d[J].remoteEvents=void 0),Qc&&((Et=u.media.remote)==null||Et.addEventListener(de,ze),d[J].remoteEvents=ze)}),Ce=d[J].rootEvents,jf.forEach(de=>{Ce&&Kc&&(l.documentElement.removeEventListener(de,Ce),d[J].rootEvents=void 0),zc&&(u.documentElement.addEventListener(de,ze),d[J].rootEvents=ze)});const Hn=d[J].stateOwnersUpdateHandlers;if(Hn&&yl&&(Array.isArray(Hn)?Hn:[Hn]).forEach(Ee=>{typeof Ee=="function"&&Ee()}),Zc){const de=Xf.map(Ee=>Ee(ze,u)).filter(Ee=>typeof Ee=="function");d[J].stateOwnersUpdateHandlers=de.length===1?de[0]:de}else yl&&(d[J].stateOwnersUpdateHandlers=void 0)}),Object.entries(u).forEach(([J,Tr])=>{l[J]=Tr}),p(),u=void 0};return v({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(f){const{type:b,detail:y}=f;if(r[b]&&c.mediaErrorCode==null){m(r[b](a,l,f));return}b==="mediaelementchangerequest"?v({media:y}):b==="fullscreenelementchangerequest"?v({fullscreenElement:y}):b==="documentelementchangerequest"?v({documentElement:y}):b==="optionschangerequest"&&(Object.entries(y??{}).forEach(([T,_])=>{l.options[T]=_}),p())},getState(){return c},subscribe(f){return v({},o.length+1),o.push(f),f(c),()=>{const b=o.indexOf(f);b>=0&&(v({},o.length-1),o.splice(b,1))}}}};var Bu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},N=(t,e,i)=>(Bu(t,e,"read from private field"),i?i.call(t):e.get(t)),lt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Nt=(t,e,i,a)=>(Bu(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Yt=(t,e,i)=>(Bu(t,e,"access private method"),i),Ci,qr,q,ia,Yr,Pt,ys,Gr,Ts,pd,da,ar,As,vd,fd,dv;const uv=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Ih=10,Rh=.025,Ch=.25,Zg=.25,jg=2,w={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class cv extends ll{constructor(){super(),lt(this,Ts),lt(this,da),lt(this,As),lt(this,fd),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,lt(this,Ci,new $u(this,w.HOTKEYS)),lt(this,qr,void 0),lt(this,q,void 0),lt(this,ia,null),lt(this,Yr,void 0),lt(this,Pt,void 0),lt(this,ys,i=>{var a;(a=N(this,q))==null||a.dispatch(i)}),lt(this,Gr,void 0),this.associateElement(this);let e={};Nt(this,Yr,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new E.CustomEvent(Xb[n],{composed:!0,detail:r});this.dispatchEvent(s)}),e=i}),this.hasAttribute(w.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(w.NO_HOTKEYS,w.HOTKEYS,w.DEFAULT_STREAM_TYPE,w.DEFAULT_SUBTITLES,w.DEFAULT_DURATION,w.NO_MUTED_PREF,w.NO_VOLUME_PREF,w.LANG,w.LOOP)}get mediaStore(){return N(this,q)}set mediaStore(e){var i,a;if(N(this,q)&&((i=N(this,Pt))==null||i.call(this),Nt(this,Pt,void 0)),Nt(this,q,e),!N(this,q)&&!this.hasAttribute(w.NO_DEFAULT_STORE)){Yt(this,Ts,pd).call(this);return}Nt(this,Pt,(a=N(this,q))==null?void 0:a.subscribe(N(this,Yr)))}get fullscreenElement(){var e;return(e=N(this,qr))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(w.FULLSCREEN_ELEMENT)&&this.removeAttribute(w.FULLSCREEN_ELEMENT),Nt(this,qr,e),(i=N(this,q))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return F(this,w.DEFAULT_SUBTITLES)}set defaultSubtitles(e){K(this,w.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return se(this,w.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){oe(this,w.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return ne(this,w.DEFAULT_DURATION)}set defaultDuration(e){pe(this,w.DEFAULT_DURATION,e)}get noHotkeys(){return F(this,w.NO_HOTKEYS)}set noHotkeys(e){K(this,w.NO_HOTKEYS,e)}get keysUsed(){return se(this,w.KEYS_USED)}set keysUsed(e){oe(this,w.KEYS_USED,e)}get liveEdgeOffset(){return ne(this,w.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){pe(this,w.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return F(this,w.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){K(this,w.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return F(this,w.NO_VOLUME_PREF)}set noVolumePref(e){K(this,w.NO_VOLUME_PREF,e)}get noMutedPref(){return F(this,w.NO_MUTED_PREF)}set noMutedPref(e){K(this,w.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return F(this,w.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){K(this,w.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return F(this,w.NO_DEFAULT_STORE)}set noDefaultStore(e){K(this,w.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,i,a){var r,n,s,o,l,c,m,p,d,u,v,f;if(super.attributeChangedCallback(e,i,a),e===w.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(w.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===w.HOTKEYS)N(this,Ci).value=a;else if(e===w.DEFAULT_SUBTITLES&&a!==i)(r=N(this,q))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(w.DEFAULT_SUBTITLES)}});else if(e===w.DEFAULT_STREAM_TYPE)(s=N(this,q))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(w.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===w.LIVE_EDGE_OFFSET)(o=N(this,q))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(w.LIVE_EDGE_OFFSET)}});else if(e===w.SEEK_TO_LIVE_OFFSET)(l=N(this,q))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===w.NO_AUTO_SEEK_TO_LIVE)(c=N(this,q))==null||c.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(w.NO_AUTO_SEEK_TO_LIVE)}});else if(e===w.FULLSCREEN_ELEMENT){const b=a?(m=this.getRootNode())==null?void 0:m.getElementById(a):void 0;Nt(this,qr,b),(p=N(this,q))==null||p.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===w.LANG&&a!==i?(cg(a),(d=N(this,q))==null||d.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===w.LOOP&&a!==i?(u=N(this,q))==null||u.dispatch({type:R.MEDIA_LOOP_REQUEST,detail:a!=null}):e===w.NO_VOLUME_PREF&&a!==i?(v=N(this,q))==null||v.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(w.NO_VOLUME_PREF)}}):e===w.NO_MUTED_PREF&&a!==i&&((f=N(this,q))==null||f.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(w.NO_MUTED_PREF)}}))}connectedCallback(){var e,i;!N(this,q)&&!this.hasAttribute(w.NO_DEFAULT_STORE)&&Yt(this,Ts,pd).call(this),(e=N(this,q))==null||e.dispatch({type:"documentelementchangerequest",detail:ke}),super.connectedCallback(),N(this,q)&&!N(this,Pt)&&Nt(this,Pt,(i=N(this,q))==null?void 0:i.subscribe(N(this,Yr))),N(this,Gr)!==void 0&&N(this,q)&&this.media&&setTimeout(()=>{var a,r,n;(r=(a=this.media)==null?void 0:a.textTracks)!=null&&r.length&&((n=N(this,q))==null||n.dispatch({type:R.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:N(this,Gr)}))},0),this.hasAttribute(w.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,n;if((e=super.disconnectedCallback)==null||e.call(this),N(this,q)){const s=N(this,q).getState();Nt(this,Gr,!!((i=s.mediaSubtitlesShowing)!=null&&i.length)),(a=N(this,q))==null||a.dispatch({type:"documentelementchangerequest",detail:void 0}),(r=N(this,q))==null||r.dispatch({type:R.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}N(this,Pt)&&((n=N(this,Pt))==null||n.call(this),Nt(this,Pt,void 0))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=N(this,q))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=N(this,q))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){Mh(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=a1(e,a,r);Object.values(R).forEach(s=>{e.addEventListener(s,N(this,ys))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(R).forEach(r=>{e.removeEventListener(r,N(this,ys))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),N(this,q)&&Object.entries(N(this,q).getState()).forEach(([r,n])=>{Mh([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Yt(this,As,vd))}disableHotkeys(){this.removeEventListener("keydown",Yt(this,As,vd)),this.removeEventListener("keyup",Yt(this,da,ar))}get hotkeys(){return se(this,w.HOTKEYS)}set hotkeys(e){oe(this,w.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,s,o,l,c,m;const p=e.target;if(((r=(a=(i=p.getAttribute(w.KEYS_USED))==null?void 0:i.split(" "))!=null?a:p==null?void 0:p.keysUsed)!=null?r:[]).map(y=>y==="Space"?" ":y).filter(Boolean).includes(e.key))return;let u,v,f;if(!(N(this,Ci).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&N(this,Ci).contains("nospace")||e.shiftKey&&(e.key==="/"||e.key==="?")&&N(this,Ci).contains("noshift+/")))switch(e.key){case" ":case"k":u=N(this,q).getState().mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new E.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u=this.mediaStore.getState().mediaVolumeLevel==="off"?R.MEDIA_UNMUTE_REQUEST:R.MEDIA_MUTE_REQUEST,this.dispatchEvent(new E.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?R.MEDIA_EXIT_FULLSCREEN_REQUEST:R.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new E.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new E.CustomEvent(R.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const y=this.hasAttribute(w.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(w.KEYBOARD_BACKWARD_SEEK_OFFSET):Ih;v=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-y,0),f=new E.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowRight":case"l":{const y=this.hasAttribute(w.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(w.KEYBOARD_FORWARD_SEEK_OFFSET):Ih;v=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+y,0),f=new E.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowUp":{const y=this.hasAttribute(w.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(w.KEYBOARD_UP_VOLUME_STEP):Rh;v=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+y,1),f=new E.CustomEvent(R.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowDown":{const y=this.hasAttribute(w.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(w.KEYBOARD_DOWN_VOLUME_STEP):Rh;v=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-y,0),f=new E.CustomEvent(R.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"<":{const y=(c=this.mediaStore.getState().mediaPlaybackRate)!=null?c:1;v=Math.max(y-Ch,Zg).toFixed(2),f=new E.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case">":{const y=(m=this.mediaStore.getState().mediaPlaybackRate)!=null?m:1;v=Math.min(y+Ch,jg).toFixed(2),f=new E.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"/":case"?":{e.shiftKey&&Yt(this,fd,dv).call(this);break}case"p":{u=this.mediaStore.getState().mediaIsPip?R.MEDIA_EXIT_PIP_REQUEST:R.MEDIA_ENTER_PIP_REQUEST,f=new E.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(f);break}}}}Ci=new WeakMap;qr=new WeakMap;q=new WeakMap;ia=new WeakMap;Yr=new WeakMap;Pt=new WeakMap;ys=new WeakMap;Gr=new WeakMap;Ts=new WeakSet;pd=function(){var t;this.mediaStore=zg({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(w.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(w.DEFAULT_DURATION)?+this.getAttribute(w.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(w.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(w.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(w.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(w.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(w.NO_SUBTITLES_LANG_PREF)}})};da=new WeakSet;ar=function(t){const{key:e,shiftKey:i}=t;if(!(i&&(e==="/"||e==="?")||uv.includes(e))){this.removeEventListener("keyup",Yt(this,da,ar));return}this.keyboardShortcutHandler(t)};As=new WeakSet;vd=function(t){var e;const{metaKey:i,altKey:a,key:r,shiftKey:n}=t,s=n&&(r==="/"||r==="?");if(s&&((e=N(this,ia))!=null&&e.open)){this.removeEventListener("keyup",Yt(this,da,ar));return}if(i||a||!s&&!uv.includes(r)){this.removeEventListener("keyup",Yt(this,da,ar));return}const o=t.target,l=o instanceof HTMLElement&&(o.tagName.toLowerCase()==="media-volume-range"||o.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(N(this,Ci).contains(`no${r.toLowerCase()}`)||r===" "&&N(this,Ci).contains("nospace"))&&!l&&t.preventDefault(),this.addEventListener("keyup",Yt(this,da,ar),{once:!0})};fd=new WeakSet;dv=function(){N(this,ia)||(Nt(this,ia,ke.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(N(this,ia))),N(this,ia).open=!0};const Xg=Object.values(h),Jg=Object.values(Pp),hv=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(E.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const s=(r=(a=(i=t==null?void 0:t.getAttribute)==null?void 0:i.call(t,Q.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>Xg.includes(o)):[]},e1=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&E.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof E.customElements.get(t.nodeName.toLowerCase()))&&E.customElements.upgrade(t),Jg.some(a=>a in t)},Ed=t=>e1(t)||!!hv(t).length,Lh=t=>{var e;return(e=t==null?void 0:t.join)==null?void 0:e.call(t,":")},Dh={[h.MEDIA_SUBTITLES_LIST]:An,[h.MEDIA_SUBTITLES_SHOWING]:An,[h.MEDIA_SEEKABLE]:Lh,[h.MEDIA_BUFFERED]:t=>t==null?void 0:t.map(Lh).join(" "),[h.MEDIA_PREVIEW_COORDS]:t=>t==null?void 0:t.join(" "),[h.MEDIA_RENDITION_LIST]:eg,[h.MEDIA_AUDIO_TRACK_LIST]:rg},t1=async(t,e,i)=>{var a,r;if(t.isConnected||await Hp(0),typeof i=="boolean"||i==null)return K(t,e,i);if(typeof i=="number")return pe(t,e,i);if(typeof i=="string")return oe(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=Dh[e])==null?void 0:a.call(Dh,i))!=null?r:i;return t.setAttribute(e,n)},i1=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},Vi=(t,e)=>{if(i1(t))return;const i=(r,n)=>{var s,o;Ed(r)&&n(r);const{children:l=[]}=r??{},c=(o=(s=r==null?void 0:r.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...c].forEach(p=>Vi(p,n))},a=t==null?void 0:t.nodeName.toLowerCase();if(a.includes("-")&&!Ed(t)){E.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},Mh=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=hv(a),n=e.toLowerCase();r.includes(n)&&t1(a,n,i)})},a1=(t,e,i)=>{Vi(t,e);const a=m=>{var p;const d=(p=m==null?void 0:m.composedPath()[0])!=null?p:m.target;e(d)},r=m=>{var p;const d=(p=m==null?void 0:m.composedPath()[0])!=null?p:m.target;i(d)};t.addEventListener(R.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(R.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=m=>{m.forEach(p=>{const{addedNodes:d=[],removedNodes:u=[],type:v,target:f,attributeName:b}=p;v==="childList"?(Array.prototype.forEach.call(d,y=>Vi(y,e)),Array.prototype.forEach.call(u,y=>Vi(y,i))):v==="attributes"&&b===Q.MEDIA_CHROME_ATTRIBUTES&&(Ed(f)?e(f):i(f))})};let s=[];const o=m=>{const p=m.target;p.name!=="media"&&(s.forEach(d=>Vi(d,i)),s=[...p.assignedElements({flatten:!0})],s.forEach(d=>Vi(d,e)))};t.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{Vi(t,i),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(R.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(R.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};E.customElements.get("media-controller")||E.customElements.define("media-controller",cv);var r1=cv;const ga={PLACEMENT:"placement",BOUNDS:"bounds"};function n1(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class cl extends E.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Qp(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=Er(this,"#"+this.bounds))!=null?e:Ve(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),c=o+l,m=n+s,p=a.getPropertyValue("--media-tooltip-offset-x"),d=p?parseFloat(p.replace("px","")):0,u=a.getPropertyValue("--media-tooltip-container-margin"),v=u?parseFloat(u.replace("px","")):0,f=o-n+d-v,b=c-m+d+v;if(f<0){this.style.setProperty("--media-tooltip-offset-x",`${f}px`);return}if(b>0){this.style.setProperty("--media-tooltip-offset-x",`${b}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[ga.PLACEMENT,ga.BOUNDS]}get placement(){return se(this,ga.PLACEMENT)}set placement(e){oe(this,ga.PLACEMENT,e)}get bounds(){return se(this,ga.BOUNDS)}set bounds(e){oe(this,ga.BOUNDS,e)}}cl.shadowRootOptions={mode:"open"};cl.getTemplateHTML=n1;E.customElements.get("media-tooltip")||E.customElements.define("media-tooltip",cl);var xh=cl,Wu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},be=(t,e,i)=>(Wu(t,e,"read from private field"),i?i.call(t):e.get(t)),ya=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Gn=(t,e,i,a)=>(Wu(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),s1=(t,e,i)=>(Wu(t,e,"access private method"),i),$t,ja,Li,Ma,ks,_d,mv;const _i={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function o1(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${xh.shadowRootOptions.mode}">
          ${xh.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function l1(t,e){return`
    <slot></slot>
  `}function d1(){return""}class xe extends E.HTMLElement{constructor(){if(super(),ya(this,_d),ya(this,$t,void 0),this.preventClick=!1,this.tooltipEl=null,ya(this,ja,e=>{this.preventClick||this.handleClick(e),setTimeout(be(this,Li),0)}),ya(this,Li,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),ya(this,Ma,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",be(this,Ma));return}this.preventClick||this.handleClick(e)}),ya(this,ks,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",be(this,Ma));return}this.addEventListener("keyup",be(this,Ma),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",_i.TOOLTIP_PLACEMENT,Q.MEDIA_CONTROLLER,h.MEDIA_LANG]}enable(){this.addEventListener("click",be(this,ja)),this.addEventListener("keydown",be(this,ks)),this.tabIndex=0}disable(){this.removeEventListener("click",be(this,ja)),this.removeEventListener("keydown",be(this,ks)),this.removeEventListener("keyup",be(this,Ma)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Q.MEDIA_CONTROLLER?(i&&((n=(r=be(this,$t))==null?void 0:r.unassociateElement)==null||n.call(r,this),Gn(this,$t,null)),a&&this.isConnected&&(Gn(this,$t,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=be(this,$t))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===_i.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===h.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),be(this,Li).call(this)}connectedCallback(){var e,i,a;const{style:r}=Ie(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(Q.MEDIA_CONTROLLER);n&&(Gn(this,$t,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=be(this,$t))==null?void 0:i.associateElement)==null||a.call(i,this)),E.customElements.whenDefined("media-tooltip").then(()=>s1(this,_d,mv).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=be(this,$t))==null?void 0:e.unassociateElement)==null||i.call(e,this),Gn(this,$t,null),this.removeEventListener("mouseenter",be(this,Li)),this.removeEventListener("focus",be(this,Li)),this.removeEventListener("click",be(this,ja))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return se(this,_i.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){oe(this,_i.TOOLTIP_PLACEMENT,e)}get mediaController(){return se(this,Q.MEDIA_CONTROLLER)}set mediaController(e){oe(this,Q.MEDIA_CONTROLLER,e)}get disabled(){return F(this,_i.DISABLED)}set disabled(e){K(this,_i.DISABLED,e)}get noTooltip(){return F(this,_i.NO_TOOLTIP)}set noTooltip(e){K(this,_i.NO_TOOLTIP,e)}handleClick(e){}}$t=new WeakMap;ja=new WeakMap;Li=new WeakMap;Ma=new WeakMap;ks=new WeakMap;_d=new WeakSet;mv=function(){this.addEventListener("mouseenter",be(this,Li)),this.addEventListener("focus",be(this,Li)),this.addEventListener("click",be(this,ja));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};xe.shadowRootOptions={mode:"open"};xe.getTemplateHTML=o1;xe.getSlotTemplateHTML=l1;xe.getTooltipContentHTML=d1;E.customElements.get("media-chrome-button")||E.customElements.define("media-chrome-button",xe);const Oh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function u1(t){return`
    <style>
      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Oh}</slot>
      <slot name="exit">${Oh}</slot>
    </slot>
  `}function c1(){return`
    <slot name="tooltip-enter">${D("start airplay")}</slot>
    <slot name="tooltip-exit">${D("stop airplay")}</slot>
  `}const Nh=t=>{const e=t.mediaIsAirplaying?D("stop airplay"):D("start airplay");t.setAttribute("aria-label",e)};class Fu extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_AIRPLAYING,h.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Nh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_AIRPLAYING&&Nh(this)}get mediaIsAirplaying(){return F(this,h.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){K(this,h.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return se(this,h.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){oe(this,h.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new E.CustomEvent(R.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}Fu.getSlotTemplateHTML=u1;Fu.getTooltipContentHTML=c1;E.customElements.get("media-airplay-button")||E.customElements.define("media-airplay-button",Fu);const h1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,m1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function p1(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${h1}</slot>
      <slot name="off">${m1}</slot>
    </slot>
  `}function v1(){return`
    <slot name="tooltip-enable">${D("Enable captions")}</slot>
    <slot name="tooltip-disable">${D("Disable captions")}</slot>
  `}const Ph=t=>{t.setAttribute("aria-checked",rv(t).toString())};class Ku extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",D("closed captions")),Ph(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_SHOWING&&Ph(this)}get mediaSubtitlesList(){return $h(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Uh(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return $h(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Uh(this,h.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new E.CustomEvent(R.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}Ku.getSlotTemplateHTML=p1;Ku.getTooltipContentHTML=v1;const $h=(t,e)=>{const i=t.getAttribute(e);return i?dl(i):[]},Uh=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=An(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};E.customElements.get("media-captions-button")||E.customElements.define("media-captions-button",Ku);const f1='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',E1='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function _1(t){return`
    <style>
      :host([${h.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${f1}</slot>
      <slot name="exit">${E1}</slot>
    </slot>
  `}function b1(){return`
    <slot name="tooltip-enter">${D("Start casting")}</slot>
    <slot name="tooltip-exit">${D("Stop casting")}</slot>
  `}const Hh=t=>{const e=t.mediaIsCasting?D("stop casting"):D("start casting");t.setAttribute("aria-label",e)};class Vu extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_CASTING,h.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Hh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_CASTING&&Hh(this)}get mediaIsCasting(){return F(this,h.MEDIA_IS_CASTING)}set mediaIsCasting(e){K(this,h.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return se(this,h.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){oe(this,h.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?R.MEDIA_EXIT_CAST_REQUEST:R.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new E.CustomEvent(e,{composed:!0,bubbles:!0}))}}Vu.getSlotTemplateHTML=_1;Vu.getTooltipContentHTML=b1;E.customElements.get("media-cast-button")||E.customElements.define("media-cast-button",Vu);var qu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ua=(t,e,i)=>(qu(t,e,"read from private field"),i?i.call(t):e.get(t)),ti=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Yu=(t,e,i,a)=>(qu(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Hi=(t,e,i)=>(qu(t,e,"access private method"),i),Ro,kn,va,Ss,bd,gd,pv,yd,vv,Td,fv,Ad,Ev,kd,_v;function g1(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function y1(t){return`
    <slot id="content"></slot>
  `}const wr={OPEN:"open",ANCHOR:"anchor"};class _r extends E.HTMLElement{constructor(){super(),ti(this,Ss),ti(this,gd),ti(this,yd),ti(this,Td),ti(this,Ad),ti(this,kd),ti(this,Ro,!1),ti(this,kn,null),ti(this,va,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[wr.OPEN,wr.ANCHOR]}get open(){return F(this,wr.OPEN)}set open(e){K(this,wr.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Hi(this,Td,fv).call(this,e);break;case"focusout":Hi(this,Ad,Ev).call(this,e);break;case"keydown":Hi(this,kd,_v).call(this,e);break}}connectedCallback(){Hi(this,Ss,bd).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,i,a){Hi(this,Ss,bd).call(this),e===wr.OPEN&&a!==i&&(this.open?Hi(this,gd,pv).call(this):Hi(this,yd,vv).call(this))}focus(){Yu(this,kn,xu());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a==null||a.focus()}get keysUsed(){return["Escape","Tab"]}}Ro=new WeakMap;kn=new WeakMap;va=new WeakMap;Ss=new WeakSet;bd=function(){if(!ua(this,Ro)&&(Yu(this,Ro,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=Ie(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};gd=new WeakSet;pv=function(){var t;(t=ua(this,va))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};yd=new WeakSet;vv=function(){var t;(t=ua(this,va))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};Td=new WeakSet;fv=function(t){Yu(this,va,t.relatedTarget),vi(this,t.relatedTarget)||(this.open=!this.open)};Ad=new WeakSet;Ev=function(t){var e;vi(this,t.relatedTarget)||((e=ua(this,kn))==null||e.focus(),ua(this,va)&&ua(this,va)!==t.relatedTarget&&this.open&&(this.open=!1))};kd=new WeakSet;_v=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:c}=t;o||l||c||this.keysUsed.includes(s)&&(t.preventDefault(),t.stopPropagation(),s==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=ua(this,kn))==null||n.focus(),this.open=!1))};_r.shadowRootOptions={mode:"open"};_r.getTemplateHTML=g1;_r.getSlotTemplateHTML=y1;E.customElements.get("media-chrome-dialog")||E.customElements.define("media-chrome-dialog",_r);var Gu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ce=(t,e,i)=>(Gu(t,e,"read from private field"),i?i.call(t):e.get(t)),Oe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ti=(t,e,i,a)=>(Gu(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Tt=(t,e,i)=>(Gu(t,e,"access private method"),i),Ut,hl,ws,Is,At,Co,Rs,Cs,Ls,Qu,bv,Ds,Sd,Ms,wd,Lo,zu,Id,gv,Rd,yv,Cd,Tv,Ld,Av;function T1(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">

      ${this.getContainerTemplateHTML(t)}
    </div>
    <div id="rightgap"></div>
  `}function A1(t){return""}class br extends E.HTMLElement{constructor(){if(super(),Oe(this,Qu),Oe(this,Ds),Oe(this,Ms),Oe(this,Lo),Oe(this,Id),Oe(this,Rd),Oe(this,Cd),Oe(this,Ld),Oe(this,Ut,void 0),Oe(this,hl,void 0),Oe(this,ws,void 0),Oe(this,Is,void 0),Oe(this,At,{}),Oe(this,Co,[]),Oe(this,Rs,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Ie(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Oe(this,Cs,()=>{const{style:e}=Ie(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Oe(this,Ls,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),Ti(this,ws,this.shadowRoot.querySelector("#startpoint")),Ti(this,Is,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",Q.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Q.MEDIA_CONTROLLER?(i&&((n=(r=ce(this,Ut))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ti(this,Ut,null)),a&&this.isConnected&&(Ti(this,Ut,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=ce(this,Ut))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),Tt(this,Ds,Sd).call(this)):(this.range.setAttribute(e,a),Tt(this,Ms,wd).call(this)))}connectedCallback(){var e,i,a;const{style:r}=Ie(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ce(this,At).pointer=Ie(this.shadowRoot,"#pointer"),ce(this,At).progress=Ie(this.shadowRoot,"#progress"),ce(this,At).thumb=Ie(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ce(this,At).activeSegment=Ie(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(Q.MEDIA_CONTROLLER);n&&(Ti(this,Ut,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=ce(this,Ut))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ce(this,Rs)),this.shadowRoot.addEventListener("focusout",ce(this,Cs)),Tt(this,Ds,Sd).call(this),cr(this.container,ce(this,Ls))}disconnectedCallback(){var e,i;Tt(this,Ms,wd).call(this),(i=(e=ce(this,Ut))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ti(this,Ut,null),this.shadowRoot.removeEventListener("focusin",ce(this,Rs)),this.shadowRoot.removeEventListener("focusout",ce(this,Cs)),hr(this.container,ce(this,Ls))}updatePointerBar(e){var i;(i=ce(this,At).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=ce(this,At).progress)==null||e.style.setProperty("width",`${a}%`),(i=ce(this,At).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];Ti(this,Co,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[o,l]=[n===0,n===a.length-1],c=o?"calc(var(--segments-gap) / -1)":`${s*100}%`,p=`calc(${((l?r:a[n+1])-s)*100}%${o||l?"":" - var(--segments-gap)"})`,d=ke.createElementNS("http://www.w3.org/2000/svg","rect"),u=Ou(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);u.style.setProperty("x",c),u.style.setProperty("width",p),i.append(d)}}getPointerRatio(e){return vg(e.clientX,e.clientY,ce(this,ws).getBoundingClientRect(),ce(this,Is).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":Tt(this,Ld,Av).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":Tt(this,Id,gv).call(this,e);break;case"pointerdown":Tt(this,Lo,zu).call(this,e);break;case"pointerup":Tt(this,Rd,yv).call(this);break;case"pointerleave":Tt(this,Cd,Tv).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}Ut=new WeakMap;hl=new WeakMap;ws=new WeakMap;Is=new WeakMap;At=new WeakMap;Co=new WeakMap;Rs=new WeakMap;Cs=new WeakMap;Ls=new WeakMap;Qu=new WeakSet;bv=function(t){const e=ce(this,At).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${ce(this,Co).findIndex((n,s,o)=>{const l=o[s+1];return l!=null&&i>=n&&i<=l})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Ds=new WeakSet;Sd=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Ms=new WeakSet;wd=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(t=E.window)==null||t.removeEventListener("pointerup",this),(e=E.window)==null||e.removeEventListener("pointermove",this)};Lo=new WeakSet;zu=function(t){var e;Ti(this,hl,t.composedPath().includes(this.range)),(e=E.window)==null||e.addEventListener("pointerup",this)};Id=new WeakSet;gv=function(t){var e;t.pointerType!=="mouse"&&Tt(this,Lo,zu).call(this,t),this.addEventListener("pointerleave",this),(e=E.window)==null||e.addEventListener("pointermove",this)};Rd=new WeakSet;yv=function(){var t;(t=E.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Cd=new WeakSet;Tv=function(){var t,e;this.removeEventListener("pointerleave",this),(t=E.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=ce(this,At).activeSegment)==null||e.style.removeProperty("transform")};Ld=new WeakSet;Av=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),Tt(this,Qu,bv).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!ce(this,hl))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};br.shadowRootOptions={mode:"open"};br.getTemplateHTML=T1;br.getContainerTemplateHTML=A1;E.customElements.get("media-chrome-range")||E.customElements.define("media-chrome-range",br);var kv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Qn=(t,e,i)=>(kv(t,e,"read from private field"),i?i.call(t):e.get(t)),k1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},zn=(t,e,i,a)=>(kv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Ht;function S1(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}class Zu extends E.HTMLElement{constructor(){if(super(),k1(this,Ht,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Q.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Q.MEDIA_CONTROLLER&&(i&&((n=(r=Qn(this,Ht))==null?void 0:r.unassociateElement)==null||n.call(r,this),zn(this,Ht,null)),a&&this.isConnected&&(zn(this,Ht,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Qn(this,Ht))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(Q.MEDIA_CONTROLLER);r&&(zn(this,Ht,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Qn(this,Ht))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Qn(this,Ht))==null?void 0:e.unassociateElement)==null||i.call(e,this),zn(this,Ht,null)}}Ht=new WeakMap;Zu.shadowRootOptions={mode:"open"};Zu.getTemplateHTML=S1;E.customElements.get("media-control-bar")||E.customElements.define("media-control-bar",Zu);var Sv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Zn=(t,e,i)=>(Sv(t,e,"read from private field"),i?i.call(t):e.get(t)),w1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},jn=(t,e,i,a)=>(Sv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Bt;function I1(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function R1(t,e){return`
    <slot></slot>
  `}class Pi extends E.HTMLElement{constructor(){if(super(),w1(this,Bt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Q.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Q.MEDIA_CONTROLLER&&(i&&((n=(r=Zn(this,Bt))==null?void 0:r.unassociateElement)==null||n.call(r,this),jn(this,Bt,null)),a&&this.isConnected&&(jn(this,Bt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Zn(this,Bt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const{style:r}=Ie(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(Q.MEDIA_CONTROLLER);n&&(jn(this,Bt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=Zn(this,Bt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Zn(this,Bt))==null?void 0:e.unassociateElement)==null||i.call(e,this),jn(this,Bt,null)}}Bt=new WeakMap;Pi.shadowRootOptions={mode:"open"};Pi.getTemplateHTML=I1;Pi.getSlotTemplateHTML=R1;E.customElements.get("media-text-display")||E.customElements.define("media-text-display",Pi);var wv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Bh=(t,e,i)=>(wv(t,e,"read from private field"),i?i.call(t):e.get(t)),C1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},L1=(t,e,i,a)=>(wv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Qr;function D1(t,e){return`
    <slot>${Oi(e.mediaDuration)}</slot>
  `}class Iv extends Pi{constructor(){var e;super(),C1(this,Qr,void 0),L1(this,Qr,this.shadowRoot.querySelector("slot")),Bh(this,Qr).textContent=Oi((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===h.MEDIA_DURATION&&(Bh(this,Qr).textContent=Oi(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return ne(this,h.MEDIA_DURATION)}set mediaDuration(e){pe(this,h.MEDIA_DURATION,e)}}Qr=new WeakMap;Iv.getSlotTemplateHTML=D1;E.customElements.get("media-duration-display")||E.customElements.define("media-duration-display",Iv);const M1={2:D("Network Error"),3:D("Decode Error"),4:D("Source Not Supported"),5:D("Encryption Error")},x1={2:D("A network error caused the media download to fail."),3:D("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:D("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:D("The media is encrypted and there are no keys to decrypt it.")},Rv=t=>{var e,i;return t.code===1?null:{title:(e=M1[t.code])!=null?e:`Error ${t.code}`,message:(i=x1[t.code])!=null?i:t.message}};var Cv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},O1=(t,e,i)=>(Cv(t,e,"read from private field"),i?i.call(t):e.get(t)),N1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},P1=(t,e,i,a)=>(Cv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),xs;function $1(t){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${Lv({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function U1(t){return t.code&&Rv(t)!==null}function Lv(t){var e;const{title:i,message:a}=(e=Rv(t))!=null?e:{};let r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}const Wh=[h.MEDIA_ERROR_CODE,h.MEDIA_ERROR_MESSAGE];class ml extends _r{constructor(){super(...arguments),N1(this,xs,null)}static get observedAttributes(){return[...super.observedAttributes,...Wh]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!Wh.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=U1(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n))}get mediaError(){return O1(this,xs)}set mediaError(e){P1(this,xs,e)}get mediaErrorCode(){return ne(this,"mediaerrorcode")}set mediaErrorCode(e){pe(this,"mediaerrorcode",e)}get mediaErrorMessage(){return se(this,"mediaerrormessage")}set mediaErrorMessage(e){oe(this,"mediaerrormessage",e)}}xs=new WeakMap;ml.getSlotTemplateHTML=$1;ml.formatErrorMessage=Lv;E.customElements.get("media-error-dialog")||E.customElements.define("media-error-dialog",ml);var Dv=ml,H1=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},bi=(t,e,i)=>(H1(t,e,"read from private field"),i?i.call(t):e.get(t)),Fh=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},xa,Oa;function B1(t){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${W1()}
    </slot>
  `}function W1(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:i,description:a})=>`
      <tr>
        <td>
          <div class="key-combo">${i.map((n,s)=>s>0?`<span class="key-separator">or</span><span class="key">${n}</span>`:`<span class="key">${n}</span>`).join("")}</div>
        </td>
        <td class="description">${a}</td>
      </tr>
    `).join("")}</table>
  `}class Mv extends _r{constructor(){super(...arguments),Fh(this,xa,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const r=e.composedPath(),n=r[0]===this||r.includes(this),s=r.includes(a);n&&!s&&(this.open=!1)}),Fh(this,Oa,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",bi(this,xa)),document.addEventListener("keydown",bi(this,Oa)))}disconnectedCallback(){this.removeEventListener("click",bi(this,xa)),document.removeEventListener("keydown",bi(this,Oa))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e==="open"&&(this.open?(this.addEventListener("click",bi(this,xa)),document.addEventListener("keydown",bi(this,Oa))):(this.removeEventListener("click",bi(this,xa)),document.removeEventListener("keydown",bi(this,Oa))))}}xa=new WeakMap;Oa=new WeakMap;Mv.getSlotTemplateHTML=B1;E.customElements.get("media-keyboard-shortcuts-dialog")||E.customElements.define("media-keyboard-shortcuts-dialog",Mv);var xv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},F1=(t,e,i)=>(xv(t,e,"read from private field"),i?i.call(t):e.get(t)),K1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},V1=(t,e,i,a)=>(xv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Os;const q1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Y1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function G1(t){return`
    <style>
      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${q1}</slot>
      <slot name="exit">${Y1}</slot>
    </slot>
  `}function Q1(){return`
    <slot name="tooltip-enter">${D("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${D("Exit fullscreen mode")}</slot>
  `}const Kh=t=>{const e=t.mediaIsFullscreen?D("exit fullscreen mode"):D("enter fullscreen mode");t.setAttribute("aria-label",e)};class ju extends xe{constructor(){super(...arguments),K1(this,Os,null)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_FULLSCREEN,h.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Kh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_FULLSCREEN&&Kh(this)}get mediaFullscreenUnavailable(){return se(this,h.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){oe(this,h.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return F(this,h.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){K(this,h.MEDIA_IS_FULLSCREEN,e)}handleClick(e){V1(this,Os,e);const i=F1(this,Os)instanceof PointerEvent,a=this.mediaIsFullscreen?new E.CustomEvent(R.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new E.CustomEvent(R.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}Os=new WeakMap;ju.getSlotTemplateHTML=G1;ju.getTooltipContentHTML=Q1;E.customElements.get("media-fullscreen-button")||E.customElements.define("media-fullscreen-button",ju);const{MEDIA_TIME_IS_LIVE:Ns,MEDIA_PAUSED:un}=h,{MEDIA_SEEK_TO_LIVE_REQUEST:z1,MEDIA_PLAY_REQUEST:Z1}=R,j1='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function X1(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Ns}]:not([${un}])) slot[name=indicator] > *,
      :host([${Ns}]:not([${un}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Ns}]:not([${un}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${j1}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${D("live")}</slot>
  `}const Vh=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=D(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=D("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class Ov extends xe{static get observedAttributes(){return[...super.observedAttributes,Ns,un]}connectedCallback(){super.connectedCallback(),Vh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Vh(this)}get mediaPaused(){return F(this,h.MEDIA_PAUSED)}set mediaPaused(e){K(this,h.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return F(this,h.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){K(this,h.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new E.CustomEvent(z1,{composed:!0,bubbles:!0})),this.hasAttribute(un)&&this.dispatchEvent(new E.CustomEvent(Z1,{composed:!0,bubbles:!0})))}}Ov.getSlotTemplateHTML=X1;E.customElements.get("media-live-button")||E.customElements.define("media-live-button",Ov);var Nv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ir=(t,e,i)=>(Nv(t,e,"read from private field"),i?i.call(t):e.get(t)),qh=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Rr=(t,e,i,a)=>(Nv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Wt,Ps;const Xn={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},Pv=500,J1=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function ey(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Pv}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${J1}</slot>
    <div id="status" role="status" aria-live="polite">${D("media loading")}</div>
  `}class Xu extends E.HTMLElement{constructor(){if(super(),qh(this,Wt,void 0),qh(this,Ps,Pv),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Q.MEDIA_CONTROLLER,h.MEDIA_PAUSED,h.MEDIA_LOADING,Xn.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Xn.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===Q.MEDIA_CONTROLLER&&(i&&((n=(r=Ir(this,Wt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Rr(this,Wt,null)),a&&this.isConnected&&(Rr(this,Wt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Ir(this,Wt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(Q.MEDIA_CONTROLLER);r&&(Rr(this,Wt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Ir(this,Wt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Ir(this,Wt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Rr(this,Wt,null)}get loadingDelay(){return Ir(this,Ps)}set loadingDelay(e){Rr(this,Ps,e);const{style:i}=Ie(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return F(this,h.MEDIA_PAUSED)}set mediaPaused(e){K(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return F(this,h.MEDIA_LOADING)}set mediaLoading(e){K(this,h.MEDIA_LOADING,e)}get mediaController(){return se(this,Q.MEDIA_CONTROLLER)}set mediaController(e){oe(this,Q.MEDIA_CONTROLLER,e)}get noAutohide(){return F(this,Xn.NO_AUTOHIDE)}set noAutohide(e){K(this,Xn.NO_AUTOHIDE,e)}}Wt=new WeakMap;Ps=new WeakMap;Xu.shadowRootOptions={mode:"open"};Xu.getTemplateHTML=ey;E.customElements.get("media-loading-indicator")||E.customElements.define("media-loading-indicator",Xu);const ty=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Yh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,iy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function ay(t){return`
    <style>
      :host(:not([${h.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${h.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${ty}</slot>
      <slot name="low">${Yh}</slot>
      <slot name="medium">${Yh}</slot>
      <slot name="high">${iy}</slot>
    </slot>
  `}function ry(){return`
    <slot name="tooltip-mute">${D("Mute")}</slot>
    <slot name="tooltip-unmute">${D("Unmute")}</slot>
  `}const Gh=t=>{const e=t.mediaVolumeLevel==="off",i=D(e?"unmute":"mute");t.setAttribute("aria-label",i)};class Ju extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Gh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_VOLUME_LEVEL&&Gh(this)}get mediaVolumeLevel(){return se(this,h.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){oe(this,h.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?R.MEDIA_UNMUTE_REQUEST:R.MEDIA_MUTE_REQUEST;this.dispatchEvent(new E.CustomEvent(e,{composed:!0,bubbles:!0}))}}Ju.getSlotTemplateHTML=ay;Ju.getTooltipContentHTML=ry;E.customElements.get("media-mute-button")||E.customElements.define("media-mute-button",Ju);const Qh=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function ny(t){return`
    <style>
      :host([${h.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Qh}</slot>
      <slot name="exit">${Qh}</slot>
    </slot>
  `}function sy(){return`
    <slot name="tooltip-enter">${D("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${D("Exit picture in picture mode")}</slot>
  `}const zh=t=>{const e=t.mediaIsPip?D("exit picture in picture mode"):D("enter picture in picture mode");t.setAttribute("aria-label",e)};class ec extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_PIP,h.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),zh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_PIP&&zh(this)}get mediaPipUnavailable(){return se(this,h.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){oe(this,h.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return F(this,h.MEDIA_IS_PIP)}set mediaIsPip(e){K(this,h.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?R.MEDIA_EXIT_PIP_REQUEST:R.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new E.CustomEvent(e,{composed:!0,bubbles:!0}))}}ec.getSlotTemplateHTML=ny;ec.getTooltipContentHTML=sy;E.customElements.get("media-pip-button")||E.customElements.define("media-pip-button",ec);var oy=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ta=(t,e,i)=>(oy(t,e,"read from private field"),i?i.call(t):e.get(t)),ly=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ai;const Nl={RATES:"rates"},$v=[1,1.2,1.5,1.7,2],Xa=1;function dy(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||Xa}x</slot>
  `}function uy(){return D("Playback rate")}class tc extends xe{constructor(){var e;super(),ly(this,Ai,new $u(this,Nl.RATES,{defaultValue:$v})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:Xa}x`}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,Nl.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===Nl.RATES&&(Ta(this,Ai).value=a),e===h.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?Xa:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return Ta(this,Ai)}set rates(e){e?Array.isArray(e)?Ta(this,Ai).value=e.join(" "):typeof e=="string"&&(Ta(this,Ai).value=e):Ta(this,Ai).value=""}get mediaPlaybackRate(){return ne(this,h.MEDIA_PLAYBACK_RATE,Xa)}set mediaPlaybackRate(e){pe(this,h.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(Ta(this,Ai).values(),s=>+s).sort((s,o)=>s-o),r=(i=(e=a.find(s=>s>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:Xa,n=new E.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}Ai=new WeakMap;tc.getSlotTemplateHTML=dy;tc.getTooltipContentHTML=uy;E.customElements.get("media-playback-rate-button")||E.customElements.define("media-playback-rate-button",tc);const cy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,hy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function my(t){return`
    <style>
      :host([${h.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${h.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${cy}</slot>
      <slot name="pause">${hy}</slot>
    </slot>
  `}function py(){return`
    <slot name="tooltip-play">${D("Play")}</slot>
    <slot name="tooltip-pause">${D("Pause")}</slot>
  `}const Zh=t=>{const e=t.mediaPaused?D("play"):D("pause");t.setAttribute("aria-label",e)};class ic extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Zh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===h.MEDIA_PAUSED||e===h.MEDIA_LANG)&&Zh(this)}get mediaPaused(){return F(this,h.MEDIA_PAUSED)}set mediaPaused(e){K(this,h.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new E.CustomEvent(e,{composed:!0,bubbles:!0}))}}ic.getSlotTemplateHTML=my;ic.getTooltipContentHTML=py;E.customElements.get("media-play-button")||E.customElements.define("media-play-button",ic);const Lt={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function vy(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const fy=t=>{t.style.removeProperty("background-image")},Ey=(t,e)=>{t.style["background-image"]=`url('${e}')`};class ac extends E.HTMLElement{static get observedAttributes(){return[Lt.PLACEHOLDER_SRC,Lt.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===Lt.SRC&&(a==null?this.image.removeAttribute(Lt.SRC):this.image.setAttribute(Lt.SRC,a)),e===Lt.PLACEHOLDER_SRC&&(a==null?fy(this.image):Ey(this.image,a))}get placeholderSrc(){return se(this,Lt.PLACEHOLDER_SRC)}set placeholderSrc(e){oe(this,Lt.SRC,e)}get src(){return se(this,Lt.SRC)}set src(e){oe(this,Lt.SRC,e)}}ac.shadowRootOptions={mode:"open"};ac.getTemplateHTML=vy;E.customElements.get("media-poster-image")||E.customElements.define("media-poster-image",ac);var Uv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},_y=(t,e,i)=>(Uv(t,e,"read from private field"),i?i.call(t):e.get(t)),by=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},gy=(t,e,i,a)=>(Uv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),$s;class yy extends Pi{constructor(){super(),by(this,$s,void 0),gy(this,$s,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===h.MEDIA_PREVIEW_CHAPTER||e===h.MEDIA_LANG)&&a!==i&&a!=null)if(_y(this,$s).textContent=a,a!==""){const r=D("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return se(this,h.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){oe(this,h.MEDIA_PREVIEW_CHAPTER,e)}}$s=new WeakMap;E.customElements.get("media-preview-chapter-display")||E.customElements.define("media-preview-chapter-display",yy);var Hv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Jn=(t,e,i)=>(Hv(t,e,"read from private field"),i?i.call(t):e.get(t)),Ty=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},es=(t,e,i,a)=>(Hv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Ft;function Ay(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class pl extends E.HTMLElement{constructor(){if(super(),Ty(this,Ft,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Q.MEDIA_CONTROLLER,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(Q.MEDIA_CONTROLLER);r&&(es(this,Ft,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Jn(this,Ft))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Jn(this,Ft))==null?void 0:e.unassociateElement)==null||i.call(e,this),es(this,Ft,null)}attributeChangedCallback(e,i,a){var r,n,s,o,l;[h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===Q.MEDIA_CONTROLLER&&(i&&((n=(r=Jn(this,Ft))==null?void 0:r.unassociateElement)==null||n.call(r,this),es(this,Ft,null)),a&&this.isConnected&&(es(this,Ft,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Jn(this,Ft))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return se(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){oe(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(h.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(h.MEDIA_PREVIEW_COORDS);return}this.setAttribute(h.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,s]=e,o=i.split("#")[0],l=getComputedStyle(this),{maxWidth:c,maxHeight:m,minWidth:p,minHeight:d}=l,u=Math.min(parseInt(c)/n,parseInt(m)/s),v=Math.max(parseInt(p)/n,parseInt(d)/s),f=u<1,b=f?u:v>1?v:1,{style:y}=Ie(this.shadowRoot,":host"),T=Ie(this.shadowRoot,"img").style,_=this.shadowRoot.querySelector("img"),S=f?"min":"max";y.setProperty(`${S}-width`,"initial","important"),y.setProperty(`${S}-height`,"initial","important"),y.width=`${n*b}px`,y.height=`${s*b}px`;const L=()=>{T.width=`${this.imgWidth*b}px`,T.height=`${this.imgHeight*b}px`,T.display="block"};_.src!==o&&(_.onload=()=>{this.imgWidth=_.naturalWidth,this.imgHeight=_.naturalHeight,L()},_.src=o,L()),L(),T.transform=`translate(-${a*b}px, -${r*b}px)`}}Ft=new WeakMap;pl.shadowRootOptions={mode:"open"};pl.getTemplateHTML=Ay;E.customElements.get("media-preview-thumbnail")||E.customElements.define("media-preview-thumbnail",pl);var jh=pl,Bv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Xh=(t,e,i)=>(Bv(t,e,"read from private field"),i?i.call(t):e.get(t)),ky=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Sy=(t,e,i,a)=>(Bv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),zr;class wy extends Pi{constructor(){super(),ky(this,zr,void 0),Sy(this,zr,this.shadowRoot.querySelector("slot")),Xh(this,zr).textContent=Oi(0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_PREVIEW_TIME&&a!=null&&(Xh(this,zr).textContent=Oi(parseFloat(a)))}get mediaPreviewTime(){return ne(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){pe(this,h.MEDIA_PREVIEW_TIME,e)}}zr=new WeakMap;E.customElements.get("media-preview-time-display")||E.customElements.define("media-preview-time-display",wy);const Aa={SEEK_OFFSET:"seekoffset"},Pl=30,Iy=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function Ry(t,e){return`
    <slot name="icon">${Iy(e.seekOffset)}</slot>
  `}function Cy(){return D("Seek backward")}const Ly=0;class rc extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,Aa.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=ne(this,Aa.SEEK_OFFSET,Pl)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===Aa.SEEK_OFFSET&&(this.seekOffset=ne(this,Aa.SEEK_OFFSET,Pl))}get seekOffset(){return ne(this,Aa.SEEK_OFFSET,Pl)}set seekOffset(e){pe(this,Aa.SEEK_OFFSET,e),this.setAttribute("aria-label",D("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),Yp(Gp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ne(this,h.MEDIA_CURRENT_TIME,Ly)}set mediaCurrentTime(e){pe(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new E.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}rc.getSlotTemplateHTML=Ry;rc.getTooltipContentHTML=Cy;E.customElements.get("media-seek-backward-button")||E.customElements.define("media-seek-backward-button",rc);const ka={SEEK_OFFSET:"seekoffset"},$l=30,Dy=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function My(t,e){return`
    <slot name="icon">${Dy(e.seekOffset)}</slot>
  `}function xy(){return D("Seek forward")}const Oy=0;class nc extends xe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,ka.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=ne(this,ka.SEEK_OFFSET,$l)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===ka.SEEK_OFFSET&&(this.seekOffset=ne(this,ka.SEEK_OFFSET,$l))}get seekOffset(){return ne(this,ka.SEEK_OFFSET,$l)}set seekOffset(e){pe(this,ka.SEEK_OFFSET,e),this.setAttribute("aria-label",D("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),Yp(Gp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ne(this,h.MEDIA_CURRENT_TIME,Oy)}set mediaCurrentTime(e){pe(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new E.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}nc.getSlotTemplateHTML=My;nc.getTooltipContentHTML=xy;E.customElements.get("media-seek-forward-button")||E.customElements.define("media-seek-forward-button",nc);var Wv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ul=(t,e,i)=>(Wv(t,e,"read from private field"),i?i.call(t):e.get(t)),Ny=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Py=(t,e,i,a)=>(Wv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Na;const qi={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Jh=[...Object.values(qi),h.MEDIA_CURRENT_TIME,h.MEDIA_DURATION,h.MEDIA_SEEKABLE],em=["Enter"," "],$y="&nbsp;/&nbsp;",Dd=(t,{timesSep:e=$y}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n);const o=t.remaining?Oi(0-(s-r)):Oi(r);return t.showDuration?`${o}${e}${Oi(s)}`:o},Uy="video not loaded, unknown time.",Hy=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-valuetext",Uy);return}const n=t.remaining?ln(0-(r-i)):ln(i);if(!t.showDuration){t.setAttribute("aria-valuetext",n);return}const s=ln(r),o=`${n} of ${s}`;t.setAttribute("aria-valuetext",o)};function By(t,e){return`
    <slot>${Dd(e)}</slot>
  `}class Fv extends Pi{constructor(){super(),Ny(this,Na,void 0),Py(this,Na,this.shadowRoot.querySelector("slot")),Ul(this,Na).innerHTML=`${Dd(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Jh,"disabled"]}connectedCallback(){const{style:e}=Ie(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",D("playback time"));const i=a=>{const{key:r}=a;if(!em.includes(r)){this.removeEventListener("keyup",i);return}this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{const{metaKey:r,altKey:n,key:s}=a;if(r||n||!em.includes(s)){this.removeEventListener("keyup",i);return}this.addEventListener("keyup",i)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,i,a){Jh.includes(e)?this.update():e==="disabled"&&a!==i&&(a==null?this.enable():this.disable()),super.attributeChangedCallback(e,i,a)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return F(this,qi.REMAINING)}set remaining(e){K(this,qi.REMAINING,e)}get showDuration(){return F(this,qi.SHOW_DURATION)}set showDuration(e){K(this,qi.SHOW_DURATION,e)}get noToggle(){return F(this,qi.NO_TOGGLE)}set noToggle(e){K(this,qi.NO_TOGGLE,e)}get mediaDuration(){return ne(this,h.MEDIA_DURATION)}set mediaDuration(e){pe(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return ne(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){pe(this,h.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Dd(this);Hy(this),e!==Ul(this,Na).innerHTML&&(Ul(this,Na).innerHTML=e)}}Na=new WeakMap;Fv.getSlotTemplateHTML=By;E.customElements.get("media-time-display")||E.customElements.define("media-time-display",Fv);var Kv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Le=(t,e,i)=>(Kv(t,e,"read from private field"),i?i.call(t):e.get(t)),Dt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Xe=(t,e,i,a)=>(Kv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Wy=(t,e,i,a)=>({set _(r){Xe(t,e,r,i)},get _(){return Le(t,e,a)}}),Pa,Us,$a,Zr,Hs,Bs,Ws,Ua,Yi,Fs;class Fy{constructor(e,i,a){Dt(this,Pa,void 0),Dt(this,Us,void 0),Dt(this,$a,void 0),Dt(this,Zr,void 0),Dt(this,Hs,void 0),Dt(this,Bs,void 0),Dt(this,Ws,void 0),Dt(this,Ua,void 0),Dt(this,Yi,0),Dt(this,Fs,(r=performance.now())=>{Xe(this,Yi,requestAnimationFrame(Le(this,Fs))),Xe(this,Zr,performance.now()-Le(this,$a));const n=1e3/this.fps;if(Le(this,Zr)>n){Xe(this,$a,r-Le(this,Zr)%n);const s=1e3/((r-Le(this,Us))/++Wy(this,Hs)._),o=(r-Le(this,Bs))/1e3/this.duration;let l=Le(this,Ws)+o*this.playbackRate;l-Le(this,Pa).valueAsNumber>0?Xe(this,Ua,this.playbackRate/this.duration/s):(Xe(this,Ua,.995*Le(this,Ua)),l=Le(this,Pa).valueAsNumber+Le(this,Ua)),this.callback(l)}}),Xe(this,Pa,e),this.callback=i,this.fps=a}start(){Le(this,Yi)===0&&(Xe(this,$a,performance.now()),Xe(this,Us,Le(this,$a)),Xe(this,Hs,0),Le(this,Fs).call(this))}stop(){Le(this,Yi)!==0&&(cancelAnimationFrame(Le(this,Yi)),Xe(this,Yi,0))}update({start:e,duration:i,playbackRate:a}){const r=e-Le(this,Pa).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.03||n>=.5)&&this.callback(e),Xe(this,Ws,e),Xe(this,Bs,performance.now()),this.duration=i,this.playbackRate=a}}Pa=new WeakMap;Us=new WeakMap;$a=new WeakMap;Zr=new WeakMap;Hs=new WeakMap;Bs=new WeakMap;Ws=new WeakMap;Ua=new WeakMap;Yi=new WeakMap;Fs=new WeakMap;var sc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ve=(t,e,i)=>(sc(t,e,"read from private field"),i?i.call(t):e.get(t)),Se=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ut=(t,e,i,a)=>(sc(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),He=(t,e,i)=>(sc(t,e,"access private method"),i),Ha,ca,Do,cn,Mo,Ks,Sn,wn,Ba,Wa,Fa,jr,oc,Vv,Md,xo,lc,Oo,dc,No,uc,xd,qv,In,Po,Od,Yv;const Ky="video not loaded, unknown time.",Vy=t=>{const e=t.range,i=ln(+Gv(t)),a=ln(+t.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:Ky;e.setAttribute("aria-valuetext",r)};function qy(t){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${jh.shadowRootOptions.mode}">
            ${jh.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const ts=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},Gv=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class cc extends br{constructor(){super(),Se(this,Fa),Se(this,oc),Se(this,xo),Se(this,Oo),Se(this,No),Se(this,xd),Se(this,In),Se(this,Od),Se(this,Ha,void 0),Se(this,ca,void 0),Se(this,Do,void 0),Se(this,cn,void 0),Se(this,Mo,void 0),Se(this,Ks,void 0),Se(this,Sn,void 0),Se(this,wn,void 0),Se(this,Ba,void 0),Se(this,Wa,void 0),Se(this,Md,a=>{this.dragging||(Du(a)&&(this.range.valueAsNumber=a),ve(this,Wa)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),ut(this,Do,this.shadowRoot.querySelectorAll('[part~="box"]')),ut(this,Mo,this.shadowRoot.querySelector('[part~="preview-box"]')),ut(this,Ks,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);ut(this,Sn,parseInt(i.getPropertyValue("--media-box-padding-left"))),ut(this,wn,parseInt(i.getPropertyValue("--media-box-padding-right"))),ut(this,ca,new Fy(this.range,ve(this,Md),60))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_DURATION,h.MEDIA_SEEKABLE,h.MEDIA_CURRENT_TIME,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_TIME,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_BUFFERED,h.MEDIA_PLAYBACK_RATE,h.MEDIA_LOADING,h.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",D("seek")),He(this,Fa,jr).call(this),ut(this,Ha,this.getRootNode()),(e=ve(this,Ha))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),He(this,Fa,jr).call(this),(e=ve(this,Ha))==null||e.removeEventListener("transitionstart",this),ut(this,Ha,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===h.MEDIA_CURRENT_TIME||e===h.MEDIA_PAUSED||e===h.MEDIA_ENDED||e===h.MEDIA_LOADING||e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE?(ve(this,ca).update({start:ts(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),He(this,Fa,jr).call(this),Vy(this)):e===h.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ve(this,Ba),this.updateBar()))}get mediaChaptersCues(){return ve(this,Ba)}set mediaChaptersCues(e){var i;ut(this,Ba,e),this.updateSegments((i=ve(this,Ba))==null?void 0:i.map(a=>({start:ts(this,a.startTime),end:ts(this,a.endTime)})))}get mediaPaused(){return F(this,h.MEDIA_PAUSED)}set mediaPaused(e){K(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return F(this,h.MEDIA_LOADING)}set mediaLoading(e){K(this,h.MEDIA_LOADING,e)}get mediaDuration(){return ne(this,h.MEDIA_DURATION)}set mediaDuration(e){pe(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return ne(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){pe(this,h.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return ne(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){pe(this,h.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(h.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(h.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(h.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return se(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){oe(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return ne(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){pe(this,h.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return F(this,h.MEDIA_ENDED)}set mediaEnded(e){K(this,h.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(e=i.find(([o,l])=>o<=n&&n<=l))!=null?e:[];a=ts(this,s)}const{style:r}=Ie(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=Ie(this.shadowRoot,"#current-rail"),a=Ie(this.shadowRoot,'[part~="current-box"]'),r=He(this,xo,lc).call(this,ve(this,Ks)),n=He(this,Oo,dc).call(this,r,this.range.valueAsNumber),s=He(this,No,uc).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":He(this,Od,Yv).call(this);break;case"pointermove":He(this,xd,qv).call(this,e);break;case"pointerup":ve(this,Wa)&&ut(this,Wa,!1);break;case"pointerdown":ut(this,Wa,!0);break;case"pointerleave":He(this,In,Po).call(this,null);break;case"transitionstart":vi(e.target,this)&&setTimeout(()=>He(this,Fa,jr).call(this),0);break}}}Ha=new WeakMap;ca=new WeakMap;Do=new WeakMap;cn=new WeakMap;Mo=new WeakMap;Ks=new WeakMap;Sn=new WeakMap;wn=new WeakMap;Ba=new WeakMap;Wa=new WeakMap;Fa=new WeakSet;jr=function(){He(this,oc,Vv).call(this)?ve(this,ca).start():ve(this,ca).stop()};oc=new WeakSet;Vv=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Qp(this)};Md=new WeakMap;xo=new WeakSet;lc=function(t){var e;const a=((e=this.getAttribute("bounds")?Er(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,s=-(r.left-a.left-n/2),o=a.right-r.left-n/2;return{box:{width:n,min:s,max:o},bounds:a,range:r}};Oo=new WeakSet;dc=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const o=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${o})`}return i};No=new WeakSet;uc=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+ve(this,Sn)){const s=t.range.left-t.bounds.left-ve(this,Sn);return`${n-i/2+s}px`}if(n>r-ve(this,wn)){const s=t.bounds.right-t.range.right-ve(this,wn);return`${n+i/2-s-t.range.width}px`}return 0};xd=new WeakSet;qv=function(t){const e=[...ve(this,Do)].some(m=>t.composedPath().includes(m));if(!this.dragging&&(e||!t.composedPath().includes(this))){He(this,In,Po).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Ie(this.shadowRoot,"#preview-rail"),r=Ie(this.shadowRoot,'[part~="preview-box"]'),n=He(this,xo,lc).call(this,ve(this,Mo));let s=(t.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=He(this,Oo,dc).call(this,n,s),l=He(this,No,uc).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const c=Math.round(ve(this,cn))-Math.round(s*i);Math.abs(c)<1&&s>.01&&s<.99||(ut(this,cn,s*i),He(this,In,Po).call(this,ve(this,cn)))};In=new WeakSet;Po=function(t){this.dispatchEvent(new E.CustomEvent(R.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Od=new WeakSet;Yv=function(){ve(this,ca).stop();const t=Gv(this);this.dispatchEvent(new E.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};cc.shadowRootOptions={mode:"open"};cc.getContainerTemplateHTML=qy;E.customElements.get("media-time-range")||E.customElements.define("media-time-range",cc);const Yy=1,Gy=t=>t.mediaMuted?0:t.mediaVolume,Qy=t=>`${Math.round(t*100)}%`;class zy extends br{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME,h.MEDIA_MUTED,h.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,i=new E.CustomEvent(R.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",D("volume"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===h.MEDIA_VOLUME||e===h.MEDIA_MUTED)&&(this.range.valueAsNumber=Gy(this),this.range.setAttribute("aria-valuetext",Qy(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return ne(this,h.MEDIA_VOLUME,Yy)}set mediaVolume(e){pe(this,h.MEDIA_VOLUME,e)}get mediaMuted(){return F(this,h.MEDIA_MUTED)}set mediaMuted(e){K(this,h.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return se(this,h.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){oe(this,h.MEDIA_VOLUME_UNAVAILABLE,e)}}E.customElements.get("media-volume-range")||E.customElements.define("media-volume-range",zy);function Zy(t){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${h.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function jy(){return D("Loop")}class hc extends xe{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=D("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return F(this,h.MEDIA_LOOP)}set mediaLoop(e){K(this,h.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new E.CustomEvent(R.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}hc.getSlotTemplateHTML=Zy;hc.getTooltipContentHTML=jy;E.customElements.get("media-loop-button")||E.customElements.define("media-loop-button",hc);var Qv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},B=(t,e,i)=>(Qv(t,e,"read from private field"),i?i.call(t):e.get(t)),Gt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},di=(t,e,i,a)=>(Qv(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Ka,Vs,Gi,Xr,ki,Si,wi,Qi,Va,qs,yt;const tm=1,im=0,Xy=1,Jy={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof It&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof It?r.element[r.attributeName]=n:r.value=n}}}};class vl extends E.DocumentFragment{constructor(e,i,a=Jy){var r;super(),Gt(this,Ka,void 0),Gt(this,Vs,void 0),this.append(e.content.cloneNode(!0)),di(this,Ka,zv(this)),di(this,Vs,a),(r=a.createCallback)==null||r.call(a,this,B(this,Ka),i),a.processCallback(this,B(this,Ka),i)}update(e){B(this,Vs).processCallback(this,B(this,Ka),e)}}Ka=new WeakMap;Vs=new WeakMap;const zv=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new tT;for([i,a]of rm(r.value))if(!i)n.append(a);else{const s=new It(t,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===tm&&!(r instanceof HTMLTemplateElement))zv(r,e);else{const n=r.data;if(r.nodeType===tm||n.includes("{{")){const s=[];if(n)for([i,a]of rm(n))if(!i)s.push(new Text(a));else{const o=new gr(t);s.push(o),e.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new Xv(t,r);s.push(o),e.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return e},am={},rm=t=>{let e="",i=0,a=am[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([im,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([Xy,e.trim()]),e="",r++):e+=n||"";return e&&a.push([im,(i>0?"{{":"")+e]),am[t]=a},eT=11;class Zv{get value(){return""}set value(e){}toString(){return this.value}}const jv=new WeakMap;class tT{constructor(){Gt(this,Gi,[])}[Symbol.iterator](){return B(this,Gi).values()}get length(){return B(this,Gi).length}item(e){return B(this,Gi)[e]}append(...e){for(const i of e)i instanceof It&&jv.set(i,this),B(this,Gi).push(i)}toString(){return B(this,Gi).join("")}}Gi=new WeakMap;class It extends Zv{constructor(e,i,a){super(),Gt(this,Qi),Gt(this,Xr,""),Gt(this,ki,void 0),Gt(this,Si,void 0),Gt(this,wi,void 0),di(this,ki,e),di(this,Si,i),di(this,wi,a)}get attributeName(){return B(this,Si)}get attributeNamespace(){return B(this,wi)}get element(){return B(this,ki)}get value(){return B(this,Xr)}set value(e){B(this,Xr)!==e&&(di(this,Xr,e),!B(this,Qi,Va)||B(this,Qi,Va).length===1?e==null?B(this,ki).removeAttributeNS(B(this,wi),B(this,Si)):B(this,ki).setAttributeNS(B(this,wi),B(this,Si),e):B(this,ki).setAttributeNS(B(this,wi),B(this,Si),B(this,Qi,Va).toString()))}get booleanValue(){return B(this,ki).hasAttributeNS(B(this,wi),B(this,Si))}set booleanValue(e){if(!B(this,Qi,Va)||B(this,Qi,Va).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}Xr=new WeakMap;ki=new WeakMap;Si=new WeakMap;wi=new WeakMap;Qi=new WeakSet;Va=function(){return jv.get(this)};class gr extends Zv{constructor(e,i){super(),Gt(this,qs,void 0),Gt(this,yt,void 0),di(this,qs,e),di(this,yt,i?[...i]:[new Text])}get replacementNodes(){return B(this,yt)}get parentNode(){return B(this,qs)}get nextSibling(){return B(this,yt)[B(this,yt).length-1].nextSibling}get previousSibling(){return B(this,yt)[0].previousSibling}get value(){return B(this,yt).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===eT?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),di(this,yt,iT(B(this,yt)[0].parentNode,B(this,yt),i,this.nextSibling))}}qs=new WeakMap;yt=new WeakMap;class Xv extends gr{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function iT(t,e,i,a=null){let r=0,n,s,o,l=i.length,c=e.length;for(;r<l&&r<c&&e[r]==i[r];)r++;for(;r<l&&r<c&&i[l-1]==e[c-1];)a=i[--c,--l];if(r==c)for(;r<l;)t.insertBefore(i[r++],a);if(r==l)for(;r<c;)t.removeChild(e[r++]);else{for(n=e[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(t.replaceChild(o,n),n=s):t.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,t.removeChild(n),n=s}return i}const nm={string:t=>String(t)};class Jv{constructor(e){this.template=e,this.state=void 0}}const aa=new WeakMap,ra=new WeakMap,Nd={partial:(t,e)=>{e[t.expression]=new Jv(t.template)},if:(t,e)=>{var i;if(ef(t.expression,e))if(aa.get(t)!==t.template){aa.set(t,t.template);const a=new vl(t.template,e,mc);t.replace(a),ra.set(t,a)}else(i=ra.get(t))==null||i.update(e);else t.replace(""),aa.delete(t),ra.delete(t)}},aT=Object.keys(Nd),mc={processCallback(t,e,i){var a,r;if(i)for(const[n,s]of e){if(s instanceof Xv){if(!s.directive){const l=aT.find(c=>s.template.hasAttribute(c));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=Nd[s.directive])==null||a.call(Nd,s,i);continue}let o=ef(n,i);if(o instanceof Jv){aa.get(s)!==o.template?(aa.set(s,o.template),o=new vl(o.template,o.state,mc),s.value=o,ra.set(s,o)):(r=ra.get(s))==null||r.update(o.state);continue}o?(s instanceof It&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof It?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,aa.delete(s),ra.delete(s))):s instanceof It?s.value=void 0:(s.value=void 0,aa.delete(s),ra.delete(s))}}},sm={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=nm[e])==null?void 0:i.call(nm,t)}};function rT(t){return nT(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function ef(t,e={}){var i,a,r,n,s,o,l;const c=rT(t);if(c.length===0||c.some(({type:m})=>!m))return Cr(t);if(((i=c[0])==null?void 0:i.token)===">"){const m=e[(a=c[1])==null?void 0:a.token];if(!m)return Cr(t);const p={...e};m.state=p;const d=c.slice(2);for(let u=0;u<d.length;u+=3){const v=(r=d[u])==null?void 0:r.token,f=(n=d[u+1])==null?void 0:n.token,b=(s=d[u+2])==null?void 0:s.token;v&&f==="="&&(p[v]=Lr(b,e))}return m}if(c.length===1)return is(c[0])?Lr(c[0].token,e):Cr(t);if(c.length===2){const m=(o=c[0])==null?void 0:o.token,p=sm[m];if(!p||!is(c[1]))return Cr(t);const d=Lr(c[1].token,e);return p(d)}if(c.length===3){const m=(l=c[1])==null?void 0:l.token,p=sm[m];if(!p||!is(c[0])||!is(c[2]))return Cr(t);const d=Lr(c[0].token,e);if(m==="|")return p(d,c[2].token);const u=Lr(c[2].token,e);return p(d,u)}}function Cr(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function is({type:t}){return["number","boolean","string","param"].includes(t)}function Lr(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):Up(t)?parseFloat(t):e[t]}function nT(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const s in e)a=e[s].exec(t),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var pc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Pd=(t,e,i)=>(pc(t,e,"read from private field"),i?i.call(t):e.get(t)),Dr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},na=(t,e,i,a)=>(pc(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Hl=(t,e,i)=>(pc(t,e,"access private method"),i),rr,Ys,nr,$d,tf,Gs,Ud;const Bl={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},af=ke.createElement("template");af.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class fl extends E.HTMLElement{constructor(){super(),Dr(this,$d),Dr(this,Gs),Dr(this,rr,void 0),Dr(this,Ys,void 0),Dr(this,nr,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(i=>{var a;this.mediaController&&!((a=this.mediaController)!=null&&a.breakpointsComputed)||i.some(r=>{const n=r.target;return n===this?!0:n.localName!=="media-controller"?!1:!!(Bl[r.attributeName]||r.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(mi.BREAKPOINTS_COMPUTED,this.render),Hl(this,$d,tf).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Pd(this,rr))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(na(this,rr,e),na(this,nr,null),this.createRenderer())}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:s})=>Bl[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const o=(a=Bl[s.name])!=null?a:lg(s.name);let{value:l}=s;l!=null?(Up(l)&&(l=parseFloat(l)),n[o]=l===""?!0:l):n[o]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&Hl(this,Gs,Ud).call(this)}connectedCallback(){Hl(this,Gs,Ud).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Pd(this,Ys)&&(na(this,Ys,this.template),this.renderer=new vl(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(af.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}rr=new WeakMap;Ys=new WeakMap;nr=new WeakMap;$d=new WeakSet;tf=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};Gs=new WeakSet;Ud=function(){var t;const e=this.getAttribute("template");if(!e||e===Pd(this,nr))return;const i=this.getRootNode(),a=(t=i==null?void 0:i.getElementById)==null?void 0:t.call(i,e);if(a){na(this,nr,e),na(this,rr,a),this.createRenderer();return}sT(e)&&(na(this,nr,e),oT(e).then(r=>{const n=ke.createElement("template");n.innerHTML=r,na(this,rr,n),this.createRenderer()}).catch(console.error))};fl.observedAttributes=["template"];fl.processor=mc;function sT(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function oT(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}E.customElements.get("media-theme")||E.customElements.define("media-theme",fl);function lT({anchor:t,floating:e,placement:i}){const a=dT({anchor:t,floating:e}),{x:r,y:n}=cT(a,i);return{x:r,y:n}}function dT({anchor:t,floating:e}){return{anchor:uT(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function uT(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e==null?void 0:e.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function cT({anchor:t,floating:e},i){const a=hT(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=rf(i),s=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l=t[r]/2-e[r]/2;let c;switch(n){case"top":c={x:s,y:t.y-e.height};break;case"bottom":c={x:s,y:t.y+t.height};break;case"right":c={x:t.x+t.width,y:o};break;case"left":c={x:t.x-e.width,y:o};break;default:c={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":c[a]-=l;break;case"end":c[a]+=l;break}return c}function rf(t){return t.split("-")[0]}function hT(t){return["top","bottom"].includes(rf(t))?"y":"x"}class vc extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class mT extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var fc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},G=(t,e,i)=>(fc(t,e,"read from private field"),i?i.call(t):e.get(t)),ee=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Kt=(t,e,i,a)=>(fc(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),te=(t,e,i)=>(fc(t,e,"access private method"),i),Vt,ha,Ni,Qs,zs,ma,Rn,Hd,nf,$o,Ec,Uo,Zs,Bd,Wd,sf,Fd,of,Kd,lf,sr,or,lr,Cn,Ho,_c,Vd,df,bc,uf,qd,cf,gc,hf,Yd,mf,Gd,pf,hn,Bo,Qd,vf,mn,Wo,js,zd;function pr({type:t,text:e,value:i,checked:a}){const r=ke.createElement("media-chrome-menu-item");r.type=t??"",r.part.add("menu-item"),t&&r.part.add(t),r.value=i,r.checked=a;const n=ke.createElement("span");return n.textContent=e,r.append(n),r}function pa(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if((i==null?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function pT(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const Bi={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class vt extends E.HTMLElement{constructor(){if(super(),ee(this,Hd),ee(this,$o),ee(this,Zs),ee(this,Wd),ee(this,Fd),ee(this,Kd),ee(this,lr),ee(this,Ho),ee(this,Vd),ee(this,bc),ee(this,qd),ee(this,gc),ee(this,Yd),ee(this,Gd),ee(this,hn),ee(this,Qd),ee(this,mn),ee(this,js),ee(this,Vt,null),ee(this,ha,null),ee(this,Ni,null),ee(this,Qs,new Set),ee(this,zs,void 0),ee(this,ma,!1),ee(this,Rn,null),ee(this,Uo,()=>{const e=G(this,Qs),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));Kt(this,Qs,i)}),ee(this,sr,()=>{te(this,lr,Cn).call(this),te(this,Ho,_c).call(this,!1)}),ee(this,or,()=>{te(this,lr,Cn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),Kt(this,zs,new MutationObserver(G(this,Uo))),G(this,zs).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[Bi.DISABLED,Bi.HIDDEN,Bi.STYLE,Bi.ANCHOR,Q.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":te(this,Hd,nf).call(this,e);break;case"invoke":te(this,Wd,sf).call(this,e);break;case"click":te(this,Vd,df).call(this,e);break;case"toggle":te(this,qd,cf).call(this,e);break;case"focusout":te(this,Yd,mf).call(this,e);break;case"keydown":te(this,Gd,pf).call(this,e);break}}connectedCallback(){var e,i;Kt(this,Rn,Ou(this.shadowRoot,":host")),te(this,Zs,Bd).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),Kt(this,Vt,dd(this)),(i=(e=G(this,Vt))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(cr(Ln(this),G(this,sr)),cr(this,G(this,or))),te(this,$o,Ec).call(this)}disconnectedCallback(){var e,i;hr(Ln(this),G(this,sr)),hr(this,G(this,or)),this.disable(),(i=(e=G(this,Vt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Kt(this,Vt,null)}attributeChangedCallback(e,i,a){var r,n,s,o;e===Bi.HIDDEN&&a!==i?(G(this,ma)||Kt(this,ma,!0),this.hidden?te(this,Kd,lf).call(this):te(this,Fd,of).call(this),this.dispatchEvent(new mT({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===Q.MEDIA_CONTROLLER?(i&&((n=(r=G(this,Vt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Kt(this,Vt,null)),a&&this.isConnected&&(Kt(this,Vt,dd(this)),(o=(s=G(this,Vt))==null?void 0:s.associateElement)==null||o.call(s,this))):e===Bi.DISABLED&&a!==i?a==null?this.enable():this.disable():e===Bi.STYLE&&a!==i&&te(this,Zs,Bd).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=rl(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(vT)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&te(this,js,zd).call(this,i)}focus(){if(Kt(this,ha,xu()),this.items.length){te(this,mn,Wo).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e==null||e.focus()}handleSelect(e){var i;const a=te(this,hn,Bo).call(this,e);a&&(te(this,js,zd).call(this,a,a.type==="checkbox"),G(this,Ni)&&!this.hidden&&((i=G(this,ha))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,s=(a=(i=te(this,hn,Bo).call(this,e))!=null?i:te(this,Qd,vf).call(this))!=null?a:n[0],o=n.indexOf(s);let l=Math.max(0,o);r==="ArrowDown"?l++:r==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=n.length-1),l<0&&(l=n.length-1),l>n.length-1&&(l=0),te(this,mn,Wo).call(this,n[l]),n[l].focus()}}Vt=new WeakMap;ha=new WeakMap;Ni=new WeakMap;Qs=new WeakMap;zs=new WeakMap;ma=new WeakMap;Rn=new WeakMap;Hd=new WeakSet;nf=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&te(this,$o,Ec).call(this),e.name||G(this,Uo).call(this)};$o=new WeakSet;Ec=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};Uo=new WeakMap;Zs=new WeakSet;Bd=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};Wd=new WeakSet;sf=function(t){Kt(this,Ni,t.relatedTarget),vi(this,t.relatedTarget)||(this.hidden=!this.hidden)};Fd=new WeakSet;of=function(){var t;(t=G(this,Ni))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),cr(Ln(this),G(this,sr)),cr(this,G(this,or))};Kd=new WeakSet;lf=function(){var t;(t=G(this,Ni))==null||t.setAttribute("aria-expanded","false"),hr(Ln(this),G(this,sr)),hr(this,G(this,or))};sr=new WeakMap;or=new WeakMap;lr=new WeakSet;Cn=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=lT({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=Ln(this).getBoundingClientRect(),n=r.width-e-t,s=r.height-i-this.offsetHeight,{style:o}=G(this,Rn);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${s}px`);const l=getComputedStyle(this),m=o.getPropertyValue("--_menu-bottom")===l.bottom?s:parseFloat(l.bottom),p=r.height-m-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${p}px`)};Ho=new WeakSet;_c=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e==null?void 0:e.querySelector('[role="menu"]'),{style:a}=G(this,Rn);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),te(this,lr,Cn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),te(this,lr,Cn).call(this);a.removeProperty("--media-menu-transition-in")};Vd=new WeakSet;df=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(G(this,bc,uf))){(e=G(this,ha))==null||e.focus(),this.hidden=!0;return}const i=te(this,hn,Bo).call(this,t);!i||i.hasAttribute("disabled")||(te(this,mn,Wo).call(this,i),this.handleSelect(t))};bc=new WeakSet;uf=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};qd=new WeakSet;cf=function(t){if(t.target===this)return;te(this,gc,hf).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new vc({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);te(this,Ho,_c).call(this,!0)};gc=new WeakSet;hf=function(){const t='[role="menuitem"] > [role="menu"]:not([hidden])',e=this.querySelector(t);this.container.classList.toggle("has-expanded",!!e)};Yd=new WeakSet;mf=function(t){var e;vi(this,t.relatedTarget)||(G(this,ma)&&((e=G(this,ha))==null||e.focus()),G(this,Ni)&&G(this,Ni)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};Gd=new WeakSet;pf=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:c}=t;if(!(o||l||c)&&this.keysUsed.includes(s))if(t.preventDefault(),t.stopPropagation(),s==="Tab"){if(G(this,ma)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=G(this,ha))==null||n.focus(),G(this,ma)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(t):this.handleMove(t)};hn=new WeakSet;Bo=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};Qd=new WeakSet;vf=function(){return this.items.find(t=>t.tabIndex===0)};mn=new WeakSet;Wo=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};js=new WeakSet;zd=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};vt.shadowRootOptions={mode:"open"};vt.getTemplateHTML=pT;function vT(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t==null?void 0:t.role)}function Ln(t){var e;return(e=t.getAttribute("bounds")?Er(t,`#${t.getAttribute("bounds")}`):Ve(t)||t.parentElement)!=null?e:t}E.customElements.get("media-chrome-menu")||E.customElements.define("media-chrome-menu",vt);var yc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Zt=(t,e,i)=>(yc(t,e,"read from private field"),i?i.call(t):e.get(t)),ii=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Wl=(t,e,i,a)=>(yc(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),wt=(t,e,i)=>(yc(t,e,"access private method"),i),Xs,pn,Zd,ff,Fo,Tc,Ac,Ef,jt,vr,Dn,jd,_f,Js,Xd;function fT(t){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(t)}
    </slot>
    <slot name="submenu"></slot>
  `}function ET(t){return""}const dt={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class $i extends E.HTMLElement{constructor(){if(super(),ii(this,Zd),ii(this,Fo),ii(this,Ac),ii(this,vr),ii(this,jd),ii(this,Js),ii(this,Xs,!1),ii(this,pn,void 0),ii(this,jt,()=>{var e,i;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r==null?void 0:r.dataset.description)!=null?i:r==null?void 0:r.text,s=ke.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=rt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[dt.TYPE,dt.DISABLED,dt.CHECKED,dt.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Mr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":wt(this,Zd,ff).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":wt(this,jd,_f).call(this,e);break;case"keyup":wt(this,vr,Dn).call(this,e);break}}attributeChangedCallback(e,i,a){e===dt.CHECKED&&Mr(this)&&!Zt(this,Xs)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===dt.TYPE&&a!==i?this.role="menuitem"+a:e===dt.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(dt.DISABLED)||this.enable(),this.role="menuitem"+this.type,Wl(this,pn,Jd(this,this.parentNode)),wt(this,Js,Xd).call(this),this.submenuElement&&wt(this,Fo,Tc).call(this)}disconnectedCallback(){this.disable(),wt(this,Js,Xd).call(this),Wl(this,pn,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=rl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(dt.TYPE))!=null?e:""}set type(e){this.setAttribute(dt.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(dt.VALUE))!=null?e:this.text}set value(e){this.setAttribute(dt.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Mr(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Mr(this)&&(Wl(this,Xs,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Mr(this)||this.invokeTargetElement&&vi(this,e.target)&&this.invokeTargetElement.dispatchEvent(new vc({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}Xs=new WeakMap;pn=new WeakMap;Zd=new WeakSet;ff=function(t){const e=t.target;if(!(e!=null&&e.name))for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?wt(this,Fo,Tc).call(this):wt(this,Ac,Ef).call(this))};Fo=new WeakSet;Tc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Zt(this,jt)),this.submenuElement.addEventListener("addmenuitem",Zt(this,jt)),this.submenuElement.addEventListener("removemenuitem",Zt(this,jt)),Zt(this,jt).call(this)};Ac=new WeakSet;Ef=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Zt(this,jt)),this.submenuElement.removeEventListener("addmenuitem",Zt(this,jt)),this.submenuElement.removeEventListener("removemenuitem",Zt(this,jt)),Zt(this,jt).call(this)};jt=new WeakMap;vr=new WeakSet;Dn=function(t){const{key:e}=t;if(!this.keysUsed.includes(e)){this.removeEventListener("keyup",wt(this,vr,Dn));return}this.handleClick(t)};jd=new WeakSet;_f=function(t){const{metaKey:e,altKey:i,key:a}=t;if(e||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",wt(this,vr,Dn));return}this.addEventListener("keyup",wt(this,vr,Dn),{once:!0})};Js=new WeakSet;Xd=function(){var t;const e=(t=Zt(this,pn))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i==null||i.setAttribute("aria-checked","true")};$i.shadowRootOptions={mode:"open"};$i.getTemplateHTML=fT;$i.getSuffixSlotInnerHTML=ET;function Mr(t){return t.type==="radio"||t.type==="checkbox"}function Jd(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?Jd(t,i):e!=null&&e.items?e:Jd(e,e==null?void 0:e.parentNode)}E.customElements.get("media-chrome-menu-item")||E.customElements.define("media-chrome-menu-item",$i);function _T(t){return`
    ${vt.getTemplateHTML(t)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class bf extends vt{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ve(this).querySelector("media-settings-menu-button")}}bf.getTemplateHTML=_T;E.customElements.get("media-settings-menu")||E.customElements.define("media-settings-menu",bf);function bT(t){return`
    ${$i.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function gT(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class El extends $i{}El.shadowRootOptions={mode:"open"};El.getTemplateHTML=bT;El.getSuffixSlotInnerHTML=gT;E.customElements.get("media-settings-menu-item")||E.customElements.define("media-settings-menu-item",El);class yr extends xe{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=rl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new vc({relatedTarget:this}))}}E.customElements.get("media-chrome-menu-button")||E.customElements.define("media-chrome-menu-button",yr);function yT(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function TT(){return D("Settings")}class kc extends yr{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ve(this).querySelector("media-settings-menu")}}kc.getSlotTemplateHTML=yT;kc.getTooltipContentHTML=TT;E.customElements.get("media-settings-menu-button")||E.customElements.define("media-settings-menu-button",kc);var Sc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},gf=(t,e,i)=>(Sc(t,e,"read from private field"),i?i.call(t):e.get(t)),as=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},eu=(t,e,i,a)=>(Sc(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),rs=(t,e,i)=>(Sc(t,e,"access private method"),i),Jr,Ko,eo,tu,to,iu;class AT extends vt{constructor(){super(...arguments),as(this,eo),as(this,to),as(this,Jr,[]),as(this,Ko,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===h.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(eu(this,Jr,ng(a??"")),rs(this,eo,tu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",rs(this,to,iu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",rs(this,to,iu))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=Ve(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return gf(this,Jr)}set mediaAudioTrackList(e){eu(this,Jr,e),rs(this,eo,tu).call(this)}get mediaAudioTrackEnabled(){var e;return(e=se(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){oe(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}Jr=new WeakMap;Ko=new WeakMap;eo=new WeakSet;tu=function(){if(gf(this,Ko)===JSON.stringify(this.mediaAudioTrackList))return;eu(this,Ko,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=pr({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(a)}};to=new WeakSet;iu=function(){if(this.value==null)return;const t=new E.CustomEvent(R.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};E.customElements.get("media-audio-track-menu")||E.customElements.define("media-audio-track-menu",AT);const kT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function ST(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${kT}</slot>
  `}function wT(){return D("Audio")}const om=t=>{const e=D("Audio");t.setAttribute("aria-label",e)};class wc extends yr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),om(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_LANG&&om(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=Ve(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=se(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){oe(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}wc.getSlotTemplateHTML=ST;wc.getTooltipContentHTML=wT;E.customElements.get("media-audio-track-menu-button")||E.customElements.define("media-audio-track-menu-button",wc);var Ic=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},IT=(t,e,i)=>(Ic(t,e,"read from private field"),i?i.call(t):e.get(t)),Fl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},RT=(t,e,i,a)=>(Ic(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),ns=(t,e,i)=>(Ic(t,e,"access private method"),i),Vo,io,au,ao,ru;const CT=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function LT(t){return`
    ${vt.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${CT}</slot>
  `}class yf extends vt{constructor(){super(...arguments),Fl(this,io),Fl(this,ao),Fl(this,Vo,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_LIST&&i!==a?ns(this,io,au).call(this):e===h.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a||"",ns(this,io,au).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ns(this,ao,ru))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ns(this,ao,ru))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ve(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return lm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return lm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dm(this,h.MEDIA_SUBTITLES_SHOWING,e)}}Vo=new WeakMap;io=new WeakSet;au=function(){var t;const e=IT(this,Vo)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(h.MEDIA_SUBTITLES_SHOWING);if(!e&&!i)return;RT(this,Vo,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=pr({type:"radio",text:this.formatMenuItemText(D("Off")),value:"off",checked:a});r.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const o=pr({type:"radio",text:this.formatMenuItemText(s.label,s),value:md(s),checked:this.value==md(s)});o.prepend(pa(this,"checked-indicator")),((t=s.kind)!=null?t:"subs")==="captions"&&o.append(pa(this,"captions-indicator")),this.defaultSlot.append(o)}};ao=new WeakSet;ru=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(h.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t!=null&&t.length&&i&&this.dispatchEvent(new E.CustomEvent(R.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new E.CustomEvent(R.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};yf.getTemplateHTML=LT;const lm=(t,e)=>{const i=t.getAttribute(e);return i?dl(i):[]},dm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=An(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};E.customElements.get("media-captions-menu")||E.customElements.define("media-captions-menu",yf);const DT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,MT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function xT(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${DT}</slot>
      <slot name="off">${MT}</slot>
    </slot>
  `}function OT(){return D("Captions")}const um=t=>{t.setAttribute("data-captions-enabled",rv(t).toString())},cm=t=>{t.setAttribute("aria-label",D("closed captions"))};class Rc extends yr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING,h.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),cm(this),um(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_SHOWING?um(this):e===h.MEDIA_LANG&&cm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=Ve(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return hm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){mm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return hm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){mm(this,h.MEDIA_SUBTITLES_SHOWING,e)}}Rc.getSlotTemplateHTML=xT;Rc.getTooltipContentHTML=OT;const hm=(t,e)=>{const i=t.getAttribute(e);return i?dl(i):[]},mm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=An(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};E.customElements.get("media-captions-menu-button")||E.customElements.define("media-captions-menu-button",Rc);var Tf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},qa=(t,e,i)=>(Tf(t,e,"read from private field"),i?i.call(t):e.get(t)),Kl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Sa=(t,e,i)=>(Tf(t,e,"access private method"),i),Ri,Ya,en,ro,nu;const Vl={RATES:"rates"};class NT extends vt{constructor(){super(),Kl(this,Ya),Kl(this,ro),Kl(this,Ri,new $u(this,Vl.RATES,{defaultValue:$v})),Sa(this,Ya,en).call(this)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,Vl.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_PLAYBACK_RATE&&i!=a?(this.value=a,Sa(this,Ya,en).call(this)):e===Vl.RATES&&i!=a&&(qa(this,Ri).value=a,Sa(this,Ya,en).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Sa(this,ro,nu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Sa(this,ro,nu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ve(this).querySelector("media-playback-rate-menu-button")}get rates(){return qa(this,Ri)}set rates(e){e?Array.isArray(e)?qa(this,Ri).value=e.join(" "):typeof e=="string"&&(qa(this,Ri).value=e):qa(this,Ri).value="",Sa(this,Ya,en).call(this)}get mediaPlaybackRate(){return ne(this,h.MEDIA_PLAYBACK_RATE,Xa)}set mediaPlaybackRate(e){pe(this,h.MEDIA_PLAYBACK_RATE,e)}}Ri=new WeakMap;Ya=new WeakSet;en=function(){this.defaultSlot.textContent="";const t=this.mediaPlaybackRate,e=new Set(Array.from(qa(this,Ri)).map(a=>Number(a)));t>0&&!e.has(t)&&e.add(t);const i=Array.from(e).sort((a,r)=>a-r);for(const a of i){const r=pr({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:t===a});r.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(r)}};ro=new WeakSet;nu=function(){if(!this.value)return;const t=new E.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};E.customElements.get("media-playback-rate-menu")||E.customElements.define("media-playback-rate-menu",NT);const no=1;function PT(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||no}x</slot>
  `}function $T(){return D("Playback rate")}class Cc extends yr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:no}x`}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===h.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?no:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ve(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return ne(this,h.MEDIA_PLAYBACK_RATE,no)}set mediaPlaybackRate(e){pe(this,h.MEDIA_PLAYBACK_RATE,e)}}Cc.getSlotTemplateHTML=PT;Cc.getTooltipContentHTML=$T;E.customElements.get("media-playback-rate-menu-button")||E.customElements.define("media-playback-rate-menu-button",Cc);var Lc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},tn=(t,e,i)=>(Lc(t,e,"read from private field"),i?i.call(t):e.get(t)),ss=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},pm=(t,e,i,a)=>(Lc(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),wa=(t,e,i)=>(Lc(t,e,"access private method"),i),an,Ja,Ga,rn,so,su;class UT extends vt{constructor(){super(...arguments),ss(this,Ga),ss(this,so),ss(this,an,[]),ss(this,Ja,{})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_LIST,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT]}static formatMenuItemText(e,i){return super.formatMenuItemText(e,i)}static formatRendition(e,{showBitrate:i=!1}={}){const a=`${Math.min(e.width,e.height)}p`;if(i&&e.bitrate){const r=e.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${a} (${n})`}return this.formatMenuItemText(a,e)}static compareRendition(e,i){var a,r;return i.height===e.height?((a=i.bitrate)!=null?a:0)-((r=e.bitrate)!=null?r:0):i.height-e.height}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_RENDITION_SELECTED&&i!==a?(this.value=a??"auto",wa(this,Ga,rn).call(this)):e===h.MEDIA_RENDITION_LIST&&i!==a?(pm(this,an,tg(a)),wa(this,Ga,rn).call(this)):e===h.MEDIA_HEIGHT&&i!==a&&wa(this,Ga,rn).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",wa(this,so,su))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",wa(this,so,su))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ve(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return tn(this,an)}set mediaRenditionList(e){pm(this,an,e),wa(this,Ga,rn).call(this)}get mediaRenditionSelected(){return se(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){oe(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ne(this,h.MEDIA_HEIGHT)}set mediaHeight(e){pe(this,h.MEDIA_HEIGHT,e)}compareRendition(e,i){return this.constructor.compareRendition(e,i)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}formatRendition(e,i){return this.constructor.formatRendition(e,i)}showRenditionBitrate(e){return this.mediaRenditionList.some(i=>i!==e&&i.height===e.height&&i.bitrate!==e.bitrate)}}an=new WeakMap;Ja=new WeakMap;Ga=new WeakSet;rn=function(){if(tn(this,Ja).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&tn(this,Ja).mediaHeight===this.mediaHeight)return;tn(this,Ja).mediaRenditionList=JSON.stringify(this.mediaRenditionList),tn(this,Ja).mediaHeight=this.mediaHeight;const t=this.mediaRenditionList.sort(this.compareRendition.bind(this)),e=t.find(s=>s.id===this.mediaRenditionSelected);for(const s of t)s.selected=s===e;this.defaultSlot.textContent="";const i=!this.mediaRenditionSelected;for(const s of t){const o=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),l=pr({type:"radio",text:o,value:`${s.id}`,checked:s.selected&&!i});l.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(l)}const a=e&&this.showRenditionBitrate(e),r=i?e?this.formatMenuItemText(`${D("Auto")} • ${this.formatRendition(e,{showBitrate:a})}`,e):this.formatMenuItemText(`${D("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(D("Auto")),n=pr({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(n)};so=new WeakSet;su=function(){if(this.value==null)return;const t=new E.CustomEvent(R.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};E.customElements.get("media-rendition-menu")||E.customElements.define("media-rendition-menu",UT);const HT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function BT(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${HT}</slot>
  `}function WT(){return D("Quality")}class Dc extends yr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ve(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return se(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){oe(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ne(this,h.MEDIA_HEIGHT)}set mediaHeight(e){pe(this,h.MEDIA_HEIGHT,e)}}Dc.getSlotTemplateHTML=BT;Dc.getTooltipContentHTML=WT;E.customElements.get("media-rendition-menu-button")||E.customElements.define("media-rendition-menu-button",Dc);var Mc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},qt=(t,e,i)=>(Mc(t,e,"read from private field"),i?i.call(t):e.get(t)),Mt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Af=(t,e,i,a)=>(Mc(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),ht=(t,e,i)=>(Mc(t,e,"access private method"),i),fr,Mn,_l,Ji,er,xc,kf,oo,ou,lo,lu,Sf,qo,Yo,uo;function FT(t){return`
      ${vt.getTemplateHTML(t)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}class wf extends vt{constructor(){super(),Mt(this,Mn),Mt(this,Ji),Mt(this,xc),Mt(this,oo),Mt(this,lu),Mt(this,fr,!1),Mt(this,lo,e=>{const i=e.target,a=(i==null?void 0:i.nodeName)==="VIDEO",r=ht(this,oo,ou).call(this,i);(a||r)&&(qt(this,fr)?ht(this,Ji,er).call(this):ht(this,lu,Sf).call(this,e))}),Mt(this,qo,e=>{const i=e.target,a=this.contains(i),r=e.button===2,n=(i==null?void 0:i.nodeName)==="VIDEO",s=ht(this,oo,ou).call(this,i);a||r&&(n||s)||ht(this,Ji,er).call(this)}),Mt(this,Yo,e=>{e.key==="Escape"&&ht(this,Ji,er).call(this)}),Mt(this,uo,e=>{var i,a;const r=e.target;if((i=r.matches)!=null&&i.call(r,'button[invoke="copy"]')){const n=(a=r.closest("media-context-menu-item"))==null?void 0:a.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}ht(this,Ji,er).call(this)}),this.setAttribute("noautohide",""),ht(this,Mn,_l).call(this)}connectedCallback(){super.connectedCallback(),Ve(this).addEventListener("contextmenu",qt(this,lo)),this.addEventListener("click",qt(this,uo))}disconnectedCallback(){super.disconnectedCallback(),Ve(this).removeEventListener("contextmenu",qt(this,lo)),this.removeEventListener("click",qt(this,uo)),document.removeEventListener("mousedown",qt(this,qo)),document.removeEventListener("keydown",qt(this,Yo))}}fr=new WeakMap;Mn=new WeakSet;_l=function(){this.hidden=!qt(this,fr)};Ji=new WeakSet;er=function(){Af(this,fr,!1),ht(this,Mn,_l).call(this)};xc=new WeakSet;kf=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&ht(i=e,Ji,er).call(i)})};oo=new WeakSet;ou=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};lo=new WeakMap;lu=new WeakSet;Sf=function(t){t.preventDefault(),ht(this,xc,kf).call(this),Af(this,fr,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,ht(this,Mn,_l).call(this),document.addEventListener("mousedown",qt(this,qo),{once:!0}),document.addEventListener("keydown",qt(this,Yo),{once:!0})};qo=new WeakMap;Yo=new WeakMap;uo=new WeakMap;wf.getTemplateHTML=FT;E.customElements.get("media-context-menu")||E.customElements.define("media-context-menu",wf);function KT(t){return`
    ${$i.getTemplateHTML.call(this,t)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}class Oc extends $i{}Oc.shadowRootOptions={mode:"open"};Oc.getTemplateHTML=KT;E.customElements.get("media-context-menu-item")||E.customElements.define("media-context-menu-item",Oc);var If=t=>{throw TypeError(t)},Nc=(t,e,i)=>e.has(t)||If("Cannot "+i),X=(t,e,i)=>(Nc(t,e,"read from private field"),i?i.call(t):e.get(t)),kt=(t,e,i)=>e.has(t)?If("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Jt=(t,e,i,a)=>(Nc(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),ye=(t,e,i)=>(Nc(t,e,"access private method"),i),bl=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends bl{}globalThis.DocumentFragment=t}var Pc=class extends bl{},VT=class extends bl{},qT={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Pc)}},co,YT=class{constructor(e,i={}){kt(this,co),Jt(this,co,i==null?void 0:i.detail)}get detail(){return X(this,co)}initCustomEvent(){}};co=new WeakMap;function GT(t,e){return new Pc}var Rf={document:{createElement:GT},DocumentFragment,customElements:qT,CustomEvent:YT,EventTarget:bl,HTMLElement:Pc,HTMLVideoElement:VT},Cf=typeof window>"u"||typeof globalThis.customElements>"u",Qt=Cf?Rf:globalThis,Go=Cf?Rf.document:globalThis.document;function QT(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${du(i)}: ${a}; `)}),e?e.trim():void 0}function du(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Lf(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Je(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function Df(t){let e=zT(t).toString();return e?"?"+e:""}function zT(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var Mf=(t,e)=>!t||!e?!1:t.contains(e)?!0:Mf(t,e.getRootNode().host),xf="mux.com",ZT=()=>{try{return"3.10.2"}catch{}return"UNKNOWN"},jT=ZT(),Of=()=>jT,XT=(t,{token:e,customDomain:i=xf,thumbnailTime:a,programTime:r}={})=>{var n;let s=e==null?a:void 0,{aud:o}=(n=tr(e))!=null?n:{};if(!(e&&o!=="t"))return`https://image.${i}/${t}/thumbnail.webp${Df({token:e,time:s,program_time:r})}`},JT=(t,{token:e,customDomain:i=xf,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=tr(e))!=null?n:{};if(!(e&&s!=="s"))return`https://image.${i}/${t}/storyboard.vtt${Df({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},$c=t=>{if(t){if([j.LIVE,j.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return j.LIVE}},eA={crossorigin:"crossOrigin",playsinline:"playsInline"};function tA(t){var e;return(e=eA[t])!=null?e:Lf(t)}var Qa,za,Ke,iA=class{constructor(e,i){kt(this,Qa),kt(this,za),kt(this,Ke,[]),Jt(this,Qa,e),Jt(this,za,i)}[Symbol.iterator](){return X(this,Ke).values()}get length(){return X(this,Ke).length}get value(){var e;return(e=X(this,Ke).join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Jt(this,Ke,[]),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return X(this,Ke)[e]}values(){return X(this,Ke).values()}keys(){return X(this,Ke).keys()}forEach(e){X(this,Ke).forEach(e)}add(...e){var i,a;e.forEach(r=>{this.contains(r)||X(this,Ke).push(r)}),!(this.value===""&&!((i=X(this,Qa))!=null&&i.hasAttribute(`${X(this,za)}`)))&&((a=X(this,Qa))==null||a.setAttribute(`${X(this,za)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>{X(this,Ke).splice(X(this,Ke).indexOf(a),1)}),(i=X(this,Qa))==null||i.setAttribute(`${X(this,za)}`,`${this.value}`)}contains(e){return X(this,Ke).includes(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){this.remove(e),this.add(i)}};Qa=new WeakMap,za=new WeakMap,Ke=new WeakMap;var Nf=`[mux-player ${Of()}]`;function si(...t){console.warn(Nf,...t)}function mt(...t){console.error(Nf,...t)}function Pf(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${M("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),si(i)}var Ue={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},zi={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},vm=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),aA=Object.values(Ue).filter(t=>Ue.PLAYSINLINE!==t),rA=Object.values(zi),nA=[...aA,...rA],sA=class extends Qt.HTMLElement{static get observedAttributes(){return nA}constructor(){super()}attributeChangedCallback(t,e,i){var a,r;switch(t){case zi.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case zi.VOLUME:{let n=(a=Je(i))!=null?a:1;this.media&&(this.media.volume=n);return}case zi.PLAYBACKRATE:{let n=(r=Je(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var t,e;return(e=(t=this.media)==null?void 0:t.play())!=null?e:Promise.reject()}pause(){var t;(t=this.media)==null||t.pause()}load(){var t;(t=this.media)==null||t.load()}get media(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var t,e;return(e=(t=this.media)==null?void 0:t.paused)!=null?e:!0}get duration(){var t,e;return(e=(t=this.media)==null?void 0:t.duration)!=null?e:NaN}get ended(){var t,e;return(e=(t=this.media)==null?void 0:t.ended)!=null?e:!1}get buffered(){var t,e;return(e=(t=this.media)==null?void 0:t.buffered)!=null?e:vm}get seekable(){var t,e;return(e=(t=this.media)==null?void 0:t.seekable)!=null?e:vm}get readyState(){var t,e;return(e=(t=this.media)==null?void 0:t.readyState)!=null?e:0}get videoWidth(){var t,e;return(e=(t=this.media)==null?void 0:t.videoWidth)!=null?e:0}get videoHeight(){var t,e;return(e=(t=this.media)==null?void 0:t.videoHeight)!=null?e:0}get currentSrc(){var t,e;return(e=(t=this.media)==null?void 0:t.currentSrc)!=null?e:""}get currentTime(){var t,e;return(e=(t=this.media)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.media&&(this.media.currentTime=Number(t))}get volume(){var t,e;return(e=(t=this.media)==null?void 0:t.volume)!=null?e:1}set volume(t){this.media&&(this.media.volume=Number(t))}get playbackRate(){var t,e;return(e=(t=this.media)==null?void 0:t.playbackRate)!=null?e:1}set playbackRate(t){this.media&&(this.media.playbackRate=Number(t))}get defaultPlaybackRate(){var t;return(t=Je(this.getAttribute(zi.PLAYBACKRATE)))!=null?t:1}set defaultPlaybackRate(t){t!=null?this.setAttribute(zi.PLAYBACKRATE,`${t}`):this.removeAttribute(zi.PLAYBACKRATE)}get crossOrigin(){return xr(this,Ue.CROSSORIGIN)}set crossOrigin(t){this.setAttribute(Ue.CROSSORIGIN,`${t}`)}get autoplay(){return xr(this,Ue.AUTOPLAY)!=null}set autoplay(t){t?this.setAttribute(Ue.AUTOPLAY,typeof t=="string"?t:""):this.removeAttribute(Ue.AUTOPLAY)}get loop(){return xr(this,Ue.LOOP)!=null}set loop(t){t?this.setAttribute(Ue.LOOP,""):this.removeAttribute(Ue.LOOP)}get muted(){var t,e;return(e=(t=this.media)==null?void 0:t.muted)!=null?e:!1}set muted(t){this.media&&(this.media.muted=!!t)}get defaultMuted(){return xr(this,Ue.MUTED)!=null}set defaultMuted(t){t?this.setAttribute(Ue.MUTED,""):this.removeAttribute(Ue.MUTED)}get playsInline(){return xr(this,Ue.PLAYSINLINE)!=null}set playsInline(t){mt("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(t){["","none","metadata","auto"].includes(t)?this.setAttribute(Ue.PRELOAD,t):this.removeAttribute(Ue.PRELOAD)}};function xr(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var fm=sA,oA=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,Or=new WeakMap,lA=class $f{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=Or.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=Or.get(this.element);i&&i.delete(this.type)}}static for(e){Or.has(e.element)||Or.set(e.element,new Map);let i=e.attributeName.slice(2),a=Or.get(e.element);return a&&a.has(i)?a.get(i):new $f(e.element,i)}};function dA(t,e){return t instanceof It&&t.attributeName.startsWith("on")?(lA.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function uA(t,e){return e instanceof Uf&&t instanceof gr?(e.renderInto(t),!0):!1}function cA(t,e){return e instanceof DocumentFragment&&t instanceof gr?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function hA(t,e){if(t instanceof It){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function mA(t,e){if(t instanceof It&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function pA(t,e){if(typeof e=="boolean"&&t instanceof It){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function vA(t,e){return e===!1&&t instanceof gr?(t.replace(""),!0):!1}function fA(t,e){mA(t,e)||pA(t,e)||dA(t,e)||vA(t,e)||uA(t,e)||cA(t,e)||hA(t,e)}var ql=new Map,Em=new WeakMap,_m=new WeakMap,Uf=class{constructor(e,i,a){this.strings=e,this.values=i,this.processor=a,this.stringsKey=this.strings.join("")}get template(){if(ql.has(this.stringsKey))return ql.get(this.stringsKey);{let e=Go.createElement("template"),i=this.strings.length-1;return e.innerHTML=this.strings.reduce((a,r,n)=>a+r+(n<i?`{{ ${n} }}`:""),""),ql.set(this.stringsKey,e),e}}renderInto(e){var i;let a=this.template;if(Em.get(e)!==a){Em.set(e,a);let n=new vl(a,this.values,this.processor);_m.set(e,n),e instanceof gr?e.replace(...n.children):e.appendChild(n);return}let r=_m.get(e);(i=r==null?void 0:r.update)==null||i.call(r,this.values)}},EA={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let s=(a=i[r])!=null?a:"";fA(n,s)}}}};function ho(t,...e){return new Uf(t,e,EA)}function _A(t,e){t.renderInto(e)}var bA=t=>{let{tokens:e}=t;return e.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},gA=t=>ho`
  <style>
    ${bA(t)}
    ${oA}
  </style>
  ${kA(t)}
`,yA=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return $c(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},TA={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},AA=Object.values(TA).join(", "),kA=t=>{var e,i,a,r,n,s,o,l,c,m,p,d,u,v,f,b,y,T,_,S,L,P,H,z,ie,V,U,Pe,Ye,Ge,fe,Be,Ct,We,ft,Qe,Re,$e;return ho`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${yA(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(j.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    nomutedpref="${t.nomutedpref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=QT({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!t.defaultHiddenCaptions}"
    forwardseekoffset="${(n=t.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=t.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=t.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=t.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(c=t.defaultDuration)!=null?c:!1}"
    hideduration="${(m=t.hideDuration)!=null?m:!1}"
    title="${(p=t.title)!=null?p:!1}"
    videotitle="${(d=t.videoTitle)!=null?d:!1}"
    proudlydisplaymuxbadge="${(u=t.proudlyDisplayMuxBadge)!=null?u:!1}"
    exportparts="${AA}"
    onclose="${t.onCloseErrorDialog}"
    onfocusin="${t.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${(v=t.noHotKeys)!=null?v:!1}"
      target-live-window="${(f=t.targetLiveWindow)!=null?f:!1}"
      stream-type="${(b=$c(t.streamType))!=null?b:!1}"
      crossorigin="${(y=t.crossOrigin)!=null?y:""}"
      playsinline
      autoplay="${(T=t.autoplay)!=null?T:!1}"
      muted="${(_=t.muted)!=null?_:!1}"
      loop="${(S=t.loop)!=null?S:!1}"
      preload="${(L=t.preload)!=null?L:!1}"
      debug="${(P=t.debug)!=null?P:!1}"
      prefer-cmcd="${(H=t.preferCmcd)!=null?H:!1}"
      disable-tracking="${(z=t.disableTracking)!=null?z:!1}"
      disable-cookies="${(ie=t.disableCookies)!=null?ie:!1}"
      prefer-playback="${(V=t.preferPlayback)!=null?V:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      beacon-collection-domain="${(U=t.beaconCollectionDomain)!=null?U:!1}"
      player-init-time="${(Pe=t.playerInitTime)!=null?Pe:!1}"
      player-software-name="${(Ye=t.playerSoftwareName)!=null?Ye:!1}"
      player-software-version="${(Ge=t.playerSoftwareVersion)!=null?Ge:!1}"
      env-key="${(fe=t.envKey)!=null?fe:!1}"
      custom-domain="${(Be=t.customDomain)!=null?Be:!1}"
      src="${t.src?t.src:t.playbackId?id(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?id(t):!1}"
      cast-receiver="${(Ct=t.castReceiver)!=null?Ct:!1}"
      drm-token="${(ft=(We=t.tokens)==null?void 0:We.drm)!=null?ft:!1}"
      exportparts="video"
      disable-pseudo-ended="${(Qe=t.disablePseudoEnded)!=null?Qe:!1}"
      max-auto-resolution="${(Re=t.maxAutoResolution)!=null?Re:!1}"
    >
      ${t.storyboard?ho`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:ho``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${t.poster?t.poster:!1}"
        placeholdersrc="${($e=t.placeholder)!=null?$e:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Hf=t=>t.charAt(0).toUpperCase()+t.slice(1),SA=(t,e=!1)=>{var i,a;if(t.muxCode){let r=Hf((i=t.errorCategory)!=null?i:"video"),n=el((a=t.errorCategory)!=null?a:re.VIDEO);if(t.muxCode===O.NETWORK_OFFLINE)return M("Your device appears to be offline",e);if(t.muxCode===O.NETWORK_TOKEN_EXPIRED)return M("{category} URL has expired",e).format({category:r});if([O.NETWORK_TOKEN_SUB_MISMATCH,O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING,O.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return M("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===O.NETWORK_TOKEN_MISSING)return M("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===O.NETWORK_NOT_FOUND)return M("{category} does not exist",e).format({category:r});if(t.muxCode===O.NETWORK_NOT_READY){let s=t.streamType==="live"?"Live stream":"Video";return M("{mediaType} is not currently available",e).format({mediaType:s})}}if(t.code){if(t.code===C.MEDIA_ERR_NETWORK)return M("Network Error",e);if(t.code===C.MEDIA_ERR_DECODE)return M("Media Error",e);if(t.code===C.MEDIA_ERR_SRC_NOT_SUPPORTED)return M("Source Not Supported",e)}return M("Error",e)},wA=(t,e=!1)=>{var i,a;if(t.muxCode){let r=Hf((i=t.errorCategory)!=null?i:"video"),n=el((a=t.errorCategory)!=null?a:re.VIDEO);return t.muxCode===O.NETWORK_OFFLINE?M("Check your internet connection and try reloading this video.",e):t.muxCode===O.NETWORK_TOKEN_EXPIRED?M("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===O.NETWORK_TOKEN_SUB_MISMATCH?M("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===O.NETWORK_TOKEN_MALFORMED?M("{category} URL is formatted incorrectly",e).format({category:r}):[O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?M("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[O.NETWORK_TOKEN_MISSING,O.NETWORK_INVALID_URL].includes(t.muxCode)?M("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===O.NETWORK_NOT_FOUND?"":t.message}return t.code&&(t.code===C.MEDIA_ERR_NETWORK||t.code===C.MEDIA_ERR_DECODE||(t.code,C.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},IA=(t,e=!1)=>{let i=SA(t,e).toString(),a=wA(t,e).toString();return{title:i,message:a}},RA=t=>{if(t.muxCode){if(t.muxCode===O.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===O.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===O.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===O.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===O.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===O.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===C.MEDIA_ERR_NETWORK)return"";if(t.code===C.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===C.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},bm=(t,e)=>{let i=RA(t);return{message:t.message,context:t.context,file:i}},CA=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,uu=Go.createElement("template");"innerHTML"in uu&&(uu.innerHTML=CA);var gm,ym,Bf=class extends fl{};Bf.template=(ym=(gm=uu.content)==null?void 0:gm.children)==null?void 0:ym[0];Qt.customElements.get("media-theme-gerwig")||Qt.customElements.define("media-theme-gerwig",Bf);var LA="gerwig",ri={SRC:"src",POSTER:"poster"},A={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},cu=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function DA(t,e){var i,a,r;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:((i=t.media)==null?void 0:i.currentSrc)&&t.storyboard,storyboardSrc:t.getAttribute(A.STORYBOARD_SRC),fullscreenElement:t.getAttribute(A.FULLSCREEN_ELEMENT),placeholder:t.getAttribute("placeholder"),themeTemplate:xA(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(A.NOHOTKEYS),hotKeys:t.getAttribute(A.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,maxAutoResolution:t.maxAutoResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(g.TARGET_LIVE_WINDOW),streamType:$c(t.getAttribute(g.STREAM_TYPE)),primaryColor:t.getAttribute(A.PRIMARY_COLOR),secondaryColor:t.getAttribute(A.SECONDARY_COLOR),accentColor:t.getAttribute(A.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:OA(t),playbackRates:t.getAttribute(A.PLAYBACK_RATES),customDomain:(a=t.getAttribute(g.CUSTOM_DOMAIN))!=null?a:void 0,title:t.getAttribute(A.TITLE),videoTitle:(r=t.getAttribute(A.VIDEO_TITLE))!=null?r:t.getAttribute(A.TITLE),novolumepref:t.hasAttribute(A.NO_VOLUME_PREF),nomutedpref:t.hasAttribute(A.NO_MUTED_PREF),proudlyDisplayMuxBadge:t.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:t.castReceiver,disablePseudoEnded:t.hasAttribute(A.DISABLE_PSEUDO_ENDED),...e,extraSourceParams:t.extraSourceParams}}var MA=Dv.formatErrorMessage;Dv.formatErrorMessage=t=>{var e,i;if(t instanceof C){let a=IA(t,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a==null?void 0:a.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(e=a.linkText)!=null?e:""} ${M("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return MA(t)};function xA(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=Qt.customElements.get(a);if(n!=null&&n.template)return n.template}}function OA(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function Tm(t){let e=t.videoTitle?{video_title:t.videoTitle}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var NA=Object.values(g),PA=Object.values(ri),$A=Object.values(A),Am=Of(),km="mux-player",Sm={isDialogOpen:!1},UA={redundant_streams:!0},mo,po,vo,Zi,fo,dr,he,Ii,Wf,hu,ji,wm,Im,Rm,Cm,HA=class extends fm{constructor(){super(),kt(this,he),kt(this,mo),kt(this,po,!1),kt(this,vo,{}),kt(this,Zi,!0),kt(this,fo,new iA(this,"hotkeys")),kt(this,dr,{...Sm,onCloseErrorDialog:t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&ye(this,he,hu).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&(Mf(this,Go.activeElement)||t.preventDefault())}}),Jt(this,mo,Au()),this.attachShadow({mode:"open"}),ye(this,he,Wf).call(this),this.isConnected&&ye(this,he,Ii).call(this)}static get NAME(){return km}static get VERSION(){return Am}static get observedAttributes(){var t;return[...(t=fm.observedAttributes)!=null?t:[],...PA,...NA,...$A]}get mediaTheme(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("media-theme")}get mediaController(){var t,e;return(e=(t=this.mediaTheme)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("media-controller")}connectedCallback(){let t=this.media;t&&(t.metadata=Tm(this))}attributeChangedCallback(t,e,i){switch(ye(this,he,Ii).call(this),super.attributeChangedCallback(t,e,i),t){case A.HOTKEYS:X(this,fo).value=i;break;case A.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&si(M("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case A.THUMBNAIL_TOKEN:{if(i){let a=tr(i);if(a){let{aud:r}=a,n=on.THUMBNAIL;r!==n&&si(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case A.STORYBOARD_TOKEN:{if(i){let a=tr(i);if(a){let{aud:r}=a,n=on.STORYBOARD;r!==n&&si(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case A.DRM_TOKEN:{if(i){let a=tr(i);if(a){let{aud:r}=a,n=on.DRM;r!==n&&si(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case g.PLAYBACK_ID:{i!=null&&i.includes("?token")&&mt(M("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case g.STREAM_TYPE:{i&&![j.LIVE,j.ON_DEMAND,j.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:Pf({file:"invalid-stream-type.md",message:M("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===j.LIVE?this.getAttribute(A.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break}case A.FULLSCREEN_ELEMENT:{if(i!=null||i!==e){let a=Go.getElementById(i),r=a==null?void 0:a.querySelector("mux-player");this.mediaController&&a&&r&&(this.mediaController.fullscreenElement=a)}break}}[g.PLAYBACK_ID,ri.SRC,A.PLAYBACK_TOKEN].includes(t)&&e!==i&&Jt(this,dr,{...X(this,dr),...Sm}),ye(this,he,ji).call(this,{[tA(t)]:i})}async requestFullscreen(t){var e;if(!(!this.mediaController||this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Qt.CustomEvent(R.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(mi.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}async exitFullscreen(){var t;if(!(!this.mediaController||!this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new Qt.CustomEvent(R.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,i)=>{var a;(a=this.mediaController)==null||a.addEventListener(mi.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var t;return(t=this.getAttribute(g.PREFER_CMCD))!=null?t:void 0}set preferCmcd(t){t!==this.preferCmcd&&(t?To.includes(t)?this.setAttribute(g.PREFER_CMCD,t):si(`Invalid value for preferCmcd. Must be one of ${To.join()}`):this.removeAttribute(g.PREFER_CMCD))}get hasPlayed(){var t,e;return(e=(t=this.mediaController)==null?void 0:t.hasAttribute(h.MEDIA_HAS_PLAYED))!=null?e:!1}get inLiveWindow(){var t;return(t=this.mediaController)==null?void 0:t.hasAttribute(h.MEDIA_TIME_IS_LIVE)}get _hls(){var t;return(t=this.media)==null?void 0:t._hls}get mux(){var t;return(t=this.media)==null?void 0:t.mux}get theme(){var t;return(t=this.getAttribute(A.THEME))!=null?t:LA}set theme(t){this.setAttribute(A.THEME,`${t}`)}get themeProps(){let t=this.mediaTheme;if(!t)return;let e={};for(let i of t.getAttributeNames()){if(cu.includes(i))continue;let a=t.getAttribute(i);e[Lf(i)]=a===""?!0:a}return e}set themeProps(t){var e,i;ye(this,he,Ii).call(this);let a={...this.themeProps,...t};for(let r in a){if(cu.includes(r))continue;let n=t==null?void 0:t[r];typeof n=="boolean"||n==null?(e=this.mediaTheme)==null||e.toggleAttribute(du(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(du(r),n)}}get playbackId(){var t;return(t=this.getAttribute(g.PLAYBACK_ID))!=null?t:void 0}set playbackId(t){t?this.setAttribute(g.PLAYBACK_ID,t):this.removeAttribute(g.PLAYBACK_ID)}get src(){var t,e;return this.playbackId?(t=Wi(this,ri.SRC))!=null?t:void 0:(e=this.getAttribute(ri.SRC))!=null?e:void 0}set src(t){t?this.setAttribute(ri.SRC,t):this.removeAttribute(ri.SRC)}get poster(){var t;let e=this.getAttribute(ri.POSTER);if(e!=null)return e;let{tokens:i}=this;if(i.playback&&!i.thumbnail){si("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return XT(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(t=this.thumbnailTime)!=null?t:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(t){t||t===""?this.setAttribute(ri.POSTER,t):this.removeAttribute(ri.POSTER)}get storyboardSrc(){var t;return(t=this.getAttribute(A.STORYBOARD_SRC))!=null?t:void 0}set storyboardSrc(t){t?this.setAttribute(A.STORYBOARD_SRC,t):this.removeAttribute(A.STORYBOARD_SRC)}get storyboard(){let{tokens:t}=this;if(this.storyboardSrc&&!t.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[j.LIVE,j.UNKNOWN].includes(this.streamType)||t.playback&&!t.storyboard))return JT(this.playbackId,{customDomain:this.customDomain,token:t.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(A.AUDIO)}set audio(t){if(!t){this.removeAttribute(A.AUDIO);return}this.setAttribute(A.AUDIO,"")}get hotkeys(){return X(this,fo)}get nohotkeys(){return this.hasAttribute(A.NOHOTKEYS)}set nohotkeys(t){if(!t){this.removeAttribute(A.NOHOTKEYS);return}this.setAttribute(A.NOHOTKEYS,"")}get thumbnailTime(){return Je(this.getAttribute(A.THUMBNAIL_TIME))}set thumbnailTime(t){this.setAttribute(A.THUMBNAIL_TIME,`${t}`)}get videoTitle(){var t,e;return(e=(t=this.getAttribute(A.VIDEO_TITLE))!=null?t:this.getAttribute(A.TITLE))!=null?e:""}set videoTitle(t){t!==this.videoTitle&&(t?this.setAttribute(A.VIDEO_TITLE,t):this.removeAttribute(A.VIDEO_TITLE))}get placeholder(){var t;return(t=Wi(this,A.PLACEHOLDER))!=null?t:""}set placeholder(t){this.setAttribute(A.PLACEHOLDER,`${t}`)}get primaryColor(){var t,e;let i=this.getAttribute(A.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Qt.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_primary-color"))==null?void 0:e.trim(),i))return i}set primaryColor(t){this.setAttribute(A.PRIMARY_COLOR,`${t}`)}get secondaryColor(){var t,e;let i=this.getAttribute(A.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Qt.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_secondary-color"))==null?void 0:e.trim(),i))return i}set secondaryColor(t){this.setAttribute(A.SECONDARY_COLOR,`${t}`)}get accentColor(){var t,e;let i=this.getAttribute(A.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Qt.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_accent-color"))==null?void 0:e.trim(),i))return i}set accentColor(t){this.setAttribute(A.ACCENT_COLOR,`${t}`)}get defaultShowRemainingTime(){return this.hasAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(t){t?this.setAttribute(A.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(A.PLAYBACK_RATES))return this.getAttribute(A.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,e)=>t-e)}set playbackRates(t){if(!t){this.removeAttribute(A.PLAYBACK_RATES);return}this.setAttribute(A.PLAYBACK_RATES,t.join(" "))}get forwardSeekOffset(){var t;return(t=Je(this.getAttribute(A.FORWARD_SEEK_OFFSET)))!=null?t:10}set forwardSeekOffset(t){this.setAttribute(A.FORWARD_SEEK_OFFSET,`${t}`)}get backwardSeekOffset(){var t;return(t=Je(this.getAttribute(A.BACKWARD_SEEK_OFFSET)))!=null?t:10}set backwardSeekOffset(t){this.setAttribute(A.BACKWARD_SEEK_OFFSET,`${t}`)}get defaultHiddenCaptions(){return this.hasAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(t){t?this.setAttribute(A.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Je(this.getAttribute(A.DEFAULT_DURATION))}set defaultDuration(t){t==null?this.removeAttribute(A.DEFAULT_DURATION):this.setAttribute(A.DEFAULT_DURATION,`${t}`)}get playerInitTime(){return this.hasAttribute(g.PLAYER_INIT_TIME)?Je(this.getAttribute(g.PLAYER_INIT_TIME)):X(this,mo)}set playerInitTime(t){t!=this.playerInitTime&&(t==null?this.removeAttribute(g.PLAYER_INIT_TIME):this.setAttribute(g.PLAYER_INIT_TIME,`${+t}`))}get playerSoftwareName(){var t;return(t=this.getAttribute(g.PLAYER_SOFTWARE_NAME))!=null?t:km}get playerSoftwareVersion(){var t;return(t=this.getAttribute(g.PLAYER_SOFTWARE_VERSION))!=null?t:Am}get beaconCollectionDomain(){var t;return(t=this.getAttribute(g.BEACON_COLLECTION_DOMAIN))!=null?t:void 0}set beaconCollectionDomain(t){t!==this.beaconCollectionDomain&&(t?this.setAttribute(g.BEACON_COLLECTION_DOMAIN,t):this.removeAttribute(g.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var t;return(t=this.getAttribute(g.MAX_RESOLUTION))!=null?t:void 0}set maxResolution(t){t!==this.maxResolution&&(t?this.setAttribute(g.MAX_RESOLUTION,t):this.removeAttribute(g.MAX_RESOLUTION))}get minResolution(){var t;return(t=this.getAttribute(g.MIN_RESOLUTION))!=null?t:void 0}set minResolution(t){t!==this.minResolution&&(t?this.setAttribute(g.MIN_RESOLUTION,t):this.removeAttribute(g.MIN_RESOLUTION))}get maxAutoResolution(){var t;return(t=this.getAttribute(g.MAX_AUTO_RESOLUTION))!=null?t:void 0}set maxAutoResolution(t){t==null?this.removeAttribute(g.MAX_AUTO_RESOLUTION):this.setAttribute(g.MAX_AUTO_RESOLUTION,t)}get renditionOrder(){var t;return(t=this.getAttribute(g.RENDITION_ORDER))!=null?t:void 0}set renditionOrder(t){t!==this.renditionOrder&&(t?this.setAttribute(g.RENDITION_ORDER,t):this.removeAttribute(g.RENDITION_ORDER))}get programStartTime(){return Je(this.getAttribute(g.PROGRAM_START_TIME))}set programStartTime(t){t==null?this.removeAttribute(g.PROGRAM_START_TIME):this.setAttribute(g.PROGRAM_START_TIME,`${t}`)}get programEndTime(){return Je(this.getAttribute(g.PROGRAM_END_TIME))}set programEndTime(t){t==null?this.removeAttribute(g.PROGRAM_END_TIME):this.setAttribute(g.PROGRAM_END_TIME,`${t}`)}get assetStartTime(){return Je(this.getAttribute(g.ASSET_START_TIME))}set assetStartTime(t){t==null?this.removeAttribute(g.ASSET_START_TIME):this.setAttribute(g.ASSET_START_TIME,`${t}`)}get assetEndTime(){return Je(this.getAttribute(g.ASSET_END_TIME))}set assetEndTime(t){t==null?this.removeAttribute(g.ASSET_END_TIME):this.setAttribute(g.ASSET_END_TIME,`${t}`)}get extraSourceParams(){return this.hasAttribute(A.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(A.EXTRA_SOURCE_PARAMS)).entries()].reduce((t,[e,i])=>(t[e]=i,t),{}):UA}set extraSourceParams(t){t==null?this.removeAttribute(A.EXTRA_SOURCE_PARAMS):this.setAttribute(A.EXTRA_SOURCE_PARAMS,new URLSearchParams(t).toString())}get customDomain(){var t;return(t=this.getAttribute(g.CUSTOM_DOMAIN))!=null?t:void 0}set customDomain(t){t!==this.customDomain&&(t?this.setAttribute(g.CUSTOM_DOMAIN,t):this.removeAttribute(g.CUSTOM_DOMAIN))}get envKey(){var t;return(t=Wi(this,g.ENV_KEY))!=null?t:void 0}set envKey(t){this.setAttribute(g.ENV_KEY,`${t}`)}get noVolumePref(){return this.hasAttribute(A.NO_VOLUME_PREF)}set noVolumePref(t){t?this.setAttribute(A.NO_VOLUME_PREF,""):this.removeAttribute(A.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(A.NO_MUTED_PREF)}set noMutedPref(t){t?this.setAttribute(A.NO_MUTED_PREF,""):this.removeAttribute(A.NO_MUTED_PREF)}get debug(){return Wi(this,g.DEBUG)!=null}set debug(t){t?this.setAttribute(g.DEBUG,""):this.removeAttribute(g.DEBUG)}get disableTracking(){return Wi(this,g.DISABLE_TRACKING)!=null}set disableTracking(t){this.toggleAttribute(g.DISABLE_TRACKING,!!t)}get disableCookies(){return Wi(this,g.DISABLE_COOKIES)!=null}set disableCookies(t){t?this.setAttribute(g.DISABLE_COOKIES,""):this.removeAttribute(g.DISABLE_COOKIES)}get streamType(){var t,e,i;return(i=(e=this.getAttribute(g.STREAM_TYPE))!=null?e:(t=this.media)==null?void 0:t.streamType)!=null?i:j.UNKNOWN}set streamType(t){this.setAttribute(g.STREAM_TYPE,`${t}`)}get defaultStreamType(){var t,e,i;return(i=(e=this.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?e:(t=this.mediaController)==null?void 0:t.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?i:j.ON_DEMAND}set defaultStreamType(t){t?this.setAttribute(A.DEFAULT_STREAM_TYPE,t):this.removeAttribute(A.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var t,e;return this.hasAttribute(A.TARGET_LIVE_WINDOW)?+this.getAttribute(A.TARGET_LIVE_WINDOW):(e=(t=this.media)==null?void 0:t.targetLiveWindow)!=null?e:Number.NaN}set targetLiveWindow(t){t==this.targetLiveWindow||Number.isNaN(t)&&Number.isNaN(this.targetLiveWindow)||(t==null?this.removeAttribute(A.TARGET_LIVE_WINDOW):this.setAttribute(A.TARGET_LIVE_WINDOW,`${+t}`))}get liveEdgeStart(){var t;return(t=this.media)==null?void 0:t.liveEdgeStart}get startTime(){return Je(Wi(this,g.START_TIME))}set startTime(t){this.setAttribute(g.START_TIME,`${t}`)}get preferPlayback(){let t=this.getAttribute(g.PREFER_PLAYBACK);if(t===zt.MSE||t===zt.NATIVE)return t}set preferPlayback(t){t!==this.preferPlayback&&(t===zt.MSE||t===zt.NATIVE?this.setAttribute(g.PREFER_PLAYBACK,t):this.removeAttribute(g.PREFER_PLAYBACK))}get metadata(){var t;return(t=this.media)==null?void 0:t.metadata}set metadata(t){if(ye(this,he,Ii).call(this),!this.media){mt("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...Tm(this),...t}}get _hlsConfig(){var t;return(t=this.media)==null?void 0:t._hlsConfig}set _hlsConfig(t){if(ye(this,he,Ii).call(this),!this.media){mt("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=t}async addCuePoints(t){var e;if(ye(this,he,Ii).call(this),!this.media){mt("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(e=this.media)==null?void 0:e.addCuePoints(t)}get activeCuePoint(){var t;return(t=this.media)==null?void 0:t.activeCuePoint}get cuePoints(){var t,e;return(e=(t=this.media)==null?void 0:t.cuePoints)!=null?e:[]}addChapters(t){var e;if(ye(this,he,Ii).call(this),!this.media){mt("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(e=this.media)==null?void 0:e.addChapters(t)}get activeChapter(){var t;return(t=this.media)==null?void 0:t.activeChapter}get chapters(){var t,e;return(e=(t=this.media)==null?void 0:t.chapters)!=null?e:[]}getStartDate(){var t;return(t=this.media)==null?void 0:t.getStartDate()}get currentPdt(){var t;return(t=this.media)==null?void 0:t.currentPdt}get tokens(){let t=this.getAttribute(A.PLAYBACK_TOKEN),e=this.getAttribute(A.DRM_TOKEN),i=this.getAttribute(A.THUMBNAIL_TOKEN),a=this.getAttribute(A.STORYBOARD_TOKEN);return{...X(this,vo),...t!=null?{playback:t}:{},...e!=null?{drm:e}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(t){Jt(this,vo,t??{})}get playbackToken(){var t;return(t=this.getAttribute(A.PLAYBACK_TOKEN))!=null?t:void 0}set playbackToken(t){this.setAttribute(A.PLAYBACK_TOKEN,`${t}`)}get drmToken(){var t;return(t=this.getAttribute(A.DRM_TOKEN))!=null?t:void 0}set drmToken(t){this.setAttribute(A.DRM_TOKEN,`${t}`)}get thumbnailToken(){var t;return(t=this.getAttribute(A.THUMBNAIL_TOKEN))!=null?t:void 0}set thumbnailToken(t){this.setAttribute(A.THUMBNAIL_TOKEN,`${t}`)}get storyboardToken(){var t;return(t=this.getAttribute(A.STORYBOARD_TOKEN))!=null?t:void 0}set storyboardToken(t){this.setAttribute(A.STORYBOARD_TOKEN,`${t}`)}addTextTrack(t,e,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return bu(n,t,e,i,a)}removeTextTrack(t){var e;let i=(e=this.media)==null?void 0:e.nativeEl;if(i)return N0(i,t)}get textTracks(){var t;return(t=this.media)==null?void 0:t.textTracks}get castReceiver(){var t;return(t=this.getAttribute(A.CAST_RECEIVER))!=null?t:void 0}set castReceiver(t){t!==this.castReceiver&&(t?this.setAttribute(A.CAST_RECEIVER,t):this.removeAttribute(A.CAST_RECEIVER))}get castCustomData(){var t;return(t=this.media)==null?void 0:t.castCustomData}set castCustomData(t){if(!this.media){mt("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=t}get noTooltips(){return this.hasAttribute(A.NO_TOOLTIPS)}set noTooltips(t){if(!t){this.removeAttribute(A.NO_TOOLTIPS);return}this.setAttribute(A.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(t){t?this.setAttribute(A.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}};mo=new WeakMap,po=new WeakMap,vo=new WeakMap,Zi=new WeakMap,fo=new WeakMap,dr=new WeakMap,he=new WeakSet,Ii=function(){var t,e,i,a;if(!X(this,po)){Jt(this,po,!0),ye(this,he,ji).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Qt.HTMLElement))throw""}catch{mt("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{mt("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof r1))throw""}catch{mt("<media-controller> failed to upgrade!")}ye(this,he,wm).call(this),ye(this,he,Im).call(this),ye(this,he,Rm).call(this),Jt(this,Zi,(e=(t=this.mediaController)==null?void 0:t.hasAttribute(x.USER_INACTIVE))!=null?e:!0),ye(this,he,Cm).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",()=>ye(this,he,ji).call(this)),(a=this.media)==null||a.addEventListener("loadstart",()=>ye(this,he,ji).call(this))}},Wf=function(){var t,e;try{(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},hu=function(t){Object.assign(X(this,dr),t),ye(this,he,ji).call(this)},ji=function(t={}){_A(gA(DA(this,{...X(this,dr),...t})),this.shadowRoot)},wm=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(cu.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},Im=function(){let t=e=>{var i;let a=(i=this.media)==null?void 0:i.error;if(!(a instanceof C)){let{message:n,code:s}=a??{};a=new C(n,s)}if(!(a!=null&&a.fatal)){si(a),a.data&&si(`${a.name} data:`,a.data);return}let r=bm(a);r.message&&Pf(r),mt(a),a.data&&mt(`${a.name} data:`,a.data),ye(this,he,hu).call(this,{isDialogOpen:!0})};this.addEventListener("error",t),this.media&&(this.media.errorTranslator=(e={})=>{var i,a,r;if(!(((i=this.media)==null?void 0:i.error)instanceof C))return e;let n=bm((a=this.media)==null?void 0:a.error);return{player_error_code:(r=this.media)==null?void 0:r.error.code,player_error_message:n.message?String(n.message):e.player_error_message,player_error_context:n.context?String(n.context):e.player_error_context}})},Rm=function(){var t,e,i,a;let r=()=>ye(this,he,ji).call(this);(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",r),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",r)},Cm=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===j.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(l,c,m=!1)=>{r()||Array.from(l&&l.activeCues||[]).forEach(p=>{if(!(!p.snapToLines||p.line<-5||p.line>=0&&p.line<10))if(!c||this.paused){let d=p.text.split(`
`).length,u=-3;this.streamType===j.LIVE&&(u=-2);let v=u-d;if(p.line===v&&!m)return;a.has(p)||a.set(p,p.line),p.line=v}else setTimeout(()=>{p.line=a.get(p)||"auto"},500)})},s=()=>{var l,c;n(i,(c=(l=this.mediaController)==null?void 0:l.hasAttribute(x.USER_INACTIVE))!=null?c:!1)},o=()=>{var l,c;let m=Array.from(((c=(l=this.mediaController)==null?void 0:l.media)==null?void 0:c.textTracks)||[]).filter(p=>["subtitles","captions"].includes(p.kind)&&p.mode==="showing")[0];m!==i&&(i==null||i.removeEventListener("cuechange",s)),i=m,i==null||i.addEventListener("cuechange",s),n(i,X(this,Zi))};o(),(t=this.textTracks)==null||t.addEventListener("change",o),(e=this.textTracks)==null||e.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var l,c;let m=(c=(l=this.mediaController)==null?void 0:l.hasAttribute(x.USER_INACTIVE))!=null?c:!0;X(this,Zi)!==m&&(Jt(this,Zi,m),n(i,X(this,Zi)))})};function Wi(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Lm=HA,Ff=t=>{throw TypeError(t)},Kf=(t,e,i)=>e.has(t)||Ff("Cannot "+i),BA=(t,e,i)=>(Kf(t,e,"read from private field"),i?i.call(t):e.get(t)),WA=(t,e,i)=>e.has(t)?Ff("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),FA=(t,e,i,a)=>(Kf(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),gl=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends gl{}globalThis.DocumentFragment=t}var Uc=class extends gl{},KA=class extends gl{},VA={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Uc)}},Eo,qA=class{constructor(t,e={}){WA(this,Eo),FA(this,Eo,e==null?void 0:e.detail)}get detail(){return BA(this,Eo)}initCustomEvent(){}};Eo=new WeakMap;function YA(t,e){return new Uc}var GA={document:{createElement:YA},DocumentFragment,customElements:VA,CustomEvent:qA,EventTarget:gl,HTMLElement:Uc,HTMLVideoElement:KA},QA=typeof window>"u"||typeof globalThis.customElements>"u",Yl=QA?GA:globalThis;Yl.customElements.get("mux-player")||(Yl.customElements.define("mux-player",Lm),Yl.MuxPlayerElement=Lm);var Vf=parseInt(vn.version)>=19,Dm={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},zA=t=>t==null,ZA=(t,e)=>zA(e)?!1:t in e,jA=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),XA=(t,e)=>{if(!(!Vf&&typeof e=="boolean"&&!e)){if(ZA(t,Dm))return Dm[t];if(typeof e<"u")return/[A-Z]/.test(t)?jA(t):t}},JA=(t,e)=>!Vf&&typeof t=="boolean"?"":t,ek=(t={})=>{let{ref:e,...i}=t;return Object.entries(i).reduce((a,[r,n])=>{let s=XA(r,n);if(!s)return a;let o=JA(n);return a[s]=o,a},{})};function Mm(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function tk(...t){return e=>{let i=!1,a=t.map(r=>{let n=Mm(r,e);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():Mm(t[r],null)}}}}function ik(...t){return fn.useCallback(tk(...t),t)}var ak=Object.prototype.hasOwnProperty,rk=(t,e)=>{if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.some((r,n)=>e[n]===r);let i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!ak.call(e,i[r])||!Object.is(t[i[r]],e[i[r]]))return!1;return!0},qf=(t,e,i)=>!rk(e,t[i]),nk=(t,e,i)=>{t[i]=e},sk=(t,e,i,a=nk,r=qf)=>fn.useEffect(()=>{let n=i==null?void 0:i.current;n&&r(n,e,t)&&a(n,e,t)},[i==null?void 0:i.current,e]),xt=sk,ok=()=>{try{return"3.10.2"}catch{}return"UNKNOWN"},lk=ok(),dk=()=>lk,le=(t,e,i)=>fn.useEffect(()=>{let a=e==null?void 0:e.current;if(!a||!i)return;let r=t,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[e==null?void 0:e.current,i,t]),uk=vn.forwardRef(({children:t,...e},i)=>vn.createElement("mux-player",{suppressHydrationWarning:!0,...ek(e),ref:i},t)),ck=(t,e)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:c,onDurationChange:m,onVolumeChange:p,onRateChange:d,onResize:u,onWaiting:v,onPlay:f,onPlaying:b,onTimeUpdate:y,onPause:T,onSeeking:_,onSeeked:S,onStalled:L,onSuspend:P,onEnded:H,onError:z,onCuePointChange:ie,onChapterChange:V,metadata:U,tokens:Pe,paused:Ye,playbackId:Ge,playbackRates:fe,currentTime:Be,themeProps:Ct,extraSourceParams:We,castCustomData:ft,_hlsConfig:Qe,...Re}=e;return xt("tokens",Pe,t),xt("playbackId",Ge,t),xt("playbackRates",fe,t),xt("metadata",U,t),xt("extraSourceParams",We,t),xt("_hlsConfig",Qe,t),xt("themeProps",Ct,t),xt("castCustomData",ft,t),xt("paused",Ye,t,($e,nt)=>{nt!=null&&(nt?$e.pause():$e.play())},($e,nt,_a)=>$e.hasAttribute("autoplay")&&!$e.hasPlayed?!1:qf($e,nt,_a)),xt("currentTime",Be,t,($e,nt)=>{nt!=null&&($e.currentTime=nt)}),le("abort",t,i),le("canplay",t,a),le("canplaythrough",t,r),le("emptied",t,n),le("loadstart",t,s),le("loadeddata",t,o),le("loadedmetadata",t,l),le("progress",t,c),le("durationchange",t,m),le("volumechange",t,p),le("ratechange",t,d),le("resize",t,u),le("waiting",t,v),le("play",t,f),le("playing",t,b),le("timeupdate",t,y),le("pause",t,T),le("seeking",t,_),le("seeked",t,S),le("stalled",t,L),le("suspend",t,P),le("ended",t,H),le("error",t,z),le("cuepointchange",t,ie),le("chapterchange",t,V),[Re]},hk=dk(),mk="mux-player-react",pk=vn.forwardRef((t,e)=>{var i;let a=fn.useRef(null),r=ik(a,e),[n]=ck(a,t),[s]=fn.useState((i=t.playerInitTime)!=null?i:Au());return vn.createElement(uk,{ref:r,defaultHiddenCaptions:t.defaultHiddenCaptions,playerSoftwareName:mk,playerSoftwareVersion:hk,playerInitTime:s,...n})}),$k=pk;export{gk as MaxResolution,C as MediaError,yk as MinResolution,Tk as RenditionOrder,$k as default,Au as generatePlayerInitTime,mk as playerSoftwareName,hk as playerSoftwareVersion};
