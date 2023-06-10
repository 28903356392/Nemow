<template>
	<view class="order_shop">
		<view class="order_shop_1">
			<view class="order_shop_1_1">
				<image src="../../static/logo.png" mode="widthFix" style="width: 40rpx;"></image>
				<text>故名(龙华店)</text>
				<u-icon name="arrow-right" color="#D9D9D9" size="10rpx"></u-icon>
			</view>
			<text>已取消</text>
		</view>
		<view class="order_shop_2">
			<text>超出配送范围</text>
		</view>
		<view class="order_shop_3">
			<image src="../../static/logo.png" mode="widthFix" style="width: 130rpx;"></image>
			<view class="order_shop_3_2">
				<text>海烟奶茶</text>
				<view class="order_shop_3_2_1">
					<view>￥9</view>
					<text>共一件</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"order_shop",
		props:["name"],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
     .order_shop{
		 padding: 20rpx;
		 margin:15rpx 20rpx;
		 background-color: #ffffff;
		 border-radius: 10rpx;
		 .order_shop_1{
			 display: flex;
			 align-items: center;
			 justify-content: space-between;
			 
			 >text{
				 color: #9F9F9F;
			 }
			 .order_shop_1_1{
				 display: flex;
				 align-items: center;
				 
				 >text{
					 margin-left: 5rpx;
					 font-weight: 600;
				 }
			 }
		 }
		 .order_shop_2{
			 margin:5rpx 0 15rpx;
			>text{
				padding: 0rpx 5rpx;
				border-radius: 5rpx;
				font-size: 12rpx;
				background-color: #979797;
				color: #ffffff;
			}
			
		 }
		 .order_shop_3{
		 	display: flex;
			.order_shop_3_2{
				flex: 1;
				margin:0 10rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.order_shop_3_2_1{
					text-align: right;
					>view{
						font-weight: 600;
					}
					>text{
						color: #979797;
						font-size: 20rpx;
					}
				}
			}
		 }
	 }
</style>