<template>
	<view id="home" class="home">
		<head-bar></head-bar>
		<view class="wrapper">
			<view class="infoModel">
				<view class="left">免费配送</view>
				<view class="right">
					<u-icon name="order" color="#576b95" size="24"></u-icon>
					我的订单
				</view>
			</view>
			<view class="scrollLayout">
				
			</view>
		</view>
		
		<view class="" style="height: 100rpx; background: green;">
			
		</view>
	</view>
</template>

<script>
	import headBar from "@/components/custom-head-bar/custom-head-bar.vue"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			headBar
		},
		onLoad() {

		},
		methods: {
          
		}
	}
</script>

<style lang="scss" scoped>
	.home{
		height: 100vh;
		display: flex;
		flex-direction: $border-color-light;
		.wrapper{
			flex: 1;
			background: orange;
			.infoModel{
				color: $brand-theme-color;
				@include flex-box-set(start);
				height: 90rpx;
				background: #fff;
				padding: 0 30rpx;
				font-size: 32rpx;
				.right{
					@include flex-box();
					color: $brand-theme-color-aux;
				}
			}
		}
	}
</style>
