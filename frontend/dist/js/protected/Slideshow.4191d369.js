(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["protected/Slideshow"],{"2c38":function(o,e,t){},"84ed":function(o,e,t){"use strict";t("2c38")},a0f0:function(o,e,t){"use strict";t.r(e);var n=t("7a23");const s=["src"],i={key:0,class:"newPhotoContainer"},c=["src"];function h(o,e,t,h,a,r){return Object(n["u"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",{class:"outer-wrap",style:Object(n["q"])({gridTemplateRows:"repeat("+this.rows+", 1fr)",gridTemplateColumns:"repeat("+this.cols+", 1fr)"})},[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(a.photoGridItems,o=>(Object(n["u"])(),Object(n["g"])("div",{class:"griditem",key:o.id},[Object(n["j"])(n["b"],{name:"fade"},{default:Object(n["I"])(()=>[o.photo?(Object(n["u"])(),Object(n["g"])("img",{src:"/uploaded/"+o.photo.filename,key:o.photo.filename,style:Object(n["q"])({maxHeight:o.photo.maxHeight+"%",maxWidth:o.photo.maxWidth+"%",marginTop:o.photo.marginTop+"px",marginLeft:o.photo.marginLeft+"px",zIndex:o.photo.zIndex})},null,12,s)):Object(n["f"])("",!0)]),_:2},1024)]))),128))],4),Object(n["j"])(n["b"],{name:"fade"},{default:Object(n["I"])(()=>[a.newPhoto?(Object(n["u"])(),Object(n["g"])("div",i,[Object(n["h"])("img",{src:"/uploaded/"+a.newPhoto.filename,style:Object(n["q"])({zIndex:a.zIndex+100})},null,12,c)])):Object(n["f"])("",!0)]),_:1})],64)}t("caad");var a=t("4ec3"),r=t("8c89"),l={name:"Home",data(){return{photos:[],displayedPhotos:[],newPhoto:null,photoGridItems:[],cols:0,rows:0,zIndex:1}},methods:{connectWebSocket(){let o=this;o.socket=new WebSocket(r["b"]+"/new_photos"),o.socket.onmessage=function(e){let t=JSON.parse(e.data);"add"===t.action?(o.photos.push(t.photo),o.newPhoto=t.photo,setTimeout(()=>{o.removeNewPhoto()},6e3),o.$store.commit("addNotification",{content:"Neues Foto",color:"success"})):"delete"===t.action?(o.photos=o.photos.filter(o=>o.filename!=t.photo.filename),o.$store.commit("addNotification",{content:"Ein Foto wurde entfernt.",color:"success"})):console.log('Websocket received unknown action "'+t.action+'".')},o.socket.onclose=function(){o.$store.commit("addNotification",{content:"Verbindung zum Server verloren.",color:"error",showTime:2e3}),console.log("WebSocket connection is closed. Attem,pting reconnect."),setTimeout((function(){o.connectWebSocket()}),1e3)},o.socket.onerror=function(e){console.log("WebSocket encountered error: "+e.message+"Closing Websocket."),o.socket.close()}},removeNewPhoto(){this.newPhoto=null},replacePhoto(o){console.log(o);let e=o.photo,t=Math.floor(Math.random()*this.photos.length),n=this.photos[t];if(this.displayedPhotos.includes(n.filename)||n===e)s=1;else{n.marginTop=Math.floor(140*Math.random()-70),n.marginLeft=Math.floor(140*Math.random()-70),n.maxWidth=Math.floor(21*Math.random()+100),n.maxHeight=Math.floor(21*Math.random()+100),n.zIndex=this.zIndex,this.zIndex++,o.photo=n,this.displayedPhotos.push(n.filename),e&&this.displayedPhotos.splice(this.displayedPhotos.indexOf(e.filename),1);var s=Math.floor(11*Math.random()+10)}let i=this;setTimeout((function(){i.replacePhoto(o)}),1e3*s)},calcDimensions(){this.photoGridItems=[];let o=window.innerWidth,e=window.innerHeight;this.cols=Math.floor(o/480),this.rows=Math.floor(e/480),0===this.cols&&(this.cols=1),0===this.rows&&(this.rows=1);for(let t=0;t<this.cols;t++)for(let o=0;o<this.rows;o++)this.photoGridItems.push({photo:null})}},mounted(){this.calcDimensions(),a["a"].getAllPhotos(this.$store.state.token).then(o=>{this.photos=o.data}).then(()=>{this.connectWebSocket()}).finally(()=>{this.photoGridItems.forEach(o=>{this.replacePhoto(o)})})},beforeUnmount(){this.socket.close()}},d=(t("84ed"),t("6b0d")),m=t.n(d);const p=m()(l,[["render",h]]);e["default"]=p}}]);
//# sourceMappingURL=Slideshow.4191d369.js.map