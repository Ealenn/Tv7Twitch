(function(e){function t(t){for(var a,o,i=t[0],u=t[1],s=t[2],l=0,b=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"61868a4b"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",s.name="ChunkLoadError",s.type=a,s.request=c,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Tv7Twitch/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0b12":function(e,t,n){},"49eb":function(e,t,n){},"4a88":function(e,t,n){"use strict";n("0b12")},"5f35":function(e,t,n){e.exports={publicPath:"/Tv7Twitch",outputDir:"dist",css:{sourceMap:!0}}},9491:function(e,t,n){},a701:function(e,t,n){"use strict";n("49eb")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,c,o){var i=Object(a["y"])("NavBar"),u=Object(a["y"])("router-view");return Object(a["q"])(),Object(a["e"])("div",null,[Object(a["h"])(i),Object(a["h"])(u)])}var c=n("d4ec"),o=n("bee2"),i=n("262e"),u=n("2caf"),s=n("9ab4"),l=n("ce1f"),d={id:"nav"};function b(e,t,n,r,c,o){var i=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["e"])("div",d,[(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(this.navItems,(function(e,t){return Object(a["q"])(),Object(a["d"])(i,{to:e.Path,key:t},{default:Object(a["D"])((function(){return[Object(a["g"])(Object(a["A"])(e.Title)+"   ",1)]})),_:2},1032,["to"])})),128))])}var f=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.navItems=[{Title:"Home",Icon:"schedule",Path:"/"},{Title:"About",Icon:"info-circle",Path:"/about"}],e}return n}(l["b"]);f=Object(s["a"])([Object(l["a"])({})],f);var p=f,v=(n("d034"),n("d959")),h=n.n(v);const m=h()(p,[["render",b],["__scopeId","data-v-b9055868"]]);var O=m,j=n("b85c"),y=n("1da1"),g=(n("96cf"),n("a4d3"),n("e01a"),n("d3b7"),n("99af"),n("b0c0"),n("5502")),w=n("bc3a"),x=n.n(w),k=n("5f35"),P=x.a.create({timeout:2e3,baseURL:k.publicPath}),_=Symbol(),T=Object(g["a"])({state:{loading:!0,events:[],channels:[]},mutations:{addEvent:function(e,t){e.events.push(t)},addChannel:function(e,t){e.channels.push(t)},purge:function(e){e.events=[],e.channels=[]},setLoading:function(e,t){e.loading=t}},actions:{refreshEvents:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,c,o,i,u,s,l,d,b,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("setLoading",!0),t.commit("purge"),e.next=4,P.get("/data/manifest.json");case 4:n=e.sent,a=n.data,r=Object(j["a"])(a.files),e.prev=7,r.s();case 9:if((c=r.n()).done){e.next=20;break}return o=c.value,e.next=13,P.get("/data/".concat(o));case 13:i=e.sent,u=i.data,t.commit("addChannel",u.channel),s=Object(j["a"])(u.schedulers);try{for(s.s();!(l=s.n()).done;)b=l.value,f={id:b.id,groupId:u.channel.id,start:new Date(b.start_time),end:b.end_time&&b.end_time.length>0?new Date(b.end_time):void 0,title:"".concat(u.channel.display_name).concat(null!==(d=b.category)&&void 0!==d&&d.name?" ("+b.category.name+")":"",": ").concat(b.title),classNames:[u.channel.login],extendedProps:{channel:u.channel,stream:b}},t.commit("addEvent",f)}catch(p){s.e(p)}finally{s.f()}case 18:e.next=9;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](7),r.e(e.t0);case 25:return e.prev=25,r.f(),e.finish(25);case 28:t.commit("setLoading",!1);case 29:case"end":return e.stop()}}),e,null,[[7,22,25,28]])})));function t(t){return e.apply(this,arguments)}return t}()},modules:{}});function C(){return Object(g["b"])(_)}var S=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(o["a"])(n,[{key:"mounted",value:function(){var e=C();e.dispatch("refreshEvents")}}]),n}(l["b"]);S=Object(s["a"])([Object(l["a"])({components:{NavBar:O}})],S);var L=S;n("a701");const q=h()(L,[["render",r]]);var E=q,I=(n("3ca3"),n("ddb0"),n("6c02")),M={class:"home"};function D(e,t,n,r,c,o){var i=Object(a["y"])("Calendar");return Object(a["q"])(),Object(a["e"])("div",M,[Object(a["h"])(i)])}var A={class:"calendar"};function G(e,t,n,r,c,o){var i=Object(a["y"])("FullCalendar");return Object(a["q"])(),Object(a["e"])("div",A,[Object(a["h"])(i,{options:this.calendarOptions},null,8,["options"])])}n("ac1f"),n("5319"),n("5574");var N=n("3671"),R=n("7821"),B=n.n(R),F=n("3cdd"),H=n("3e32"),J=n("e44e"),W=n("a20c"),U=n("7188"),V=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.calendarOptions={plugins:[F["b"],H["a"],J["a"],W["a"]],initialView:"dayGridMonth",locales:B.a,locale:"fr",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},nowIndicator:!0,navLinks:!0,events:e.eventsState,eventContent:e.eventContent},e}return Object(o["a"])(n,[{key:"eventContent",value:function(e){var t,n=e.timeText,a=e.event;n=n.replace(" h",":00");var r='<img src="'.concat(a.extendedProps.channel.profile_image_url,'" style="width: 20px;height: 20px;border-radius: 50%;" />'),c="".concat(n," - ").concat(a.extendedProps.channel.display_name," ").concat(null!==(t=a.extendedProps.stream.category)&&void 0!==t&&t.name?" ("+a.extendedProps.stream.category.name+")":""),o=Object(U["a"])(a.extendedProps.stream.title);return{html:'\n        <span style="overflow: hidden;display:block;">\n          <div>\n            '.concat(r," <b>").concat(c,"</b> ").concat(o,"\n          </div>\n        </span>")}}},{key:"eventsState",get:function(){var e=C();return e.state.events}},{key:"channelsState",get:function(){var e=C();return e.state.channels}},{key:"isLoadingState",get:function(){var e=C();return e.state.loading}}]),n}(l["b"]);V=Object(s["a"])([Object(l["a"])({components:{FullCalendar:N["a"]}})],V);var z=V;n("4a88");const K=h()(z,[["render",G]]);var Q=K,X=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(l["b"]);X=Object(s["a"])([Object(l["a"])({components:{Calendar:Q}})],X);var Y=X;const Z=h()(Y,[["render",D]]);var $=Z,ee=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],te=Object(I["a"])({history:Object(I["b"])("/Tv7Twitch/"),routes:ee}),ne=te;Object(a["c"])(E).use(T,_).use(ne).mount("#app")},d034:function(e,t,n){"use strict";n("9491")}});
//# sourceMappingURL=app.69b0b392.js.map