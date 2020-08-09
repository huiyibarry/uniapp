<template>
	<view class="content">
		<navbar></navbar>
		<view v-for="item in 100">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				src:''
			}
		},
		onLoad() {

		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
