<template>
	<view class="base_my">
		<view v-for="(item,index) in 2" :key="index">
			<view class="base_my_1">邀请好友专用经</view>
			<text class="base_my_2">最高的18</text>
			<view class="base_my_3">
				<image src="../../static/logo.png" mode="heightFix" style="height: 100rpx;"></image>
			</view>
			<view class="base_my_4" v-if="index==0">
				<text>去邀请</text>
				<text>雇佣金</text>
			</view>
			<view class="base_my_4" v-if="index==1">
				<text>敬此看看</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my_base",
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss" scoped>
.base_my{
	display: flex;
	justify-content: space-between;
	>view{
		flex: 1;
		background-color: #fff;
		padding: 20rpx;
		border-radius: 20rpx;
		.base_my_1{
			font-size: 30rpx;
			font-weight: 600;
		}
		.base_my_2{
			font-size: 24rpx;
			color: #ABABAB;
		}
		.base_my_3{
			display: flex;
			justify-content: center;
			background-color: #F9F9F9;
			padding: 20rpx 0;
		}
		.base_my_4{
			display: flex;
			justify-content: space-around;
			margin: 20rpx 0 0 0;
			>text{
				font-size: 24rpx;
				padding: 5rpx 20rpx;
				border: 1rpx solid #ABABAB;
				border-radius: 30rpx;
			}
		}
		&:nth-of-type(2n){
			margin-left: 20rpx;
		}
	}
}
</style>