<template>
	<div>
		<div class="form-item">
			<span class="form-lable">产品类型</span>
			<a-select defaultValue="请选择点击右侧按钮添加产品类型" style="flex:1;" @change="handleChange">
				  <a-select-option value="lucy" v-for="type in producttypes" :key="type.id">{{type.type_desc}}</a-select-option>
			</a-select>
			<div class="icon-container">
				<img src="../../assets/img/add.png" />
			</div>
		</div>
		<div class="form-item">
			<span class="form-lable">产品型号</span>
			<a-input  style="flex:1;" />
			<div class="icon-container">
			</div>
		</div>
		<div class="form-item">
			<span class="form-lable">封面图片</span>
			<div class="img-preview">
				<!-- <div class="clearfix"> -->
					<a-upload
						action="//jsonplaceholder.typicode.com/posts/"
						listType="picture-card"
						:fileList="fileList"
						@preview="handlePreview"
						@change="handlechange"
					>
						<div v-if="fileList.length < 2">
							<a-icon type="plus" />
							<!-- <div class="ant-upload-text">Upload</div> -->
						</div>
					</a-upload>
					<a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
						<img alt="example" style="width: 100%" :src="previewImage" />
					</a-modal>
				<!-- </div> -->
				
				<!-- <a>
					<img  />
					<div class="preview-lable" v-on:click="uploadFile">
						点击选择上传
					</div>
				</a> -->
				<input type="file" id="product-pic" accept=".jpg,.png"/>
			</div>
		</div>
		<div class="form-item">
			<span class="form-lable">参考文档</span>
			<div style="flex: 1;display: flex;">
				<a-select defaultValue="lucy" style="flex:1;" @change="handleChange">
					<a-select-option value="jack">Jack</a-select-option>
					<a-select-option value="lucy">Lucy</a-select-option>
					<a-select-option value="Yiminghe">yiminghe</a-select-option>
				</a-select>
				<div class="icon-container">
					<img src="../../assets/img/add.png" />
					<img src="../../assets/img/subtract.png" style="margin-left: 8px;" />
				</div>
			</div>
		</div>
		<div style="margin:20px 0 0 100px;">
			<a-button type="primary">保存</a-button>
		</div>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Select, Input, Upload, Modal } from 'ant-design-vue'
	Vue.use(Select)
	Vue.use(Input)
	Vue.use(Upload)
	Vue.use(Modal)
	export default {
		data() {
			return {
				producttypes: '',
				previewVisible: false,
      	previewImage: '',
				fileList: [],
			}
		},
		created() {
			this.getProducttypes()
		},
		methods: {
			getProducttypes: function() {
				this.$http.get("/changjia/changjia/" + this.uid + "/" + this.session + "/" + this.mid + "/product/type/list").then((res) => {
					console.log(res.data);
					this.producttypes = res.data.data
				}).catch((err) => {
					console.log(err);
				})
			},
			handleChange(value) {
				console.log(`selected ${value}`);
			},
			uploadFile:function(){
				document.getElementById("product-pic").click()
			},
			handleCancel () {
      this.previewVisible = false
			},
			handlePreview (file) {
				this.previewImage = file.url || file.thumbUrl
				this.previewVisible = true
			},
			handlechange ({ fileList }) {
				this.fileList = fileList
			},
		}
	}
</script>

<style lang="scss">
	i {
		margin: 0;
	}
.ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
	.form-item {
		display: flex;
		padding: 8px 0;
	}
	
	.form-lable {
		width: 100px;
		color:#333333;
		font-weight: 500;
	}
	
	.icon-container {
		width: 160px;
		padding-left: 16px;
		padding-top: 4px;
	}
	
	.icon-container img{
		cursor: pointer;
	}
	
	.img-preview{
		height: 160px;
		overflow:hidden ;
		// span {
		// 	display: flex;
		// }
		
		// .ant-upload-select {
		// 	display: inline-block
		// }
		
	}
	.img-preview img{
		width: 160px;
		height: 160px;		
	}
	
	.preview-lable{
		width: 160px;
		height: 160px;
		background: rgba(0,0,0,0.6);
		position: relative;
		top:-160px;
		display: none;
		line-height: 160px;
		text-align: center;
		color: white;
	}
	
	.img-preview a:hover .preview-lable{
		display: block;
	}
</style>