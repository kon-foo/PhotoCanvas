(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["protected/Slideshow"],{"2b1d":function(o,e,t){},"84ea":function(o,e,t){"use strict";t("2b1d")},a0f0:function(o,e,t){"use strict";t.r(e);var s=t("7a23");const n=["src"],i={key:0,class:"newPhotoContainer"},h=["src"];function c(o,e,t,c,a,r){return Object(s["u"])(),Object(s["g"])(s["a"],null,[Object(s["h"])("div",{class:"outer-wrap",style:Object(s["q"])({gridTemplateRows:"repeat("+this.rows+", 1fr)",gridTemplateColumns:"repeat("+this.cols+", 1fr)"})},[(Object(s["u"])(!0),Object(s["g"])(s["a"],null,Object(s["A"])(a.photoGridItems,o=>(Object(s["u"])(),Object(s["g"])("div",{class:"griditem",key:o.id},[Object(s["j"])(s["b"],{name:"fade"},{default:Object(s["J"])(()=>[o.photo?(Object(s["u"])(),Object(s["g"])("img",{src:"/uploaded/"+o.photo.filename,key:o.photo.filename,style:Object(s["q"])({maxHeight:o.photo.maxHeight+"%",maxWidth:o.photo.maxWidth+"%",marginTop:o.photo.marginTop+"px",marginLeft:o.photo.marginLeft+"px",zIndex:o.photo.zIndex})},null,12,n)):Object(s["f"])("",!0)]),_:2},1024)]))),128))],4),Object(s["j"])(s["b"],{name:"fade"},{default:Object(s["J"])(()=>[a.displayedNewPhoto?(Object(s["u"])(),Object(s["g"])("div",i,[Object(s["h"])("img",{src:"/uploaded/"+a.displayedNewPhoto.filename,style:Object(s["q"])({zIndex:a.zIndex+100})},null,12,h)])):Object(s["f"])("",!0)]),_:1})],64)}t("caad");var a=t("4ec3"),r=t("8c89"),l={name:"Home",data(){return{photos:[],displayedPhotos:[],newPhotos:[],displayedNewPhoto:null,readyForNewPhoto:!0,photoGridItems:[],cols:0,rows:0,zIndex:1}},watch:{newPhotos:{handler(o,e){if(this.readyForNewPhoto){this.readyForNewPhoto=!1;let o=this;o.displayedNewPhoto=e[0],setTimeout(()=>{o.displayedNewPhoto=null,setTimeout(()=>{o.readyForNewPhoto=!0,o.newPhotos.shift()},3e3)},6e3)}},deep:!0}},methods:{connectWebSocket(){let o=this;o.socket=new WebSocket(r["b"]+"/new_photos"),o.socket.onmessage=function(e){let t=JSON.parse(e.data);"add"===t.action?(o.photos.push(t.photo),o.newPhotos.push(t.photo),console.log(o.newPhotos),o.$store.commit("addNotification",{content:"Neues Foto",color:"success"})):"delete"===t.action?(o.photos=o.photos.filter(o=>o.filename!=t.photo.filename),o.$store.commit("addNotification",{content:"Ein Foto wurde entfernt.",color:"success"})):console.log('Websocket received unknown action "'+t.action+'".')},o.socket.onclose=function(){o.$store.commit("addNotification",{content:"Verbindung zum Server verloren.",color:"error",showTime:2e3}),console.log("WebSocket connection is closed. Attem,pting reconnect."),setTimeout((function(){o.connectWebSocket()}),1e3)},o.socket.onerror=function(e){console.log("WebSocket encountered error: "+e.message+"Closing Websocket."),o.socket.close()}},replacePhoto(o){let e=o.photo,t=Math.floor(Math.random()*this.photos.length),s=this.photos[t];if(this.displayedPhotos.includes(s.filename)||s===e)n=1;else{s.marginTop=Math.floor(140*Math.random()-70),s.marginLeft=Math.floor(140*Math.random()-70),s.maxWidth=Math.floor(21*Math.random()+100),s.maxHeight=Math.floor(21*Math.random()+100),s.zIndex=this.zIndex,this.zIndex++,o.photo=s,this.displayedPhotos.push(s.filename),e&&this.displayedPhotos.splice(this.displayedPhotos.indexOf(e.filename),1);var n=Math.floor(11*Math.random()+10)}let i=this;setTimeout((function(){i.replacePhoto(o)}),1e3*n)},calcDimensions(){this.photoGridItems=[];let o=window.innerWidth,e=window.innerHeight;this.cols=Math.floor(o/480),this.rows=Math.floor(e/480),0===this.cols&&(this.cols=1),0===this.rows&&(this.rows=1);for(let t=0;t<this.cols;t++)for(let o=0;o<this.rows;o++)this.photoGridItems.push({photo:null})}},mounted(){this.calcDimensions(),a["a"].getAllPhotos(this.$store.state.token).then(o=>{this.photos=o.data}).then(()=>{this.connectWebSocket()}).finally(()=>{this.photoGridItems.forEach(o=>{this.replacePhoto(o)})})},beforeUnmount(){this.socket.close()}},d=(t("84ea"),t("6b0d")),p=t.n(d);const m=p()(l,[["render",c]]);e["default"]=m}}]);
//# sourceMappingURL=Slideshow.6ff4a3c2.js.map