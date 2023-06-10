<template>
	<view id="cont">
		<u-search border-color="#17BBF8" height="70rpx"  shape="round" :actionStyle="actionStyle" :placeholder="placeholder" @focus="onfocus"></u-search>
	</view>
</template>

<script>
	export default {
		name:"navigation",
		data() {
			return {
				placeholder:"",
				actionStyle:{
					'position': 'absolute',
					"top":"5rpx",
					"right":0,
					"padding":"16rpx 25rpx",
					"background-color":"#17BBF8",
					'border-radius': '50rpx',
					color: '#ffffff',
					
				}
			};
		},
		onLoad(e) {
			
		},
		methods:{
			onfocus(){
				uni.navigateTo({
					url:""
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#cont{
		color: #ffffff!important;
	}
</style>