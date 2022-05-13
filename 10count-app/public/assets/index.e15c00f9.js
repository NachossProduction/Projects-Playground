var Lt=Object.defineProperty,Ft=Object.defineProperties;var Ht=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var jt=Object.prototype.hasOwnProperty,Vt=Object.prototype.propertyIsEnumerable;var Se=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t)=>{for(var n in t||(t={}))jt.call(t,n)&&Se(e,n,t[n]);if(Te)for(var n of Te(t))Vt.call(t,n)&&Se(e,n,t[n]);return e},$e=(e,t)=>Ft(e,Ht(t));const qt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};qt();function E(){}function X(e,t){for(const n in t)e[n]=t[n];return e}function et(e){return e()}function De(){return Object.create(null)}function W(e){e.forEach(et)}function Ut(e){return typeof e=="function"}function N(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Wt(e){return Object.keys(e).length===0}function Gt(e,t,n,a){if(e){const r=tt(e,t,n,a);return e[0](r)}}function tt(e,t,n,a){return e[1]&&a?X(n.ctx.slice(),e[1](a(t))):n.ctx}function zt(e,t,n,a){if(e[2]&&a){const r=e[2](a(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(t.dirty.length,r.length);for(let i=0;i<s;i+=1)o[i]=t.dirty[i]|r[i];return o}return t.dirty|r}return t.dirty}function Kt(e,t,n,a,r,o){if(r){const s=tt(t,n,a,o);e.p(s,r)}}function Yt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let a=0;a<n;a++)t[a]=-1;return t}return-1}function Be(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function h(e,t){e.appendChild(t)}function R(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode.removeChild(e)}function Jt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function me(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function V(e){return document.createTextNode(e)}function O(){return V(" ")}function Xt(){return V("")}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Zt(e){return Array.from(e.childNodes)}function nt(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let be;function H(e){be=e}const F=[],Me=[],Y=[],Re=[],Qt=Promise.resolve();let ue=!1;function en(){ue||(ue=!0,Qt.then(rt))}function fe(e){Y.push(e)}const ne=new Set;let K=0;function rt(){const e=be;do{for(;K<F.length;){const t=F[K];K++,H(t),tn(t.$$)}for(H(null),F.length=0,K=0;Me.length;)Me.pop()();for(let t=0;t<Y.length;t+=1){const n=Y[t];ne.has(n)||(ne.add(n),n())}Y.length=0}while(F.length);for(;Re.length;)Re.pop()();ue=!1,ne.clear(),H(e)}function tn(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(fe)}}const J=new Set;let S;function nn(){S={r:0,c:[],p:S}}function rn(){S.r||W(S.c),S=S.p}function w(e,t){e&&e.i&&(J.delete(e),e.i(t))}function A(e,t,n,a){if(e&&e.o){if(J.has(e))return;J.add(e),S.c.push(()=>{J.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}}function an(e,t){const n={},a={},r={$$scope:1};let o=e.length;for(;o--;){const s=e[o],i=t[o];if(i){for(const c in s)c in i||(a[c]=1);for(const c in i)r[c]||(n[c]=i[c],r[c]=1);e[o]=i}else for(const c in s)r[c]=1}for(const s in a)s in n||(n[s]=void 0);return n}function on(e){return typeof e=="object"&&e!==null?e:{}}function q(e){e&&e.c()}function x(e,t,n,a){const{fragment:r,on_mount:o,on_destroy:s,after_update:i}=e.$$;r&&r.m(t,n),a||fe(()=>{const c=o.map(et).filter(Ut);s?s.push(...c):W(c),e.$$.on_mount=[]}),i.forEach(fe)}function k(e,t){const n=e.$$;n.fragment!==null&&(W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function sn(e,t){e.$$.dirty[0]===-1&&(F.push(e),en(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(e,t,n,a,r,o,s,i=[-1]){const c=be;H(e);const l=e.$$={fragment:null,ctx:null,props:o,update:E,not_equal:r,bound:De(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:De(),dirty:i,skip_bound:!1,root:t.target||c.$$.root};s&&s(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,b,...p)=>{const z=p.length?p[0]:b;return l.ctx&&r(l.ctx[f],l.ctx[f]=z)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](z),u&&sn(e,f)),b}):[],l.update(),u=!0,W(l.before_update),l.fragment=a?a(l.ctx):!1,t.target){if(t.hydrate){const f=Zt(t.target);l.fragment&&l.fragment.l(f),f.forEach(T)}else l.fragment&&l.fragment.c();t.intro&&w(e.$$.fragment),x(e,t.target,t.anchor,t.customElement),rt()}H(c)}class L{$destroy(){k(this,1),this.$destroy=E}$on(t,n){const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}$set(t){this.$$set&&!Wt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function cn(e){let t,n,a,r=e[0].p_nom+"",o,s,i,c,l;return{c(){t=y("div"),n=y("h3"),a=V("Nom de Produit : "),o=V(r),s=O(),i=y("p"),i.textContent="phrase de description",c=O(),l=y("ul"),l.innerHTML="<li>Prix : X \u20AC</li>",g(t,"class","produitBox")},m(u,f){R(u,t,f),h(t,n),h(n,a),h(n,o),h(t,s),h(t,i),h(t,c),h(t,l)},p(u,[f]){f&1&&r!==(r=u[0].p_nom+"")&&nt(o,r)},i:E,o:E,d(u){u&&T(t)}}}function ln(e,t,n){let{produit:a}=t;return e.$$set=r=>{"produit"in r&&n(0,a=r.produit)},[a]}class un extends L{constructor(t){super(),P(this,t,ln,cn,N,{produit:0})}}function Oe(e,t,n){const a=e.slice();return a[1]=t[n],a}function xe(e){let t,n;return t=new un({props:{produit:e[1]}}),{c(){q(t.$$.fragment)},m(a,r){x(t,a,r),n=!0},p:E,i(a){n||(w(t.$$.fragment,a),n=!0)},o(a){A(t.$$.fragment,a),n=!1},d(a){k(t,a)}}}function fn(e){let t,n,a,r,o=e[0],s=[];for(let c=0;c<o.length;c+=1)s[c]=xe(Oe(e,o,c));const i=c=>A(s[c],1,1,()=>{s[c]=null});return{c(){t=y("div"),n=y("div"),n.innerHTML=`<h1 class="svelte-cdd6z2">Article Template</h1> 

        <p class="svelte-cdd6z2">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sunt fuga! Minima soluta nobis, incidunt dolores hic quod. Praesentium corporis, a id ullam quam suscipit velit fuga molestias quisquam error.</p> 
    
        <p class="svelte-cdd6z2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed hic, odio adipisci vero soluta consequatur corrupti minus enim? Cumque laboriosam possimus vero soluta illum quidem omnis reprehenderit maxime cum iure!</p>`,a=O();for(let c=0;c<s.length;c+=1)s[c].c();g(n,"class","article svelte-cdd6z2"),g(t,"class","body svelte-cdd6z2")},m(c,l){R(c,t,l),h(t,n),h(t,a);for(let u=0;u<s.length;u+=1)s[u].m(t,null);r=!0},p(c,[l]){if(l&1){o=c[0];let u;for(u=0;u<o.length;u+=1){const f=Oe(c,o,u);s[u]?(s[u].p(f,l),w(s[u],1)):(s[u]=xe(f),s[u].c(),w(s[u],1),s[u].m(t,null))}for(nn(),u=o.length;u<s.length;u+=1)i(u);rn()}},i(c){if(!r){for(let l=0;l<o.length;l+=1)w(s[l]);r=!0}},o(c){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)A(s[l]);r=!1},d(c){c&&T(t),Jt(s,c)}}}function dn(e){let t=[];for(let n=0;n<100;n++)t.push({p_id:n,p_nom:"produit num\xE9ro "+n,p_description:"tr\xE8s bon produit !!!!",p_prix:Math.random()*10+" \u20AC "});return[t]}class hn extends L{constructor(t){super(),P(this,t,dn,fn,N,{})}}function ke(e){let t,n;return{c(){t=me("title"),n=V(e[0])},m(a,r){R(a,t,r),h(t,n)},p(a,r){r&1&&nt(n,a[0])},d(a){a&&T(t)}}}function pn(e){let t,n,a,r=e[0]&&ke(e);const o=e[3].default,s=Gt(o,e,e[2],null);return{c(){t=me("svg"),r&&r.c(),n=Xt(),s&&s.c(),g(t,"xmlns","http://www.w3.org/2000/svg"),g(t,"viewBox",e[1]),g(t,"class","svelte-c8tyih")},m(i,c){R(i,t,c),r&&r.m(t,null),h(t,n),s&&s.m(t,null),a=!0},p(i,[c]){i[0]?r?r.p(i,c):(r=ke(i),r.c(),r.m(t,n)):r&&(r.d(1),r=null),s&&s.p&&(!a||c&4)&&Kt(s,o,i,i[2],a?zt(o,i[2],c,null):Yt(i[2]),null),(!a||c&2)&&g(t,"viewBox",i[1])},i(i){a||(w(s,i),a=!0)},o(i){A(s,i),a=!1},d(i){i&&T(t),r&&r.d(),s&&s.d(i)}}}function gn(e,t,n){let{$$slots:a={},$$scope:r}=t,{title:o=null}=t,{viewBox:s}=t;return e.$$set=i=>{"title"in i&&n(0,o=i.title),"viewBox"in i&&n(1,s=i.viewBox),"$$scope"in i&&n(2,r=i.$$scope)},[o,s,r,a]}class mn extends L{constructor(t){super(),P(this,t,gn,pn,N,{title:0,viewBox:1})}}function bn(e){let t;return{c(){t=me("path"),g(t,"d","M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z")},m(n,a){R(n,t,a)},p:E,d(n){n&&T(t)}}}function yn(e){let t,n;const a=[{viewBox:"0 0 24 24"},e[0]];let r={$$slots:{default:[bn]},$$scope:{ctx:e}};for(let o=0;o<a.length;o+=1)r=X(r,a[o]);return t=new mn({props:r}),{c(){q(t.$$.fragment)},m(o,s){x(t,o,s),n=!0},p(o,[s]){const i=s&1?an(a,[a[0],on(o[0])]):{};s&2&&(i.$$scope={dirty:s,ctx:o}),t.$set(i)},i(o){n||(w(t.$$.fragment,o),n=!0)},o(o){A(t.$$.fragment,o),n=!1},d(o){k(t,o)}}}function _n(e,t,n){return e.$$set=a=>{n(0,t=X(X({},t),Be(a)))},t=Be(t),[t]}class wn extends L{constructor(t){super(),P(this,t,_n,yn,N,{})}}function In(e){let t,n,a,r,o,s,i,c;return a=new wn({}),{c(){t=y("div"),n=y("div"),q(a.$$.fragment),r=O(),o=y("div"),o.textContent="10 Count",s=O(),i=y("div"),i.textContent="Contactez-nous !",g(n,"class","side-nav-button svelte-y7qnbw"),g(o,"class","title svelte-y7qnbw"),g(i,"class","contact svelte-y7qnbw"),g(t,"class","container-top-nav svelte-y7qnbw")},m(l,u){R(l,t,u),h(t,n),x(a,n,null),h(t,r),h(t,o),h(t,s),h(t,i),c=!0},p:E,i(l){c||(w(a.$$.fragment,l),c=!0)},o(l){A(a.$$.fragment,l),c=!1},d(l){l&&T(t),k(a)}}}class vn extends L{constructor(t){super(),P(this,t,null,In,N,{})}}/**
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
 */const at=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++a)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},En=function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[a++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=e[n++],s=e[n++],i=e[n++],c=((r&7)<<18|(o&63)<<12|(s&63)<<6|i&63)-65536;t[a++]=String.fromCharCode(55296+(c>>10)),t[a++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],s=e[n++];t[a++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return t.join("")},An={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<e.length;r+=3){const o=e[r],s=r+1<e.length,i=s?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=o>>2,f=(o&3)<<4|i>>4;let b=(i&15)<<2|l>>6,p=l&63;c||(p=64,s||(b=64)),a.push(n[u],n[f],n[b],n[p])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(at(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):En(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<e.length;){const o=n[e.charAt(r++)],i=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const f=r<e.length?n[e.charAt(r)]:64;if(++r,o==null||i==null||l==null||f==null)throw Error();const b=o<<2|i>>4;if(a.push(b),l!==64){const p=i<<4&240|l>>2;if(a.push(p),f!==64){const z=l<<6&192|f;a.push(z)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Tn=function(e){const t=at(e);return An.encodeByteArray(t,!0)},ot=function(e){return Tn(e).replace(/\./g,"")};function Sn(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function st(){return typeof indexedDB=="object"}function it(){return new Promise((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;t(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Cn(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const $n="FirebaseError";class G extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=$n,Object.setPrototypeOf(this,G.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Q.prototype.create)}}class Q{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},r=`${this.service}/${t}`,o=this.errors[t],s=o?Dn(o,a):"Error",i=`${this.serviceName}: ${s} (${r}).`;return new G(r,i,a)}}function Dn(e,t){return e.replace(Bn,(n,a)=>{const r=t[a];return r!=null?String(r):`<${a}?>`})}const Bn=/\{\$([^}]+)}/g;/**
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
 */const Mn=1e3,Rn=2,On=4*60*60*1e3,xn=.5;function Ne(e,t=Mn,n=Rn){const a=t*Math.pow(n,e),r=Math.round(xn*a*(Math.random()-.5)*2);return Math.min(On,a+r)}/**
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
 */function kn(e){return e&&e._delegate?e._delegate:e}class ${constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var d;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(d||(d={}));const Nn={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},Pn=d.INFO,Ln={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},Fn=(e,t,...n)=>{if(t<e.logLevel)return;const a=new Date().toISOString(),r=Ln[t];if(r)console[r](`[${a}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ct{constructor(t){this.name=t,this._logLevel=Pn,this._logHandler=Fn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in d))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...t),this._logHandler(this,d.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...t),this._logHandler(this,d.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,d.INFO,...t),this._logHandler(this,d.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,d.WARN,...t),this._logHandler(this,d.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...t),this._logHandler(this,d.ERROR,...t)}}const Hn=(e,t)=>t.some(n=>e instanceof n);let Pe,Le;function jn(){return Pe||(Pe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vn(){return Le||(Le=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lt=new WeakMap,de=new WeakMap,ut=new WeakMap,re=new WeakMap,ye=new WeakMap;function qn(e){const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(I(e.result)),r()},s=()=>{a(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&lt.set(n,e)}).catch(()=>{}),ye.set(t,e),t}function Un(e){if(de.has(e))return;const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),r()},s=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});de.set(e,t)}let he={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return de.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ut.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Wn(e){he=e(he)}function Gn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(ae(this),t,...n);return ut.set(a,t.sort?t.sort():[t]),I(a)}:Vn().includes(e)?function(...t){return e.apply(ae(this),t),I(lt.get(this))}:function(...t){return I(e.apply(ae(this),t))}}function zn(e){return typeof e=="function"?Gn(e):(e instanceof IDBTransaction&&Un(e),Hn(e,jn())?new Proxy(e,he):e)}function I(e){if(e instanceof IDBRequest)return qn(e);if(re.has(e))return re.get(e);const t=zn(e);return t!==e&&(re.set(e,t),ye.set(t,e)),t}const ae=e=>ye.get(e);function ft(e,t,{blocked:n,upgrade:a,blocking:r,terminated:o}={}){const s=indexedDB.open(e,t),i=I(s);return a&&s.addEventListener("upgradeneeded",c=>{a(I(s.result),c.oldVersion,c.newVersion,I(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),i.then(c=>{o&&c.addEventListener("close",()=>o()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),i}const Kn=["get","getKey","getAll","getAllKeys","count"],Yn=["put","add","delete","clear"],oe=new Map;function Fe(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(oe.get(t))return oe.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=Yn.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||Kn.includes(n)))return;const o=async function(s,...i){const c=this.transaction(s,r?"readwrite":"readonly");let l=c.store;return a&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),r&&c.done]))[0]};return oe.set(t,o),o}Wn(e=>$e(Ce({},e),{get:(t,n,a)=>Fe(t,n)||e.get(t,n,a),has:(t,n)=>!!Fe(t,n)||e.has(t,n)}));/**
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
 */class Jn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xn(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function Xn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const pe="@firebase/app",He="0.7.24";/**
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
 */const _e=new ct("@firebase/app"),Zn="@firebase/app-compat",Qn="@firebase/analytics-compat",er="@firebase/analytics",tr="@firebase/app-check-compat",nr="@firebase/app-check",rr="@firebase/auth",ar="@firebase/auth-compat",or="@firebase/database",sr="@firebase/database-compat",ir="@firebase/functions",cr="@firebase/functions-compat",lr="@firebase/installations",ur="@firebase/installations-compat",fr="@firebase/messaging",dr="@firebase/messaging-compat",hr="@firebase/performance",pr="@firebase/performance-compat",gr="@firebase/remote-config",mr="@firebase/remote-config-compat",br="@firebase/storage",yr="@firebase/storage-compat",_r="@firebase/firestore",wr="@firebase/firestore-compat",Ir="firebase",vr={[pe]:"fire-core",[Zn]:"fire-core-compat",[er]:"fire-analytics",[Qn]:"fire-analytics-compat",[nr]:"fire-app-check",[tr]:"fire-app-check-compat",[rr]:"fire-auth",[ar]:"fire-auth-compat",[or]:"fire-rtdb",[sr]:"fire-rtdb-compat",[ir]:"fire-fn",[cr]:"fire-fn-compat",[lr]:"fire-iid",[ur]:"fire-iid-compat",[fr]:"fire-fcm",[dr]:"fire-fcm-compat",[hr]:"fire-perf",[pr]:"fire-perf-compat",[gr]:"fire-rc",[mr]:"fire-rc-compat",[br]:"fire-gcs",[yr]:"fire-gcs-compat",[_r]:"fire-fst",[wr]:"fire-fst-compat","fire-js":"fire-js",[Ir]:"fire-js-all"};/**
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
 */const Er=new Map,je=new Map;function Ar(e,t){try{e.container.addComponent(t)}catch(n){_e.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function D(e){const t=e.name;if(je.has(t))return _e.debug(`There were multiple attempts to register component ${t}.`),!1;je.set(t,e);for(const n of Er.values())Ar(n,e);return!0}function dt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Tr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},we=new Q("app","Firebase",Tr);function v(e,t,n){var a;let r=(a=vr[e])!==null&&a!==void 0?a:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const i=[`Unable to register library "${r}" with version "${t}":`];o&&i.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&i.push("and"),s&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_e.warn(i.join(" "));return}D(new $(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Sr="firebase-heartbeat-database",Cr=1,U="firebase-heartbeat-store";let se=null;function ht(){return se||(se=ft(Sr,Cr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(U)}}}).catch(e=>{throw we.create("storage-open",{originalErrorMessage:e.message})})),se}async function $r(e){try{return(await ht()).transaction(U).objectStore(U).get(pt(e))}catch(t){throw we.create("storage-get",{originalErrorMessage:t.message})}}async function Ve(e,t){try{const a=(await ht()).transaction(U,"readwrite");return await a.objectStore(U).put(t,pt(e)),a.done}catch(n){throw we.create("storage-set",{originalErrorMessage:n.message})}}function pt(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Dr=1024,Br=30*24*60*60*1e3;class Mr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Or(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=qe();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(r=>r.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Br}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qe(),{heartbeatsToSend:n,unsentEntries:a}=Rr(this._heartbeatsCache.heartbeats),r=ot(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function qe(){return new Date().toISOString().substring(0,10)}function Rr(e,t=Dr){const n=[];let a=e.slice();for(const r of e){const o=n.find(s=>s.agent===r.agent);if(o){if(o.dates.push(r.date),Ue(n)>t){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ue(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class Or{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return st()?it().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $r(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ve(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ve(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ue(e){return ot(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function xr(e){D(new $("platform-logger",t=>new Jn(t),"PRIVATE")),D(new $("heartbeat",t=>new Mr(t),"PRIVATE")),v(pe,He,e),v(pe,He,"esm2017"),v("fire-js","")}xr("");var kr="firebase",Nr="9.8.1";/**
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
 */v(kr,Nr,"app");const gt="@firebase/installations",Ie="0.5.9";/**
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
 */const mt=1e4,bt=`w:${Ie}`,yt="FIS_v2",Pr="https://firebaseinstallations.googleapis.com/v1",Lr=60*60*1e3,Fr="installations",Hr="Installations";/**
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
 */const jr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},B=new Q(Fr,Hr,jr);function _t(e){return e instanceof G&&e.code.includes("request-failed")}/**
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
 */function wt({projectId:e}){return`${Pr}/projects/${e}/installations`}function It(e){return{token:e.token,requestStatus:2,expiresIn:qr(e.expiresIn),creationTime:Date.now()}}async function vt(e,t){const a=(await t.json()).error;return B.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Et({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Vr(e,{refreshToken:t}){const n=Et(e);return n.append("Authorization",Ur(t)),n}async function At(e){const t=await e();return t.status>=500&&t.status<600?e():t}function qr(e){return Number(e.replace("s","000"))}function Ur(e){return`${yt} ${e}`}/**
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
 */async function Wr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=wt(e),r=Et(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={fid:n,authVersion:yt,appId:e.appId,sdkVersion:bt},i={method:"POST",headers:r,body:JSON.stringify(s)},c=await At(()=>fetch(a,i));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:It(l.authToken)}}else throw await vt("Create Installation",c)}/**
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
 */function Tt(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Gr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zr=/^[cdef][\w-]{21}$/,ge="";function Kr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Yr(e);return zr.test(n)?n:ge}catch{return ge}}function Yr(e){return Gr(e).substr(0,22)}/**
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
 */function ee(e){return`${e.appName}!${e.appId}`}/**
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
 */const St=new Map;function Ct(e,t){const n=ee(e);$t(n,t),Jr(n,t)}function $t(e,t){const n=St.get(e);if(!!n)for(const a of n)a(t)}function Jr(e,t){const n=Xr();n&&n.postMessage({key:e,fid:t}),Zr()}let C=null;function Xr(){return!C&&"BroadcastChannel"in self&&(C=new BroadcastChannel("[Firebase] FID Change"),C.onmessage=e=>{$t(e.data.key,e.data.fid)}),C}function Zr(){St.size===0&&C&&(C.close(),C=null)}/**
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
 */const Qr="firebase-installations-database",ea=1,M="firebase-installations-store";let ie=null;function ve(){return ie||(ie=ft(Qr,ea,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(M)}}})),ie}async function Z(e,t){const n=ee(e),r=(await ve()).transaction(M,"readwrite"),o=r.objectStore(M),s=await o.get(n);return await o.put(t,n),await r.done,(!s||s.fid!==t.fid)&&Ct(e,t.fid),t}async function Dt(e){const t=ee(e),a=(await ve()).transaction(M,"readwrite");await a.objectStore(M).delete(t),await a.done}async function te(e,t){const n=ee(e),r=(await ve()).transaction(M,"readwrite"),o=r.objectStore(M),s=await o.get(n),i=t(s);return i===void 0?await o.delete(n):await o.put(i,n),await r.done,i&&(!s||s.fid!==i.fid)&&Ct(e,i.fid),i}/**
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
 */async function Ee(e){let t;const n=await te(e.appConfig,a=>{const r=ta(a),o=na(e,r);return t=o.registrationPromise,o.installationEntry});return n.fid===ge?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ta(e){const t=e||{fid:Kr(),registrationStatus:0};return Bt(t)}function na(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(B.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=ra(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:aa(e)}:{installationEntry:t}}async function ra(e,t){try{const n=await Wr(e,t);return Z(e.appConfig,n)}catch(n){throw _t(n)&&n.customData.serverCode===409?await Dt(e.appConfig):await Z(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function aa(e){let t=await We(e.appConfig);for(;t.registrationStatus===1;)await Tt(100),t=await We(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await Ee(e);return a||n}return t}function We(e){return te(e,t=>{if(!t)throw B.create("installation-not-found");return Bt(t)})}function Bt(e){return oa(e)?{fid:e.fid,registrationStatus:0}:e}function oa(e){return e.registrationStatus===1&&e.registrationTime+mt<Date.now()}/**
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
 */async function sa({appConfig:e,heartbeatServiceProvider:t},n){const a=ia(e,n),r=Vr(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={installation:{sdkVersion:bt,appId:e.appId}},i={method:"POST",headers:r,body:JSON.stringify(s)},c=await At(()=>fetch(a,i));if(c.ok){const l=await c.json();return It(l)}else throw await vt("Generate Auth Token",c)}function ia(e,{fid:t}){return`${wt(e)}/${t}/authTokens:generate`}/**
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
 */async function Ae(e,t=!1){let n;const a=await te(e.appConfig,o=>{if(!Mt(o))throw B.create("not-registered");const s=o.authToken;if(!t&&ua(s))return o;if(s.requestStatus===1)return n=ca(e,t),o;{if(!navigator.onLine)throw B.create("app-offline");const i=da(o);return n=la(e,i),i}});return n?await n:a.authToken}async function ca(e,t){let n=await Ge(e.appConfig);for(;n.authToken.requestStatus===1;)await Tt(100),n=await Ge(e.appConfig);const a=n.authToken;return a.requestStatus===0?Ae(e,t):a}function Ge(e){return te(e,t=>{if(!Mt(t))throw B.create("not-registered");const n=t.authToken;return ha(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function la(e,t){try{const n=await sa(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await Z(e.appConfig,a),n}catch(n){if(_t(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Dt(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Z(e.appConfig,a)}throw n}}function Mt(e){return e!==void 0&&e.registrationStatus===2}function ua(e){return e.requestStatus===2&&!fa(e)}function fa(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Lr}function da(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ha(e){return e.requestStatus===1&&e.requestTime+mt<Date.now()}/**
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
 */async function pa(e){const t=e,{installationEntry:n,registrationPromise:a}=await Ee(t);return a?a.catch(console.error):Ae(t).catch(console.error),n.fid}/**
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
 */async function ga(e,t=!1){const n=e;return await ma(n),(await Ae(n,t)).token}async function ma(e){const{registrationPromise:t}=await Ee(e);t&&await t}/**
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
 */function ba(e){if(!e||!e.options)throw ce("App Configuration");if(!e.name)throw ce("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ce(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ce(e){return B.create("missing-app-config-values",{valueName:e})}/**
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
 */const Rt="installations",ya="installations-internal",_a=e=>{const t=e.getProvider("app").getImmediate(),n=ba(t),a=dt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},wa=e=>{const t=e.getProvider("app").getImmediate(),n=dt(t,Rt).getImmediate();return{getId:()=>pa(n),getToken:r=>ga(n,r)}};function Ia(){D(new $(Rt,_a,"PUBLIC")),D(new $(ya,wa,"PRIVATE"))}Ia();v(gt,Ie);v(gt,Ie,"esm2017");/**
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
 */const ze="analytics",va="firebase_id",Ea="origin",Aa=60*1e3,Ta="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ot="https://www.googletagmanager.com/gtag/js";/**
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
 */const m=new ct("@firebase/analytics");/**
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
 */function xt(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Sa(e,t){const n=document.createElement("script");n.src=`${Ot}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Ca(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function $a(e,t,n,a,r,o){const s=a[r];try{if(s)await t[s];else{const c=(await xt(n)).find(l=>l.measurementId===r);c&&await t[c.appId]}}catch(i){m.error(i)}e("config",r,o)}async function Da(e,t,n,a,r){try{let o=[];if(r&&r.send_to){let s=r.send_to;Array.isArray(s)||(s=[s]);const i=await xt(n);for(const c of s){const l=i.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)o.push(u);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",a,r||{})}catch(o){m.error(o)}}function Ba(e,t,n,a){async function r(o,s,i){try{o==="event"?await Da(e,t,n,s,i):o==="config"?await $a(e,t,n,a,s,i):e("set",s)}catch(c){m.error(c)}}return r}function Ma(e,t,n,a,r){let o=function(...s){window[a].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=Ba(o,e,t,n),{gtagCore:o,wrappedGtag:window[r]}}function Ra(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ot))return t;return null}/**
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
 */const Oa={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},_=new Q("analytics","Analytics",Oa);/**
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
 */const xa=30,ka=1e3;class Na{constructor(t={},n=ka){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const kt=new Na;function Pa(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function La(e){var t;const{appId:n,apiKey:a}=e,r={method:"GET",headers:Pa(a)},o=Ta.replace("{app-id}",n),s=await fetch(o,r);if(s.status!==200&&s.status!==304){let i="";try{const c=await s.json();!((t=c.error)===null||t===void 0)&&t.message&&(i=c.error.message)}catch{}throw _.create("config-fetch-failed",{httpStatus:s.status,responseMessage:i})}return s.json()}async function Fa(e,t=kt,n){const{appId:a,apiKey:r,measurementId:o}=e.options;if(!a)throw _.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:a};throw _.create("no-api-key")}const s=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new Va;return setTimeout(async()=>{i.abort()},n!==void 0?n:Aa),Nt({appId:a,apiKey:r,measurementId:o},s,i,t)}async function Nt(e,{throttleEndTimeMillis:t,backoffCount:n},a,r=kt){const{appId:o,measurementId:s}=e;try{await Ha(a,t)}catch(i){if(s)return m.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${i.message}]`),{appId:o,measurementId:s};throw i}try{const i=await La(e);return r.deleteThrottleMetadata(o),i}catch(i){if(!ja(i)){if(r.deleteThrottleMetadata(o),s)return m.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${i.message}]`),{appId:o,measurementId:s};throw i}const c=Number(i.customData.httpStatus)===503?Ne(n,r.intervalMillis,xa):Ne(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return r.setThrottleMetadata(o,l),m.debug(`Calling attemptFetch again in ${c} millis`),Nt(e,l,a,r)}}function Ha(e,t){return new Promise((n,a)=>{const r=Math.max(t-Date.now(),0),o=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(o),a(_.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ja(e){if(!(e instanceof G)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Va{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
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
 */async function qa(){if(st())try{await it()}catch(e){return m.warn(_.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return m.warn(_.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ua(e,t,n,a,r,o,s){var i;const c=Fa(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&m.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>m.error(p)),t.push(c);const l=qa().then(p=>{if(p)return a.getId()}),[u,f]=await Promise.all([c,l]);Ra()||Sa(o,u.measurementId),r("js",new Date);const b=(i=s==null?void 0:s.config)!==null&&i!==void 0?i:{};return b[Ea]="firebase",b.update=!0,f!=null&&(b[va]=f),r("config",u.measurementId,b),u.measurementId}/**
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
 */class Wa{constructor(t){this.app=t}_delete(){return delete j[this.app.options.appId],Promise.resolve()}}let j={},Ke=[];const Ye={};let le="dataLayer",Ga="gtag",Je,Pt,Xe=!1;function za(){const e=[];if(Sn()&&e.push("This is a browser extension environment."),Cn()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,r)=>`(${r+1}) ${a}`).join(" "),n=_.create("invalid-analytics-context",{errorInfo:t});m.warn(n.message)}}function Ka(e,t,n){za();const a=e.options.appId;if(!a)throw _.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)m.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _.create("no-api-key");if(j[a]!=null)throw _.create("already-exists",{id:a});if(!Xe){Ca(le);const{wrappedGtag:o,gtagCore:s}=Ma(j,Ke,Ye,le,Ga);Pt=o,Je=s,Xe=!0}return j[a]=Ua(e,Ke,Ye,t,Je,le,n),new Wa(e)}/**
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
 */async function Ya(e,t,n,a,r){if(r&&r.global){e("event",n,a);return}else{const o=await t,s=Object.assign(Object.assign({},a),{send_to:o});e("event",n,s)}}function Ja(e,t,n,a){e=kn(e),Ya(Pt,j[e.app.options.appId],t,n,a).catch(r=>m.error(r))}const Ze="@firebase/analytics",Qe="0.7.9";function Xa(){D(new $(ze,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return Ka(a,r,n)},"PUBLIC")),D(new $("analytics-internal",e,"PRIVATE")),v(Ze,Qe),v(Ze,Qe,"esm2017");function e(t){try{const n=t.getProvider(ze).getImmediate();return{logEvent:(a,r,o)=>Ja(n,a,r,o)}}catch(n){throw _.create("interop-component-reg-failed",{reason:n})}}}Xa();function Za(e){let t,n,a,r,o,s;return a=new vn({}),o=new hn({}),{c(){t=y("body"),n=y("main"),q(a.$$.fragment),r=O(),q(o.$$.fragment),g(t,"class","svelte-1dn6006")},m(i,c){R(i,t,c),h(t,n),x(a,n,null),h(n,r),x(o,n,null),s=!0},p:E,i(i){s||(w(a.$$.fragment,i),w(o.$$.fragment,i),s=!0)},o(i){A(a.$$.fragment,i),A(o.$$.fragment,i),s=!1},d(i){i&&T(t),k(a),k(o)}}}class Qa extends L{constructor(t){super(),P(this,t,null,Za,N,{})}}new Qa({target:document.getElementById("app")});
