(function(e){function t(t){for(var n,r,c=t[0],i=t[1],d=t[2],u=0,l=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&l.push(s[r][0]),s[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(l.length)l.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},s={app:0},a=[];function c(e){return i.p+"js/"+({UploadPhoto:"UploadPhoto","password-recovery":"password-recovery","protected/Slideshow":"protected/Slideshow"}[e]||e)+"."+{UploadPhoto:"bd13538c","password-recovery":"a5d7637d","protected/Slideshow":"a38f5f8a"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o={UploadPhoto:1,"protected/Slideshow":1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({UploadPhoto:"UploadPhoto","password-recovery":"password-recovery","protected/Slideshow":"protected/Slideshow"}[e]||e)+"."+{UploadPhoto:"cb997093","password-recovery":"31d6cfe0","protected/Slideshow":"81520f98"}[e]+".css",s=i.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var d=a[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===n||u===s))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===n||u===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete r[e],p.parentNode.removeChild(p),o(a)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,o){n=s[e]=[t,o]}));t.push(n[2]=a);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var l=new Error;d=function(t){u.onerror=u.onload=null,clearTimeout(p);var o=s[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}s[e]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var p=u;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"24d4":function(e,t,o){"use strict";o("b944")},"4ec3":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return i}));var n=o("bc3a"),r=o.n(n),s=o("8c89");const a=r.a.create({baseURL:s["a"],timeout:5e3});function c(e){return{headers:{Authorization:"Bearer "+e}}}const i={async logInGetToken(e,t){const o=new URLSearchParams;return o.append("username",e),o.append("password",t),a.post("/login/access-token",o)},async getMe(e){return a.get("/users/me",c(e))},async updateMe(e,t){return a.put("/users/me",t,c(e))},async updatePasswordMe(e,t){return a.put("/users/me/password",t,c(e))},async signUp(e){return a.post("/users/signup",e)},async getUsers(e){return a.get("/users",c(e))},async getUser(e,t){return a.get("/users/"+t,c(e))},async createUser(e,t){return a.post("/users",t,c(e))},async updateUser(e,t,o){return a.put("/users/"+t,o,c(e))},async deleteUser(e,t){return a.delete("/users/"+t,c(e))},async passwordRecovery(e){return a.post("/password-recovery/"+e)},async resetPassword(e){return a.post("/reset-password",e)},async uploadPhoto(e,t){let o=new FormData;return o.append("photo",e,e.name),o.append("title",t),a.post("/upload",o,{headers:{"Content-Type":"multipart/form-data"}})},async getAllPhotos(e){return a.get("/photos",c(e))},async deletePhoto(e,t){return a.delete("/photos/"+t,c(e))}}},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function r(e,t,o,r,s,a){const c=Object(n["B"])("Header"),i=Object(n["B"])("router-view"),d=Object(n["B"])("NotificationsManager");return Object(n["u"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(c),Object(n["j"])(i),Object(n["j"])(d)],64)}const s={id:"header"},a={class:""},c=Object(n["i"])("Upload Photo"),i={key:0},d=Object(n["i"])("Slideshow"),u={key:1},l=Object(n["i"])("All Photos");function p(e,t,o,r,p,h){const f=Object(n["B"])("router-link");return Object(n["u"])(),Object(n["g"])("div",s,[Object(n["h"])("div",a,[Object(n["j"])(f,{to:{name:"Photo Upload"}},{default:Object(n["H"])(()=>[c]),_:1})]),e.$store.getters.isLoggedIn?(Object(n["u"])(),Object(n["g"])("div",i,[Object(n["h"])("span",null,"Logged in as: "+Object(n["D"])(e.$store.state.userProfile.email),1),Object(n["h"])("button",{onClick:t[0]||(t[0]=(...e)=>h.logOut&&h.logOut(...e))},"Log Out"),Object(n["j"])(f,{to:{name:"Slideshow"}},{default:Object(n["H"])(()=>[d]),_:1})])):Object(n["f"])("",!0),e.$store.getters.hasAdminAccess?(Object(n["u"])(),Object(n["g"])("div",u,[Object(n["j"])(f,{to:{name:"Photo List"}},{default:Object(n["H"])(()=>[l]),_:1})])):Object(n["f"])("",!0)])}var h={name:"HeaderNav",methods:{async logOut(){await this.$store.dispatch("logOut")}}},f=o("6b0d"),m=o.n(f);const g=m()(h,[["render",p]]);var b=g;const j=e=>(Object(n["x"])("data-v-ed94ee56"),e=e(),Object(n["v"])(),e),O={key:0,class:"notification_container"},w={key:0},v=["onClick"],y=j(()=>Object(n["h"])("small",null,"x",-1)),P=[y];function k(e,t,o,r,s,a){return Object(n["u"])(),Object(n["g"])("div",null,[s.currentNotifications.length>0?(Object(n["u"])(),Object(n["g"])("div",O,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(s.currentNotifications,e=>(Object(n["u"])(),Object(n["g"])("div",{key:e.timestamp,class:Object(n["p"])([e.color+"_color","single_noticiation"])},[Object(n["h"])("span",null,Object(n["D"])(e.content),1),e.taskId?(Object(n["u"])(),Object(n["g"])("span",w,Object(n["D"])(e.color),1)):Object(n["f"])("",!0),Object(n["h"])("span",{class:"close_button",onClick:t=>a.removeNotification(e)},P,8,v)],2))),128))])):Object(n["f"])("",!0)])}o("caad");var N={data(){return{show:!1,currentNotifications:new Array}},methods:{removeNotification(e){this.$store.commit("removeNotification",e),this.currentNotifications=this.currentNotifications.filter(t=>t!==e)}},computed:{latestNotification(){return this.$store.getters.latestNotification}},watch:{latestNotification(e){if(e&&!this.currentNotifications.includes(e)){this.currentNotifications.push(e);let t=e.showTime?e.showTime:4e3,o=this;setTimeout((function(){o.removeNotification(e)}),t)}}}};o("24d4");const L=m()(N,[["render",k],["__scopeId","data-v-ed94ee56"]]);var U=L,I={components:{Header:b,NotificationsManager:U},created(){this.$store.dispatch("checkLoggedIn")}};o("fa3b");const S=m()(I,[["render",r]]);var _=S,A=o("6605");function T(e,t,o,r,s,a){const c=Object(n["B"])("router-view");return Object(n["u"])(),Object(n["e"])(c)}var C=o("4ec3"),E=o("5502");const M=()=>localStorage.getItem("token"),R=e=>localStorage.setItem("token",e),$=()=>localStorage.removeItem("token"),B=Object(E["a"])({state:{token:"",isLoggedIn:!1,userProfile:null,notifications:new Array,backendTasks:new Array},getters:{hasAdminAccess(e){return e.userProfile&&e.userProfile.is_superuser&&e.userProfile.is_active},isLoggedIn(e){return e.userProfile&&e.isLoggedIn},latestNotification(e){if(e.notifications.length>0)return e.notifications[0]}},mutations:{setToken(e,t){e.token=t},setLoggedIn(e,t){e.isLoggedIn=t},setUserProfile(e,t){e.userProfile=t},addNotification(e,t){t.timestamp=Date.now(),e.notifications.unshift(t)},removeNotification(e,t){e.notifications=e.notifications.filter(e=>e!==t)}},actions:{async logIn(e,t){try{const o=await C["a"].logInGetToken(t.username,t.password),n=o.data.access_token;n?(R(n),e.commit("setToken",n),e.commit("setLoggedIn",!0),await e.dispatch("getUserProfile"),e.commit("addNotification",{content:"Logged in yo",color:"success"}),pe.push({name:"Home"})):await e.dispatch("logOut")}catch(o){console.log(o),$(),e.commit("setToken",""),e.commit("setLoggedIn",!1)}},async logOut(e){$(),e.commit("setToken",""),e.commit("setLoggedIn",!1),e.commit("addNotification",{content:"Logged out",color:"success"}),"/login"!==pe.currentRoute.path&&pe.push({name:"Login"})},async checkLoggedIn(e){if(!e.state.isLoggedIn){let o=e.state.token;if(!o){const t=M();t&&(e.commit("setToken",t),o=t)}if(o)try{e.commit("setLoggedIn",!0),await e.dispatch("getUserProfile")}catch(t){$(),e.commit("setToken",""),e.commit("setLoggedIn",!1)}}},async getUserProfile(e){try{const t=await C["a"].getMe(e.state.token);e.commit("setUserProfile",t.data)}catch(t){e.commit("addNotification",{content:"Couldn't fetch your profile, please login again.",color:"warning"})}},async updateUserProfile(e,t){try{const o=await C["a"].updateMe(e.state.token,t);e.commit("addNotification",{content:"Profile successfully updated",color:"success"}),e.commit("setUserProfile",o.data),pe.push("/profile/view")}catch(o){o.response.data.detail.map(t=>{e.commit("addNotification",{content:t.msg,color:"error"})})}},async changeUserPassword(e,t){try{await C["a"].updatePasswordMe(e.state.token,t),e.commit("addNotification",{content:"Password updated.",color:"success"}),pe.push("/profile/view")}catch(o){e.commit("addNotification",{content:"Couldn't update your password",color:"warning"})}},async passwordRecovery(e,t){try{C["a"].passwordRecovery(t),e.commit("addNotification",{content:"Password recovery email sent",color:"success"})}catch(o){e.commit("addNotification",{content:"Couldn't send recovery email",color:"warning"})}},async resetPassword(e,t){try{C["a"].resetPassword(t,t),e.commit("addNotification",{content:"Password successfully reset",color:"success"}),pe.push({name:"Login"})}catch(o){e.commit("addNotification",{color:"error",content:"Error resetting password"})}}},modules:{}});var H=B;const x=async(e,t,o)=>{H.getters.isLoggedIn?o():o({name:"Login"})};var D={beforeRouteEnter(e,t,o){x(e,t,o)},beforeRouteUpdate(e,t,o){x(e,t,o)}};const F=m()(D,[["render",T]]);var q=F;function G(e,t,o,r,s,a){const c=Object(n["B"])("router-view");return Object(n["u"])(),Object(n["e"])(c)}const J=async(e,t,o)=>{H.getters.hasAdminAccess?(console.log("else"),console.log(o),o()):o({name:"Home"})};var K={beforeRouteEnter(e,t,o){J(e,t,o)},beforeRouteUpdate(e,t,o){J(e,t,o)}};const V=m()(K,[["render",G]]);var z=V;const Q={class:"login"},W=Object(n["i"])("recover password");function X(e,t,o,r,s,a){const c=Object(n["B"])("router-link");return Object(n["u"])(),Object(n["g"])("div",Q,[Object(n["h"])("form",null,[Object(n["I"])(Object(n["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.email=e),name:"login",label:"Login",type:"text",placeholder:"Email"},null,512),[[n["F"],s.email]]),Object(n["I"])(Object(n["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e),name:"password",label:"Password",type:"password",placeholder:"Password"},null,512),[[n["F"],s.password]]),Object(n["h"])("button",{onClick:t[2]||(t[2]=Object(n["K"])((...e)=>a.submit&&a.submit(...e),["prevent"]))},"Login"),Object(n["j"])(c,{to:{name:"PasswordRecovery"}},{default:Object(n["H"])(()=>[W]),_:1})])])}var Y={name:"Login",data(){return{email:null,password:null}},methods:{submit(){this.$store.dispatch("logIn",{username:this.email,password:this.password})}}};const Z=m()(Y,[["render",X]]);var ee=Z;const te={class:""},oe=Object(n["h"])("h1",null,"öoawifoiqjwoeüfij",-1),ne=Object(n["i"])(" | "),re=Object(n["i"])(" | "),se=["onClick"];function ae(e,t,o,r,s,a){return Object(n["u"])(),Object(n["g"])("div",te,[Object(n["h"])("div",null,[oe,(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(s.allPhotos,e=>(Object(n["u"])(),Object(n["g"])("div",{key:e.id},[Object(n["h"])("span",null,Object(n["D"])(e.filename),1),ne,Object(n["h"])("span",null,Object(n["D"])(e.title),1),re,Object(n["h"])("a",{onClick:t=>a.deletePhoto(e.id)},"Delete",8,se)]))),128))])])}var ce={data(){return{allPhotos:[]}},methods:{deletePhoto(e){C["a"].deletePhoto(this.$store.state.token,e).then(t=>{"success"===t.data.state&&(this.allPhotos=this.allPhotos.filter(t=>t.id!=e))})}},mounted(){try{console.log(this.$store.state.token),C["a"].getAllPhotos(this.$store.state.token).then(e=>{this.allPhotos=e.data})}catch(e){this.$store.commit("addNotification",{content:"Couldn't fetch the list of photos.",color:"error"})}}};const ie=m()(ce,[["render",ae]]);var de=ie;const ue=[{path:"/login",name:"Login",component:ee},{path:"/password-recovery",name:"PasswordRecovery",component:()=>o.e("password-recovery").then(o.bind(null,"05eb"))},{path:"/admin",redirect:"admin/photos/list",component:z,children:[{name:"Photo List",path:"photos/list",component:de}]},{path:"/protected",redirect:"/protected/slideshow",component:q,children:[{name:"Slideshow",path:"/protected/slideshow",component:()=>o.e("protected/Slideshow").then(o.bind(null,"a0f0"))}]},{path:"/",name:"Home",redirect:"/protected/slideshow"},{path:"/upload",name:"Photo Upload",component:()=>o.e("UploadPhoto").then(o.bind(null,"2679"))}],le=Object(A["a"])({history:Object(A["b"])("/"),routes:ue});var pe=le;C["b"].interceptors.response.use((function(e){return e}),(function(e){if(console.log(e),!e.response)return Promise.reject(e);401===e.response.status&&H.dispatch("logOut")})),Object(n["d"])(_).use(H).use(pe).mount("#app")},"6e37":function(e,t,o){},"8c89":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return c}));const n="production";let r="",s="";"production"===n?(r="https://maurer-rautenberg.de/api/v1",s="ws://maurer-rautenberg.de/ws"):"staging"===n?(r="https:///api/v1",s="ws:///ws"):(r="http://127.0.0.1:8000/api/v1",s="ws://127.0.0.1:8000/ws");const a=s,c=r},b944:function(e,t,o){},fa3b:function(e,t,o){"use strict";o("6e37")}});
//# sourceMappingURL=app.1aafc6ec.js.map