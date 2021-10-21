(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5774:function(e,n,t){"use strict";t.d(n,{h:function(){return u}});var r=t(9008),i=t(1664),a=t(5602),c=t(682),s=t(4456),o=t(5893),u=function(e){var n=e.title,t=e.activeKey;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:n}),(0,o.jsx)("meta",{name:"description",content:"Vitals Recording"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,o.jsx)("meta",{name:"theme-color",content:"#bc7100"})]}),(0,o.jsx)(a.Z,{bg:"dark",expand:"md",fixed:"top",variant:"dark",className:"card-1",children:(0,o.jsxs)(c.Z,{fluid:!0,children:[(0,o.jsx)(a.Z.Brand,{children:"Vitals Recorder"}),(0,o.jsx)(a.Z.Toggle,{"aria-controls":"navbar-toggleable"}),(0,o.jsx)(a.Z.Collapse,{id:"navbar-toggleable",children:(0,o.jsxs)(s.Z,{activeKey:t,className:"justify-content-end mr-auto",children:[(0,o.jsx)(i.default,{href:"/",passHref:!0,children:(0,o.jsx)(s.Z.Link,{eventKey:"home",children:"Home"})}),(0,o.jsx)(i.default,{href:"/plot",passHref:!0,children:(0,o.jsx)(s.Z.Link,{eventKey:"plot",children:"Plot"})}),(0,o.jsx)(i.default,{href:"/settings",passHref:!0,children:(0,o.jsx)(s.Z.Link,{eventKey:"settings",children:"Settings"})})]})})]})})]})}},1242:function(e,n,t){"use strict";t.d(n,{u:function(){return r},i:function(){return c}});var r,i=t(8216),a=t(5997);!function(e){e[e.tempIsCelcius=0]="tempIsCelcius"}(r||(r={}));var c=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,null,[{key:"get",value:function(e,n){var t;return null!==(t=localStorage.getItem(r[e]))&&void 0!==t?t:n}},{key:"put",value:function(e,n){return localStorage.setItem(r[e],n)}},{key:"clear",value:function(){return localStorage.clear()}}]),e}()},4554:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return M}});var r=t(5774),i=t(2809),a=t(266),c=t(809),s=t.n(c),o=t(7294),u=t(640),l=t(4051),d=t(1555),f=t(2086),h=t(8125),p=t(4379),v=t(5005),x=t(6843),m={year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"},j=t(8216),g=t(5997),Z=t(3029),y=function(){function e(){(0,j.Z)(this,e)}return(0,g.Z)(e,null,[{key:"db",get:function(){return this.createDbIfNotExists()}},{key:"createDbIfNotExists",value:function(){var n=(0,a.Z)(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(t=e._db)||void 0===t){n.next=4;break}n.t0=t,n.next=7;break;case 4:return n.next=6,(0,Z.X3)(e._dbName,1,{upgrade:function(n,t,r,i){n.objectStoreNames.contains(e._collName)||n.createObjectStore(e._collName,{keyPath:e._keyPath})}});case 6:n.t0=n.sent;case 7:return r=n.t0,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"add",value:function(){var n=(0,a.Z)(s().mark((function n(t){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.db;case 2:return r=n.sent,n.abrupt("return",r.add(e._collName,t));case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"get",value:function(){var n=(0,a.Z)(s().mark((function n(t){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.db;case 2:return r=n.sent,n.abrupt("return",r.get(e._collName,t));case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getAll",value:function(){var n=(0,a.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.db;case 2:return t=n.sent,n.abrupt("return",t.getAll(e._collName,void 0));case 4:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getFromOffset",value:function(){var e=(0,a.Z)(s().mark((function e(n,t){var r,i,a,c,o,u,l,d=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>2&&void 0!==d[2]&&d[2],e.next=3,this.db;case 3:return c=e.sent.transaction("readings","readonly"),e.next=6,c.store.openCursor(void 0,a?"prev":"next");case 6:if(o=e.sent,!(n>0)){e.next=20;break}return e.next=10,null===(i=o)||void 0===i?void 0:i.advance(n);case 10:if(e.t1=r=e.sent,e.t0=null!==e.t1,!e.t0){e.next=14;break}e.t0=void 0!==r;case 14:if(!e.t0){e.next=18;break}e.t2=r,e.next=19;break;case 18:e.t2=null;case 19:o=e.t2;case 20:u=0,l=[];case 22:if(!o||!(void 0===t||u<t)){e.next=30;break}return l.push(o.value),u++,e.next=27,o.continue();case 27:o=e.sent,e.next=22;break;case 30:return c.commit(),e.abrupt("return",l);case 32:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"clear",value:function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db;case 2:return n=e.sent,e.abrupt("return",n.clear("readings"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var n=(0,a.Z)(s().mark((function n(t){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.db;case 2:return r=n.sent,n.abrupt("return",r.delete(e._collName,t));case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()}]),e}();(0,i.Z)(y,"_dbName","vir"),(0,i.Z)(y,"_collName","readings"),(0,i.Z)(y,"_keyPath","date"),(0,i.Z)(y,"_db",null);var b,k,w=t(1242);!function(e){e[e.TEMP=0]="TEMP",e[e.OXY=1]="OXY",e[e.PULSE=2]="PULSE",e[e.BP=3]="BP",e[e.SL=4]="SL"}(k||(k={}));var C=(b={},(0,i.Z)(b,k.TEMP,"Temperature"),(0,i.Z)(b,k.OXY,"Blood Oxygen Levels"),(0,i.Z)(b,k.PULSE,"Pulse"),(0,i.Z)(b,k.BP,"Blood Pressure"),(0,i.Z)(b,k.SL,"Blood Glucose"),b);function O(e){return C[e]}function P(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n?e/5:(e-32)/9}function S(e){switch(e.itemType){case k.TEMP:var n=function(e){return"yes"===w.i.get(w.u.tempIsCelcius,"no")?{unitString:" \xb0C",num:5*e}:{unitString:" \xb0F",num:9*e+32}}(e.value),t=n.unitString,r=n.num;return"".concat(r.toFixed(2)," ").concat(t);case k.BP:return"".concat(e.value," mm Hg.");case k.OXY:return"".concat(e.value,"% SpO2");case k.PULSE:return"".concat(e.value," bpm");case k.SL:return"".concat(e.value," mg/dl")}}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.TEMP,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return{itemType:e,date:n,value:t,desc:r}}var N=t(2503);function T(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return"".concat(e,":").concat(t,":").concat(null!==r&&void 0!==r?r:"",":").concat(n)}var E=t(5881),L=t(5893),F=function(e){var n=e.date,t=e.eventKey,r=e.itemType,i=e.desc,c=(0,o.useState)(!1),l=c[0],d=c[1],f=function(){return d(!1)},h=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.delete(n);case 3:d(!1),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Failed to delete",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(E.Z,{bg:"dark",children:[(0,L.jsx)(u.Z.Toggle,{as:E.Z.Header,eventKey:t,children:"".concat(n.toLocaleString("en-us",m)," ").concat(O(r)," - ").concat(S(e))}),(0,L.jsx)(u.Z.Collapse,{eventKey:t,children:(0,L.jsxs)(E.Z.Body,{children:[(0,L.jsxs)(E.Z.Text,{children:[O(r)," - ",S(e),(0,L.jsx)("br",{}),i]}),(0,L.jsx)(v.Z,{variant:"primary",onClick:function(){return d(!0)},children:"Delete"})]})})]}),(0,L.jsxs)(x.Z,{show:l,onHide:f,children:[(0,L.jsx)(x.Z.Header,{children:"Delete?"}),(0,L.jsx)(x.Z.Body,{children:"Confirm Delete?"}),(0,L.jsxs)(x.Z.Footer,{children:[(0,L.jsx)(v.Z,{variant:"secondary",onClick:f,children:"Cancel"}),(0,L.jsx)(v.Z,{variant:"primary",onClick:h,children:"Confirm"})]})]})]})},B=t(2151),D=function(e){var n=e.showCreateTemp,t=e.setShowCreateTemp;return(0,L.jsx)(x.Z,{show:n,onHide:function(){t(!1)},children:(0,L.jsxs)(B.Z,{onSubmit:function(){var e=(0,a.Z)(s().mark((function e(n){var r,i,a,c,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r=n.target,i=Number(r.temp.value),a=r.desc.value,c="on"===r.unit.value&&r.unit[0].checked,o=P(i,c),y.add(_(k.TEMP,void 0,o,a)),t(!1);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,L.jsx)(x.Z.Header,{children:"Add temp"}),(0,L.jsxs)(x.Z.Body,{children:[(0,L.jsxs)(B.Z.Group,{children:[(0,L.jsx)(B.Z.Label,{children:"Temperature"}),(0,L.jsx)(B.Z.Control,{placeholder:"Temperature",type:"number",name:"temp",min:0,max:200,step:.01})]}),(0,L.jsxs)(B.Z.Group,{children:[(0,L.jsx)(B.Z.Label,{children:"Unit"}),(0,L.jsx)("br",{}),(0,L.jsx)(B.Z.Check,{inline:!0,type:"radio",name:"unit",label:"C"}),(0,L.jsx)(B.Z.Check,{inline:!0,type:"radio",name:"unit",label:"F"})]}),(0,L.jsxs)(B.Z.Group,{controlId:"exampleForm.ControlTextarea1",children:[(0,L.jsx)(B.Z.Label,{children:"Description"}),(0,L.jsx)(B.Z.Control,{as:"textarea",rows:3,placeholder:"Description(Optional)",name:"desc"})]})]}),(0,L.jsxs)(x.Z.Footer,{children:[(0,L.jsx)(v.Z,{variant:"secondary",onClick:function(){return t(!1)},children:"Cancel"}),(0,L.jsx)(v.Z,{variant:"primary",type:"submit",children:"Confirm"})]})]})})};function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var I=function(){var e,n,t=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return(0,N.ZP)(T(e,n,t,r),(function(){return y.getFromOffset(t,r,n)}),i)}("getVal",!0,void 0,15,{refreshInterval:2e3}),r=t.data,i=t.error,c=t.mutate,m=function(){return c(void 0,!0)},j=(0,o.useState)(!1),g=j[0],Z=j[1],b=(0,o.useState)(!1),w=b[0],O=b[1],P=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.clear();case 3:m(),Z(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Failed to clear",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return n=i?(0,L.jsxs)("div",{children:["Error ",i.toString()]}):r?0===(null!==(e=r.length)&&void 0!==e?e:0)?(0,L.jsx)("div",{children:"No data (Add an entry)"}):(0,L.jsx)(u.Z,{children:r.map((function(e){return(0,L.jsx)(F,K(K({},e),{},{eventKey:JSON.stringify(e)}),JSON.stringify(e))}))}):(0,L.jsx)("div",{children:"Loading"}),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l.Z,{style:{textAlign:"center"},md:8,children:(0,L.jsx)(d.Z,{md:{span:6,offset:3},children:(0,L.jsxs)(f.Z,{"aria-label":"Buttons",className:"full-width spacer-top-margin",children:[(0,L.jsxs)(h.Z,{as:f.Z,title:"Add",children:[(0,L.jsx)(p.Z.Item,{eventKey:"1",onClick:function(){O(!0)},children:C[k.TEMP]}),(0,L.jsx)(p.Z.Item,{eventKey:"2",onClick:function(){y.add(_(k.OXY,void 0,98,"no"))},children:C[k.OXY]})]}),(0,L.jsx)(v.Z,{onClick:function(){return m()},children:"Refresh "}),(0,L.jsx)(v.Z,{onClick:function(){return Z(!0)},children:"Clear"})]})})}),(0,L.jsxs)(x.Z,{show:g,onHide:function(){return Z(!1)},children:[(0,L.jsx)(x.Z.Header,{children:"Clear?"}),(0,L.jsx)(x.Z.Body,{children:"Confirm Clearing all entries?"}),(0,L.jsxs)(x.Z.Footer,{children:[(0,L.jsx)(v.Z,{variant:"secondary",onClick:function(){return Z(!1)},children:"Cancel"}),(0,L.jsx)(v.Z,{variant:"primary",onClick:P,children:"Confirm"})]})]}),(0,L.jsx)(D,{showCreateTemp:w,setShowCreateTemp:O}),(0,L.jsx)("br",{}),n]})},X=t(682),M=function(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(r.h,{title:"Log",activeKey:"home"}),(0,L.jsx)(X.Z,{children:(0,L.jsx)(I,{})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4554)}])}},function(e){e.O(0,[774,450,976,452,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);