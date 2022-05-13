var zt=Object.defineProperty,Kt=Object.defineProperties;var Yt=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var Jt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable;var Ne=(e,t,n)=>t in e?zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pe=(e,t)=>{for(var n in t||(t={}))Jt.call(t,n)&&Ne(e,n,t[n]);if(ke)for(var n of ke(t))Xt.call(t,n)&&Ne(e,n,t[n]);return e},Le=(e,t)=>Kt(e,Yt(t));const Zt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Zt();function A(){}function re(e,t){for(const n in t)e[n]=t[n];return e}function ut(e){return e()}function Fe(){return Object.create(null)}function Y(e){e.forEach(ut)}function Qt(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Z;function en(e,t){return Z||(Z=document.createElement("a")),Z.href=t,e===Z.href}function tn(e){return Object.keys(e).length===0}function nn(e,t,n,a){if(e){const r=ft(e,t,n,a);return e[0](r)}}function ft(e,t,n,a){return e[1]&&a?re(n.ctx.slice(),e[1](a(t))):n.ctx}function rn(e,t,n,a){if(e[2]&&a){const r=e[2](a(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(t.dirty.length,r.length);for(let i=0;i<o;i+=1)s[i]=t.dirty[i]|r[i];return s}return t.dirty|r}return t.dirty}function an(e,t,n,a,r,s){if(r){const o=ft(t,n,a,s);e.p(o,r)}}function sn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let a=0;a<n;a++)t[a]=-1;return t}return-1}function He(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function f(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode.removeChild(e)}function on(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function Ae(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function M(){return w(" ")}function cn(){return w("")}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ln(e){return Array.from(e.childNodes)}function ee(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let Te;function W(e){Te=e}const U=[],je=[],te=[],Ve=[],un=Promise.resolve();let _e=!1;function fn(){_e||(_e=!0,un.then(dt))}function ye(e){te.push(e)}const ue=new Set;let Q=0;function dt(){const e=Te;do{for(;Q<U.length;){const t=U[Q];Q++,W(t),dn(t.$$)}for(W(null),U.length=0,Q=0;je.length;)je.pop()();for(let t=0;t<te.length;t+=1){const n=te[t];ue.has(n)||(ue.add(n),n())}te.length=0}while(U.length);for(;Ve.length;)Ve.pop()();_e=!1,ue.clear(),W(e)}function dn(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ye)}}const ne=new Set;let D;function hn(){D={r:0,c:[],p:D}}function pn(){D.r||Y(D.c),D=D.p}function I(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function T(e,t,n,a){if(e&&e.o){if(ne.has(e))return;ne.add(e),D.c.push(()=>{ne.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}function gn(e,t){const n={},a={},r={$$scope:1};let s=e.length;for(;s--;){const o=e[s],i=t[s];if(i){for(const c in o)c in i||(a[c]=1);for(const c in i)r[c]||(n[c]=i[c],r[c]=1);e[s]=i}else for(const c in o)r[c]=1}for(const o in a)o in n||(n[o]=void 0);return n}function mn(e){return typeof e=="object"&&e!==null?e:{}}function z(e){e&&e.c()}function P(e,t,n,a){const{fragment:r,on_mount:s,on_destroy:o,after_update:i}=e.$$;r&&r.m(t,n),a||ye(()=>{const c=s.map(ut).filter(Qt);o?o.push(...c):Y(c),e.$$.on_mount=[]}),i.forEach(ye)}function L(e,t){const n=e.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function bn(e,t){e.$$.dirty[0]===-1&&(U.push(e),fn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,n,a,r,s,o,i=[-1]){const c=Te;W(e);const l=e.$$={fragment:null,ctx:null,props:s,update:A,not_equal:r,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Fe(),dirty:i,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(d,g,...p)=>{const C=p.length?p[0]:g;return l.ctx&&r(l.ctx[d],l.ctx[d]=C)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](C),u&&bn(e,d)),g}):[],l.update(),u=!0,Y(l.before_update),l.fragment=a?a(l.ctx):!1,t.target){if(t.hydrate){const d=ln(t.target);l.fragment&&l.fragment.l(d),d.forEach(S)}else l.fragment&&l.fragment.c();t.intro&&I(e.$$.fragment),P(e,t.target,t.anchor,t.customElement),dt()}W(c)}class j{$destroy(){L(this,1),this.$destroy=A}$on(t,n){const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}$set(t){this.$$set&&!tn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function _n(e){let t,n,a,r,s,o,i=e[0].p_nom+"",c,l,u,d,g=e[0].p_description+"",p,C,ce,V,Oe,X=e[0].p_prix+"",le,xe;return{c(){t=b("div"),n=b("img"),r=M(),s=b("h3"),o=w("Nom de Produit : "),c=w(i),l=M(),u=b("p"),d=w("phrase de "),p=w(g),C=M(),ce=b("ul"),V=b("li"),Oe=w("Prix : "),le=w(X),xe=w(" \u20AC"),en(n.src,a="/workspace/Projects-Playground/10count-app/src/assets/whisky1.jpg")||m(n,"src",a),m(n,"alt","whisky1.jpeg"),m(t,"class","produitBox")},m($,q){N($,t,q),f(t,n),f(t,r),f(t,s),f(s,o),f(s,c),f(t,l),f(t,u),f(u,d),f(u,p),f(t,C),f(t,ce),f(ce,V),f(V,Oe),f(V,le),f(V,xe)},p($,[q]){q&1&&i!==(i=$[0].p_nom+"")&&ee(c,i),q&1&&g!==(g=$[0].p_description+"")&&ee(p,g),q&1&&X!==(X=$[0].p_prix+"")&&ee(le,X)},i:A,o:A,d($){$&&S(t)}}}function yn(e,t,n){let{produit:a}=t;return e.$$set=r=>{"produit"in r&&n(0,a=r.produit)},[a]}class wn extends j{constructor(t){super(),H(this,t,yn,_n,F,{produit:0})}}function qe(e,t,n){const a=e.slice();return a[1]=t[n],a}function Ue(e){let t,n;return t=new wn({props:{produit:e[1]}}),{c(){z(t.$$.fragment)},m(a,r){P(t,a,r),n=!0},p:A,i(a){n||(I(t.$$.fragment,a),n=!0)},o(a){T(t.$$.fragment,a),n=!1},d(a){L(t,a)}}}function In(e){let t,n,a,r,s=e[0],o=[];for(let c=0;c<s.length;c+=1)o[c]=Ue(qe(e,s,c));const i=c=>T(o[c],1,1,()=>{o[c]=null});return{c(){t=b("div"),n=b("div"),n.innerHTML=`<h1 class="svelte-cdd6z2">Article Template</h1> 

        <p class="svelte-cdd6z2">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sunt fuga! Minima soluta nobis, incidunt dolores hic quod. Praesentium corporis, a id ullam quam suscipit velit fuga molestias quisquam error.</p> 
    
        <p class="svelte-cdd6z2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed hic, odio adipisci vero soluta consequatur corrupti minus enim? Cumque laboriosam possimus vero soluta illum quidem omnis reprehenderit maxime cum iure!</p>`,a=M();for(let c=0;c<o.length;c+=1)o[c].c();m(n,"class","article svelte-cdd6z2"),m(t,"class","body svelte-cdd6z2")},m(c,l){N(c,t,l),f(t,n),f(t,a);for(let u=0;u<o.length;u+=1)o[u].m(t,null);r=!0},p(c,[l]){if(l&1){s=c[0];let u;for(u=0;u<s.length;u+=1){const d=qe(c,s,u);o[u]?(o[u].p(d,l),I(o[u],1)):(o[u]=Ue(d),o[u].c(),I(o[u],1),o[u].m(t,null))}for(hn(),u=s.length;u<o.length;u+=1)i(u);pn()}},i(c){if(!r){for(let l=0;l<s.length;l+=1)I(o[l]);r=!0}},o(c){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)T(o[l]);r=!1},d(c){c&&S(t),on(o,c)}}}function vn(e){let t=[];for(let n=0;n<100;n++)t.push({p_id:n,p_nom:"produit num\xE9ro "+n,p_description:"tr\xE8s bon produit !!!!",p_prix:Math.random()*10+" \u20AC "});return[t]}class En extends j{constructor(t){super(),H(this,t,vn,In,F,{})}}function We(e){let t,n;return{c(){t=Ae("title"),n=w(e[0])},m(a,r){N(a,t,r),f(t,n)},p(a,r){r&1&&ee(n,a[0])},d(a){a&&S(t)}}}function An(e){let t,n,a,r=e[0]&&We(e);const s=e[3].default,o=nn(s,e,e[2],null);return{c(){t=Ae("svg"),r&&r.c(),n=cn(),o&&o.c(),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"viewBox",e[1]),m(t,"class","svelte-c8tyih")},m(i,c){N(i,t,c),r&&r.m(t,null),f(t,n),o&&o.m(t,null),a=!0},p(i,[c]){i[0]?r?r.p(i,c):(r=We(i),r.c(),r.m(t,n)):r&&(r.d(1),r=null),o&&o.p&&(!a||c&4)&&an(o,s,i,i[2],a?rn(s,i[2],c,null):sn(i[2]),null),(!a||c&2)&&m(t,"viewBox",i[1])},i(i){a||(I(o,i),a=!0)},o(i){T(o,i),a=!1},d(i){i&&S(t),r&&r.d(),o&&o.d(i)}}}function Tn(e,t,n){let{$$slots:a={},$$scope:r}=t,{title:s=null}=t,{viewBox:o}=t;return e.$$set=i=>{"title"in i&&n(0,s=i.title),"viewBox"in i&&n(1,o=i.viewBox),"$$scope"in i&&n(2,r=i.$$scope)},[s,o,r,a]}class Sn extends j{constructor(t){super(),H(this,t,Tn,An,F,{title:0,viewBox:1})}}function Cn(e){let t;return{c(){t=Ae("path"),m(t,"d","M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z")},m(n,a){N(n,t,a)},p:A,d(n){n&&S(t)}}}function $n(e){let t,n;const a=[{viewBox:"0 0 24 24"},e[0]];let r={$$slots:{default:[Cn]},$$scope:{ctx:e}};for(let s=0;s<a.length;s+=1)r=re(r,a[s]);return t=new Sn({props:r}),{c(){z(t.$$.fragment)},m(s,o){P(t,s,o),n=!0},p(s,[o]){const i=o&1?gn(a,[a[0],mn(s[0])]):{};o&2&&(i.$$scope={dirty:o,ctx:s}),t.$set(i)},i(s){n||(I(t.$$.fragment,s),n=!0)},o(s){T(t.$$.fragment,s),n=!1},d(s){L(t,s)}}}function Dn(e,t,n){return e.$$set=a=>{n(0,t=re(re({},t),He(a)))},t=He(t),[t]}class Bn extends j{constructor(t){super(),H(this,t,Dn,$n,F,{})}}function Mn(e){let t,n,a,r,s,o,i,c;return a=new Bn({}),{c(){t=b("div"),n=b("div"),z(a.$$.fragment),r=M(),s=b("div"),s.textContent="10 Count",o=M(),i=b("div"),i.textContent="Contactez-nous !",m(n,"class","side-nav-button svelte-y7qnbw"),m(s,"class","title svelte-y7qnbw"),m(i,"class","contact svelte-y7qnbw"),m(t,"class","container-top-nav svelte-y7qnbw")},m(l,u){N(l,t,u),f(t,n),P(a,n,null),f(t,r),f(t,s),f(t,o),f(t,i),c=!0},p:A,i(l){c||(I(a.$$.fragment,l),c=!0)},o(l){T(a.$$.fragment,l),c=!1},d(l){l&&S(t),L(a)}}}class Rn extends j{constructor(t){super(),H(this,t,null,Mn,F,{})}}/**
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
 */const ht=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++a)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},On=function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[a++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],i=e[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|i&63)-65536;t[a++]=String.fromCharCode(55296+(c>>10)),t[a++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[a++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},xn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,i=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=s>>2,d=(s&3)<<4|i>>4;let g=(i&15)<<2|l>>6,p=l&63;c||(p=64,o||(g=64)),a.push(n[u],n[d],n[g],n[p])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ht(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):On(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],i=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||i==null||l==null||d==null)throw Error();const g=s<<2|i>>4;if(a.push(g),l!==64){const p=i<<4&240|l>>2;if(a.push(p),d!==64){const C=l<<6&192|d;a.push(C)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},kn=function(e){const t=ht(e);return xn.encodeByteArray(t,!0)},pt=function(e){return kn(e).replace(/\./g,"")};function Nn(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function gt(){return typeof indexedDB=="object"}function mt(){return new Promise((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Pn(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const Ln="FirebaseError";class J extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=Ln,Object.setPrototypeOf(this,J.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,se.prototype.create)}}class se{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?Fn(s,a):"Error",i=`${this.serviceName}: ${o} (${r}).`;return new J(r,i,a)}}function Fn(e,t){return e.replace(Hn,(n,a)=>{const r=t[a];return r!=null?String(r):`<${a}?>`})}const Hn=/\{\$([^}]+)}/g;/**
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
 */const jn=1e3,Vn=2,qn=4*60*60*1e3,Un=.5;function Ge(e,t=jn,n=Vn){const a=t*Math.pow(n,e),r=Math.round(Un*a*(Math.random()-.5)*2);return Math.min(qn,a+r)}/**
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
 */function Wn(e){return e&&e._delegate?e._delegate:e}class R{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var h;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(h||(h={}));const Gn={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},zn=h.INFO,Kn={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},Yn=(e,t,...n)=>{if(t<e.logLevel)return;const a=new Date().toISOString(),r=Kn[t];if(r)console[r](`[${a}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class bt{constructor(t){this.name=t,this._logLevel=zn,this._logHandler=Yn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Gn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}const Jn=(e,t)=>t.some(n=>e instanceof n);let ze,Ke;function Xn(){return ze||(ze=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zn(){return Ke||(Ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _t=new WeakMap,we=new WeakMap,yt=new WeakMap,fe=new WeakMap,Se=new WeakMap;function Qn(e){const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(v(e.result)),r()},o=()=>{a(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&_t.set(n,e)}).catch(()=>{}),Se.set(t,e),t}function er(e){if(we.has(e))return;const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});we.set(e,t)}let Ie={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return we.get(e);if(t==="objectStoreNames")return e.objectStoreNames||yt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function tr(e){Ie=e(Ie)}function nr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(de(this),t,...n);return yt.set(a,t.sort?t.sort():[t]),v(a)}:Zn().includes(e)?function(...t){return e.apply(de(this),t),v(_t.get(this))}:function(...t){return v(e.apply(de(this),t))}}function rr(e){return typeof e=="function"?nr(e):(e instanceof IDBTransaction&&er(e),Jn(e,Xn())?new Proxy(e,Ie):e)}function v(e){if(e instanceof IDBRequest)return Qn(e);if(fe.has(e))return fe.get(e);const t=rr(e);return t!==e&&(fe.set(e,t),Se.set(t,e)),t}const de=e=>Se.get(e);function wt(e,t,{blocked:n,upgrade:a,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),i=v(o);return a&&o.addEventListener("upgradeneeded",c=>{a(v(o.result),c.oldVersion,c.newVersion,v(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),i.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),i}const ar=["get","getKey","getAll","getAllKeys","count"],sr=["put","add","delete","clear"],he=new Map;function Ye(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(he.get(t))return he.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=sr.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||ar.includes(n)))return;const s=async function(o,...i){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return a&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),r&&c.done]))[0]};return he.set(t,s),s}tr(e=>Le(Pe({},e),{get:(t,n,a)=>Ye(t,n)||e.get(t,n,a),has:(t,n)=>!!Ye(t,n)||e.has(t,n)}));/**
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
 */class or{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ir(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function ir(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ve="@firebase/app",Je="0.7.24";/**
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
 */const Ce=new bt("@firebase/app"),cr="@firebase/app-compat",lr="@firebase/analytics-compat",ur="@firebase/analytics",fr="@firebase/app-check-compat",dr="@firebase/app-check",hr="@firebase/auth",pr="@firebase/auth-compat",gr="@firebase/database",mr="@firebase/database-compat",br="@firebase/functions",_r="@firebase/functions-compat",yr="@firebase/installations",wr="@firebase/installations-compat",Ir="@firebase/messaging",vr="@firebase/messaging-compat",Er="@firebase/performance",Ar="@firebase/performance-compat",Tr="@firebase/remote-config",Sr="@firebase/remote-config-compat",Cr="@firebase/storage",$r="@firebase/storage-compat",Dr="@firebase/firestore",Br="@firebase/firestore-compat",Mr="firebase",Rr={[ve]:"fire-core",[cr]:"fire-core-compat",[ur]:"fire-analytics",[lr]:"fire-analytics-compat",[dr]:"fire-app-check",[fr]:"fire-app-check-compat",[hr]:"fire-auth",[pr]:"fire-auth-compat",[gr]:"fire-rtdb",[mr]:"fire-rtdb-compat",[br]:"fire-fn",[_r]:"fire-fn-compat",[yr]:"fire-iid",[wr]:"fire-iid-compat",[Ir]:"fire-fcm",[vr]:"fire-fcm-compat",[Er]:"fire-perf",[Ar]:"fire-perf-compat",[Tr]:"fire-rc",[Sr]:"fire-rc-compat",[Cr]:"fire-gcs",[$r]:"fire-gcs-compat",[Dr]:"fire-fst",[Br]:"fire-fst-compat","fire-js":"fire-js",[Mr]:"fire-js-all"};/**
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
 */const Or=new Map,Xe=new Map;function xr(e,t){try{e.container.addComponent(t)}catch(n){Ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function O(e){const t=e.name;if(Xe.has(t))return Ce.debug(`There were multiple attempts to register component ${t}.`),!1;Xe.set(t,e);for(const n of Or.values())xr(n,e);return!0}function It(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const kr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},$e=new se("app","Firebase",kr);function E(e,t,n){var a;let r=(a=Rr[e])!==null&&a!==void 0?a:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const i=[`Unable to register library "${r}" with version "${t}":`];s&&i.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&i.push("and"),o&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ce.warn(i.join(" "));return}O(new R(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Nr="firebase-heartbeat-database",Pr=1,K="firebase-heartbeat-store";let pe=null;function vt(){return pe||(pe=wt(Nr,Pr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(K)}}}).catch(e=>{throw $e.create("storage-open",{originalErrorMessage:e.message})})),pe}async function Lr(e){try{return(await vt()).transaction(K).objectStore(K).get(Et(e))}catch(t){throw $e.create("storage-get",{originalErrorMessage:t.message})}}async function Ze(e,t){try{const a=(await vt()).transaction(K,"readwrite");return await a.objectStore(K).put(t,Et(e)),a.done}catch(n){throw $e.create("storage-set",{originalErrorMessage:n.message})}}function Et(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Fr=1024,Hr=30*24*60*60*1e3;class jr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qr(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Qe();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(r=>r.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Hr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qe(),{heartbeatsToSend:n,unsentEntries:a}=Vr(this._heartbeatsCache.heartbeats),r=pt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Qe(){return new Date().toISOString().substring(0,10)}function Vr(e,t=Fr){const n=[];let a=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),et(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),et(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class qr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gt()?mt().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Lr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ze(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ze(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function et(e){return pt(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Ur(e){O(new R("platform-logger",t=>new or(t),"PRIVATE")),O(new R("heartbeat",t=>new jr(t),"PRIVATE")),E(ve,Je,e),E(ve,Je,"esm2017"),E("fire-js","")}Ur("");var Wr="firebase",Gr="9.8.1";/**
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
 */E(Wr,Gr,"app");const At="@firebase/installations",De="0.5.9";/**
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
 */const Tt=1e4,St=`w:${De}`,Ct="FIS_v2",zr="https://firebaseinstallations.googleapis.com/v1",Kr=60*60*1e3,Yr="installations",Jr="Installations";/**
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
 */const Xr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},x=new se(Yr,Jr,Xr);function $t(e){return e instanceof J&&e.code.includes("request-failed")}/**
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
 */function Dt({projectId:e}){return`${zr}/projects/${e}/installations`}function Bt(e){return{token:e.token,requestStatus:2,expiresIn:Qr(e.expiresIn),creationTime:Date.now()}}async function Mt(e,t){const a=(await t.json()).error;return x.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Rt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Zr(e,{refreshToken:t}){const n=Rt(e);return n.append("Authorization",ea(t)),n}async function Ot(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Qr(e){return Number(e.replace("s","000"))}function ea(e){return`${Ct} ${e}`}/**
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
 */async function ta({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=Dt(e),r=Rt(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Ct,appId:e.appId,sdkVersion:St},i={method:"POST",headers:r,body:JSON.stringify(o)},c=await Ot(()=>fetch(a,i));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Bt(l.authToken)}}else throw await Mt("Create Installation",c)}/**
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
 */function xt(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function na(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ra=/^[cdef][\w-]{21}$/,Ee="";function aa(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=sa(e);return ra.test(n)?n:Ee}catch{return Ee}}function sa(e){return na(e).substr(0,22)}/**
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
 */function oe(e){return`${e.appName}!${e.appId}`}/**
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
 */const kt=new Map;function Nt(e,t){const n=oe(e);Pt(n,t),oa(n,t)}function Pt(e,t){const n=kt.get(e);if(!!n)for(const a of n)a(t)}function oa(e,t){const n=ia();n&&n.postMessage({key:e,fid:t}),ca()}let B=null;function ia(){return!B&&"BroadcastChannel"in self&&(B=new BroadcastChannel("[Firebase] FID Change"),B.onmessage=e=>{Pt(e.data.key,e.data.fid)}),B}function ca(){kt.size===0&&B&&(B.close(),B=null)}/**
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
 */const la="firebase-installations-database",ua=1,k="firebase-installations-store";let ge=null;function Be(){return ge||(ge=wt(la,ua,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(k)}}})),ge}async function ae(e,t){const n=oe(e),r=(await Be()).transaction(k,"readwrite"),s=r.objectStore(k),o=await s.get(n);return await s.put(t,n),await r.done,(!o||o.fid!==t.fid)&&Nt(e,t.fid),t}async function Lt(e){const t=oe(e),a=(await Be()).transaction(k,"readwrite");await a.objectStore(k).delete(t),await a.done}async function ie(e,t){const n=oe(e),r=(await Be()).transaction(k,"readwrite"),s=r.objectStore(k),o=await s.get(n),i=t(o);return i===void 0?await s.delete(n):await s.put(i,n),await r.done,i&&(!o||o.fid!==i.fid)&&Nt(e,i.fid),i}/**
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
 */async function Me(e){let t;const n=await ie(e.appConfig,a=>{const r=fa(a),s=da(e,r);return t=s.registrationPromise,s.installationEntry});return n.fid===Ee?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function fa(e){const t=e||{fid:aa(),registrationStatus:0};return Ft(t)}function da(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(x.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=ha(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:pa(e)}:{installationEntry:t}}async function ha(e,t){try{const n=await ta(e,t);return ae(e.appConfig,n)}catch(n){throw $t(n)&&n.customData.serverCode===409?await Lt(e.appConfig):await ae(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function pa(e){let t=await tt(e.appConfig);for(;t.registrationStatus===1;)await xt(100),t=await tt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await Me(e);return a||n}return t}function tt(e){return ie(e,t=>{if(!t)throw x.create("installation-not-found");return Ft(t)})}function Ft(e){return ga(e)?{fid:e.fid,registrationStatus:0}:e}function ga(e){return e.registrationStatus===1&&e.registrationTime+Tt<Date.now()}/**
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
 */async function ma({appConfig:e,heartbeatServiceProvider:t},n){const a=ba(e,n),r=Zr(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:St,appId:e.appId}},i={method:"POST",headers:r,body:JSON.stringify(o)},c=await Ot(()=>fetch(a,i));if(c.ok){const l=await c.json();return Bt(l)}else throw await Mt("Generate Auth Token",c)}function ba(e,{fid:t}){return`${Dt(e)}/${t}/authTokens:generate`}/**
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
 */async function Re(e,t=!1){let n;const a=await ie(e.appConfig,s=>{if(!Ht(s))throw x.create("not-registered");const o=s.authToken;if(!t&&wa(o))return s;if(o.requestStatus===1)return n=_a(e,t),s;{if(!navigator.onLine)throw x.create("app-offline");const i=va(s);return n=ya(e,i),i}});return n?await n:a.authToken}async function _a(e,t){let n=await nt(e.appConfig);for(;n.authToken.requestStatus===1;)await xt(100),n=await nt(e.appConfig);const a=n.authToken;return a.requestStatus===0?Re(e,t):a}function nt(e){return ie(e,t=>{if(!Ht(t))throw x.create("not-registered");const n=t.authToken;return Ea(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ya(e,t){try{const n=await ma(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await ae(e.appConfig,a),n}catch(n){if($t(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Lt(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ae(e.appConfig,a)}throw n}}function Ht(e){return e!==void 0&&e.registrationStatus===2}function wa(e){return e.requestStatus===2&&!Ia(e)}function Ia(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Kr}function va(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ea(e){return e.requestStatus===1&&e.requestTime+Tt<Date.now()}/**
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
 */async function Aa(e){const t=e,{installationEntry:n,registrationPromise:a}=await Me(t);return a?a.catch(console.error):Re(t).catch(console.error),n.fid}/**
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
 */async function Ta(e,t=!1){const n=e;return await Sa(n),(await Re(n,t)).token}async function Sa(e){const{registrationPromise:t}=await Me(e);t&&await t}/**
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
 */function Ca(e){if(!e||!e.options)throw me("App Configuration");if(!e.name)throw me("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw me(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function me(e){return x.create("missing-app-config-values",{valueName:e})}/**
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
 */const jt="installations",$a="installations-internal",Da=e=>{const t=e.getProvider("app").getImmediate(),n=Ca(t),a=It(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Ba=e=>{const t=e.getProvider("app").getImmediate(),n=It(t,jt).getImmediate();return{getId:()=>Aa(n),getToken:r=>Ta(n,r)}};function Ma(){O(new R(jt,Da,"PUBLIC")),O(new R($a,Ba,"PRIVATE"))}Ma();E(At,De);E(At,De,"esm2017");/**
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
 */const rt="analytics",Ra="firebase_id",Oa="origin",xa=60*1e3,ka="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vt="https://www.googletagmanager.com/gtag/js";/**
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
 */const _=new bt("@firebase/analytics");/**
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
 */function qt(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Na(e,t){const n=document.createElement("script");n.src=`${Vt}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Pa(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function La(e,t,n,a,r,s){const o=a[r];try{if(o)await t[o];else{const c=(await qt(n)).find(l=>l.measurementId===r);c&&await t[c.appId]}}catch(i){_.error(i)}e("config",r,s)}async function Fa(e,t,n,a,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const i=await qt(n);for(const c of o){const l=i.find(d=>d.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,r||{})}catch(s){_.error(s)}}function Ha(e,t,n,a){async function r(s,o,i){try{s==="event"?await Fa(e,t,n,o,i):s==="config"?await La(e,t,n,a,o,i):e("set",o)}catch(c){_.error(c)}}return r}function ja(e,t,n,a,r){let s=function(...o){window[a].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Ha(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}function Va(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Vt))return t;return null}/**
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
 */const qa={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},y=new se("analytics","Analytics",qa);/**
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
 */const Ua=30,Wa=1e3;class Ga{constructor(t={},n=Wa){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ut=new Ga;function za(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ka(e){var t;const{appId:n,apiKey:a}=e,r={method:"GET",headers:za(a)},s=ka.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let i="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(i=c.error.message)}catch{}throw y.create("config-fetch-failed",{httpStatus:o.status,responseMessage:i})}return o.json()}async function Ya(e,t=Ut,n){const{appId:a,apiKey:r,measurementId:s}=e.options;if(!a)throw y.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:a};throw y.create("no-api-key")}const o=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new Za;return setTimeout(async()=>{i.abort()},n!==void 0?n:xa),Wt({appId:a,apiKey:r,measurementId:s},o,i,t)}async function Wt(e,{throttleEndTimeMillis:t,backoffCount:n},a,r=Ut){const{appId:s,measurementId:o}=e;try{await Ja(a,t)}catch(i){if(o)return _.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${i.message}]`),{appId:s,measurementId:o};throw i}try{const i=await Ka(e);return r.deleteThrottleMetadata(s),i}catch(i){if(!Xa(i)){if(r.deleteThrottleMetadata(s),o)return _.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${i.message}]`),{appId:s,measurementId:o};throw i}const c=Number(i.customData.httpStatus)===503?Ge(n,r.intervalMillis,Ua):Ge(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return r.setThrottleMetadata(s,l),_.debug(`Calling attemptFetch again in ${c} millis`),Wt(e,l,a,r)}}function Ja(e,t){return new Promise((n,a)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(s),a(y.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Xa(e){if(!(e instanceof J)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Za{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
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
 */async function Qa(){if(gt())try{await mt()}catch(e){return _.warn(y.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return _.warn(y.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function es(e,t,n,a,r,s,o){var i;const c=Ya(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&_.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>_.error(p)),t.push(c);const l=Qa().then(p=>{if(p)return a.getId()}),[u,d]=await Promise.all([c,l]);Va()||Na(s,u.measurementId),r("js",new Date);const g=(i=o==null?void 0:o.config)!==null&&i!==void 0?i:{};return g[Oa]="firebase",g.update=!0,d!=null&&(g[Ra]=d),r("config",u.measurementId,g),u.measurementId}/**
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
 */class ts{constructor(t){this.app=t}_delete(){return delete G[this.app.options.appId],Promise.resolve()}}let G={},at=[];const st={};let be="dataLayer",ns="gtag",ot,Gt,it=!1;function rs(){const e=[];if(Nn()&&e.push("This is a browser extension environment."),Pn()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,r)=>`(${r+1}) ${a}`).join(" "),n=y.create("invalid-analytics-context",{errorInfo:t});_.warn(n.message)}}function as(e,t,n){rs();const a=e.options.appId;if(!a)throw y.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)_.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw y.create("no-api-key");if(G[a]!=null)throw y.create("already-exists",{id:a});if(!it){Pa(be);const{wrappedGtag:s,gtagCore:o}=ja(G,at,st,be,ns);Gt=s,ot=o,it=!0}return G[a]=es(e,at,st,t,ot,be,n),new ts(e)}/**
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
 */async function ss(e,t,n,a,r){if(r&&r.global){e("event",n,a);return}else{const s=await t,o=Object.assign(Object.assign({},a),{send_to:s});e("event",n,o)}}function os(e,t,n,a){e=Wn(e),ss(Gt,G[e.app.options.appId],t,n,a).catch(r=>_.error(r))}const ct="@firebase/analytics",lt="0.7.9";function is(){O(new R(rt,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return as(a,r,n)},"PUBLIC")),O(new R("analytics-internal",e,"PRIVATE")),E(ct,lt),E(ct,lt,"esm2017");function e(t){try{const n=t.getProvider(rt).getImmediate();return{logEvent:(a,r,s)=>os(n,a,r,s)}}catch(n){throw y.create("interop-component-reg-failed",{reason:n})}}}is();function cs(e){let t,n,a,r,s,o;return a=new Rn({}),s=new En({}),{c(){t=b("body"),n=b("main"),z(a.$$.fragment),r=M(),z(s.$$.fragment),m(t,"class","svelte-1dn6006")},m(i,c){N(i,t,c),f(t,n),P(a,n,null),f(n,r),P(s,n,null),o=!0},p:A,i(i){o||(I(a.$$.fragment,i),I(s.$$.fragment,i),o=!0)},o(i){T(a.$$.fragment,i),T(s.$$.fragment,i),o=!1},d(i){i&&S(t),L(a),L(s)}}}class ls extends j{constructor(t){super(),H(this,t,null,cs,F,{})}}new ls({target:document.getElementById("app")});
