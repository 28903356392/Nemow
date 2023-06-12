<template>
	<view class="customHead">
		<view class="bg">
			<image class="bgimg" src="../../static/logo.png" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"custom-head-bar",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.customHead{
	height: 200rpx;
	.bg{
		width: 100%;
		height: 100%;
		background: #000;
		overflow: hidden;
		.bgimg{
			width: 100%;
			height: 100%;
			filter: blur(30rpx);
			transform: scale(2);
		}
	}
}
</style>