(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tablist/tabBar4"],{"45ce":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{currentPage:{type:String,default:"index"}},data:function(){return{tabBar:[{url:"index",text:"短模板",imgNormal:"../static/index_change.png",imgClick:"../static/index.png"},{url:"longIndex",text:"长模板",imgNormal:"../static/index_change.png",imgClick:"../static/index.png"},{url:"other",text:"其他示例",imgNormal:"../static/index_change.png",imgClick:"../static/index.png"}]}},created:function(){t.hideTabBar({})},computed:{},methods:{navTo:function(n){if(n.url!==this.currentPage){var e="/pages/".concat(n.url,"/").concat(n.url);t.switchTab({url:e})}else this.$parent.toTop()}}};n.default=e}).call(this,e("543d")["default"])},"7fd3":function(t,n,e){"use strict";var a,c=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return c}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return a})},8828:function(t,n,e){"use strict";var a=e("e39e"),c=e.n(a);c.a},a896:function(t,n,e){"use strict";e.r(n);var a=e("7fd3"),c=e("fe0b");for(var i in c)"default"!==i&&function(t){e.d(n,t,function(){return c[t]})}(i);e("8828");var r,u=e("f0c5"),o=Object(u["a"])(c["default"],a["b"],a["c"],!1,null,"1ecc45be",null,!1,a["a"],r);n["default"]=o.exports},e39e:function(t,n,e){},fe0b:function(t,n,e){"use strict";e.r(n);var a=e("45ce"),c=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tablist/tabBar4-create-component',
    {
        'components/tablist/tabBar4-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a896"))
        })
    },
    [['components/tablist/tabBar4-create-component']]
]);
