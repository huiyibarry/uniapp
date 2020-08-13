<template>
	<view class="tab">
		<scroll-view scroll-x class="tab-scroll">
			<view class="tab-box">
				<view v-for="(item,index) in list" :key="index" class="tab-box-item">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		created() {
			this.getLabel()
		},
		data() {
			return {	
				list:[]
			};
		},
		methods:{
			getLabel(){
				this.$api.get_label_list({
					name:'get_label_list'
				}).then(res=>{
					console.log(res);
					this.list = res.data
				})
				/* uniCloud.callFunction({
					name:"get_label_list"					
				}).then(res=>{
					this.list = res.result.data
				}) */
			}
		}
	}
</script>

<style lang="scss">
.tab{
	display: flex;
	box-sizing: border-box;
	background-color: #fff;
	width: 100%;
	border-bottom: 1px solid #F5F5F5;
	.tab-icons{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		position: relative;
		&::after{
			content: '';
			position: absolute;
			top: 12px;
			bottom: 12px;
			left: 0;
			width: 1px;
			background-color: #ddd;
		}
	}
	.tab-scroll{
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		.tab-box{
			display: flex;
			align-items: center;//垂直居中
			flex-wrap: nowrap;//不允许换行,
			height: 45px;
			box-sizing: border-box;
			.tab-box-item{
				flex-shrink: 0;//不挤压
				padding: 0 10px;
				color: #333;
			}
		}
	}
	
}
</style>
