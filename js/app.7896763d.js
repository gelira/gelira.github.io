(function(e){function n(n){for(var r,c,s=n[0],i=n[1],l=n[2],p=0,f=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(n);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,s=1;s<t.length;s++){var i=t[s];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},a=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[t("h1",{staticClass:"mr-2"},[e._v("Vue Teste")])]),t("v-main",{staticClass:"mt-8"},[t("v-container",{attrs:{fluid:""}},[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-spacer"),t("h1",[e._v("App Vue Teste")]),t("v-spacer")],1),t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-spacer"),t("v-btn",{attrs:{color:"success"},on:{click:function(n){e.snackbar=!0}}},[e._v("Click me")]),t("v-spacer")],1),e.showInstallButton?t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-spacer"),t("v-btn",{attrs:{color:"primary"},on:{click:e.install}},[e._v("Install")]),t("v-spacer")],1):e._e()],1),t("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(n){var r=n.attrs;return[t("v-btn",e._b({attrs:{color:"pink",text:"",icon:""},on:{click:function(n){e.snackbar=!1}}},"v-btn",r,!1),[t("v-icon",[e._v("mdi-close")])],1)]}}]),model:{value:e.snackbar,callback:function(n){e.snackbar=n},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" ")])],1)],1)},a=[],c=t("1da1"),s=(t("96cf"),{name:"App",data:function(){return{snackbar:!1,text:"Notificação",deferredPrompt:null,showInstallButton:!1}},created:function(){var e=this;window.addEventListener("beforeinstallprompt",(function(n){n.preventDefault(),e.deferredPrompt=n,e.showInstallButton=!0,console.log("'beforeinstallprompt' event was fired.")})),window.addEventListener("appinstalled",(function(){e.showInstallButton=!1,e.deferredPrompt=null,console.log("PWA was installed")}))},methods:{install:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.showInstallButton=!1,e.deferredPrompt.prompt(),n.next=4,e.deferredPrompt.userChoice;case 4:t=n.sent,r=t.outcome,console.log("User response to the install prompt: ".concat(r)),e.deferredPrompt=null;case 8:case"end":return n.stop()}}),n)})))()}}}),i=s,l=t("2877"),u=t("6544"),p=t.n(u),f=t("7496"),d=t("40dc"),v=t("8336"),b=t("a523"),h=t("132d"),w=t("f6c4"),g=t("0fd9"),m=t("2db4"),y=t("2fa4"),k=Object(l["a"])(i,o,a,!1,null,null,null),_=k.exports;p()(k,{VApp:f["a"],VAppBar:d["a"],VBtn:v["a"],VContainer:b["a"],VIcon:h["a"],VMain:w["a"],VRow:g["a"],VSnackbar:m["a"],VSpacer:y["a"]});var j=t("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var O=t("f309");r["a"].use(O["a"]);var P=new O["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:P,render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.7896763d.js.map