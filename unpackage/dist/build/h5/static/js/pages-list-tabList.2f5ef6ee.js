(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-tabList"],{"0b68":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".wrap[data-v-491e8f62]{width:100%;\n\t/* height: 100%; */background:#fff!important}.bottombar[data-v-491e8f62]{margin:10px 0 2px 0;text-align:right;white-space:nowrap}.titlebox[data-v-491e8f62]{font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.titltsfont[data-v-491e8f62]{display:inline-block;vertical-align:middle}.topslerr[data-v-491e8f62]{position:fixed;left:0;right:0;z-index:1}.fotsize[data-v-491e8f62]{font-size:%?25?%;color:#888\n}.lineunder[data-v-491e8f62]{margin:10px 0;height:1px;background:#e8e8e8}.underhei[data-v-491e8f62]{height:%?110?%}.content-box[data-v-491e8f62]{padding:0 %?30?%}.wrap-headlist[data-v-491e8f62]{width:100%;border-radius:5px;margin:%?40?% 0;box-shadow:0 0 5px 0 rgba(0,0,0,.1);padding:%?18?%;box-sizing:border-box}.dots[data-v-491e8f62]{display:inline-block;width:%?25?%;height:%?25?%;border-radius:50%;margin-right:14px;vertical-align:middle}",""])},"140b":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.navTabBox[data-v-7a13d29f]{width:100vw;background:#0081ff;color:hsla(0,0%,100%,.5)}.navTabBox .click[data-v-7a13d29f]{color:#fff}.navTabBox .longTab[data-v-7a13d29f]{width:100%}.navTabBox .longTab .longItem[data-v-7a13d29f]{height:%?90?%;display:inline-block;line-height:%?90?%;text-align:center}.navTabBox .longTab .underlineBox[data-v-7a13d29f]{height:3px;width:20%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-transition:.5s;transition:.5s}.navTabBox .longTab .underlineBox .underline[data-v-7a13d29f]{width:%?84?%;height:4px;background-color:#fff}.navTabBox .shortTab[data-v-7a13d29f]{width:100%}.navTabBox .shortTab .navTab[data-v-7a13d29f]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?90?%;position:relative}.navTabBox .shortTab .navTab .navTabItem[data-v-7a13d29f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;font-size:%?28?%}.navTabBox .shortTab .underlineBox[data-v-7a13d29f]{height:3px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-transition:.5s;transition:.5s}.navTabBox .shortTab .underlineBox .underline[data-v-7a13d29f]{width:%?84?%;height:3px;background-color:#fff}',""])},"1c2c":function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var a=n(e("3b8d")),s=n(e("46bd")),o=n(e("9189")),r={components:{liuyunoTabs:s.default,uniLoading:o.default},data:function(){return{pro_text:"",tabs:["待我处理","我的全部","我的申请","我已处理"],defaultIndex:0,status:1,list:[],valno:!0,pageNo:1,index:0,rownumber:10,listindex:["wait","myall","mine","processed"],service_name:""}},methods:{tabClick:function(t){var i=this;this.index=t,this.list=[],this.status=this.pageNo=1,this.getlist(!0,"pull-down").then(function(){i.loadingStatus(i.list.length)})},colortitle:function(t){switch(t){case"完成":return"#46B6FE/已完成";case"待业务开发实施":return"#09F175/待实施";case"待业务分析":return"#e6b011/待分析";case"待业务审核":return"#9de65acc/待审核";default:return"#e2a06c/".concat(t)}},loadingStatus:function(t){switch(t){case 0:this.valno?this.status=3:this.status=2;break;case 10:this.status=0;break;default:this.status=2;break}},onPullDownRefresh:function(){var t=this;t.pageNo=1,setTimeout(function(){uni.stopPullDownRefresh(),t.getlist(!0,"pull-down")},1e3)},onReachBottom:function(){var t=this;t.status=1,t.pageNo++,uni.showNavigationBarLoading(),setTimeout(function(){t.getlist(!1,"pull-up"),uni.hideNavigationBarLoading()},1e3)},getlist:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(i,e){var n,a,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(this.service_name),n=this.getServiceUrl("oa",this.service_name,"select"),"wait",a={serviceName:this.service_name,colNames:["*"],condition:[],page:{pageNo:this.pageNo,rownumber:this.rownumber},order:[],proc_data_type:this.listindex[this.index]},t.next=6,this.$http.post(n,a);case 6:s=t.sent,o=s.data.data,console.log(o),"pull-down"==e?this.list=o:(this.valno=!1,this.loadingStatus(o.length),this.list=this.list.concat(o)),i&&(this.valno=!0,this.loadingStatus(o.length));case 11:case"end":return t.stop()}},t,this)}));function i(i,e){return t.apply(this,arguments)}return i}(),detial:function(t){uni.navigateTo({url:"../steps/procDetail?pro="+t})}},onLoad:function(t){this.service_name=t.val,this.getlist(!0,"pull-down")},mounted:function(){}};i.default=r},"1c75":function(t,i,e){"use strict";e.r(i);var n=e("b31e"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},"212b":function(t,i,e){var n=e("140b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("377d0af2",n,!0,{sourceMap:!1,shadowMode:!1})},"21a0":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".mix-load-more[data-v-79384538]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?90?%;padding-top:%?10?%}.mix-load-icon[data-v-79384538]{display:block;width:%?36?%;height:%?36?%;margin-right:%?12?%;-webkit-animation:load-data-v-79384538 1.2s cubic-bezier(.37,1.08,.7,.74) infinite;animation:load-data-v-79384538 1.2s cubic-bezier(.37,1.08,.7,.74) infinite}.mix-load-text[data-v-79384538]{font-size:%?28?%;color:#888}@-webkit-keyframes load-data-v-79384538{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},"38b1":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"mix-load-more"},[e("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:1===t.status,expression:"status === 1"}],staticClass:"mix-load-icon",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJCRjNGOEQ1RDNBMTFFOUFERjY5MEU0MTg5MjY0NDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJCRjNGOEU1RDNBMTFFOUFERjY5MEU0MTg5MjY0NDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkJGM0Y4QjVEM0ExMUU5QURGNjkwRTQxODkyNjQ0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkJGM0Y4QzVEM0ExMUU5QURGNjkwRTQxODkyNjQ0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkf/QQsAAAHYSURBVHjavFfRcYJAEOVu8h87SFJBSAUJNGCsIKQCsQK1AkkHpAKwAaUE7YB0kFRg3prFcWAPTziyM+uJHPvuvV32TuVZ2na79TG8wWkc8Ui2g3/z+BkEwc4mnrIAXGCYMpiN0SISLGDZCRiArxhW8Huvm5XwGRaQSzd1C8usB6jHz2aINbdijIkp59KlpWD+bmTMTNtA13AK8IRAipy+82/rlucijt1kzDnNWgBjAJUXCpHkTeBjw5RJlfMT8GazKZVSd8JkKpDkGl2xgJgLs1FwiPVwkppkcAVKxs/MpIKrJD8CHw6HWJK3C2gNXMr79AhMHQlsb4UJsYNqlmKMCJMYRwa2ZV9UjiGxjjRk9oUbucN3uBGLMLWhB+8cAjdiUWo1Ph4FiZwBG2L52vsHg7Q/9WvK8d6w9zozqJrUrzXvnw0pXAJDbmoaAXz5dxksboBOOXiuzaW+nToGLzAU57uTBDDmhj+Yaaq6evLZVoMCS8mv5OZdZhCz2RZpH/4YhDGzNrFLwDxznXMlHH3mF/ou+b5vd+t72LM6Q1ufqy2YC69pUHTKsdBpJnjNvizjvHQuLgE8D8OQCmppeM/PrXAidcuftogPDiPaTmlB1ANYoavsV4ABAGz+xJ8bzHJJAAAAAElFTkSuQmCC"}}),e("v-uni-text",{staticClass:"mix-load-text"},[t._v(t._s(t.text[t.status]))])],1)},s=[];e.d(i,"b",function(){return a}),e.d(i,"c",function(){return s}),e.d(i,"a",function(){return n})},4381:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"navTabBox"},[e("v-uni-view",{staticClass:"longTab"},[e("v-uni-scroll-view",{staticStyle:{"white-space":"nowrap",display:"flex"},attrs:{"scroll-x":"true","scroll-with-animation":!0,"scroll-left":t.tabLeft}},[t._l(t.tabTitle,function(i,n){return e("v-uni-view",{key:n,staticClass:"longItem",class:n===t.tabClick?"click":"",style:"width:"+t.isWidth+"px",attrs:{"data-index":n,id:"id"+n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.longClick(n)}}},[t._v(t._s(i))])}),e("v-uni-view",{staticClass:"underlineBox",style:"transform:translateX("+t.isLeft+"px);width:"+t.isWidth+"px"},[e("v-uni-view",{staticClass:"underline"})],1)],2)],1)],1)},s=[];e.d(i,"b",function(){return a}),e.d(i,"c",function(){return s}),e.d(i,"a",function(){return n})},"452c":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"topslerr"},[e("liuyuno-tabs",{attrs:{tabData:t.tabs,defaultIndex:t.defaultIndex},on:{tabClick:function(i){arguments[0]=i=t.$handleEvent(i),t.tabClick.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"underhei"}),e("v-uni-view",{staticClass:"content-box"},[t._l(t.list,function(i,n){return e("v-uni-view",{key:n,staticClass:"wrap-headlist",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detial(i.proc_instance_no)}}},[e("v-uni-view",{staticClass:"twocontent"},[e("v-uni-view",{staticClass:"titlebox"},[e("v-uni-view",{},[e("v-uni-view",{staticClass:"dots",style:"background:"+t.colortitle(i.proc_status).split("/")[0]}),e("v-uni-view",{ref:"afterdiv",refInFor:!0,staticClass:"titltsfont"},[t._v(t._s(i.issue_type)+"任务")])],1),e("v-uni-view",{staticClass:"dot",style:"color:"+t.colortitle(i.proc_status).split("/")[0]},[t._v(t._s(t.colortitle(i.proc_status).split("/")[1]))])],1),e("v-uni-view",{staticClass:"lineunder"}),e("v-uni-view",{staticClass:"fotsize"},[e("v-uni-text",{},[t._v("任务描述：")]),e("v-uni-text",{staticStyle:{"line-height":"22px"}},[t._v(t._s(i.issue_name))]),e("v-uni-view",{staticClass:"bottombar"},[e("v-uni-text",[t._v("发起时间："+t._s(i.modify_time.substring(0,10)))]),e("v-uni-text",{staticStyle:{opacity:"0"}},[t._v(".........")]),e("v-uni-text",[t._v("发起人："+t._s(i.modify_user_disp.split("/")[0]))])],1)],1)],1)],1)}),e("uni-loading",{attrs:{status:t.status,color:"#888"}})],2)],1)},s=[];e.d(i,"b",function(){return a}),e.d(i,"c",function(){return s}),e.d(i,"a",function(){return n})},"46bd":function(t,i,e){"use strict";e.r(i);var n=e("4381"),a=e("4706");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("7f3f");var o,r=e("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"7a13d29f",null,!1,n["a"],o);i["default"]=l.exports},4706:function(t,i,e){"use strict";e.r(i);var n=e("bc3b"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},6691:function(t,i,e){var n=e("21a0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("27b9c726",n,!0,{sourceMap:!1,shadowMode:!1})},"7f3f":function(t,i,e){"use strict";var n=e("212b"),a=e.n(n);a.a},9189:function(t,i,e){"use strict";e.r(i);var n=e("38b1"),a=e("1c75");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("ea89");var o,r=e("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"79384538",null,!1,n["a"],o);i["default"]=l.exports},a306:function(t,i,e){var n=e("0b68");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("1812d15b",n,!0,{sourceMap:!1,shadowMode:!1})},a985:function(t,i,e){"use strict";var n=e("a306"),a=e.n(n);a.a},b31e:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("c5f6");var n={name:"mix-load-more",props:{status:{type:Number,default:0},text:{type:Array,default:function(){return["上拉加载更多","正在加载...","没有更多数据了","暂无信息"]}}}};i.default=n},bc3b:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"navTab",props:{tabTitle:{type:Array,default:[]}},data:function(){return{tabClick:0,isLeft:0,isWidth:0,tabLeft:0}},created:function(){var t=this;uni.getSystemInfo({success:function(i){t.tabTitle.length<=5?t.isWidth=i.windowWidth/t.tabTitle.length:t.isWidth=i.windowWidth/5}})},methods:{longClick:function(t){if(this.tabTitle.length>5){var i=t-2;i=i<=0?0:i,this.tabLeft=(t-2)*this.isWidth}this.tabClick=t,this.isLeft=t*this.isWidth,this.$emit("changeTab",t)}}};i.default=n},de19:function(t,i,e){"use strict";e.r(i);var n=e("1c2c"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},ea89:function(t,i,e){"use strict";var n=e("6691"),a=e.n(n);a.a},f20d:function(t,i,e){"use strict";e.r(i);var n=e("452c"),a=e("de19");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("a985");var o,r=e("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"491e8f62",null,!1,n["a"],o);i["default"]=l.exports}}]);