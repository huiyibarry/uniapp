<template>
	<view class="content">
		<image class="logo" :src="src"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="default" @click="login">点击登录</button>
		<button type="default" @click="upload">上传图片</button>
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
			login(){
				uniCloud.callFunction({
					name:"login",
					data:{
						name:"Lfg",
						age:27
					},
					success(res) {
						console.log('返回成功',res);
					}
				})
			},
			upload(){
				
				let that = this
				uni.chooseImage({
					count:1,
					success(res) {						
						const tempFilePaths = res.tempFilePaths[0];
						console.log(res);
						uniCloud.uploadFile({
							filePath:tempFilePaths,
							cloudPath:res.tempFiles[0].name,
							success(res) {
								console.log(res);
								//腾讯云 获取图片展示地址与阿里云不同 阿里云可以直接使用fileID
								uniCloud.getTempFileURL({
									fileList:[res.fileID],
									success(res) {
										console.log(res);
										that.src = res.fileList[0].tempFileURL
									}
								})
								
							},
							fail(err) {
								console.log(err);	
							}
						})
					},
					fail(err) {
						console.log(err);	
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
