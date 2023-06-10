<template>
	<view class="my_header">
         <view class="my_header_1">
			<u-avatar :src="src" size="60"></u-avatar>
			<view class="my_header_1_2">
				<view>6a2sdasfs<text>？</text></view>
				<text>17683866331</text>
			</view>
		</view>
		<view class="my_header_2">
			<text>账户设置</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my_header",
		data() {
			return {
				src:"https://mp-212487d3-a495-43f3-bdfd-bb217ee0d10d.cdn.bspapp.com/cloudstorage/53632b3a-f1d9-42f9-a052-37d91e98fc59.png"
			};
		}
	}
</script>

<style lang="scss">
.my_header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 20rpx;
	.my_header_1{
		display: flex;
		align-items: center;
		.my_header_1_2{
			margin-left: 20rpx;
			>view{
				
				>text{
					margin-left: 5rpx;
					color: #A7A7A7;
				}
			}
			>text{
				font-size: 24rpx;
				color: #A7A7A7;
			}
		}
	}
	.my_header_2{
		border: 1rpx solid #A7A7A7;
		font-size: 24rpx;
		padding: 3rpx 10rpx;
		border-radius: 20rpx;
	}
}
</style>