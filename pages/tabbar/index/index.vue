<template>
	<view class="home">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab @tab="tab"></tab>
		<index-scroll>
			<list-card v-for="item in 5">{{item}}</list-card>
		</index-scroll>
	</view>
</template>

<script>
	// easyCom components/组件名/组件名.vue 局部引入
	export default {
		data() {
			return {

			}
		},
		onLoad() {},
		methods: {
			tab({
				data,
				index
			}) {
				console.log(data, index);
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
	}
</style>
