var xt=Object.defineProperty,Nt=Object.defineProperties;var kt=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var Pt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var Te=(e,t,n)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Se=(e,t)=>{for(var n in t||(t={}))Pt.call(t,n)&&Te(e,n,t[n]);if(Ae)for(var n of Ae(t))Lt.call(t,n)&&Te(e,n,t[n]);return e},Ce=(e,t)=>Nt(e,kt(t));const Ft=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Ft();function _(){}function G(e,t){for(const n in t)e[n]=t[n];return e}function Xe(e){return e()}function $e(){return Object.create(null)}function Y(e){e.forEach(Xe)}function Ht(e){return typeof e=="function"}function L(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function jt(e){return Object.keys(e).length===0}function Vt(e,t,n,a){if(e){const r=Ze(e,t,n,a);return e[0](r)}}function Ze(e,t,n,a){return e[1]&&a?G(n.ctx.slice(),e[1](a(t))):n.ctx}function qt(e,t,n,a){if(e[2]&&a){const r=e[2](a(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(t.dirty.length,r.length);for(let i=0;i<o;i+=1)s[i]=t.dirty[i]|r[i];return s}return t.dirty|r}return t.dirty}function Ut(e,t,n,a,r,s){if(r){const o=Ze(t,n,a,s);e.p(o,r)}}function Wt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let a=0;a<n;a++)t[a]=-1;return t}return-1}function De(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function y(e,t){e.appendChild(t)}function B(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function pe(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function ge(e){return document.createTextNode(e)}function ie(){return ge(" ")}function Gt(){return ge("")}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function zt(e){return Array.from(e.childNodes)}function Kt(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let me;function M(e){me=e}const R=[],Be=[],U=[],Re=[],Yt=Promise.resolve();let ce=!1;function Jt(){ce||(ce=!0,Yt.then(Qe))}function le(e){U.push(e)}const Q=new Set;let q=0;function Qe(){const e=me;do{for(;q<R.length;){const t=R[q];q++,M(t),Xt(t.$$)}for(M(null),R.length=0,q=0;Be.length;)Be.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];Q.has(n)||(Q.add(n),n())}U.length=0}while(R.length);for(;Re.length;)Re.pop()();ce=!1,Q.clear(),M(e)}function Xt(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(le)}}const W=new Set;let Zt;function D(e,t){e&&e.i&&(W.delete(e),e.i(t))}function x(e,t,n,a){if(e&&e.o){if(W.has(e))return;W.add(e),Zt.c.push(()=>{W.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}function Qt(e,t){const n={},a={},r={$$scope:1};let s=e.length;for(;s--;){const o=e[s],i=t[s];if(i){for(const c in o)c in i||(a[c]=1);for(const c in i)r[c]||(n[c]=i[c],r[c]=1);e[s]=i}else for(const c in o)r[c]=1}for(const o in a)o in n||(n[o]=void 0);return n}function en(e){return typeof e=="object"&&e!==null?e:{}}function z(e){e&&e.c()}function N(e,t,n,a){const{fragment:r,on_mount:s,on_destroy:o,after_update:i}=e.$$;r&&r.m(t,n),a||le(()=>{const c=s.map(Xe).filter(Ht);o?o.push(...c):Y(c),e.$$.on_mount=[]}),i.forEach(le)}function k(e,t){const n=e.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function tn(e,t){e.$$.dirty[0]===-1&&(R.push(e),Jt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(e,t,n,a,r,s,o,i=[-1]){const c=me;M(e);const l=e.$$={fragment:null,ctx:null,props:s,update:_,not_equal:r,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:$e(),dirty:i,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(f,g,...h)=>{const V=h.length?h[0]:g;return l.ctx&&r(l.ctx[f],l.ctx[f]=V)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](V),d&&tn(e,f)),g}):[],l.update(),d=!0,Y(l.before_update),l.fragment=a?a(l.ctx):!1,t.target){if(t.hydrate){const f=zt(t.target);l.fragment&&l.fragment.l(f),f.forEach($)}else l.fragment&&l.fragment.c();t.intro&&D(e.$$.fragment),N(e,t.target,t.anchor,t.customElement),Qe()}M(c)}class H{$destroy(){k(this,1),this.$destroy=_}$on(t,n){const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}$set(t){this.$$set&&!jt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nn(e){let t;return{c(){t=v("div"),t.innerHTML=`<div class="article svelte-5hz118"><h1 class="svelte-5hz118">Article Template</h1> 

        <p class="svelte-5hz118">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sunt fuga! Minima soluta nobis, incidunt dolores hic quod. Praesentium corporis, a id ullam quam suscipit velit fuga molestias quisquam error.</p> 
    
        <p class="svelte-5hz118">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed hic, odio adipisci vero soluta consequatur corrupti minus enim? Cumque laboriosam possimus vero soluta illum quidem omnis reprehenderit maxime cum iure!</p></div> 
    <p class="svelte-5hz118"></p>`,m(t,"class","body svelte-5hz118")},m(n,a){B(n,t,a)},p:_,i:_,o:_,d(n){n&&$(t)}}}class rn extends H{constructor(t){super(),F(this,t,null,nn,L,{})}}function Me(e){let t,n;return{c(){t=pe("title"),n=ge(e[0])},m(a,r){B(a,t,r),y(t,n)},p(a,r){r&1&&Kt(n,a[0])},d(a){a&&$(t)}}}function an(e){let t,n,a,r=e[0]&&Me(e);const s=e[3].default,o=Vt(s,e,e[2],null);return{c(){t=pe("svg"),r&&r.c(),n=Gt(),o&&o.c(),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"viewBox",e[1]),m(t,"class","svelte-c8tyih")},m(i,c){B(i,t,c),r&&r.m(t,null),y(t,n),o&&o.m(t,null),a=!0},p(i,[c]){i[0]?r?r.p(i,c):(r=Me(i),r.c(),r.m(t,n)):r&&(r.d(1),r=null),o&&o.p&&(!a||c&4)&&Ut(o,s,i,i[2],a?qt(s,i[2],c,null):Wt(i[2]),null),(!a||c&2)&&m(t,"viewBox",i[1])},i(i){a||(D(o,i),a=!0)},o(i){x(o,i),a=!1},d(i){i&&$(t),r&&r.d(),o&&o.d(i)}}}function sn(e,t,n){let{$$slots:a={},$$scope:r}=t,{title:s=null}=t,{viewBox:o}=t;return e.$$set=i=>{"title"in i&&n(0,s=i.title),"viewBox"in i&&n(1,o=i.viewBox),"$$scope"in i&&n(2,r=i.$$scope)},[s,o,r,a]}class on extends H{constructor(t){super(),F(this,t,sn,an,L,{title:0,viewBox:1})}}function cn(e){let t;return{c(){t=pe("path"),m(t,"d","M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z")},m(n,a){B(n,t,a)},p:_,d(n){n&&$(t)}}}function ln(e){let t,n;const a=[{viewBox:"0 0 24 24"},e[0]];let r={$$slots:{default:[cn]},$$scope:{ctx:e}};for(let s=0;s<a.length;s+=1)r=G(r,a[s]);return t=new on({props:r}),{c(){z(t.$$.fragment)},m(s,o){N(t,s,o),n=!0},p(s,[o]){const i=o&1?Qt(a,[a[0],en(s[0])]):{};o&2&&(i.$$scope={dirty:o,ctx:s}),t.$set(i)},i(s){n||(D(t.$$.fragment,s),n=!0)},o(s){x(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function un(e,t,n){return e.$$set=a=>{n(0,t=G(G({},t),De(a)))},t=De(t),[t]}class fn extends H{constructor(t){super(),F(this,t,un,ln,L,{})}}function dn(e){let t,n,a,r,s,o,i,c;return a=new fn({}),{c(){t=v("div"),n=v("div"),z(a.$$.fragment),r=ie(),s=v("div"),s.textContent="10 Count",o=ie(),i=v("div"),i.textContent="Contactez-nous !",m(n,"class","side-nav-button svelte-y7qnbw"),m(s,"class","title svelte-y7qnbw"),m(i,"class","contact svelte-y7qnbw"),m(t,"class","container-top-nav svelte-y7qnbw")},m(l,d){B(l,t,d),y(t,n),N(a,n,null),y(t,r),y(t,s),y(t,o),y(t,i),c=!0},p:_,i(l){c||(D(a.$$.fragment,l),c=!0)},o(l){x(a.$$.fragment,l),c=!1},d(l){l&&$(t),k(a)}}}class hn extends H{constructor(t){super(),F(this,t,null,dn,L,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++a)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},pn=function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[a++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],i=e[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|i&63)-65536;t[a++]=String.fromCharCode(55296+(c>>10)),t[a++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[a++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},gn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,i=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,d=s>>2,f=(s&3)<<4|i>>4;let g=(i&15)<<2|l>>6,h=l&63;c||(h=64,o||(g=64)),a.push(n[d],n[f],n[g],n[h])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(et(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],i=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const f=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||i==null||l==null||f==null)throw Error();const g=s<<2|i>>4;if(a.push(g),l!==64){const h=i<<4&240|l>>2;if(a.push(h),f!==64){const V=l<<6&192|f;a.push(V)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},mn=function(e){const t=et(e);return gn.encodeByteArray(t,!0)},tt=function(e){return mn(e).replace(/\./g,"")};function bn(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function nt(){return typeof indexedDB=="object"}function rt(){return new Promise((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function yn(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="FirebaseError";class j extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=_n,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J.prototype.create)}}class J{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?wn(s,a):"Error",i=`${this.serviceName}: ${o} (${r}).`;return new j(r,i,a)}}function wn(e,t){return e.replace(In,(n,a)=>{const r=t[a];return r!=null?String(r):`<${a}?>`})}const In=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=1e3,En=2,An=4*60*60*1e3,Tn=.5;function Oe(e,t=vn,n=En){const a=t*Math.pow(n,e),r=Math.round(Tn*a*(Math.random()-.5)*2);return Math.min(An,a+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e){return e&&e._delegate?e._delegate:e}class A{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u||(u={}));const Cn={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},$n=u.INFO,Dn={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},Bn=(e,t,...n)=>{if(t<e.logLevel)return;const a=new Date().toISOString(),r=Dn[t];if(r)console[r](`[${a}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class at{constructor(t){this.name=t,this._logLevel=$n,this._logHandler=Bn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in u))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...t),this._logHandler(this,u.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...t),this._logHandler(this,u.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,u.INFO,...t),this._logHandler(this,u.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,u.WARN,...t),this._logHandler(this,u.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...t),this._logHandler(this,u.ERROR,...t)}}const Rn=(e,t)=>t.some(n=>e instanceof n);let xe,Ne;function Mn(){return xe||(xe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function On(){return Ne||(Ne=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const st=new WeakMap,ue=new WeakMap,ot=new WeakMap,ee=new WeakMap,be=new WeakMap;function xn(e){const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(w(e.result)),r()},o=()=>{a(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&st.set(n,e)}).catch(()=>{}),be.set(t,e),t}function Nn(e){if(ue.has(e))return;const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ue.set(e,t)}let fe={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ue.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ot.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function kn(e){fe=e(fe)}function Pn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(te(this),t,...n);return ot.set(a,t.sort?t.sort():[t]),w(a)}:On().includes(e)?function(...t){return e.apply(te(this),t),w(st.get(this))}:function(...t){return w(e.apply(te(this),t))}}function Ln(e){return typeof e=="function"?Pn(e):(e instanceof IDBTransaction&&Nn(e),Rn(e,Mn())?new Proxy(e,fe):e)}function w(e){if(e instanceof IDBRequest)return xn(e);if(ee.has(e))return ee.get(e);const t=Ln(e);return t!==e&&(ee.set(e,t),be.set(t,e)),t}const te=e=>be.get(e);function it(e,t,{blocked:n,upgrade:a,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),i=w(o);return a&&o.addEventListener("upgradeneeded",c=>{a(w(o.result),c.oldVersion,c.newVersion,w(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),i.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),i}const Fn=["get","getKey","getAll","getAllKeys","count"],Hn=["put","add","delete","clear"],ne=new Map;function ke(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ne.get(t))return ne.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=Hn.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||Fn.includes(n)))return;const s=async function(o,...i){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return a&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),r&&c.done]))[0]};return ne.set(t,s),s}kn(e=>Ce(Se({},e),{get:(t,n,a)=>ke(t,n)||e.get(t,n,a),has:(t,n)=>!!ke(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vn(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function Vn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const de="@firebase/app",Pe="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new at("@firebase/app"),qn="@firebase/app-compat",Un="@firebase/analytics-compat",Wn="@firebase/analytics",Gn="@firebase/app-check-compat",zn="@firebase/app-check",Kn="@firebase/auth",Yn="@firebase/auth-compat",Jn="@firebase/database",Xn="@firebase/database-compat",Zn="@firebase/functions",Qn="@firebase/functions-compat",er="@firebase/installations",tr="@firebase/installations-compat",nr="@firebase/messaging",rr="@firebase/messaging-compat",ar="@firebase/performance",sr="@firebase/performance-compat",or="@firebase/remote-config",ir="@firebase/remote-config-compat",cr="@firebase/storage",lr="@firebase/storage-compat",ur="@firebase/firestore",fr="@firebase/firestore-compat",dr="firebase",hr={[de]:"fire-core",[qn]:"fire-core-compat",[Wn]:"fire-analytics",[Un]:"fire-analytics-compat",[zn]:"fire-app-check",[Gn]:"fire-app-check-compat",[Kn]:"fire-auth",[Yn]:"fire-auth-compat",[Jn]:"fire-rtdb",[Xn]:"fire-rtdb-compat",[Zn]:"fire-fn",[Qn]:"fire-fn-compat",[er]:"fire-iid",[tr]:"fire-iid-compat",[nr]:"fire-fcm",[rr]:"fire-fcm-compat",[ar]:"fire-perf",[sr]:"fire-perf-compat",[or]:"fire-rc",[ir]:"fire-rc-compat",[cr]:"fire-gcs",[lr]:"fire-gcs-compat",[ur]:"fire-fst",[fr]:"fire-fst-compat","fire-js":"fire-js",[dr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Map,Le=new Map;function gr(e,t){try{e.container.addComponent(t)}catch(n){ye.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function T(e){const t=e.name;if(Le.has(t))return ye.debug(`There were multiple attempts to register component ${t}.`),!1;Le.set(t,e);for(const n of pr.values())gr(n,e);return!0}function ct(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},_e=new J("app","Firebase",mr);function I(e,t,n){var a;let r=(a=hr[e])!==null&&a!==void 0?a:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const i=[`Unable to register library "${r}" with version "${t}":`];s&&i.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&i.push("and"),o&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ye.warn(i.join(" "));return}T(new A(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="firebase-heartbeat-database",yr=1,P="firebase-heartbeat-store";let re=null;function lt(){return re||(re=it(br,yr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(P)}}}).catch(e=>{throw _e.create("storage-open",{originalErrorMessage:e.message})})),re}async function _r(e){try{return(await lt()).transaction(P).objectStore(P).get(ut(e))}catch(t){throw _e.create("storage-get",{originalErrorMessage:t.message})}}async function Fe(e,t){try{const a=(await lt()).transaction(P,"readwrite");return await a.objectStore(P).put(t,ut(e)),a.done}catch(n){throw _e.create("storage-set",{originalErrorMessage:n.message})}}function ut(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=1024,Ir=30*24*60*60*1e3;class vr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ar(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=He();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(r=>r.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Ir}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=He(),{heartbeatsToSend:n,unsentEntries:a}=Er(this._heartbeatsCache.heartbeats),r=tt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function He(){return new Date().toISOString().substring(0,10)}function Er(e,t=wr){const n=[];let a=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),je(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),je(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class Ar{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nt()?rt().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _r(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Fe(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Fe(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function je(e){return tt(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e){T(new A("platform-logger",t=>new jn(t),"PRIVATE")),T(new A("heartbeat",t=>new vr(t),"PRIVATE")),I(de,Pe,e),I(de,Pe,"esm2017"),I("fire-js","")}Tr("");var Sr="firebase",Cr="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */I(Sr,Cr,"app");const ft="@firebase/installations",we="0.5.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=1e4,ht=`w:${we}`,pt="FIS_v2",$r="https://firebaseinstallations.googleapis.com/v1",Dr=60*60*1e3,Br="installations",Rr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},S=new J(Br,Rr,Mr);function gt(e){return e instanceof j&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt({projectId:e}){return`${$r}/projects/${e}/installations`}function bt(e){return{token:e.token,requestStatus:2,expiresIn:xr(e.expiresIn),creationTime:Date.now()}}async function yt(e,t){const a=(await t.json()).error;return S.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function _t({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Or(e,{refreshToken:t}){const n=_t(e);return n.append("Authorization",Nr(t)),n}async function wt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function xr(e){return Number(e.replace("s","000"))}function Nr(e){return`${pt} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=mt(e),r=_t(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:pt,appId:e.appId,sdkVersion:ht},i={method:"POST",headers:r,body:JSON.stringify(o)},c=await wt(()=>fetch(a,i));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:bt(l.authToken)}}else throw await yt("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=/^[cdef][\w-]{21}$/,he="";function Fr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Hr(e);return Lr.test(n)?n:he}catch{return he}}function Hr(e){return Pr(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Map;function Et(e,t){const n=X(e);At(n,t),jr(n,t)}function At(e,t){const n=vt.get(e);if(!!n)for(const a of n)a(t)}function jr(e,t){const n=Vr();n&&n.postMessage({key:e,fid:t}),qr()}let E=null;function Vr(){return!E&&"BroadcastChannel"in self&&(E=new BroadcastChannel("[Firebase] FID Change"),E.onmessage=e=>{At(e.data.key,e.data.fid)}),E}function qr(){vt.size===0&&E&&(E.close(),E=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="firebase-installations-database",Wr=1,C="firebase-installations-store";let ae=null;function Ie(){return ae||(ae=it(Ur,Wr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(C)}}})),ae}async function K(e,t){const n=X(e),r=(await Ie()).transaction(C,"readwrite"),s=r.objectStore(C),o=await s.get(n);return await s.put(t,n),await r.done,(!o||o.fid!==t.fid)&&Et(e,t.fid),t}async function Tt(e){const t=X(e),a=(await Ie()).transaction(C,"readwrite");await a.objectStore(C).delete(t),await a.done}async function Z(e,t){const n=X(e),r=(await Ie()).transaction(C,"readwrite"),s=r.objectStore(C),o=await s.get(n),i=t(o);return i===void 0?await s.delete(n):await s.put(i,n),await r.done,i&&(!o||o.fid!==i.fid)&&Et(e,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e){let t;const n=await Z(e.appConfig,a=>{const r=Gr(a),s=zr(e,r);return t=s.registrationPromise,s.installationEntry});return n.fid===he?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Gr(e){const t=e||{fid:Fr(),registrationStatus:0};return St(t)}function zr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(S.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Kr(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Yr(e)}:{installationEntry:t}}async function Kr(e,t){try{const n=await kr(e,t);return K(e.appConfig,n)}catch(n){throw gt(n)&&n.customData.serverCode===409?await Tt(e.appConfig):await K(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Yr(e){let t=await Ve(e.appConfig);for(;t.registrationStatus===1;)await It(100),t=await Ve(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await ve(e);return a||n}return t}function Ve(e){return Z(e,t=>{if(!t)throw S.create("installation-not-found");return St(t)})}function St(e){return Jr(e)?{fid:e.fid,registrationStatus:0}:e}function Jr(e){return e.registrationStatus===1&&e.registrationTime+dt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr({appConfig:e,heartbeatServiceProvider:t},n){const a=Zr(e,n),r=Or(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:ht,appId:e.appId}},i={method:"POST",headers:r,body:JSON.stringify(o)},c=await wt(()=>fetch(a,i));if(c.ok){const l=await c.json();return bt(l)}else throw await yt("Generate Auth Token",c)}function Zr(e,{fid:t}){return`${mt(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(e,t=!1){let n;const a=await Z(e.appConfig,s=>{if(!Ct(s))throw S.create("not-registered");const o=s.authToken;if(!t&&ta(o))return s;if(o.requestStatus===1)return n=Qr(e,t),s;{if(!navigator.onLine)throw S.create("app-offline");const i=ra(s);return n=ea(e,i),i}});return n?await n:a.authToken}async function Qr(e,t){let n=await qe(e.appConfig);for(;n.authToken.requestStatus===1;)await It(100),n=await qe(e.appConfig);const a=n.authToken;return a.requestStatus===0?Ee(e,t):a}function qe(e){return Z(e,t=>{if(!Ct(t))throw S.create("not-registered");const n=t.authToken;return aa(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ea(e,t){try{const n=await Xr(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await K(e.appConfig,a),n}catch(n){if(gt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Tt(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await K(e.appConfig,a)}throw n}}function Ct(e){return e!==void 0&&e.registrationStatus===2}function ta(e){return e.requestStatus===2&&!na(e)}function na(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Dr}function ra(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function aa(e){return e.requestStatus===1&&e.requestTime+dt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(e){const t=e,{installationEntry:n,registrationPromise:a}=await ve(t);return a?a.catch(console.error):Ee(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(e,t=!1){const n=e;return await ia(n),(await Ee(n,t)).token}async function ia(e){const{registrationPromise:t}=await ve(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(e){if(!e||!e.options)throw se("App Configuration");if(!e.name)throw se("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw se(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function se(e){return S.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="installations",la="installations-internal",ua=e=>{const t=e.getProvider("app").getImmediate(),n=ca(t),a=ct(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},fa=e=>{const t=e.getProvider("app").getImmediate(),n=ct(t,$t).getImmediate();return{getId:()=>sa(n),getToken:r=>oa(n,r)}};function da(){T(new A($t,ua,"PUBLIC")),T(new A(la,fa,"PRIVATE"))}da();I(ft,we);I(ft,we,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="analytics",ha="firebase_id",pa="origin",ga=60*1e3,ma="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dt="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=new at("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ba(e,t){const n=document.createElement("script");n.src=`${Dt}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function ya(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function _a(e,t,n,a,r,s){const o=a[r];try{if(o)await t[o];else{const c=(await Bt(n)).find(l=>l.measurementId===r);c&&await t[c.appId]}}catch(i){p.error(i)}e("config",r,s)}async function wa(e,t,n,a,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const i=await Bt(n);for(const c of o){const l=i.find(f=>f.measurementId===c),d=l&&t[l.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,r||{})}catch(s){p.error(s)}}function Ia(e,t,n,a){async function r(s,o,i){try{s==="event"?await wa(e,t,n,o,i):s==="config"?await _a(e,t,n,a,o,i):e("set",o)}catch(c){p.error(c)}}return r}function va(e,t,n,a,r){let s=function(...o){window[a].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Ia(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}function Ea(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Dt))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},b=new J("analytics","Analytics",Aa);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=30,Sa=1e3;class Ca{constructor(t={},n=Sa){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Rt=new Ca;function $a(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Da(e){var t;const{appId:n,apiKey:a}=e,r={method:"GET",headers:$a(a)},s=ma.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let i="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(i=c.error.message)}catch{}throw b.create("config-fetch-failed",{httpStatus:o.status,responseMessage:i})}return o.json()}async function Ba(e,t=Rt,n){const{appId:a,apiKey:r,measurementId:s}=e.options;if(!a)throw b.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:a};throw b.create("no-api-key")}const o=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new Oa;return setTimeout(async()=>{i.abort()},n!==void 0?n:ga),Mt({appId:a,apiKey:r,measurementId:s},o,i,t)}async function Mt(e,{throttleEndTimeMillis:t,backoffCount:n},a,r=Rt){const{appId:s,measurementId:o}=e;try{await Ra(a,t)}catch(i){if(o)return p.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${i.message}]`),{appId:s,measurementId:o};throw i}try{const i=await Da(e);return r.deleteThrottleMetadata(s),i}catch(i){if(!Ma(i)){if(r.deleteThrottleMetadata(s),o)return p.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${i.message}]`),{appId:s,measurementId:o};throw i}const c=Number(i.customData.httpStatus)===503?Oe(n,r.intervalMillis,Ta):Oe(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return r.setThrottleMetadata(s,l),p.debug(`Calling attemptFetch again in ${c} millis`),Mt(e,l,a,r)}}function Ra(e,t){return new Promise((n,a)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(s),a(b.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ma(e){if(!(e instanceof j)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Oa{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(){if(nt())try{await rt()}catch(e){return p.warn(b.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return p.warn(b.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Na(e,t,n,a,r,s,o){var i;const c=Ba(e);c.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&p.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>p.error(h)),t.push(c);const l=xa().then(h=>{if(h)return a.getId()}),[d,f]=await Promise.all([c,l]);Ea()||ba(s,d.measurementId),r("js",new Date);const g=(i=o==null?void 0:o.config)!==null&&i!==void 0?i:{};return g[pa]="firebase",g.update=!0,f!=null&&(g[ha]=f),r("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t){this.app=t}_delete(){return delete O[this.app.options.appId],Promise.resolve()}}let O={},We=[];const Ge={};let oe="dataLayer",Pa="gtag",ze,Ot,Ke=!1;function La(){const e=[];if(bn()&&e.push("This is a browser extension environment."),yn()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,r)=>`(${r+1}) ${a}`).join(" "),n=b.create("invalid-analytics-context",{errorInfo:t});p.warn(n.message)}}function Fa(e,t,n){La();const a=e.options.appId;if(!a)throw b.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)p.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw b.create("no-api-key");if(O[a]!=null)throw b.create("already-exists",{id:a});if(!Ke){ya(oe);const{wrappedGtag:s,gtagCore:o}=va(O,We,Ge,oe,Pa);Ot=s,ze=o,Ke=!0}return O[a]=Na(e,We,Ge,t,ze,oe,n),new ka(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(e,t,n,a,r){if(r&&r.global){e("event",n,a);return}else{const s=await t,o=Object.assign(Object.assign({},a),{send_to:s});e("event",n,o)}}function ja(e,t,n,a){e=Sn(e),Ha(Ot,O[e.app.options.appId],t,n,a).catch(r=>p.error(r))}const Ye="@firebase/analytics",Je="0.7.9";function Va(){T(new A(Ue,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return Fa(a,r,n)},"PUBLIC")),T(new A("analytics-internal",e,"PRIVATE")),I(Ye,Je),I(Ye,Je,"esm2017");function e(t){try{const n=t.getProvider(Ue).getImmediate();return{logEvent:(a,r,s)=>ja(n,a,r,s)}}catch(n){throw b.create("interop-component-reg-failed",{reason:n})}}}Va();function qa(e){let t,n,a,r,s,o;return a=new hn({}),s=new rn({}),{c(){t=v("body"),n=v("main"),z(a.$$.fragment),r=ie(),z(s.$$.fragment),m(t,"class","svelte-3i8juy")},m(i,c){B(i,t,c),y(t,n),N(a,n,null),y(n,r),N(s,n,null),o=!0},p:_,i(i){o||(D(a.$$.fragment,i),D(s.$$.fragment,i),o=!0)},o(i){x(a.$$.fragment,i),x(s.$$.fragment,i),o=!1},d(i){i&&$(t),k(a),k(s)}}}class Ua extends H{constructor(t){super(),F(this,t,null,qa,L,{})}}new Ua({target:document.getElementById("app")});
