(function(e){function t(t){for(var s,a,o=t[0],u=t[1],i=t[2],d=0,m=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(m.length)m.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(s=!1)}s&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={app:0},c=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"485b":function(e,t,n){"use strict";n("90ae")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23");function r(e,t,n,r,c,a){var o=Object(s["l"])("HelloWorld");return Object(s["h"])(),Object(s["c"])(o)}var c=function(e){return Object(s["j"])("data-v-555f5d5c"),e=e(),Object(s["i"])(),e},a={class:"hello container bg-light"},o=c((function(){return Object(s["e"])("div",{class:"row"},[Object(s["e"])("div",{class:"col"},[Object(s["e"])("h3",null,"Chat Here")])],-1)})),u={class:"row"},i={class:"col"},l=Object(s["f"])('<div class="form-group" data-v-555f5d5c><label for="exampleInputEmail1" data-v-555f5d5c>UserName</label><input type="username" class="form-control" id="usernamevalue" required placeholder="Enter username" data-v-555f5d5c><small id="emailHelp" class="form-text text-muted" data-v-555f5d5c>You cannot change username once set</small></div><button type="submit" class="btn btn-primary" data-v-555f5d5c>Done</button>',2),d=[l],m={class:"row"},f={class:"container bg-light mt-4 displayBox",id:"displayBoxID"},b={class:"font-weight-bold"},p={class:"row"},v={class:"col"},h={class:"form-group"},O=c((function(){return Object(s["e"])("label",{for:"Textarea1"},"Type and send",-1)})),j=c((function(){return Object(s["e"])("button",{type:"submit",class:"btn btn-primary"},"Send",-1)}));function g(e,t,n,r,c,l){return Object(s["h"])(),Object(s["d"])("div",a,[o,Object(s["e"])("div",u,[Object(s["e"])("div",i,[Object(s["e"])("form",{onSubmit:[t[0]||(t[0]=Object(s["p"])((function(){}),["prevent"])),t[1]||(t[1]=function(){return l.setUsername&&l.setUsername.apply(l,arguments)})]},d,32)])]),Object(s["e"])("div",m,[Object(s["e"])("div",f,[(Object(s["h"])(!0),Object(s["d"])(s["a"],null,Object(s["k"])(c.messages,(function(e,t){return Object(s["h"])(),Object(s["d"])("div",{class:"messages",key:t},[Object(s["e"])("p",null,[Object(s["e"])("span",b,Object(s["m"])(e.user)+": ",1),Object(s["g"])(Object(s["m"])(e.message),1)])])})),128))])]),Object(s["e"])("div",p,[Object(s["e"])("div",v,[Object(s["e"])("form",{onSubmit:[t[4]||(t[4]=Object(s["p"])((function(){}),["prevent"])),t[5]||(t[5]=function(){return l.sendMessage&&l.sendMessage.apply(l,arguments)})]},[Object(s["e"])("div",h,[O,Object(s["o"])(Object(s["e"])("textarea",{class:"form-control",id:"Textarea1",rows:"3",onInput:t[2]||(t[2]=function(){return l.inputclick&&l.inputclick.apply(l,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.usermessage=e}),required:"",maxlength:"100"},null,544),[[s["n"],c.usermessage]]),j])],32)])])])}var y=n("2909"),k=(n("99af"),n("8e27")),w=n.n(k),x={name:"HelloWorld",data:function(){return{userName:null,usermessage:null,messages:[],othermessages:[],userId:null,socket:w()("".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_URL))}},mounted:function(){var e=this;this.socket.on("connectedSuccessfully",(function(t){var n={user:t.userName,message:"is connected"};e.messages.push(n)})),this.socket.on("userDisconnection",(function(t){var n={user:t.userName,message:"is disconnected"};e.messages.push(n)})),this.socket.on("new_msg",(function(e){this.userId=e})),this.socket.on("userId",(function(t){e.userId=t})),this.socket.on("messagetoall",(function(t){e.messages=[].concat(Object(y["a"])(e.messages),[t])}))},methods:{sendMessage:function(e){e.preventDefault(),this.socket.emit("messagetoall",{user:this.userName,message:this.usermessage}),this.usermessage=""},inputclick:function(){if(!this.userName)return alert("userName is required!!"),void(this.usermessage=null)},setUsername:function(){this.userName||(this.userName=document.getElementById("usernamevalue").value,document.getElementById("usernamevalue").disabled=!0,this.socket.emit("userJoined",{userName:this.userName}),this.socket.emit("join",{username:this.userName}))}}},N=(n("485b"),n("6b0d")),_=n.n(N);const I=_()(x,[["render",g],["__scopeId","data-v-555f5d5c"]]);var S=I,P={name:"App",components:{HelloWorld:S}};n("6ed1");const E=_()(P,[["render",r]]);var U=E;Object(s["b"])(U).mount("#app")},"6ed1":function(e,t,n){"use strict";n("9562")},"90ae":function(e,t,n){},9562:function(e,t,n){}});
//# sourceMappingURL=app.a34e41aa.js.map