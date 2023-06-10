<template>
	<view class="noticeIndex">
		<view class="left"><text>红包</text></view>
		<text class="content">阿三发射点发</text>
		<view class="right">去查看</view>
	</view>
</template>

<script>
	export default {
		name:"noticeIndex",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
       .noticeIndex{
		padding: 30rpx 20rpx;
		border-radius: 30rpx;
       	display: flex;
		font-size: 24rpx;
		align-items: center;
       	.left{
       		background-color: #FC6145;
			padding:2rpx 5rpx;
       	}
		.content{
			flex: 1;
			padding-left: 10rpx;
			color: #000000;
		}
		.right{
			padding: 2px 20rpx;
			color: #E7B0A5;
			border: 1rpx solid #E7B0A5;
			border-radius: 24rpx;
		}
       }
</style>