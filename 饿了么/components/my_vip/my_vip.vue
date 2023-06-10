<template>
	<view id="my_vip" class="my_vip">
		<view class="my_vip_1">
			<view class="my_vip_1_1">
				<u-icon name="level" color="#FEE274" ></u-icon>
				<text>黄金会员</text>
			</view>
			<text>下单获得贡多活动</text>
		</view>
		<view class="my_vip_2">
			<text>吃货豆</text>
			<view class="">247</view>
			<u-icon name="arrow-right" color="#9A9FB3" size="10rpx"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my_vip",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.my_vip{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #414659;
	padding: 10rpx 20rpx 40rpx;
	border-radius: 30rpx 30rpx 0 0;
	.my_vip_1{
		.my_vip_1_1{
			display: flex;
			color: #FEE274;
			>text{
				font-size: 30rpx;
				font-weight: 600;
				font-style: italic;
			}
		}
		>text{
			font-size: 20rpx;
			color: #9A9FB3;
		}
	}
	.my_vip_2{
		display: flex;
		align-items: center;
		color: #E3E8FD;
		
		>text{
		color: #9A9FB3;
		font-size: 24rpx;
		}
		>view{
			font-size: 40rpx;
		}
	}
}
</style>