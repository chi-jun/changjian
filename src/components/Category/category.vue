<template>
	<div>
		<div class="head">
			<div class="title">标签管理</div>
			<a-button type="primary" class="xj">新建</a-button>
		</div>
		<a-table :columns="columns" :dataSource="data" :pagination="{ pageSize: 50 }" :scroll="{ y: 640 }" />
	</div>

</template>

<script>
	import Vue from 'vue'
	import { Table } from 'ant-design-vue'
	Vue.use(Table);
	const columns = [{
			title: '打印时间',
			dataIndex: 'name',
			width: 150,
		}, {
			title: '打印人',
			dataIndex: 'age',
			width: 150,
		}, {
			title: '产品类型',
			dataIndex: 'address',
			width: 150,
		},
		{
			title: '产品型号',
			dataIndex: 'modelnumber',
			width: 150,
		}, {
			title: '打印数量',
			dataIndex: 'num',
			width: 150,
		}, {
			title: '状态',
			dataIndex: 'state',
			width: 150,
		}
	];

	const data = [];
	for(let i = 0; i < 6000; i++) {
		data.push({
			key: i,
			name: `Edward King ${i}`,
			age: 32,
			address: `London, Park Lane no. ${i}`,
			modelnumber: `23265${i}`,
			num: `${i+ 1} `,
			state: `London, Park Lane no. ${i}`,
		});
	}

	export default {
		name: 'category',
		data() {
			return {
				data,
				columns,
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
</style>