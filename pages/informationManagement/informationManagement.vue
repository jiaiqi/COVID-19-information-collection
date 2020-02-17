<template>
	<view>
		<view class="bg-white info-hander_title justify-between">
			<picker v-if="depts.length !== 0" @change="PickerChange" range-key="dept_name" :value="onDept" :range="depts">
				<view class="picker text-blue"><text class="cuIcon-home"></text>
				{{ onDept > -1 ? depts[onDept].dept_name === null ? "暂无单位信息" : depts[onDept].dept_name : '禁止换行，超出容器部分会以 ... 方式截断' }}</view>
			</picker>
			<button v-if="depts.length === 0" class="cu-btn round bg-yellow shadow-blur" @click="showModalView()">
				<text class="cuIcon-add icon"></text>
				开通
			</button>
		</view>
		<scroll-view scroll-x class="bg-blue nav text-center">
			<view class="cu-item" :class="index == currentTab ? 'text-white cur' : ''" v-for="(item, index) in tabList" :key="index" @tap="tabSelect" :data-id="index">
				{{ item.label }}
			</view>
		</scroll-view>
		<view :class="!(depts.length > 0) ? 'button-box show' : 'button-box hide'">
			<button class="cu-btn bg-blue " @click="toCreate()">
				<text class="cuIcon-add icon"></text>
				创建
			</button>
			<!-- <button class="cu-btn bg-blue " @click="toSearch()">
				<text class="cuIcon-search icon"></text>
				查找
			</button> -->
		</view>
		<scroll-view scroll-y class="" style="height: calc(100vh - 240upx);" @scrolltoupper="tabSelect">
			<view class="list-wrap" v-if="currentTab === 0">
				<view class="list-item" v-for="(item, index) in carData" :key="index">
					<view class="pic-box"><image class="picture" :src="item.picUrl" mode="" v-if="currentTab === 0"></image></view>
					<view class="text-box">
						<view class="text-item">
							<text class="text">
								车牌:
								<text class="value">{{ item.car_no }}</text>
							</text>
							<text class="text">
								人员:
								<text class="value">{{ item.person_num }}</text>
							</text>
						</view>
						<view class="text-item">
							<text class="text">
								来源:
								<text class="value">{{ item.from_addr }}</text>
							</text>
						</view>
						<view class="text-item">
							<text class="text">
								时间:
								<text class="value">{{ item.create_time }}</text>
							</text>
						</view>
						<view class="bntton-box">
							<button class="cu-btn block bg-blue sm" @click="toCarInfo(item)">
								<text class="cuIcon-edit icon"></text>
								编辑
							</button>
						</view>
					</view>
				</view>
				<view  class="text-center flex_column" :class="carData.length > 0 ? 'hide' :'show'">
					<text>暂无数据</text>
				</view>
			</view>
			<view class="list-wrap" v-if="currentTab === 1">
				<view class="list-item" v-for="(item, index) in personData" :key="index">
					<view class="pic-box"><image class="picture" :src="item.picUrl" mode=""></image></view>
					<view class="text-box">
						<view class="text-item">
							<text class="text">
								姓名:
								<text class="value">{{ item.name }}</text>
							</text>
							<text class="text">
								体温:
								<text class="value">{{ item.temperature ? item.temperature : '未记录' }}</text>
							</text>
						</view>
						<view class="text-item">
							<text class="text">
								联系电话:
								<text class="value">{{ item.phone ? item.phone : '未记录' }}</text>
							</text>
						</view>
						<view class="text-item">
							<text class="text">
								身份证号:
								<text class="value">{{ item.id_card_no ? item.id_card_no : '未记录' }}</text>
							</text>
						</view>
						<!-- <view class="text-item">
							<text class="text">
								户籍所在地:
								<text class="value">{{ item.id_card_addr?item.id_card_addr:'未记录' }}</text>
							</text>
						</view>
						<view class="text-item">
							<text class="text">
								说明:
								<text class="value">{{ item.remark?item.remark:'无' }}</text>
							</text>
						</view> -->
						<view class="text-item">
							<text class="text">
								时间:
								<text class="value">{{ item.create_time }}</text>
							</text>
						</view>
						<view class="bntton-box">
							<button class="cu-btn block bg-blue sm">
								<text class="cuIcon-edit icon"></text>
								编辑
							</button>
						</view>
					</view>
				</view>
				
				<view  class="text-center flex_column" :class="personData.length > 0 ? 'hide' :'show'">
					<text>暂无数据</text>
				</view>
			</view>
		</scroll-view>
		<view class="cu-modal bottom-modal" :class="showModal ? 'show' : ''">
			<view class="cu-dialog" @tap.stop>
				<view class="cu-bar bg-white">
					<button class="action text-blue" @click.stop="hideModal">取消</button>
					<button class="action text-blue" @click.stop="addUser">确定</button>
				</view>
				<view class="cu-modal-content"><bxform ref="bxform" :fields="configCols"></bxform></view>
			</view>
		</view>
	</view>
</template>

<script>
import bxform from '@/components/form.vue';
export default {
	name: 'InfoManagement', //填报人员信息管理页面
	components: { bxform },
	data() {
		return {
			onDept: 0,
			showModal: false,
			tabList: [
				{
					label: '车辆'
				},
				{
					label: '人员'
				}
			],
			currentTab: 0,
			tabTitle: '填报人员信息管理页面',
			pageInfo: {
				pageNo: 1,
				rownumber: 10,
				total: 1
			},
			carData: [],
			personData: [],
			fromUser: '',
			depts: [],
			configCols: [
				{
					label: '姓名',
					column: 'name',
					value: '',
					type: 'input',
					isRequire: true,
					isShowExp: [
						// {
						// 	column: 'name',
						// 	type: 'neq',
						// 	value: ''
						// }
					],
					options: []
				},
				{
					label: '电话',
					column: 'mobile',
					value: '',
					type: 'number',
					isRequire: false,
					isShowExp: [],
					options: []
				}
			]
		};
	},
	created() {
		this.initLogin();
	},
	methods: {
		PickerChange(e) {
			console.log(e);
			this.onDept = e.detail.value;
			this.tabSelect();
		},
		async addUser() {
			// 提交表单
			let itemData = this.$refs.bxform.getFieldModel();
			let url = this.getServiceUrl('daq', 'srvdaq_check_staff_add', 'add');
			let req = [
				{
					serviceName: 'srvdaq_check_staff_add',
					data: [itemData]
				}
			];
			console.log('表单填写', itemData);
			if (itemData) {
				// 新增
				url = this.getServiceUrl('daq', 'srvdaq_check_staff_add', 'add');
				req = [{ serviceName: 'srvdaq_check_staff_add', data: [itemData] }];
				let response = await this.$http.post(url, req);
				console.log('srvdaq_check_staff_add', response);
				if (response.data.state === 'SUCCESS' && response.data.response.length > 0) {
					console.log('srvdaq_check_person_add', response.data.response);
					this.getUserRole();
					this.hideModal();
				}
			} else {
				console.log('表单填写不完整');
			}
		},
		showModalView() {
			this.showModal = true;
		},
		getUserRole() {
			let req = { serviceName: 'srvdaq_login_check_staff_select', colNames: ['*'] };
			let url = this.getServiceUrl('daq', 'srvdaq_login_check_staff_select', 'select');
			this.$http.post(url, req).then(res => {
				if (res.data.state === 'SUCCESS') {
					this.depts = res.data.data;
				}
			});
		},
		tabSelect(e) {
			if (e) {
				this.currentTab = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			}
			if (this.currentTab === 0) {
				// 车辆
				this.geCarData();
			} else if (this.currentTab === 1) {
				// 人员
				this.getPersonData();
			}
		},
		geCarData() {
			const serviceName = 'srvdaq_check_car_select';
			let req = { serviceName: serviceName, colNames: ['*'], condition: [], page: { pageNo: this.pageInfo.pageNo, rownumber: this.pageInfo.pageNumber }, order: [] };
			if (this.onDept !== null && this.depts.length > 0 && (this.depts[this.onDept].dept_no !== '' && this.depts[this.onDept].dept_no !== null)) {
				req.condition.push({
					colName: 'dept_no',
					ruleType: 'eq',
					value: ''
				});
				req.condition[0].value = this.depts[this.onDept].dept_no;
			}
			let url = this.getServiceUrl('daq', serviceName, 'select');
			this.$http.post(url, req).then(res => {
				if (res.data.state === 'SUCCESS') {
					const listData = res.data.data;
					this.carData = listData;
					listData.map((item, index) => {
						// let condition = [{ colName: 'vehicle_no', ruleType: 'eq', value: res }];
						this.getPicture(item.car_photo, index);
					});
				}
			});
		},
		getPersonData() {
			const serviceName = 'srvdaq_check_person_select';
			let req = { serviceName: serviceName, colNames: ['*'], condition: [], page: { pageNo: this.pageInfo.pageNo, rownumber: this.pageInfo.pageNumber }, order: [] };
			if (this.onDept !== null && this.depts.length > 0 && (this.depts[this.onDept].dept_no !== '' && this.depts[this.onDept].dept_no !== null)) {
				req.condition.push({
					colName: 'dept_no',
					ruleType: 'eq',
					value: ''
				});
				req.condition[0].value = this.depts[this.onDept].dept_no;
			}
			let url = this.getServiceUrl('daq', serviceName, 'select');
			this.$http.post(url, req).then(res => {
				if (res.data.state === 'SUCCESS') {
					const listData = res.data.data;
					this.personData = listData;
					listData.map((item, index) => {
						// let condition = [{ colName: 'vehicle_no', ruleType: 'eq', value: res }];
						this.getPicture(item.id_card_photo, index);
					});
				}
			});
		},
		getPicture(file_no, index) {
			const serviceName = 'srvfile_attachment_select';
			const url = this.getServiceUrl('file', serviceName, 'select');
			const req = {
				serviceName: serviceName,
				colNames: ['*'],
				condition: [{ colName: 'file_no', value: file_no, ruleType: 'eq' }]
			};
			this.$http.post(url, req).then(res => {
				if (res.data.state === 'SUCCESS') {
					const data = res.data.data[0];
					if (data) {
						const fileurl = this.$api.srvHost + '/file/download?filePath=' + data.fileurl;
						if (this.currentTab === 0) {
							// 车辆
							let item = this.carData[index];
							item['picUrl'] = fileurl;
							this.$set(this.carData, index, item);
						} else if (this.currentTab === 1) {
							// 人员
							let item = this.personData[index];
							item['picUrl'] = fileurl;
							this.$set(this.personData, index, item);
						}
					}
				}
			});
		},
		toCreate() {
			console.log(this.depts);
			if (this.depts.length > 0) {
				const dept_no = this.depts[this.onDept].dept_no;
				if (this.currentTab === 0) {
					// 跳转到车辆信息登记页面
					uni.redirectTo({
						url: '../checkInCarInfo/checkInCarInfo?dept_no=' + dept_no
					});
				} else if (this.currentTab === 1) {
					// 跳转到人员信息登记页面
					uni.redirectTo({
						url: '../checkInPersonInfo/checkInPersonInfo?dept_no=' + dept_no
					});
				}
			}
		},
		toSearch() {
			if (this.currentTab === 0) {
				// 跳转到车辆信息搜索页面
			} else if (this.currentTab === 1) {
				// 跳转到人员信息搜索页面
			}
		},
		toCarInfo(e) {
			uni.navigateTo({
				url: '../checkInCarInfo/checkInCarInfo?id=' + e.id
			});
		},
		initLogin() {
			let that = this;
			let code = null;
			// #ifdef H5
			code = this.$route.query.code;
			// #endif
			let isLogin = uni.getStorageSync('is_login');
			console.log('是否绑定账号:', isLogin);
			let isWeixinClient = this.isWeixinClient();
			const client_env = uni.getStorageSync('client_env');
			console.log('是否微信环境', isWeixinClient);
			if (isWeixinClient) {
				//微信环境(小程序或者公众号)
				if (code || client_env === 'wxmp') {
					// 已经得到code,进行验证登录
					console.log('已获取到code,即将进行验证登录');
					this.saveWxUser();
				} else if (!code && client_env !== 'wxmp') {
					//公众号 未授权 -> 获取授权
					console.log('未发现code,尝试获取重定向链接', client_env, code);
					// #ifdef H5
					that.getAuthorized();
					// #endif
					// #ifdef MP-WEIXIN
					this.saveWxUser();
					// #endif
				}
			} else if (!isWeixinClient) {
				// 非微信环境(H5或APP)
				if (isLogin) {
				} else {
					this.showLoginModal = true;
				}
			}
		},
		async getAuthorized() {
			// 公众号环境获取回调地址(在回调地址中获取code)
			let url = this.getServiceUrl('wx', 'srvwx_public_page_authorization', 'operate');
			let req = [
				{
					data: [
						{
							app_no: this.$api.appNo.wxh5,
							redirect_uri: this.$api.frontEndAddress
						}
					],
					serviceName: 'srvwx_public_page_authorization'
				}
			];
			let response = await this.$http.post(url, req);
			console.log('response:', response);
			if (response.data.response[0].response.authUrl) {
				console.log('redirctUrl:', response.data.response[0].response.authUrl);
				window.location.href = response.data.response[0].response.authUrl;
			} else {
				uni.showToast({
					title: response.data.resultMessage,
					icon: 'none'
				});
			}
		},
		saveWxUser() {
			// 静默登录(验证登录)
			let that = this;
			// #ifdef MP-WEIXIN
			wx.login({
				// 获取小程序code
				success(res) {
					if (res.code) {
						// that.checkAuthorization();
						//验证登录
						let url = that.$api.verifyLogin.url;
						let req = [
							{
								data: [
									{
										code: res.code,
										app_no: that.$api.appNo.wxmp
									}
								],
								serviceName: 'srvwx_app_login_verify'
							}
						];
						that.$http.post(url, req).then(response => {
							if (response.data.resultCode === 'SUCCESS') {
								let resData = response.data.response[0].response;
								let expire_timestamp = parseInt(new Date().getTime() / 1000) + resData.expire_time; //过期时间的时间戳
								uni.setStorageSync('bx_auth_ticket', resData.bx_auth_ticket);
								uni.setStorageSync('expire_time', resData.expire_time); // 过期时间
								uni.setStorageSync('expire_timestamp', expire_timestamp); // 过期时间
								if (resData.login_user_info) {
									//匿名登录
									uni.setStorageSync('is_login', false);
									uni.setStorageSync('visiter_user_info', resData.login_user_info); //匿名登录信息
									// that.$store.commit('setOpenid', resData.login_user_info.openid);
									that.openid = resData.login_user_info.openid;
									uni.setStorageSync('user_type', '匿名用户'); //微信环境匿名用户
									console.log('微信小程序环境---未登录');

									that.getUserRole();
									that.geCarData();
									// that.toAccountLogin();
								} else {
									// 已绑定账号用户登录
									uni.setStorageSync('is_login', true);
								}
							} else if (response.data.resultCode === 'FAILURE') {
								uni.setStorageSync('is_login', false);
								uni.showToast({
									title: response.data.resultMessage
								});
							}
						});
					} else {
						uni.setStorageSync('is_login', false); // 登录状态
						console.log('登录失败！' + res.errMsg);
					}
				}
			});
			// #endif
			// #ifdef H5
			const isWeixinClient = that.isWeixinClient();
			if (isWeixinClient) {
				// 公众号环境
				let req = [
					{
						data: [
							{
								code: that.$route.query.code,
								app_no: that.$api.appNo.wxh5
							}
						],
						serviceName: 'srvwx_app_login_verify'
					}
				];
				const url = this.getServiceUrl('wx', 'srvwx_app_login_verify', 'operate');
				this.$http.post(url, req).then(response => {
					if (response.data.resultCode === 'SUCCESS' && response.data.response[0].response) {
						console.log('授权成功', response);
						let resData = response.data.response[0].response;
						let loginMsg = {
							bx_auth_ticket: resData.bx_auth_ticket,
							expire_time: resData.expire_time
						};
						let expire_timestamp = parseInt(new Date().getTime() / 1000) + loginMsg.expire_time; //过期时间的时间戳(秒)
						uni.setStorageSync('bx_auth_ticket', resData.bx_auth_ticket);
						uni.setStorageSync('expire_time', resData.expire_time); // 有效时间
						uni.setStorageSync('expire_timestamp', expire_timestamp); // 过期时间

						if (resData.login_user_info.data) {
							uni.setStorageSync('visiter_user_info', resData.login_user_info.data[0]);
							// this.$store.commit('setOpenid', resData.login_user_info.data[0].openid);
						}
						// self.$store.commit('setAuthorState', true);
						this.getList(this.currentTab);
						this.hideModal();
					} else {
						// self.$store.commit('setAuthorState', false);
						console.log('授权失败');
					}
				});
			}

			// #endif
			this.geCarData();
		},
		checkAuthorization() {
			// 查看是否授权获取用户信息
			// #ifdef MP-WEIXIN
			uni.getUserInfo({
				provider: 'weixin',
				success: function(infoRes) {
					uni.setStorageSync('userInfo', infoRes.userInfo);
				},
				fail: errMsg => {
					console.log('获取用户信息失败失败', errMsg);
					uni.navigateTo({
						url: '../authorization/authorization'
					});
				}
			});
			let that = this;
			uni.authorize({
				scope: 'scope.userInfo',
				success(res) {
					that.userInfoAuth = true;
					// 获取用户信息
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							uni.setStorageSync('userInfo', infoRes.userInfo);
						},
						fail: errMsg => {
							console.log('获取用户信息失败失败', errMsg);
							uni.navigateTo({
								url: '../authorization/authorization'
							});
						}
					});
				},
				fail(errMsg) {
					that.userInfoAuth = false;
				}
			});
			// #endif
		},
		judgeClientEnviroment() {
			let client_env = '';
			// #ifdef H5
			const isWeixin = this.isWeixinClient();
			console.log('isWeixin', isWeixin);
			client_env = isWeixin ? 'wxh5' : 'web';
			// #endif
			// #ifdef MP-WEIXIN
			client_env = 'wxmp';
			//#endif
			// #ifdef APP-PLUS
			client_env = 'app';
			// #endif
			let client_type = '';
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					console.log('运行Android上');
					client_type = 'android';
					break;
				case 'ios':
					console.log('运行iOS上');
					client_type = 'ios';
					break;
				default:
					client_type = 'web';
			}
			this.client_type = client_type;
			this.client_env = client_env;
			uni.setStorageSync('client_env', client_env);
			uni.setStorageSync('client_type', client_type);
			return {
				client_env: client_env,
				client_type: client_type
			};
		},
		hideModal(e) {
			this.showModal = false;
		}
	},
	onLoad(option) {
		this.judgeClientEnviroment();
		if (option.hasOwnProperty('fromUser')) {
			this.fromUser = option.fromUser;
		}
	},
	onShareAppMessage(res) {
		let userInfo = uni.getStorageSync('visiter_user_info');
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		let userNo = userInfo.user_no;
		console.log('onShareAppMessageuserNo', userNo);
		return {
			title: '邀请您加入疫情信息采集',
			path: '/pages/informationManagement/informationManagement?fromUser=' + userNo
		};
	}
};
</script>

<style lang="scss">

.button-box {
	display: flex;
	width: 100%;
	height: 100upx;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 20upx;
	box-sizing: border-box;
	.cu-btn {
		margin-right: 30upx;
		&:first-child {
			margin-right: 10upx;
		}
		.icon {
			margin-right: 5upx;
		}
	}
}
.list-wrap {
	width: 100%;
	.list-item {
		width: 95%;
		margin: 20upx auto;
		display: flex;
		border: 1px solid #ebeef5;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		.pic-box {
			width: 240upx;
			height: 240upx;
			margin-right: 20upx;
			.picture {
				border-radius: 10upx;
				width: 100%;
				height: 100%;
			}
		}
		.text-box {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.text-item {
				display: flex;
				justify-content: space-between;
				height: 50upx;
				.text {
					flex: 1;
					text-align: left;
				}
				.value {
					font-size: 28upx;
					font-weight: 600;
				}
			}
			.bntton-box {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				padding: 20upx;
				box-sizing: border-box;
			}
		}
	}
}

	// 首页
	.info-hander_title{
		height: 80upx;
		line-height: 80upx;
		font-size: 42upx;
		display: flex;
		flex-direction: row;
		padding: 10upx;
		box-sizing: border-box;
		justify-content: baseline;
		align-content: center;
		align-items: center;
		.picker {
			box-sizing: border-box;
			padding: 10upx;
			font-size: 32upx;
		}
		.button{
			flex: 2;
			justify-content: flex-end;
		}
	}
</style>
