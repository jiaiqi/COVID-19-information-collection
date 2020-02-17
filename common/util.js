export default {
  install(Vue, options) {
    Vue.prototype.pageTitle = '加载中…' // 可以自定义变量
    /**
     * 登录相关
     */

    /**
     *@param {Array} loginInfoList 要存储的登录信息 [{key:'',value:''}]
     */
    Vue.prototype.saveLoginInfo = function(loginInfoList = []) {
      loginInfoList.map(item => {
        uni.setStorageSync(item.key, item.value)
      })
    }

    Vue.prototype.$logout = function() {
      try {
        uni.clearStorageSync();
      } catch (e) {
        console.error(e)
      }
    }

    /**
     * v2
     */

    // -------------------公共方法-------------------------------
    /**
     * @param {String} app 
     * @param {String} srv - 服务名(serviceName)
     * @param {String} srvType 
     * @param {String} url - 协议+ip+端口
     */
    Vue.prototype.getServiceUrl = function(app, srv, srvType, url) {
        // 获取转换URL app, srv, srvType, url

        let urlVal = url || Vue.prototype.$api.srvHost
        let appVal = app
        let srvTypeVal = srvType
        let srvVal = srv
        return urlVal + '/' + appVal + '/' + srvTypeVal + '/' + srvVal
      },
      Vue.prototype.deepClone = function(obj) {
        // 深拷贝
        function isObject(o) {
          return (typeof o === 'object' || typeof o === 'function') && o !== null
        }
        if (!isObject(obj)) {
          throw new Error('非对象')
        }
        let isArray = Array.isArray(obj)
        let newObj = isArray ? [...obj] : { ...obj
        }
        Reflect.ownKeys(newObj).forEach(key => {
          newObj[key] = isObject(obj[key]) ? Vue.prototype.deepClone(obj[key]) : obj[key]
        })
        return newObj
      }

    Vue.prototype.toPreviousPage = function() {
      uni.navigateBack({
        animationDuration: 2000,
        animationType: 'zoom-fade-in',
        delta: 1
      });
    }

    Vue.prototype.formateDate = function(date) {
      let o = {
        'yy': date.getFullYear(),
        'MM': date.getMonth() + 1,
        'dd': date.getDate(),
        'HH': date.getHours(),
        'mm': (() => {
          let mm = date.getMinutes()
          if (mm < 10) {
            mm = '0' + mm
          }
          return mm
        })(),
        'ss': date.getSeconds()
      };
      return o.yy + '-' + o.MM + '-' + o.dd + ' ' + o.HH + ':' + o.mm + ':' + o.ss;
    };
    // -------------------- 微信相关 -----------------
    /**
     *  判断是否当前环境是微信
     *  @return {boolean} true||false
     */
    Vue.prototype.isWeixinClient = function() {
      // #ifdef H5
      let ua = navigator.userAgent.toLowerCase()
      // 微信公众号环境
      let isWeixin = ua.indexOf('micromessenger') !== -1
      if (isWeixin) {
        return true
      } else {
        return false
      }
      // #endif
      // #ifdef MP-WEIXIN
      // 微信小程序环境
      return true
      // #endif
    };
	Vue.prototype.getCoulmnConfig = function(e){
		let cnCol = {
			// "activity_no": "20200208002600000007",
			// "item_no":"000001",
			"item_seq": 1,
			"item_title": e.item_title,
			"item_type": e.item_type,
			"is_require": e.is_require,
			// "column":e.column,
			"item_type_attr": {
			},
			"is_public":"否",
			"show_cfg":"",
			// "option_data":[]
		}
		switch(e.item_type) {
		     case "string":
				cnCol.item_type_attr['view_model'] = e.view_model
				cnCol.item_type_attr['max_len'] = e.max_len
		        break;
		     case "checkbox":
		        
		        break;
			case "date":
				cnCol.item_type_attr['format'] = e.format
			   break;
			case "number":
				cnCol.item_type_attr['decimal_places'] = e.decimal_places
				cnCol.item_type_attr['max'] = e.max
				cnCol.item_type_attr['min'] = e.min
			   break;
			case "image":
				cnCol.item_type_attr['max_num'] = e.max_num
			   break;
		     default:
		        ''
		}
		cnCol.item_type_attr = JSON.stringify(cnCol.item_type_attr)
		// cnCol.show_cfg = JSON.stringify(cnCol.show_cfg)
		cnCol.option_data = JSON.stringify(cnCol.option_data)
		return cnCol
	}
	/**
	 * QUsHE inputs inputsArray 数据构造
	 * 
	 * */
	Vue.prototype.getInputsArray =  function(e){
		let viewCfg = e 
		
		let inputTemp = function(){
			let a = {
				
				type:"", //input textarea pics  radio checkbox picker-date（picker-dateTime| String| 日期加时间| | picker-date| String| 日期| | picker-time| String| 时间|） picker-city text  infinitePics
				title:"名称",//
				inputType:"",// text number
				maxlength:"",// 最大长度
				// ignore:false,// 是否为空
				defaultValue:"",// 默认值
				itemArray:[],// 选项值和名称 name value
				column:"",
			}
			return a
		}
		let inputsDatas = viewCfg.map((item,index)=>{
			let inputData = inputTemp()
			inputData.title = item.item_title
			inputData.column = item.column
			inputData.no = item.item_no
			inputData.width = "100"
			switch(item.item_type) {
			     case "string":
					if(item.item_type_attr.hasOwnProperty("view_model")){
						if(item.item_type_attr.view_model === "单行"){
							inputData.type = "input"
							
							return inputData
						}else if(item.item_type_attr.view_model === "多行"){
							inputData.type = "textarea"
							return inputData
						}
					}else{
						inputData.type = "input"
						
						return inputData
					}
			        break;
			     case "checkbox":
			        if(item.item_type_attr.hasOwnProperty("option_type")){
						
			        	if(item.item_type_attr.option_type === "单选"){
			        		inputData.type = "radio"
			        		inputData.itemArray = item.option_data.map((item,index)=>{
								let a = {
									name:item.option_value,
									value:item.option_no
								}
								return a 
							})
			        		return inputData
			        	}else if(item.item_type_attr.option_type === "多选"){
			        		inputData.type = "checkbox"
			        		inputData.itemArray = item.option_data.map((item,index)=>{
								let a = {
									name:item.option_value,
									value:item.option_no
								}
								return a 
							})
			        		return inputData
			        	}
			        }
			        break;
				case "date":
					inputData.type = "picker-date"
					if(item.item_type_attr.hasOwnProperty("format")){
						if(item.item_type_attr.format === 'date'){
							inputData.mode = "picker-date"
						}else if(item.item_type_attr.format === 'time'){
							inputData.mode = "picker-time"
						}else if(item.item_type_attr.format === 'datetime'){
							inputData.mode = "picker-datetime"
						}
					}
					
				   return inputData
				   break;
				case "number":
					inputData.type = "input"
					inputData.inputType="number"
					if(item.item_type_attr.hasOwnProperty("decimal_places")){
						if(item.item_type_attr.decimal_places === "decimal"){
							inputData.verifyType = "Number"
							inputData.filterType = "twoDecimalPlaces"
						}else if(item.item_type_attr.decimal_places === "Int"){
							inputData.verifyType = "Int"
						}
					}
					
				   return inputData
				   break;
				case "image":
					if(item.item_type_attr.hasOwnProperty("max_num")){
						inputData.type = "infinitePics"
						inputData.max = item.item_type_attr.max_num
						return inputData
					}
				
				   
				   break;
			     default:
			        return inputData
			}
		})
		
		return inputsDatas
	}
	Vue.prototype.getResData = function(e){
		if(e.length > 0){
			return e[0].response.effect_data[0]
		}
	},
	Vue.prototype.getDef = function(){
		let defType = null
		// #ifdef MP-WEIXIN
		defType = "MP-WEIXIN"
		
		Vue.prototype.defType = defType
		// #endif
		// #ifdef H5
		defType = "H5"
		Vue.prototype.defType = defType
		// #endif
		
		return defType
	}
	Vue.prototype.evalInTo = function (e,q) {
		let item = q
		let exp = e.isShowExp
		let showExp = false
		let isShowNum = 0
		if(exp.length > 0){
			
			for(let i = 0; i<exp.length;i++){
				if(exp[i].type === 'eq'){
					if(item[exp[i].column] === exp[i].value){
						isShowNum ++
					}
				}else if(exp[i].type === 'neq'){
					if(item[exp[i].column] !== exp[i].value){
						isShowNum ++
					}
				}
			}
			return exp.length === isShowNum
		}else{
			return true
		}
	},
	Vue.prototype.getFilePath = async function(e){
		let url = Vue.prototype.getServiceUrl('file','srvfile_attachment_select','select')
		let req = {
			"serviceName":"srvfile_attachment_select",
			"colNames":["*"],
			"condition":[{
				"colName":"file_no",
				"value":e,
				"ruleType":"eq",
				},{
				"colName":"is_delete",
				"value":"1",
				"ruleType":"eq",
				},
			]}
			if(e){
				let response = await this.$http.post(url, req);
				console.log('srvfile_attachment_select', response);
				if (response.data.state === 'SUCCESS' && response.data.data.length > 0) {
					return response.data.data
				}
			}
		
		// http://srvms.100xsys.cn/file/select/srvfile_attachment_select?srvfile_attachment_select
	}
  }
}
