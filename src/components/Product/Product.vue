<template>
	<div>
		<div class="head">
			<div class="title">产品管理</div>
			<a-button type="primary" class="xj" v-on:click="editProduct">新建</a-button>
		</div>
		<div class="product-container">
			<div class="product-item">
				<img v-bind:src="img_url" />
			</div>
		</div>
	</div>
</template>

<script>
	import EditProduct from '@/components/Product/EditProduct'
	export default {
		name: 'product',
		data() {
			return {
				img_url: "http://www.gdgd.com.cn/uploads/sm_article/2017112216483269.jpg",
				products: ''
			}
		},
		created: function() {
			this.getProducts()
		},
		// sockers: {

		// },
		methods: {
			addProduct: function() {

			},
			getProducts: function() {
				this.$http.get("/changjia/changjia/" + this.uid + "/" + this.session + "/" + this.mid + "/product/type/list").then((res) => {
					console.log(res.data);
					this.products = res.data.data
				}).catch((err) => {
					console.log(err);
				})
			},
			editProduct: function() {
				// console.log(this.layer)
				this.$layer.iframe({
					content: {
						content: EditProduct, //传递的组件对象
						parent: this, //当前的vue对象
						data: {} //props
					},
					area: ['800px', '600px'],
					title: '编辑产品'
				});
			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.head {
		border-bottom: 2px dashed #E5E5E5;
		padding-bottom: 12px;
		padding-top: 10px;
		height: 60px;
		.title {
			width: 75px;
			height: 34px;
			font-size: 18px;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			line-height: 34px;
			float: left;
		}
		.xj {
			float: right;
			width: 90px;
			height: 34px;
			background: rgba(100, 146, 255, 1);
			box-shadow: 0px 0px 15px -8px rgba(0, 0, 0, 0.5);
			border-radius: 55px;
		}
	}
	
	.product-container {
		padding: 16px;
		overflow: hidden;
	}
	
	.product-item {
		// width: 400px;
		height: 166px;
		background: rgba(247, 247, 247, 1);
		border-radius: 5px;
		float: left;
		margin-right: 20px;
		padding: 18px 8px;
		img {
			width: 160px;
			height: 130px;
		}
	}
</style>