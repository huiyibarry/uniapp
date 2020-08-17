<template>
	<view>
		<!-- 基础卡片 -->
		<view class="listcard" v-if="mode === 'base'">
			<view class="listcard-image">
				<image src="/static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content__title">
					<text>uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架</text>
				</view>
				<view class="listcard-content__des">
					<view class="listcard-content__des-label">
						<view class="listcard-content__des-label-item">前端</view>
					</view>
					<view class="listcard-content__des-browse">120浏览</view>
				</view>
			</view>
		</view>
		<!-- 多图 -->

		<view class="listcard mode-more-img" v-if="mode === 'more_img'">
			<view class="listcard-content">
				<view class="listcard-content__title">
					<text>uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架</text>
				</view>
				<view class="listcard-image">
					<view class="listcard-image__item" v-for="item in 3" :key="item">
						<image src="/static/logo.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content__des">
					<view class="listcard-content__des-label">
						<view class="listcard-content__des-label-item">前端</view>
					</view>
					<view class="listcard-content__des-browse">120浏览</view>
				</view>
			</view>
		</view>
		<!-- 大图 -->
		<view class="listcard mode-big-img" v-if="mode === 'big_img'">
			<view class="listcard-image">
				<image src="/static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content__title">
					<text>uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架</text>
				</view>

				<view class="listcard-content__des">
					<view class="listcard-content__des-label">
						<view class="listcard-content__des-label-item">前端</view>
					</view>
					<view class="listcard-content__des-browse">120浏览</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props:{
			mode:{
				type:String,
				default:"base"
			}			
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.listcard {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;

		.listcard-image {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.listcard-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;

			.listcard-content__title {
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;

				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}

			.listcard-content__des.listcard-content__des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;

				.listcard-content__des-label {
					display: flex;

					.listcard-content__des-label-item {
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $html-base-color;
						border: 1px $html-base-color solid;
					}
				}

				.listcard-content__des-browse {
					color: #999;
					line-height: 1.5;
				}
			}
		}


		&.mode-more-img {
			.listcard-content {
				width: 100%;
				padding-left: 0;

				.listcard-image {
					flex-shrink: 0;
					margin-top: 10px;
					width: 100%;
					height: 70px;
					display: flex;

					.listcard-image__item {
						width: 100%;
						margin-left: 10px;
						border-radius: 5px;
						overflow: hidden;

						&:first-child {
							margin-left: 0;
						}

						image {
							width: 100%;
							height: 100%;
						}
					}
				}

				.listcard-content__des {
					margin-top: 10px;
				}
			}
		}

		&.mode-big-img {
			flex-direction: column;

			.listcard-image {
				width: 100%;
				height: 100px;
			}

			.listcard-content {
				width: 100%;
				padding-left: 0;
				margin-top: 10px;

				.listcard-content__des {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
