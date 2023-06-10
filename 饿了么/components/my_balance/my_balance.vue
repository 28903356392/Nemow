<template>
	<view id="my_balance" class="my_balance">
		<u-grid :border="false" @click="onclick">
			<u-grid-item class="balance_my" v-for="(baseListItem,baseListIndex) in 3" :key="baseListIndex">
				<u-icon  name="photo" :size="30"></u-icon>
				<view class="balance_view">吃货卡</view>
				<text class="balance_text">5账号那个包</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		name: "my_balance",
		data() {
			return {

			};
		},
		methods:{
			onclick(e){
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my_balance{
		margin-top: -15rpx;
		background-color: #ffffff;
		padding: 30rpx 0;
		border-radius: 15rpx;
		.balance_view{
				font-size: 30rpx;
				font-weight: 600;
			}
		.balance_text{
				font-size: 12rpx;
				color: #C9C9C9;
				
			}
	}

</style>