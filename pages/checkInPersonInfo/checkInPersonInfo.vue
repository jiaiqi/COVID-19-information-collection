<template>
	<view class="collect-wrap">
		<view class="form-box" v-if="showForm">
			<view class="form-wrap"><bxform ref="bxform" v-if="showForm" :fields="configCols" :BxformType="formType" @on-form-item="handleClick($event)"></bxform></view>
			<view class="padding-xl" v-if="formType === 'form'"><button class="cu-btn block bg-blue margin-tb-sm lg" @click="added">提交</button></view>
		</view>
	</view>
</template>

<script>
// @ is an alias to /src
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import bxform from '@/components/form.vue';
export default {
	name: 'idCardInfoCollect',
	components: { uniPopup, bxform },
	data() {
		return {
			formType: 'form',
			id: null,
			src: '',
			showForm: false,
			previewCanvasStyle: 'width: 375px; height: 250px;margin-bottom: 20px;position:fixed;top:99999999999999upx;',
			tempFilePath: '',
			beforeImg: '',
			compressImg: '', //压缩后的图片
			afterImg: '', //裁剪之后的图
			ctxWidth: '',
			ctxHeight: '',
			fileList: [],
			picList: [],
			responseList: [],
			formData: {
				name: '',
				id_card_addr: '',
				id_card_no: ''
			},
			configCols: [
				{
					label: '姓名',
					column: 'name',
					value: '',
					type: 'input',
					isRequire: true,
					isShowExp: [],
					buttons: [
						{
							name: '拍照',
							type: 'navTo'
						}
					],
					options: []
				},
				{
					label: '户籍所在地',
					column: 'id_card_addr',
					value: '',
					type: 'input',
					isRequire: true,
					isShowExp: [],
					options: []
				},
				{
					label: '身份证号',
					column: 'id_card_no',
					value: '',
					type: 'input',
					isRequire: true,
					isShowExp: [],
					options: []
				},
				{
					label: '体温',
					column: 'temperature',
					value: '',
					type: 'digit',
					isRequire: true,
					isShowExp: [],
					options: []
				},
				{
					label: '身份证照片',
					column: 'id_card_photo',
					value: '',
					type: 'images',
					isRequire: false,
					isShowExp: [],
					srvInfo: {
						tableName: 'bxdaq_check_car',
						appNo: 'daq'
					},
					options: []
				},
				{
					label: '车牌号',
					column: 'vehicle',
					value: '',
					type: 'input',
					isRequire: false,
					isShowExp: [],
					options: []
				},
				{
					label: '手机号',
					column: 'phone',
					value: '',
					type: 'number',
					isRequire: false,
					isShowExp: [],
					options: []
				},
				{
					label: '备注',
					column: 'remark',
					value: '',
					type: 'textarea',
					isRequire: false,
					isShowExp: [],
					options: []
				}
			],
			dept_no: '',
			id_card_photo: '', //身份证预览图的file_no
			profile_picture: '' //头像照片
		};
	},
	onLoad(option) {
		console.log('peop-option', option);
		if (option.dept_no) {
			console.log(option.dept_no);
			this.dept_no = option.dept_no;
		}
		if (option.formType) {
			this.formType = option.formType;
			if (this.formType === 'detail') {
				uni.setNavigationBarTitle({
					title: '人员详情'
				});
			}
		}
		if (option.formData) {
			this.formData = JSON.parse(decodeURIComponent(option.formData));
			const formData = this.formData;
			const configCols = this.configCols;
			if (formData.profile_picture) {
				// 头像
				this.profile_picture = formData.profile_picture;
			}
			// if (formData.id_card_photo) {
			// 	// 身份证预览图
			// 	this.id_card_photo = formData.id_card_photo;
			// }
			configCols.forEach((item, index) => {
				if (item.column === 'name') {
					this.$set(this.configCols[index], 'value', formData[item.column]);
				}
				if (item.column === 'id_card_addr') {
					this.$set(this.configCols[index], 'value', formData[item.column]);
				}
				if (item.column === 'id_card_no') {
					this.$set(this.configCols[index], 'value', formData[item.column]);
				}
				if (item.column === 'id_card_photo') {
					console.log('id_card_photo', formData[item.column]);
					this.$set(this.configCols[index], 'value', formData[item.column]);
				}
			});
			console.log('configCols', this.configCols);
		}
		if (option.id) {
			this.id = option.id;
			this.getPersonInfo(this.id);
		} else {
			this.showForm = true;
		}
	},
	methods: {
		handleClick(e) {
			console.log(e);
			if (e.column == 'name' && e.name === '拍照') {
				uni.redirectTo({
					url: '../takePhotos/takePhotos?addType=person&dept_no=' + this.dept_no
				});
			}
		},
		async getPersonInfo(e) {
			let url = this.getServiceUrl('daq', 'srvdaq_check_person_select', 'select');
			let req = {
				serviceName: 'srvdaq_check_person_select',
				condition: [
					{
						colName: 'id',
						ruleType: 'eq',
						value: e
					}
				]
			};
			let response = await this.$http.post(url, req);
			console.log('srvdaq_init_view_select', response);
			if (response.data.state === 'SUCCESS' && response.data.data.length > 0) {
				this.formData = response.data.data[0];
				console.log('this.activityData', this.activityData);
				this.setFieldsVals(this.formData);
			}
		},
		setFieldsVals: function(e) {
			let fields = this.configCols;
			for (var col in e) {
				for (let i = 0; i < fields.length; i++) {
					if (fields[i].column === col) {
						fields[i].value = e[col];
					}
				}
			}
			this.showForm = true;
		},
		async added() {
			// 提交表单
			uni.showLoading({
				mask: true,
				title: '正在提交'
			});
			let itemData = this.$refs.bxform.getFieldModel();
			itemData['dept_no'] = this.dept_no; // 部门
			// itemData['id_card_photo'] = this.id_card_photo; // 身份证照片
			itemData['profile_picture'] = this.profile_picture; // 头像
			let url = this.getServiceUrl('daq', 'srvdaq_check_person_add', 'add');
			let req = [];
			if (itemData) {
				if (this.id !== null) {
					// 编辑
					url = this.getServiceUrl('daq', 'srvdaq_check_person_update', 'add');
					req = [
						{
							serviceName: 'srvdaq_check_person_update',
							data: [itemData],
							condition: [
								{
									colName: 'id',
									ruleType: 'eq',
									value: this.id
								}
							]
						}
					];
					let response = await this.$http.post(url, req);
					uni.hideLoading();
					console.log('srvdaq_check_person_add', response);
					if (response.data.state === 'SUCCESS' && response.data.response.length > 0) {
						uni.reLaunch({
							url: '../home/home?currentTab=1',
							animationType: 'pop-out',
							animationDuration: 200
						});
					}
				} else {
					// 新增
					url = this.getServiceUrl('daq', 'srvdaq_check_person_add', 'add');
					req = [{ serviceName: 'srvdaq_check_person_add', data: [itemData] }];
					let response = await this.$http.post(url, req);
					uni.hideLoading();
					console.log('srvdaq_check_person_add', response);
					if (response.data.state === 'SUCCESS' && response.data.response.length > 0) {
						uni.reLaunch({
							url: '../home/home?currentTab=1',
							animationType: 'pop-out',
							animationDuration: 200
						});
					}
				}
			} else {
				console.log('表单填写不完整');
			}
		}
	}
};
</script>

<style lang="scss">
.card {
	font-size: 45upx;
}
.collect-wrap {
	width: 100%;
	display: flex;
	flex-direction: column;
	.collect-box {
		width: 100%;
		min-height: 800upx;
		overflow: auto;
		background-color: #fff;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		.collect-title {
			// width: 100%;
			font-size: 36upx;
			font-weight: 600;
			line-height: 100upx;
			// text-align: left;
		}
		.collect-button {
			width: 100%;
			height: 150upx;
			display: flex;
			align-items: center;
			button {
				min-width: 40%;
			}
		}
		.scan-img {
			opacity: 0.4;
			width: 100%;
			height: 500upx;
			cursor: pointer;
		}
		.scan-text {
			font-size: 20px;
			text-align: center;
			line-height: 60upx;
		}
	}
}
</style>
