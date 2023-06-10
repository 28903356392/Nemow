<template>
	<view id="my_took" class="my_took">
		<view class="my_took_1">蟾宫工具</view>
		<u-grid  :border="false" col="4" @click="ontook">
			<u-grid-item class="balance_my" v-for="(baseListItem,baseListIndex) in 5" :key="baseListIndex">
				<u-icon  name="photo" :size="30"></u-icon>
				<text class="grid-text" style="font-size: 24rpx;">地址</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		name:"my_took",
		data() {
			return {
				
			};
		},
		methods:{
			ontook(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.my_took{
	margin: 10rpx 0;
	background-color: #ffffff; 
	padding: 20rpx;
	border-radius: 10rpx;
	.balance_my{
		margin: 20rpx 0;
	}
}
</style>