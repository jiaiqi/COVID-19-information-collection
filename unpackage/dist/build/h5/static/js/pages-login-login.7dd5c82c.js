(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0367":function(n,t,i){"use strict";var e,a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"login-bg"},[i("v-uni-view",{staticClass:"login-card"},[i("v-uni-view",{staticClass:"login-head"},[n._v("登录")]),i("v-uni-view",{staticClass:"login-input login-margin-b"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入账号"},model:{value:n.user_no,callback:function(t){n.user_no=t},expression:"user_no"}})],1),i("v-uni-view",{staticClass:"login-input"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入密码"},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}})],1),i("v-uni-view",{staticClass:"login-function"},[i("v-uni-view",{staticClass:"login-forget",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.go_forget.apply(void 0,arguments)}}},[n._v("忘记密码")]),i("v-uni-view",{staticClass:"login-register",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.go_register.apply(void 0,arguments)}}},[n._v("快速注册>")])],1)],1)],1),i("v-uni-view",{staticClass:"login-btn"},[i("v-uni-button",{staticClass:"landing",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.toLogin.apply(void 0,arguments)}}},[n._v("登录")])],1)],1)},o=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return e})},"2baf":function(n,t,i){"use strict";i.r(t);var e=i("0367"),a=i("98f8");for(var o in a)"default"!==o&&function(n){i.d(t,n,function(){return a[n]})}(o);i("2dc5");var r,s=i("f0c5"),u=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"9927f366",null,!1,e["a"],r);t["default"]=u.exports},"2dc5":function(n,t,i){"use strict";var e=i("cede"),a=i.n(e);a.a},"44c1":function(n,t,i){"use strict";var e=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e(i("e814")),o={data:function(){return{title:"Hello",app_no:"APPNO20200115100113",openid:"",user_no:"",password:""}},onLoad:function(n){n.openid&&(this.openid=n.openid)},methods:{toLogin:function(){var n="",t=this.isWeixinClient();if(t);else{n=this.getServiceUrl("sso","srvuser_login","operate");var i=[{serviceName:"srvuser_login",data:[{user_no:this.user_no,pwd:this.password}]}];this.$http.post(n,i).then(function(n){if(console.log("res.data:",n.data),"SUCCESS"===n.data.resultCode){var t=n.data.response[0].response,i=(0,a.default)((new Date).getTime()/1e3)+t.expire_time;uni.setStorageSync("is_login",!0),uni.setStorageSync("bx_auth_ticket",t.bx_auth_ticket),uni.setStorageSync("expire_time",t.expire_time),uni.setStorageSync("expire_timestamp",i),uni.setStorageSync("login_user_info",t.login_user_info),uni.navigateTo({url:"../index/index"})}else uni.setStorageSync("is_login",!1),uni.showToast({content:n.data.resultMessage})})}},go_forget:function(){uni.navigateTo({url:"./forget"})},go_register:function(){uni.navigateTo({url:"./register"})}}};t.default=o},"98f8":function(n,t,i){"use strict";i.r(t);var e=i("44c1"),a=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,function(){return e[n]})}(o);t["default"]=a.a},cede:function(n,t,i){var e=i("d3b1");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("81f1d2be",e,!0,{sourceMap:!1,shadowMode:!1})},d3b1:function(n,t,i){t=n.exports=i("2350")(!1),t.push([n.i,".landing[data-v-9927f366]{height:%?84?%;line-height:%?84?%;border-radius:%?44?%;font-size:%?32?%;background:-webkit-linear-gradient(left,#0bc99d,#0bc99d);background:linear-gradient(left,#0bc99d,#0bc99d)}.login-btn[data-v-9927f366]{padding:%?10?% %?20?%;margin-top:%?350?%}.login-function[data-v-9927f366]{overflow:auto;padding:%?20?% %?20?% %?30?% %?20?%}.login-forget[data-v-9927f366]{float:left;font-size:%?26?%;color:#999}.login-register[data-v-9927f366]{color:#666;float:right;font-size:%?26?%}.login-input uni-input[data-v-9927f366]{background:#f2f5f6;font-size:%?28?%;padding:%?10?% %?25?%;height:%?62?%;line-height:%?62?%;border-radius:%?8?%}.login-margin-b[data-v-9927f366]{margin-bottom:%?25?%}.login-input[data-v-9927f366]{padding:%?10?% %?20?%}.login-head[data-v-9927f366]{font-size:%?34?%;text-align:center;padding:%?25?% %?10?% %?55?% %?10?%}.login-card[data-v-9927f366]{background:#fff;border-radius:%?12?%;padding:%?10?% %?25?%;box-shadow:0 %?6?% %?18?% rgba(0,0,0,.12);position:relative;margin-top:%?120?%}.login-bg[data-v-9927f366]{height:%?260?%;padding:%?25?%;background:-webkit-linear-gradient(#0bc99d,#0bc99d);background:linear-gradient(#0bc99d,#0bc99d)}",""])}}]);