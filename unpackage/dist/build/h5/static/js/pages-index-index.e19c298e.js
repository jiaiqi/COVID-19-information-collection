(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"00bd":function(e,t,i){var n=i("2f51");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("61f15083",n,!0,{sourceMap:!1,shadowMode:!1})},"0540":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("e814"));i("96cf");var r=n(i("3b8d")),o=n(i("cebc")),s=n(i("6803")),c=i("2f62"),l={components:{bwSwiper:s.default},computed:(0,o.default)({},(0,c.mapGetters)(["getLoginState"])),data:function(){return{openid:"",userInfoAuth:"",client_env:"",client_type:"",swiperList:[{img:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg",text:"加油"},{img:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg",text:"加油"},{img:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg",text:"加油"}],menus:[],bgcolor:["linear-gradient(0deg,rgba(9,216,162,1),rgba(90,242,217,1))","linear-gradient(0deg,rgba(251,184,35,1),rgba(255,228,40,1))","linear-gradient(0deg,rgba(255,126,34,1),rgba(240,184,27,1))","linear-gradient(0deg,rgba(9,177,252,1),rgba(24,200,255,1))"],second_menus:[{icon:"/static/exam.png",txt:"考试教案"},{icon:"/static/textbook.png",txt:"教材教案"},{icon:"/static/book_ticket.png",txt:"青书券"},{icon:"/static/more.png",txt:"全部课程"}],records:[{bg:"linear-gradient(-30deg,rgba(171,218,255,1),rgba(215,239,255,1))",title:"教师考情分析",mainTeacher:"小A",subTitle:"标题名称",subColor:"#15639F",icon:"/static/test2.png",isFree:!0},{bg:"linear-gradient(-30deg,rgba(192,253,227,1),rgba(224,252,240,1))",title:"查看详情",mainTeacher:"小B",subTitle:"标题名称",subColor:"#07B77B",icon:"/static/test.png",isFree:!1},{bg:"linear-gradient(-30deg,rgba(171,218,255,1),rgba(215,239,255,1))",title:"教师考情分析",mainTeacher:"小A",subTitle:"标题名称",subColor:"#15639F",icon:"/static/test2.png",isFree:!0}]}},onLoad:function(){var e=this.judgeClientEnviroment();console.log("client_env:",e.client_env,"\nclient_type:",e.client_type)},onShow:function(){this.initLogin()},methods:{initLogin:function(){var e=this,t=null;t=this.$route.query.code;var i=uni.getStorageSync("is_login");console.log("是否绑定账号:",i);var n=this.isWeixinClient(),a=uni.getStorageSync("client_env");console.log("是否微信环境",n),n?t||"wxmp"===a?(console.log("已获取到code,即将进行验证登录"),this.saveWxUser(),e.getMenuData()):t||"wxmp"===a||(console.log("未发现code,尝试获取重定向链接"),e.getAuthorized()):n||(i?e.getMenuData():uni.showModal({title:"提示",content:"未登录,是否跳转到登录页面",success:function(e){e.confirm?uni.navigateTo({url:"../login/login"}):uni.setStorageSync("user_type","游客")}}))},judgeClientEnviroment:function(){var e="",t=this.isWeixinClient();console.log("isWeixin",t),e=t?"wxh5":"web";var i="";switch(uni.getSystemInfoSync().platform){case"android":console.log("运行Android上"),i="android";break;case"ios":console.log("运行iOS上"),i="ios";break;default:i="web"}return this.client_type=i,this.client_env=e,uni.setStorageSync("client_env",e),uni.setStorageSync("client_type",i),{client_env:e,client_type:i}},getuserinfo:function(e){},openSetting:function(){uni.openSetting({success:function(e){console.log(e.authSetting)}})},checkLoginStatus:function(){var e=!1;return e=uni.getStorageSync("is_login"),e},checkAuthorization:function(){},getAuthorized:function(){var e=(0,r.default)(regeneratorRuntime.mark(function e(){var t,i,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.getServiceUrl("wx","srvwx_public_page_authorization","operate"),i=[{data:[{app_no:this.$api.appNo.wxh5,redirect_uri:this.$api.frontEndAddress}],serviceName:"srvwx_public_page_authorization"}],e.next=4,this.$http.post(t,i);case 4:n=e.sent,n.data.response[0].response.authUrl?(console.log("redirctUrl:",n.data.response[0].response.authUrl),window.location.href=n.data.response[0].response.authUrl):uni.showToast({title:n.data.resultMessage,icon:"none"});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),saveWxUser:function(){var e=this,t=this,i=t.isWeixinClient();if(i){var n=[{data:[{code:t.$route.query.code,app_no:t.$api.appNo.wxh5}],serviceName:"srvwx_app_login_verify"}],r=this.getServiceUrl("oa","srvsys_user_menu_select","select");this.$http.post(r,n).then(function(t){if("SUCCESS"===t.data.resultCode&&t.data.response[0].response){var i=t.data.response[0].response,n={bx_auth_ticket:i.bx_auth_ticket,expire_time:i.expire_time},r=(0,a.default)((new Date).getTime()/1e3)+n.expire_time;uni.setStorageSync("bx_auth_ticket",i.bx_auth_ticket),uni.setStorageSync("expire_time",i.expire_time),uni.setStorageSync("expire_timestamp",r),i.login_user_info.data&&e.$store.commit("setOpenid",i.login_user_info.data[0].openid),self.$store.commit("setAuthorState",!0)}else self.$store.commit("setAuthorState",!1),console.log("授权失败")})}},toAccountLogin:function(){var e=this;uni.showModal({title:"提示",content:"未登录,是否跳转到登录页面?",confirmText:"登录",success:function(t){t.confirm&&uni.navigateTo({url:"../login/login?openid="+e.openid})}})},getMenuData:function(){var e=this,t=this.getServiceUrl("oa","srvsys_user_menu_select","select"),i={serviceName:"srvsys_user_menu_select",colNames:["*"],order:[{colName:"seq",orderType:"asc"}]};this.$http.post(t,i).then(function(t){var i=t.data.data;console.log("item",i);var n=[];for(var a in i)"是"==i[a].shortcut_flag&&(e.$set(i[a],"bg",e.bgcolor[a]),n.push(i[a]));e.menus=n})},getmenu:function(){var e=(0,r.default)(regeneratorRuntime.mark(function e(t){var i,n,a,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=this.getServiceUrl("oa","srvsys_service_columnex_v2_select?colsel_v2=".concat(t,"_select"),"select"),n={serviceName:"srvsys_service_columnex_v2_select",colNames:["*"],condition:[{colName:"service_name",value:"".concat(t,"_select"),ruleType:"eq"},{colName:"use_type",value:"treelist",ruleType:"eq"}],order:[{colName:"seq",orderType:"asc"}]},e.next=4,this.$http.post(i,n);case 4:a=e.sent,r=["treeList","tabList"],o=a.data.data.is_tree?0:1,uni.navigateTo({url:"../list/".concat(r[o],"?val=")+a.data.data.service_name});case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),lists:function(e){this.getmenu(e)},fromitem:function(){uni.navigateTo({url:"../form/formitem"})},toDietRecord:function(){uni.navigateTo({url:"../dietRecord/dietRecord"})}}};t.default=l},"0c31":function(e,t,i){"use strict";var n=i("00bd"),a=i.n(n);a.a},"16ea":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("c5f6");var n={name:"bw-swiper",created:function(){this.fullScreen&&uni.getSystemInfo({success:function(e){}})},mounted:function(){if(!this.fullScreen){var e=uni.createSelectorQuery().in(this);e.select(".swiper-item").boundingClientRect(function(e){}).exec()}},props:{fullScreen:{type:Boolean,default:!1},swiperList:{type:Array,default:function(){return[]}},swiperType:{type:Boolean,default:!0},videoAutoplay:{type:Boolean,default:!1},videoKey:{type:String,default:"src"},imageKey:{type:String,default:"img"},textKey:{type:String,default:"text"},textTip:{type:Boolean,default:!1},textStyleSize:{type:Number,default:24},textStyleBottom:{type:Number,default:5},textStyleRight:{type:Number,default:5},textStyleColor:{type:String,default:"#ffffff"},textStyleBgcolor:{type:String,default:"transparent"},w_h:{type:Number,default:2},skipHiddenItemLayout:{type:Boolean,default:!1},displayMultipleItems:{type:Number,default:1},nextMargin:{type:String,default:"0px"},previousMargin:{type:String,default:"0px"},vertical:{type:Boolean,default:!1},circular:{type:Boolean,default:!0},duration:{type:Number,default:400},interval:{type:Number,default:2500},current:{type:Number,default:0},autoplay:{type:Boolean,default:!0},indicatorColor:{type:String,default:"#CCCCCC"},indicatorActiveColor:{type:String,default:"#ffffff"},indicatorDots:{type:Boolean,default:!0}},data:function(){return{flag:!0,cardCur:0,swiperHeight:128}},computed:{},methods:{play:function(){this.flag=!1},pause:function(){this.flag=!0},clickItem:function(e){this.swiperList.length>0&&this.$emit("clickItem",this.swiperList[e])},change:function(e){this.$emit("change",e)},animationfinish:function(e){this.cardCur=e.detail.current,this.$emit("animationfinish",e)}}};t.default=n},"2f51":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-d9e64ba8]{width:100%;background-color:#ebebeb}body.?%PAGE?%[data-v-d9e64ba8]{background-color:#ebebeb}",""])},3855:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".cardSwiper .swiper-item[data-v-02eac381]{width:86%!important;overflow:initial}.cardSwiper .swiper-item uni-view[data-v-02eac381]{width:100%;display:block;height:128px!important;border-radius:%?10?%;-webkit-transform:scale(.93,.8);transform:scale(.93,.8);opacity:.7;-webkit-transition:all .1s ease-in 0s;transition:all .1s ease-in 0s;overflow:hidden;box-sizing:border-box;margin-left:8.1%}.cardSwiper .cur uni-view[data-v-02eac381]{-webkit-transform:initial;transform:none;opacity:1;-webkit-transition:all .1s ease-in 0s;transition:all .1s ease-in 0s}.swiper-item uni-view[data-v-02eac381]{height:100%;width:100%;position:relative}.swiperText[data-v-02eac381]{position:absolute;color:#fff;z-index:2;border-radius:%?4?%;padding:0 %?4?%}.screen-swiper uni-image[data-v-02eac381]{width:100%}.screen-swiper uni-video[data-v-02eac381],.swiper-item uni-video[data-v-02eac381]{width:100%;display:block;height:100%}.swiperContent[data-v-02eac381]{width:100%;height:50px!important}",""])},"40ca":function(e,t,i){"use strict";i.r(t);var n=i("b86f"),a=i("775b");for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);i("0c31"),i("fec6");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"d9e64ba8",null,!1,n["a"],o);t["default"]=c.exports},6803:function(e,t,i){"use strict";i.r(t);var n=i("6f7e"),a=i("9820");for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);i("f640");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"02eac381",null,!1,n["a"],o);t["default"]=c.exports},"6b9c":function(e,t,i){var n=i("bb11");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("0fc8be1c",n,!0,{sourceMap:!1,shadowMode:!1})},"6f7e":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"swiperContent"},[i("v-uni-swiper",{staticClass:"screen-swiper",class:!e.swiperType||1!=e.displayMultipleItems||e.vertical||e.fullScreen?"":"cardSwiper",style:{height:e.swiperHeight+"px"},attrs:{"indicator-active-color":e.indicatorActiveColor,"indicator-color":e.indicatorColor,autoplay:e.autoplay&&e.flag,current:e.current,interval:e.interval,duration:e.duration,circular:e.circular,vertical:e.vertical,"previous-margin":e.previousMargin,"next-margin":e.nextMargin,"display-multiple-items":e.displayMultipleItems,"skip-hidden-item-layout":e.skipHiddenItemLayout},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)},animationfinish:function(t){arguments[0]=t=e.$handleEvent(t),e.animationfinish.apply(void 0,arguments)}}},e._l(e.swiperList,function(t,n){return i("v-uni-swiper-item",{key:n,staticClass:"swiper-item",class:e.cardCur!=n||1!=e.displayMultipleItems||e.vertical||e.fullScreen?"":"cur",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickItem(n)}}},[t[e.imageKey]&&!t[e.videoKey]?i("v-uni-view",[i("v-uni-image",{style:{height:e.swiperHeight+"px"},attrs:{src:t[e.imageKey]}})],1):e._e()],1)}),1)],1)},r=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return r}),i.d(t,"a",function(){return n})},"775b":function(e,t,i){"use strict";i.r(t);var n=i("0540"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=a.a},9820:function(e,t,i){"use strict";i.r(t);var n=i("16ea"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=a.a},b86f:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page_edu"},[i("v-uni-view",{staticClass:"status_bar"}),i("v-uni-view",{staticClass:"page_edu_header"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-image",{staticClass:"btn",attrs:{src:"/static/icon_main.png"}}),i("v-uni-view",{staticClass:"input"},[i("v-uni-image",{staticClass:"search",attrs:{src:"/static/search.png"}}),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"搜索"}})],1),i("v-uni-image",{staticClass:"btn",attrs:{src:"/static/msg.png"}})],1),i("v-uni-view",{staticClass:"header_content"},[i("bw-swiper",{staticStyle:{width:"100%"},attrs:{swiperList:e.swiperList}})],1)],1),i("v-uni-view",{staticClass:"page_content"},[i("v-uni-view",{staticClass:"menu"},[e._l(e.menus,function(t,n){return[i("v-uni-view",{key:n,staticClass:"item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.lists(t.menu_no)}}},[i("v-uni-view",{staticClass:"img_view",style:{background:t.bg}}),i("v-uni-text",{staticClass:"txt"},[e._v(e._s(t.menu_name))])],1)]})],2),i("v-uni-view",{staticClass:"s_menu"},[e._l(e.second_menus,function(t,n){return[i("v-uni-view",{key:n,staticClass:"item"},[i("v-uni-image",{staticClass:"image",attrs:{src:t.icon}}),i("v-uni-text",{staticClass:"txt"},[e._v(e._s(t.txt))])],1)]})],2),i("v-uni-view",{staticClass:"ad",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.fromitem.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"ad_btn"},[i("v-uni-text",{staticClass:"title"},[e._v("教资面试课上线")]),i("v-uni-text",{staticClass:"sub_title"},[e._v("老用户现实立减100元")])],1),i("v-uni-image",{staticClass:"bg",attrs:{src:"/static/tag.png"}})],1)],1),i("v-uni-scroll-view",{staticClass:"slider",attrs:{"scroll-x":"true"}},[e._l(e.records,function(t,n){return[i("v-uni-view",{key:n,staticClass:"item",style:{background:t.bg,marginRight:n===e.records.length-1?"15px":"0px"}},[i("v-uni-view",{staticClass:"item_content"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{staticClass:"first"},[e._v(e._s(t.title))]),i("v-uni-text",{staticClass:"main"},[e._v("主讲："+e._s(t.mainTeacher))]),i("v-uni-text",{staticClass:"sub",style:{color:t.subColor}},[e._v("标题名称")])],1),i("v-uni-text",{staticClass:"free"},[e._v("免\\n费")])],1)],1)]})],2),i("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toDietRecord.apply(void 0,arguments)}}},[e._v("饮食记录")])],1)},r=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return r}),i.d(t,"a",function(){return n})},bb11:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page_edu[data-v-d9e64ba8]{width:100%}.status_bar[data-v-d9e64ba8]{height:0;background-color:#0bc99d}.page_edu_header[data-v-d9e64ba8]{background-color:#0bc99d;width:100%;height:276.66667px}.page_edu_header .header[data-v-d9e64ba8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:13.33333px}.page_edu_header .header .btn[data-v-d9e64ba8]{width:24px;height:20px}.page_edu_header .header .input[data-v-d9e64ba8]{height:33.33333px;width:100%;margin-left:13.33333px;margin-right:13.33333px;background:#fff;border-radius:20px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page_edu_header .header .input .search[data-v-d9e64ba8]{width:20px;height:20px;margin-left:13.33333px;margin-right:13.33333px}.page_edu_header .header_content[data-v-d9e64ba8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.page_edu_header .header_content .left[data-v-d9e64ba8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:57%;margin-top:10px;margin-left:15px;margin-right:15px}.page_edu_header .header_content .left .title[data-v-d9e64ba8]{width:279.33333px;height:39.33333px;font-size:31.33333px;font-weight:700;color:#fff}.page_edu_header .header_content .left .sub_title[data-v-d9e64ba8]{margin-top:3px;font-size:12px;font-weight:400;color:#fff;background:-webkit-linear-gradient(bottom,#78ffe0,#fff);background:linear-gradient(0deg,#78ffe0,#fff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.page_edu_header .header_content .left .btn[data-v-d9e64ba8]{margin-top:3px;width:132px;height:40px;background:-webkit-linear-gradient(120deg,#fc871d,#f6b909);background:linear-gradient(-30deg,#fc871d,#f6b909);box-shadow:0 4px 10px 0 rgba(255,121,0,.5);border-radius:20px;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page_content[data-v-d9e64ba8]{width:100%;margin-top:-74px}.page_content .menu[data-v-d9e64ba8]{margin-left:10px;margin-right:10px;padding-left:10px;padding-right:10px;height:117.33333px;background:#fff;box-shadow:0 10px 10px 0 rgba(0,161,124,.1);border-radius:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.page_content .menu .item[data-v-d9e64ba8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page_content .menu .item .img_view[data-v-d9e64ba8]{width:60px;height:60px;border-radius:30px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page_content .menu .item .img_view .image[data-v-d9e64ba8]{width:50px;height:50px}.page_content .menu .item .txt[data-v-d9e64ba8]{margin-top:5px;font-size:14px;color:#333}.page_content .s_menu[data-v-d9e64ba8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:15px;margin-left:10px;margin-right:10px;padding-left:10px;padding-right:10px}.page_content .s_menu .item[data-v-d9e64ba8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page_content .s_menu .item .image[data-v-d9e64ba8]{width:35px;height:35px}.page_content .s_menu .item .txt[data-v-d9e64ba8]{margin-top:5px;font-size:14px;color:#333}.page_content .ad[data-v-d9e64ba8]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page_content .ad .bg[data-v-d9e64ba8]{position:absolute;width:120px;height:105px;left:0}.page_content .ad .ad_btn[data-v-d9e64ba8]{width:100%;height:63px;margin:30px;background:-webkit-linear-gradient(bottom,#fd9b1c,#fbc521);background:linear-gradient(0deg,#fd9b1c,#fbc521);border-radius:67px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page_content .ad .ad_btn .title[data-v-d9e64ba8]{font-size:25.33333px;font-family:PingFang-SC-Heavy;font-weight:800;color:#fff}.page_content .ad .ad_btn .sub_title[data-v-d9e64ba8]{background:-webkit-linear-gradient(bottom,#ff8025,#ff9920);background:linear-gradient(0deg,#ff8025,#ff9920);box-shadow:0 4px 5px 0 rgba(92,53,48,.3),0 1px 0 0 #e4e4e4;border-radius:16px;font-size:16px;font-family:PingFang-SC-Heavy;font-weight:800;font-style:italic;color:#ffecb1;line-height:17.33333px}.slider[data-v-d9e64ba8]{white-space:nowrap;width:100%;background-color:#fff}.slider .item[data-v-d9e64ba8]{display:inline-block;margin-left:15px;margin-top:13px;margin-bottom:13px;width:60%;height:125px;border-radius:10px}.slider .item .item_content[data-v-d9e64ba8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative}.slider .item .item_content .title[data-v-d9e64ba8]{width:36%;margin:20px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.slider .item .item_content .title .first[data-v-d9e64ba8]{font-size:16px;color:#2e4145}.slider .item .item_content .title .main[data-v-d9e64ba8]{font-size:13px;color:#4f6765;margin-top:5px}.slider .item .item_content .title .sub[data-v-d9e64ba8]{width:60px;font-size:10px;margin-top:20px;background:hsla(0,0%,100%,.4);border-radius:5px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.slider .item .item_content .image[data-v-d9e64ba8]{margin-top:35px;width:80px;height:80px}.slider .item .item_content .free[data-v-d9e64ba8]{background:#0b93fc;border-radius:0 0 22px 22px;width:25px;height:50px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;right:0;color:#fff;font-size:14px}',""])},cdda:function(e,t,i){var n=i("3855");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("e83d36a6",n,!0,{sourceMap:!1,shadowMode:!1})},f640:function(e,t,i){"use strict";var n=i("cdda"),a=i.n(n);a.a},fec6:function(e,t,i){"use strict";var n=i("6b9c"),a=i.n(n);a.a}}]);