(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5774:function(e,n,t){"use strict";t.d(n,{h:function(){return o}});var r=t(9008),a=t(1664),i=t(5602),c=t(682),s=t(4456),u=t(5893),o=function(e){var n=e.title,t=e.activeKey;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.default,{children:[(0,u.jsx)("title",{children:n}),(0,u.jsx)("meta",{name:"description",content:"Vitals Recording"}),(0,u.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,u.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,u.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,u.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,u.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,u.jsx)("meta",{name:"theme-color",content:"#bc7100"})]}),(0,u.jsx)(i.Z,{bg:"dark",expand:"md",fixed:"top",variant:"dark",className:"card-1",children:(0,u.jsxs)(c.Z,{fluid:!0,children:[(0,u.jsx)(i.Z.Brand,{children:"Vitals Recorder"}),(0,u.jsx)(i.Z.Toggle,{"aria-controls":"navbar-toggleable"}),(0,u.jsx)(i.Z.Collapse,{id:"navbar-toggleable",children:(0,u.jsxs)(s.Z,{activeKey:t,className:"justify-content-end mr-auto",children:[(0,u.jsx)(a.default,{href:"/",passHref:!0,children:(0,u.jsx)(s.Z.Link,{eventKey:"home",children:"Home"})}),false,(0,u.jsx)(a.default,{href:"/settings",passHref:!0,children:(0,u.jsx)(s.Z.Link,{eventKey:"settings",children:"Settings"})})]})})]})})]})}},1701:function(e,n,t){"use strict";t.d(n,{u:function(){return r},i:function(){return c}});var r,a=t(8216),i=t(5997);!function(e){e[e.tempIsCelcius=0]="tempIsCelcius"}(r||(r={}));var c=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"get",value:function(e,n){var t;return null!==(t=localStorage.getItem(r[e]))&&void 0!==t?t:n}},{key:"put",value:function(e,n){return localStorage.setItem(r[e],n)}},{key:"clear",value:function(){return localStorage.clear()}}]),e}()},1125:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Y}});var r,a,i=t(5774),c=t(266),s=t(809),u=t.n(s),o=t(7294),l=t(640),d=t(4051),f=t(1555),p=t(2086),h=t(8125),x=t(4379),v=t(5005),m=t(6843),Z=t(2809),g=t(1701);!function(e){e[e.TEMP=0]="TEMP",e[e.OXY=1]="OXY",e[e.PULSE=2]="PULSE",e[e.SL=3]="SL"}(a||(a={}));var j,y,k,b=(r={},(0,Z.Z)(r,a.TEMP,"Temperature"),(0,Z.Z)(r,a.OXY,"Blood Oxygen Level"),(0,Z.Z)(r,a.PULSE,"Pulse"),(0,Z.Z)(r,a.SL,"Blood Glucose"),r);function w(e){return b[e]}function S(e){switch(e.itemType){case a.TEMP:var n=function(e){return"yes"===g.i.get(g.u.tempIsCelcius,"no")?{unitString:" \xb0C",num:5*e}:{unitString:" \xb0F",num:9*e+32}}(e.value),t=n.unitString,r=n.num;return"".concat(r.toFixed(2)," ").concat(t);case a.OXY:return"".concat(e.value,"% SpO2");case a.PULSE:return"".concat(e.value," bpm");case a.SL:return"".concat(e.value," mg/dl")}}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.TEMP,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return{itemType:e,date:n,value:t,desc:r}}var E={year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"},P=(j={},(0,Z.Z)(j,a.OXY,{addButtonText:"Add Oxygen reading",addLabel:"SpO2 reading",addPlaceHolder:w(a.OXY)}),(0,Z.Z)(j,a.TEMP,{addButtonText:"Add Temperature reading",addLabel:"Temperature reading",addPlaceHolder:w(a.TEMP)}),(0,Z.Z)(j,a.PULSE,{addButtonText:"Add Pulse Reading",addLabel:"",addPlaceHolder:w(a.PULSE)}),(0,Z.Z)(j,a.SL,{addButtonText:"Add Blood Sugar Reading",addLabel:"",addPlaceHolder:w(a.SL)}),j),T={inputValueStep:(y={},(0,Z.Z)(y,a.TEMP,.1),(0,Z.Z)(y,a.OXY,1),(0,Z.Z)(y,a.SL,1),(0,Z.Z)(y,a.PULSE,1),y),inputValueMax:(k={},(0,Z.Z)(k,a.TEMP,150),(0,Z.Z)(k,a.OXY,100),(0,Z.Z)(k,a.SL,300),(0,Z.Z)(k,a.PULSE,300),k)};function L(e,n){return T[n][e]}var N=t(8216),_=t(5997),O=t(3029),F=function(){function e(){(0,N.Z)(this,e)}return(0,_.Z)(e,null,[{key:"db",get:function(){return this.createDbIfNotExists()}},{key:"createDbIfNotExists",value:function(){var n=(0,c.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(t=e._db)||void 0===t){n.next=4;break}n.t0=t,n.next=7;break;case 4:return n.next=6,(0,O.X3)(e._dbName,1,{upgrade:function(n,t,r,a){n.objectStoreNames.contains(e._collName)||n.createObjectStore(e._collName,{keyPath:e._keyPath})}});case 6:n.t0=n.sent;case 7:return r=n.t0,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"add",value:function(){var n=(0,c.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.db;case 2:return r=n.sent,n.abrupt("return",r.add(e._collName,t));case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"edit",value:function(){var n=(0,c.Z)(u().mark((function n(t,r){var a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.db;case 2:return a=n.sent,n.abrupt("return",a.put(e._collName,r,t));case 4:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"get",value:function(){var n=(0,c.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.db;case 2:return r=n.sent,n.abrupt("return",r.get(e._collName,t));case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getAll",value:function(){var n=(0,c.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.db;case 2:return t=n.sent,n.abrupt("return",t.getAll(e._collName,void 0));case 4:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getFromOffset",value:function(){var e=(0,c.Z)(u().mark((function e(n,t){var r,a,i,c,s,o,l,d=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>2&&void 0!==d[2]&&d[2],e.next=3,this.db;case 3:return c=e.sent.transaction("readings","readonly"),e.next=6,c.store.openCursor(void 0,i?"prev":"next");case 6:if(s=e.sent,!(n>0)){e.next=20;break}return e.next=10,null===(a=s)||void 0===a?void 0:a.advance(n);case 10:if(e.t1=r=e.sent,e.t0=null!==e.t1,!e.t0){e.next=14;break}e.t0=void 0!==r;case 14:if(!e.t0){e.next=18;break}e.t2=r,e.next=19;break;case 18:e.t2=null;case 19:s=e.t2;case 20:o=0,l=[];case 22:if(!s||!(void 0===t||o<t)){e.next=30;break}return l.push(s.value),o++,e.next=27,s.continue();case 27:s=e.sent,e.next=22;break;case 30:return c.commit(),e.abrupt("return",l);case 32:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"getCount",value:function(){var e=(0,c.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db;case 2:return n=e.sent,e.abrupt("return",n.count("readings"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clear",value:function(){var e=(0,c.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db;case 2:return n=e.sent,e.abrupt("return",n.clear("readings"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var n=(0,c.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.db;case 2:return r=n.sent,n.abrupt("return",r.delete(e._collName,t));case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()}]),e}();(0,Z.Z)(F,"_dbName","vir"),(0,Z.Z)(F,"_collName","readings"),(0,Z.Z)(F,"_keyPath","date"),(0,Z.Z)(F,"_db",null);var I=t(2503);function M(e,n,t,r){return"".concat(e,":").concat(t,":").concat(null!==r&&void 0!==r?r:"",":").concat(n)}var H=t(5881),B=t(5893),D=function(e){var n=e.item,t=e.eventKey,r=e.updateData,a=e.setSelectedEditItem,i=e.setShowEditModal,s=n.date,d=n.itemType,f=n.desc,h=(0,o.useState)(!1),x=h[0],Z=h[1],g=function(){return Z(!1)},j=function(){var e=(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.delete(s);case 3:return Z(!1),e.next=6,r();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Failed to delete",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(H.Z,{bg:"dark",children:[(0,B.jsx)(l.Z.Toggle,{as:H.Z.Header,eventKey:t,children:"".concat(s.toLocaleString("en-us",E)," ").concat(w(d)," - ").concat(S(n))}),(0,B.jsx)(l.Z.Collapse,{eventKey:t,children:(0,B.jsxs)(H.Z.Body,{children:[(0,B.jsxs)(H.Z.Text,{children:[w(d)," - ",S(n),(0,B.jsx)("br",{}),f]}),(0,B.jsxs)(p.Z,{children:[(0,B.jsx)(v.Z,{variant:"secondary",onClick:function(){a(n),i(!0)},children:"Edit"}),(0,B.jsx)(v.Z,{variant:"warning",onClick:function(){return Z(!0)},children:"Delete"})]})]})})]}),(0,B.jsxs)(m.Z,{show:x,onHide:g,children:[(0,B.jsx)(m.Z.Header,{children:"Delete?"}),(0,B.jsx)(m.Z.Body,{children:"Confirm Delete?"}),(0,B.jsxs)(m.Z.Footer,{children:[(0,B.jsx)(v.Z,{variant:"secondary",onClick:g,children:"Cancel"}),(0,B.jsx)(v.Z,{variant:"primary",onClick:j,children:"Confirm"})]})]})]})},X=t(2151),A=function(e){var n=e.showCreateForm,t=e.itemType,r=e.existingItem,a=e.setShowCreateForm,i=e.setExistingItem,s=e.updateData,l=(0,o.useRef)(null);return(0,o.useEffect)((function(){n?null!==r&&(null!=l.current&&(l.current.numinput.value=r.value,l.current.desc.value=r.desc),t!==r.itemType&&console.warn("Detected mismatch, please report",t,r)):i(null)}),[n]),(0,B.jsx)(m.Z,{show:n,onHide:function(){i(null),a(!1)},children:(0,B.jsxs)(X.Z,{ref:l,onSubmit:function(){var e=(0,c.Z)(u().mark((function e(n){var i,c,o,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),i=n.target,c=parseInt(i.numinput.value),o=i.desc.value,l=C(t,null===r||void 0===r?void 0:r.date,c,o),e.next=7,F.edit(null===r||void 0===r?void 0:r.date,l);case 7:return a(!1),e.next=10,s();case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,B.jsx)(m.Z.Header,{children:P[t].addButtonText}),(0,B.jsxs)(m.Z.Body,{children:[(0,B.jsxs)(X.Z.Group,{children:[(0,B.jsx)(X.Z.Label,{children:P[t].addLabel}),(0,B.jsx)(X.Z.Control,{placeholder:P[t].addPlaceHolder,type:"number",name:"numinput",min:0,max:L(t,"inputValueMax"),step:L(t,"inputValueStep"),value:null===r||void 0===r?void 0:r.value})]}),(0,B.jsxs)(X.Z.Group,{controlId:"exampleForm.ControlTextarea1",children:[(0,B.jsx)(X.Z.Label,{children:"Description"}),(0,B.jsx)(X.Z.Control,{as:"textarea",rows:3,placeholder:"Description(Optional)",name:"desc"})]})]}),(0,B.jsxs)(m.Z.Footer,{children:[(0,B.jsx)(v.Z,{variant:"secondary",onClick:function(){a(!1)},children:"Cancel"}),(0,B.jsx)(v.Z,{variant:"primary",type:"submit",children:"Confirm"})]})]})})},K=function(){var e,n=(0,o.useState)(0),t=n[0],r=n[1],i=15*t,s=(0,o.useState)(0),Z=s[0],g=s[1];function j(){return y.apply(this,arguments)}function y(){return(y=(0,c.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getCount();case 2:n=e.sent,g(Math.ceil(n/15));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,o.useEffect)((function(){j().catch((function(e){return console.error("Error fetching page count",e)}))}),[]);var k,b=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return(0,I.ZP)(M(e,n,t,r),(function(){return F.getFromOffset(t,r,n)}),a)}("getVal",!0,i,15,{refreshInterval:2e3}),S=b.data,C=b.error,E=b.mutate,P=function(){var e=(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return e.next=4,E(void 0,!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=(0,o.useState)(!1),L=T[0],N=T[1],_=(0,o.useState)(a.TEMP),O=_[0],H=_[1],X=(0,o.useState)(!1),K=X[0],U=X[1],Y=(0,o.useState)(null),V=Y[0],R=Y[1],z=function(){var e=(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.clear();case 3:return e.next=5,P();case 5:N(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Failed to clear",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return k=C?(0,B.jsxs)("div",{children:["Error ",C.toString()]}):S?0===(null!==(e=S.length)&&void 0!==e?e:0)?(0,B.jsx)("div",{children:"No data (Add an entry)"}):(0,B.jsx)(l.Z,{children:S.map((function(e){return(0,B.jsx)(D,{item:e,eventKey:JSON.stringify(e),setSelectedEditItem:R,setShowEditModal:U,updateData:P},JSON.stringify(e))}))}):(0,B.jsx)("div",{children:"Loading"}),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(d.Z,{style:{textAlign:"center"},md:8,children:(0,B.jsx)(f.Z,{md:{span:6,offset:3},children:(0,B.jsxs)(p.Z,{"aria-label":"Buttons",className:"full-width spacer-top-margin",children:[(0,B.jsx)(h.Z,{as:p.Z,title:"Add",children:[a.TEMP,a.OXY,a.PULSE].map((function(e,n){return(0,B.jsx)(x.Z.Item,{eventKey:"".concat(n),onClick:function(){H(e),U(!0)},children:w(e)},e)}))}),(0,B.jsx)(v.Z,{onClick:function(){return P()},children:"Refresh "}),(0,B.jsx)(v.Z,{onClick:function(){return N(!0)},children:"Clear"})]})})}),(0,B.jsxs)(m.Z,{show:L,onHide:function(){return N(!1)},children:[(0,B.jsx)(m.Z.Header,{children:"Clear?"}),(0,B.jsx)(m.Z.Body,{children:"Confirm Clearing all entries?"}),(0,B.jsxs)(m.Z.Footer,{children:[(0,B.jsx)(v.Z,{variant:"secondary",onClick:function(){return N(!1)},children:"Cancel"}),(0,B.jsx)(v.Z,{variant:"primary",onClick:z,children:"Confirm"})]})]}),(0,B.jsx)(A,{itemType:O,showCreateForm:K,setShowCreateForm:U,updateData:P,existingItem:V,setExistingItem:R}),(0,B.jsx)("br",{}),k,(0,B.jsx)(d.Z,{style:{textAlign:"center"},md:8,children:(0,B.jsx)(f.Z,{md:{span:6,offset:3},children:Z>0&&(0,B.jsxs)(p.Z,{className:"spacer-top-margin-lot",children:[(0,B.jsx)(v.Z,{disabled:t<=1,onClick:function(){r(t>Z||t<1?0:t-1)},children:"Prev"}),(0,B.jsx)(v.Z,{disabled:!0,children:"".concat(t+1,"/").concat(Z)}),(0,B.jsx)(v.Z,{disabled:t+1>=Z,onClick:function(){t<Z-1&&r(t+1)},children:"Next"})]})})}),(0,B.jsx)("div",{className:"spacer-top-margin-lot"})]})},U=t(682),Y=function(){return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(i.h,{title:"Log",activeKey:"home"}),(0,B.jsx)(U.Z,{children:(0,B.jsx)(K,{})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1125)}])}},function(e){e.O(0,[774,450,976,452,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);