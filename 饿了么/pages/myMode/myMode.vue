<template>
	<view id="my_mode" class="my_mode">
		<my-header></my-header>
		<my-vip></my-vip>
		<my-balance></my-balance>
		<my-took></my-took>
		<my-base></my-base>
	</view>
</template>

<script>
	import myHeader  from "@/components/my_header/my_header.vue"
	import myVip  from "@/components/my_vip/my_vip.vue"
	import myBalance  from "@/components/my_balance/my_balance.vue"
	import myTook from "@/components/my_took/my_took.vue"
	import myBase  from "@/components/my_base/my_base.vue"
	
	
	
	
	export default {
		data() {
			return {
				
			};
		},
		components:{
			myHeader,
			myVip,
			myBalance,
			myTook,
			myBase
		}
	}
</script>

<style lang="scss" scoped>
.my_mode{
	margin: 0 20rpx;
}
</style>
