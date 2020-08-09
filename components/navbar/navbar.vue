<template>
	<view class="navbar">
			<view class="navbar-fixed">
				<!-- 状态栏 -->
				<view :style="{height:statusBarHeight+'px'}"></view>
				<view class="navbar-content" :style="{height:navBarHeight+'px',width:windowWidth+'px'}">
					<view class="navbar-serach">
						<view class="navbar-serach_icon">
							<uni-icons type="search" size="18" color="#999"></uni-icons>
						</view>
						<view class="navbar-serach_text">uni-app、vue</view>
					</view>	
				</view>				
			</view>
			<view :style="{height:fixedHeight+'px'}"></view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375,
				fixedHeight:45
			};
		},
		created() {
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight;
			this.windowWidth = info.windowWidth
			//#ifndef APP-PLUS || H5 ||MP-ALIPAY
			//小程序类悬浮按钮（胶囊按钮）
			const  menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
			this.fixedHeight = this.navBarHeight + this.statusBarHeight
			//#endif
		}
	}
</script>

<style lang="scss">
	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $html-base-color;
			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				height: 45px;
				box-sizing: border-box;
				.navbar-serach {
					display: flex;
					align-items: center;
					padding: 0 10px;
					width: 100%;
					height: 30px;
					border-radius: 30px;
					background-color: #fff;
					.navbar-serach_icon {						
						margin-right: 10px;
					}
					.navbar-serach_text {
						font-size: 12px;
						color: #999;
					}
				}
			}

		}

	}
</style>
