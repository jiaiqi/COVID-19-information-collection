(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{1409:function(e,t,n){},"2bbe":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,o,r,i){try{var s=e[r](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(a,o)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)})}}var s=n("0e43"),c=function(){return n.e("components/tablist/refresh").then(n.bind(null,"a546"))},u=function(){return n.e("components/tablist/navTab").then(n.bind(null,"1ba7"))},l=function(){return n.e("components/tablist/tabBar4").then(n.bind(null,"a896"))},f=function(){return n.e("components/form").then(n.bind(null,"19aa"))},h={components:{refresh:c,navTab:u,tabBar4:l,bxform:f},data:function(){return{onDept:0,showModal:!1,currentPage:"index",toView:"",showLoginModal:!1,tabTitle:["车辆","人员"],currentTab:0,pages:[1,1,1,1],list:[{}],pageInfo:{pageNo:1,rownumber:10,total:1},carData:[],personData:[],fromUser:"",depts:[],configCols:[{label:"姓名",column:"name",value:"",type:"input",isRequire:!0,isShowExp:[],buttons:[{name:"拍照",type:"navTo"}],options:[]},{label:"电话",column:"mobile",value:"",type:"number",isRequire:!1,isShowExp:[],options:[]}]}},created:function(){this.initLogin()},onLoad:function(t){e.hideNavigationBarLoading(),this.judgeClientEnviroment(),t.hasOwnProperty("fromUser")&&(this.fromUser=t.fromUser),t.currentTab&&console.log("option.currentTab",t.currentTab)},onShow:function(e){this.getList(this.currentTab)},onShareAppMessage:function(t){var n=e.getStorageSync("visiter_user_info");"button"===t.from&&console.log(t.target);var a=n.user_no;return console.log("onShareAppMessageuserNo",a),{title:"邀请您加入疫情信息采集",path:"/pages/informationManagement/informationManagement?fromUser="+a}},onHide:function(){},methods:{onItemButtons:function(e){console.log("点击了表单按钮",e)},PickerChange:function(e){console.log(e),this.onDept=e.detail.value,this.tabSelect()},addUser:function(){var e=i(a.default.mark(function e(){var t,n,o,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$refs.bxform.getFieldModel(),n=this.getServiceUrl("daq","srvdaq_check_staff_add","add"),o=[{serviceName:"srvdaq_check_staff_add",data:[t]}],console.log("表单填写",t),!t){e.next=14;break}return n=this.getServiceUrl("daq","srvdaq_check_staff_add","add"),o=[{serviceName:"srvdaq_check_staff_add",data:[t]}],e.next=9,this.$http.post(n,o);case 9:r=e.sent,console.log("srvdaq_check_staff_add",r),"SUCCESS"===r.data.state&&r.data.response.length>0&&(console.log("srvdaq_check_person_add",r.data.response),this.getUserRole(),this.hideModal()),e.next=15;break;case 14:console.log("表单填写不完整");case 15:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getUserRole:function(){var e=this,t={serviceName:"srvdaq_login_check_staff_select",colNames:["*"]},n=this.getServiceUrl("daq","srvdaq_login_check_staff_select","select");this.$http.post(n,t).then(function(t){"SUCCESS"===t.data.state&&(e.depts=t.data.data)})},tabSelect:function(e){e&&(this.currentTab=e.currentTarget.dataset.id,this.scrollLeft=60*(e.currentTarget.dataset.id-1)),0===this.currentTab?this.geCarData():1===this.currentTab&&this.getPersonData()},toTop:function(){var e=this;this.toView="",setTimeout(function(){e.toView="top"+e.currentTab},10)},getList:function(){var e=i(a.default.mark(function e(t){var n,o,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t){e.next=7;break}return n=this.getServiceUrl("daq","srvdaq_activity_mine_select","select"),o={serviceName:"srvdaq_activity_mine_select",colNames:["*"]},e.next=5,this.$http.post(n,o);case 5:r=e.sent,"SUCCESS"===r.data.state&&r.data.data.length>0&&(this.list[t]=r.data.data,console.log("this.activityData",this.activityData));case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),changeTab:function(e){this.currentTab=e,this.pageInfo={pageNo:1,rownumber:10,total:1},0===this.currentTab?this.geCarData():1===this.currentTab&&this.getPersonData()},isRequest:function(){var t=this;return new Promise(function(n,a){t.pages[t.currentTab]++;t.pageInfo.pageNo++,0===t.currentTab?t.geCarData():1===t.currentTab&&t.getPersonData(),setTimeout(function(){e.hideLoading()},1e3)})},swiperTab:function(e){var t=e.detail.current;this.$refs.navTab.longClick(t)},lower1:s.throttle(function(t){var n=this,a=this.pageInfo;a.rownumber*a.pageNo>=a.total?e.showToast({title:"已经没有数据了...",icon:"none"}):(console.log("加载".concat(this.currentTab)),e.showLoading({title:"加载中",mask:!0}),this.isRequest().then(function(e){var t=n.list;t[n.currentTab]=t[n.currentTab].concat(e),console.log(t),n.list=t,n.$forceUpdate()}))},300),refreshStart:function(e){this.$refs.refresh.refreshStart(e)},refreshMove:function(e){this.$refs.refresh.refreshMove(e)},refreshEnd:function(e){this.$refs.refresh.refreshEnd(e)},isRefresh:function(){var e=this;setTimeout(function(){e.pageInfo={pageNo:1,rownumber:10,total:1},0===e.currentTab?e.geCarData():1===e.currentTab&&e.getPersonData()},1e3)},geCarData:function(){var t=this,n="srvdaq_check_car_select",a={serviceName:n,colNames:["*"],condition:[],page:{pageNo:this.pageInfo.pageNo,rownumber:this.pageInfo.rownumber},order:[{colName:"create_time",orderType:"desc"}]};null!==this.onDept&&this.depts.length>0&&""!==this.depts[this.onDept].dept_no&&null!==this.depts[this.onDept].dept_no&&(a.condition.push({colName:"dept_no",ruleType:"eq",value:""}),a.condition[0].value=this.depts[this.onDept].dept_no);var o=this.getServiceUrl("daq",n,"select");this.$http.post(o,a).then(function(n){if(t.$refs.refresh.endAfter(),"SUCCESS"===n.data.state){t.pageInfo=n.data.page;var a=n.data.data;1===t.pageInfo.pageNo?t.carData=a:t.pageInfo.pageNo>1&&(t.carData=t.carData.concat(a),e.showToast({title:"加载成功"})),t.carData.map(function(e,n){t.getPicture(e.car_photo,n)}),t.list[0]=t.carData}})},getPersonData:function(){var t=this,n="srvdaq_check_person_select",a={serviceName:n,colNames:["*"],condition:[],page:{pageNo:this.pageInfo.pageNo,rownumber:this.pageInfo.rownumber},order:[{colName:"create_time",orderType:"desc"}]};null!==this.onDept&&this.depts.length>0&&""!==this.depts[this.onDept].dept_no&&null!==this.depts[this.onDept].dept_no&&(a.condition.push({colName:"dept_no",ruleType:"eq",value:""}),a.condition[0].value=this.depts[this.onDept].dept_no);var o=this.getServiceUrl("daq",n,"select");this.$http.post(o,a).then(function(n){if(t.$refs.refresh.endAfter(),"SUCCESS"===n.data.state){t.pageInfo=n.data.page;var a=n.data.data;1===t.pageInfo.pageNo?t.personData=a:t.pageInfo.pageNo>1&&(t.personData=t.personData.concat(a),e.showToast({title:"加载成功"})),t.personData.map(function(e,n){t.getPicture(e.id_card_photo,n)}),t.list[1]=t.personData}})},getPicture:function(e,t){var n=this,a="srvfile_attachment_select",o=this.getServiceUrl("file",a,"select"),r={serviceName:a,colNames:["*"],condition:[{colName:"file_no",value:e,ruleType:"eq"}]};null!==e&&""!==e&&void 0!==e&&this.$http.post(o,r).then(function(e){if("SUCCESS"===e.data.state){var a=e.data.data[0];if(a){var o=n.$api.srvHost+"/file/download?filePath="+a.fileurl;if(0===n.currentTab){var r=n.carData[t];r["picUrl"]=o,n.$set(n.carData,t,r)}else if(1===n.currentTab){var i=n.personData[t];i["picUrl"]=o,n.$set(n.personData,t,i)}}}})},toCreate:function(){if(console.log(this.depts),this.depts.length>0){var t=this.depts[this.onDept].dept_no;0===this.currentTab?e.navigateTo({url:"../checkInCarInfo/checkInCarInfo?dept_no="+t+"&formType=form"}):1===this.currentTab&&e.navigateTo({url:"../checkInPersonInfo/checkInPersonInfo?dept_no="+t+"&formType=form"})}},toSearch:function(){0===this.currentTab||this.currentTab},toUpdate:function(t){t&&(0===this.currentTab?e.navigateTo({url:"../checkInCarInfo/checkInCarInfo?id="+t.id+"&formType=form"}):e.navigateTo({url:"../checkInPersonInfo/checkInPersonInfo?id="+t.id+"&formType=form"}))},toCarInfo:function(t){console.log(t),e.navigateTo({url:"../checkInCarInfo/checkInCarInfo?id="+t.id+"&formType=detail"})},toPersonInfo:function(t){e.navigateTo({url:"../checkInPersonInfo/checkInPersonInfo?id="+t.id+"&formType=detail"})},initLogin:function(){var t=null,n=e.getStorageSync("is_login");console.log("是否绑定账号:",n);var a=this.isWeixinClient(),o=e.getStorageSync("client_env");console.log("是否微信环境",a),a?t||"wxmp"===o?(console.log("已获取到code,即将进行验证登录"),this.saveWxUser()):t||"wxmp"===o||(console.log("未发现code,尝试获取重定向链接",o,t),this.saveWxUser()):a||n||(this.showLoginModal=!0)},getAuthorized:function(){var t=i(a.default.mark(function t(){var n,o,r;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.getServiceUrl("wx","srvwx_public_page_authorization","operate"),o=[{data:[{app_no:this.$api.appNo.wxh5,redirect_uri:this.$api.frontEndAddress}],serviceName:"srvwx_public_page_authorization"}],t.next=4,this.$http.post(n,o);case 4:r=t.sent,console.log("response:",r),r.data.response[0].response.authUrl?(console.log("redirctUrl:",r.data.response[0].response.authUrl),window.location.href=r.data.response[0].response.authUrl):e.showToast({title:r.data.resultMessage,icon:"none"});case 7:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),saveWxUser:function(){var t=this;wx.login({success:function(n){if(n.code){var a=t.$api.verifyLogin.url,o=[{data:[{code:n.code,app_no:t.$api.appNo.wxmp}],serviceName:"srvwx_app_login_verify"}];t.$http.post(a,o).then(function(n){if("SUCCESS"===n.data.resultCode){var a=n.data.response[0].response,o=parseInt((new Date).getTime()/1e3)+a.expire_time;e.setStorageSync("bx_auth_ticket",a.bx_auth_ticket),e.setStorageSync("expire_time",a.expire_time),e.setStorageSync("expire_timestamp",o),a.login_user_info?(e.setStorageSync("is_login",!1),e.setStorageSync("visiter_user_info",a.login_user_info),t.openid=a.login_user_info.openid,e.setStorageSync("user_type","匿名用户"),console.log("微信小程序环境---未登录"),t.getUserRole(),t.geCarData()):e.setStorageSync("is_login",!0)}else"FAILURE"===n.data.resultCode&&(e.setStorageSync("is_login",!1),e.showToast({title:n.data.resultMessage}))})}else e.setStorageSync("is_login",!1),console.log("登录失败！"+n.errMsg)}})},checkAuthorization:function(){e.getUserInfo({provider:"weixin",success:function(t){e.setStorageSync("userInfo",t.userInfo)},fail:function(t){console.log("获取用户信息失败失败",t),e.navigateTo({url:"../authorization/authorization"})}});var t=this;e.authorize({scope:"scope.userInfo",success:function(n){t.userInfoAuth=!0,e.getUserInfo({provider:"weixin",success:function(t){e.setStorageSync("userInfo",t.userInfo)},fail:function(t){console.log("获取用户信息失败失败",t),e.navigateTo({url:"../authorization/authorization"})}})},fail:function(e){t.userInfoAuth=!1}})},judgeClientEnviroment:function(){var t="";t="wxmp";var n="";switch(e.getSystemInfoSync().platform){case"android":console.log("运行Android上"),n="android";break;case"ios":console.log("运行iOS上"),n="ios";break;default:n="web"}return this.client_type=n,this.client_env=t,e.setStorageSync("client_env",t),e.setStorageSync("client_type",n),{client_env:t,client_type:n}},hideModal:function(e){this.showModal=!1},showModalView:function(){this.showModal=!0}}};t.default=h}).call(this,n("543d")["default"])},"3feb":function(e,t,n){"use strict";var a=n("1409"),o=n.n(a);o.a},"4cd6":function(e,t,n){"use strict";(function(e){n("7ad1"),n("921b");a(n("66fd"));var t=a(n("9205"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"7aab":function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a})},9205:function(e,t,n){"use strict";n.r(t);var a=n("7aab"),o=n("a046");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("3feb");var i,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"02836d0e",null,!1,a["a"],i);t["default"]=c.exports},a046:function(e,t,n){"use strict";n.r(t);var a=n("2bbe"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=o.a}},[["4cd6","common/runtime","common/vendor"]]]);