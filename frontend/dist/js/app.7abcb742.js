(function(e){function t(t){for(var n,r,c=t[0],i=t[1],u=t[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&l.push(s[r][0]),s[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},s={app:0},a=[];function c(e){return i.p+"js/"+({UploadPhoto:"UploadPhoto","admin-usercreate":"admin-usercreate","admin/allPhotos":"admin/allPhotos","password-recovery":"password-recovery","protected/Slideshow":"protected/Slideshow"}[e]||e)+"."+{UploadPhoto:"e3a705f4","admin-usercreate":"cbc195af","admin/allPhotos":"0db1336d","password-recovery":"5d2bc5e9","protected/Slideshow":"4191d369"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o={UploadPhoto:1,"admin/allPhotos":1,"protected/Slideshow":1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({UploadPhoto:"UploadPhoto","admin-usercreate":"admin-usercreate","admin/allPhotos":"admin/allPhotos","password-recovery":"password-recovery","protected/Slideshow":"protected/Slideshow"}[e]||e)+"."+{UploadPhoto:"1bdb21f3","admin-usercreate":"31d6cfe0","admin/allPhotos":"694b6d8b","password-recovery":"31d6cfe0","protected/Slideshow":"070d8a20"}[e]+".css",s=i.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===s))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===n||d===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete r[e],p.parentNode.removeChild(p),o(a)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,o){n=s[e]=[t,o]}));t.push(n[2]=a);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var o=s[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}s[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"005d":function(e,t,o){},"1fac":function(e,t,o){"use strict";o("e680")},"4ec3":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return i}));var n=o("bc3a"),r=o.n(n),s=o("8c89");const a=r.a.create({baseURL:s["a"],timeout:5e3});function c(e){return{headers:{Authorization:"Bearer "+e}}}const i={async logInGetToken(e,t){const o=new URLSearchParams;return o.append("username",e),o.append("password",t),a.post("/login/access-token",o)},async getMe(e){return a.get("/users/me",c(e))},async updateMe(e,t){return a.put("/users/me",t,c(e))},async updatePasswordMe(e,t){return a.put("/users/me/password",t,c(e))},async signUp(e){return a.post("/users/signup",e)},async getUsers(e){return a.get("/users",c(e))},async getUser(e,t){return a.get("/users/"+t,c(e))},async createUser(e,t){return a.post("/users",t,c(e))},async updateUser(e,t,o){return a.put("/users/"+t,o,c(e))},async deleteUser(e,t){return a.delete("/users/"+t,c(e))},async passwordRecovery(e){return a.post("/password-recovery/"+e)},async resetPassword(e){return a.post("/reset-password",e)},async uploadPhoto(e,t){let o=new FormData;return o.append("photo",e,e.name),o.append("title",t),a.post("/upload",o,{headers:{"Content-Type":"multipart/form-data"}})},async getAllPhotos(e){return a.get("/photos",c(e))},async deletePhoto(e,t){return a.delete("/photos/"+t,c(e))},async rotatePhoto(e,t){return a.get("/photos/"+t+"/rotate",c(e))}}},"52f0":function(e,t,o){"use strict";o("69a9")},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const r=Object(n["h"])("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💐</text></svg>"},null,-1),s=Object(n["h"])("div",{class:"credits"},[Object(n["i"])(" by "),Object(n["h"])("a",{href:"https://luona.dev"},"[luona]"),Object(n["i"])(" development ")],-1);function a(e,t,o,a,c,i){const u=Object(n["B"])("Header"),d=Object(n["B"])("router-view"),l=Object(n["B"])("NotificationsManager");return Object(n["u"])(),Object(n["g"])(n["a"],null,[r,Object(n["j"])(u),Object(n["j"])(d),Object(n["j"])(l),s],64)}const c={id:"header"},i={class:""},u=Object(n["i"])("Upload Photo"),d={key:0},l=Object(n["i"])("Slideshow"),p={key:1},m=Object(n["i"])("All Photos");function h(e,t,o,r,s,a){const h=Object(n["B"])("router-link");return Object(n["u"])(),Object(n["g"])("div",c,[Object(n["h"])("div",i,[Object(n["j"])(h,{to:{name:"Photo Upload"}},{default:Object(n["I"])(()=>[u]),_:1})]),e.$store.getters.isLoggedIn?(Object(n["u"])(),Object(n["g"])("div",d,[Object(n["h"])("span",null,"Logged in as: "+Object(n["D"])(e.$store.state.userProfile.email),1),Object(n["h"])("button",{onClick:t[0]||(t[0]=(...e)=>a.logOut&&a.logOut(...e))},"Log Out"),Object(n["j"])(h,{to:{name:"Slideshow"}},{default:Object(n["I"])(()=>[l]),_:1})])):Object(n["f"])("",!0),e.$store.getters.hasAdminAccess?(Object(n["u"])(),Object(n["g"])("div",p,[Object(n["j"])(h,{to:{name:"Photo List"}},{default:Object(n["I"])(()=>[m]),_:1})])):Object(n["f"])("",!0)])}var f={name:"HeaderNav",methods:{async logOut(){await this.$store.dispatch("logOut")}}},b=o("6b0d"),g=o.n(b);const O=g()(f,[["render",h]]);var j=O;const w=e=>(Object(n["x"])("data-v-4c26bc07"),e=e(),Object(n["v"])(),e),v={key:0,class:"notification_container"},y={key:0},P=["onClick"],k=w(()=>Object(n["h"])("small",null,"x",-1)),L=[k];function U(e,t,o,r,s,a){return Object(n["u"])(),Object(n["g"])("div",null,[s.currentNotifications.length>0?(Object(n["u"])(),Object(n["g"])("div",v,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(s.currentNotifications,e=>(Object(n["u"])(),Object(n["g"])("div",{key:e.timestamp,class:Object(n["p"])([e.color+"_color","single_noticiation"])},[Object(n["h"])("span",null,Object(n["D"])(e.content),1),e.taskId?(Object(n["u"])(),Object(n["g"])("span",y,Object(n["D"])(e.color),1)):Object(n["f"])("",!0),Object(n["h"])("span",{class:"close_button",onClick:t=>a.removeNotification(e)},L,8,P)],2))),128))])):Object(n["f"])("",!0)])}o("caad");var N={data(){return{show:!1,currentNotifications:new Array}},methods:{removeNotification(e){this.$store.commit("removeNotification",e),this.currentNotifications=this.currentNotifications.filter(t=>t!==e)}},computed:{latestNotification(){return this.$store.getters.latestNotification}},watch:{latestNotification(e){if(e&&!this.currentNotifications.includes(e)){this.currentNotifications.push(e);let t=e.showTime?e.showTime:4e3,o=this;setTimeout((function(){o.removeNotification(e)}),t)}}}};o("e66e");const I=g()(N,[["render",U],["__scopeId","data-v-4c26bc07"]]);var _=I,S={components:{Header:j,NotificationsManager:_},created(){this.$store.dispatch("checkLoggedIn")},mounted(){document.title="Merle & Jan"}};o("52f0");const A=g()(S,[["render",a]]);var C=A,T=o("6605");function $(e,t,o,r,s,a){const c=Object(n["B"])("router-view");return Object(n["u"])(),Object(n["e"])(c)}var x=o("4ec3"),E=o("5502");const M=()=>localStorage.getItem("token"),B=e=>localStorage.setItem("token",e),R=()=>localStorage.removeItem("token"),H=Object(E["a"])({state:{token:"",isLoggedIn:!1,userProfile:null,notifications:new Array,backendTasks:new Array},getters:{hasAdminAccess(e){return e.userProfile&&e.userProfile.is_superuser&&e.userProfile.is_active},isLoggedIn(e){return e.userProfile&&e.isLoggedIn},latestNotification(e){if(e.notifications.length>0)return e.notifications[0]}},mutations:{setToken(e,t){e.token=t},setLoggedIn(e,t){e.isLoggedIn=t},setUserProfile(e,t){e.userProfile=t},addNotification(e,t){t.timestamp=Date.now(),e.notifications.unshift(t)},removeNotification(e,t){e.notifications=e.notifications.filter(e=>e!==t)}},actions:{async logIn(e,t){try{const o=await x["a"].logInGetToken(t.username,t.password),n=o.data.access_token;n?(B(n),e.commit("setToken",n),e.commit("setLoggedIn",!0),await e.dispatch("getUserProfile"),e.commit("addNotification",{content:"Eingeloggt.",color:"success"}),we.push({name:"Home"})):await e.dispatch("logOut")}catch(o){e.commit("addNotification",{content:o.response.data.detail,color:"warning"}),R(),e.commit("setToken",""),e.commit("setLoggedIn",!1)}},async logOut(e){R(),e.commit("setUserProfile",null),e.commit("setToken",""),e.commit("setLoggedIn",!1),e.commit("addNotification",{content:"Ausgeloggt",color:"success"}),we.push({name:"Home"})},async checkLoggedIn(e){if(!e.state.isLoggedIn){let o=e.state.token;if(!o){const t=M();t&&(e.commit("setToken",t),o=t)}if(o)try{e.commit("setLoggedIn",!0),e.commit("setUserProfile",{email:"...loading",is_superuser:!0,is_active:!0}),await e.dispatch("getUserProfile")}catch(t){R(),e.commit("setToken",""),e.commit("setLoggedIn",!1)}}},async getUserProfile(e){try{const t=await x["a"].getMe(e.state.token);e.commit("setUserProfile",t.data)}catch(t){e.commit("addNotification",{content:"Couldn't fetch your profile, please login again.",color:"warning"})}},async updateUserProfile(e,t){try{const o=await x["a"].updateMe(e.state.token,t);e.commit("addNotification",{content:"Profile successfully updated",color:"success"}),e.commit("setUserProfile",o.data),we.push("/profile/view")}catch(o){o.response.data.detail.map(t=>{e.commit("addNotification",{content:t.msg,color:"error"})})}},async changeUserPassword(e,t){try{await x["a"].updatePasswordMe(e.state.token,t),e.commit("addNotification",{content:"Password updated.",color:"success"}),we.push("/profile/view")}catch(o){e.commit("addNotification",{content:"Couldn't update your password",color:"warning"})}},async passwordRecovery(e,t){try{x["a"].passwordRecovery(t),e.commit("addNotification",{content:"Password recovery email sent",color:"success"})}catch(o){e.commit("addNotification",{content:"Couldn't send recovery email",color:"warning"})}},async resetPassword(e,t){try{x["a"].resetPassword(t,t),e.commit("addNotification",{content:"Password successfully reset",color:"success"}),we.push({name:"Login"})}catch(o){e.commit("addNotification",{color:"error",content:"Error resetting password"})}}},modules:{}});var D=H;const F=async(e,t,o)=>{D.getters.isLoggedIn?o():o({name:"Login"})};var J={beforeRouteEnter(e,t,o){F(e,t,o)},beforeRouteUpdate(e,t,o){F(e,t,o)}};const G=g()(J,[["render",$]]);var z=G;function q(e,t,o,r,s,a){const c=Object(n["B"])("router-view");return Object(n["u"])(),Object(n["e"])(c)}const V=async(e,t,o)=>{D.getters.hasAdminAccess?o():o({name:"Home"})};var Z={beforeRouteEnter(e,t,o){V(e,t,o)},beforeRouteUpdate(e,t,o){V(e,t,o)}};const K=g()(Z,[["render",q]]);var Q=K;const W={class:"outer-wrap"},X={class:"inner-wrap"},Y={class:"content"},ee=["disabled"];function te(e,t,o,r,s,a){return Object(n["u"])(),Object(n["g"])("div",W,[Object(n["h"])("div",X,[Object(n["h"])("form",Y,[Object(n["J"])(Object(n["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.email=e),name:"login",label:"Login",type:"text",placeholder:"Email"},null,512),[[n["G"],s.email]]),Object(n["J"])(Object(n["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e),name:"password",label:"Password",type:"password",placeholder:"Password"},null,512),[[n["G"],s.password]]),Object(n["h"])("button",{id:"login-button",disabled:s.working,onClick:t[2]||(t[2]=Object(n["L"])((...e)=>a.submit&&a.submit(...e),["prevent"]))},"Login",8,ee)])])])}var oe={name:"Login",data(){return{email:null,password:null,working:!1}},methods:{submit(){this.working=!0,this.$store.dispatch("logIn",{username:this.email,password:this.password}),this.working=!1}}};o("1fac");const ne=g()(oe,[["render",te],["__scopeId","data-v-1e58c160"]]);var re=ne;const se=e=>(Object(n["x"])("data-v-be30b584"),e=e(),Object(n["v"])(),e),ae={class:"outer-wrap"},ce={class:"inner-wrap"},ie={class:"content"},ue={key:0,class:"abschnitt"},de={key:1,class:"abschnitt"},le=se(()=>Object(n["h"])("span",null,"Nicht eingeloggt",-1)),pe={class:"abschnitt"},me={key:2,class:"abschnitt"};function he(e,t,o,r,s,a){return Object(n["u"])(),Object(n["g"])("div",ae,[Object(n["h"])("div",ce,[Object(n["h"])("div",ie,[e.$store.getters.isLoggedIn?(Object(n["u"])(),Object(n["g"])("div",ue,[Object(n["h"])("span",null,"Eingeloggt als: "+Object(n["D"])(e.$store.state.userProfile.email),1),Object(n["h"])("button",{onClick:t[0]||(t[0]=(...e)=>a.logOut&&a.logOut(...e))},"Log Out")])):(Object(n["u"])(),Object(n["g"])("div",de,[le,Object(n["h"])("button",{onClick:t[1]||(t[1]=t=>e.$router.push({name:"Login"}))},"Zum Login")])),Object(n["h"])("div",pe,[Object(n["h"])("button",{onClick:t[2]||(t[2]=t=>e.$router.push({name:"Photo Upload"}))},"Foto hochladen🖼"),Object(n["h"])("button",{onClick:t[3]||(t[3]=t=>e.$router.push({name:"Slideshow"}))},"Zur Fotowand (Passwort benötigt)")]),e.$store.getters.hasAdminAccess?(Object(n["u"])(),Object(n["g"])("div",me,[Object(n["h"])("button",{onClick:t[4]||(t[4]=t=>e.$router.push({name:"Photo List"}))},"Fotos löschen"),Object(n["h"])("button",{onClick:t[5]||(t[5]=t=>e.$router.push({name:"User List"}))},"User hinzufügen")])):Object(n["f"])("",!0)])])])}var fe={name:"Home",methods:{async logOut(){await this.$store.dispatch("logOut")}}};o("f9a1");const be=g()(fe,[["render",he],["__scopeId","data-v-be30b584"]]);var ge=be;const Oe=[{path:"/login",name:"Login",component:re},{path:"/password-recovery",name:"PasswordRecovery",component:()=>o.e("password-recovery").then(o.bind(null,"05eb"))},{path:"/admin",redirect:"admin/photos/list",component:Q,children:[{name:"Photo List",path:"photos/list",component:()=>o.e("admin/allPhotos").then(o.bind(null,"f1dc"))},{name:"User List",path:"users/list",component:()=>o.e("admin/allPhotos").then(o.bind(null,"9f1a"))},{name:"Create User",path:"users/create",component:()=>o.e("admin-usercreate").then(o.bind(null,"1513"))}]},{path:"/protected",redirect:"/protected/slideshow",component:z,children:[{name:"Slideshow",path:"/protected/slideshow",component:()=>o.e("protected/Slideshow").then(o.bind(null,"a0f0"))}]},{path:"/",name:"Home",component:ge},{path:"/upload",name:"Photo Upload",component:()=>o.e("UploadPhoto").then(o.bind(null,"2679"))}],je=Object(T["a"])({history:Object(T["b"])("/"),routes:Oe});var we=je;x["b"].interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Object(n["d"])(C).use(D).use(we).mount("#app")},"69a9":function(e,t,o){},"8c89":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return c}));const n="production";let r="",s="";"production"===n?(r="https://maurer-rautenberg.de/api/v1",s="wss://maurer-rautenberg.de/ws"):"staging"===n?(r="https:///api/v1",s="wss:///ws"):(r="http://127.0.0.1:8000/api/v1",s="ws://127.0.0.1:8000/ws");const a=s,c=r},cea7:function(e,t,o){},e66e:function(e,t,o){"use strict";o("cea7")},e680:function(e,t,o){},f9a1:function(e,t,o){"use strict";o("005d")}});
//# sourceMappingURL=app.7abcb742.js.map