(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-authorization-authorization"],{"0d31":function(t,n,e){"use strict";e.r(n);var i=e("d4fd"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},"10ef":function(t,n,e){"use strict";var i=e("e8dd"),a=e.n(i);a.a},a022:function(t,n,e){"use strict";e.r(n);var i=e("ff9f"),a=e("0d31");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("10ef");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"35cd82e6",null,!1,i["a"],r);n["default"]=u.exports},ab96:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.authorization[data-v-35cd82e6]{width:100%;height:100%;background-color:#fff}.authorization .images[data-v-35cd82e6]{width:100%;margin:%?50?% 0}.authorization .text[data-v-35cd82e6]{width:90%;display:block;text-align:center;padding:%?20?% 5%}.authorization .button-box[data-v-35cd82e6]{margin-top:%?50?%;height:%?200?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.authorization .button-box .buttons[data-v-35cd82e6]{width:70%;height:%?70?%;line-height:%?70?%;border-radius:%?0?%;font-size:%?30?%}',""])},d4fd:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"Authorization",data:function(){return{}},methods:{getuserinfo:function(t){console.log("getUserInfo",t),t.detail.userInfo&&(console.log("账号信息",t.detail.userInfo),uni.setStorageSync("userInfo",t.detail.userInfo),this.toPreviousPage())}}};n.default=i},e8dd:function(t,n,e){var i=e("ab96");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("21fd0025",i,!0,{sourceMap:!1,shadowMode:!1})},ff9f:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"authorization"},[e("v-uni-image",{staticClass:"images",attrs:{src:"../../static/img/run.svg",mode:""}}),e("v-uni-text",{staticClass:"text"},[t._v("为了给您提供更科学的饮食建议")]),e("v-uni-text",{staticClass:"text"},[t._v("我们需要访问您的账号信息")]),e("div",{staticClass:"button-box"},[e("v-uni-button",{staticClass:"buttons",attrs:{type:"primary","open-type":"getUserInfo"},on:{getuserinfo:function(n){arguments[0]=n=t.$handleEvent(n),t.getuserinfo.apply(void 0,arguments)}}},[t._v("立即授权")]),e("v-uni-button",{staticClass:"buttons",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toPreviousPage.apply(void 0,arguments)}}},[t._v("暂不授权")])],1)],1)},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})}}]);